const express = require("express");
const { homeController } = require("../../controllers");

const router = express.Router();
router.get("/slider-video", homeController.homeSliderVideos);

module.exports = router;
