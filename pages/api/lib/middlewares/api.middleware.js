const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const config = require("../config/config");
const rTracer = require("cls-rtracer");
const { Users } = require("../models");
const mongoose = require("mongoose");

const VerifyUser = async (req, res, next) => {
  const bearerHeader = req.header("Authorization");
  res.set("x-bh-id", bearerHeader);
  if (!bearerHeader)
    return next(
      new ApiError(httpStatus.BAD_REQUEST, "Authorization token is missing")
    );

  const bearerToken = bearerHeader.split(" ")[1];
  if (!bearerToken)
    return next(
      new ApiError(httpStatus.BAD_REQUEST, "Authorization token is missing")
    );

  try {
    const bearerTokenDoc = jwt.verify(bearerToken, config.jwt.secret);
    if (!bearerTokenDoc || !bearerTokenDoc.sub) {
      return next(
        new ApiError(httpStatus.FORBIDDEN, "Invalid authentication token")
      );
    }
    const id = new mongoose.Types.ObjectId(bearerTokenDoc.sub);
    const user = await Users.findOne({ _id: id }).lean();
    if (!user)
      return next(
        new ApiError(httpStatus.FORBIDDEN, "Invalid authentication token")
      );

    /** Add auth Id and trace Id in response header */
    res.set("x-ft-id", bearerTokenDoc.sub);
    res.set("x-trace-id", rTracer.id());

    req.user = bearerTokenDoc.sub;
  } catch (error) {
    return next(new ApiError(httpStatus.UNAUTHORIZED, error));
  }
  return next();
};

module.exports = { VerifyUser };
