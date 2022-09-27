require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const v1Router = require('../v1/routes/index.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(v1Router);

module.exports = app;
