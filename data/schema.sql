DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;
USE management_db;


CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role(
id INT AUTO_INCREMENT NOT NULL,
PRIMARY KEY (id),
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT, 
FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee(
id INT AUTO_INCREMENT NOT NULL,
PRIMARY KEY (id),
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
FOREIGN KEY(role_id) REFERENCES role(id),
manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employee(id)
);