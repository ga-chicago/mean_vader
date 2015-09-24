var mongoose = require('mongoose'); 

// declare a scheme (schema) for a model 
// data types: 

// String
// Number 
// Date
// Boolean
// Buffer - mixed data types (images, video, etc)
// Mixed - mixed data types (object with multiple types)
// Array (arrays must contain data of the same type...only nums, only strings, etc)
// ObjectId (_id) - unique GUID or ID associated with your new model 

//schema is a blueprint for how your models should look
// ... here it does some validation 
var TaskSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	description: String,
	updated_at: { type: Date, default: Date.now }

});
// tells node in require statement that you want to export
// something directly from this file 

// hey node... export the following module for re-use
// mongoose - create a model with a (name, schema)
module.exports = mongoose.model('Task', TaskSchema); 