const { BlogContent, BlogLists } = require("../models");

const rTracer = require("cls-rtracer");

const getBlogContent = async () => {
  const data = await BlogContent.find().lean();
  return data;
};

const createBlogContent = async (body) => {
  const {
    name,
    image,
    user,
    blogTag,
    blogTitle,
    description,
    color,
    profilepic,
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
  });
  const createdContent = await data.save();
};

// get all Blog Lists

const getBlogList = async (options) => {
  const pipeline =
    [
      {
        '$sort': {
          'creatAt': options.sortOrder
        }
      }, {
        '$skip': options.skip
      }, {
        '$limit': options.limit
      }
    ]
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

module.exports = {
  getBlogContent,
  createBlogContent,
  createBlog,
  getBlogList,
};
