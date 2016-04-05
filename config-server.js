var express = require('express');
var mongoose = require('mongoose');

var app = express();

//database connection
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/activities');

app.use(express.static(__dirname + '/CLIENT'));

module.exports = app;
