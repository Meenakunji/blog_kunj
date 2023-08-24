const { ObjectId } = require("mongodb");
const { BlogCommentMessages } = require("../models");

const createBlogComment = async (body) => {
  let { blogId, userName, email, message, createdAt, parentCommentId, type } =
    body;

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
      $project: {
        userName: 1,
        message: 1,
        replies: 1,
        type: 1,
        createdAt: 1,
        updatedAt: 1,
        email: 1,
        blogId: 1,
      },
    },
  ]);
  return result;
};

module.exports = {
  createBlogComment,
  getBlogCommentList,
};
