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
  },
  {
    timestamps: true,
  }
);

const BlogContent = mongoose.model("jupiter_blog_contents", blogContentSchema);

module.exports = BlogContent;
