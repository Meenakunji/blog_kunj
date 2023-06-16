const express = require("express");
const { userController } = require("../../controllers");
const router = express.Router();

router.route("/artist").get(userController.getArtists);

router.route("/login").post(userController.loginUser);

module.exports = router;
