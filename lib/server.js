'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static('public'));

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '..', 'public', 'index.html'));
});

var generateToken = function generateToken() {
  return _crypto2.default.createHash('sha1').update(Date.now().toString()).digest('hex').toString();
};

var authenticate = function authenticate(req, res) {
  var username = 'Hello';
  var password = 'World';
  console.log("Authenticate?:", req.body);
  if (req.body.username === username && req.body.password === password) {
    res.send({ success: true, token: generateToken() });
  } else {
    res.status(401).send({ success: false });
  }
};

app.post('/authenticate', authenticate);

app.get('*', function (req, res, next) {
  console.log('middleware!', req.body);
  next();
});

app.get('/greet', function (req, res) {
  res.send('hello there!');
});

var port = process.env.PORT || 8080;
// start the server
var server = app.listen(port, function () {
  console.log('listening at ' + port);
});