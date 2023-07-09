const { Users } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const rTracer = require("cls-rtracer");

const createUser = async (name, email, picture) => {
  const data = {
    name: name,
    email: email,
    picture: picture
  }
  return Users.create(data)
}

const findUserByEmail = async(email) => {
  if(email){
    const user = await Users.findOne({email: email})
    return user
  }
  return new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Email not found")
}

module.exports = {
  createUser,
  findUserByEmail,
};
