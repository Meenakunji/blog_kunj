const httpStatus = require("http-status");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users, DisposableDomain } = require("../models");
const ApiError = require("../utils/ApiError");
const {
  getNormalizedEmail,
  generateRandomNumber,
} = require("../utils/utility");
const {userService} = require("../services")


const loginWithGoogle = async (token) => {
    const client = new OAuth2Client(process.env.GOOGLE_CLOUD_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLOUD_CLIENT_ID,
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

const getUsername = async (name = "") => {
  const nameArray = name.split(" ");
  let userName = nameArray[0] + generateRandomNumber();

  if (!(await Users.isUsernameTaken(userName))) {
    return userName;
  }

  userName = nameArray[0] + generateRandomNumber(5);

  if (!(await Users.isUsernameTaken(userName))) {
    return userName;
  }

  const userCount = await Users.aggregate([
    {
      $match: {
        name: { $ne: ["Guest User", "guest user"] },
        isEmailVerified: true,
      },
    },
    {
      $project: {
        firstname: { $arrayElemAt: [{ $split: ["$name", " "] }, 0] },
      },
    },
    { $group: { _id: "$firstname", count: { $sum: 1 } } },
    { $match: { _id: nameArray[0] } },
  ]);

  if (userCount.length === 0) {
    return nameArray[0] + "1000";
  }

  return nameArray[0] + (1001 + userCount[0].count);
};

const createUser = async (userBody) => {
  console.log(`User Service -> createUser`);

  if (userBody.email) {
    const normalizedEmail = getNormalizedEmail(userBody.email);

    if (await Users.isNormalizedEmailTaken(normalizedEmail)) {
      throw new ApiError(
        httpStatus.CONFLICT,
        "This email is already registered with us!"
      );
    }

    userBody.normalizedEmail = normalizedEmail;
    userBody.emailDomain = userBody.email.split("@")[1];

    const domain = await DisposableDomain.findOne({
      domain: userBody.emailDomain,
    });

    userBody.diposableDomainStatus = domain ? (domain.isDisposable ? 1 : 0) : 2;
  }

  userBody.isWithdrawlAllowed =
    !userBody.diposableDomainStatus || userBody.diposableDomainStatus === 0;
  userBody.username = await getUsername(userBody.name || userBody.mobile);

  if (userBody.diposableDomainStatus === 1) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Please try again later!");
  }

  return Users.create(userBody);
};

const getUserById = async (id) => {
  console.log(`User Service -> getUserById`);
  return Users.findOne({ _id: id, deletedAt: null }).exec();
};

const getUserByEmail = async (email) => {
  console.log(`User Service -> getUserByEmail`, email);
  return Users.findOne({ email }).exec();
};

const updateUserById = async (userId, updateBody) => {
  console.log(`User Service -> updateUserById`);

  const user = await getUserById(userId);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  if (
    updateBody.email &&
    (await Users.isEmailTaken(updateBody.email, userId))
  ) {
    throw new ApiError(httpStatus.CONFLICT, "Email already taken");
  }

  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const loginWithEmail = async (email, password) => {
  const user = await userService.findUserByEmail(email)
  if(!user || !(await user.isPasswordMatch(password)))
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid email or password')
  return user
}

module.exports = {
  loginWithGoogle,
  getUserByEmail,
  createUser,
  updateUserById,
  loginWithEmail,
};
