const db = require('../models/index');

const createNewUser = async (user) => {
  try {
    const { dataValues } = await db.Users.create(user);
    return dataValues;
  } catch (error) {
    return error;
  }
};

module.exports = { createNewUser };
