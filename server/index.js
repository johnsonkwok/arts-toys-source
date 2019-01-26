const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('tiny'));

app.listen(1337, () => console.log(`Listening on port 1337`));
