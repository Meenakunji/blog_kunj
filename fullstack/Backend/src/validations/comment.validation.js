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

const updateBlogCommentMessage = {
  params: Joi.object().keys({
    commentId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    message: Joi.string().required(),
    type: Joi.string().required(),
    replyId: Joi.optional().custom(objectId),
  }),
};

const deletBlogCommentMessage = {
  params: Joi.object().keys({
    commentId: Joi.required().custom(objectId),
  }),
  query: Joi.object().keys({
    type: Joi.string().required(),
  }),
};

module.exports = {
  createComment,
  getBlogCommentList,
  updateBlogCommentMessage,
  deletBlogCommentMessage,
};
