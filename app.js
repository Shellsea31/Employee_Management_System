const mysql = require("mysql");
const questions = require("./lib/questions");
const inquirer = require("inquirer");
const queries = require("./lib/queries");
const cTable = require("console.table");

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
    // the options
    switch (answer.choice) {
      case "Add to database":
        addData();
        break;
      case "View database":
        viewData();
        break;
      case "Update database":
        updateRole();
        break;
      // end the program
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
        queries.viewDepartments(() => {
          startMenu();
        });
        break;
      case "Roles":
        queries.viewRoles(() => {
          startMenu();
        });
        break;
      case "Employees":
        queries.viewEmployees(() => {
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

// function for option to add to data
// each option leads back to startMenu()
const addData = () => {
  inquirer.prompt(questions.add).then((answer) => {
    switch (answer.add) {
      case "A department":
        // Show current available departments while asking for new department
        queries.viewDepartments(() => {
          inquirer.prompt(questions.addDepartmentInfo).then((answer) => {
            queries.addDepartment(answer.newDepartment, function () {
              startMenu();
            });
          });
        });

        break;
      case "A role":
        // Show current available roles while asking for new role
        queries.viewRoles(() => {
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
        });

        break;
      case "An employee":
        // Show current available employees while asking for new employee
        queries.viewEmployees(() => {
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

// function for option to update employee role
// each option leads back to startMenu()
const updateRole = () => {
  inquirer.prompt(questions.update).then((answer) => {
    switch (answer.table) {
      case "An employee's role":
        inquirer.prompt(questions.updateRole).then((answer) => {
          queries.updateRole(answer.new, answer.current, function () {
            startMenu();
          });
        });
        break;
      case "An employee's manager":
        console.log("An employee's manager");
        break;

      default:
        console.log("failed");
        break;
    }
  });
};
