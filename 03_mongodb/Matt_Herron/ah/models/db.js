var mongoose = require('mongoose');

// need a connection string for Mongo to connect / create new Database
var connectionString = 'mongodb://localhost/carsdb';

// connect to the database
mongoose.connect(connectionString);

// connection and disconnection events, and error event for logging
mongoose.connection.on('connected', function() {
	console.log('Connection to ' + connectionString + ' was successful...');
});

mongoose.connection.on('error', function(err) {
	console.log('Connection to ' + connectionString + ' was failed with error: ' + err);
});

mongoose.connection.on('disconnected', function() {
	console.log('Connection to ' + connectionString + ' has been terminated...');
});