const httpStatus = require("http-status");
const { OAuth2Client } = require("google-auth-library");
const catchAsync = require("../utils/catchAsync");
const {
  authService,
  userService,
  tokenService,
  emailService,
} = require("../services");
const CLIENT_ID =
  "326983461013-r3ej3ecqlon91rc9olrq1fakslq435fn.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);
const ApiError = require("../utils/ApiError");
const logger = require("../config/logger");
const { isValidURL } = require("../utils/utility");
const { GlobalConfig } = require("../models");

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  /** Add ip address of request */
  const sourceIpAddress = req.headers["x-forwarded-for"] || req.ip;
  const tokens = await tokenService.generateAuthTokens(user, sourceIpAddress);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const loginWithGoogle = catchAsync(async (req, res) => {
  const { id_token } = req.query;
  console.log("Google login api", id_token);
  const { token, user } = await authService.loginWithGoogle(id_token);

  // return res.send({
  //   auth: true,
  //   token: token,
  //   user: user, // Include the user data in the response
  // });

  return res.status(httpStatus.OK).send({
    code: httpStatus.OK,
    message: "success",
    data: { auth: true, token: token, user: user },
  });
});

const createUser = catchAsync(async (req, res) => {
  console.log(`User Controller -> createUser `);
  try {
    const checkUser = await authService.getUserByEmail(req.body.email);
    if (checkUser) return res.status(httpStatus.CONFLICT).send(checkUser);
    let user;

    if (req.body.userId) {
      console.log(`User Controller -> updatedUser -> Success : ${user.mobile}`);
    } else {
      /** Add ip address to req body */
      req.body.ipAddress = req.headers["x-forwarded-for"] || req.ip;
      // user.profilePic = `https://avatars.dicebear.com/api/bottts/${user?._id}.svg`;

      await authService.updateUserById(user?._id, {
        profilePic: `https://avatars.dicebear.com/api/bottts/${user?._id}.svg`,
      });
    }

    user.isFirstLogin = true;
    return res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    console.log(
      `Exception :: User Controller -> verifyEmail -> ${error.message}}`
    );
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ code: httpStatus.BAD_REQUEST, message: error.message });
  }
});

module.exports = {
  loginWithGoogle,
  createUser,
};
