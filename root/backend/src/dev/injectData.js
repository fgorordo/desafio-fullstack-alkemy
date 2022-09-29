const db = require('../models/index');
const users = require('../data/users.json');
const categories = require('../data/categories.json');
const types = require('../data/types.json');
const records = require('../data/records.json');

const injectData = async () => {
  try {
    await db.Users.bulkCreate(users);
    await db.Categories.bulkCreate(categories);
    await db.Types.bulkCreate(types);
    await db.Records.bulkCreate(records);
  } catch (error) {
    console.log(error);
  }
};

module.exports = injectData;
