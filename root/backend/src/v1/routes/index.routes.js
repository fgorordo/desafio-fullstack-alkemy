const express = require('express');
const router = express.Router();
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const authService = require('../../services/authService');

router.use('/api/v1/users', userRouter);
router.use('/api/v1/users/login', authRouter);
router.get('/api/v1/read-token-test', authService.checkForToken, (req, res) => {
  res.send(req.userData);
});

module.exports = router;
