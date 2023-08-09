const { BlogContent, BlogLists, VisitedBlog } = require("../models");

const rTracer = require("cls-rtracer");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const user = require("../models/user.model");

const getBlogContent = async (Params) => {
  const query = {
    blogTag: { $regex: Params.blogTag, $options: "i" },
  };
  const pipeline = [
    {
      $match: query,
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userData",
      },
    },
  ];

  const data = await BlogContent.aggregate(pipeline);

  // Modify the userData to exclude the password field and add a random profilePic if missing
  data.forEach((blog) => {
    blog.userData = blog.userData.map((user) => ({
      ...user,
      password: undefined,
      profilePic:
        user.profilePic ||
        `https://random-profile-photos.com/api/portraits/men/${Math.floor(
          Math.random() * 100
        )}.jpg`,
    }));
  });

  return data;
};

const createBlogContent = async (body, user) => {
  const {
    name,
    image,
    blogTag,
    blogTitle,
    description,
    color,
    profilepic,
    codeSnippet,
    codeLanguage,
  } = body;
  const data = await BlogContent({
    name,
    image,
    blogTag,
    blogTitle,
    description,
    color,
    profilepic,
    user,
    codeSnippet,
    codeLanguage,
  });
  const createdContent = await data.save();
};

// get all Blog Lists
const getBlogList = async (options) => {
  const pipeline = [
    {
      $sort: {
        creatAt: options.sortOrder,
      },
    },
    {
      $skip: options.skip,
    },
    {
      $limit: options.limit,
    },
  ];
  const data = await BlogLists.aggregate(pipeline);
  return data;
};

const createBlog = async (body) => {
  const { name, image, blogTag, blogTitle, description, color } = body;

  // Iterate over the image array and extract the height and width values
  const imageDimensions = image.map((img) => ({
    parentUrl: img.parentUrl,
    width: img.width,
    height: img.height,
  }));

  // Create a new blog instance with the extracted values
  const newBlogList = await new BlogLists({
    name,
    image: imageDimensions,
    blogTag,
    blogTitle,
    description,
    color,
  });
  const newBlogListdata = await newBlogList.save();
};

const getBlogMarked = async (blogId) => {
  // Find the blog content by its ID
  const blogContent = await BlogContent.findById(blogId);

  if (!blogContent) {
    throw new ApiError(httpStatus.NOT_FOUND, "Blog content not found");
  }
  // Toggle the value of isMarkedBlog
  const newIsMarkedValue = !blogContent.isMarkedBlog;

  // Update the blog content
  const updatedBlogContent = await BlogContent.findByIdAndUpdate(
    blogId,
    { $set: { isMarkedBlog: newIsMarkedValue } },
    { new: true }
  );
  return updatedBlogContent;
};

const getBlogMarkedList = async () => {
  const pipeline = [
    {
      $match: {
        isMarkedBlog: true,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userData",
      },
    },
    {
      $project: {
        name: 1,
        blogTag: 1,
        user: 1,
        image: 1,
        description: 1,
        blogTitle: 1,
        profilepic: 1,
        color: 1,
        userData: 1,
      },
    },
  ];

  let data = [];

  try {
    // Assuming BlogContent is a function that executes the pipeline and returns the result
    data = await BlogContent.aggregate(pipeline);
    return data;
    // Process the fetched data or perform any necessary actions
  } catch (error) {
    console.error("Error fetching marked blog data:", error);
    // Handle the error appropriately
  }
};

const getUserBlogList = async (filter) => {
  const pipeline = [
    {
      $match: {
        user: filter.user,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userData",
      },
    },
    {
      $project: {
        name: 1,
        blogTag: 1,
        //  user: 1,
        image: 1,
        description: 1,
        blogTitle: 1,
        profilepic: 1,
        color: 1,
        userData: 1,
        creatAt: 1,
        isMarkedBlog: 1,
      },
    },
  ];

  let data = [];

  try {
    data = await BlogContent.aggregate(pipeline);
    return data;
  } catch (error) {
    console.error("Error fetching marked blog data:", error);
  }
};

const deleteBlogContent = async (blogId) => {
  console.log("Print filter", blogId);
  // Find the blog content by its ID
  const blogContent = await BlogContent.findById(blogId);

  if (!blogContent) {
    throw new ApiError(httpStatus.NOT_FOUND, "Blog content not found");
  }

  // Delete the blog content
  const deleteBlogContent = await BlogContent.findByIdAndDelete(blogId);

  return deleteBlogContent;
};

const getSearchBlogList = async (blogTitle) => {
  try {
    const query = { blogTitle: { $regex: `^${blogTitle}`, $options: "i" } };
    const result = await BlogContent.find(query).exec();

    if (result.length === 0) {
      throw new Error("No matching blogs found");
    }
    return result;
  } catch (error) {
    console.error("Error searching for blogs by title", error);
    throw error; // Re-throw the error to be caught in the controller
  }
};

const updateBlogReadcount = async (blogId, userId) => {
  try {
    const blog = await BlogContent.findById(blogId);

    if (!blog) {
      throw new Error("Blog not found");
    }

    const visitedBlog = await VisitedBlog.findOne({
      userId: userId,
      blogId: blogId,
    });

    if (!visitedBlog) {
      const newVisitedBlog = new VisitedBlog({
        userId,
        blogId,
      });
      await newVisitedBlog.save();

      // Increment the readCount and save
      blog.blogReadCount++;
      await blog.save();
    }

    return blog;
  } catch (error) {
    throw error;
  }
};

const getRecommendationsBlogList = async (req, res) => {
  try {
    const numRecommendations = req.query.num || 5;
    const recommendedBlogIds = await BlogContent.distinct("_id", {
      blogReadCount: { $gt: 0 },
    });

    const recommendedBlogs = await BlogContent.aggregate([
      {
        $match: {
          _id: { $in: recommendedBlogIds },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "userData",
        },
      },
      {
        $sort: {
          blogReadCount: -1,
        },
      },
      {
        $limit: numRecommendations,
      },
    ]);

    return recommendedBlogs;
  } catch (error) {
    throw error;
  }
};

// get recentPost blog
const getRecentBlogList = async (req, res) => {
  try {
    const numRecentBlogs = req.query.num || 3; // Number of recent blogs to return
    const recentBlogs = await BlogContent.find()
      .sort({ createdAt: -1 }) // Sort by creation date in descending order
      .limit(numRecentBlogs);

    return recentBlogs;
  } catch (error) {
    throw error;
  }
};

const getPopularBloggerBlogList = async (req, res) => {
  try {
    const numRecommendations = req.query.num || 30;
    const Project = [
      {
        $sort: {
          followCount: -1,
        },
      },
      {
        $lookup: {
          from: "jupiter_blog_contents",
          localField: "_id",
          foreignField: "user",
          as: "result",
        },
      },
      {
        $limit: numRecommendations,
      },
      {
        $project: {
          name: 1,
          email: 1,
          profilePic: 1,
          followCount: 1,
          result: 1,
        },
      },
    ];
    const popularBloggers = await user.aggregate(Project);

    // Sending the response
    return popularBloggers;
  } catch (error) {
    // Handling errors
    throw error;
  }
};

module.exports = {
  getBlogContent,
  createBlogContent,
  createBlog,
  getBlogList,
  getBlogMarked,
  getBlogMarkedList,
  getUserBlogList,
  deleteBlogContent,
  getSearchBlogList,
  updateBlogReadcount,
  getRecommendationsBlogList,
  getRecentBlogList,
  getPopularBloggerBlogList,
};
