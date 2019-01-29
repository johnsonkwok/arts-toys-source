const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { getAllToys, updateToy } = require('../db/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/toys', (req, res) => {
  getAllToys()
    .then((results) => {
      res.send(results);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.put('/toys', (req, res) => {
  const { body } = req;
  updateToy(body)
    .then((results) => {
      console.log('Toy successfully updated!');
      res.send(results);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.listen(1337, () => console.log('Listening on port 1337'));
