var express = require('express');
// var partials = require('express-partials');
// var bodyParser = require('body-parser');

var app = express();

// app.use(partials());
// app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/CLIENT'));

// app.get('/', function(req,res){

// })

module.exports = app;
