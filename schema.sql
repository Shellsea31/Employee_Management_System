DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;
USE management_db;


CREATE TABLE department(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
id INT PRIMARY KEY NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
FOREIGN KEY(role_id) REFERENCES role(id),
manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employee(id)
);