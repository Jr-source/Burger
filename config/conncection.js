const mysql = require("mysql");
let connection;
// require('dotenv').config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    // password: process.env.DB_PASS,
    password: "Benson2387!",
    
    database: "burger_db",
  });
}

connection.connect();

module.exports = connection;