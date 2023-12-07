const express = require("express");
const { userController } = require("../../lib/controllers");
const authMiddleware = require("../../lib/middlewares/authMiddleware");
const router = express.Router();

router
  .route("/follow/:userIdToFollow")
  .post(authMiddleware, userController.followUser);

module.exports = router;
