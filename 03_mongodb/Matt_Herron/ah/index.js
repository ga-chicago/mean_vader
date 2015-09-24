var express = require('express');

require('./models/db'); //db
var carModel = require('./models/cars'); //model and schema 


var app = express();

var body_parser = require('body-parser');
app.use(body_parser.json()); //parsing json abilities
app.use(body_parser.urlencoded({ extended: true }));

// enable cors
app.use(function(request, response, next) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
}); // end cors support

// enable a get request and return all results from cars
app.get('/api', function(request, response, next) {
        console.log('-------------------------------------------');
        console.log('Getting all cars from model...');
        console.log('-------------------------------------------');
        carModel.find(function(error, data) {
                if (error) return error;
                response.json(data);
        });
});

//enable a GET request that returns a specific item based on _id
app.get('/api/:id', function(request, response, next) {
        console.log('-------------------------------------------');
        console.log('Getting a single car from the model...')
        console.log('-------------------------------------------');
        carModel.findById(request.params.id, function(error, data) {
                if (error) return error;
                response.json(data);
        });
});

//enable a post request
app.post('/api', function(request, response, next) {
        console.log('------------------------------------------------------');
        console.log('Post request received, parsing request body and saving');
        console.log('------------------------------------------------------');
        carModel.create(request.body, function(error, data) {
                if (error) return error;
                response.json(data);
        });
});

app.put('/api/:id', function(request, response, next) {
        console.log('-------------------------------------------------------');
        console.log('Put request received, parsing request body and updating');
        console.log('-------------------------------------------------------');
        carModel.findByIdAndUpdate(request.params.id, request.body, function(error, data) {
                if (error) return error;
                response.json(data);
        });
});

app.patch('/api/:id', function(request, response, next) {
        console.log('-------------------------------------------------------');
        console.log('Put request received, parsing request body and updating');
        console.log('-------------------------------------------------------');
        carModel.findByIdAndUpdate(request.params.id, request.body, function(error, data) {
                if (error) return error;
                response.json(data);
        });
});

app.delete('/api/:id', function(request, response, next) {
        console.log('-------------------------------------------------------');
        console.log('Delete request received, parsing request body and updating');
        console.log('-------------------------------------------------------');
        carModel.findByIdAndRemove(request.params.id, request.body, function(error, data) {
                if (error) return error;
                response.json(data);
        });
});

app.listen(5000);
console.log('Server is listening on port 5000...');
