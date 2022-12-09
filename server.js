const inquirer = require('inquirer')

const mysql = require('mysql2');


const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
    
    password: process.env.DB_PASSWORD,
    database: 'companyInc_db'
  },
  
);

onceConnected = () =>{
    //throw up some ascii art 
    //then prompt questions
   // startPromt();
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
    ]).then((input) => {
        const {options} = input;
        if (options === "See departments"){
            
        }
        if (options === "See roles"){
            
        }
        if (options === "See employee list"){
            
        }
        if (options === "Add new department"){
            
        }
        if (options === "Add new role"){
            
        }
        if (options === "Add new employee"){
            
        }
        if (options === "Change employee role"){
            
        }
        if (options === "Change employe manager"){
            
        }
        
    })
    
}

getDepartment = () =>{
    const sql = 'SELECT department.id AS id, department.name AS department FROM department'
    sequelize.query(sql, (err, row) =>{
        if (err)
        throw err; 
        console.table(row);
    })
}