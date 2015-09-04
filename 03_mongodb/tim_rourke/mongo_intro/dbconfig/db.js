var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/myfirstdatabase';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
	console.log('mongoose has connected to ' + connectionString);
});

mongoose.connection.on('error', function(err) {
	console.log('mongoose error connecting to ' + connectionString);
	console.log(err);
});

mongoose.connection.on('disconnected', function() {
	console.log('mongoose has disconnected from ' + connectionString);
});