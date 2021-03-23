"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _controls = require("./controls");

var _wrap = _interopRequireDefault(require("../wrap"));

var _utils = require("../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Video = (0, _styledComponents.default)('video')(_templateObject(), function (_ref) {
  var autoPlay = _ref.autoPlay;
  return autoPlay && "\n    &::media-controls-start-playback-button {\n      display: none;\n      appearance: none;\n    }\n  ";
});

var CardVideo =
/*#__PURE__*/
function (_Component) {
  _inherits(CardVideo, _Component);

  function CardVideo(props) {
    var _this;

    _classCallCheck(this, CardVideo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardVideo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePlayback", function (event) {
      if (_this.props.controls) {
        event.preventDefault();

        _this.setState(function (_ref2) {
          var playing = _ref2.playing;
          var action = !playing ? 'play' : 'pause';

          _this.video[action]();

          return {
            playing: !playing
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateProgress", function () {
      var progress = _this.video.currentTime / _this.video.duration * 100;

      _this.setState({
        progress: progress
      });
    });

    _this.state = {
      playing: props.autoPlay,
      progress: 0
    };
    return _this;
  }

  _createClass(CardVideo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          autoPlay = _this$props.autoPlay,
          cardSize = _this$props.cardSize,
          controls = _this$props.controls,
          image = _this$props.image,
          loading = _this$props.loading,
          loop = _this$props.loop,
          muted = _this$props.muted,
          playsInline = _this$props.playsInline,
          video = _this$props.video,
          props = _objectWithoutProperties(_this$props, ["autoPlay", "cardSize", "controls", "image", "loading", "loop", "muted", "playsInline", "video"]);

      var _this$state = this.state,
          playing = _this$state.playing,
          progress = _this$state.progress;
      return _react.default.createElement(_wrap.default, _extends({
        className: "microlink_card__media_video_wrapper",
        cardSize: cardSize,
        loading: loading,
        onClick: this.togglePlayback
      }, props), _react.default.createElement(Video, _extends({
        className: "microlink_card__media microlink_card__media_video",
        src: (0, _utils.getUrlPath)(video),
        poster: (0, _utils.imageProxy)(image),
        muted: muted,
        autoPlay: autoPlay,
        loop: loop,
        playsInline: playsInline,
        ref: function ref(node) {
          return _this2.video = node;
        }
      }, controls ? {
        onTimeUpdate: this.updateProgress
      } : {})), _jsx(_controls.PlayButton, {
        cardSize: cardSize,
        visible: controls && !playing
      }), controls && _jsx(_controls.ProgressBar, {
        cardSize: cardSize,
        progress: progress,
        playing: playing
      }));
    }
  }]);

  return CardVideo;
}(_react.Component);

var _default = CardVideo;
exports.default = _default;