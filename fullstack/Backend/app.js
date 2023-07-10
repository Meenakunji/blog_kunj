const express = require("express");
const helmet = require("helmet");
// const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const config = require("./src/config/config");
const routes = require("./src/routes/v1");
const ApiError = require("./src/utils/ApiError");
const rTracer = require("cls-rtracer");

const app = express();

app.use(rTracer.expressMiddleware());

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
// app.use(xss());
app.use(mongoSanitize());

/** Ping endpoint */
app.get("/", (req, res) => {
  res.send("Hello from server!");
});

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  // Check if the request accepts JSON responses
  if (req.accepts("json")) {
    // Respond with JSON error
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      error: err.statusCode,
      message: err.message || "Internal Server Error",
    });
  } else {
    // Fall back to default error handling behavior (e.g., render HTML error page)
    next(err);
  }
});

module.exports = app;
