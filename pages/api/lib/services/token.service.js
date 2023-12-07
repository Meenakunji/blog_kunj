const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config/config');
const { tokenTypes } = require('../config/tokens.js');
const {Token} = require("../models")

const generateAuthTokens = async (user) => {
    console.log(user)
    const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
    const accessToken = generateToken(user._id, accessTokenExpires, tokenTypes.ACCESS);
  
    const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
    const refreshToken = generateToken(user._id, refreshTokenExpires, tokenTypes.REFRESH);
    await saveToken(refreshToken, user._id, refreshTokenExpires, tokenTypes.REFRESH, false);
  
    return {
      access: {
        token: accessToken,
        expires: accessTokenExpires.toDate(),
      },
      refresh: {
        token: refreshToken,
        expires: refreshTokenExpires.toDate(),
      },
    };
};
const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

const saveToken = async (token, userId, expires, type) => {
    const tokenDoc = await Token.create({
      token,
      user: userId,
      expires: expires.toDate(),
      type
    });
    return tokenDoc;
  };

  module.exports = {generateAuthTokens}