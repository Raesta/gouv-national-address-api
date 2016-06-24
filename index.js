var request = require('request');
var apiUrl = 'http://api-adresse.data.gouv.fr/';

function NationalAddress() {
  this.apiUrl = apiUrl;
  this.request = req;
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

NationalAddress.prototype.search = function(params, callback) {
  if (!params) return callback('MISSING_PARAMETERS');
  if (!params.text) return callback('MISSING_TEXT');
  var url = apiUrl + 'search/?q=' + params.text;
  if (params.limit) url = url + '&limit=' + params.limit;
  if (params.autocomplete) url = url + '&autocomplete=' + params.autocomplete;
  if (params.lat) url = url + '&lat=' + params.lat;
  if (params.lon) url = url + '&lon=' + params.lon;
  if (params.type) url = url + '&type=' + params.type;
  if (params.postcode) url = url + '&postcode=' + params.postcode;
  if (params.citycode) url = url + '&citycode=' + params.citycode;
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}
NationalAddress.prototype.reverse = function(params, callback) {
  if (!params) return callback('MISSING_PARAMETERS')
  if (!params.lon) return callback('MISSING_LON');
  if (!params.lat) return callback('MISSING_LAT');
  var url = apiUrl + 'reverse/?lon=' + params.lon + '&lat=' + params.lat;
  if (params && params.type) url = url + '&type=' + params.type;
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}
module.exports = NationalAddress;
