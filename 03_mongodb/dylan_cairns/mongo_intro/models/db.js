//use ORM called mongoose
var mongoose = require('mongoose'); 

// define connection string - how to connect to db 
// ftp://admin:password@ftp.website.com/path/to/www
// protocol://username:password@website.com:3000/resource-name

// mongodb://server-name.com:port/name-of-databse
var connectionString = "mongodb://localhost/myfirstdatabase"; 

// tell mongoose to connect to our database using connectionString
mongoose.connect(connectionString);

// listen for events in mongoose
// "connected" event - db has connected
// "error" event - something's wrong 
// "disconnected" event - db disconnected 
mongoose.connection.on('connected', function() {
	console.log('mongoose connected to ' + connectionString); 
});

mongoose.connection.on('error', function(err) {
	console.log('mongoose had an error ' + err); 
});

mongoose.connection.on('disconnected', function() {
	console.log('mongoose disconnected'); 
});