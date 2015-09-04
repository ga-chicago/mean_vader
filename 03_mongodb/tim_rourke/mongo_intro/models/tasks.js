var mongoose = require('mongoose');
var schema = mongoose.Schema;

var TaskSchema = new schema({
	name: String,
	completed: { type: Boolean, default: false },
	description: String,
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', TaskSchema);