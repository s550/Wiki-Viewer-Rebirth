"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyStateImageAnimation = exports.emptyStateAnimation = void 0;

var _styledComponents = require("styled-components");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 1.25s linear infinite;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " .75s linear infinite;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    background: #e1e8ed;\n  }\n  70% {\n    background: #dce3e8;\n  }\n  100% {\n    background: #e1e8ed;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    background: #e1e8ed;\n  }\n  70% {\n    background: #cdd4d8;\n  }\n  100% {\n    background: #e1e8ed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var emptyStatePulse = (0, _styledComponents.keyframes)(_templateObject());
var emptyStateImagePulse = (0, _styledComponents.keyframes)(_templateObject2());
var emptyStateAnimation = (0, _styledComponents.css)(_templateObject3(), emptyStatePulse);
exports.emptyStateAnimation = emptyStateAnimation;
var emptyStateImageAnimation = (0, _styledComponents.css)(_templateObject4(), emptyStateImagePulse);
exports.emptyStateImageAnimation = emptyStateImageAnimation;