const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { ObjectId } = require("mongodb");
const fs = require("fs");
const { commentBlogService } = require("../services");

// create blog comment
const createBlogComment = catchAsync(async (req, res) => {
  try {
    const body = req.body;
    const data = await commentBlogService.createBlogComment(body);
    res
      .status(httpStatus.OK)
      .json({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: Blogweb createBlogComment -> createBlogComment -> ${error.message}`
    );
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error" });
  }
});

// get all comment message list
const getBlogCommentList = catchAsync(async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const data = await commentBlogService.getBlogCommentList(blogId);
    res
      .status(httpStatus.OK)
      .json({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error" });
  }
});

module.exports = {
  createBlogComment,
  getBlogCommentList,
};
