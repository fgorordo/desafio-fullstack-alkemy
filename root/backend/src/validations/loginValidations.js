const { body } = require('express-validator');

const loginValidations = [
  body('email')
    .toLowerCase()
    .trim()
    .notEmpty().withMessage('Debes ingresar un email')
    .isEmail().withMessage('Debes ingresar un formato de email valido').bail(),
  body('password')
    .trim()
    .notEmpty().withMessage('Debes ingresar la contraseña').bail()
];

module.exports = loginValidations;
