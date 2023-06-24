const Joi = require("joi");

const createBlogList = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required(),
    blogTag: Joi.number().required(),
    blogTitle: Joi.number().optional(),
    description: Joi.string().optional(),
    color: Joi.string().optional(),
    profilepic: Joi.string().optional(),
    user: Joi.string().optional(),
  }),
};

module.exports = {
  createBlogList,
};
