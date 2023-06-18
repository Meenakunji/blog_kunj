const express = require("express");
const { blogController } = require("../../controllers");
const router = express.Router();

router.route("/content").get(blogController.getBlogContent);
router.route("/create-blog").post(blogController.createBlog)

// get Blog Type List
router.route("/list").get(blogController.getBlogList);

module.exports = router;
