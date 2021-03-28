let mysql = require("mysql");
// const db = require("db");
let connection;
// var mysql = require("mysql");

// var connection = mysql.createConnection({
  
// });
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Benson2387!",
    database: "burger_db",
    // host: process.env.DB_HOST,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: burger_db,
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;