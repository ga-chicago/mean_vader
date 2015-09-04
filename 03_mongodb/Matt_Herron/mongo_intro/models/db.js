// we are going to mongoose as the ORM
var mongoose = require('mongoose');

 // define a connection string
 //protocol://username:password@website.com:3000/resource-name

 var connectionString = 'mongodb://localhost/myfirstdatabase';

 //tell mongoose to connect to the database using the connection string
 mongoose.connect(connectionString);

 // listen for events in mongoose
 // connected event
 mongoose.connection.on('connected', function() {
 	console.log('mongoose has connected to ' + connectionString);
 });
 // error event = something has gone wrong
mongoose.connection.on('error', function(error) {
 	console.log('mongoose has failed to execute connection to ' + connectionString);
 	console.log('The error event is ' + error);
 });
 // disconnected event - the database has been disconnected
mongoose.connection.on('disconnected', function() {
 	console.log('mongoose has been disconnected from ' + connectionString);
 });