"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingOverlay = exports.ImageLoadCatcher = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: #e1e8ed;\n    transition: opacity .3s ease-out;\n    opacity: ", ";\n    z-index: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 1px;\n  width: 1px;\n  position: absolute;\n  z-index: -1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageLoadCatcher = _styledComponents.default.img(_templateObject());

exports.ImageLoadCatcher = ImageLoadCatcher;

var loadingOverlay = function loadingOverlay(_ref) {
  var loading = _ref.loading;
  return (0, _styledComponents.css)(_templateObject2(), function (_ref2) {
    var loading = _ref2.loading;
    return loading ? 1 : 0;
  });
};

exports.loadingOverlay = loadingOverlay;