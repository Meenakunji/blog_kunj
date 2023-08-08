const mongoose = require("mongoose");

const visitedBlogSchema = new mongoose.Schema({
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

const VisitedBlog = mongoose.model("VisitedBlog", visitedBlogSchema);

module.exports = VisitedBlog;
