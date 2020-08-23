const faker = require('faker');
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

const data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
const q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q,[data], function(err, result){
    if(err) throw err;
    console.log(result);
});

connection.end()