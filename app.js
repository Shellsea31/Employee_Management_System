const mysql = require("mysql");
const cTable = require("console.table");
const questions = require("./lib/questions");
const inquirer = require("inquirer");
const queries = require("./lib/queries");

// establish connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ShellseaFS2020!",
  database: "management_db",
});

// connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id: ${connection.threadId}`);
  startMenu();
});

const startMenu = () => {
  inquirer.prompt(questions.startMenu).then((answer) => {
    switch (answer.choice) {
      case "Add to database":
        break;
      case "View database":
        viewData();
        break;
      case "Update database":
        break;
      case "Exit":
        connection.end();
        break;

      default:
        console.log(answer);
        break;
    }
  });
};

const viewData = () => {
  inquirer.prompt(questions.view).then((answer) => {
    switch (answer.view) {
      case "Departments":
        queries.viewDepartments();
        break;
      case "Roles":
        break;
      case "Employees":
        break;
      case "Back to start":
        startMenu();
        break;

      default:
        console.log(answer);
        break;
    }
  });
};
