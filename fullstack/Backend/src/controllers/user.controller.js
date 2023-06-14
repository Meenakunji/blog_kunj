const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");
const rTracer = require("cls-rtracer");

const getArtists = catchAsync(async (req, res) => {
  console.log(`user Controller -> getArtists :: ${rTracer.id()}`);

  try {
    const data = await userService.getArtists({});
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    console.log(
      `Exception :: user Controller -> getArtists -> ${
        error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

module.exports = {
  getArtists,
};
