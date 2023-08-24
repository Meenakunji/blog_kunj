const mongoose = require("mongoose");

const replySchema = mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
  },
});

const blogCommentMessageSchema = mongoose.Schema(
  {
    blogId: {
      type: mongoose.SchemaTypes.ObjectId,
    },
    parentCommentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
    type: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    replies: [replySchema],
  },
  {
    timestamps: true,
  }
);

const BlogContent = mongoose.model(
  "jupiter_blog_comment_messsage",
  blogCommentMessageSchema
);

module.exports = BlogContent;
