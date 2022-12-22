require('dotenv').config();
require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to database established!`)
);

const viewDepartments = async () => {
  db.query('SELECT * FROM departments', function (err, results) {
    console.table(results);
  });
}

const viewRoles = async () => {
  db.query('SELECT * FROM roles', function (err, results) {
    console.table(results);
  });
}

const viewEmployees = async () => {
  db.query('SELECT * FROM employees', function (err, results) {
    console.table(results);
  });
}

const final = () => {console.log('Done!')};

async function main() {
  console.log("Welcome!")
  const startOption = await inquirer.prompt(
    {
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: [
        "View all departments", 
        "View all roles", 
        "View all employees", 
        "Add a department", 
        "Add a role", 
        "Add an employee", 
        "Update an employee role"
      ],
    }
  );
  switch (startOption.option) {
    case "View all departments":
      await viewDepartments();
      break;
    case "View all roles":
      await viewRoles();
      break;
    case "View all employees":
      await viewEmployees();
      break;
    case "Add a department":
      break;
    case "Add a role":
      break;
    case "Add an employee":
      break;
    case "Update an employee role":
      break;
  }
  await final();
}

main();