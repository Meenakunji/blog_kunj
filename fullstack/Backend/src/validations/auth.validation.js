const Joi = require('joi');
const { objectId } = require('./custom.validation');



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




module.exports = {
  login,
  loginGoogle,
};
