const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");

const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const blogService = require("../services/blog.service");
const rTracer = require("cls-rtracer");
const { paginateQuery } = require("../utils/utility");
const { objectId } = require("../validations/custom.validation");

const getBlogContent = catchAsync(async (req, res) => {
  console.log(`getBlogContent Controller -> getBlogContent :: ${rTracer.id()}`);
  try {
    const data = await blogService.getBlogContent(req.query);
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

//paginate it
const getBlogList = catchAsync(async (req, res) => {
  console.log(`getBlogList Controller -> getBlogList :: ${rTracer.id()}`);
  try {
    const paginateOptions = paginateQuery(req.query);
    const data = await blogService.getBlogList(paginateOptions);
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

const uploadFiles = catchAsync(async (req, res) => {
  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: "ap-south-1",
  });
  const command = new PutObjectCommand({
    Bucket: "jupiter-blog-content-images",
    Key: req.file.originalname,
  });

  try {
    const response = await client.send(command);
    console.log(response);
    res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success" });
  } catch (err) {
    console.error(err);
  }
});

/* Blog Marked  */
const getBlogMarked = catchAsync(async (req, res) => {
  try {
    const data = await blogService.getBlogMarked(req.params.blogId);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: CMS getBlogMarked -> getBlogMarked -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getBlogMarkedList = catchAsync (async (req, res)=> {
  try {
    const data = await blogService.getBlogMarkedList();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: CMS getBlogMarkedList -> getBlogMarkedList -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
})

module.exports = {
  getBlogContent,
  createBlogContent,
  createBlog,
  getBlogList,
  uploadFiles,
  getBlogMarked,
  getBlogMarkedList,
};
