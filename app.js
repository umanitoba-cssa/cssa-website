const express = require('express');

const app = express();
const index = require('./src/routes/index');

app.use('/', index);

module.exports = app;
