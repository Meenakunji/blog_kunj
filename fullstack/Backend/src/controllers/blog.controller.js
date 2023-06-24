const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const blogService = require("../services/blog.service");
const rTracer = require("cls-rtracer");

const getBlogContent = catchAsync(async (req, res) => {
  console.log(`getBlogContent Controller -> getBlogContent :: ${rTracer.id()}`);
  try {
    const data = await blogService.getBlogContent({});
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: CMS getBlogContent -> getBlogContent -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const createBlogContent = catchAsync(async (req, res) => {
  console.log(
    `createBlogContent Controller -> createBlogContent :: ${rTracer.id()}`
  );
  try {
    const body = req.body;
    const data = await blogService.createBlogContent(body);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: CMS createBlogContent -> createBlogContent -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const createBlog = catchAsync(async (req, res) => {
  console.log(`createBlog Controller -> createBlog :: ${rTracer.id()}`);
  try {
    const body = req.body;
    const data = await blogService.createBlog(body);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: CMS createBlog -> createBlog -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getBlogList = catchAsync(async (req, res) => {
  console.log(`getBlogList Controller -> getBlogList :: ${rTracer.id()}`);
  try {
    const data = await blogService.getBlogList();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: CMS getBlogList -> getBlogList -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

module.exports = {
  getBlogContent,
  createBlogContent,
  createBlog,
  getBlogList,
};
