const express = require("express");
const { blogController } = require("../lib/controllers");

const router = express.Router();

router.route("/content").get(blogController.getBlogContent);

module.exports = router;
