const userService = require('../services/userService');
const { validationResult, matchedData } = require('express-validator');
const hashMe = require('../helpers/hashPasswords');

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

module.exports = { createNewUser };
