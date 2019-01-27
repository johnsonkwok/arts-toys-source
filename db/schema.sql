DROP DATABASE IF EXISTS toys_db;

CREATE DATABASE IF NOT EXISTS toys_db;

USE toys_db;

CREATE TABLE IF NOT EXISTS toys (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
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