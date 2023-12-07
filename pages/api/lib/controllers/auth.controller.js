const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { authService, tokenService } = require("../services");

// for google login
const loginWithGoogle = catchAsync(async (req, res) => {
  const { id_token } = req.query;
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
      return res.status(httpStatus.CONFLICT).send({
        code: httpStatus.CONFLICT,
        message: "User already exists",
      });
    }

    let user;
    if (req.body.userId) {
      console.log(
        `User Controller -> updatedUser -> Success : ${req.body.mobile}`
      );
    } else {
      const createdUser = await authService.createUser(req.body);
      user = await authService.getUserById(createdUser._id);
      await authService.updateUserById(user._id, {
        profilePic: `https://avatars.dicebear.com/api/bottts/${user._id}.svg`,
      });
    }

    // Omit the 'password' property from the 'user' object
    const { password, ...userWithoutPassword } = user._doc;

    const tokens = await tokenService.generateAuthTokens(user);
    return res.status(httpStatus.OK).send({
      message: "success",
      data: {
        user: {
          ...userWithoutPassword,
          profilePic: `https://avatars.dicebear.com/api/bottts/${user._id}.svg`,
        },
        tokens: tokens,
      },
    });
  } catch (error) {
    console.log(
      `Exception :: User Controller -> createUser -> ${error.message}`
    );
    return res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
});

// email login
const loginWithEmail = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginWithEmail(email, password);
  const tokens = await tokenService.generateAuthTokens(user);

  // Check if the user has a profile picture, otherwise assign a random one
  let profilePic = user.profilePic;
  if (!profilePic) {
    // Generate a random profile picture URL or use a default one
    profilePic = `https://avatars.dicebear.com/api/bottts/${user._id}.svg`;
    // Alternatively, you can generate a random profile picture using a library or service
    // profilePic = generateRandomProfilePic();
  }

  // Omit the 'password' property from the 'user' object
  const { password: _, ...userWithoutPassword } = user._doc;

  return res.status(httpStatus.OK).send({
    message: "success",
    data: {
      user: { ...userWithoutPassword, profilePic },
      tokens: tokens,
    },
  });
});

module.exports = {
  loginWithGoogle,
  createUser,
  loginWithEmail,
};
