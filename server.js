const inquirer = require('inquirer');
require('dotenv').config();
const mysql = require('mysql2');


const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
    
    password: '',
    database: 'companyInc_db'
  },
  
);
db.connect(err =>{
    if(err)
    throw (err)
    console.log('connected to database')
    onceConnected();
})
onceConnected = () =>{
    //throw up some ascii art 
    //then prompt questions
    startPromt();
   // startPromt();
    //add functions to handle question responses
}

const startPromt = () =>{
    inquirer.prompt ([
        {
            type: 'list',
            name: 'options',
            message:'Choose one of the following commands',
            choices:[
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
            getDepartment();
        }
        if (options === "See roles"){
            getRoles();
        }
        if (options === "See employee list"){
            getEmployee();
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
    const sql = 'SELECT * from department'
    db.query(sql, (err, row) =>{
        if (err)
        throw err; 
        console.table(row);
    })
}

getRoles = () =>{
    const sql = 'SELECT * FROM roles'
    db.query(sql, (err, row) =>{
        if (err)
        throw err; 
        console.table(row);
    })
}

getEmployee = () =>{
    const sql = 'SELECT * FROM employee'
    db.query(sql, (err, row) =>{
        if (err)
        throw err; 
        console.table(row);
    })
}

newDepartment= () =>{
    inquirer.prompt([
        {
            type: 'input',
            name:'newDepartment',
            message:'Name your department',
            validate: newDepartment =>{
                if(!newDepartment){
                    console.log('please enter a name')
                    return false;
                }else{ 
                    return true;
                }
            }
        }
    ]).then(input =>{
        const sql = 'INSERT INTO department (names)'
        db.query(sql, input.newDepartment,(err,results) =>{
            if (err)
            throw err;

        })
    })
    

    
}