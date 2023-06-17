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
    logger.info(
      `Exception :: CMS getBlogContent -> getBlogContent -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

module.exports = {
  getBlogContent,
};
