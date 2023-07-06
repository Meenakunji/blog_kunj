const { FaqLists } = require("../models");

const rTracer = require("cls-rtracer");

const getFaqList = async () => {
  const data = await FaqLists.find().lean();
  return data;
};

module.exports = {
  getFaqList,
};
