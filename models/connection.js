let mysql = require("mysql");
const globalVariables = require('../config/globalVariables');

//* Setting up the Credientials
exports.con = () => {
  return mysql.createConnection({
    host: globalVariables.CONNECT_HOST,
    user: globalVariables.CONNECT_USER,
    password: globalVariables.CONNECT_PASSWORD,
    database: globalVariables.CONNECT_DATABASE,
  });
};


//* Function for Testing Connection
exports.establish_connection = () => {
  const connection = exports.con();
  connection.connect(function (err) {
    if (err) {
      console.error("Connection error: ", err);
      throw err;
    }
    console.log("Connected Successfully");
  });

  return connection;
};


//* Function for Executing Simple Queries
exports.run_simple_query = (sql = null, callback) => {
  const connection = exports.con();

  if (!sql) {
    return callback(new Error("No SQL query provided"));
  }

  connection.connect(function (err) {
    if (err) {
      console.error("Connection error: ", err);
      return callback(err);  // Return the error to the callback
    }

    console.log("Connected Successfully");
    connection.query(sql, function (err, result) {
      if (err) {
        console.error("SQL query execution error: ", err);
        return callback(err);  // Return the error to the callback
      }

      console.log("SQL Query Executed Successfully");
      // connection.end(function (err) {
      //   if (err) {
      //     console.error("Error closing the connection: ", err);
      //     return callback(err);  // Return the error to the callback
      //   }
      //   console.log("Connection closed");
      // });
      return callback(null, true);
    });
  });
};