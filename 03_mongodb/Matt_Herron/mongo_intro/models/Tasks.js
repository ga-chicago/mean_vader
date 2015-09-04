var mongoose = require('mongoose');


//String

//Number

//Date

//Boolean

//Buffer - mixed data types like images, video etc

//Mixed - Mixed data type

//Array - arrays must contain data of the same type

//ObjectID (_id) - unique GUID or ID associated with your new model

// declare a schema for model
var TaskSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	description: String,
	updated_at: { type: Date, default: Date.now }
});

// Hey node, I want to export the following module for reuse
// mongoose - create a model with a (name, schema)
module.exports = mongoose.model('Task', TaskSchema);