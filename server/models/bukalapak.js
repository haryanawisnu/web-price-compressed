var axios = require('axios');
require('dotenv').config();

module.exports = function(params, cb) {
  let url = 'https://api.bukalapak.com/v2/products.json?keywords=' + params;
  let key = process.env.BUKALAPAK_KEY_ID;
  let value = process.env.BUKALAPAK_KEY_VALUE;
  axios.get(url, {
      headers: {
        key: value
      }
    })
    .then(function(response) {
      cb(null, response.data.products);
    })
    .catch(function(error) {
      cb(error);
    });
}
