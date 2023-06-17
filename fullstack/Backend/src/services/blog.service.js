const { BlogContent } = require("../models");

const rTracer = require("cls-rtracer");

const getBlogContent = async () => {
  const data = await BlogContent.find().lean();
  return data;
};

const createBlog = async (body) => {
  console.log("Print create-blog API", body);
};

module.exports = {
  getBlogContent,
  createBlog,
};
