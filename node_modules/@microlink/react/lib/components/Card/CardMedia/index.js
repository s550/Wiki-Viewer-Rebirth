"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _utils = require("../../../utils");

var _Image = _interopRequireDefault(require("./Image"));

var _Video = _interopRequireDefault(require("./Video"));

var _loader = require("./loader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isUrl = function isUrl(url) {
  return (0, _utils.getUrlPath)(url) !== null;
};

var CardMedia =
/*#__PURE__*/
function (_Component) {
  _inherits(CardMedia, _Component);

  function CardMedia() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CardMedia);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CardMedia)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loading: isUrl(_this.props.image)
    });

    return _this;
  }

  _createClass(CardMedia, [{
    key: "renderMedia",
    value: function renderMedia() {
      var loading = this.state.loading;
      var _this$props = this.props,
          image = _this$props.image,
          video = _this$props.video;
      var el = !isUrl(video) && isUrl(image) ? _Image.default : _Video.default;
      return (0, _react.createElement)(el, _objectSpread({}, this.props, {
        key: 'media',
        loading: loading
      }));
    }
  }, {
    key: "renderLoadCatcher",
    value: function renderLoadCatcher() {
      var _this2 = this;

      var image = this.props.image;
      var loading = this.state.loading;
      return loading && isUrl(image) && (0, _react.createElement)(_loader.ImageLoadCatcher, {
        key: 'imageLoader',
        src: image,
        onLoad: function onLoad() {
          return _this2.setState({
            loading: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return [this.renderMedia(), this.renderLoadCatcher()];
    }
  }]);

  return CardMedia;
}(_react.Component);

exports.default = CardMedia;