const inquirer = require("inquirer");
const mysql = require("mysql");
const obj = require("./modules/questions")

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
  //   findAllDepart();
  obj.menu()
  connection.end();
});

// const findAllDepart = () => {
//   connection.query("SELECT * FROM department", (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// };


