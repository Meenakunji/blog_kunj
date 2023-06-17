const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');

const router = express.Router();
// router.post('/login-google', validate(authValidation.loginGoogle), authController.loginWithGoogle);
router.post('/login', validate(authValidation.login), authController.loginWithGoogle);

module.exports = router;
