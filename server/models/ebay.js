var axios = require('axios');
require('dotenv').config();

module.exports = function(params, cb) {
  let id = process.env.EBAY_ID;
  let url = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&GLOBAL-ID=EBAY-US&SECURITY-APPNAME=' + id + '&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD=TRUE&buyerPostalCode=95125&itemFilter.name=MaxPrice&itemFilter.value=25&keywords=' + params;
  axios.get(url)
    .then(function(response) {
      let sorted = response.data.findItemsByKeywordsResponse[0].searchResult[0].item.sort((a, b) => {
        return a.sellingStatus[0].currentPrice[0].__value__ - b.sellingStatus[0].currentPrice[0].__value__;
      })
      cb(null, sorted);
    })
    .catch(function(error) {
      cb(error);
    });
}
