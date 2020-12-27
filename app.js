const mysql = require("mysql");
const cTable = require("console.table");
const library = require("./lib/questions");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ShellseaFS2020!",
  database: "management_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id: ${connection.threadId}`);
  start();
  connection.end();
});

const start = ()=>{
    library.menu();
}
