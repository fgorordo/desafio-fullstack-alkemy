const { body } = require('express-validator');

const createUserValidations = [
  body('firstName')
    .trim()
    .notEmpty().bail().withMessage('Debes ingresar tu nombre')
    .isAlpha(['es-ES']).bail().withMessage('Solo se permiten letras en este campo'),
  body('lastName')
    .trim()
    .isAlpha(['es-ES']).bail().withMessage('Solo se permiten letras en este campo'),
  body('email')
    .notEmpty().bail().withMessage('Debes ingresar un email')
    .isEmail().bail().withMessage('Debes ingresar un formato de email válido')
    .normalizeEmail(),
  body('password')
    .trim()
    .notEmpty().bail().withMessage('Debes ingresar una contraseña')
    .isLength({ min: 8, max: 16 }).bail().withMessage('La contraseña debe tener un minimo de caracteres, contener una mayúscula, una minúscula, un número y un caracter especial')
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/).bail().withMessage('La contraseña debe tener de 8 a 16 caracteres, contener como minimo una mayúscula, una minúscula, un número y un caracter especial'),
  body('repassword')
    .trim()
    .notEmpty().bail().withMessage('Debes repetir la contraseña')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        return Promise.rejected();
      }
      return true;
    }).bail().withMessage('Ambas contraseñas deben ser identicas')
];

module.exports = { createUserValidations };
