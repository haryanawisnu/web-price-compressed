var axios = require('axios');
require('dotenv').config();

module.exports = function(params, cb) {
  let id = process.env.RAKUTEN_ID;
  let url = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222?applicationId=' + id + '&sort=-itemPrice&hits=10&keyword=' + params;
  axios.get(url)
    .then(function(response) {
      let arr = response.data.Items;
      arr = arr.reverse();
      cb(null, arr);
    })
    .catch(function(error) {
      cb(error);
    });
}
