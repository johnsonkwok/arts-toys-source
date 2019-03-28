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
    const query = `UPDATE toys SET ${propToChange} = ${Number(!toy[propToChange])} WHERE id = ${toy.id}`;
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const updateAllToys = (toys) => {
  const toyPromises = [];
  for (let i = 0; i < toys.length; i += 1) {
    const query = `UPDATE toys SET est_value = ${toys[i].est_value} WHERE id = ${toys[i].id}`;
    const toyPromise = new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
    toyPromises.push(toyPromise);
  }
  return Promise.all(toyPromises);
};

module.exports = { getAllToys, updateToy, updateAllToys };
