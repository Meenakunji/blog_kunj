const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "tmp/csv/" });
const { blogController } = require("../../controllers");
const { validate } = require("../../middlewares/validate");
const { blogValidation } = require("../../validations");
const router = express.Router();

router.route("/content").get(blogController.getBlogContent);
router.route("/create-blog-content").post(blogController.createBlogContent);

router
  .route("/create-blog-list")
  //   .post(validate(blogValidation.createBlogList), blogController.createBlog);
  .post(blogController.createBlog);

// get Blog Type List
router
  .route("/list")
  .get(validate(blogValidation.getBlogList), blogController.getBlogList);

//create blog
router.route("/create-blog").post(blogController.createBlog);

//upload file
router
  .route("/upload-file")
  .post(upload.single("file"), blogController.uploadFiles);

// blog mark
router
  .route("/mark/:blogId")
  .post(validate(blogValidation.blogMarked), blogController.getBlogMarked);

// blog mark
router.route("/bookmark-blog-list").get(blogController.getBlogMarkedList);
module.exports = router;
