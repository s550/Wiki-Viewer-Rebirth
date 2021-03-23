"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageProxy = exports.isLarge = exports.fetchFromApi = exports.fetchFromApiUrl = exports.createApiUrl = exports.defaultApiParameters = exports.media = exports.someProp = exports.getUrlPath = exports.isNil = exports.isObject = exports.isFunction = void 0;

var _styledComponents = require("styled-components");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: 48em) {\n      ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 48em) {\n      ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REGEX_HTTPS = /^https/;
var REGEX_LOCALHOST = /http:\/\/localhost/;

var isFunction = function isFunction(fn) {
  return typeof fn === 'function';
};

exports.isFunction = isFunction;

var isObject = function isObject(obj) {
  return _typeof(obj) === 'object';
};

exports.isObject = isObject;

var isNil = function isNil(value) {
  return value == null;
};

exports.isNil = isNil;

var getUrlPath = function getUrlPath(data) {
  return data && isObject(data) ? data.url : data;
};

exports.getUrlPath = getUrlPath;

var someProp = function someProp(data, props) {
  return data[props.find(function (prop) {
    return data[prop] !== null && data[prop] !== undefined;
  })];
};

exports.someProp = someProp;
var media = {
  mobile: function mobile() {
    return (0, _styledComponents.css)(_templateObject(), _styledComponents.css.apply(void 0, arguments));
  },
  desktop: function desktop() {
    return (0, _styledComponents.css)(_templateObject2(), _styledComponents.css.apply(void 0, arguments));
  }
};
exports.media = media;

var apiValue = function apiValue(key, value) {
  return value === true ? "".concat(key) : "".concat(key, "=").concat(value);
};

var defaultApiParameters = {
  video: false,
  contrast: false,
  screenshot: false,
  prerender: 'auto'
};
exports.defaultApiParameters = defaultApiParameters;

var createApiUrl = function createApiUrl(props) {
  var apiKey = props.apiKey,
      targetUrl = props.url,
      screenshot = props.screenshot,
      prerender = props.prerender,
      contrast = props.contrast,
      video = props.video;
  var alias = apiKey ? 'pro' : 'api';
  var url = "https://".concat(alias, ".microlink.io/?url=").concat(encodeURIComponent(targetUrl));
  if (!isNil(video)) url = "".concat(url, "&").concat(apiValue('video', video));

  if (!isNil(contrast) && contrast !== defaultApiParameters.contrast) {
    url = "".concat(url, "&").concat(apiValue('palette', contrast));
  }

  if (!isNil(prerender) && prerender !== defaultApiParameters.prerender) {
    url = "".concat(url, "&").concat(apiValue('prerender', prerender));
  }

  if (!isNil(screenshot) && screenshot !== defaultApiParameters.screenshot) {
    url = "".concat(url, "&").concat(apiValue('screenshot', screenshot));
  }

  return url;
};

exports.createApiUrl = createApiUrl;

var fetchFromApiUrl = function fetchFromApiUrl(_ref) {
  var apiKey = _ref.apiKey,
      apiUrl = _ref.apiUrl;
  var headers = apiKey ? {
    'x-api-key': apiKey
  } : {};
  return fetch(apiUrl, {
    headers: headers
  }).then(function (res) {
    return res.json();
  });
};

exports.fetchFromApiUrl = fetchFromApiUrl;

var fetchFromApi = function fetchFromApi(props) {
  var apiUrl = createApiUrl(props);
  return fetchFromApiUrl(_objectSpread({
    apiUrl: apiUrl
  }, props));
};

exports.fetchFromApi = fetchFromApi;

var isLarge = function isLarge(cardSize) {
  return cardSize === 'large';
};

exports.isLarge = isLarge;

var imageProxy = function imageProxy(url) {
  if (!url || REGEX_LOCALHOST.test(url) || REGEX_HTTPS.test(url)) return url;
  return "https://images.weserv.nl/?url=".concat(encodeURIComponent(url).replace('http://', ''));
};

exports.imageProxy = imageProxy;