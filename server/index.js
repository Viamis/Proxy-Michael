const express = require('express');
const proxy = require('http-proxy-middleware');

const path = require('path');


const app = express();

console.log(path.join(__dirname, '../client/'));

app.use(express.static(path.join(__dirname, '../client/')));

app.use('/related', proxy({target: 'http://similar_products:3001'}));
app.use('/images', proxy({target: 'http://photo_gallery:3002'}));
app.use('/products', proxy({target: 'http://product_info:3003'}));
app.use('/reviews', proxy({target: 'http://reviews:3004'}));


app.get('/:id', (req, res) => { ll
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

const port = process.env.PORT || 3000;

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
