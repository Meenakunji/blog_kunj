const { BlogContent, BlogLists } = require("../models");

const rTracer = require("cls-rtracer");

const getBlogContent = async () => {
  const data = await BlogContent.find().lean();
  return data;
};

// get all Blog Lists

const getBlogList = async () => {
  const data = await BlogLists.find().lean();
  return data;
};

const createBlog = async (body) => {
  console.log("Print create-blog API", body);
};

module.exports = {
  getBlogContent,
  createBlog,
  getBlogList,
};
