const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { authService, tokenService } = require("../services");

// for google login
const loginWithGoogle = catchAsync(async (req, res) => {
  const { id_token } = req.query;
  console.log("Google login api", id_token);
  const user = await authService.loginWithGoogle(id_token);

  const tokens = await tokenService.generateAuthTokens(user);
  return res.status(httpStatus.OK).send({
    message: "success",
    data: { user: user, tokens: tokens },
  });
});

// for signup
const createUser = catchAsync(async (req, res) => {
  console.log(`User Controller -> createUser`);
  try {
    const checkUser = await authService.getUserByEmail(req.body.email);
    console.log("Promptn console check user ===>>>", checkUser);
    if (checkUser) {
      return res
        .status(httpStatus.OK)
        .send({ code: httpStatus.OK, message: "success", data: checkUser });
    }

    let user;
    if (req.body.userId) {
      console.log(
        `User Controller -> updatedUser -> Success : ${req.body.mobile}`
      );
    } else {
      const createdUser = await authService.createUser(req.body);
      user = await authService.getUserById(createdUser._id);
      await authService.updateUserById(user?._id, {
        profilePic: `https://avatars.dicebear.com/api/bottts/${user?._id}.svg`,
      });
    }

    return res.status(httpStatus.CREATED).send({ data: user });
  } catch (error) {
    console.log(
      `Exception :: User Controller -> verifyEmail -> ${error.message}`
    );
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ code: httpStatus.BAD_REQUEST, message: error.message });
  }
});

//email login
const loginWithEmail = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginWithEmail(email, password);
  const tokens = await tokenService.generateAuthTokens(user);

  res.send({ user, tokens });
});
module.exports = {
  loginWithGoogle,
  createUser,
  loginWithEmail,
};
