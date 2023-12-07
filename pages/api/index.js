const mongoose = require("mongoose");
const app = require("./app");
const config = require("./lib/config/config");

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  server = app.listen(config.port, () => {
    console.log(`Listening to port connected ${config.port}`);
  });
});

const unexpectedErrorHandler = (error) => {
  console.log(error);
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});
