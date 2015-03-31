var request = require('request');

var weather = function(url, q, date, callbackFunction){
		var requestParams = { 
		key: '70388b130b191be8c6a64da274a27',
		format: 'json',
		num_of_days: 1,
		q: q,
		date: date };

		request({url: url, qs: requestParams}, callbackFunction);
};

module.exports = weather;
