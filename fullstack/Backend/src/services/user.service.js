const { Users } = require("../models");

const followUser = async (followerUserId, userIdToFollow) => {
  // Find the user who is following
  const follower = await Users.findById(followerUserId).select(
    "-password -createdAt -updatedAt"
  );
  if (!follower) {
    throw new Error("Follower user not found.");
  }

  // Find the user to be followed
  const userToFollow = await Users.findById(userIdToFollow).select(
    "-password -createdAt -updatedAt"
  );
  if (!userToFollow) {
    throw new Error("User to follow not found.");
  }

  // Check if the user is already followed
  const isFollowing = follower.following.includes(userIdToFollow);

  if (isFollowing) {
    // Unfollow the user
    follower.following = follower.following.filter(
      (followedUserId) => followedUserId.toString() !== userIdToFollow
    );

    // Remove the follower from the userToFollow's followers list
    userToFollow.followers = userToFollow.followers.filter(
      (followerId) => followerId.toString() !== followerUserId
    );

    // Decrease the follower count of the userToFollow
    userToFollow.followCount -= 1;
  } else {
    // Follow the user
    follower.following.push(userIdToFollow);

    // Add the follower to the userToFollow's followers list
    userToFollow.followers.push(followerUserId);

    // Increase the follower count of the userToFollow
    userToFollow.followCount += 1;
  }

  await Promise.all([follower.save(), userToFollow.save()]);

  // Return the updated user data, or any other relevant data as needed
  return {
    follower: follower,
    userToFollow: userToFollow,
    isFollowing: !isFollowing, // Return a boolean indicating if the user is now following or unfollowing
  };
};

module.exports = {
  followUser,
};
