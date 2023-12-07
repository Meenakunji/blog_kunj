const mongoose = require("mongoose");

const blogContentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    blogTag: {
      type: String,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
    },
    blogTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    color: {
      type: String,
    },
    profilepic: {
      type: String,
    },
    isMarkedBlog: {
      type: Boolean,
      default: false,
    },
    codeSnippet: {
      type: String,
    },
    codeLanguage: {
      type: String,
      enum: ["html", "css", "python", "java", "php", "javascript", "go"],
      default: "javascript",
    },
    blogReadCount: {
      type: Number,
      default: 0,
    },
    blogLike: {
      type: Number,
      default: 0,
    },
    blogReport: {
      blockUserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
      },
      report: {
        type: Boolean,
        default: false,
      },
      message: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const BlogContent = mongoose.model("jupiter_blog_contents", blogContentSchema);

module.exports = BlogContent;
