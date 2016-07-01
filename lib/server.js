'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.send('hello there!');
});

var port = process.env.PORT || 8080;
// start the server
var server = app.listen(port, function () {
  console.log('listening at ' + port);
});