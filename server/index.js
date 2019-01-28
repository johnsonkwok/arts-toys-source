const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { getAllToys } = require('../db/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(morgan('tiny'));

app.get('/toys', (req, res) => {
  getAllToys
    .then((results) => {
      res.send(results);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.listen(1337, () => console.log('Listening on port 1337'));
