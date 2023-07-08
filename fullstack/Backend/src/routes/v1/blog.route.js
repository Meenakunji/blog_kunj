const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "tmp/csv/" });
const { blogController } = require("../../controllers");
const { validate } = require("../../middlewares/validate");
const {VerifyUser} = require('../../middlewares/api.middleware')
const { blogValidation } = require("../../validations");
const router = express.Router();

router.route("/content").get(VerifyUser,blogController.getBlogContent);
router.route("/create-blog-content").post(blogController.createBlogContent);

router
  .route("/create-blog-list")
  .post(blogController.createBlog);

// get Blog Type List
router
  .route("/list")
  .get(validate(blogValidation.getBlogList), VerifyUser, blogController.getBlogList);

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
