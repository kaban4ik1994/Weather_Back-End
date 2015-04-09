
var express = require('express');
var app = express();
var weather = require('worldweatheronline-node-module');
var geotargeting = require('google-geotargeting-node-module');

function setResHeader(req, res, next) {
    res.header('Content-Type", "application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
}

app.get('/*', setResHeader);

app.get('/Weather', function (req, res) {
    weather({
        key: '70388b130b191be8c6a64da274a27',
        q: req.query.latitude + ',' + req.query.longitude,
        date: req.query.date,
        callbackFunction: function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
            else {
                res.status(400).send('Error');
            }
        }
    });
});

app.get('/Location', function (req, res) {
    geotargeting({
        latlng: req.query.latitude + ',' + req.query.longitude,
        callbackFunction: function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
            else {
                res.status(400).send('Error');
            }
        }
    }
);
});

app.listen(1337);