const { FaqLists } = require("../models");

const rTracer = require("cls-rtracer");

const getFaqList = async () => {
  const data = await FaqLists.find().lean();
  console.log("Print data vale list=====>>>>>>", rTracer.id());
  return data;
};

module.exports = {
  getFaqList,
};
