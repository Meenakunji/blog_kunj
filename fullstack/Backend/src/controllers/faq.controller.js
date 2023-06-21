const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const rTracer = require("cls-rtracer");
const { faqService } = require("../services");

const getFaqList = catchAsync(async (req, res) => {
  console.log(`getFaqList Controller -> getFaqList :: ${rTracer.id()}`);
  try {
    const data = await faqService.getFaqList({});
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: CMS getFaqList -> getFaqList -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

module.exports = {
  getFaqList,
};
