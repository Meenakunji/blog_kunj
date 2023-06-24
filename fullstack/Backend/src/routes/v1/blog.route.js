const express = require("express");
const { blogController } = require("../../controllers");
const { validate } = require("../../models/blog-content.model");
const { blogValidation } = require("../../validations");
const router = express.Router();

router.route("/content").get(blogController.getBlogContent);
router.route("/create-blog-content").post(blogController.createBlogContent);

router
  .route("/create-blog-list")
  //   .post(validate(blogValidation.createBlogList), blogController.createBlog);
  .post(blogController.createBlog);

// get Blog Type List
router.route("/list").get(blogController.getBlogList);

module.exports = router;
