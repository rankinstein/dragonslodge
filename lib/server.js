'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    res.send('hello there!' + process.env.DROPBOX_APPKEY);
});

app.listen(3000, function () {
  console.log(process.env.DROPBOX_APPKEY)
    return console.log('Listening on post 3000');
});
