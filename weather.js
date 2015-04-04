var baseUrlApiWeather = 'http://api.worldweatheronline.com/free/v2/weather.ashx';
var request = require('request');

var weather = function(q, date, key, callbackFunction){
		var requestParams = { 
		key: key,
		format: 'json',
		num_of_days: 1,
		q: q,
		date: date };

		request({url: baseUrlApiWeather, qs: requestParams}, callbackFunction);
};

module.exports = weather;
