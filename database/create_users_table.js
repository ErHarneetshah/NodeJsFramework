const connection = require('./connection');

let sql = `CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(255), 
        email VARCHAR(255)
        )`;

let con = connection.run_simple_query(sql);
