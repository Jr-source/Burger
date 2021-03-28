const connection = require("../config/connection");

function printQuestionMarks(num) {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objectToSQL(ob) {
  let arr = [];

  for (var key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

let orm = {
  selectBurgers: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertBurger: function (table, columns, values, cb) {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    console.log("Create query string:" + queryString);

    connection.query(queryString, values, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateBurger: function (table, objectColVals, id, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objectToSQL(objectColVals);
    queryString += " WHERE ";
    queryString += objectToSQL(id);

    console.log(queryString);
    console.log(id);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  deleteBurger: function (table, id, cb) {
    let querySelect = "DELET FROM " + table + " WHERE " + id;
    console.log(querySelect);

    connection.query(querySelect, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
