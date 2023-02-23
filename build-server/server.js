"use strict";

var _appModulePath = _interopRequireDefault(require("app-module-path"));
var _http = _interopRequireDefault(require("http"));
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_appModulePath["default"].addPath("".concat(__dirname));
var Api = (0, _express["default"])();
var HTTP = _http["default"].Server(Api);
Api.use((0, _cors["default"])());
Api.get('/test', function (req, res) {
  return res.status(200).send('success!');
});
HTTP.listen(9001, function () {
  console.log('listening on *:9001');
});