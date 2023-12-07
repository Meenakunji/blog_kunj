const express = require("express");
const { blogController, commentController } = require("../../lib/controllers");
const multer = require("multer");
const upload = multer({ dest: "tmp/csv/" });
const { validate } = require("../../lib/middlewares/validate");
const { VerifyUser } = require("../../lib/middlewares/api.middleware");
const { blogValidation, commentValidation } = require("../../lib/validations");
const router = express.Router();

router.route("/content").get(blogController.getBlogContent);

router
  .route("/create-blog-content")
  .post(VerifyUser, blogController.createBlogContent);

router.route("/create-blog-list").post(blogController.createBlog);

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
router
  .route("/bookmark-blog-list")
  .get(VerifyUser, blogController.getBlogMarkedList);

/*user blog list */
router.route("/user-blog-list").get(VerifyUser, blogController.getUserBlogList);

// blog delete
router.route("/delete/:blogId").post(blogController.deleteBlogContent);

// blog search API list
router.route("/search").get(blogController.getSearchBlogList);

// blog search API list
router.route("/read-count/:blogId").post(
  (req, res, next) => {
    // Check if an authentication token is provided
    const authToken = req.headers.authorization;

    if (authToken) {
      // If an authentication token is provided, call VerifyUser middleware
      VerifyUser(req, res, next);
    } else {
      // If no authentication token is provided, proceed without VerifyUser middleware
      next();
    }
  },
  validate(blogValidation.blogMarked),
  blogController.updateBlogReadcount
);

//Blog recommendtion List API
router.route("/recommendations").get(blogController.getRecommendationsBlogList);

// Popular Blogger Blog List
router.route("/popular-blogger").get(blogController.getPopularBloggerBlogList);

//recently Uploaded Blog list
router.route("/recent-blogs").get(blogController.getRecentBlogList);

// get all Blog Content
router.route("/blog-contents").get(blogController.getAllBlogList);

// popular-tags
router.route("/popular-tags").get(blogController.getPopularTags);

// Comment APi for a blog
// 1.) get all blog CommentList
router
  .route("/comments/:blogId")
  .get(
    validate(commentValidation.getBlogCommentList),
    commentController.getBlogCommentList
  );

// 2.) create a Comment
router
  .route("/comments/:blogId")
  .post(
    validate(commentValidation.createComment),
    commentController.createBlogComment
  );

// 3.) Update Comment API
router
  .route("/comments/:commentId")
  .patch(
    validate(commentValidation.updateBlogCommentMessage),
    commentController.updateBlogCommentMessage
  );

// 4.) comment message Delete API
router
  .route("/comments/:commentId")
  .delete(
    validate(commentValidation.deletBlogCommentMessage),
    commentController.deletBlogCommentMessage
  );

// 1.) Blog Report API
router.route("/report").post(
  (req, res, next) => {
    const authToken = req.headers.authorization;

    if (authToken) {
      VerifyUser(req, res, next);
    } else {
      next();
    }
  },
  validate(commentValidation.userBlogReport),
  commentController.userBlogReport
);

// clap or blog like count
router.route("/like/:blogId").post(
  (req, res, next) => {
    const authToken = req.headers.authorization;

    if (authToken) {
      VerifyUser(req, res, next);
    } else {
      next();
    }
  },
  validate(blogValidation.blogMarked),
  blogController.blogLikeCount
);

// blog search based on blog title match

router
  .route("/searchbytitle")
  .get(
    validate(blogValidation.getBlogBasedOnTitle),
    blogController.getBlogBasedOnTitle
  );

module.exports = router;
