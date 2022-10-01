const userService = require('../services/userService');
const { validationResult, matchedData } = require('express-validator');
const hashMe = require('../helpers/hashPasswords');
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

const createNewUser = async (req, res) => {
  try {
    const validations = validationResult(req);
    if (!validations.isEmpty()) {
      const errors = validations.mapped();
      return res.status(400).send({ status: 'FAILED', code: 400, errors });
    }
    const userToCreate = matchedData(req);
    userToCreate.password = await hashMe(userToCreate.password);
    delete userToCreate.repassword;
    const createdUser = await userService.createNewUser(userToCreate);
    return res.status(200).send({ status: 'OK', data: createdUser });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllRecords = async (req, res) => {
  try {
    if (!req.headers.authorization) {
      res.status(401).json({
        status: 'FAILED',
        error: 'You need a login token to continue'
      });
    }
    let token = null;
    const auth = req.headers.authorization.toString();
    if (auth && auth.toLowerCase().startsWith('bearer')) {
      token = auth.substring(7);
    }
    let decodedToken = {};
    decodedToken = jwt.verify(token, 'mywallet-dev');
    if (!token || !decodedToken.userId) {
      return res.status(401).json({
        error: 'token mising or invalid'
      });
    }
    const { dataValues } = await db.Users.findOne({ where: { userId: decodedToken.userId }, include: ['records'] });
    res.send(dataValues);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;
    const user = await db.Users.findOne({ where: { email: email } });
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compareSync(password, user.password);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'invalid user or password'
      });
    }

    const userForToken = {
      userId: user.userId,
      email: user.email
    };

    const token = jwt.sign(userForToken, 'mywallet-dev');

    return res.send({
      status: 'OK',
      message: 'Loggin successfully',
      token: token
    });
  } catch (error) {
    console.log(error);
  }
};

const jwtLogin = async (req, res) => {
  try {
    const user = req.body;
    const token = await authService.createToken(user);
    console.log(token);
    res.json({
      status: 'OK',
      data: {
        token
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'FAILED',
      statusCode: 500,
      message: {
        error: 'Internal server error please contact to flgorordo@gmail.com or https://github.com/fgorordo'
      }
    });
  }
};

module.exports = { createNewUser, getAllRecords, login, jwtLogin };
