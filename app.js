const mysql = require("mysql");
const cTable = require("console.table");
const questions = require("./lib/questions");
const inquirer = require("inquirer");

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
  connection.end();
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
        break;

      default:
        console.log(answer);
        break;
    }
  });
};

const viewData = () => {
  inquirer.prompt(questions.view).then((answer) => {
    console.log(answer);
  });
};
