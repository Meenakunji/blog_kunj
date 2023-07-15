const express = require("express");
const { userController } = require("../../controllers");
const authMiddleware = require("../../middlewares/authMiddleware");
const router = express.Router();

router
  .route("/follow/:userIdToFollow")
  .post(authMiddleware, userController.followUser);

module.exports = router;
