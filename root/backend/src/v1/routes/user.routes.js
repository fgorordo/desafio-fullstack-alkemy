const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const checkAvailableEmail = require('../../middlewares/checkAvailableEmail');
const userValidations = require('../../validations/userValidations');

router.post('/', userValidations.createUserValidations, checkAvailableEmail, userController.createNewUser);

module.exports = router;
