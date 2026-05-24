const express = require('express');
const app = express();
const { exec } = require('child_process');

// Command injection vulnerability - user input passed directly to shell
app.get('/ping', (req, res) => {
  const host = req.query.host;
  exec('ping -c 1 ' + host, (err, stdout) => {
    res.send(stdout);
  });
});

// Hardcoded credentials
const dbPassword = "SuperSecret123!";

// Path traversal vulnerability
app.get('/file', (req, res) => {
  const filename = req.query.name;
  res.sendFile('/var/data/' + filename);
});

app.listen(3000);
