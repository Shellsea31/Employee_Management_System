const decimal = /^\d+(\.\d{1,2})?$/;

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
      validate: function (answer) {
        if (decimal.test(answer)) {
          return true;
        }
        return "Must be a whole number or decimal";
      },
    },
    { name: "departmentId", type: "input", message: "Department ID:" },
  ],
  addEmployeeInfo: [
    {
      name: "firstName",
      type: "input",
      message: "First name:",
    },
    {
      name: "lastName",
      type: "input",
      message: "Last name",
    },
    {
      name: "roleId",
      type: "number",
      message: "Role ID:",
    },
    {
      name: "managerId",
      type: "input",
      default: "null",
      message: "If position has Manager, enter their ID. If not, press enter",
    },
  ],
  update: [
    {
      name: "table",
      type: "list",
      message: "Which would you like to update?",
      choices: ["An employee's role", "An employee's manager"],
    },
  ],
  updateRole: [
    {
      name: "current",
      type: "number",
      message: "What is this employee's current id number?",
    },
    {
      name: "new",
      type: "number",
      message: "What is this employee's new role id number?",
    },
  ],
};

module.exports = questions;
