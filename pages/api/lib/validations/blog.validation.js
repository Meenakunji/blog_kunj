const Joi = require("joi");
const { objectId } = require("./custom.validation");

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

const getBlogList = {
  query: Joi.object().keys({
    sortOrder: Joi.number().valid(-1, 1).optional().default(1),
    limit: Joi.number().optional().default(10),
    page: Joi.number().optional().default(0),
  }),
};

const blogMarked = {
  params: Joi.object().keys({
    blogId: Joi.required().custom(objectId),
  }),
};

const getBlogBasedOnTitle = {
  query: Joi.object().keys({
    title: Joi.string().required(), // Define the title parameter
    // sortOrder: Joi.number().valid(-1, 1).optional().default(1),
    // limit: Joi.number().optional().default(10),
    // page: Joi.number().optional().default(0),
  }),
};

module.exports = {
  createBlogList,
  getBlogList,
  blogMarked,
  getBlogBasedOnTitle,
};
