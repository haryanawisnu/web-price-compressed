//require module express
var express = require('express');
//get Roter from module express
var router = express.Router();
//require folder controllers
var productsControllers = require('../controllers/products');

//setting HTTP methods to Router
router.get('/bukalapak/:keyword', productsControllers.showBukalapak); //admin only
router.get('/ebay/:keyword', productsControllers.showEbay); //admin only
router.get('/rakuten/:keyword', productsControllers.showRakuten); //admin only

//export Router
module.exports = router;
