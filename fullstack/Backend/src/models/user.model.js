const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { Schema } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    password: {
      type: String,
      required: false,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            "Password must contain at least one letter and one number"
          );
        }
      },
    },
    profilePic: {
      type: String,
    },
    followers: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    following: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    followCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.followUser = async function (
  followerUserId,
  userIdToFollow
) {
  // Find the user who is following
  const follower = await this.findById(followerUserId);
  if (!follower) {
    throw new Error("Follower user not found.");
  }

  // Find the user to be followed
  const userToFollow = await this.findById(userIdToFollow);
  if (!userToFollow) {
    throw new Error("User to follow not found.");
  }

  // Check if the user is already followed
  if (follower.following.includes(userIdToFollow)) {
    throw new Error("User is already followed.");
  }

  // Update the follower's following list
  follower.following.push(userIdToFollow);
  await follower.save();

  // Update the user to be followed's followers list
  userToFollow.followers.push(followerUserId);
  await userToFollow.save();

  // Update the follow count for both users
  follower.followCount++;
  await follower.save();

  userToFollow.followCount++;
  await userToFollow.save();

  // You can return any relevant data as per your requirement
  // For example, you can return the updated follower or userToFollow objects
  return {
    follower: follower,
    userToFollow: userToFollow,
  };
};

/**
 * Check if username is taken
 * @param {string} username - The user's username
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isUsernameTaken = async function (username, excludeUserId) {
  const user = await this.findOne({ username, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if normalized email is already registerd
 * @param {string} normalizedEmail - The user's mobile
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isNormalizedEmailTaken = async function (
  normalizedEmail,
  excludeUserId
) {
  const user = await this.findOne({
    normalizedEmail,
    _id: { $ne: excludeUserId },
  });
  return !!user;
};

/**
 * @typedef user
 */

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  const flag = await bcrypt.compare(password, user.password);
  return flag;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const user = mongoose.model("user", userSchema);

module.exports = user;
