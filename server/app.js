//require module Express
var express = require('express');
var app = express();

//require folder routes
var users = require('./routes/users');

//require module Body Parser
var bodyParser = require('body-parser');

//require module DB Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webpricecompressed');

//Init module Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//init HTTP Route
app.use('/', users);

//App listes localhost:3000
app.listen(3000)
