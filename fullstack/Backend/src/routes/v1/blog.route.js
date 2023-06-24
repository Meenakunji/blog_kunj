const express = require("express");
const multer = require("multer");
const upload = multer({ dest: 'tmp/csv/' });

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

//create blog
router.route("/create-blog").post(blogController.createBlog);

//upload file
router.route("/upload-file")
    .post(upload.single('file'),blogController.uploadFiles);

//.post(blogController.uploadFiles);


module.exports = router;
