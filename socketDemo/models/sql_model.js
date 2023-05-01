var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('example.db');
//change to match derictory

db.run("PRAGMA foreign_keys = ON;"); //enables foreign keys in sqlite3
//get all garages or any thing that actually is being measured. need to at least be logs.db

//track loggin method that is called backin the OATH controller

db.all('SELECT * FROM logs', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********CARS TABLE**********');
    console.log(rows);
  }
});
db.run("DELETE FROM logs WHERE id=?", 1, function(err){
  if(err){
    throw err
  }
});
db.all('SELECT * FROM logs', function(err, rows){
  if(err){
    console.log(err);
  } else {
  	console.log('********GARAGES TABLE**********');
    console.log(rows);
  }
});
