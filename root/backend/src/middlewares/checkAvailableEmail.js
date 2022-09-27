const db = require('../models/index');
const { matchedData } = require('express-validator');

const checkAvailableEmail = async (req, res, next) => {
  try {
    const { email } = matchedData(req);
    const emailExist = await db.Users.findOne({ where: { email: email } });
    if (emailExist) {
      return res.status(400).send({
        status: 'FAILED',
        code: 400,
        error: {
          message: 'Este email ya se encuentra registado'
        }
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkAvailableEmail;
