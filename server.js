var baseUrlApiWeather = "http://api.worldweatheronline.com/free/v2/weather.ashx";
var baseUrlApiGeotargeting = "http://maps.googleapis.com/maps/api/geocode/json";

var express = require('express');
var app = express();
var request = require('request');
var weather = require('./weather');
var geotargeting = require('./geotargeting')

app.get('/Weather', function(req, res){
	res.header("Content-Type", "application/json");
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

	weather(baseUrlApiWeather, req.query.latitude + ',' + req.query.longitude, req.query.date,
     function(error, response, body){
		if (!error && response.statusCode == 200) {
			res.send(body); }
		else {
			res.status(400).send('Error');
		}
	});
});

app.get('/Location', function(req, res){
	res.header("Content-Type", "application/json");
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var requestParams = {
		latlng: req.query.latitude + ',' + req.query.longitude,
		language: 'EN', 
		sensor: false };

	geotargeting(baseUrlApiGeotargeting, req.query.latitude + ',' + req.query.longitude,
	 function(error, response, body){
    		if (!error && response.statusCode == 200) {
    		res.send(body); }
    		else{
    			res.status(400).send('Error');
    		}
	})
});

app.listen(1337, function(){
});