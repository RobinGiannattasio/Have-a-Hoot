var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

//database connection
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/boredom_buster');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/CLIENT'));

//routes
var activityController = require('./DB/activityController.js')
app.get('/activities', activityController.allOptions);
app.get('/outdoor', activityController.allOutdoor);
app.get('/indoor', activityController.allIndoor);
app.get('/rainy', activityController.allRainy);
app.post('/user', activityController.postActivity);

//error handling
app.use(function (error, req, res, next) {
    // log the error then send it to the next middleware in
    console.error(error.stack);
    next(error);
  });
app.use(function (error, req, res, next) {
    // send error message to client
    // message for gracefull error handling on app
    res.status(500).send({error: error.message});
  });

module.exports = app;
