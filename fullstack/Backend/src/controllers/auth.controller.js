/**
 * @copyright ArtistFirst Technologies Pvt Ltd
 * @author Vinay Singh
 * @version 1.0
 */

const httpStatus = require('http-status');
const { OAuth2Client } = require('google-auth-library');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const CLIENT_ID = '326983461013-r3ej3ecqlon91rc9olrq1fakslq435fn.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
const ApiError = require('../utils/ApiError');
const rTracer = require('cls-rtracer')
const logger = require('../config/logger');
const { isValidURL } = require('../utils/utility');
const { GlobalConfig } = require('../models');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  /** Add ip address of request */
  const sourceIpAddress = req.headers['x-forwarded-for'] || req.ip;
  const tokens = await tokenService.generateAuthTokens(user, sourceIpAddress);
  res.status(httpStatus.CREATED).send({ user, tokens });
});


const loginWithGoogle = catchAsync(async (req, res) => {
  const {id_token} = req.query;
  console.log("Google login api")
  const data = await authService.loginWithGoogle(id_token);
});



module.exports = {
  loginWithGoogle,
};
