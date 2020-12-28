const mysql = require("mysql");

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
      console.log(res);
    });
  },
  viewRoles: function () {
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  },
  viewEmployees: function () {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  },
};

module.exports = queries;
