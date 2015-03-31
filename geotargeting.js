var request = require('request');

var geotargeting = function(url, latlng, callbackFunction){
		var requestParams = {
		latlng: latlng,
		language: 'EN', 
		sensor: false };

		request({url: url, qs: requestParams}, callbackFunction);
}

module.exports = geotargeting;