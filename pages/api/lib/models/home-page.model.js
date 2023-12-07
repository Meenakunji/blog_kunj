const mongoose = require("mongoose");

const homeSliderVideosSchema = mongoose.Schema(
  {
    id: {
      type: String,
    },
    url: {
      type: String,
    },
    message: {
      type: Number,
    },
    description: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const HomeSliderVideos = mongoose.model(
  "jupiter_home_slider_videos",
  homeSliderVideosSchema
);

module.exports = HomeSliderVideos;
