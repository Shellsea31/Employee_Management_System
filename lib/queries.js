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
  viewDepartments: function (cb) {
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.log(cTable.getTable(res));
      cb();
    });
  },
  viewRoles: function (cb) {
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      console.log(cTable.getTable(res));
      cb();
    });
  },
  viewEmployees: function (cb) {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.log(cTable.getTable(res));
      cb();
    });
  },
  addDepartment: function (answer, cb) {
    connection.query(
      "INSERT INTO department (name) VALUES (?);",
      answer,
      (err, res) => {
        if (err) throw err;
        console.log(res.affectedRows + " department added to database!   \n");
        cb();
      }
    );
  },
  addRole: function (title, salary, DI, cb) {
    connection.query(
      "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);",
      [title, salary, DI],
      (err, res) => {
        if (err) throw err;
        console.log(res.affectedRows + " role added to database!   \n");
        cb();
      }
    );
  },
  addEmployee: function (first, last, role, manager, cb) {
    connection.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [first, last, role, manager],
      (err, res) => {
        if (err) throw err;
        console.log(res.affectedRows + " employee added to database!   \n");
        cb();
      }
    );
  },
  updateRole: function (newRoleId, employeeId, cb) {
    connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?;",
      [newRoleId, employeeId],
      (err, res) => {
        if (err) throw err;
        console.log(res.affectedRows + " employee role updated!   \n");
        cb();
      }
    );
  },
};

module.exports = queries;
