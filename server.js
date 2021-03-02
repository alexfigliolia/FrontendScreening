const express = require('express');
const app = express();
const data = require('./data');

app.listen(process.env.PORT || 4000);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/api/form', (req, res) => {
  res.send(JSON.stringify(data));
});
