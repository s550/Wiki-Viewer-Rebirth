"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CardAnimation = require("./CardAnimation");

var _Image = _interopRequireDefault(require("./CardMedia/Image"));

var _CardContent = require("./CardContent");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 10px;\n  width: 30%;\n  display: block;\n  background: #e1e8ed;\n  opacity: 0.8;\n  ", " animation-delay: .25s;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: 14px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 95%;\n  display: block;\n  background: #e1e8ed;\n  margin-bottom: 12px;\n  opacity: 0.8;\n  position: relative;\n  ", " animation-delay: .125s;\n\n  height: 33px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: -1px;\n    right: -1px;\n    height: 6px;\n    background: #fff;\n  }\n\n  &::before {\n    top: 14px;\n  }\n\n  &::after {\n    bottom: 14px;\n  }\n\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 16px;\n  width: 60%;\n  display: block;\n  background: #e1e8ed;\n  margin: 2px 0 8px;\n  opacity: 0.8;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MediaEmpty = (0, _styledComponents.default)(_Image.default)(_templateObject(), _CardAnimation.emptyStateImageAnimation);
var HeaderEmpty = (0, _styledComponents.default)('header')(_templateObject2(), _CardAnimation.emptyStateAnimation);
var DescriptionEmpty = (0, _styledComponents.default)('span')(_templateObject3(), _CardAnimation.emptyStateAnimation, function (_ref) {
  var cardSize = _ref.cardSize;
  return cardSize !== 'large' && _utils.media.mobile(_templateObject4());
});
var FooterEmpty = (0, _styledComponents.default)('footer')(_templateObject5(), _CardAnimation.emptyStateAnimation);

var _ref3 =
/*#__PURE__*/
_jsx(HeaderEmpty, {});

var _ref4 =
/*#__PURE__*/
_jsx(FooterEmpty, {});

var CardEmptyState = function CardEmptyState(_ref2) {
  var cardSize = _ref2.cardSize;
  return _jsx(_react.Fragment, {}, void 0, _jsx(MediaEmpty, {
    cardSize: cardSize
  }), _jsx(_CardContent.Content, {
    cardSize: cardSize,
    className: "microlink_card__content"
  }, void 0, _ref3, _jsx(DescriptionEmpty, {
    cardSize: cardSize
  }), _ref4));
};

var _default = CardEmptyState;
exports.default = _default;