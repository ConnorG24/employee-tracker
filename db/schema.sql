DROP DATABASE IF EXISTS companyInc_db;
CREATE DATABASE companyInc_db; 

USE companyInc_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY INT (department_ID)
    REFERENCES department(id)
    ON DELETE SET NULL 
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    FOREIGN KEY INT (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    FOREIGN KEY INT (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL

)