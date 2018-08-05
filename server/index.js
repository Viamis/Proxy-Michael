const express = require('express');
const proxy = require('http-proxy-middleware');

const path = require('path');


const app = express();

console.log(path.join(__dirname, '../client/'));

app.use(express.static(path.join(__dirname, '../client/')));

app.use('/images/**', proxy({target: 'http://localhost:3002', changeOrigin: true}));
app.use('/products/**', proxy({target: 'http://localhost:3003', changeOrigin: true}));


app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

const port = process.env.PORT || 3000;

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
