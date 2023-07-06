const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const rTracer = require("cls-rtracer");
const { homeService } = require("../services");

const homeSliderVideos = catchAsync(async (req, res) => {
  console.log(
    `homeSliderVideos Controller -> homeSliderVideos :: ${rTracer.id()}`
  );
  try {
    const data = await homeService.homeSliderVideos({});
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: blog homeSliderVideos -> homeSliderVideos -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

module.exports = {
  homeSliderVideos,
};
