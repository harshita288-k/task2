var express = require('express');
const RegisterController = require('../Controllers/Auth/RegisterController');
const LoginController = require('../Controllers/Auth/LoginController');
const ResetPasswordController = require('../Controllers/Auth/ResetPasswordController');

const router = express.Router();

router.post("/register",RegisterController)
router.post("/login",LoginController)
router.post("/reset-password",ResetPasswordController)

module.exports = router