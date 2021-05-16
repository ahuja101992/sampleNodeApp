const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())
let testRoute = require("./routes/test");
app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.use("/testroute", testRoute);
var sql = "INSERT INTO Persons (PersonId, LastName, FirstName, Address, City) VALUES ('Company Inc', 'Highway 37')";

console.log(`Your port is ${process.env.PORT}`); // 8626
app.listen(process.env.PORT, function () {
console.log(`Example app listening on port ${process.env.PORT}!`);
});