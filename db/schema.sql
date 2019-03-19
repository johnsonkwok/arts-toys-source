DROP DATABASE IF EXISTS toys_db;

CREATE DATABASE IF NOT EXISTS toys_db;

USE toys_db;

DROP TABLE IF EXISTS toys;

CREATE TABLE IF NOT EXISTS toys (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(28) NOT NULL,
  retail_price INT,
  est_value INT,
  company VARCHAR(50) NOT NULL DEFAULT 'Funko',
  type VARCHAR(50) NOT NULL DEFAULT 'Pop!',
  category VARCHAR(50),
  item_num VARCHAR(4),
  property VARCHAR(50),
  exclusive_to VARCHAR(50),
  picture VARCHAR(150),
  release_year INT,
  tags VARCHAR(300),
  own BOOLEAN NOT NULL DEFAULT 0,
  want BOOLEAN NOT NULL DEFAULT 0
);

LOAD DATA LOCAL INFILE '/Users/johnsonkwok/Documents/HRSF107/Week-10/hrsf107-mvp/db/toys_data.csv' 
  INTO TABLE toys
  FIELDS TERMINATED BY ','
  ENCLOSED BY "'"
  LINES TERMINATED BY '\n'
  IGNORE 1 ROWS
  (name,retail_price,est_value,category,item_num,property,exclusive_to,picture,release_year,tags);
