const httpStatus = require("http-status");
const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const followUser = catchAsync(async (req, res) => {
  const { userIdToFollow } = req.params;
  const followerUserId = req.user.sub;

  // Call the user service to follow/unfollow the user
  const result = await userService.followUser(followerUserId, userIdToFollow);

  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    message: result.isFollowing
      ? "Successfully followed the user."
      : "Successfully unfollowed the user.",
    data: result,
  });
});

module.exports = {
  followUser,
};
