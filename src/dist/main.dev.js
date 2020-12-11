"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("./router/index"));

require("./styles/reset.less");

var _index2 = _interopRequireDefault(require("./packges/button/index"));

var _index3 = _interopRequireDefault(require("./packges/dialog/index"));

var _index4 = _interopRequireDefault(require("./packges/toast/index"));

var _index5 = _interopRequireDefault(require("./packges/notify/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var components = [_index2["default"], _index3["default"]];
components.forEach(function (component) {
  _vue["default"].component(component.name, component);
});
_vue["default"].config.productionTip = false;
_vue["default"].prototype['$toast'] = _index4["default"];
_vue["default"].prototype['$notify'] = _index5["default"];
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _index["default"]
}).$mount('#app');