//require module Express
var express = require('express');
var app = express();


//require folder routes
var users = require('./routes/users');
var products = require('./routes/products');

//require module Body Parser
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

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
app.use('/products', products);

//App listes localhost:3000
app.listen(3000)
