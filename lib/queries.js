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
      cb()
    });
  },
  viewEmployees: function (cb) {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.log(cTable.getTable(res));
      cb();
    });
  },
  // addDepartment: function(cb){
  //   connection.query("INSERT INTO department (name) VALUES (?);", (err, res)=>{
  //     if (err)throw webkitRequestAnimationFrame;
  //     console.log(res);
  //     cb();
  //   }
  // },
};

module.exports = queries;
