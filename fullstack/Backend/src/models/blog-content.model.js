const mongoose = require("mongoose");
// const { paginate } = require("./plugins");

const blogContentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    blogTag: {
      type: String,
    },
    blogTitle: {
      type: String,
    },
    user: {
      type: String,
    },
    profilepic: {
      type: String,
    },
    creatAt: {
      type: String,
    },
  }
  // {
  //   timestamps: true,
  // }
);

// blogContentSchema.plugin(paginate);

/**
 * @typedef Blog
 */
const BlogContent = mongoose.model("jupiter_blog_content", blogContentSchema);

module.exports = BlogContent;
