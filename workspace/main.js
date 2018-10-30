var mysql = require('mysql');
	//console.log('ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'');
var con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
   database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
   // con.query("select * from world.city where name like 'patna%'", function (err, result) {
   // if (err) throw err;
    //console.log("Result: " + result);
	//  con.query("CREATE DATABASE mydb", function (err, result) {
 //   if (err) throw err;
  //  console.log("Database created");
   //var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
   //  var sql = "INSERT INTO customers (name, address) VALUES ('Company 1', 'Punggol1')";
   var sql = "SELECT * FROM customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
 
	
  });
  
  
});