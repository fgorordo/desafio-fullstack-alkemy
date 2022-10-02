const db = require('../models');
const bcrypt = require('bcryptjs');
const { validationResult, matchedData } = require('express-validator');

const checkAuthData = async (req, res, next) => {
  try {
    const validations = validationResult(req);
    if (!validations.isEmpty()) {
      const errors = validations.array();
      return res.status(400).json({
        status: 'FAILED',
        statusCode: 400,
        errors
      });
    }
    const credentials = matchedData(req);
    const { email, password } = credentials;
    const response = await db.Users.findOne({ where: { email: email }, attributes: ['email', 'password'] });
    const user = response?.dataValues;
    if (!user) {
      return res.status(401).json({
        status: 'FAILED',
        statusCode: 401,
        errors: 'No se reconoce el email o la contraseña por favor intente nuevamente.'
      });
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({
        status: 'FAILED',
        statusCode: 401,
        errors: 'No se reconoce el email o la contraseña por favor intente nuevamente.'
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      status: 'FAILED',
      statusCode: 500,
      errors: '¡Huston tenemos un problema! Lo siento, parece que algo esta fallando, intenta nuevamente en unos minutos.'
    });
  }
};

module.exports = checkAuthData;
