const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
var mysql = require('mysql');

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.get('/testUrl', function (req, res) {
    res.send('testing url');
});

var con = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

console.log(`Your port is ${process.env.PORT}`); // 8626
app.listen(process.env.PORT, function () {
console.log(`Example app listening on port ${process.env.PORT}!`);
});