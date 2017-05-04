//require module express
var express = require('express');
//get Roter from module express
var router = express.Router();
//require folder controllers
var usersControllers = require('../controllers/users');
var itemsControllers = require('../controllers/items');
var jwthelpers = require('../helpers/jwtHelpers');

//setting HTTP methods to Router
router.get('/users', jwthelpers.login, usersControllers.getall); //admin only
router.get('/items1/:str', itemsControllers.getdata1); //admin only
router.get('/items2/:str', itemsControllers.getdata2); //admin only
router.get('/users/:id', jwthelpers.login, usersControllers.getone);
router.post('/users', jwthelpers.login, usersControllers.create);
router.delete('/users/:id', jwthelpers.login, usersControllers.delete);
router.put('/users/:id', jwthelpers.login, usersControllers.update);
router.post('/signup', usersControllers.create);
router.post('/signin', usersControllers.signin);

//export Router
module.exports = router;
