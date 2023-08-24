const Joi = require("joi");
const { objectId, sortOrder } = require("./custom.validation");

const createComment = {
  params: Joi.object().keys({
    blogId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    blogId: Joi.required().custom(objectId),
    userName: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string().required(),
    createdAt: Joi.date().iso().required(),
    parentCommentId: Joi.optional().custom(objectId),
    type: Joi.string().optional(),
  }),
};

const getBlogCommentList = {
  params: Joi.object().keys({
    blogId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  createComment,
  getBlogCommentList,
};
