
var express = require('express');
var app = express();
var request = require('request');
var weather = require('./weather');
var geotargeting = require('./geotargeting');

function setResHeader(req, res, next){
	res.header('Content-Type", "application/json');
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	next();
}

app.get('/*', setResHeader);

app.get('/Weather', function(req, res){
	weather(req.query.latitude + ',' + req.query.longitude, req.query.date, '70388b130b191be8c6a64da274a27',
     function(error, response, body){
		if (!error && response.statusCode === 200) {
			res.send(body); }
		else {
			res.status(400).send('Error');
		}
	});
});

app.get('/Location', function(req, res){
	geotargeting(req.query.latitude + ',' + req.query.longitude,
	 function(error, response, body){
    		if (!error && response.statusCode === 200) {
    		res.send(body); }
    		else{
    			res.status(400).send('Error');
    		}
	});
});

app.listen(1337);