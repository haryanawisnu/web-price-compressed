//require folder models to file foods
var User = require('../models/users');

//export function
module.exports = {
  //Funtion to get all data User
  getall: (req, res, next) => {
    User.find().exec(function(err, result) {
      if (result) {
        res.json({
          success: true,
          error: false,
          err_message: null,
          data: result
        });
      } else {
        res.json({
          success: false,
          error: true,
          err_message: `Err getAll, msg : '${err}'`,
          data: null
        });
      }
    });
  },
  //Funtion to get one data User
  getone: (req, res, next) => {
    let id = req.params.id;
    User.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        res.json({
          success: true,
          error: false,
          err_message: null,
          data: result
        });
      } else {
        res.json({
          success: false,
          error: true,
          err_message: `Err getOne, msg : '${err}'`,
          data: null
        });
      }
    });
  },
  //Funtion to create data User
  create: (req, res, next) => {
    User.create({
      username: req.body.username,
      password: req.body.password
    }, function(err, result) {
      if (result) {
        res.json({
          success: true,
          error: false,
          err_message: null,
          data: result
        });
      } else {
        res.json({
          success: false,
          error: true,
          err_message: `Err create, msg : '${err}'`,
          data: null
        });
      }
    });
  },
  //Funtion to delete data User
  delete: (req, res, next) => {
    let id = req.params.id;
    User.remove({
      _id: id
    }, function(err, result) {
      if (result) {
        res.json({
          success: true,
          error: false,
          err_message: null,
          data: result
        });
      } else {
        res.json({
          success: false,
          error: true,
          err_message: `Err delete, msg : '${err}'`,
          data: null
        });
      }
    });
  },
  //Funtion to before find and after update data User
  update: (req, res, next) => {
    let id = req.params.id;
    User.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        User.update({
          _id: id
        }, {
          $set: {
            name: req.body.name || result.name,
            price: req.body.price || result.price,
            expire_date: req.body.expire_date || result.expire_date
          }
        }, function(err, result) {
          if (result) {
            res.json({
              success: true,
              error: false,
              err_message: null,
              data: result
            });
          } else {
            res.json({
              success: false,
              error: true,
              err_message: `Err findUpt1, msg : '${err}'`,
              data: null
            });
          }
        });
      } else {
        res.json({
          success: false,
          error: true,
          err_message: `Err findUpt1, msg : '${err}'`,
          data: null
        });
      }
    });
  }
}
