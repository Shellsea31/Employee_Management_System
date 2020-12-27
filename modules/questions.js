const inquirer = require("inquirer");

const obj = {
  menu: function () {
    inquirer.prompt({
      name: "choice",
      type: "list",
      message: "What action would you like to take?",
      choices: ["Add to database", "View database", "Update database"],
    });
  },
};

module.exports = obj;
