require('dotenv').config();
require('console.table');
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
  {
    host: 'localhost',
    port: '3306',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to database established!`)
);




// const viewDepartment = async () => {
//   console.clear();

// }

// async function main() {
//   console.clear();
//   console.log("Welcome!")
//   const startOption = await inquirer.prompt(
//     {
//       type: "list",
//       name: "option",
//       message: "What would you like to do?",
//       choices: [
//         "View all departments", 
//         "View all roles", 
//         "View all employees", 
//         "Add a department", 
//         "Add a role", 
//         "Add an employee", 
//         "Update an employee role"
//       ],
//     }
//   );
//   switch (startOption.option) {
//     case "View all departments":
//       viewDepartment();
//       break;
//     case "View all roles":

//       break;
//     case "View all employees":
//       break;
//     case "Add a department":
//       break;
//     case "Add a role":
//       break;
//     case "Add an employee":
//       break;
//     case "Update an employee role":
//       break;
//   }

//   console.log("Done!");
// }

// main();