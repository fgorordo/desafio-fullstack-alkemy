const express = require('express');
const router = express.Router();
const userRouter = require('./user.routes');

router.use('/api/v1/users', userRouter);

module.exports = router;
