const express = require("express");
const { validate } = require("../../lib//middlewares/validate");
const authValidation = require("../../lib/validations/auth.validation");
const authController = require("../../lib/controllers/auth.controller");

const router = express.Router();
// router.post('/login-google', validate(authValidation.loginGoogle), authController.loginWithGoogle);
router.post("/login-google", authController.loginWithGoogle);

router.post("/login-email", authController.loginWithEmail);

router.post(
  "/user-signup",
  validate(authValidation.createUser),
  authController.createUser
);

module.exports = router;
