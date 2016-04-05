var express = require('express');
var mongoose = require('mongoose');

var app = express();

//database connection
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/boredom_buster');

//middleware
app.use(express.static(__dirname + '/CLIENT'));

//routes
var activityController = require('./DB/activityController.js')
app.get('/activities', activityController.allOptions);
app.get('/rainy', activityController.allRainy);

module.exports = app;
