const { BlogContent, BlogLists } = require("../models");

const rTracer = require("cls-rtracer");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const getBlogContent = async (Parmas) => {
  const query = {
    blogTag: { $regex: Parmas.blogTag, $options: "i" },
  };
  const pipeline = [
    {
      $match: query,
    },
  ];

  const data = await BlogContent.aggregate(pipeline);
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
      $project: {
        name: 1,
        blogTag: 1,
        user: 1,
        image: 1,
        description: 1,
        blogTitle: 1,
        profilepic: 1,
        color: 1,
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

module.exports = {
  getBlogContent,
  createBlogContent,
  createBlog,
  getBlogList,
  getBlogMarked,
  getBlogMarkedList,
};
