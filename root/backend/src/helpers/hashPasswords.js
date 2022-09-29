const bcrypt = require('bcryptjs');

const hashMe = async (string) => {
  try {
    const hashed = await bcrypt.hashSync(string, 10);
    return hashed;
  } catch (error) {
    console.log(error);
  }
};

module.exports = hashMe;
