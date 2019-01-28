const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'toys_db',
});

const getAllToys = new Promise((resolve, reject) => {
  const query = 'SELECT * FROM toys';
  db.query(query, (err, results) => {
    if (err) {
      reject(err);
    }
    resolve(results);
  });
});

module.exports = { getAllToys };
