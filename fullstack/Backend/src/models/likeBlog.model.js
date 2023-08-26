const mongoose = require("mongoose");

const likeBlogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  blogId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "BlogContent",
    required: true,
  },
});

const LikeBlog = mongoose.model("LikeBlog", likeBlogSchema);

module.exports = LikeBlog;
