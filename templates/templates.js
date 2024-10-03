exports.createTableTemplate = (tabelName) => {
  return `const connection = require('./connection'); // establish connection
  
    // Executable Query
    let sql = \`CREATE TABLE ${tabelName} (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                );\`;

    // Executing the Query 
    let con = connection.run_simple_query(sql);`
};


exports.createTableTemplate = (tabelName) => {
  return `const connection = require('./connection'); // establish connection

    // Executable Query
    let sql = \`INSERT INTO ${tabelName} (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);\`;

    // Executing the Query
    let con = connection.run_simpleValue_query(sql);`;
};


exports.createTableTemplate = (tabelName) => {
  return `const connection = require('./connection'); // establish Connection

    // Executable Query
    let sql = \`UPDATE INTO ${tabelName} SET column1 = value1, column2 = value2, ...WHERE condition;\`;

    // Executing Query
    let con = connection.run_simpleValue_query(sql);`;
};
