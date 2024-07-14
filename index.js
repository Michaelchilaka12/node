import express from "express";
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: '127.0.0.1:49770',
    user: 'MICHAEL',
    password: 'Michael@12',
    database: 'APP'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ');
        return;
    }
    console.log('Connected successfully');
});
// module.exports = connection;
// const connection = require('./db');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

connection.query(createTableQuery, (err, results, fields) => {
    if (err) {
        console.error('Error creating table: ', err);
        return;
    }
    console.log('Table created successfully');
});

connection.end();


