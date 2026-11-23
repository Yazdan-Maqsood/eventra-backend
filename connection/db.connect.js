const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'eventra',
})

connection.connect((err) => {
    if(err) {
        console.log("Error in Database Connectivity");
    } 
    else {
        console.log("Database is successfully connected");
    }
})

module.exports = connection;