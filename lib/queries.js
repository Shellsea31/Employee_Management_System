const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ShellseaFS2020!",
  database: "management_db",
});

const queries = {
  viewDepartments: function () {
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.log(cTable.getTable(res));
    });
  },
  viewRoles: function () {
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      console.log(cTable.getTable(res));
    });
  },
  viewEmployees: function () {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.log(cTable.getTable(res));
    });
  },
};

module.exports = queries;
