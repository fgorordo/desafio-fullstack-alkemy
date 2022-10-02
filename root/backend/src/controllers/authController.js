const authService = require('../services/authService');

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const accessToken = await authService.getNewToken(email);
    res.status(200).json({
      status: 'OK',
      statusCode: 200,
      data: {
        accessToken: accessToken
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      statusCode: 500,
      error: error.message
    });
  }
};

module.exports = { login };
