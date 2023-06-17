const { Artists } = require("../models");

const rTracer = require("cls-rtracer");

const getArtists = async () => {
  const data = await Artists.find().lean();
  const newData = [];
  return newData;
};

const loginUser = async (data) => {
  console.log("data", data);
  // const data = await User.findOneandUpdate()
};

module.exports = {
  getArtists,
  loginUser,
};
