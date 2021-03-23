"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _wrap = _interopRequireDefault(require("./wrap"));

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-image: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = (0, _styledComponents.default)(_wrap.default)(_templateObject(), function (_ref) {
  var image = _ref.image;
  return image ? "url('".concat((0, _utils.imageProxy)(image), "')") : '';
});
Image.defaultProps = {
  className: 'microlink_card__media microlink_card__media_image'
};
var _default = Image;
exports.default = _default;