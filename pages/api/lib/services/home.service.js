const { HomeSliderVideos } = require("../models");

const rTracer = require("cls-rtracer");

const homeSliderVideos = async () => {
  const data = await HomeSliderVideos.find().lean();
  //   console.log("data=====>>>>", data);
  return data;
};

module.exports = {
  homeSliderVideos,
};
