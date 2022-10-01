const db = require('../models/index');
const users = require('../data/users.json');
const records = require('../data/records.json');

const injectData = async () => {
  try {
    await db.Users.bulkCreate(users);
    await db.Record.bulkCreate(records);
  } catch (error) {
    console.log(error);
  }
};

module.exports = injectData;
