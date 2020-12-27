const inquirer = require("inquirer");

const startMenu = [
  {
    name: "choice",
    type: "list",
    message: "What action would you like to take?",
    choices: ["Add to database", "View database", "Update database", "Exit"],
  },
];

const view = [
  {
    name: "view",
    type: "list",
    message: "What would you like to view?",
    choices: ["Departments", "Roles", "Employees"],
  },
];

const library = {
  menu: function () {
    inquirer
      .prompt(startMenu)
      .then((answers) => {
        console.log(answers);
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
  view: function () {
    inquirer
      .prompt(view)
      .then((answers) => {
        console.log(answers);
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
};

module.exports = library;
