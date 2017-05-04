//require module DB mongoose
var mongoose = require('mongoose');
//get Schema from mongoose
var Schema = mongoose.Schema;
//init Schema User
var usersSchema = new Schema({
  username: String,
  password: String
});
//set model mongoose from Schema User
var User = mongoose.model('User', usersSchema);

//export model User
module.exports = User;
