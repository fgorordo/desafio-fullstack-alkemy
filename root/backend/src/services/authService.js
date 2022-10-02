const db = require('../models/index');
const jwt = require('jsonwebtoken');
const readToken = require('../helpers/readToken');

const getAccessToken = async (userEmail) => {
  try {
    const { dataValues } = await db.Users.findOne({ where: { email: userEmail } });

    const tokenData = {
      userId: dataValues.userId,
      email: dataValues.email
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '10s' });

    return token;
  } catch (error) {
    throw new Error('Unable to connect to database');
  }
};

const checkForToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        status: 'FAILED',
        statusCode: 401,
        errors: 'Se require un token de autenticación para continuar'
      });
    }
    const token = readToken(req.headers.authorization);
    if (!token) {
      return res.status(401).json({
        status: 'FAILED',
        statusCode: 401,
        errors: 'No existe token de ingreso, por favor inicie sesión'
      });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 'FAILED',
      statusCode: 401,
      errors: 'Parece que algo anda mal con tu token, verifique y vuelva a intentar'
    });
  }
};

module.exports = { getAccessToken, checkForToken };
