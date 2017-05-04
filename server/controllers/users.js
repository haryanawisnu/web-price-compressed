//require folder models to file foods
var User = require('../models/users');
var passwordHash = require('password-hash');
var jwthelpers = require('../helpers/jwtHelpers');

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
          err_message: `Err getAll, msg : ${err}`,
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
      password: passwordHash.generate(req.body.password)
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
            username: req.body.username || result.username
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
              err_message: `Err findUpt1, msg : ${err}`,
              data: null
            });
          }
        });
      } else {
        res.json({
          success: false,
          error: true,
          err_message: `Err findUpt1, msg : ${err}`,
          data: null
        });
      }
    });
  },
  signin: (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({
      username: username
    }).then(user => {
      if (!user) {
        res.json({
          success: false,
          error: true,
          err_message: `User not found.`,
          data: null
        });
      } else if (user) {
        if (passwordHash.verify(password, user.password)) {
          res.json({
            success: true,
            error: false,
            err_message: null,
            data: jwthelpers.sign(user)
          });
        } else {
          res.json({
            success: false,
            error: true,
            err_message: `Wrong password.`,
            data: null
          });
        }
      }
    })
  }
}
