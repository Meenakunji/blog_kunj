const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");

const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const blogService = require("../services/blog.service");
const rTracer = require("cls-rtracer");
const { paginateQuery } = require("../utils/utility");
const { ObjectId } = require("mongodb");
const fs = require("fs");

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
    const user = req.user;
    const data = await blogService.createBlogContent(body, user);
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
  console.log(req.file);
  imagePath = req.file.path;
  const blob = fs.readFileSync(imagePath);

  const command = new PutObjectCommand({
    Bucket: "jupiter-blog-content-images",
    Key: req.file.originalname,
    Body: blob,
    ContentType: req.file.mimetype,
  });

  try {
    const response = await client.send(command);
    console.log(response);
    // Construct the image URL based on your S3 bucket and the uploaded file's key
    const imageUrl = `https://s3.ap-south-1.amazonaws.com/jupiter-blog-content-images/${req.file.originalname}`;

    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", imageUrl });
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

const getBlogMarkedList = catchAsync(async (req, res) => {
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
});

const getUserBlogList = catchAsync(async (req, res) => {
  let filter = {
    user: new ObjectId(req.query.userId),
  };
  try {
    const data = await blogService.getUserBlogList(filter);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: API getUserBlogList -> getUserBlogList -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const deleteBlogContent = catchAsync(async (req, res) => {
  console.log(
    `deleteBlogContent Controller -> deleteBlogContent :: ${rTracer.id()}`
  );
  try {
    const data = await blogService.deleteBlogContent(req.params.blogId);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: CMS deleteBlogContent -> deleteBlogContent -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getSearchBlogList = catchAsync(async (req, res) => {
  try {
    const data = await blogService.getSearchBlogList(req.query.blog);

    if (data.length === 0) {
      return res.status(httpStatus.NOT_FOUND).send({
        code: httpStatus.NOT_FOUND,
        message: "No matching blogs found",
        data: [],
      });
    }

    res.status(httpStatus.OK).send({
      code: httpStatus.OK,
      message: "success",
      data: data,
    });
  } catch (error) {
    console.log(
      `Exception :: API getSearchBlogList -> getSearchBlogList -> ${
        error.message
      } :: ${rTracer.id()}`
    );

    if (error.message === "No matching blogs found") {
      return res.status(httpStatus.NOT_FOUND).send({
        code: httpStatus.NOT_FOUND,
        message: "No matching blogs found with the given title",
        data: [],
      });
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: "Internal server error",
      data: [],
    });
  }
});

module.exports = {
  getBlogContent,
  createBlogContent,
  createBlog,
  getBlogList,
  uploadFiles,
  getBlogMarked,
  getBlogMarkedList,
  getUserBlogList,
  deleteBlogContent,
  getSearchBlogList,
};
