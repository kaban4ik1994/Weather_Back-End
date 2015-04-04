var baseUrlApiGeotargeting = 'http://maps.googleapis.com/maps/api/geocode/json';
var request = require('request');

var geotargeting = function(latlng, callbackFunction){
		var requestParams = {
		latlng: latlng,
		language: 'EN', 
		sensor: false };

		request({url: baseUrlApiGeotargeting, qs: requestParams}, callbackFunction);
};

module.exports = geotargeting;