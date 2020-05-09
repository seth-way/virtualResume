/* eslint-disable no-console */
const express = require('express');

const path = require('path');
// const favicon = require('serve-favicon');

const app = express();
const PORT = 80;

app.use(express.static('public'));
// app.use(favicon(path.join(__dirname, '..', 'public', 'resources', 'favicon.ico')));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Express Server Listening on port: ${PORT}`);
});
