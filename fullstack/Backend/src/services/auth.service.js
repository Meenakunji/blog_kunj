const httpStatus = require("http-status");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../models");

const loginWithGoogle = async (token) => {
  try {
    const client = new OAuth2Client(process.env.GOOGLE_CLOUD_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLOUD_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    });

    const payload = ticket.getPayload();
    const userid = payload["sub"];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];

    if (payload.email_verified) {
      const user = await Users.findOne({ email: payload.email });
      if (!user) {
        await Users.create({
          name: payload.name,
          email: payload.email,
          password: bcrypt.hashSync(payload.sub, 8),
          picture: payload.picture,
        });
        const user = await Users.findOne({ email: payload.email });
        if (user) {
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
          return {
            token: token,
            user: user, // Include the user data in the response
          };
        }
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return {
          token: token,
          user: user, // Include the user data in the response
        };
      }
    } else {
      // Handle unauthorized user
      return {
        auth: false,
        message: "User unauthorized",
      };
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  loginWithGoogle,
};
