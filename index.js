var request = require('request');
var apiUrl = 'http://api-adresse.data.gouv.fr/';

function NationalAddress() {
}

function req(method, apiUrl, path, callback) {
  var options = {};
  options.method = method;
  options.url = apiUrl;
  options.headers = { 'Content-Type': 'application/json' };

  request(options, function (error, response, body) {
    if (error) return callback(null, JSON.parse(error));
    switch (response.statusCode) {
      case 200:
        return callback(null, JSON.parse(body));
        break;
      case 400:
        return callback('BAD_REQUEST');
        break;
    }
  });
}

module.exports = NationalAddress;
