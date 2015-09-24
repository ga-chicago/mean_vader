// bring in mongoos again so we can define a Schema
var mongoose = require('mongoose');

// define the Car schema using Mongoose
var CarSchema = new mongoose.Schema({
	make: String,
	model: String,
	topSpeed: Number,
	owned: { type: Boolean, "default": false }
});

// export this Schema to the main app (index.js) for use
module.exports = mongoose.model('Car', CarSchema);

