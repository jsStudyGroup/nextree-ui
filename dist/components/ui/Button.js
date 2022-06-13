"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

require("@/assets/style/scss/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function buttonRipples(e) {
  e.stopPropagation();
  var el = e.currentTarget;
  var ripples = document.createElement("i");
  el.appendChild(ripples);
  ripples.classList.add("ripples");
  e = e.touches ? e.touches[0] : e;
  var r = el.getBoundingClientRect(),
      d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
  ripples.style.cssText = "--s: 0; --o: 1;";
  ripples.offsetTop;
  ripples.style.cssText = "--t: 1; --o: 0; --d: ".concat(d, "; --x:").concat(e.clientX - r.left, "; --y:").concat(e.clientY - r.top, ";");
  setTimeout(function () {
    ripples.remove();
  }, 600);
}

function Button(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement("div", {
    className: "btn",
    onClick: buttonRipples
  }, label);
}

Button.propTypes = {
  label: _propTypes["default"].string,
  handleClick: _propTypes["default"].func
};
var _default = Button;
exports["default"] = _default;