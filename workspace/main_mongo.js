var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
 // if (err) throw err;
 // console.log("Database created!");
  //db.close();
  
  //  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
 // dbo.createCollection("customers", function(err, res) {
  //  if (err) throw err;
 //   console.log("Collection created!");
  //  db.close();
	//  });
	
	  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});