const decimal =  /^\d+(\.\d{1,2})?$/;

const questions = {
  startMenu: [
    {
      name: "choice",
      type: "list",
      message: "What action would you like to take?",
      choices: ["Add to database", "View database", "Update database", "Exit"],
    },
  ],
  view: [
    {
      name: "view",
      type: "list",
      message: "What would you like to view?",
      choices: ["Departments", "Roles", "Employees", "Back to start"],
    },
  ],
  add: [
    {
      name: "add",
      type: "list",
      message: "What would you like to add?",
      choices: ["A department", "A role", "An employee", "Back to start"],
    },
  ],
  addDepartmentInfo: [
    {
      name: "newDepartment",
      type: "input",
      message: "What is the name of the new department?",
    },
  ],
  addRoleInfo: [
    {
      name: "newRoleTitle",
      type: "input",
      message: "What is the title of the new role",
    },
    {
      name: "newRoleSalary",
      type: "number",
      message: "Enter a salary",
      validate: function(answer){
        if (decimal.test(answer)){
          return true;
        } return "Must be a whole number or decimal"
      }
    },
  ],
};

module.exports = questions;
