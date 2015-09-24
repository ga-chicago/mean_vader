var express = require('express');
var router = express.Router();

module.exports = function(Task){

	var Task = Task;

	/* GET tasks listing. */
	router.get('/', function(req, res, next) {
	  Task.find(function(err, tasks) {
	  	if (!tasks) {
	  		next();
	  	} else if (err) {
	  		throw err;
	  	} else {
	  		res.json(tasks);		
	  	}
	  })
	});

	/* GET single task. */
	router.get('/:id', function(req, res, next) {
	  Task.findById(req.params.id, function(err, task) {
	  	if (!task) {
	  		next();
	  	} else if (err) {
	  		throw err;
	  	} else {
	  		res.json(task);	
	  	}
	  })
	});

	/* POST new task */
	router.post('/', function(req, res, next) {
		Task.create({
			name: req.body.name,
			description: req.body.description
		},
		function(err, task) {
			if (err) throw err;
			res.json(task);
		})
	});

	/* PUT task */
	router.put('/', function(req, res, next) {
		// Task.create({
		// 	name: req.body.name,
		// 	description: req.body.description
		// },
		// function(err, task) {
		// 	if (err) throw err;
		// 	res.send(task);
		// })
	});

	return router;

};
