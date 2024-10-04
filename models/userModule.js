class Users {

  createTable() {
    const connection = require("./connection"); // Import the connection module

    const sql = `CREATE TABLE modelTest (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );`;

    // Execute the Query
    connection.run_simple_query(sql, (err, result) => {
      if (err) {
        console.error("Error creating table:", err);
        return false;
      }
      console.log("Table created successfully:", result);
      return result;
    });
  }
}

// Export the Users class
module.exports = Users;
