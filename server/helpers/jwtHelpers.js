var jwt = require('jsonwebtoken');

module.exports = {
  sign: function(value) {
    var token = jwt.sign(JSON.stringify(value), 'secret');
    return token;
  },
  login: function(req, res, next) {
    jwt.verify(req.headers.token, 'secret',
      function(err, decoded) {
        if (decoded) {
          next();
        } else {
          res.json({
            success: false,
            error: true,
            err_message: `Authentication failed, please login`,
            data: null
          });
        }
      });
  }
}
