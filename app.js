import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import mysql from 'mysql';
import multer from 'multer';
// import { v4: uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';

import nodemailer from 'nodemailer';

const app = express();
const port = 3000;



const __dirname = dirname(fileURLToPath(import.meta.url));




// MySQL configuration
const db = mysql.createConnection({
  host: 'localhost',       // Hostname of the MySQL server
  user: 'root',            // MySQL user
  password: '',            // MySQL user's password (usually empty for XAMPP)
  database: 'App'       // Database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL ' );
});


// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});


// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
  }
});
const upload = multer({ storage: storage });


app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));







// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// // Serve static files from the 'uploads' directory
app.use('/views', express.static(path.join(__dirname, 'views')));

// Route to render the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// const path = require('path'); // Ensure path module is imported

app.post("/search", (req, res) => {
  const { id } = req.body;
  
  if (!id) {
    return res.status(400).send('Error: search query cannot be empty');
  }

  console.log(id);
  
  const query = `SELECT * FROM Items WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    
    if (err) {
      console.error('Error searching items in MYSQL:', err);
      return res.status(500).send('Error searching items:' + err.message);
    }
   
    res.render('searchResults', { items: results }); // Properly render EJS template
  });
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
