"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = exports.PlayButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: #e1e8ed;\n  height: ", "px;\n  transition: opacity 0.3s ease-in-out;\n\n  .microlink_card:not(:hover) & {\n    opacity: 0 !important;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background: #fff;\n  transform: rotate(30deg) skewX(-30deg) scale(1, 0.866);\n  top: calc(50% - 11px);\n  left: calc(50% - 11px);\n  z-index: 2;\n  opacity: ", ";\n  transition: opacity 0.15s ease-in-out;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    background: inherit;\n    left: 0;\n    top: 0;\n  }\n\n  &,\n  &::before,\n  &::after {\n    width: ", "px;\n    height: ", "px;\n    border-top-right-radius: 30%;\n    backface-visibility: hidden;\n  }\n\n  &::before {\n    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)\n      translate(0, -50%);\n  }\n  &::after {\n    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PLAY_BUTTON_SIZE = 22;
var PROGRESS_BAR_HEIGHT = 2;

var getSize = function getSize(base, size) {
  return base * (size === 'normal' ? 1 : 1.75);
};

var PlayButton = (0, _styledComponents.default)('div')(_templateObject(), function (_ref) {
  var visible = _ref.visible;
  return visible ? 1 : 0;
}, function (_ref2) {
  var cardSize = _ref2.cardSize;
  return getSize(PLAY_BUTTON_SIZE, cardSize);
}, function (_ref3) {
  var cardSize = _ref3.cardSize;
  return getSize(PLAY_BUTTON_SIZE, cardSize);
});
exports.PlayButton = PlayButton;
var ProgressBar = (0, _styledComponents.default)('div').attrs(function (_ref4) {
  var playing = _ref4.playing,
      progress = _ref4.progress;
  return {
    style: {
      width: "".concat(progress, "%") || 0,
      opacity: playing ? 0.8 : 0
    }
  };
})(_templateObject2(), function (_ref5) {
  var cardSize = _ref5.cardSize;
  return getSize(PROGRESS_BAR_HEIGHT, cardSize);
});
exports.ProgressBar = ProgressBar;