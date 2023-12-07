const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  parentUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^https?:\/\/\S+$/.test(value),
      message: "Invalid URL format",
    },
  },
  width: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "Width must be an integer",
    },
  },
  height: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "Height must be an integer",
    },
  },
});

const BlogListSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: [ImageSchema],
      required: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "At least one image is required",
      },
    },
    blogTag: {
      type: String,
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
  },
  {
    timestamps: true,
  }
);

const BlogList = mongoose.model("jupiter_blog_lists", BlogListSchema);

module.exports = BlogList;
