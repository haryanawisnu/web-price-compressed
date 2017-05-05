var bukalapak = require('../models/bukalapak');
var ebay = require('../models/ebay');

module.exports = {
  showBukalapak: function(req, res) {
    bukalapak(req.params.keyword, function(err, result) {
      if (!err) {
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
          err_message: `Err getData, msg : ${err}`,
          data: null
        });
      }
    })
  },
  showEbay: function(req, res) {
    ebay(req.params.keyword, function(err, result) {
      if (!err) {
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
          err_message: `Err getData, msg : ${err}`,
          data: null
        });
      }
    })
  }
}
