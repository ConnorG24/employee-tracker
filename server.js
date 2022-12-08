const express = require('express');
const sequelize = require('./config/connection');
const inquirer = require('inquirer')
const mysql = require('mysql2');
const cTable = require('console.table')
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Connection Succsessful'));
  onceConnected();
});

onceConnected = () =>{
    //throw up some ascii art 
    //then prompt questions
    //add functions to handle question responses
}

const startPromt = () =>{
    inquirer.prompt ([
        {
            type: 'list',
            name: 'options',
            message:'Choose one of the following commands',
            options:[
                'See departments',
                'See roles',
                'See employee list',
                'Add new department',
                'Add new role',
                'Add new employee',
                'Change employee role',
                'Change employe manager'

            ]
        }
    ])
}