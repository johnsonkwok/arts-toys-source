DROP DATABASE IF EXISTS toys_db;

CREATE DATABASE IF NOT EXISTS toys_db;

USE toys_db;

DROP TABLE IF EXISTS toys;

CREATE TABLE IF NOT EXISTS toys (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  retail_price INT,
  est_value INT,
  company VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  category VARCHAR(50),
  item_num INT,
  property VARCHAR(50),
  exclusive_to VARCHAR(50),
  picture VARCHAR(150),
  release_year INT,
  tags VARCHAR(300)
);

LOAD DATA LOCAL INFILE '/Users/johnsonkwok/Documents/HR/Week-10/hrsf107-mvp/db/toys_data.csv' 
  INTO TABLE toys
  FIELDS TERMINATED BY ',' 
  LINES TERMINATED BY '\n'
  IGNORE 1 ROWS
  (name,retail_price,est_value,company,type,category,item_num,property,exclusive_to,picture,release_year,tags);
