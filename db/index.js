const mysql = require('mysql');
const config = require('../config.js');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'ATS_admin',
  password: config['mysql-pw'],
  database: 'toys_db',
});

const getAllToys = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM toys';
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const updateToy = (body) => {
  const { propToChange, toy } = body;
  return new Promise((resolve, reject) => {
    const query = `UPDATE toys SET ${propToChange} = ${Number(!toy[propToChange])} where id = ${toy.id}`;
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = { getAllToys, updateToy };
