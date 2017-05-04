//require module express
var express = require('express');
//get Roter from module express
var router = express.Router();
//require folder controllers
var usersControllers = require('../controllers/users');

//setting HTTP methods to Router
router.get('/', usersControllers.getall);
router.get('/:id', usersControllers.getone);
router.post('/', usersControllers.create);
router.delete('/:id', usersControllers.delete);
router.put('/:id', usersControllers.update);

//export Router
module.exports = router;
