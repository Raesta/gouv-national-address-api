gouv-national-address-api
======

[![NPM](https://nodei.co/npm/gouv-national-address-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gouv-national-address-api/)

[![npm version](https://badge.fury.io/js/gouv-national-address-api.svg)](https://badge.fury.io/js/gouv-national-address-api)

A Node wrapper for the [national adress api](https://api.gouv.fr/api/base-adresse-nationale.html).
---

### Installation
```javascript
$ npm install gouv-national-address-api
```
or
```javascript
$ npm install git://github.com/Raesta/gouv-national-address-api.git
```

### Example
```javascript
var NationalAddressAPI = require('gouv-national-address-api');

var NationalAddress = new NationalAddressAPI();

NationalAddress.search({text: '1 avenue république'}, function(error, result) {
  console.log(error, result);
});

NationalAddress.search({text: '1 avenue république', limit: 3}, function(error, result) {
  console.log(error, result);
});
```

### Todo
- add search csv
- add reverse csv
