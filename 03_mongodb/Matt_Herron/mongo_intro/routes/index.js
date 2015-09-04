var express = require('express');
var router = express.Router();
var taskModel = require('../models/Tasks');

// populate the database with fun stuff
// create from CRUD
// dataObject could be req.body

var dataObject = {
	name: "Buy crack",
	completed: false,
	description: "Go to Tony's house and smoke crack with him"
}

taskModel.create(dataObject, function(error, task) {
	if (error) {
		return error
	} else {
		console.log('A document object has been created:');
		console.log(task);
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET all
// send all database objects to the api call
router.get('/api', function(req, res, next) {
	taskModel.find(function(error, tasks) {
		if (error) return error;
		res.send(tasks);
	});
});

//GET by id
router.get('/api/:id', function(req, res, next) {
	taskModel.findById(req.params.id, function(error, task) {
		if (error) return error;
		res.json(task);
	});
});

// POST for create
router.post('/api', function(req, res, next) {
	taskModel.create(req.body, function(error, task) {
		if (error) return error;
		console.log('A document object has been created:');
		console.log(task);
		res.json(task);
	});
});

module.exports = router;
