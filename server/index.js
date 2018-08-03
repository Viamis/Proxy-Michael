const express = require('express');
const path = require('path');

const app = express();

console.log(path.join(__dirname, '../client/'));
app.use(express.static(path.join(__dirname, '../client/')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

const port = process.env.PORT || 3000;

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
