const { ObjectId } = require("mongodb");
const { BlogCommentMessages, BlogContent } = require("../models");
const Filter = require("bad-words");
const filter = new Filter();

const createBlogComment = async (body) => {
  let { blogId, userName, email, message, createdAt, parentCommentId, type } =
    body;

  // Check if the message contains offensive words
  if (filter.isProfane(message)) {
    // Replace offensive words with asterisks
    message = filter.clean(message);
  }

  if (type === "comment") {
    // Create a new parent comment
    parentCommentId = new ObjectId();

    const parentComment = new BlogCommentMessages({
      blogId,
      userName,
      email,
      message,
      createdAt,
      parentCommentId,
      type: "comment",
      replies: [],
    });

    const createdParentComment = await parentComment.save();
    return createdParentComment;
  } else if (type === "reply" && parentCommentId) {
    // Use the provided parentCommentId for replies
    try {
      const filter = { parentCommentId: new ObjectId(parentCommentId) };
      const update = {
        $push: {
          replies: {
            userName,
            email,
            message,
            createdAt,
            type: "reply",
          },
        },
      };

      const result = await BlogCommentMessages.updateOne(filter, update);

      if (result.nModified > 0) {
        // Update was successful
        const updatedParentComment = await BlogCommentMessages.findOne(filter);
        return updatedParentComment;
      } else {
        console.log("No parent comment updated. Check parentCommentId.");
      }
    } catch (error) {
      throw error;
    }
  }

  return null;
};

const getBlogCommentList = async (blogId) => {
  const result = await BlogCommentMessages.aggregate([
    {
      $match: {
        blogId: new ObjectId(blogId),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "email",
        foreignField: "email",
        as: "result",
      },
    },
    {
      $project: {
        userName: 1,
        message: 1,
        replies: 1,
        type: 1,
        createdAt: 1,
        updatedAt: 1,
        email: 1,
        blogId: 1,
        result: 1,
      },
    },
  ]);
  return result;
};

// updated comment and comment reply messages
const updateBlogCommentMessage = async (commentId, message, type, replyId) => {
  try {
    const filter = { _id: commentId };

    let update;

    if (replyId) {
      // Update a specific reply message
      update = { $set: { "replies.$[reply].message": message } };
    } else if (type === "comment") {
      // Update parent comment message
      update = { $set: { message } };
    } else {
      throw new Error("Invalid message type");
    }

    const options = replyId
      ? { new: true, arrayFilters: [{ "reply._id": replyId }] }
      : { new: true };

    const updatedComment = await BlogCommentMessages.findOneAndUpdate(
      filter,
      update,
      options
    );

    if (updatedComment) {
      return updatedComment;
    } else {
      throw new Error("Comment not found");
    }
  } catch (error) {
    throw error;
  }
};

// delete reply Message or comment message
const deletBlogCommentMessage = async (commentId, type) => {
  try {
    if (type === "comment") {
      // Delete the entire comment
      const deletedComment = await BlogCommentMessages.findOneAndDelete({
        _id: commentId,
      });
      if (deletedComment) {
        return { message: "Comment deleted successfully" };
      } else {
        throw new Error("Comment not found");
      }
    } else if (type === "reply") {
      // Delete a specific reply in the replies array
      const replyId = commentId;

      const updatedComment = await BlogCommentMessages.findOneAndUpdate(
        { "replies._id": replyId }, // Find comment with matching reply
        { $pull: { replies: { _id: replyId } } }, // Pull the reply from replies
        { new: true }
      );
      if (updatedComment) {
        return { message: "Reply deleted successfully" };
      } else {
        throw new Error("Comment or reply not found");
      }
    } else {
      throw new Error("Invalid message type");
    }
  } catch (error) {
    console.error("Error deleting comment:", error.message);
    throw error;
  }
};

const userBlogReport = async (body) => {
  try {
    const { blogId, userId, message } = body;
    // Find the blog content by its ID (assuming you have a BlogContent model)
    const blog = await BlogContent.findById(blogId).exec();

    if (!blog) {
      throw new Error("Blog not found");
    }

    blog.blogReport = {
      blockUserID: userId,
      report: true,
      message: message,
    };

    // Save the updated blog
    await blog.save();
    // Return a success message or any other data you need
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBlogComment,
  getBlogCommentList,
  updateBlogCommentMessage,
  deletBlogCommentMessage,
  userBlogReport,
};
