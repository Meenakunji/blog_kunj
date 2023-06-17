const { BlogContent } = require("../models");

const rTracer = require("cls-rtracer");

const getBlogContent = async () => {
  const data = await BlogContent.find().lean();
  console.log(data);
  // return data;
};

module.exports = {
  getBlogContent,
};
