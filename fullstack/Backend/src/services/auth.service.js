const httpStatus = require("http-status");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../models");
const {userService} = require("../services")
const ApiError = require("../utils/ApiError");


const loginWithGoogle = async (token) => {
    const client = new OAuth2Client(process.env.GOOGLE_CLOUD_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLOUD_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    });

    const payload = ticket.getPayload();
    if (!payload.email_verified) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Email not verified')
    }
    const user = await userService.findUserByEmail( payload.email );
      if (!user) {
        return userService.createUser(payload.name, payload.email, payload.picture)
      } else {
        return user
      }  
};

module.exports = {
  loginWithGoogle,
};
