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
      choices: ["Departments", "Roles", "Employees"],
    },
  ],
}



module.exports = questions;
