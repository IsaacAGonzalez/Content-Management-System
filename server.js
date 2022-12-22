require('dotenv').config();
require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to database established!`)
);

const begin = async (choice) => {
  switch (choice) {
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
      await addDepartment();
      break;
    case "Add a role":
      await addRole();
      break;
    case "Add an employee":
      await addEmployee();
      break;
    case "Update an employee role":
      await updateEmployee();
      break;
    case "Exit":
      await final();
      break;
  }
};

const viewDepartments = async () => {
  db.query('SELECT * FROM departments', function (err, results) {
    console.log('\n');
    console.table(results);
  });
  main();
};

const viewRoles = async () => {
  db.query('SELECT * FROM roles', function (err, results) {
    console.log('\n');
    console.table(results);
  });
  await main();
};

const viewEmployees = async () => {
  db.query('SELECT * FROM employees', function (err, results) {
    console.log('\n');
    console.table(results);
  });
  await main();
};

const addDepartment = async () => {
  db.query('SELECT * FROM departments', function (err, results) {
    console.log('\n');
    console.table(results);
  });
  await main();
};

const addRole = async () => {
  db.query('SELECT * FROM roles', function (err, results) {
    console.log('\n');
    console.table(results);
  });
  await main();
};

const addEmployee = async () => {
  db.query('SELECT * FROM employees', function (err, results) {
    console.log('\n');
    console.table(results);
  });
  await main();
};

const final = () => {
  db.end();
  console.log('Done!')
};

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
        "Update an employee role",
        "Exit",
      ],
    }
  );
  await begin(startOption.option);
};

main();