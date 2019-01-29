const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const config = require('../config.js');
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

// Endpoint: '/toys/item?keywords=${keywords}'
app.get('/toys/item', (req, res) => {
  let keywords = 'ant%20man%20conan%20funko%20pop';
  if (req.query.keywords !== undefined) {
    keywords = req.query.keywords;
  }

  // const successCb = (data) => {
  //   console.log(data);
  //   return data;
  // };

  let url = 'http://svcs.ebay.com/services/search/FindingService/v1';
  url += '?OPERATION-NAME=findCompletedItems';
  url += '&SERVICE-VERSION=1.0.0';
  url += `&SECURITY-APPNAME=${config['X-EBAY-SOA-SECURITY-APPNAME']}`;
  url += '&GLOBAL-ID=EBAY-US';
  url += '&RESPONSE-DATA-FORMAT=JSON';
  // url += `&callback=${successCb}`;
  url += '&REST-PAYLOAD';
  url += `&keywords=${keywords}`;
  url += '&paginationInput.entriesPerPage=10';

  request.get(url, (err, response) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    }
    console.log('eBay API Request Status Code:', response.statusCode);
    res.send(response.body);
  });
});

app.listen(1337, () => console.log('Listening on port 1337'));
