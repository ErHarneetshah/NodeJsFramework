require("dotenv").config({ path: "../.env" });

let mysql = require("mysql");


//* Setting up the Credientials
exports.con = () => {
  return mysql.createConnection({
    host: process.env.CONNECT_HOST,
    user: process.env.CONNECT_USER,
    password: process.env.CONNECT_PASSWORD,
    database: process.env.CONNECT_DATABASE,
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
exports.run_simple_query = (sql = null) => {
  const connection = exports.con();

  connection.connect(function (err) {
    if (err) {
      console.error("Connection error: ", err);
      throw err;
    }
    console.log("Connected Successfully");
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("SQL Query Executed Successfully");
    });
  });

  return connection;
};


//* Function for Executing Simple Queries with Values/Parameters
exports.run_simple_query = (sql = null, values = null) => {
    const connection = exports.con();
  
    connection.connect(function (err) {
      if (err) {
        console.error("Connection error: ", err);
        throw err;
      }
      console.log("Connected Successfully");
      connection.query(sql,[values], function (err, result) {
        if (err) throw err;
        console.log("SQL Query with Values Executed Successfully");
      });
    });
  
    return connection;
  };
