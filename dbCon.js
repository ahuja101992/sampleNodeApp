var mysql = require('mysql');


var con = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD
});
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected in route!");
//   });
console.log("kjhkjkjjk");
module.exports=con;