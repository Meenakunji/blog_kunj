const Joi = require("joi");
const { objectId, password } = require("./custom.validation");

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
    userId: Joi.string().custom(objectId),
  }),
};

const loginGoogle = {
  body: Joi.object().keys({
    id_token: Joi.string().required(),
    referralCode: Joi.string().optional(),
    utm: Joi.object()
      .keys({
        campaign: Joi.string().optional(),
        medium: Joi.string().optional(),
        source: Joi.string().optional(),
      })
      .optional(),
    deviceId: Joi.string().optional(),
    userId: Joi.string().custom(objectId),
  }),
};

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid("user", "admin"),
    token: Joi.string().optional(),
    location: Joi.object().optional(),
    // userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  login,
  loginGoogle,
  createUser,
};
