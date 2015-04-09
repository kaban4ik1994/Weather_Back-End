var baseUrlApiGeotargeting = 'http://maps.googleapis.com/maps/api/geocode/json';
var request = require('request');

var geotargeting = function (options) {
    var requestParams = {
        latlng: options.latlng,
        language: 'EN',
        sensor: false
    };

    request({ url: baseUrlApiGeotargeting, qs: requestParams }, options.callbackFunction);
};

module.exports = geotargeting;