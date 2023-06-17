const express = require("express");
const { blogController } = require("../../controllers");
const router = express.Router();

router.route("/content").get(blogController.getBlogContent);

module.exports = router;
