const jwt = require('jsonwebtoken');
const db = require('../models/index');
const bcrypt = require('bcryptjs');

const createToken = async (data) => {
  try {
    const { email, password } = data;
    console.log(email, password);
    const tokenOwner = await db.Users.findOne({ where: { email: email } });
    if (!tokenOwner) {
      throw new Error('AuthError', 'Invalid credentials');
    }
    const passwordIsOk = await bcrypt.compareSync(password, tokenOwner.password);
    if (!passwordIsOk) {
      throw new Error('AuthError', 'Invalid credentials');
    }
    const tokenMetadata = {
      userId: tokenOwner.userId
    };
    const token = jwt.sign(tokenMetadata, process.env.JWT_SECRET);
    console.log(token);
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createToken };
