const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const checkAvailableEmail = require('../../middlewares/checkAvailableEmail');
const userValidations = require('../../validations/userValidations');
const authController = require('../../controllers/authController');
const checkAuthData = require('../../middlewares/checkAuthData');
const loginValidations = require('../../validations/loginValidations');

router
  .post('/', userValidations.createUserValidations, checkAvailableEmail, userController.createNewUser)
  .post('/login', userController.jwtLogin)
  .post('/login-dev', loginValidations, checkAuthData, authController.login);

module.exports = router;
