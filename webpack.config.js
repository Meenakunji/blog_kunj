const path = require("path");

module.exports = {
  entry: "./pages/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      fs: false,
      zlib: false,
      path: false,
      util: require.resolve("util"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
