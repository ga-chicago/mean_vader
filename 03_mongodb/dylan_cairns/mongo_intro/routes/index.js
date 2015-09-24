var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// module.exports allows us to expose an export to the taskModel var
var taskModel = require('../models/Task'); 

// populate database with stuf
//CREATE of crud
var dataObject = {
	name: "Buy OJ",
	completed: "false",
	description: "go to Trader Joe's and buy OJ"
}

// taskModel.create(dataObject, function(err,task) {
// 	if (err) return err; 
// 	console.log('A document has been created: ');
// 	console.log(task);  
// });

/* GET all home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//send all db objects to API call 
router.get('/api', function(req, res, next){
	taskModel.find(function(err, tasks) {
		if (err) return err; 
		res.send(tasks);
	});
});

//get by id 
router.get('/api/:id', function(req, res, next){
	taskModel.findById(req.params.id, function(err, task) {
		if (err) return err;
		res.json(task); //formats as json if not already 
	}) 
});

//CREATE
router.post('/api', function(req, res, next){
	taskModel.create(req.body, function(err,task) {
	if (err) return err; 
	console.log('A document has been created: ');
	req.json(task);   
 })
});

module.exports = router;
