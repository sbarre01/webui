const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({host: 'localhost', user: 'root', database: 'app'});

// SQL Injection - user input concatenated into query
app.get('/user', (req, res) => {
  const id = req.query.id;
  db.query("SELECT * FROM users WHERE id = '" + id + "'", (err, rows) => {
    res.json(rows);
  });
});

app.listen(3001);
