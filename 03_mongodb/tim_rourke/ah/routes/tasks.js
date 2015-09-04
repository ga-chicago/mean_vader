var express = require('express');
var router = express.Router();

module.exports = function(Task){

	var Task = Task;

	/* GET tasks listing. */
	router.get('/', function(req, res, next) {
	  Task.find(function(err, tasks) {
	  	if (err) {
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
	  });
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
		});
	});

	/* PUT task */
	router.put('/:id', function(req, res, next) {
		Task.findById(req.params.id, function(err, task) {
	  	if (!task) {
	  		next();
	  	} else if (err) {
	  		throw err;
	  	} else {
	  		task.update(req.body, function(err, updatedTask) {
	  			if (err) next(err);
	  			res.json(updatedTask);		
	  		});
	  	}
	  });
	});

	/* DELETE task */
	router.delete('/:id', function(req, res, next) {
		Task.findById(req.params.id, function(err, task) {
	  	if (!task) {
	  		next();
	  	} else if (err) {
	  		throw err;
	  	} else {
	  		task.remove(function(err, removedTask) {
	  			if (err) next(err);
	  			res.json({});		
	  		});
	  	}
	  });
	});

	return router;

};
