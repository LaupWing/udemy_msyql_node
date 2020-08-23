const faker = require('faker');
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

console.log({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE
})

connection.query('SELECT * FROM users', function(err, result){
    if(err) throw err;
    console.log(result);
});

connection.end()