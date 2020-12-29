const mysql = require("mysql");
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

// starting menu
const startMenu = () => {
  inquirer.prompt(questions.startMenu).then((answer) => {
    switch (answer.choice) {
      case "Add to database":
        addData();
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

// function for option to view data
// each option leads back to startMenu()
const viewData = () => {
  inquirer.prompt(questions.view).then((answer) => {
    switch (answer.view) {
      case "Departments":
        queries.viewDepartments(function () {
          startMenu();
        });
        break;
      case "Roles":
        queries.viewRoles(function () {
          startMenu();
        });
        break;
      case "Employees":
        queries.viewEmployees(function () {
          startMenu();
        });
        break;
      case "Back to start":
        startMenu();
        break;

      default:
        console.log("failed");
        break;
    }
  });
};

const addData = () => {
  inquirer.prompt(questions.add).then((answer) => {
    switch (answer.add) {
      case "A department":
        inquirer.prompt(questions.addDepartmentInfo).then((answer) => {
          queries.addDepartment(answer.newDepartment, function () {
            startMenu();
          });
        });
        break;
      case "A role":
        inquirer.prompt(questions.addRoleInfo).then((answer) => {
          queries.addRole(
            answer.newRoleTitle,
            answer.newRoleSalary,
            answer.departmentId,
            function () {
              startMenu();
            }
          );
        });
        break;
      case "An employee":
        inquirer.prompt(questions.addEmployeeInfo).then((answer) => {
          let managerID;

          if (answer.managerId === "null") {
            managerID = null;
          } else {
            managerID = answer.managerId;
          }

          queries.addEmployee(
            answer.firstName,
            answer.lastName,
            answer.roleId,
            managerID,
            function () {
              startMenu();
            }
          );
        });
        break;
      case "Back to start":
        startMenu();
        break;
      default:
        console.log("failed");
        break;
    }
  });
};
