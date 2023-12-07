const mongoose = require("mongoose");

const blogContentSchema = mongoose.Schema(
  {
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    sequence: {
      type: Number,
    },
    created_by_id: {
      type: Number,
    },
    updated_by_id: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const BlogContent = mongoose.model("jupiter_blog_faqs", blogContentSchema);

module.exports = BlogContent;
