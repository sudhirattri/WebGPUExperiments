/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0px;\n  padding: 0px;\n}\n\n.canvas-container {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB","sourcesContent":["body {\n  margin: 0px;\n  padding: 0px;\n}\n\n.canvas-container {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/.pnpm/dat.gui@0.7.9/node_modules/dat.gui/build/dat.gui.module.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/dat.gui@0.7.9/node_modules/dat.gui/build/dat.gui.module.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GUI": () => (/* binding */ GUI$1),
/* harmony export */   "color": () => (/* binding */ color),
/* harmony export */   "controllers": () => (/* binding */ controllers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dom": () => (/* binding */ dom$1),
/* harmony export */   "gui": () => (/* binding */ gui)
/* harmony export */ });
/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return obj instanceof Function;
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      this.__state.space = 'HEX';
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function () {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function () {
      dom.addClass(this, 'drag').bind(window, 'touchend', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller, {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=dat.gui.module.js.map


/***/ }),

/***/ "./node_modules/.pnpm/stats.js@0.17.0/node_modules/stats.js/build/stats.min.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/stats.js@0.17.0/node_modules/stats.js/build/stats.min.js ***!
  \*************************************************************************************/
/***/ (function(module) {

// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){ true?module.exports=e():0})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_3_3_1_webpack_5_73_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.1_webpack@5.73.0/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/core/framework.ts":
/*!*******************************!*\
  !*** ./src/core/framework.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWebGPUProject": () => (/* binding */ createWebGPUProject)
/* harmony export */ });
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stats.js */ "./node_modules/.pnpm/stats.js@0.17.0/node_modules/stats.js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var MOVE_EPSILON = 60;
function createWebGPUProject(currentProject, canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var lastFrame, numFrames, sumDelta, stats, updateFrame, mouseX, mouseY, isDragging;
        return __generator(this, function (_a) {
            lastFrame = undefined;
            numFrames = 0;
            sumDelta = 0;
            currentProject.initialize();
            stats = new (stats_js__WEBPACK_IMPORTED_MODULE_0___default())();
            stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
            document.body.appendChild(stats.dom);
            updateFrame = function () {
                stats.begin();
                var currentFrame = performance.now();
                if (typeof lastFrame !== "undefined")
                    sumDelta += 1000.0 / (currentFrame - lastFrame);
                numFrames += 1;
                lastFrame = currentFrame;
                currentProject.render(sumDelta / numFrames);
                stats.end();
                requestAnimationFrame(updateFrame);
            };
            requestAnimationFrame(updateFrame);
            mouseX = 0, mouseY = 0;
            isDragging = false;
            canvas.addEventListener('mousedown', function (event) {
                mouseX = event.pageX;
                mouseY = event.pageY;
                isDragging = true;
            });
            canvas.addEventListener('mousemove', function (event) {
                if (isDragging) {
                    var mx = event.pageX;
                    var my = event.pageY;
                    currentProject.onDrag(mx, my);
                }
            });
            canvas.addEventListener('mouseup', function (event) {
                var dx = Math.abs(event.pageX - mouseX);
                var dy = Math.abs(event.pageY - mouseY);
                var isDrag = dx >= MOVE_EPSILON || dy >= MOVE_EPSILON;
                if (!isDrag) {
                    currentProject.onClick(mouseX, mouseY);
                }
                else {
                    currentProject.onDragFinished(dx, dy, mouseX, mouseY);
                }
                isDragging = false;
            });
            return [2 /*return*/];
        });
    });
}


/***/ }),

/***/ "./src/gridDiffusionUnstable/gridDiffusion.ts":
/*!****************************************************!*\
  !*** ./src/gridDiffusionUnstable/gridDiffusion.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridDiffusionUnstable": () => (/* binding */ GridDiffusionUnstable)
/* harmony export */ });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/.pnpm/dat.gui@0.7.9/node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var _helpers_ImageToBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/ImageToBuffer */ "./src/helpers/ImageToBuffer.ts");
/* harmony import */ var _helpers_bufferRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/bufferRenderer */ "./src/helpers/bufferRenderer.ts");
/* harmony import */ var _helpers_gridBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/gridBuffer */ "./src/helpers/gridBuffer.ts");
/* harmony import */ var _helpers_gridShader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/gridShader */ "./src/helpers/gridShader.ts");
/* harmony import */ var _computeDiffuse_wgsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./computeDiffuse.wgsl */ "./src/gridDiffusionUnstable/computeDiffuse.wgsl");
/* harmony import */ var _computePaint_wgsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./computePaint.wgsl */ "./src/gridDiffusionUnstable/computePaint.wgsl");
/* harmony import */ var _draw_wgsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draw.wgsl */ "./src/gridDiffusionUnstable/draw.wgsl");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








function readFile(file) {
    return new Promise(function (resolve, reject) {
        var fr = new FileReader();
        fr.onload = function () {
            resolve(fr.result);
        };
        fr.onerror = reject;
        fr.readAsDataURL(file);
    });
}
var GridDiffusionUnstable = /** @class */ (function () {
    function GridDiffusionUnstable(device, context, screenDimension) {
        this.renderFrameCount = 0;
        this.frameCount = 0;
        this.paused = false;
        this.SPEED = 1;
        this.lastPressed = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.BUFFER_SIZE_X = 256;
        this.BUFFER_SIZE_Y = 144;
        this.device = device;
        this.context = context;
        this.screenDimension = screenDimension;
    }
    GridDiffusionUnstable.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hiddenFileInput, gui, gridSettings, ImageInputController, thisObj, resMapping, updateSimResolution, updateSimSpeed;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hiddenFileInput = document.createElement("input");
                        hiddenFileInput.type = "file";
                        hiddenFileInput.style.visibility = "hidden";
                        gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI({ name: 'My GUI' });
                        gridSettings = gui.addFolder('Grid Settings');
                        thisObj = this;
                        this.simParams = {
                            resolutionScaling: '256x144',
                            speed: 1.0,
                            // loadImage: `${"monke.png"}`,
                            loadImageInput: function () {
                                hiddenFileInput.click();
                            },
                            copyImageToBuffer: function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var fileURL;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(typeof (hiddenFileInput === null || hiddenFileInput === void 0 ? void 0 : hiddenFileInput.files[0]) !== 'undefined')) return [3 /*break*/, 3];
                                                return [4 /*yield*/, readFile(hiddenFileInput === null || hiddenFileInput === void 0 ? void 0 : hiddenFileInput.files[0])];
                                            case 1:
                                                fileURL = _a.sent();
                                                return [4 /*yield*/, thisObj.imageToBufferHelper.initialize(thisObj.device, fileURL, thisObj.gridBuffer.buffersArray, thisObj.gridBuffer.bufferSize, {
                                                        height: thisObj.BUFFER_SIZE_Y,
                                                        width: thisObj.BUFFER_SIZE_X
                                                    })];
                                            case 2:
                                                _a.sent();
                                                thisObj.imageToBufferHelper.performCopy(thisObj.frameCount % 2);
                                                return [3 /*break*/, 5];
                                            case 3: return [4 /*yield*/, thisObj.imageToBufferHelper.initialize(thisObj.device, new URL(/* asset import */ __webpack_require__(/*! ./monke.jpg */ "./src/gridDiffusionUnstable/monke.jpg"), __webpack_require__.b).toString(), thisObj.gridBuffer.buffersArray, thisObj.gridBuffer.bufferSize, {
                                                    height: thisObj.BUFFER_SIZE_Y,
                                                    width: thisObj.BUFFER_SIZE_X
                                                })];
                                            case 4:
                                                _a.sent();
                                                thisObj.imageToBufferHelper.performCopy(thisObj.frameCount % 2);
                                                _a.label = 5;
                                            case 5: return [2 /*return*/];
                                        }
                                    });
                                });
                            }
                        };
                        resMapping = {
                            '32x24': [32, 24],
                            '64x40': [64, 40],
                            '128x72': [128, 72],
                            '256x144': [256, 144],
                            '512x288': [512, 288],
                            '1024x576': [1024, 576],
                        };
                        updateSimResolution = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("Changed Params", this.simParams);
                                        this.SPEED = this.simParams.speed;
                                        this.BUFFER_SIZE_X = resMapping[this.simParams.resolutionScaling][0];
                                        this.BUFFER_SIZE_Y = resMapping[this.simParams.resolutionScaling][1];
                                        return [4 /*yield*/, this.reRender()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        updateSimSpeed = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log("Changed Params", this.simParams);
                                this.SPEED = this.simParams.speed;
                                return [2 /*return*/];
                            });
                        }); };
                        gridSettings.add(this.simParams, "resolutionScaling", {
                            '32x24': '32x24',
                            '64x40': '64x40',
                            '128x72': '128x72',
                            '256x144': '256x144',
                            '512x288': '512x288',
                            '1024x576': '1024x576',
                        }).onFinishChange(updateSimResolution);
                        gridSettings.add(this.simParams, "speed", 0, 5, 0.1).onFinishChange(updateSimSpeed);
                        // gridSettings.add(this.simParams, 'loadImage').name('Loaded Image');
                        ImageInputController = gridSettings.add(this.simParams, 'loadImageInput').name("Texture Upload : ".concat("monke.png"));
                        gridSettings.add(this.simParams, 'copyImageToBuffer').name("Copy Texture to Buffer");
                        gridSettings.open();
                        hiddenFileInput.onchange = function (event) {
                            var _a, _b, _c;
                            if (typeof ((_a = hiddenFileInput === null || hiddenFileInput === void 0 ? void 0 : hiddenFileInput.files[0]) === null || _a === void 0 ? void 0 : _a.name) !== undefined)
                                ImageInputController.name("Texture Upload : ".concat((_b = hiddenFileInput === null || hiddenFileInput === void 0 ? void 0 : hiddenFileInput.files[0]) === null || _b === void 0 ? void 0 : _b.name));
                            console.log((_c = hiddenFileInput === null || hiddenFileInput === void 0 ? void 0 : hiddenFileInput.files[0]) === null || _c === void 0 ? void 0 : _c.name);
                        };
                        return [4 /*yield*/, this.reRender()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GridDiffusionUnstable.prototype.reRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.gridBuffer = new _helpers_gridBuffer__WEBPACK_IMPORTED_MODULE_3__.GridBuffer(this.device, {
                    height: this.BUFFER_SIZE_Y,
                    width: this.BUFFER_SIZE_X
                });
                this.gridDiffuseShader = new _helpers_gridShader__WEBPACK_IMPORTED_MODULE_4__.GridShader(this.device, this.gridBuffer, _computeDiffuse_wgsl__WEBPACK_IMPORTED_MODULE_5__, this.screenDimension, {
                    width: this.BUFFER_SIZE_X,
                    height: this.BUFFER_SIZE_Y
                });
                this.paintShader = new _helpers_gridShader__WEBPACK_IMPORTED_MODULE_4__.GridShader(this.device, this.gridBuffer, _computePaint_wgsl__WEBPACK_IMPORTED_MODULE_6__, this.screenDimension, {
                    width: this.BUFFER_SIZE_X,
                    height: this.BUFFER_SIZE_Y
                });
                this.bufferRenderer = new _helpers_bufferRenderer__WEBPACK_IMPORTED_MODULE_2__.BufferRenderer(this.device, this.context, _draw_wgsl__WEBPACK_IMPORTED_MODULE_7__, this.screenDimension, {
                    width: this.BUFFER_SIZE_X,
                    height: this.BUFFER_SIZE_Y
                }, this.gridBuffer.buffersArray, this.gridBuffer.bufferSize);
                this.imageToBufferHelper = new _helpers_ImageToBuffer__WEBPACK_IMPORTED_MODULE_1__.ImageToBuffer();
                // await this.imageToBufferHelper.initialize(
                //     this.device, 
                //     new URL('./monke.jpg',import.meta.url).toString(),
                //     this.gridBuffer.buffersArray, 
                //     this.gridBuffer.bufferSize,
                //     {
                //         height:this.BUFFER_SIZE_Y,
                //         width:this.BUFFER_SIZE_X
                //     });
                // this.imageToBufferHelper.performCopy(this.frameCount%2);
                this.frameCount = 0;
                return [2 /*return*/];
            });
        });
    };
    GridDiffusionUnstable.prototype.render = function (frameRate) {
        if (this.paused)
            return;
        var computeTimes = 0;
        if (this.SPEED < 1) {
            var groupName = Math.round(1.0 / this.SPEED);
            if ((this.renderFrameCount % groupName == 0))
                computeTimes = 1;
        }
        else if (this.SPEED >= 1) {
            computeTimes = Math.round(this.SPEED);
        }
        var commandEncoder = this.device.createCommandEncoder();
        this.device.queue.writeBuffer(this.paintShader.uniformBuffer, 0, new Float32Array([
            this.screenDimension.width,
            this.screenDimension.height,
            this.BUFFER_SIZE_X,
            this.BUFFER_SIZE_Y,
            this.lastMouseX,
            this.lastMouseY,
            this.frameCount
        ]));
        {
            if (this.lastPressed) {
                this.paintShader.render(commandEncoder, this.frameCount % 2);
                ++this.frameCount;
                this.lastPressed = false;
            }
        }
        {
            while (computeTimes--) {
                this.gridDiffuseShader.render(commandEncoder, this.frameCount % 2);
                ++this.frameCount;
            }
        }
        {
            this.bufferRenderer.render(commandEncoder, this.frameCount % 2);
        }
        this.device.queue.submit([commandEncoder.finish()]);
        ++this.renderFrameCount;
    };
    GridDiffusionUnstable.prototype.onClick = function (mouseX, mouseY) {
        // this.lastMouseX = mouseX;
        // this.lastMouseY = mouseY;
        // this.lastPressed = true;
    };
    GridDiffusionUnstable.prototype.onDragFinished = function (dx, dy, mouseX, mouseY) {
    };
    GridDiffusionUnstable.prototype.onDrag = function (mouseX, mouseY) {
        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;
        this.lastPressed = true;
    };
    return GridDiffusionUnstable;
}());



/***/ }),

/***/ "./src/helpers/ImageToBuffer.ts":
/*!**************************************!*\
  !*** ./src/helpers/ImageToBuffer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageToBuffer": () => (/* binding */ ImageToBuffer)
/* harmony export */ });
/* harmony import */ var _shaders_ImageToBuffer_wgsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders/ImageToBuffer.wgsl */ "./src/helpers/shaders/ImageToBuffer.wgsl");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var WORKGROUP_SIZE = 8;
var ImageToBuffer = /** @class */ (function () {
    function ImageToBuffer() {
    }
    ImageToBuffer.prototype.initialize = function (device, imageURL, bufferArray, bufferSize, bufferDimensions) {
        return __awaiter(this, void 0, void 0, function () {
            var img, tempCanvas, tempContext, imageDataTemp, imageDataF32, i, imageBuffer, uniformBufferSize, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.device = device;
                        img = document.createElement('img');
                        img.src = imageURL;
                        return [4 /*yield*/, img.decode()];
                    case 1:
                        _a.sent();
                        tempCanvas = document.createElement('canvas');
                        tempContext = tempCanvas.getContext('2d');
                        tempCanvas.width = img.width;
                        tempCanvas.height = img.height;
                        tempContext.drawImage(img, 0, 0, img.width, img.height);
                        imageDataTemp = tempContext.getImageData(0, 0, img.width, img.height).data;
                        imageDataF32 = new Float32Array(img.width * img.height * 4);
                        for (i = 0; i < img.width * img.height * 4; ++i) {
                            imageDataF32[4 * i + 0] = imageDataTemp[4 * i + 0] / 256.0;
                            imageDataF32[4 * i + 1] = imageDataTemp[4 * i + 1] / 256.0;
                            imageDataF32[4 * i + 2] = imageDataTemp[4 * i + 2] / 256.0;
                            imageDataF32[4 * i + 3] = imageDataTemp[4 * i + 3] / 256.0;
                        }
                        imageBuffer = this.device.createBuffer({
                            size: imageDataF32.byteLength,
                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                            mappedAtCreation: true,
                        });
                        new Float32Array(imageBuffer.getMappedRange()).set(imageDataF32);
                        imageBuffer.unmap();
                        this.device = device;
                        this.numBuffers = bufferArray.length;
                        this.bufferDimensions = bufferDimensions;
                        this.imageToBufferBindGroupLayout =
                            this.device.createBindGroupLayout({
                                entries: [{
                                        binding: 0,
                                        visibility: GPUShaderStage.COMPUTE,
                                        buffer: {
                                            type: "uniform",
                                        },
                                    },
                                    {
                                        binding: 1,
                                        visibility: GPUShaderStage.COMPUTE,
                                        buffer: {
                                            type: "read-only-storage",
                                        },
                                    },
                                    {
                                        binding: 2,
                                        visibility: GPUShaderStage.COMPUTE,
                                        buffer: {
                                            type: "storage",
                                        },
                                    }
                                ],
                            });
                        this.imageToBufferPipeline = this.device.createComputePipeline({
                            layout: this.device.createPipelineLayout({
                                bindGroupLayouts: [this.imageToBufferBindGroupLayout],
                            }),
                            compute: {
                                module: this.device.createShaderModule({
                                    code: _shaders_ImageToBuffer_wgsl__WEBPACK_IMPORTED_MODULE_0__,
                                }),
                                entryPoint: 'main',
                            },
                        });
                        uniformBufferSize = 4 * Float32Array.BYTES_PER_ELEMENT;
                        this.uniformBuffer = this.device.createBuffer({
                            size: uniformBufferSize,
                            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
                        });
                        this.device.queue.writeBuffer(this.uniformBuffer, 0, new Float32Array([
                            img.width,
                            img.height,
                            this.bufferDimensions.width,
                            this.bufferDimensions.height,
                        ]));
                        this.bufferBindGroups = new Array(this.numBuffers);
                        for (i = 0; i < this.numBuffers; ++i) {
                            this.bufferBindGroups[i] = this.device.createBindGroup({
                                layout: this.imageToBufferPipeline.getBindGroupLayout(0),
                                entries: [
                                    {
                                        binding: 0,
                                        resource: {
                                            buffer: this.uniformBuffer,
                                        },
                                    },
                                    {
                                        binding: 1,
                                        resource: {
                                            buffer: imageBuffer,
                                            offset: 0,
                                            size: imageDataF32.byteLength,
                                        },
                                    },
                                    {
                                        binding: 2,
                                        resource: {
                                            buffer: bufferArray[i],
                                            offset: 0,
                                            size: bufferSize,
                                        },
                                    },
                                ],
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageToBuffer.prototype.performCopy = function (index) {
        var commandEncoder = this.device.createCommandEncoder();
        var passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.imageToBufferPipeline);
        passEncoder.setBindGroup(0, this.bufferBindGroups[index % this.numBuffers]);
        passEncoder.dispatchWorkgroups(this.bufferDimensions.width / WORKGROUP_SIZE, this.bufferDimensions.height / WORKGROUP_SIZE);
        passEncoder.end();
        this.device.queue.submit([commandEncoder.finish()]);
        console.log("Copied Image to buffer");
    };
    return ImageToBuffer;
}());



/***/ }),

/***/ "./src/helpers/bufferRenderer.ts":
/*!***************************************!*\
  !*** ./src/helpers/bufferRenderer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BufferRenderer": () => (/* binding */ BufferRenderer)
/* harmony export */ });
var BufferRenderer = /** @class */ (function () {
    function BufferRenderer(device, context, shader, screenDimension, bufferDimension, bufferArray, bufferSize) {
        this.device = device;
        this.context = context;
        this.screenDimension = screenDimension;
        this.bufferDimension = bufferDimension;
        this.numBuffers = bufferArray.length;
        var presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: presentationFormat,
            alphaMode: 'premultiplied',
        });
        var renderBindGroupLayout = this.device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT || GPUShaderStage.VERTEX,
                    buffer: {
                        type: "uniform",
                    },
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT || GPUShaderStage.VERTEX,
                    buffer: {
                        type: "read-only-storage",
                    },
                }
            ],
        });
        this.pipeline = this.device.createRenderPipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [renderBindGroupLayout],
            }),
            vertex: {
                module: this.device.createShaderModule({
                    code: shader,
                }),
                entryPoint: 'vertex_main',
            },
            fragment: {
                module: this.device.createShaderModule({
                    code: shader,
                }),
                entryPoint: 'fragment_main',
                targets: [
                    {
                        format: presentationFormat,
                    },
                ],
            },
            primitive: {
                topology: 'triangle-list',
            },
        });
        var uniformBufferSize = 7 * Float32Array.BYTES_PER_ELEMENT;
        this.uniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        this.device.queue.writeBuffer(this.uniformBuffer, 0, new Float32Array([
            this.screenDimension.width,
            this.screenDimension.height,
            bufferDimension.width,
            bufferDimension.height,
            0,
            0,
            0
        ]));
        this.renderBindGroups = new Array(2);
        for (var i = 0; i < this.numBuffers; ++i) {
            this.renderBindGroups[i] = this.device.createBindGroup({
                layout: this.pipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: this.uniformBuffer,
                        },
                    },
                    {
                        binding: 1,
                        resource: {
                            buffer: bufferArray[i],
                            offset: 0,
                            size: bufferSize,
                        },
                    },
                ],
            });
        }
    }
    BufferRenderer.prototype.render = function (commandEncoder, index) {
        var textureView = this.context.getCurrentTexture().createView();
        var renderPassDescriptor = {
            colorAttachments: [
                {
                    view: textureView,
                    clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
                    loadOp: 'clear',
                    storeOp: 'store',
                },
            ],
        };
        var passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setBindGroup(0, this.renderBindGroups[index]);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();
    };
    return BufferRenderer;
}());



/***/ }),

/***/ "./src/helpers/gridBuffer.ts":
/*!***********************************!*\
  !*** ./src/helpers/gridBuffer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridBuffer": () => (/* binding */ GridBuffer)
/* harmony export */ });
var GridBuffer = /** @class */ (function () {
    function GridBuffer(device, bufferDimension) {
        this.device = device;
        this.bufferDimension = bufferDimension;
        this.bindGroupLayout =
            this.device.createBindGroupLayout({
                entries: [
                    {
                        binding: 0,
                        visibility: GPUShaderStage.COMPUTE,
                        buffer: {
                            type: "uniform",
                        },
                    },
                    {
                        binding: 1,
                        visibility: GPUShaderStage.COMPUTE,
                        buffer: {
                            type: "read-only-storage",
                        },
                    },
                    {
                        binding: 2,
                        visibility: GPUShaderStage.COMPUTE,
                        buffer: {
                            type: "storage",
                        },
                    }
                ],
            });
        var initialParticleData = new Float32Array(this.bufferDimension.width * this.bufferDimension.height * 4);
        for (var i = 0; i < this.bufferDimension.width * this.bufferDimension.height * 4; ++i) {
            var xCoord = Math.floor((i / 4) % this.bufferDimension.width) / this.bufferDimension.width;
            var yCoord = Math.floor((i / 4) / this.bufferDimension.width) / this.bufferDimension.height;
            if (Number.isNaN(yCoord))
                yCoord = 0.0;
            initialParticleData[4 * i + 0] = 0.5;
            initialParticleData[4 * i + 1] = yCoord;
            initialParticleData[4 * i + 2] = Math.random();
            initialParticleData[4 * i + 3] = Math.random();
        }
        this.bufferSize = initialParticleData.byteLength;
        this.buffersArray = new Array(2);
        for (var i = 0; i < 2; ++i) {
            this.buffersArray[i] = this.device.createBuffer({
                size: initialParticleData.byteLength,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                mappedAtCreation: true,
            });
            new Float32Array(this.buffersArray[i].getMappedRange()).set(initialParticleData);
            this.buffersArray[i].unmap();
        }
    }
    return GridBuffer;
}());



/***/ }),

/***/ "./src/helpers/gridShader.ts":
/*!***********************************!*\
  !*** ./src/helpers/gridShader.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridShader": () => (/* binding */ GridShader)
/* harmony export */ });
var GridShader = /** @class */ (function () {
    function GridShader(device, gridBuffer, shader, screenDimension, bufferDimension) {
        this.device = device;
        this.bufferDimension = bufferDimension;
        this.screenDimension = screenDimension;
        var uniformBufferSize = 7 * Float32Array.BYTES_PER_ELEMENT;
        this.uniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        this.device.queue.writeBuffer(this.uniformBuffer, 0, new Float32Array([
            this.screenDimension.width,
            this.screenDimension.height,
            bufferDimension.width,
            bufferDimension.height,
            0,
            0,
            0
        ]));
        this.computePipeline = this.device.createComputePipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [gridBuffer.bindGroupLayout],
            }),
            compute: {
                module: this.device.createShaderModule({
                    code: shader,
                }),
                entryPoint: 'main',
            },
        });
        this.bindGroupsArray = new Array(2);
        for (var i = 0; i < 2; ++i) {
            this.bindGroupsArray[i] = this.device.createBindGroup({
                layout: this.computePipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: this.uniformBuffer,
                        },
                    },
                    {
                        binding: 1,
                        resource: {
                            buffer: gridBuffer.buffersArray[i],
                            offset: 0,
                            size: gridBuffer.bufferSize,
                        },
                    },
                    {
                        binding: 2,
                        resource: {
                            buffer: gridBuffer.buffersArray[(i + 1) % 2],
                            offset: 0,
                            size: gridBuffer.bufferSize,
                        },
                    },
                ],
            });
        }
    }
    GridShader.prototype.render = function (commandEncoder, index) {
        var passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.computePipeline);
        passEncoder.setBindGroup(0, this.bindGroupsArray[index]);
        passEncoder.dispatchWorkgroups(this.bufferDimension.width / 8, this.bufferDimension.height / 8);
        passEncoder.end();
    };
    return GridShader;
}());



/***/ }),

/***/ "./src/gridDiffusionUnstable/monke.jpg":
/*!*********************************************!*\
  !*** ./src/gridDiffusionUnstable/monke.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e5b4efdd03cc2ca2d8f2.jpg";

/***/ }),

/***/ "./src/gridDiffusionUnstable/computeDiffuse.wgsl":
/*!*******************************************************!*\
  !*** ./src/gridDiffusionUnstable/computeDiffuse.wgsl ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "struct Particle {\n  density: f32,\n  color: f32,\n  vel: vec2<f32>,\n}\nstruct Uniforms {\n  width: f32,\n  height: f32,\n  bufferx: f32,\n  buffery: f32,\n  mouseX: f32,\n  mouseY: f32,\n  frame: f32\n}\nstruct Particles {\n  particles: array<Particle>,\n}\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n@binding(1) @group(0) var<storage, read> particlesA : Particles;\n@binding(2) @group(0) var<storage, read_write> particlesB : Particles;\n\n// https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp\n@compute @workgroup_size(8,8)\nfn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {\n    var index = GlobalInvocationID.y + GlobalInvocationID.x * u32(uniforms.buffery);\n\n    var vDensity = particlesA.particles[index].density;\n    var vcolor = particlesA.particles[index].color;\n    var vVel = particlesA.particles[index].vel;\n\n\n    var kernelSize: i32 = 1;\n    var avgDensity: f32 = 0.0;\n\n    var diffuse: f32 = 0.0;\n    var t: f32 = 1. / 9.;\n    var kernel = mat3x3<f32>(\n        vec3<f32>(1., 1., 1.),\n        vec3<f32>(1., 1., 1.),\n        vec3<f32>(1., 1., 1.)\n    );\n\n    for (var i = -kernelSize; i <= kernelSize; i++) {\n        for (var j = -kernelSize; j <= kernelSize; j++) {\n            var limitx = i32(uniforms.bufferx)-1;\n            var limity = i32(uniforms.buffery)-1;\n            var newX = clamp(i32(GlobalInvocationID.x) + i, 0, limitx);\n            var newY = clamp(i32(GlobalInvocationID.y) + j, 0, limity);\n            var indexParticle: i32 = newY + newX * i32(uniforms.buffery);\n            avgDensity += particlesA.particles[indexParticle].density * kernel[j][i];\n        }\n    }\n    avgDensity = avgDensity / 9.;\n    particlesB.particles[index].density = avgDensity * 0.99;\n\n    particlesB.particles[index].color = vcolor;\n    particlesB.particles[index].vel = vVel;\n}\n";

/***/ }),

/***/ "./src/gridDiffusionUnstable/computePaint.wgsl":
/*!*****************************************************!*\
  !*** ./src/gridDiffusionUnstable/computePaint.wgsl ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "struct Particle {\n  density: f32,\n  color: f32,\n  vel: vec2<f32>,\n}\nstruct Uniforms {\n  width: f32,\n  height: f32,\n  bufferx: f32,\n  buffery: f32,\n  mouseX: f32,\n  mouseY: f32,\n  frame: f32\n}\nstruct Particles {\n  particles: array<Particle>,\n}\n\nfn rand(co: vec2<f32>) -> f32 {\n    var randomVec2 = vec2(12.9898, 78.233);\n    var rand1: f32 = sin(dot(randomVec2, co)) * 43758.5453;\n    return fract(rand1);\n}\n\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n@binding(1) @group(0) var<storage, read> particlesA : Particles;\n@binding(2) @group(0) var<storage, read_write> particlesB : Particles;\n\n// https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp\n@compute @workgroup_size(8,8)\nfn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {\n    var index = GlobalInvocationID.y + GlobalInvocationID.x * u32(uniforms.buffery);\n\n    var mouseX: f32 = uniforms.mouseX / uniforms.width;\n    var mouseY: f32 = uniforms.mouseY / uniforms.height;\n\n    var xPos: f32 = f32(GlobalInvocationID.x) / uniforms.bufferx;\n    var yPos: f32 = f32(GlobalInvocationID.y) / uniforms.buffery;\n\n    var vDensity = particlesA.particles[index].density;\n    var vcolor = particlesA.particles[index].color;\n    var vVel = particlesA.particles[index].vel;\n\n    var dist = 0.;\n    dist += ((xPos - mouseX) * (xPos - mouseX));\n    dist += ((yPos - mouseY) * (yPos - mouseY));\n    dist = sqrt(dist) * uniforms.width;\n    vDensity += 2. / (2.0 + dist);\n\n    particlesB.particles[index].density = vDensity ;\n    particlesB.particles[index].color = vcolor;\n    particlesB.particles[index].vel = vVel;\n}\n\n\n";

/***/ }),

/***/ "./src/gridDiffusionUnstable/draw.wgsl":
/*!*********************************************!*\
  !*** ./src/gridDiffusionUnstable/draw.wgsl ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "struct Uniforms {\n  width: f32,\n  height: f32,\n  bufferx: f32,\n  buffery: f32,\n  mouseX: f32,\n  mouseY: f32,\n  frame: f32\n}\nstruct Particle {\n  density: f32,\n  color: f32,\n  vel: vec2<f32>,\n}\nstruct Particles {\n  particles: array<Particle>,\n}\n\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n@binding(1) @group(0) var<storage, read> particlesA : Particles;\n@vertex\nfn vertex_main(\n    @builtin(vertex_index) VertexIndex: u32\n) -> @builtin(position) vec4<f32> {\n    var pos = array<vec2<f32>, 6>(\n        vec2(-1.0, 1.0),\n        vec2(-1.0, -1.0),\n        vec2(1.0, 1.0),\n        vec2(-1.0, -1.0),\n        vec2(1.0, -1.0),\n        vec2(1.0, 1.0)\n    );\n\n    return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n\n@fragment\nfn fragment_main(\n    @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n    var mouseX: f32 = uniforms.mouseX / uniforms.width;\n    var mouseY: f32 = uniforms.mouseY / uniforms.height;\n\n    var xPos: f32 = position.x / uniforms.width;\n    var yPos: f32 = position.y / uniforms.height;\n\n    var xBpos: u32 = u32(floor(xPos * uniforms.bufferx));\n    var yBpos: u32 = u32(floor(yPos * uniforms.buffery));\n\n\n    var indexParticle: u32 = yBpos + xBpos * u32(floor(uniforms.buffery));\n\n    var density: f32 = particlesA.particles[indexParticle].density;\n\n    var avg: f32 = 0.;\n    avg += particlesA.particles[indexParticle].density;\n    avg = avg / 1.;\n    var col = vec3(0.9, 0.3, 0.6);\n    var col_density = vec3(1., 0., 0.);\n\n    var col_velocity_x = vec3(0., 1., 0.);\n    var col_velocity_y = vec3(0., 0., 1.);\n\n    var retCol = avg * col_density ;\n    retCol += col_velocity_y * 0.4;\n    // retCol += col_velocity_y * particlesA.particles[indexParticle].vel.y;\n    // retCol += col_velocity_x * particlesA.particles[indexParticle].vel.x;\n\n    return vec4(retCol, 1.);\n}\n";

/***/ }),

/***/ "./src/helpers/shaders/ImageToBuffer.wgsl":
/*!************************************************!*\
  !*** ./src/helpers/shaders/ImageToBuffer.wgsl ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "struct BufferPoint {\n  density: f32,\n  color: f32,\n  vel: vec2<f32>,\n}\nstruct Uniforms {\n  image_width: f32,\n  image_height: f32,\n  buffer_width: f32,\n  buffer_height: f32,\n}\nstruct BufferData {\n  data: array<BufferPoint>,\n}\nstruct ImageData {\n  data: array<vec4<f32 > >,\n}\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n@binding(1) @group(0) var<storage, read> imageBuffer : ImageData;\n@binding(2) @group(0) var<storage, read_write> bufferData : BufferData;\n\n\n@compute @workgroup_size(8,8)\nfn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {\n    var index: u32 = GlobalInvocationID.y + GlobalInvocationID.x * u32(uniforms.buffer_height);\n\n    var buffer_posx: f32 = f32(GlobalInvocationID.x) / uniforms.buffer_width;\n    var buffer_posy: f32 = f32(GlobalInvocationID.y) / uniforms.buffer_height;\n\n    var image_index_x: u32 = u32(floor(buffer_posx * uniforms.image_width));\n    var image_index_y: u32 = u32(floor(buffer_posy * uniforms.image_height));\n\n\n    var image_index: u32 = image_index_x + image_index_y * u32(uniforms.image_width);\n\n    var image_sample: vec4<f32> = imageBuffer.data[image_index];\n\n    bufferData.data[index].density = image_sample.x;\n}\n\n\n";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _core_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/framework */ "./src/core/framework.ts");
/* harmony import */ var _gridDiffusionUnstable_gridDiffusion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gridDiffusionUnstable/gridDiffusion */ "./src/gridDiffusionUnstable/gridDiffusion.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function init() {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, adapter, device, context, dimension, devicePixelRatio, canvasScale, currentProject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = document.getElementById("webgpu-canvas");
                    return [4 /*yield*/, navigator.gpu.requestAdapter()];
                case 1:
                    adapter = _a.sent();
                    return [4 /*yield*/, adapter.requestDevice()];
                case 2:
                    device = _a.sent();
                    context = canvas.getContext('webgpu');
                    dimension = { width: window.innerWidth, height: window.innerHeight };
                    devicePixelRatio = window.devicePixelRatio || 1;
                    canvasScale = 1.0;
                    canvas.width = dimension.width * canvasScale;
                    canvas.height = dimension.height * canvasScale;
                    // currentProject = new Boids(device, context);
                    // currentProject = new ToyShader(device, context, dimension);
                    currentProject = new _gridDiffusionUnstable_gridDiffusion__WEBPACK_IMPORTED_MODULE_2__.GridDiffusionUnstable(device, context, dimension);
                    (0,_core_framework__WEBPACK_IMPORTED_MODULE_1__.createWebGPUProject)(currentProject, canvas);
                    return [2 /*return*/];
            }
        });
    });
}
init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FBUUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvS0FBb0ssZ0NBQWdDO0FBQ3BNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnRkFBZ0YsdUVBQXVFO0FBQ3ZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFLFNBQVMsQ0FBQyxDQUFDO29CQUV2RSxvRUFBbUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7O0NBQy9DO0FBRUQsSUFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANi43LjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lYXJ0aC1leHBsb3Jlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDYuNy4xX3dlYnBhY2tANS43My4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2RhdC5ndWlAMC43Ljkvbm9kZV9tb2R1bGVzL2RhdC5ndWkvYnVpbGQvZGF0Lmd1aS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vc3RhdHMuanNAMC4xNy4wL25vZGVfbW9kdWxlcy9zdGF0cy5qcy9idWlsZC9zdGF0cy5taW4uanMiLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvLi9zcmMvc3R5bGUuY3NzPzI0ODIiLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy4xX3dlYnBhY2tANS43My4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lYXJ0aC1leHBsb3Jlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lYXJ0aC1leHBsb3Jlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckAzLjMuMV93ZWJwYWNrQDUuNzMuMC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy4xX3dlYnBhY2tANS43My4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckAzLjMuMV93ZWJwYWNrQDUuNzMuMC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lYXJ0aC1leHBsb3Jlci8uL3NyYy9jb3JlL2ZyYW1ld29yay50cyIsIndlYnBhY2s6Ly9lYXJ0aC1leHBsb3Jlci8uL3NyYy9ncmlkRGlmZnVzaW9uVW5zdGFibGUvZ3JpZERpZmZ1c2lvbi50cyIsIndlYnBhY2s6Ly9lYXJ0aC1leHBsb3Jlci8uL3NyYy9oZWxwZXJzL0ltYWdlVG9CdWZmZXIudHMiLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvLi9zcmMvaGVscGVycy9idWZmZXJSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9lYXJ0aC1leHBsb3Jlci8uL3NyYy9oZWxwZXJzL2dyaWRCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvLi9zcmMvaGVscGVycy9ncmlkU2hhZGVyLnRzIiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lYXJ0aC1leHBsb3Jlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZWFydGgtZXhwbG9yZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2VhcnRoLWV4cGxvcmVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA2LjcuMV93ZWJwYWNrQDUuNzMuMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANi43LjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLmNhbnZhcy1jb250YWluZXIge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5jYW52YXMtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBkYXQtZ3VpIEphdmFTY3JpcHQgQ29udHJvbGxlciBMaWJyYXJ5XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGF0YWFydHMvZGF0Lmd1aVxuICpcbiAqIENvcHlyaWdodCAyMDExIERhdGEgQXJ0cyBUZWFtLCBHb29nbGUgQ3JlYXRpdmUgTGFiXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIF9fXyRpbnNlcnRTdHlsZShjc3MpIHtcbiAgaWYgKCFjc3MpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICByZXR1cm4gY3NzO1xufVxuXG5mdW5jdGlvbiBjb2xvclRvU3RyaW5nIChjb2xvciwgZm9yY2VDU1NIZXgpIHtcbiAgdmFyIGNvbG9yRm9ybWF0ID0gY29sb3IuX19zdGF0ZS5jb252ZXJzaW9uTmFtZS50b1N0cmluZygpO1xuICB2YXIgciA9IE1hdGgucm91bmQoY29sb3Iucik7XG4gIHZhciBnID0gTWF0aC5yb3VuZChjb2xvci5nKTtcbiAgdmFyIGIgPSBNYXRoLnJvdW5kKGNvbG9yLmIpO1xuICB2YXIgYSA9IGNvbG9yLmE7XG4gIHZhciBoID0gTWF0aC5yb3VuZChjb2xvci5oKTtcbiAgdmFyIHMgPSBjb2xvci5zLnRvRml4ZWQoMSk7XG4gIHZhciB2ID0gY29sb3Iudi50b0ZpeGVkKDEpO1xuICBpZiAoZm9yY2VDU1NIZXggfHwgY29sb3JGb3JtYXQgPT09ICdUSFJFRV9DSEFSX0hFWCcgfHwgY29sb3JGb3JtYXQgPT09ICdTSVhfQ0hBUl9IRVgnKSB7XG4gICAgdmFyIHN0ciA9IGNvbG9yLmhleC50b1N0cmluZygxNik7XG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCA2KSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiAnIycgKyBzdHI7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdDU1NfUkdCJykge1xuICAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdDU1NfUkdCQScpIHtcbiAgICByZXR1cm4gJ3JnYmEoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcsJyArIGEgKyAnKSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdIRVgnKSB7XG4gICAgcmV0dXJuICcweCcgKyBjb2xvci5oZXgudG9TdHJpbmcoMTYpO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCX0FSUkFZJykge1xuICAgIHJldHVybiAnWycgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnXSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdSR0JBX0FSUkFZJykge1xuICAgIHJldHVybiAnWycgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnLCcgKyBhICsgJ10nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCX09CSicpIHtcbiAgICByZXR1cm4gJ3tyOicgKyByICsgJyxnOicgKyBnICsgJyxiOicgKyBiICsgJ30nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCQV9PQkonKSB7XG4gICAgcmV0dXJuICd7cjonICsgciArICcsZzonICsgZyArICcsYjonICsgYiArICcsYTonICsgYSArICd9JztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ0hTVl9PQkonKSB7XG4gICAgcmV0dXJuICd7aDonICsgaCArICcsczonICsgcyArICcsdjonICsgdiArICd9JztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ0hTVkFfT0JKJykge1xuICAgIHJldHVybiAne2g6JyArIGggKyAnLHM6JyArIHMgKyAnLHY6JyArIHYgKyAnLGE6JyArIGEgKyAnfSc7XG4gIH1cbiAgcmV0dXJuICd1bmtub3duIGZvcm1hdCc7XG59XG5cbnZhciBBUlJfRUFDSCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIEFSUl9TTElDRSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBDb21tb24gPSB7XG4gIEJSRUFLOiB7fSxcbiAgZXh0ZW5kOiBmdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgdGhpcy5lYWNoKEFSUl9TTElDRS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHZhciBrZXlzID0gdGhpcy5pc09iamVjdChvYmopID8gT2JqZWN0LmtleXMob2JqKSA6IFtdO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVW5kZWZpbmVkKG9ialtrZXldKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSwgdGhpcyk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSxcbiAgZGVmYXVsdHM6IGZ1bmN0aW9uIGRlZmF1bHRzKHRhcmdldCkge1xuICAgIHRoaXMuZWFjaChBUlJfU0xJQ0UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICB2YXIga2V5cyA9IHRoaXMuaXNPYmplY3Qob2JqKSA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRhcmdldFtrZXldKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSwgdGhpcyk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSxcbiAgY29tcG9zZTogZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgICB2YXIgdG9DYWxsID0gQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBBUlJfU0xJQ0UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgZm9yICh2YXIgaSA9IHRvQ2FsbC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhcmdzID0gW3RvQ2FsbFtpXS5hcHBseSh0aGlzLCBhcmdzKV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuICB9LFxuICBlYWNoOiBmdW5jdGlvbiBlYWNoKG9iaiwgaXRyLCBzY29wZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChBUlJfRUFDSCAmJiBvYmouZm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gQVJSX0VBQ0gpIHtcbiAgICAgIG9iai5mb3JFYWNoKGl0ciwgc2NvcGUpO1xuICAgIH0gZWxzZSBpZiAob2JqLmxlbmd0aCA9PT0gb2JqLmxlbmd0aCArIDApIHtcbiAgICAgIHZhciBrZXkgPSB2b2lkIDA7XG4gICAgICB2YXIgbCA9IHZvaWQgMDtcbiAgICAgIGZvciAoa2V5ID0gMCwgbCA9IG9iai5sZW5ndGg7IGtleSA8IGw7IGtleSsrKSB7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqICYmIGl0ci5jYWxsKHNjb3BlLCBvYmpba2V5XSwga2V5KSA9PT0gdGhpcy5CUkVBSykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgICAgICBpZiAoaXRyLmNhbGwoc2NvcGUsIG9ialtfa2V5XSwgX2tleSkgPT09IHRoaXMuQlJFQUspIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRlZmVyOiBmdW5jdGlvbiBkZWZlcihmbmMpIHtcbiAgICBzZXRUaW1lb3V0KGZuYywgMCk7XG4gIH0sXG4gIGRlYm91bmNlOiBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB0aHJlc2hvbGQsIGNhbGxJbW1lZGlhdGVseSkge1xuICAgIHZhciB0aW1lb3V0ID0gdm9pZCAwO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgZnVuY3Rpb24gZGVsYXllZCgpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghY2FsbEltbWVkaWF0ZWx5KSBmdW5jLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICB9XG4gICAgICB2YXIgY2FsbE5vdyA9IGNhbGxJbW1lZGlhdGVseSB8fCAhdGltZW91dDtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHRocmVzaG9sZCk7XG4gICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICBmdW5jLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgdG9BcnJheTogZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgICBpZiAob2JqLnRvQXJyYXkpIHJldHVybiBvYmoudG9BcnJheSgpO1xuICAgIHJldHVybiBBUlJfU0xJQ0UuY2FsbChvYmopO1xuICB9LFxuICBpc1VuZGVmaW5lZDogZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xuICB9LFxuICBpc051bGw6IGZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9LFxuICBpc05hTjogZnVuY3Rpb24gKF9pc05hTikge1xuICAgIGZ1bmN0aW9uIGlzTmFOKF94KSB7XG4gICAgICByZXR1cm4gX2lzTmFOLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlzTmFOLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9pc05hTi50b1N0cmluZygpO1xuICAgIH07XG4gICAgcmV0dXJuIGlzTmFOO1xuICB9KGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gaXNOYU4ob2JqKTtcbiAgfSksXG4gIGlzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmouY29uc3RydWN0b3IgPT09IEFycmF5O1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH0sXG4gIGlzTnVtYmVyOiBmdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBvYmogKyAwO1xuICB9LFxuICBpc1N0cmluZzogZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gb2JqICsgJyc7XG4gIH0sXG4gIGlzQm9vbGVhbjogZnVuY3Rpb24gaXNCb29sZWFuKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IGZhbHNlIHx8IG9iaiA9PT0gdHJ1ZTtcbiAgfSxcbiAgaXNGdW5jdGlvbjogZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gIH1cbn07XG5cbnZhciBJTlRFUlBSRVRBVElPTlMgPSBbXG57XG4gIGxpdG11czogQ29tbW9uLmlzU3RyaW5nLFxuICBjb252ZXJzaW9uczoge1xuICAgIFRIUkVFX0NIQVJfSEVYOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gb3JpZ2luYWwubWF0Y2goL14jKFtBLUYwLTldKShbQS1GMC05XSkoW0EtRjAtOV0pJC9pKTtcbiAgICAgICAgaWYgKHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ0hFWCcsXG4gICAgICAgICAgaGV4OiBwYXJzZUludCgnMHgnICsgdGVzdFsxXS50b1N0cmluZygpICsgdGVzdFsxXS50b1N0cmluZygpICsgdGVzdFsyXS50b1N0cmluZygpICsgdGVzdFsyXS50b1N0cmluZygpICsgdGVzdFszXS50b1N0cmluZygpICsgdGVzdFszXS50b1N0cmluZygpLCAwKVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBjb2xvclRvU3RyaW5nXG4gICAgfSxcbiAgICBTSVhfQ0hBUl9IRVg6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgdmFyIHRlc3QgPSBvcmlnaW5hbC5tYXRjaCgvXiMoW0EtRjAtOV17Nn0pJC9pKTtcbiAgICAgICAgaWYgKHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ0hFWCcsXG4gICAgICAgICAgaGV4OiBwYXJzZUludCgnMHgnICsgdGVzdFsxXS50b1N0cmluZygpLCAwKVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBjb2xvclRvU3RyaW5nXG4gICAgfSxcbiAgICBDU1NfUkdCOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gb3JpZ2luYWwubWF0Y2goL15yZ2JcXChcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKlxcKS8pO1xuICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBwYXJzZUZsb2F0KHRlc3RbMV0pLFxuICAgICAgICAgIGc6IHBhcnNlRmxvYXQodGVzdFsyXSksXG4gICAgICAgICAgYjogcGFyc2VGbG9hdCh0ZXN0WzNdKVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBjb2xvclRvU3RyaW5nXG4gICAgfSxcbiAgICBDU1NfUkdCQToge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9ecmdiYVxcKFxccyooXFxTKylcXHMqLFxccyooXFxTKylcXHMqLFxccyooXFxTKylcXHMqLFxccyooXFxTKylcXHMqXFwpLyk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgIHI6IHBhcnNlRmxvYXQodGVzdFsxXSksXG4gICAgICAgICAgZzogcGFyc2VGbG9hdCh0ZXN0WzJdKSxcbiAgICAgICAgICBiOiBwYXJzZUZsb2F0KHRlc3RbM10pLFxuICAgICAgICAgIGE6IHBhcnNlRmxvYXQodGVzdFs0XSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH1cbiAgfVxufSxcbntcbiAgbGl0bXVzOiBDb21tb24uaXNOdW1iZXIsXG4gIGNvbnZlcnNpb25zOiB7XG4gICAgSEVYOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdIRVgnLFxuICAgICAgICAgIGhleDogb3JpZ2luYWwsXG4gICAgICAgICAgY29udmVyc2lvbk5hbWU6ICdIRVgnXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBjb2xvci5oZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxue1xuICBsaXRtdXM6IENvbW1vbi5pc0FycmF5LFxuICBjb252ZXJzaW9uczoge1xuICAgIFJHQl9BUlJBWToge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAob3JpZ2luYWwubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgIHI6IG9yaWdpbmFsWzBdLFxuICAgICAgICAgIGc6IG9yaWdpbmFsWzFdLFxuICAgICAgICAgIGI6IG9yaWdpbmFsWzJdXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBbY29sb3IuciwgY29sb3IuZywgY29sb3IuYl07XG4gICAgICB9XG4gICAgfSxcbiAgICBSR0JBX0FSUkFZOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChvcmlnaW5hbC5sZW5ndGggIT09IDQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgcjogb3JpZ2luYWxbMF0sXG4gICAgICAgICAgZzogb3JpZ2luYWxbMV0sXG4gICAgICAgICAgYjogb3JpZ2luYWxbMl0sXG4gICAgICAgICAgYTogb3JpZ2luYWxbM11cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIFtjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCBjb2xvci5hXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG57XG4gIGxpdG11czogQ29tbW9uLmlzT2JqZWN0LFxuICBjb252ZXJzaW9uczoge1xuICAgIFJHQkFfT0JKOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmcpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5iKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuYSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgICAgcjogb3JpZ2luYWwucixcbiAgICAgICAgICAgIGc6IG9yaWdpbmFsLmcsXG4gICAgICAgICAgICBiOiBvcmlnaW5hbC5iLFxuICAgICAgICAgICAgYTogb3JpZ2luYWwuYVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHI6IGNvbG9yLnIsXG4gICAgICAgICAgZzogY29sb3IuZyxcbiAgICAgICAgICBiOiBjb2xvci5iLFxuICAgICAgICAgIGE6IGNvbG9yLmFcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFJHQl9PQko6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5yKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuZykgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmIpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICAgIHI6IG9yaWdpbmFsLnIsXG4gICAgICAgICAgICBnOiBvcmlnaW5hbC5nLFxuICAgICAgICAgICAgYjogb3JpZ2luYWwuYlxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHI6IGNvbG9yLnIsXG4gICAgICAgICAgZzogY29sb3IuZyxcbiAgICAgICAgICBiOiBjb2xvci5iXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBIU1ZBX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmgpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5zKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwudikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmEpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNwYWNlOiAnSFNWJyxcbiAgICAgICAgICAgIGg6IG9yaWdpbmFsLmgsXG4gICAgICAgICAgICBzOiBvcmlnaW5hbC5zLFxuICAgICAgICAgICAgdjogb3JpZ2luYWwudixcbiAgICAgICAgICAgIGE6IG9yaWdpbmFsLmFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoOiBjb2xvci5oLFxuICAgICAgICAgIHM6IGNvbG9yLnMsXG4gICAgICAgICAgdjogY29sb3IudixcbiAgICAgICAgICBhOiBjb2xvci5hXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBIU1ZfT0JKOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuaCkgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnMpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC52KSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ0hTVicsXG4gICAgICAgICAgICBoOiBvcmlnaW5hbC5oLFxuICAgICAgICAgICAgczogb3JpZ2luYWwucyxcbiAgICAgICAgICAgIHY6IG9yaWdpbmFsLnZcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoOiBjb2xvci5oLFxuICAgICAgICAgIHM6IGNvbG9yLnMsXG4gICAgICAgICAgdjogY29sb3IudlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufV07XG52YXIgcmVzdWx0ID0gdm9pZCAwO1xudmFyIHRvUmV0dXJuID0gdm9pZCAwO1xudmFyIGludGVycHJldCA9IGZ1bmN0aW9uIGludGVycHJldCgpIHtcbiAgdG9SZXR1cm4gPSBmYWxzZTtcbiAgdmFyIG9yaWdpbmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBDb21tb24udG9BcnJheShhcmd1bWVudHMpIDogYXJndW1lbnRzWzBdO1xuICBDb21tb24uZWFjaChJTlRFUlBSRVRBVElPTlMsIGZ1bmN0aW9uIChmYW1pbHkpIHtcbiAgICBpZiAoZmFtaWx5LmxpdG11cyhvcmlnaW5hbCkpIHtcbiAgICAgIENvbW1vbi5lYWNoKGZhbWlseS5jb252ZXJzaW9ucywgZnVuY3Rpb24gKGNvbnZlcnNpb24sIGNvbnZlcnNpb25OYW1lKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbnZlcnNpb24ucmVhZChvcmlnaW5hbCk7XG4gICAgICAgIGlmICh0b1JldHVybiA9PT0gZmFsc2UgJiYgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRvUmV0dXJuID0gcmVzdWx0O1xuICAgICAgICAgIHJlc3VsdC5jb252ZXJzaW9uTmFtZSA9IGNvbnZlcnNpb25OYW1lO1xuICAgICAgICAgIHJlc3VsdC5jb252ZXJzaW9uID0gY29udmVyc2lvbjtcbiAgICAgICAgICByZXR1cm4gQ29tbW9uLkJSRUFLO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBDb21tb24uQlJFQUs7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRvUmV0dXJuO1xufTtcblxudmFyIHRtcENvbXBvbmVudCA9IHZvaWQgMDtcbnZhciBDb2xvck1hdGggPSB7XG4gIGhzdl90b19yZ2I6IGZ1bmN0aW9uIGhzdl90b19yZ2IoaCwgcywgdikge1xuICAgIHZhciBoaSA9IE1hdGguZmxvb3IoaCAvIDYwKSAlIDY7XG4gICAgdmFyIGYgPSBoIC8gNjAgLSBNYXRoLmZsb29yKGggLyA2MCk7XG4gICAgdmFyIHAgPSB2ICogKDEuMCAtIHMpO1xuICAgIHZhciBxID0gdiAqICgxLjAgLSBmICogcyk7XG4gICAgdmFyIHQgPSB2ICogKDEuMCAtICgxLjAgLSBmKSAqIHMpO1xuICAgIHZhciBjID0gW1t2LCB0LCBwXSwgW3EsIHYsIHBdLCBbcCwgdiwgdF0sIFtwLCBxLCB2XSwgW3QsIHAsIHZdLCBbdiwgcCwgcV1dW2hpXTtcbiAgICByZXR1cm4ge1xuICAgICAgcjogY1swXSAqIDI1NSxcbiAgICAgIGc6IGNbMV0gKiAyNTUsXG4gICAgICBiOiBjWzJdICogMjU1XG4gICAgfTtcbiAgfSxcbiAgcmdiX3RvX2hzdjogZnVuY3Rpb24gcmdiX3RvX2hzdihyLCBnLCBiKSB7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gICAgdmFyIGggPSB2b2lkIDA7XG4gICAgdmFyIHMgPSB2b2lkIDA7XG4gICAgaWYgKG1heCAhPT0gMCkge1xuICAgICAgcyA9IGRlbHRhIC8gbWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoOiBOYU4sXG4gICAgICAgIHM6IDAsXG4gICAgICAgIHY6IDBcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChyID09PSBtYXgpIHtcbiAgICAgIGggPSAoZyAtIGIpIC8gZGVsdGE7XG4gICAgfSBlbHNlIGlmIChnID09PSBtYXgpIHtcbiAgICAgIGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBoID0gNCArIChyIC0gZykgLyBkZWx0YTtcbiAgICB9XG4gICAgaCAvPSA2O1xuICAgIGlmIChoIDwgMCkge1xuICAgICAgaCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaDogaCAqIDM2MCxcbiAgICAgIHM6IHMsXG4gICAgICB2OiBtYXggLyAyNTVcbiAgICB9O1xuICB9LFxuICByZ2JfdG9faGV4OiBmdW5jdGlvbiByZ2JfdG9faGV4KHIsIGcsIGIpIHtcbiAgICB2YXIgaGV4ID0gdGhpcy5oZXhfd2l0aF9jb21wb25lbnQoMCwgMiwgcik7XG4gICAgaGV4ID0gdGhpcy5oZXhfd2l0aF9jb21wb25lbnQoaGV4LCAxLCBnKTtcbiAgICBoZXggPSB0aGlzLmhleF93aXRoX2NvbXBvbmVudChoZXgsIDAsIGIpO1xuICAgIHJldHVybiBoZXg7XG4gIH0sXG4gIGNvbXBvbmVudF9mcm9tX2hleDogZnVuY3Rpb24gY29tcG9uZW50X2Zyb21faGV4KGhleCwgY29tcG9uZW50SW5kZXgpIHtcbiAgICByZXR1cm4gaGV4ID4+IGNvbXBvbmVudEluZGV4ICogOCAmIDB4RkY7XG4gIH0sXG4gIGhleF93aXRoX2NvbXBvbmVudDogZnVuY3Rpb24gaGV4X3dpdGhfY29tcG9uZW50KGhleCwgY29tcG9uZW50SW5kZXgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDw8ICh0bXBDb21wb25lbnQgPSBjb21wb25lbnRJbmRleCAqIDgpIHwgaGV4ICYgfigweEZGIDw8IHRtcENvbXBvbmVudCk7XG4gIH1cbn07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxuXG5cbnZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbG9yKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbG9yKTtcbiAgICB0aGlzLl9fc3RhdGUgPSBpbnRlcnByZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodGhpcy5fX3N0YXRlID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gaW50ZXJwcmV0IGNvbG9yIGFyZ3VtZW50cycpO1xuICAgIH1cbiAgICB0aGlzLl9fc3RhdGUuYSA9IHRoaXMuX19zdGF0ZS5hIHx8IDE7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQ29sb3IsIFt7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBjb2xvclRvU3RyaW5nKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvSGV4U3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9IZXhTdHJpbmcoKSB7XG4gICAgICByZXR1cm4gY29sb3JUb1N0cmluZyh0aGlzLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b09yaWdpbmFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9PcmlnaW5hbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fc3RhdGUuY29udmVyc2lvbi53cml0ZSh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENvbG9yO1xufSgpO1xuZnVuY3Rpb24gZGVmaW5lUkdCQ29tcG9uZW50KHRhcmdldCwgY29tcG9uZW50LCBjb21wb25lbnRIZXhJbmRleCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb21wb25lbnQsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgPT09ICdSR0InKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc3RhdGVbY29tcG9uZW50XTtcbiAgICAgIH1cbiAgICAgIENvbG9yLnJlY2FsY3VsYXRlUkdCKHRoaXMsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpO1xuICAgICAgcmV0dXJuIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgaWYgKHRoaXMuX19zdGF0ZS5zcGFjZSAhPT0gJ1JHQicpIHtcbiAgICAgICAgQ29sb3IucmVjYWxjdWxhdGVSR0IodGhpcywgY29tcG9uZW50LCBjb21wb25lbnRIZXhJbmRleCk7XG4gICAgICAgIHRoaXMuX19zdGF0ZS5zcGFjZSA9ICdSR0InO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0YXRlW2NvbXBvbmVudF0gPSB2O1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBkZWZpbmVIU1ZDb21wb25lbnQodGFyZ2V0LCBjb21wb25lbnQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29tcG9uZW50LCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlID09PSAnSFNWJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgICB9XG4gICAgICBDb2xvci5yZWNhbGN1bGF0ZUhTVih0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLl9fc3RhdGVbY29tcG9uZW50XTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgIT09ICdIU1YnKSB7XG4gICAgICAgIENvbG9yLnJlY2FsY3VsYXRlSFNWKHRoaXMpO1xuICAgICAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnSFNWJztcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdID0gdjtcbiAgICB9XG4gIH0pO1xufVxuQ29sb3IucmVjYWxjdWxhdGVSR0IgPSBmdW5jdGlvbiAoY29sb3IsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpIHtcbiAgaWYgKGNvbG9yLl9fc3RhdGUuc3BhY2UgPT09ICdIRVgnKSB7XG4gICAgY29sb3IuX19zdGF0ZVtjb21wb25lbnRdID0gQ29sb3JNYXRoLmNvbXBvbmVudF9mcm9tX2hleChjb2xvci5fX3N0YXRlLmhleCwgY29tcG9uZW50SGV4SW5kZXgpO1xuICB9IGVsc2UgaWYgKGNvbG9yLl9fc3RhdGUuc3BhY2UgPT09ICdIU1YnKSB7XG4gICAgQ29tbW9uLmV4dGVuZChjb2xvci5fX3N0YXRlLCBDb2xvck1hdGguaHN2X3RvX3JnYihjb2xvci5fX3N0YXRlLmgsIGNvbG9yLl9fc3RhdGUucywgY29sb3IuX19zdGF0ZS52KSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3JydXB0ZWQgY29sb3Igc3RhdGUnKTtcbiAgfVxufTtcbkNvbG9yLnJlY2FsY3VsYXRlSFNWID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHZhciByZXN1bHQgPSBDb2xvck1hdGgucmdiX3RvX2hzdihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcbiAgQ29tbW9uLmV4dGVuZChjb2xvci5fX3N0YXRlLCB7XG4gICAgczogcmVzdWx0LnMsXG4gICAgdjogcmVzdWx0LnZcbiAgfSk7XG4gIGlmICghQ29tbW9uLmlzTmFOKHJlc3VsdC5oKSkge1xuICAgIGNvbG9yLl9fc3RhdGUuaCA9IHJlc3VsdC5oO1xuICB9IGVsc2UgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChjb2xvci5fX3N0YXRlLmgpKSB7XG4gICAgY29sb3IuX19zdGF0ZS5oID0gMDtcbiAgfVxufTtcbkNvbG9yLkNPTVBPTkVOVFMgPSBbJ3InLCAnZycsICdiJywgJ2gnLCAncycsICd2JywgJ2hleCcsICdhJ107XG5kZWZpbmVSR0JDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAncicsIDIpO1xuZGVmaW5lUkdCQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ2cnLCAxKTtcbmRlZmluZVJHQkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdiJywgMCk7XG5kZWZpbmVIU1ZDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAnaCcpO1xuZGVmaW5lSFNWQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ3MnKTtcbmRlZmluZUhTVkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICd2Jyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sb3IucHJvdG90eXBlLCAnYScsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19zdGF0ZS5hO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgdGhpcy5fX3N0YXRlLmEgPSB2O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb2xvci5wcm90b3R5cGUsICdoZXgnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgIT09ICdIRVgnKSB7XG4gICAgICB0aGlzLl9fc3RhdGUuaGV4ID0gQ29sb3JNYXRoLnJnYl90b19oZXgodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gICAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnSEVYJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19zdGF0ZS5oZXg7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnSEVYJztcbiAgICB0aGlzLl9fc3RhdGUuaGV4ID0gdjtcbiAgfVxufSk7XG5cbnZhciBDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb250cm9sbGVyKTtcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuX19vbkNoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKGZuYykge1xuICAgICAgdGhpcy5fX29uQ2hhbmdlID0gZm5jO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25GaW5pc2hDaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkZpbmlzaENoYW5nZShmbmMpIHtcbiAgICAgIHRoaXMuX19vbkZpbmlzaENoYW5nZSA9IGZuYztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICBpZiAodGhpcy5fX29uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkNoYW5nZS5jYWxsKHRoaXMsIG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzTW9kaWZpZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc01vZGlmaWVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbFZhbHVlICE9PSB0aGlzLmdldFZhbHVlKCk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb250cm9sbGVyO1xufSgpO1xuXG52YXIgRVZFTlRfTUFQID0ge1xuICBIVE1MRXZlbnRzOiBbJ2NoYW5nZSddLFxuICBNb3VzZUV2ZW50czogWydjbGljaycsICdtb3VzZW1vdmUnLCAnbW91c2Vkb3duJywgJ21vdXNldXAnLCAnbW91c2VvdmVyJ10sXG4gIEtleWJvYXJkRXZlbnRzOiBbJ2tleWRvd24nXVxufTtcbnZhciBFVkVOVF9NQVBfSU5WID0ge307XG5Db21tb24uZWFjaChFVkVOVF9NQVAsIGZ1bmN0aW9uICh2LCBrKSB7XG4gIENvbW1vbi5lYWNoKHYsIGZ1bmN0aW9uIChlKSB7XG4gICAgRVZFTlRfTUFQX0lOVltlXSA9IGs7XG4gIH0pO1xufSk7XG52YXIgQ1NTX1ZBTFVFX1BJWEVMUyA9IC8oXFxkKyhcXC5cXGQrKT8pcHgvO1xuZnVuY3Rpb24gY3NzVmFsdWVUb1BpeGVscyh2YWwpIHtcbiAgaWYgKHZhbCA9PT0gJzAnIHx8IENvbW1vbi5pc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdmFyIG1hdGNoID0gdmFsLm1hdGNoKENTU19WQUxVRV9QSVhFTFMpO1xuICBpZiAoIUNvbW1vbi5pc051bGwobWF0Y2gpKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB9XG4gIHJldHVybiAwO1xufVxudmFyIGRvbSA9IHtcbiAgbWFrZVNlbGVjdGFibGU6IGZ1bmN0aW9uIG1ha2VTZWxlY3RhYmxlKGVsZW0sIHNlbGVjdGFibGUpIHtcbiAgICBpZiAoZWxlbSA9PT0gdW5kZWZpbmVkIHx8IGVsZW0uc3R5bGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGVsZW0ub25zZWxlY3RzdGFydCA9IHNlbGVjdGFibGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSA6IGZ1bmN0aW9uICgpIHt9O1xuICAgIGVsZW0uc3R5bGUuTW96VXNlclNlbGVjdCA9IHNlbGVjdGFibGUgPyAnYXV0bycgOiAnbm9uZSc7XG4gICAgZWxlbS5zdHlsZS5LaHRtbFVzZXJTZWxlY3QgPSBzZWxlY3RhYmxlID8gJ2F1dG8nIDogJ25vbmUnO1xuICAgIGVsZW0udW5zZWxlY3RhYmxlID0gc2VsZWN0YWJsZSA/ICdvbicgOiAnb2ZmJztcbiAgfSxcbiAgbWFrZUZ1bGxzY3JlZW46IGZ1bmN0aW9uIG1ha2VGdWxsc2NyZWVuKGVsZW0sIGhvciwgdmVydCkge1xuICAgIHZhciB2ZXJ0aWNhbCA9IHZlcnQ7XG4gICAgdmFyIGhvcml6b250YWwgPSBob3I7XG4gICAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChob3Jpem9udGFsKSkge1xuICAgICAgaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQodmVydGljYWwpKSB7XG4gICAgICB2ZXJ0aWNhbCA9IHRydWU7XG4gICAgfVxuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBlbGVtLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgZWxlbS5zdHlsZS5yaWdodCA9IDA7XG4gICAgfVxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgZWxlbS5zdHlsZS50b3AgPSAwO1xuICAgICAgZWxlbS5zdHlsZS5ib3R0b20gPSAwO1xuICAgIH1cbiAgfSxcbiAgZmFrZUV2ZW50OiBmdW5jdGlvbiBmYWtlRXZlbnQoZWxlbSwgZXZlbnRUeXBlLCBwYXJzLCBhdXgpIHtcbiAgICB2YXIgcGFyYW1zID0gcGFycyB8fCB7fTtcbiAgICB2YXIgY2xhc3NOYW1lID0gRVZFTlRfTUFQX0lOVltldmVudFR5cGVdO1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IHR5cGUgJyArIGV2ZW50VHlwZSArICcgbm90IHN1cHBvcnRlZC4nKTtcbiAgICB9XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KGNsYXNzTmFtZSk7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIGNhc2UgJ01vdXNlRXZlbnRzJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBjbGllbnRYID0gcGFyYW1zLnggfHwgcGFyYW1zLmNsaWVudFggfHwgMDtcbiAgICAgICAgICB2YXIgY2xpZW50WSA9IHBhcmFtcy55IHx8IHBhcmFtcy5jbGllbnRZIHx8IDA7XG4gICAgICAgICAgZXZ0LmluaXRNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcGFyYW1zLmJ1YmJsZXMgfHwgZmFsc2UsIHBhcmFtcy5jYW5jZWxhYmxlIHx8IHRydWUsIHdpbmRvdywgcGFyYW1zLmNsaWNrQ291bnQgfHwgMSwgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ0tleWJvYXJkRXZlbnRzJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBpbml0ID0gZXZ0LmluaXRLZXlib2FyZEV2ZW50IHx8IGV2dC5pbml0S2V5RXZlbnQ7XG4gICAgICAgICAgQ29tbW9uLmRlZmF1bHRzKHBhcmFtcywge1xuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGN0cmxLZXk6IGZhbHNlLFxuICAgICAgICAgICAgYWx0S2V5OiBmYWxzZSxcbiAgICAgICAgICAgIHNoaWZ0S2V5OiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGFLZXk6IGZhbHNlLFxuICAgICAgICAgICAga2V5Q29kZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY2hhckNvZGU6IHVuZGVmaW5lZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGluaXQoZXZlbnRUeXBlLCBwYXJhbXMuYnViYmxlcyB8fCBmYWxzZSwgcGFyYW1zLmNhbmNlbGFibGUsIHdpbmRvdywgcGFyYW1zLmN0cmxLZXksIHBhcmFtcy5hbHRLZXksIHBhcmFtcy5zaGlmdEtleSwgcGFyYW1zLm1ldGFLZXksIHBhcmFtcy5rZXlDb2RlLCBwYXJhbXMuY2hhckNvZGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgZXZ0LmluaXRFdmVudChldmVudFR5cGUsIHBhcmFtcy5idWJibGVzIHx8IGZhbHNlLCBwYXJhbXMuY2FuY2VsYWJsZSB8fCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb21tb24uZGVmYXVsdHMoZXZ0LCBhdXgpO1xuICAgIGVsZW0uZGlzcGF0Y2hFdmVudChldnQpO1xuICB9LFxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKGVsZW0sIGV2ZW50LCBmdW5jLCBuZXdCb29sKSB7XG4gICAgdmFyIGJvb2wgPSBuZXdCb29sIHx8IGZhbHNlO1xuICAgIGlmIChlbGVtLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYywgYm9vbCk7XG4gICAgfSBlbHNlIGlmIChlbGVtLmF0dGFjaEV2ZW50KSB7XG4gICAgICBlbGVtLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZnVuYyk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKGVsZW0sIGV2ZW50LCBmdW5jLCBuZXdCb29sKSB7XG4gICAgdmFyIGJvb2wgPSBuZXdCb29sIHx8IGZhbHNlO1xuICAgIGlmIChlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYywgYm9vbCk7XG4gICAgfSBlbHNlIGlmIChlbGVtLmRldGFjaEV2ZW50KSB7XG4gICAgICBlbGVtLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgZnVuYyk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbS5jbGFzc05hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfSBlbHNlIGlmIChlbGVtLmNsYXNzTmFtZSAhPT0gY2xhc3NOYW1lKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IGVsZW0uY2xhc3NOYW1lLnNwbGl0KC8gKy8pO1xuICAgICAgaWYgKGNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpID09PSAtMSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKS5yZXBsYWNlKC9eXFxzKy8sICcnKS5yZXBsYWNlKC9cXHMrJC8sICcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbiAgfSxcbiAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGlmIChlbGVtLmNsYXNzTmFtZSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtLmNsYXNzTmFtZS5zcGxpdCgvICsvKTtcbiAgICAgICAgdmFyIGluZGV4ID0gY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjbGFzc2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbiAgfSxcbiAgaGFzQ2xhc3M6IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpefFxcXFxzKyknICsgY2xhc3NOYW1lICsgJyg/OlxcXFxzK3wkKScpLnRlc3QoZWxlbS5jbGFzc05hbWUpIHx8IGZhbHNlO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgcmV0dXJuIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci1sZWZ0LXdpZHRoJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsncGFkZGluZy1sZWZ0J10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsncGFkZGluZy1yaWdodCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGUud2lkdGgpO1xuICB9LFxuICBnZXRIZWlnaHQ6IGZ1bmN0aW9uIGdldEhlaWdodChlbGVtKSB7XG4gICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICByZXR1cm4gY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsnYm9yZGVyLXRvcC13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci1ib3R0b20td2lkdGgnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydwYWRkaW5nLXRvcCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctYm90dG9tJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZS5oZWlnaHQpO1xuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgIHZhciBlbGVtID0gZWw7XG4gICAgdmFyIG9mZnNldCA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgaWYgKGVsZW0ub2Zmc2V0UGFyZW50KSB7XG4gICAgICBkbyB7XG4gICAgICAgIG9mZnNldC5sZWZ0ICs9IGVsZW0ub2Zmc2V0TGVmdDtcbiAgICAgICAgb2Zmc2V0LnRvcCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgfSB3aGlsZSAoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH0sXG4gIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGVsZW0udHlwZSB8fCBlbGVtLmhyZWYpO1xuICB9XG59O1xuXG52YXIgQm9vbGVhbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoQm9vbGVhbkNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gQm9vbGVhbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEJvb2xlYW5Db250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQm9vbGVhbkNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCb29sZWFuQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICBfdGhpczIuX19wcmV2ID0gX3RoaXMyLmdldFZhbHVlKCk7XG4gICAgX3RoaXMyLl9fY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIF90aGlzMi5fX2NoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgX3RoaXMuc2V0VmFsdWUoIV90aGlzLl9fcHJldik7XG4gICAgfVxuICAgIGRvbS5iaW5kKF90aGlzMi5fX2NoZWNrYm94LCAnY2hhbmdlJywgb25DaGFuZ2UsIGZhbHNlKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19jaGVja2JveCk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKEJvb2xlYW5Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodikge1xuICAgICAgdmFyIHRvUmV0dXJuID0gZ2V0KEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZSksICdzZXRWYWx1ZScsIHRoaXMpLmNhbGwodGhpcywgdik7XG4gICAgICBpZiAodGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fcHJldiA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIHJldHVybiB0b1JldHVybjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIGlmICh0aGlzLmdldFZhbHVlKCkgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fX2NoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICAgIHRoaXMuX19jaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fX3ByZXYgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX2NoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX3ByZXYgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXQoQm9vbGVhbkNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQm9vbGVhbkNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQm9vbGVhbkNvbnRyb2xsZXI7XG59KENvbnRyb2xsZXIpO1xuXG52YXIgT3B0aW9uQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhPcHRpb25Db250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIE9wdGlvbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSwgb3B0cykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE9wdGlvbkNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPcHRpb25Db250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIHZhciBvcHRpb25zID0gb3B0cztcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgaWYgKENvbW1vbi5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICB2YXIgbWFwID0ge307XG4gICAgICBDb21tb24uZWFjaChvcHRpb25zLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBtYXBbZWxlbWVudF0gPSBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zID0gbWFwO1xuICAgIH1cbiAgICBDb21tb24uZWFjaChvcHRpb25zLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0LmlubmVySFRNTCA9IGtleTtcbiAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgX3RoaXMuX19zZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9KTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NlbGVjdCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkZXNpcmVkVmFsdWUgPSB0aGlzLm9wdGlvbnNbdGhpcy5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgIF90aGlzLnNldFZhbHVlKGRlc2lyZWRWYWx1ZSk7XG4gICAgfSk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fc2VsZWN0KTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKE9wdGlvbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2KSB7XG4gICAgICB2YXIgdG9SZXR1cm4gPSBnZXQoT3B0aW9uQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPcHRpb25Db250cm9sbGVyLnByb3RvdHlwZSksICdzZXRWYWx1ZScsIHRoaXMpLmNhbGwodGhpcywgdik7XG4gICAgICBpZiAodGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICBpZiAoZG9tLmlzQWN0aXZlKHRoaXMuX19zZWxlY3QpKSByZXR1cm4gdGhpcztcbiAgICAgIHRoaXMuX19zZWxlY3QudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICByZXR1cm4gZ2V0KE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uQ29udHJvbGxlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBPcHRpb25Db250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxudmFyIFN0cmluZ0NvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoU3RyaW5nQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBTdHJpbmdDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmdDb250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RyaW5nQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0cmluZ0NvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5fX2lucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLl9faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIF90aGlzMi5fX2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdrZXl1cCcsIG9uQ2hhbmdlKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2NoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2JsdXInLCBvbkJsdXIpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2lucHV0KTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKFN0cmluZ0NvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICBpZiAoIWRvbS5pc0FjdGl2ZSh0aGlzLl9faW5wdXQpKSB7XG4gICAgICAgIHRoaXMuX19pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXQoU3RyaW5nQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdHJpbmdDb250cm9sbGVyLnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0cmluZ0NvbnRyb2xsZXI7XG59KENvbnRyb2xsZXIpO1xuXG5mdW5jdGlvbiBudW1EZWNpbWFscyh4KSB7XG4gIHZhciBfeCA9IHgudG9TdHJpbmcoKTtcbiAgaWYgKF94LmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIF94Lmxlbmd0aCAtIF94LmluZGV4T2YoJy4nKSAtIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG52YXIgTnVtYmVyQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhOdW1iZXJDb250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIE51bWJlckNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVtYmVyQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3BhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBfdGhpcy5fX21pbiA9IF9wYXJhbXMubWluO1xuICAgIF90aGlzLl9fbWF4ID0gX3BhcmFtcy5tYXg7XG4gICAgX3RoaXMuX19zdGVwID0gX3BhcmFtcy5zdGVwO1xuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQoX3RoaXMuX19zdGVwKSkge1xuICAgICAgaWYgKF90aGlzLmluaXRpYWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBfdGhpcy5fX2ltcGxpZWRTdGVwID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9faW1wbGllZFN0ZXAgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZyhNYXRoLmFicyhfdGhpcy5pbml0aWFsVmFsdWUpKSAvIE1hdGguTE4xMCkpIC8gMTA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9faW1wbGllZFN0ZXAgPSBfdGhpcy5fX3N0ZXA7XG4gICAgfVxuICAgIF90aGlzLl9fcHJlY2lzaW9uID0gbnVtRGVjaW1hbHMoX3RoaXMuX19pbXBsaWVkU3RlcCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIGNyZWF0ZUNsYXNzKE51bWJlckNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2KSB7XG4gICAgICB2YXIgX3YgPSB2O1xuICAgICAgaWYgKHRoaXMuX19taW4gIT09IHVuZGVmaW5lZCAmJiBfdiA8IHRoaXMuX19taW4pIHtcbiAgICAgICAgX3YgPSB0aGlzLl9fbWluO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9fbWF4ICE9PSB1bmRlZmluZWQgJiYgX3YgPiB0aGlzLl9fbWF4KSB7XG4gICAgICAgIF92ID0gdGhpcy5fX21heDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fc3RlcCAhPT0gdW5kZWZpbmVkICYmIF92ICUgdGhpcy5fX3N0ZXAgIT09IDApIHtcbiAgICAgICAgX3YgPSBNYXRoLnJvdW5kKF92IC8gdGhpcy5fX3N0ZXApICogdGhpcy5fX3N0ZXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0KE51bWJlckNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlci5wcm90b3R5cGUpLCAnc2V0VmFsdWUnLCB0aGlzKS5jYWxsKHRoaXMsIF92KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtaW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtaW4obWluVmFsdWUpIHtcbiAgICAgIHRoaXMuX19taW4gPSBtaW5WYWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21heCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1heChtYXhWYWx1ZSkge1xuICAgICAgdGhpcy5fX21heCA9IG1heFZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RlcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0ZXAoc3RlcFZhbHVlKSB7XG4gICAgICB0aGlzLl9fc3RlcCA9IHN0ZXBWYWx1ZTtcbiAgICAgIHRoaXMuX19pbXBsaWVkU3RlcCA9IHN0ZXBWYWx1ZTtcbiAgICAgIHRoaXMuX19wcmVjaXNpb24gPSBudW1EZWNpbWFscyhzdGVwVmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdW1iZXJDb250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxuZnVuY3Rpb24gcm91bmRUb0RlY2ltYWwodmFsdWUsIGRlY2ltYWxzKSB7XG4gIHZhciB0ZW5UbyA9IE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogdGVuVG8pIC8gdGVuVG87XG59XG52YXIgTnVtYmVyQ29udHJvbGxlckJveCA9IGZ1bmN0aW9uIChfTnVtYmVyQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhOdW1iZXJDb250cm9sbGVyQm94LCBfTnVtYmVyQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIE51bWJlckNvbnRyb2xsZXJCb3gob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyQ29udHJvbGxlckJveCk7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bWJlckNvbnRyb2xsZXJCb3guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyQm94KSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpKTtcbiAgICBfdGhpczIuX190cnVuY2F0aW9uU3VzcGVuZGVkID0gZmFsc2U7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIHZhciBwcmV2WSA9IHZvaWQgMDtcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIHZhciBhdHRlbXB0ZWQgPSBwYXJzZUZsb2F0KF90aGlzLl9faW5wdXQudmFsdWUpO1xuICAgICAgaWYgKCFDb21tb24uaXNOYU4oYXR0ZW1wdGVkKSkge1xuICAgICAgICBfdGhpcy5zZXRWYWx1ZShhdHRlbXB0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbkZpbmlzaCgpIHtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VEcmFnKGUpIHtcbiAgICAgIHZhciBkaWZmID0gcHJldlkgLSBlLmNsaWVudFk7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5nZXRWYWx1ZSgpICsgZGlmZiAqIF90aGlzLl9faW1wbGllZFN0ZXApO1xuICAgICAgcHJldlkgPSBlLmNsaWVudFk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgcHJldlkgPSBlLmNsaWVudFk7XG4gICAgfVxuICAgIF90aGlzMi5fX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnY2hhbmdlJywgb25DaGFuZ2UpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnYmx1cicsIG9uQmx1cik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIF90aGlzLl9fdHJ1bmNhdGlvblN1c3BlbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgICBfdGhpcy5fX3RydW5jYXRpb25TdXNwZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgb25GaW5pc2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2lucHV0KTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKE51bWJlckNvbnRyb2xsZXJCb3gsIFt7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICB0aGlzLl9faW5wdXQudmFsdWUgPSB0aGlzLl9fdHJ1bmNhdGlvblN1c3BlbmRlZCA/IHRoaXMuZ2V0VmFsdWUoKSA6IHJvdW5kVG9EZWNpbWFsKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5fX3ByZWNpc2lvbik7XG4gICAgICByZXR1cm4gZ2V0KE51bWJlckNvbnRyb2xsZXJCb3gucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlckJveC5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdW1iZXJDb250cm9sbGVyQm94O1xufShOdW1iZXJDb250cm9sbGVyKTtcblxuZnVuY3Rpb24gbWFwKHYsIGkxLCBpMiwgbzEsIG8yKSB7XG4gIHJldHVybiBvMSArIChvMiAtIG8xKSAqICgodiAtIGkxKSAvIChpMiAtIGkxKSk7XG59XG52YXIgTnVtYmVyQ29udHJvbGxlclNsaWRlciA9IGZ1bmN0aW9uIChfTnVtYmVyQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhOdW1iZXJDb250cm9sbGVyU2xpZGVyLCBfTnVtYmVyQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIE51bWJlckNvbnRyb2xsZXJTbGlkZXIob2JqZWN0LCBwcm9wZXJ0eSwgbWluLCBtYXgsIHN0ZXApIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBOdW1iZXJDb250cm9sbGVyU2xpZGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVtYmVyQ29udHJvbGxlclNsaWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXJTbGlkZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHksIHsgbWluOiBtaW4sIG1heDogbWF4LCBzdGVwOiBzdGVwIH0pKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2ZvcmVncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb20uYmluZChfdGhpczIuX19iYWNrZ3JvdW5kLCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2JhY2tncm91bmQsICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICBkb20uYWRkQ2xhc3MoX3RoaXMyLl9fYmFja2dyb3VuZCwgJ3NsaWRlcicpO1xuICAgIGRvbS5hZGRDbGFzcyhfdGhpczIuX19mb3JlZ3JvdW5kLCAnc2xpZGVyLWZnJyk7XG4gICAgZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZyk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIG9uTW91c2VEcmFnKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlRHJhZyhlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgYmdSZWN0ID0gX3RoaXMuX19iYWNrZ3JvdW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgX3RoaXMuc2V0VmFsdWUobWFwKGUuY2xpZW50WCwgYmdSZWN0LmxlZnQsIGJnUmVjdC5yaWdodCwgX3RoaXMuX19taW4sIF90aGlzLl9fbWF4KSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgb25Ub3VjaE1vdmUoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgIHZhciBjbGllbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB2YXIgYmdSZWN0ID0gX3RoaXMuX19iYWNrZ3JvdW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgX3RoaXMuc2V0VmFsdWUobWFwKGNsaWVudFgsIGJnUmVjdC5sZWZ0LCBiZ1JlY3QucmlnaHQsIF90aGlzLl9fbWluLCBfdGhpcy5fX21heCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIF90aGlzMi5fX2JhY2tncm91bmQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fZm9yZWdyb3VuZCk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fYmFja2dyb3VuZCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhOdW1iZXJDb250cm9sbGVyU2xpZGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdmFyIHBjdCA9ICh0aGlzLmdldFZhbHVlKCkgLSB0aGlzLl9fbWluKSAvICh0aGlzLl9fbWF4IC0gdGhpcy5fX21pbik7XG4gICAgICB0aGlzLl9fZm9yZWdyb3VuZC5zdHlsZS53aWR0aCA9IHBjdCAqIDEwMCArICclJztcbiAgICAgIHJldHVybiBnZXQoTnVtYmVyQ29udHJvbGxlclNsaWRlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyU2xpZGVyLnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bWJlckNvbnRyb2xsZXJTbGlkZXI7XG59KE51bWJlckNvbnRyb2xsZXIpO1xuXG52YXIgRnVuY3Rpb25Db250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKEZ1bmN0aW9uQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBGdW5jdGlvbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSwgdGV4dCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEZ1bmN0aW9uQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZ1bmN0aW9uQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICBfdGhpczIuX19idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19idXR0b24uaW5uZXJIVE1MID0gdGV4dCA9PT0gdW5kZWZpbmVkID8gJ0ZpcmUnIDogdGV4dDtcbiAgICBkb20uYmluZChfdGhpczIuX19idXR0b24sICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5maXJlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZG9tLmFkZENsYXNzKF90aGlzMi5fX2J1dHRvbiwgJ2J1dHRvbicpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2J1dHRvbik7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhGdW5jdGlvbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnZmlyZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpcmUoKSB7XG4gICAgICBpZiAodGhpcy5fX29uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkNoYW5nZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5nZXRWYWx1ZSgpLmNhbGwodGhpcy5vYmplY3QpO1xuICAgICAgaWYgKHRoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRnVuY3Rpb25Db250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxudmFyIENvbG9yQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhDb2xvckNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gQ29sb3JDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xvckNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb2xvckNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb2xvckNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICBfdGhpczIuX19jb2xvciA9IG5ldyBDb2xvcihfdGhpczIuZ2V0VmFsdWUoKSk7XG4gICAgX3RoaXMyLl9fdGVtcCA9IG5ldyBDb2xvcigwKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb20ubWFrZVNlbGVjdGFibGUoX3RoaXMyLmRvbUVsZW1lbnQsIGZhbHNlKTtcbiAgICBfdGhpczIuX19zZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX3NlbGVjdG9yLmNsYXNzTmFtZSA9ICdzZWxlY3Rvcic7XG4gICAgX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQuY2xhc3NOYW1lID0gJ3NhdHVyYXRpb24tZmllbGQnO1xuICAgIF90aGlzMi5fX2ZpZWxkX2tub2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19maWVsZF9rbm9iLmNsYXNzTmFtZSA9ICdmaWVsZC1rbm9iJztcbiAgICBfdGhpczIuX19maWVsZF9rbm9iX2JvcmRlciA9ICcycHggc29saWQgJztcbiAgICBfdGhpczIuX19odWVfa25vYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2h1ZV9rbm9iLmNsYXNzTmFtZSA9ICdodWUta25vYic7XG4gICAgX3RoaXMyLl9faHVlX2ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9faHVlX2ZpZWxkLmNsYXNzTmFtZSA9ICdodWUtZmllbGQnO1xuICAgIF90aGlzMi5fX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIF90aGlzMi5fX2lucHV0X3RleHRTaGFkb3cgPSAnMCAxcHggMXB4ICc7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIG9uQmx1ci5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnYmx1cicsIG9uQmx1cik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2VsZWN0b3IsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20uYWRkQ2xhc3ModGhpcywgJ2RyYWcnKS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhfdGhpcy5fX3NlbGVjdG9yLCAnZHJhZycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2VsZWN0b3IsICd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMsICdkcmFnJykuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKF90aGlzLl9fc2VsZWN0b3IsICdkcmFnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9fc2VsZWN0b3Iuc3R5bGUsIHtcbiAgICAgIHdpZHRoOiAnMTIycHgnLFxuICAgICAgaGVpZ2h0OiAnMTAycHgnLFxuICAgICAgcGFkZGluZzogJzNweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjIyJyxcbiAgICAgIGJveFNoYWRvdzogJzBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC4zKSdcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2ZpZWxkX2tub2Iuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMnB4JyxcbiAgICAgIGhlaWdodDogJzEycHgnLFxuICAgICAgYm9yZGVyOiBfdGhpczIuX19maWVsZF9rbm9iX2JvcmRlciArIChfdGhpczIuX19jb2xvci52IDwgMC41ID8gJyNmZmYnIDogJyMwMDAnKSxcbiAgICAgIGJveFNoYWRvdzogJzBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgICAgIHpJbmRleDogMVxuICAgIH0pO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9faHVlX2tub2Iuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxNXB4JyxcbiAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICBib3JkZXJSaWdodDogJzRweCBzb2xpZCAjZmZmJyxcbiAgICAgIHpJbmRleDogMVxuICAgIH0pO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZC5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzU1NScsXG4gICAgICBtYXJnaW5SaWdodDogJzNweCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfSk7XG4gICAgQ29tbW9uLmV4dGVuZCh2YWx1ZUZpZWxkLnN0eWxlLCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZSdcbiAgICB9KTtcbiAgICBsaW5lYXJHcmFkaWVudCh2YWx1ZUZpZWxkLCAndG9wJywgJ3JnYmEoMCwwLDAsMCknLCAnIzAwMCcpO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9faHVlX2ZpZWxkLnN0eWxlLCB7XG4gICAgICB3aWR0aDogJzE1cHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLFxuICAgICAgY3Vyc29yOiAnbnMtcmVzaXplJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnM3B4JyxcbiAgICAgIHJpZ2h0OiAnM3B4J1xuICAgIH0pO1xuICAgIGh1ZUdyYWRpZW50KF90aGlzMi5fX2h1ZV9maWVsZCk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19pbnB1dC5zdHlsZSwge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICB0ZXh0U2hhZG93OiBfdGhpczIuX19pbnB1dF90ZXh0U2hhZG93ICsgJ3JnYmEoMCwwLDAsMC43KSdcbiAgICB9KTtcbiAgICBkb20uYmluZChfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLCAnbW91c2Vkb3duJywgZmllbGREb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLCAndG91Y2hzdGFydCcsIGZpZWxkRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fZmllbGRfa25vYiwgJ21vdXNlZG93bicsIGZpZWxkRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fZmllbGRfa25vYiwgJ3RvdWNoc3RhcnQnLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2h1ZV9maWVsZCwgJ21vdXNlZG93bicsIGZpZWxkRG93bkgpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2h1ZV9maWVsZCwgJ3RvdWNoc3RhcnQnLCBmaWVsZERvd25IKTtcbiAgICBmdW5jdGlvbiBmaWVsZERvd24oZSkge1xuICAgICAgc2V0U1YoZSk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBzZXRTVik7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBzZXRTVik7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcFNWKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZmllbGRVcFNWKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmllbGREb3duSChlKSB7XG4gICAgICBzZXRIKGUpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0SCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBzZXRIKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmaWVsZFVwSCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBIKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmllbGRVcFNWKCkge1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBzZXRTVik7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIHNldFNWKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZpZWxkVXBTVik7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZmllbGRVcFNWKTtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpZWxkVXBIKCkge1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBzZXRIKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0SCk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmaWVsZFVwSCk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZmllbGRVcEgpO1xuICAgICAgb25GaW5pc2goKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgdmFyIGkgPSBpbnRlcnByZXQodGhpcy52YWx1ZSk7XG4gICAgICBpZiAoaSAhPT0gZmFsc2UpIHtcbiAgICAgICAgX3RoaXMuX19jb2xvci5fX3N0YXRlID0gaTtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuX19jb2xvci50b09yaWdpbmFsKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IF90aGlzLl9fY29sb3IudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25GaW5pc2goKSB7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZC5hcHBlbmRDaGlsZCh2YWx1ZUZpZWxkKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5hcHBlbmRDaGlsZChfdGhpczIuX19maWVsZF9rbm9iKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5hcHBlbmRDaGlsZChfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5hcHBlbmRDaGlsZChfdGhpczIuX19odWVfZmllbGQpO1xuICAgIF90aGlzMi5fX2h1ZV9maWVsZC5hcHBlbmRDaGlsZChfdGhpczIuX19odWVfa25vYik7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faW5wdXQpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX3NlbGVjdG9yKTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIGZ1bmN0aW9uIHNldFNWKGUpIHtcbiAgICAgIGlmIChlLnR5cGUuaW5kZXhPZigndG91Y2gnKSA9PT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgdmFyIGZpZWxkUmVjdCA9IF90aGlzLl9fc2F0dXJhdGlvbl9maWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBfcmVmID0gZS50b3VjaGVzICYmIGUudG91Y2hlc1swXSB8fCBlLFxuICAgICAgICAgIGNsaWVudFggPSBfcmVmLmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWYuY2xpZW50WTtcbiAgICAgIHZhciBzID0gKGNsaWVudFggLSBmaWVsZFJlY3QubGVmdCkgLyAoZmllbGRSZWN0LnJpZ2h0IC0gZmllbGRSZWN0LmxlZnQpO1xuICAgICAgdmFyIHYgPSAxIC0gKGNsaWVudFkgLSBmaWVsZFJlY3QudG9wKSAvIChmaWVsZFJlY3QuYm90dG9tIC0gZmllbGRSZWN0LnRvcCk7XG4gICAgICBpZiAodiA+IDEpIHtcbiAgICAgICAgdiA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHYgPCAwKSB7XG4gICAgICAgIHYgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHMgPiAxKSB7XG4gICAgICAgIHMgPSAxO1xuICAgICAgfSBlbHNlIGlmIChzIDwgMCkge1xuICAgICAgICBzID0gMDtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9fY29sb3IudiA9IHY7XG4gICAgICBfdGhpcy5fX2NvbG9yLnMgPSBzO1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuX19jb2xvci50b09yaWdpbmFsKCkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRIKGUpIHtcbiAgICAgIGlmIChlLnR5cGUuaW5kZXhPZigndG91Y2gnKSA9PT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgdmFyIGZpZWxkUmVjdCA9IF90aGlzLl9faHVlX2ZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIF9yZWYyID0gZS50b3VjaGVzICYmIGUudG91Y2hlc1swXSB8fCBlLFxuICAgICAgICAgIGNsaWVudFkgPSBfcmVmMi5jbGllbnRZO1xuICAgICAgdmFyIGggPSAxIC0gKGNsaWVudFkgLSBmaWVsZFJlY3QudG9wKSAvIChmaWVsZFJlY3QuYm90dG9tIC0gZmllbGRSZWN0LnRvcCk7XG4gICAgICBpZiAoaCA+IDEpIHtcbiAgICAgICAgaCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGggPCAwKSB7XG4gICAgICAgIGggPSAwO1xuICAgICAgfVxuICAgICAgX3RoaXMuX19jb2xvci5oID0gaCAqIDM2MDtcbiAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhDb2xvckNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICB2YXIgaSA9IGludGVycHJldCh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBtaXNtYXRjaCA9IGZhbHNlO1xuICAgICAgICBDb21tb24uZWFjaChDb2xvci5DT01QT05FTlRTLCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgaWYgKCFDb21tb24uaXNVbmRlZmluZWQoaVtjb21wb25lbnRdKSAmJiAhQ29tbW9uLmlzVW5kZWZpbmVkKHRoaXMuX19jb2xvci5fX3N0YXRlW2NvbXBvbmVudF0pICYmIGlbY29tcG9uZW50XSAhPT0gdGhpcy5fX2NvbG9yLl9fc3RhdGVbY29tcG9uZW50XSkge1xuICAgICAgICAgICAgbWlzbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGlmIChtaXNtYXRjaCkge1xuICAgICAgICAgIENvbW1vbi5leHRlbmQodGhpcy5fX2NvbG9yLl9fc3RhdGUsIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBDb21tb24uZXh0ZW5kKHRoaXMuX190ZW1wLl9fc3RhdGUsIHRoaXMuX19jb2xvci5fX3N0YXRlKTtcbiAgICAgIHRoaXMuX190ZW1wLmEgPSAxO1xuICAgICAgdmFyIGZsaXAgPSB0aGlzLl9fY29sb3IudiA8IDAuNSB8fCB0aGlzLl9fY29sb3IucyA+IDAuNSA/IDI1NSA6IDA7XG4gICAgICB2YXIgX2ZsaXAgPSAyNTUgLSBmbGlwO1xuICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9fZmllbGRfa25vYi5zdHlsZSwge1xuICAgICAgICBtYXJnaW5MZWZ0OiAxMDAgKiB0aGlzLl9fY29sb3IucyAtIDcgKyAncHgnLFxuICAgICAgICBtYXJnaW5Ub3A6IDEwMCAqICgxIC0gdGhpcy5fX2NvbG9yLnYpIC0gNyArICdweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5fX3RlbXAudG9IZXhTdHJpbmcoKSxcbiAgICAgICAgYm9yZGVyOiB0aGlzLl9fZmllbGRfa25vYl9ib3JkZXIgKyAncmdiKCcgKyBmbGlwICsgJywnICsgZmxpcCArICcsJyArIGZsaXAgKyAnKSdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fX2h1ZV9rbm9iLnN0eWxlLm1hcmdpblRvcCA9ICgxIC0gdGhpcy5fX2NvbG9yLmggLyAzNjApICogMTAwICsgJ3B4JztcbiAgICAgIHRoaXMuX190ZW1wLnMgPSAxO1xuICAgICAgdGhpcy5fX3RlbXAudiA9IDE7XG4gICAgICBsaW5lYXJHcmFkaWVudCh0aGlzLl9fc2F0dXJhdGlvbl9maWVsZCwgJ2xlZnQnLCAnI2ZmZicsIHRoaXMuX190ZW1wLnRvSGV4U3RyaW5nKCkpO1xuICAgICAgdGhpcy5fX2lucHV0LnZhbHVlID0gdGhpcy5fX2NvbG9yLnRvU3RyaW5nKCk7XG4gICAgICBDb21tb24uZXh0ZW5kKHRoaXMuX19pbnB1dC5zdHlsZSwge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuX19jb2xvci50b0hleFN0cmluZygpLFxuICAgICAgICBjb2xvcjogJ3JnYignICsgZmxpcCArICcsJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJyknLFxuICAgICAgICB0ZXh0U2hhZG93OiB0aGlzLl9faW5wdXRfdGV4dFNoYWRvdyArICdyZ2JhKCcgKyBfZmxpcCArICcsJyArIF9mbGlwICsgJywnICsgX2ZsaXAgKyAnLC43KSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ29sb3JDb250cm9sbGVyO1xufShDb250cm9sbGVyKTtcbnZhciB2ZW5kb3JzID0gWyctbW96LScsICctby0nLCAnLXdlYmtpdC0nLCAnLW1zLScsICcnXTtcbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50KGVsZW0sIHgsIGEsIGIpIHtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gIENvbW1vbi5lYWNoKHZlbmRvcnMsIGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6ICcgKyB2ZW5kb3IgKyAnbGluZWFyLWdyYWRpZW50KCcgKyB4ICsgJywgJyArIGEgKyAnIDAlLCAnICsgYiArICcgMTAwJSk7ICc7XG4gIH0pO1xufVxuZnVuY3Rpb24gaHVlR3JhZGllbnQoZWxlbSkge1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmYwMDAwIDAlLCAjZmYwMGZmIDE3JSwgIzAwMDBmZiAzNCUsICMwMGZmZmYgNTAlLCAjMDBmZjAwIDY3JSwgI2ZmZmYwMCA4NCUsICNmZjAwMDAgMTAwJSk7JztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmYwMDAwIDAlLCNmZjAwZmYgMTclLCMwMDAwZmYgMzQlLCMwMGZmZmYgNTAlLCMwMGZmMDAgNjclLCNmZmZmMDAgODQlLCNmZjAwMDAgMTAwJSk7JztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmYwMDAwIDAlLCNmZjAwZmYgMTclLCMwMDAwZmYgMzQlLCMwMGZmZmYgNTAlLCMwMGZmMDAgNjclLCNmZmZmMDAgODQlLCNmZjAwMDAgMTAwJSk7JztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG59XG5cbnZhciBjc3MgPSB7XG4gIGxvYWQ6IGZ1bmN0aW9uIGxvYWQodXJsLCBpbmRvYykge1xuICAgIHZhciBkb2MgPSBpbmRvYyB8fCBkb2N1bWVudDtcbiAgICB2YXIgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobGluayk7XG4gIH0sXG4gIGluamVjdDogZnVuY3Rpb24gaW5qZWN0KGNzc0NvbnRlbnQsIGluZG9jKSB7XG4gICAgdmFyIGRvYyA9IGluZG9jIHx8IGRvY3VtZW50O1xuICAgIHZhciBpbmplY3RlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgaW5qZWN0ZWQudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgaW5qZWN0ZWQuaW5uZXJIVE1MID0gY3NzQ29udGVudDtcbiAgICB2YXIgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHRyeSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGluamVjdGVkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2F2ZURpYWxvZ0NvbnRlbnRzID0gXCI8ZGl2IGlkPVxcXCJkZy1zYXZlXFxcIiBjbGFzcz1cXFwiZGcgZGlhbG9ndWVcXFwiPlxcblxcbiAgSGVyZSdzIHRoZSBuZXcgbG9hZCBwYXJhbWV0ZXIgZm9yIHlvdXIgPGNvZGU+R1VJPC9jb2RlPidzIGNvbnN0cnVjdG9yOlxcblxcbiAgPHRleHRhcmVhIGlkPVxcXCJkZy1uZXctY29uc3RydWN0b3JcXFwiPjwvdGV4dGFyZWE+XFxuXFxuICA8ZGl2IGlkPVxcXCJkZy1zYXZlLWxvY2FsbHlcXFwiPlxcblxcbiAgICA8aW5wdXQgaWQ9XFxcImRnLWxvY2FsLXN0b3JhZ2VcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIi8+IEF1dG9tYXRpY2FsbHkgc2F2ZVxcbiAgICB2YWx1ZXMgdG8gPGNvZGU+bG9jYWxTdG9yYWdlPC9jb2RlPiBvbiBleGl0LlxcblxcbiAgICA8ZGl2IGlkPVxcXCJkZy1sb2NhbC1leHBsYWluXFxcIj5UaGUgdmFsdWVzIHNhdmVkIHRvIDxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT4gd2lsbFxcbiAgICAgIG92ZXJyaWRlIHRob3NlIHBhc3NlZCB0byA8Y29kZT5kYXQuR1VJPC9jb2RlPidzIGNvbnN0cnVjdG9yLiBUaGlzIG1ha2VzIGl0XFxuICAgICAgZWFzaWVyIHRvIHdvcmsgaW5jcmVtZW50YWxseSwgYnV0IDxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT4gaXMgZnJhZ2lsZSxcXG4gICAgICBhbmQgeW91ciBmcmllbmRzIG1heSBub3Qgc2VlIHRoZSBzYW1lIHZhbHVlcyB5b3UgZG8uXFxuXFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuXFxuPC9kaXY+XCI7XG5cbnZhciBDb250cm9sbGVyRmFjdG9yeSA9IGZ1bmN0aW9uIENvbnRyb2xsZXJGYWN0b3J5KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgdmFyIGluaXRpYWxWYWx1ZSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gIGlmIChDb21tb24uaXNBcnJheShhcmd1bWVudHNbMl0pIHx8IENvbW1vbi5pc09iamVjdChhcmd1bWVudHNbMl0pKSB7XG4gICAgcmV0dXJuIG5ldyBPcHRpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIGFyZ3VtZW50c1syXSk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc051bWJlcihpbml0aWFsVmFsdWUpKSB7XG4gICAgaWYgKENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbMl0pICYmIENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbM10pKSB7XG4gICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKGFyZ3VtZW50c1s0XSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyU2xpZGVyKG9iamVjdCwgcHJvcGVydHksIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyU2xpZGVyKG9iamVjdCwgcHJvcGVydHksIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICB9XG4gICAgaWYgKENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbNF0pKSB7XG4gICAgICByZXR1cm4gbmV3IE51bWJlckNvbnRyb2xsZXJCb3gob2JqZWN0LCBwcm9wZXJ0eSwgeyBtaW46IGFyZ3VtZW50c1syXSwgbWF4OiBhcmd1bWVudHNbM10sIHN0ZXA6IGFyZ3VtZW50c1s0XSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyQm94KG9iamVjdCwgcHJvcGVydHksIHsgbWluOiBhcmd1bWVudHNbMl0sIG1heDogYXJndW1lbnRzWzNdIH0pO1xuICB9XG4gIGlmIChDb21tb24uaXNTdHJpbmcoaW5pdGlhbFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgU3RyaW5nQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzRnVuY3Rpb24oaW5pdGlhbFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksICcnKTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzQm9vbGVhbihpbml0aWFsVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBCb29sZWFuQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xufVxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxudmFyIENlbnRlcmVkRGl2ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDZW50ZXJlZERpdigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDZW50ZXJlZERpdik7XG4gICAgdGhpcy5iYWNrZ3JvdW5kRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIENvbW1vbi5leHRlbmQodGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZSwge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjgpJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB6SW5kZXg6ICcxMDAwJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiAnb3BhY2l0eSAwLjJzIGxpbmVhcicsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjJzIGxpbmVhcidcbiAgICB9KTtcbiAgICBkb20ubWFrZUZ1bGxzY3JlZW4odGhpcy5iYWNrZ3JvdW5kRWxlbWVudCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgQ29tbW9uLmV4dGVuZCh0aGlzLmRvbUVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgekluZGV4OiAnMTAwMScsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogJy13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQsIG9wYWNpdHkgMC4ycyBsaW5lYXInLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgbGluZWFyJ1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgZG9tLmJpbmQodGhpcy5iYWNrZ3JvdW5kRWxlbWVudCwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaGlkZSgpO1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENlbnRlcmVkRGl2LCBbe1xuICAgIGtleTogJ3Nob3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBfdGhpcy5kb21FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBfdGhpcy5kb21FbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoaWRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgIF90aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9tLnVuYmluZChfdGhpcy5kb21FbGVtZW50LCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhpZGUpO1xuICAgICAgICBkb20udW5iaW5kKF90aGlzLmRvbUVsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgaGlkZSk7XG4gICAgICAgIGRvbS51bmJpbmQoX3RoaXMuZG9tRWxlbWVudCwgJ29UcmFuc2l0aW9uRW5kJywgaGlkZSk7XG4gICAgICB9O1xuICAgICAgZG9tLmJpbmQodGhpcy5kb21FbGVtZW50LCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhpZGUpO1xuICAgICAgZG9tLmJpbmQodGhpcy5kb21FbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGhpZGUpO1xuICAgICAgZG9tLmJpbmQodGhpcy5kb21FbGVtZW50LCAnb1RyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xheW91dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxheW91dCgpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gZG9tLmdldFdpZHRoKHRoaXMuZG9tRWxlbWVudCkgLyAyICsgJ3B4JztcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gZG9tLmdldEhlaWdodCh0aGlzLmRvbUVsZW1lbnQpIC8gMiArICdweCc7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDZW50ZXJlZERpdjtcbn0oKTtcblxudmFyIHN0eWxlU2hlZXQgPSBfX18kaW5zZXJ0U3R5bGUoXCIuZGcgdWx7bGlzdC1zdHlsZTpub25lO21hcmdpbjowO3BhZGRpbmc6MDt3aWR0aDoxMDAlO2NsZWFyOmJvdGh9LmRnLmFje3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDowO3otaW5kZXg6MH0uZGc6bm90KC5hYykgLm1haW57b3ZlcmZsb3c6aGlkZGVufS5kZy5tYWluey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcn0uZGcubWFpbi50YWxsZXItdGhhbi13aW5kb3d7b3ZlcmZsb3cteTphdXRvfS5kZy5tYWluLnRhbGxlci10aGFuLXdpbmRvdyAuY2xvc2UtYnV0dG9ue29wYWNpdHk6MTttYXJnaW4tdG9wOi0xcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgIzJjMmMyY30uZGcubWFpbiB1bC5jbG9zZWQgLmNsb3NlLWJ1dHRvbntvcGFjaXR5OjEgIWltcG9ydGFudH0uZGcubWFpbjpob3ZlciAuY2xvc2UtYnV0dG9uLC5kZy5tYWluIC5jbG9zZS1idXR0b24uZHJhZ3tvcGFjaXR5OjF9LmRnLm1haW4gLmNsb3NlLWJ1dHRvbnstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7Ym9yZGVyOjA7bGluZS1oZWlnaHQ6MTlweDtoZWlnaHQ6MjBweDtjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9LmRnLm1haW4gLmNsb3NlLWJ1dHRvbi5jbG9zZS10b3B7cG9zaXRpb246cmVsYXRpdmV9LmRnLm1haW4gLmNsb3NlLWJ1dHRvbi5jbG9zZS1ib3R0b217cG9zaXRpb246YWJzb2x1dGV9LmRnLm1haW4gLmNsb3NlLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxMTF9LmRnLmF7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXJpZ2h0OjE1cHg7b3ZlcmZsb3cteTp2aXNpYmxlfS5kZy5hLmhhcy1zYXZlPnVsLmNsb3NlLXRvcHttYXJnaW4tdG9wOjB9LmRnLmEuaGFzLXNhdmU+dWwuY2xvc2UtYm90dG9te21hcmdpbi10b3A6MjdweH0uZGcuYS5oYXMtc2F2ZT51bC5jbG9zZWR7bWFyZ2luLXRvcDowfS5kZy5hIC5zYXZlLXJvd3t0b3A6MDt6LWluZGV4OjEwMDJ9LmRnLmEgLnNhdmUtcm93LmNsb3NlLXRvcHtwb3NpdGlvbjpyZWxhdGl2ZX0uZGcuYSAuc2F2ZS1yb3cuY2xvc2UtYm90dG9te3Bvc2l0aW9uOmZpeGVkfS5kZyBsaXstd2Via2l0LXRyYW5zaXRpb246aGVpZ2h0IC4xcyBlYXNlLW91dDstby10cmFuc2l0aW9uOmhlaWdodCAuMXMgZWFzZS1vdXQ7LW1vei10cmFuc2l0aW9uOmhlaWdodCAuMXMgZWFzZS1vdXQ7dHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0Oy13ZWJraXQtdHJhbnNpdGlvbjpvdmVyZmxvdyAuMXMgbGluZWFyOy1vLXRyYW5zaXRpb246b3ZlcmZsb3cgLjFzIGxpbmVhcjstbW96LXRyYW5zaXRpb246b3ZlcmZsb3cgLjFzIGxpbmVhcjt0cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXJ9LmRnIGxpOm5vdCguZm9sZGVyKXtjdXJzb3I6YXV0bztoZWlnaHQ6MjdweDtsaW5lLWhlaWdodDoyN3B4O3BhZGRpbmc6MCA0cHggMCA1cHh9LmRnIGxpLmZvbGRlcntwYWRkaW5nOjA7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkIHJnYmEoMCwwLDAsMCl9LmRnIGxpLnRpdGxle2N1cnNvcjpwb2ludGVyO21hcmdpbi1sZWZ0Oi00cHh9LmRnIC5jbG9zZWQgbGk6bm90KC50aXRsZSksLmRnIC5jbG9zZWQgdWwgbGksLmRnIC5jbG9zZWQgdWwgbGk+KntoZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyOjB9LmRnIC5jcntjbGVhcjpib3RoO3BhZGRpbmctbGVmdDozcHg7aGVpZ2h0OjI3cHg7b3ZlcmZsb3c6aGlkZGVufS5kZyAucHJvcGVydHktbmFtZXtjdXJzb3I6ZGVmYXVsdDtmbG9hdDpsZWZ0O2NsZWFyOmxlZnQ7d2lkdGg6NDAlO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5kZyAuY3IuZnVuY3Rpb24gLnByb3BlcnR5LW5hbWV7d2lkdGg6MTAwJX0uZGcgLmN7ZmxvYXQ6bGVmdDt3aWR0aDo2MCU7cG9zaXRpb246cmVsYXRpdmV9LmRnIC5jIGlucHV0W3R5cGU9dGV4dF17Ym9yZGVyOjA7bWFyZ2luLXRvcDo0cHg7cGFkZGluZzozcHg7d2lkdGg6MTAwJTtmbG9hdDpyaWdodH0uZGcgLmhhcy1zbGlkZXIgaW5wdXRbdHlwZT10ZXh0XXt3aWR0aDozMCU7bWFyZ2luLWxlZnQ6MH0uZGcgLnNsaWRlcntmbG9hdDpsZWZ0O3dpZHRoOjY2JTttYXJnaW4tbGVmdDotNXB4O21hcmdpbi1yaWdodDowO2hlaWdodDoxOXB4O21hcmdpbi10b3A6NHB4fS5kZyAuc2xpZGVyLWZne2hlaWdodDoxMDAlfS5kZyAuYyBpbnB1dFt0eXBlPWNoZWNrYm94XXttYXJnaW4tdG9wOjdweH0uZGcgLmMgc2VsZWN0e21hcmdpbi10b3A6NXB4fS5kZyAuY3IuZnVuY3Rpb24sLmRnIC5jci5mdW5jdGlvbiAucHJvcGVydHktbmFtZSwuZGcgLmNyLmZ1bmN0aW9uICosLmRnIC5jci5ib29sZWFuLC5kZyAuY3IuYm9vbGVhbiAqe2N1cnNvcjpwb2ludGVyfS5kZyAuY3IuY29sb3J7b3ZlcmZsb3c6dmlzaWJsZX0uZGcgLnNlbGVjdG9ye2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW4tbGVmdDotOXB4O21hcmdpbi10b3A6MjNweDt6LWluZGV4OjEwfS5kZyAuYzpob3ZlciAuc2VsZWN0b3IsLmRnIC5zZWxlY3Rvci5kcmFne2Rpc3BsYXk6YmxvY2t9LmRnIGxpLnNhdmUtcm93e3BhZGRpbmc6MH0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjBweCA2cHh9LmRnLmRpYWxvZ3Vle2JhY2tncm91bmQtY29sb3I6IzIyMjt3aWR0aDo0NjBweDtwYWRkaW5nOjE1cHg7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MTVweH0jZGctbmV3LWNvbnN0cnVjdG9ye3BhZGRpbmc6MTBweDtjb2xvcjojMjIyO2ZvbnQtZmFtaWx5Ok1vbmFjbywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB4O2JvcmRlcjowO3Jlc2l6ZTpub25lO2JveC1zaGFkb3c6aW5zZXQgMXB4IDFweCAxcHggIzg4ODt3b3JkLXdyYXA6YnJlYWstd29yZDttYXJnaW46MTJweCAwO2Rpc3BsYXk6YmxvY2s7d2lkdGg6NDQwcHg7b3ZlcmZsb3cteTpzY3JvbGw7aGVpZ2h0OjEwMHB4O3Bvc2l0aW9uOnJlbGF0aXZlfSNkZy1sb2NhbC1leHBsYWlue2Rpc3BsYXk6bm9uZTtmb250LXNpemU6MTFweDtsaW5lLWhlaWdodDoxN3B4O2JvcmRlci1yYWRpdXM6M3B4O2JhY2tncm91bmQtY29sb3I6IzMzMztwYWRkaW5nOjhweDttYXJnaW4tdG9wOjEwcHh9I2RnLWxvY2FsLWV4cGxhaW4gY29kZXtmb250LXNpemU6MTBweH0jZGF0LWd1aS1zYXZlLWxvY2FsbHl7ZGlzcGxheTpub25lfS5kZ3tjb2xvcjojZWVlO2ZvbnQ6MTFweCAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWY7dGV4dC1zaGFkb3c6MCAtMXB4IDAgIzExMX0uZGcubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6NXB4O2JhY2tncm91bmQ6IzFhMWExYX0uZGcubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVye2hlaWdodDowO2Rpc3BsYXk6bm9uZX0uZGcubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDojNjc2NzY3fS5kZyBsaTpub3QoLmZvbGRlcil7YmFja2dyb3VuZDojMWExYTFhO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMyYzJjMmN9LmRnIGxpLnNhdmUtcm93e2xpbmUtaGVpZ2h0OjI1cHg7YmFja2dyb3VuZDojZGFkNWNiO2JvcmRlcjowfS5kZyBsaS5zYXZlLXJvdyBzZWxlY3R7bWFyZ2luLWxlZnQ6NXB4O3dpZHRoOjEwOHB4fS5kZyBsaS5zYXZlLXJvdyAuYnV0dG9ue21hcmdpbi1sZWZ0OjVweDttYXJnaW4tdG9wOjFweDtib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6OXB4O2xpbmUtaGVpZ2h0OjdweDtwYWRkaW5nOjRweCA0cHggNXB4IDRweDtiYWNrZ3JvdW5kOiNjNWJkYWQ7Y29sb3I6I2ZmZjt0ZXh0LXNoYWRvdzowIDFweCAwICNiMGE1OGY7Ym94LXNoYWRvdzowIC0xcHggMCAjYjBhNThmO2N1cnNvcjpwb2ludGVyfS5kZyBsaS5zYXZlLXJvdyAuYnV0dG9uLmdlYXJze2JhY2tncm91bmQ6I2M1YmRhZCB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBc0FBQUFOQ0FZQUFBQi85WlE3QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFRSkpSRUZVZU5waVlLQVUvUC8vUHdHSUMvQXBDQUJpQlNBVytJOEFDbEFjZ0t4UTRUOWhvTUFFVXJ4eDJRU0dONitlZ0RYKy92V1Q0ZTdOODJBTVlvUEF4L2V2d1dvWW9TWWJBQ1gyczdLeEN4emNzZXpEaDNldkZvREVCWVRFRXF5Y2dnV0F6QTlBdVVTUVFnZVlQYTlmUHY2L1lXbS9BY3g1SVBiN3R5L2Z3K1FaYmx3Njd2RHM4UjBZSHlRaGdPYngreUFKa0JxbUc1ZFBQRGgxYVBPR1IvZXVnVzBHNHZsSW9USWZ5RmNBK1Fla2hoSEpoUGRReGJpQUlndU1CVFFaclBENzEwOE02cm9XWURGUWlJQUF2NkFvdy8xYkZ3WGdpcytmMkxVQXlud29JYU5jejhYTngzRGw3TUVKVURHUXB4OWd0UThZQ3VlQitEMjZPRUNBQVFEYWR0N2U0NkQ0MlFBQUFBQkpSVTVFcmtKZ2dnPT0pIDJweCAxcHggbm8tcmVwZWF0O2hlaWdodDo3cHg7d2lkdGg6OHB4fS5kZyBsaS5zYXZlLXJvdyAuYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2JhYjE5ZTtib3gtc2hhZG93OjAgLTFweCAwICNiMGE1OGZ9LmRnIGxpLmZvbGRlcntib3JkZXItYm90dG9tOjB9LmRnIGxpLnRpdGxle3BhZGRpbmctbGVmdDoxNnB4O2JhY2tncm91bmQ6IzAwMCB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQlFBRkFKRUFBUC8vLy9QejgvLy8vLy8vL3lINUJBRUFBQUlBTEFBQUFBQUZBQVVBQUFJSWxJK2hLZ0Z4b0NnQU93PT0pIDZweCAxMHB4IG5vLXJlcGVhdDtjdXJzb3I6cG9pbnRlcjtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMil9LmRnIC5jbG9zZWQgbGkudGl0bGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQlFBRkFKRUFBUC8vLy9QejgvLy8vLy8vL3lINUJBRUFBQUlBTEFBQUFBQUZBQVVBQUFJSWxHSVdxTUNiV0FFQU93PT0pfS5kZyAuY3IuYm9vbGVhbntib3JkZXItbGVmdDozcHggc29saWQgIzgwNjc4N30uZGcgLmNyLmNvbG9ye2JvcmRlci1sZWZ0OjNweCBzb2xpZH0uZGcgLmNyLmZ1bmN0aW9ue2JvcmRlci1sZWZ0OjNweCBzb2xpZCAjZTYxZDVmfS5kZyAuY3IubnVtYmVye2JvcmRlci1sZWZ0OjNweCBzb2xpZCAjMkZBMUQ2fS5kZyAuY3IubnVtYmVyIGlucHV0W3R5cGU9dGV4dF17Y29sb3I6IzJGQTFENn0uZGcgLmNyLnN0cmluZ3tib3JkZXItbGVmdDozcHggc29saWQgIzFlZDM2Zn0uZGcgLmNyLnN0cmluZyBpbnB1dFt0eXBlPXRleHRde2NvbG9yOiMxZWQzNmZ9LmRnIC5jci5mdW5jdGlvbjpob3ZlciwuZGcgLmNyLmJvb2xlYW46aG92ZXJ7YmFja2dyb3VuZDojMTExfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRde2JhY2tncm91bmQ6IzMwMzAzMDtvdXRsaW5lOm5vbmV9LmRnIC5jIGlucHV0W3R5cGU9dGV4dF06aG92ZXJ7YmFja2dyb3VuZDojM2MzYzNjfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRdOmZvY3Vze2JhY2tncm91bmQ6IzQ5NDk0OTtjb2xvcjojZmZmfS5kZyAuYyAuc2xpZGVye2JhY2tncm91bmQ6IzMwMzAzMDtjdXJzb3I6ZXctcmVzaXplfS5kZyAuYyAuc2xpZGVyLWZne2JhY2tncm91bmQ6IzJGQTFENjttYXgtd2lkdGg6MTAwJX0uZGcgLmMgLnNsaWRlcjpob3ZlcntiYWNrZ3JvdW5kOiMzYzNjM2N9LmRnIC5jIC5zbGlkZXI6aG92ZXIgLnNsaWRlci1mZ3tiYWNrZ3JvdW5kOiM0NGFiZGF9XFxuXCIpO1xuXG5jc3MuaW5qZWN0KHN0eWxlU2hlZXQpO1xudmFyIENTU19OQU1FU1BBQ0UgPSAnZGcnO1xudmFyIEhJREVfS0VZX0NPREUgPSA3MjtcbnZhciBDTE9TRV9CVVRUT05fSEVJR0hUID0gMjA7XG52YXIgREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FID0gJ0RlZmF1bHQnO1xudmFyIFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSgpO1xudmFyIFNBVkVfRElBTE9HVUUgPSB2b2lkIDA7XG52YXIgYXV0b1BsYWNlVmlyZ2luID0gdHJ1ZTtcbnZhciBhdXRvUGxhY2VDb250YWluZXIgPSB2b2lkIDA7XG52YXIgaGlkZSA9IGZhbHNlO1xudmFyIGhpZGVhYmxlR3VpcyA9IFtdO1xudmFyIEdVSSA9IGZ1bmN0aW9uIEdVSShwYXJzKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBwYXJzIHx8IHt9O1xuICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhpcy5fX3VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX191bCk7XG4gIGRvbS5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIENTU19OQU1FU1BBQ0UpO1xuICB0aGlzLl9fZm9sZGVycyA9IHt9O1xuICB0aGlzLl9fY29udHJvbGxlcnMgPSBbXTtcbiAgdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzID0gW107XG4gIHRoaXMuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnMgPSBbXTtcbiAgdGhpcy5fX2xpc3RlbmluZyA9IFtdO1xuICBwYXJhbXMgPSBDb21tb24uZGVmYXVsdHMocGFyYW1zLCB7XG4gICAgY2xvc2VPblRvcDogZmFsc2UsXG4gICAgYXV0b1BsYWNlOiB0cnVlLFxuICAgIHdpZHRoOiBHVUkuREVGQVVMVF9XSURUSFxuICB9KTtcbiAgcGFyYW1zID0gQ29tbW9uLmRlZmF1bHRzKHBhcmFtcywge1xuICAgIHJlc2l6YWJsZTogcGFyYW1zLmF1dG9QbGFjZSxcbiAgICBoaWRlYWJsZTogcGFyYW1zLmF1dG9QbGFjZVxuICB9KTtcbiAgaWYgKCFDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLmxvYWQpKSB7XG4gICAgaWYgKHBhcmFtcy5wcmVzZXQpIHtcbiAgICAgIHBhcmFtcy5sb2FkLnByZXNldCA9IHBhcmFtcy5wcmVzZXQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcmFtcy5sb2FkID0geyBwcmVzZXQ6IERFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRSB9O1xuICB9XG4gIGlmIChDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnBhcmVudCkgJiYgcGFyYW1zLmhpZGVhYmxlKSB7XG4gICAgaGlkZWFibGVHdWlzLnB1c2godGhpcyk7XG4gIH1cbiAgcGFyYW1zLnJlc2l6YWJsZSA9IENvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMucGFyZW50KSAmJiBwYXJhbXMucmVzaXphYmxlO1xuICBpZiAocGFyYW1zLmF1dG9QbGFjZSAmJiBDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnNjcm9sbGFibGUpKSB7XG4gICAgcGFyYW1zLnNjcm9sbGFibGUgPSB0cnVlO1xuICB9XG4gIHZhciB1c2VMb2NhbFN0b3JhZ2UgPSBTVVBQT1JUU19MT0NBTF9TVE9SQUdFICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2godGhpcywgJ2lzTG9jYWwnKSkgPT09ICd0cnVlJztcbiAgdmFyIHNhdmVUb0xvY2FsU3RvcmFnZSA9IHZvaWQgMDtcbiAgdmFyIHRpdGxlUm93ID0gdm9pZCAwO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLFxuICB7XG4gICAgcGFyZW50OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5wYXJlbnQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBzY3JvbGxhYmxlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5zY3JvbGxhYmxlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXV0b1BsYWNlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5hdXRvUGxhY2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9zZU9uVG9wOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5jbG9zZU9uVG9wO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJlc2V0OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgaWYgKF90aGlzLnBhcmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRSb290KCkucHJlc2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbXMubG9hZC5wcmVzZXQ7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgICBpZiAoX3RoaXMucGFyZW50KSB7XG4gICAgICAgICAgX3RoaXMuZ2V0Um9vdCgpLnByZXNldCA9IHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zLmxvYWQucHJlc2V0ID0gdjtcbiAgICAgICAgfVxuICAgICAgICBzZXRQcmVzZXRTZWxlY3RJbmRleCh0aGlzKTtcbiAgICAgICAgX3RoaXMucmV2ZXJ0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMud2lkdGg7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgICBwYXJhbXMud2lkdGggPSB2O1xuICAgICAgICBzZXRXaWR0aChfdGhpcywgdik7XG4gICAgICB9XG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5uYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgcGFyYW1zLm5hbWUgPSB2O1xuICAgICAgICBpZiAodGl0bGVSb3cpIHtcbiAgICAgICAgICB0aXRsZVJvdy5pbm5lckhUTUwgPSBwYXJhbXMubmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5jbG9zZWQ7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgICBwYXJhbXMuY2xvc2VkID0gdjtcbiAgICAgICAgaWYgKHBhcmFtcy5jbG9zZWQpIHtcbiAgICAgICAgICBkb20uYWRkQ2xhc3MoX3RoaXMuX191bCwgR1VJLkNMQVNTX0NMT1NFRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKF90aGlzLl9fdWwsIEdVSS5DTEFTU19DTE9TRUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgaWYgKF90aGlzLl9fY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICBfdGhpcy5fX2Nsb3NlQnV0dG9uLmlubmVySFRNTCA9IHYgPyBHVUkuVEVYVF9PUEVOIDogR1VJLlRFWFRfQ0xPU0VEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5sb2FkO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXNlTG9jYWxTdG9yYWdlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHVzZUxvY2FsU3RvcmFnZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShib29sKSB7XG4gICAgICAgIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFKSB7XG4gICAgICAgICAgdXNlTG9jYWxTdG9yYWdlID0gYm9vbDtcbiAgICAgICAgICBpZiAoYm9vbCkge1xuICAgICAgICAgICAgZG9tLmJpbmQod2luZG93LCAndW5sb2FkJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd1bmxvYWQnLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKF90aGlzLCAnaXNMb2NhbCcpLCBib29sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGlmIChDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnBhcmVudCkpIHtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuZG9tRWxlbWVudCwgR1VJLkNMQVNTX01BSU4pO1xuICAgIGRvbS5tYWtlU2VsZWN0YWJsZSh0aGlzLmRvbUVsZW1lbnQsIGZhbHNlKTtcbiAgICBpZiAoU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSkge1xuICAgICAgaWYgKHVzZUxvY2FsU3RvcmFnZSkge1xuICAgICAgICBfdGhpcy51c2VMb2NhbFN0b3JhZ2UgPSB0cnVlO1xuICAgICAgICB2YXIgc2F2ZWRHdWkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKHRoaXMsICdndWknKSk7XG4gICAgICAgIGlmIChzYXZlZEd1aSkge1xuICAgICAgICAgIHBhcmFtcy5sb2FkID0gSlNPTi5wYXJzZShzYXZlZEd1aSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX2Nsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5fX2Nsb3NlQnV0dG9uLmlubmVySFRNTCA9IEdVSS5URVhUX0NMT1NFRDtcbiAgICBkb20uYWRkQ2xhc3ModGhpcy5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfQ0xPU0VfQlVUVE9OKTtcbiAgICBpZiAocGFyYW1zLmNsb3NlT25Ub3ApIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19DTE9TRV9UT1ApO1xuICAgICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLl9fY2xvc2VCdXR0b24sIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0NMT1NFX0JPVFRPTSk7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fX2Nsb3NlQnV0dG9uKTtcbiAgICB9XG4gICAgZG9tLmJpbmQodGhpcy5fX2Nsb3NlQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jbG9zZWQgPSAhX3RoaXMuY2xvc2VkO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbXMuY2xvc2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jbG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgdGl0bGVSb3dOYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFyYW1zLm5hbWUpO1xuICAgIGRvbS5hZGRDbGFzcyh0aXRsZVJvd05hbWUsICdjb250cm9sbGVyLW5hbWUnKTtcbiAgICB0aXRsZVJvdyA9IGFkZFJvdyhfdGhpcywgdGl0bGVSb3dOYW1lKTtcbiAgICB2YXIgb25DbGlja1RpdGxlID0gZnVuY3Rpb24gb25DbGlja1RpdGxlKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLmNsb3NlZCA9ICFfdGhpcy5jbG9zZWQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBkb20uYWRkQ2xhc3ModGhpcy5fX3VsLCBHVUkuQ0xBU1NfQ0xPU0VEKTtcbiAgICBkb20uYWRkQ2xhc3ModGl0bGVSb3csICd0aXRsZScpO1xuICAgIGRvbS5iaW5kKHRpdGxlUm93LCAnY2xpY2snLCBvbkNsaWNrVGl0bGUpO1xuICAgIGlmICghcGFyYW1zLmNsb3NlZCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKHBhcmFtcy5hdXRvUGxhY2UpIHtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpKSB7XG4gICAgICBpZiAoYXV0b1BsYWNlVmlyZ2luKSB7XG4gICAgICAgIGF1dG9QbGFjZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb20uYWRkQ2xhc3MoYXV0b1BsYWNlQ29udGFpbmVyLCBDU1NfTkFNRVNQQUNFKTtcbiAgICAgICAgZG9tLmFkZENsYXNzKGF1dG9QbGFjZUNvbnRhaW5lciwgR1VJLkNMQVNTX0FVVE9fUExBQ0VfQ09OVEFJTkVSKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhdXRvUGxhY2VDb250YWluZXIpO1xuICAgICAgICBhdXRvUGxhY2VWaXJnaW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGF1dG9QbGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMuZG9tRWxlbWVudCwgR1VJLkNMQVNTX0FVVE9fUExBQ0UpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICBzZXRXaWR0aChfdGhpcywgcGFyYW1zLndpZHRoKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMub25SZXNpemVEZWJvdW5jZWQoKTtcbiAgfTtcbiAgZG9tLmJpbmQod2luZG93LCAncmVzaXplJywgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBkb20uYmluZCh0aGlzLl9fdWwsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBkb20uYmluZCh0aGlzLl9fdWwsICd0cmFuc2l0aW9uZW5kJywgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBkb20uYmluZCh0aGlzLl9fdWwsICdvVHJhbnNpdGlvbkVuZCcsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgdGhpcy5vblJlc2l6ZSgpO1xuICBpZiAocGFyYW1zLnJlc2l6YWJsZSkge1xuICAgIGFkZFJlc2l6ZUhhbmRsZSh0aGlzKTtcbiAgfVxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgaWYgKFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaChfdGhpcywgJ2lzTG9jYWwnKSkgPT09ICd0cnVlJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaChfdGhpcywgJ2d1aScpLCBKU09OLnN0cmluZ2lmeShfdGhpcy5nZXRTYXZlT2JqZWN0KCkpKTtcbiAgICB9XG4gIH07XG4gIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSA9IHNhdmVUb0xvY2FsU3RvcmFnZTtcbiAgZnVuY3Rpb24gcmVzZXRXaWR0aCgpIHtcbiAgICB2YXIgcm9vdCA9IF90aGlzLmdldFJvb3QoKTtcbiAgICByb290LndpZHRoICs9IDE7XG4gICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvb3Qud2lkdGggLT0gMTtcbiAgICB9KTtcbiAgfVxuICBpZiAoIXBhcmFtcy5wYXJlbnQpIHtcbiAgICByZXNldFdpZHRoKCk7XG4gIH1cbn07XG5HVUkudG9nZ2xlSGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgaGlkZSA9ICFoaWRlO1xuICBDb21tb24uZWFjaChoaWRlYWJsZUd1aXMsIGZ1bmN0aW9uIChndWkpIHtcbiAgICBndWkuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaGlkZSA/ICdub25lJyA6ICcnO1xuICB9KTtcbn07XG5HVUkuQ0xBU1NfQVVUT19QTEFDRSA9ICdhJztcbkdVSS5DTEFTU19BVVRPX1BMQUNFX0NPTlRBSU5FUiA9ICdhYyc7XG5HVUkuQ0xBU1NfTUFJTiA9ICdtYWluJztcbkdVSS5DTEFTU19DT05UUk9MTEVSX1JPVyA9ICdjcic7XG5HVUkuQ0xBU1NfVE9PX1RBTEwgPSAndGFsbGVyLXRoYW4td2luZG93JztcbkdVSS5DTEFTU19DTE9TRUQgPSAnY2xvc2VkJztcbkdVSS5DTEFTU19DTE9TRV9CVVRUT04gPSAnY2xvc2UtYnV0dG9uJztcbkdVSS5DTEFTU19DTE9TRV9UT1AgPSAnY2xvc2UtdG9wJztcbkdVSS5DTEFTU19DTE9TRV9CT1RUT00gPSAnY2xvc2UtYm90dG9tJztcbkdVSS5DTEFTU19EUkFHID0gJ2RyYWcnO1xuR1VJLkRFRkFVTFRfV0lEVEggPSAyNDU7XG5HVUkuVEVYVF9DTE9TRUQgPSAnQ2xvc2UgQ29udHJvbHMnO1xuR1VJLlRFWFRfT1BFTiA9ICdPcGVuIENvbnRyb2xzJztcbkdVSS5fa2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50eXBlICE9PSAndGV4dCcgJiYgKGUud2hpY2ggPT09IEhJREVfS0VZX0NPREUgfHwgZS5rZXlDb2RlID09PSBISURFX0tFWV9DT0RFKSkge1xuICAgIEdVSS50b2dnbGVIaWRlKCk7XG4gIH1cbn07XG5kb20uYmluZCh3aW5kb3csICdrZXlkb3duJywgR1VJLl9rZXlkb3duSGFuZGxlciwgZmFsc2UpO1xuQ29tbW9uLmV4dGVuZChHVUkucHJvdG90eXBlLFxue1xuICBhZGQ6IGZ1bmN0aW9uIGFkZChvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIF9hZGQodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwge1xuICAgICAgZmFjdG9yeUFyZ3M6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgICB9KTtcbiAgfSxcbiAgYWRkQ29sb3I6IGZ1bmN0aW9uIGFkZENvbG9yKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gX2FkZCh0aGlzLCBvYmplY3QsIHByb3BlcnR5LCB7XG4gICAgICBjb2xvcjogdHJ1ZVxuICAgIH0pO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShjb250cm9sbGVyKSB7XG4gICAgdGhpcy5fX3VsLnJlbW92ZUNoaWxkKGNvbnRyb2xsZXIuX19saSk7XG4gICAgdGhpcy5fX2NvbnRyb2xsZXJzLnNwbGljZSh0aGlzLl9fY29udHJvbGxlcnMuaW5kZXhPZihjb250cm9sbGVyKSwgMSk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMub25SZXNpemUoKTtcbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT25seSB0aGUgcm9vdCBHVUkgc2hvdWxkIGJlIHJlbW92ZWQgd2l0aCAuZGVzdHJveSgpLiAnICsgJ0ZvciBzdWJmb2xkZXJzLCB1c2UgZ3VpLnJlbW92ZUZvbGRlcihmb2xkZXIpIGluc3RlYWQuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9QbGFjZSkge1xuICAgICAgYXV0b1BsYWNlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChzdWJmb2xkZXIpIHtcbiAgICAgIF90aGlzLnJlbW92ZUZvbGRlcihzdWJmb2xkZXIpO1xuICAgIH0pO1xuICAgIGRvbS51bmJpbmQod2luZG93LCAna2V5ZG93bicsIEdVSS5fa2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICByZW1vdmVMaXN0ZW5lcnModGhpcyk7XG4gIH0sXG4gIGFkZEZvbGRlcjogZnVuY3Rpb24gYWRkRm9sZGVyKG5hbWUpIHtcbiAgICBpZiAodGhpcy5fX2ZvbGRlcnNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgYWxyZWFkeSBoYXZlIGEgZm9sZGVyIGluIHRoaXMgR1VJIGJ5IHRoZScgKyAnIG5hbWUgXCInICsgbmFtZSArICdcIicpO1xuICAgIH1cbiAgICB2YXIgbmV3R3VpUGFyYW1zID0geyBuYW1lOiBuYW1lLCBwYXJlbnQ6IHRoaXMgfTtcbiAgICBuZXdHdWlQYXJhbXMuYXV0b1BsYWNlID0gdGhpcy5hdXRvUGxhY2U7XG4gICAgaWYgKHRoaXMubG9hZCAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzICYmXG4gICAgdGhpcy5sb2FkLmZvbGRlcnNbbmFtZV0pIHtcbiAgICAgIG5ld0d1aVBhcmFtcy5jbG9zZWQgPSB0aGlzLmxvYWQuZm9sZGVyc1tuYW1lXS5jbG9zZWQ7XG4gICAgICBuZXdHdWlQYXJhbXMubG9hZCA9IHRoaXMubG9hZC5mb2xkZXJzW25hbWVdO1xuICAgIH1cbiAgICB2YXIgZ3VpID0gbmV3IEdVSShuZXdHdWlQYXJhbXMpO1xuICAgIHRoaXMuX19mb2xkZXJzW25hbWVdID0gZ3VpO1xuICAgIHZhciBsaSA9IGFkZFJvdyh0aGlzLCBndWkuZG9tRWxlbWVudCk7XG4gICAgZG9tLmFkZENsYXNzKGxpLCAnZm9sZGVyJyk7XG4gICAgcmV0dXJuIGd1aTtcbiAgfSxcbiAgcmVtb3ZlRm9sZGVyOiBmdW5jdGlvbiByZW1vdmVGb2xkZXIoZm9sZGVyKSB7XG4gICAgdGhpcy5fX3VsLnJlbW92ZUNoaWxkKGZvbGRlci5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIGRlbGV0ZSB0aGlzLl9fZm9sZGVyc1tmb2xkZXIubmFtZV07XG4gICAgaWYgKHRoaXMubG9hZCAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzICYmXG4gICAgdGhpcy5sb2FkLmZvbGRlcnNbZm9sZGVyLm5hbWVdKSB7XG4gICAgICBkZWxldGUgdGhpcy5sb2FkLmZvbGRlcnNbZm9sZGVyLm5hbWVdO1xuICAgIH1cbiAgICByZW1vdmVMaXN0ZW5lcnMoZm9sZGVyKTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5lYWNoKGZvbGRlci5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChzdWJmb2xkZXIpIHtcbiAgICAgIGZvbGRlci5yZW1vdmVGb2xkZXIoc3ViZm9sZGVyKTtcbiAgICB9KTtcbiAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMub25SZXNpemUoKTtcbiAgICB9KTtcbiAgfSxcbiAgb3BlbjogZnVuY3Rpb24gb3BlbigpIHtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICB9LFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICB9LFxuICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9LFxuICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIH0sXG4gIG9uUmVzaXplOiBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICB2YXIgcm9vdCA9IHRoaXMuZ2V0Um9vdCgpO1xuICAgIGlmIChyb290LnNjcm9sbGFibGUpIHtcbiAgICAgIHZhciB0b3AgPSBkb20uZ2V0T2Zmc2V0KHJvb3QuX191bCkudG9wO1xuICAgICAgdmFyIGggPSAwO1xuICAgICAgQ29tbW9uLmVhY2gocm9vdC5fX3VsLmNoaWxkTm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmICghKHJvb3QuYXV0b1BsYWNlICYmIG5vZGUgPT09IHJvb3QuX19zYXZlX3JvdykpIHtcbiAgICAgICAgICBoICs9IGRvbS5nZXRIZWlnaHQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCAtIHRvcCAtIENMT1NFX0JVVFRPTl9IRUlHSFQgPCBoKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhyb290LmRvbUVsZW1lbnQsIEdVSS5DTEFTU19UT09fVEFMTCk7XG4gICAgICAgIHJvb3QuX191bC5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0b3AgLSBDTE9TRV9CVVRUT05fSEVJR0hUICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhyb290LmRvbUVsZW1lbnQsIEdVSS5DTEFTU19UT09fVEFMTCk7XG4gICAgICAgIHJvb3QuX191bC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyb290Ll9fcmVzaXplX2hhbmRsZSkge1xuICAgICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5fX3Jlc2l6ZV9oYW5kbGUuc3R5bGUuaGVpZ2h0ID0gcm9vdC5fX3VsLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJvb3QuX19jbG9zZUJ1dHRvbikge1xuICAgICAgcm9vdC5fX2Nsb3NlQnV0dG9uLnN0eWxlLndpZHRoID0gcm9vdC53aWR0aCArICdweCc7XG4gICAgfVxuICB9LFxuICBvblJlc2l6ZURlYm91bmNlZDogQ29tbW9uLmRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gIH0sIDUwKSxcbiAgcmVtZW1iZXI6IGZ1bmN0aW9uIHJlbWVtYmVyKCkge1xuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQoU0FWRV9ESUFMT0dVRSkpIHtcbiAgICAgIFNBVkVfRElBTE9HVUUgPSBuZXcgQ2VudGVyZWREaXYoKTtcbiAgICAgIFNBVkVfRElBTE9HVUUuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBzYXZlRGlhbG9nQ29udGVudHM7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2FuIG9ubHkgY2FsbCByZW1lbWJlciBvbiBhIHRvcCBsZXZlbCBHVUkuJyk7XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgQ29tbW9uLmVhY2goQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKF90aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFkZFNhdmVNZW51KF90aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLmluZGV4T2Yob2JqZWN0KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMuX19yZW1lbWJlcmVkT2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuYXV0b1BsYWNlKSB7XG4gICAgICBzZXRXaWR0aCh0aGlzLCB0aGlzLndpZHRoKTtcbiAgICB9XG4gIH0sXG4gIGdldFJvb3Q6IGZ1bmN0aW9uIGdldFJvb3QoKSB7XG4gICAgdmFyIGd1aSA9IHRoaXM7XG4gICAgd2hpbGUgKGd1aS5wYXJlbnQpIHtcbiAgICAgIGd1aSA9IGd1aS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBndWk7XG4gIH0sXG4gIGdldFNhdmVPYmplY3Q6IGZ1bmN0aW9uIGdldFNhdmVPYmplY3QoKSB7XG4gICAgdmFyIHRvUmV0dXJuID0gdGhpcy5sb2FkO1xuICAgIHRvUmV0dXJuLmNsb3NlZCA9IHRoaXMuY2xvc2VkO1xuICAgIGlmICh0aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgdG9SZXR1cm4ucHJlc2V0ID0gdGhpcy5wcmVzZXQ7XG4gICAgICBpZiAoIXRvUmV0dXJuLnJlbWVtYmVyZWQpIHtcbiAgICAgICAgdG9SZXR1cm4ucmVtZW1iZXJlZCA9IHt9O1xuICAgICAgfVxuICAgICAgdG9SZXR1cm4ucmVtZW1iZXJlZFt0aGlzLnByZXNldF0gPSBnZXRDdXJyZW50UHJlc2V0KHRoaXMpO1xuICAgIH1cbiAgICB0b1JldHVybi5mb2xkZXJzID0ge307XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgIHRvUmV0dXJuLmZvbGRlcnNba2V5XSA9IGVsZW1lbnQuZ2V0U2F2ZU9iamVjdCgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0b1JldHVybjtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMubG9hZC5yZW1lbWJlcmVkKSB7XG4gICAgICB0aGlzLmxvYWQucmVtZW1iZXJlZCA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmxvYWQucmVtZW1iZXJlZFt0aGlzLnByZXNldF0gPSBnZXRDdXJyZW50UHJlc2V0KHRoaXMpO1xuICAgIG1hcmtQcmVzZXRNb2RpZmllZCh0aGlzLCBmYWxzZSk7XG4gICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2VJZlBvc3NpYmxlKCk7XG4gIH0sXG4gIHNhdmVBczogZnVuY3Rpb24gc2F2ZUFzKHByZXNldE5hbWUpIHtcbiAgICBpZiAoIXRoaXMubG9hZC5yZW1lbWJlcmVkKSB7XG4gICAgICB0aGlzLmxvYWQucmVtZW1iZXJlZCA9IHt9O1xuICAgICAgdGhpcy5sb2FkLnJlbWVtYmVyZWRbREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FXSA9IGdldEN1cnJlbnRQcmVzZXQodGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMubG9hZC5yZW1lbWJlcmVkW3ByZXNldE5hbWVdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzKTtcbiAgICB0aGlzLnByZXNldCA9IHByZXNldE5hbWU7XG4gICAgYWRkUHJlc2V0T3B0aW9uKHRoaXMsIHByZXNldE5hbWUsIHRydWUpO1xuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSgpO1xuICB9LFxuICByZXZlcnQ6IGZ1bmN0aW9uIHJldmVydChndWkpIHtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fY29udHJvbGxlcnMsIGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG4gICAgICBpZiAoIXRoaXMuZ2V0Um9vdCgpLmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgICBjb250cm9sbGVyLnNldFZhbHVlKGNvbnRyb2xsZXIuaW5pdGlhbFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY2FsbFNhdmVkVmFsdWUoZ3VpIHx8IHRoaXMuZ2V0Um9vdCgpLCBjb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb250cm9sbGVyLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgY29udHJvbGxlci5fX29uRmluaXNoQ2hhbmdlLmNhbGwoY29udHJvbGxlciwgY29udHJvbGxlci5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fZm9sZGVycywgZnVuY3Rpb24gKGZvbGRlcikge1xuICAgICAgZm9sZGVyLnJldmVydChmb2xkZXIpO1xuICAgIH0pO1xuICAgIGlmICghZ3VpKSB7XG4gICAgICBtYXJrUHJlc2V0TW9kaWZpZWQodGhpcy5nZXRSb290KCksIGZhbHNlKTtcbiAgICB9XG4gIH0sXG4gIGxpc3RlbjogZnVuY3Rpb24gbGlzdGVuKGNvbnRyb2xsZXIpIHtcbiAgICB2YXIgaW5pdCA9IHRoaXMuX19saXN0ZW5pbmcubGVuZ3RoID09PSAwO1xuICAgIHRoaXMuX19saXN0ZW5pbmcucHVzaChjb250cm9sbGVyKTtcbiAgICBpZiAoaW5pdCkge1xuICAgICAgdXBkYXRlRGlzcGxheXModGhpcy5fX2xpc3RlbmluZyk7XG4gICAgfVxuICB9LFxuICB1cGRhdGVEaXNwbGF5OiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19jb250cm9sbGVycywgZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoZm9sZGVyKSB7XG4gICAgICBmb2xkZXIudXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuICB9XG59KTtcbmZ1bmN0aW9uIGFkZFJvdyhndWksIG5ld0RvbSwgbGlCZWZvcmUpIHtcbiAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaWYgKG5ld0RvbSkge1xuICAgIGxpLmFwcGVuZENoaWxkKG5ld0RvbSk7XG4gIH1cbiAgaWYgKGxpQmVmb3JlKSB7XG4gICAgZ3VpLl9fdWwuaW5zZXJ0QmVmb3JlKGxpLCBsaUJlZm9yZSk7XG4gIH0gZWxzZSB7XG4gICAgZ3VpLl9fdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIGd1aS5vblJlc2l6ZSgpO1xuICByZXR1cm4gbGk7XG59XG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoZ3VpKSB7XG4gIGRvbS51bmJpbmQod2luZG93LCAncmVzaXplJywgZ3VpLl9fcmVzaXplSGFuZGxlcik7XG4gIGlmIChndWkuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSkge1xuICAgIGRvbS51bmJpbmQod2luZG93LCAndW5sb2FkJywgZ3VpLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUpO1xuICB9XG59XG5mdW5jdGlvbiBtYXJrUHJlc2V0TW9kaWZpZWQoZ3VpLCBtb2RpZmllZCkge1xuICB2YXIgb3B0ID0gZ3VpLl9fcHJlc2V0X3NlbGVjdFtndWkuX19wcmVzZXRfc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuICBpZiAobW9kaWZpZWQpIHtcbiAgICBvcHQuaW5uZXJIVE1MID0gb3B0LnZhbHVlICsgJyonO1xuICB9IGVsc2Uge1xuICAgIG9wdC5pbm5lckhUTUwgPSBvcHQudmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGF1Z21lbnRDb250cm9sbGVyKGd1aSwgbGksIGNvbnRyb2xsZXIpIHtcbiAgY29udHJvbGxlci5fX2xpID0gbGk7XG4gIGNvbnRyb2xsZXIuX19ndWkgPSBndWk7XG4gIENvbW1vbi5leHRlbmQoY29udHJvbGxlciwge1xuICAgIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMoX29wdGlvbnMpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBjb250cm9sbGVyLl9fbGkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb250cm9sbGVyLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gX2FkZChndWksIGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgYmVmb3JlOiBuZXh0U2libGluZyxcbiAgICAgICAgICBmYWN0b3J5QXJnczogW0NvbW1vbi50b0FycmF5KGFyZ3VtZW50cyldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKENvbW1vbi5pc0FycmF5KF9vcHRpb25zKSB8fCBDb21tb24uaXNPYmplY3QoX29wdGlvbnMpKSB7XG4gICAgICAgIHZhciBfbmV4dFNpYmxpbmcgPSBjb250cm9sbGVyLl9fbGkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb250cm9sbGVyLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gX2FkZChndWksIGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgYmVmb3JlOiBfbmV4dFNpYmxpbmcsXG4gICAgICAgICAgZmFjdG9yeUFyZ3M6IFtfb3B0aW9uc11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBuYW1lOiBmdW5jdGlvbiBuYW1lKF9uYW1lKSB7XG4gICAgICBjb250cm9sbGVyLl9fbGkuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gX25hbWU7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9LFxuICAgIGxpc3RlbjogZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgICAgY29udHJvbGxlci5fX2d1aS5saXN0ZW4oY29udHJvbGxlcik7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgY29udHJvbGxlci5fX2d1aS5yZW1vdmUoY29udHJvbGxlcik7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9XG4gIH0pO1xuICBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIE51bWJlckNvbnRyb2xsZXJTbGlkZXIpIHtcbiAgICB2YXIgYm94ID0gbmV3IE51bWJlckNvbnRyb2xsZXJCb3goY29udHJvbGxlci5vYmplY3QsIGNvbnRyb2xsZXIucHJvcGVydHksIHsgbWluOiBjb250cm9sbGVyLl9fbWluLCBtYXg6IGNvbnRyb2xsZXIuX19tYXgsIHN0ZXA6IGNvbnRyb2xsZXIuX19zdGVwIH0pO1xuICAgIENvbW1vbi5lYWNoKFsndXBkYXRlRGlzcGxheScsICdvbkNoYW5nZScsICdvbkZpbmlzaENoYW5nZScsICdzdGVwJywgJ21pbicsICdtYXgnXSwgZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgdmFyIHBjID0gY29udHJvbGxlclttZXRob2RdO1xuICAgICAgdmFyIHBiID0gYm94W21ldGhvZF07XG4gICAgICBjb250cm9sbGVyW21ldGhvZF0gPSBib3hbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICBwYi5hcHBseShib3gsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gcGMuYXBwbHkoY29udHJvbGxlciwgYXJncyk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgJ2hhcy1zbGlkZXInKTtcbiAgICBjb250cm9sbGVyLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGJveC5kb21FbGVtZW50LCBjb250cm9sbGVyLmRvbUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBOdW1iZXJDb250cm9sbGVyQm94KSB7XG4gICAgdmFyIHIgPSBmdW5jdGlvbiByKHJldHVybmVkKSB7XG4gICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKGNvbnRyb2xsZXIuX19taW4pICYmIENvbW1vbi5pc051bWJlcihjb250cm9sbGVyLl9fbWF4KSkge1xuICAgICAgICB2YXIgb2xkTmFtZSA9IGNvbnRyb2xsZXIuX19saS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XG4gICAgICAgIHZhciB3YXNMaXN0ZW5pbmcgPSBjb250cm9sbGVyLl9fZ3VpLl9fbGlzdGVuaW5nLmluZGV4T2YoY29udHJvbGxlcikgPiAtMTtcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmUoKTtcbiAgICAgICAgdmFyIG5ld0NvbnRyb2xsZXIgPSBfYWRkKGd1aSwgY29udHJvbGxlci5vYmplY3QsIGNvbnRyb2xsZXIucHJvcGVydHksIHtcbiAgICAgICAgICBiZWZvcmU6IGNvbnRyb2xsZXIuX19saS5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICAgICAgZmFjdG9yeUFyZ3M6IFtjb250cm9sbGVyLl9fbWluLCBjb250cm9sbGVyLl9fbWF4LCBjb250cm9sbGVyLl9fc3RlcF1cbiAgICAgICAgfSk7XG4gICAgICAgIG5ld0NvbnRyb2xsZXIubmFtZShvbGROYW1lKTtcbiAgICAgICAgaWYgKHdhc0xpc3RlbmluZykgbmV3Q29udHJvbGxlci5saXN0ZW4oKTtcbiAgICAgICAgcmV0dXJuIG5ld0NvbnRyb2xsZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuZWQ7XG4gICAgfTtcbiAgICBjb250cm9sbGVyLm1pbiA9IENvbW1vbi5jb21wb3NlKHIsIGNvbnRyb2xsZXIubWluKTtcbiAgICBjb250cm9sbGVyLm1heCA9IENvbW1vbi5jb21wb3NlKHIsIGNvbnRyb2xsZXIubWF4KTtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgQm9vbGVhbkNvbnRyb2xsZXIpIHtcbiAgICBkb20uYmluZChsaSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmZha2VFdmVudChjb250cm9sbGVyLl9fY2hlY2tib3gsICdjbGljaycpO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKGNvbnRyb2xsZXIuX19jaGVja2JveCwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uQ29udHJvbGxlcikge1xuICAgIGRvbS5iaW5kKGxpLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20uZmFrZUV2ZW50KGNvbnRyb2xsZXIuX19idXR0b24sICdjbGljaycpO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKGxpLCAnbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmFkZENsYXNzKGNvbnRyb2xsZXIuX19idXR0b24sICdob3ZlcicpO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKGxpLCAnbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20ucmVtb3ZlQ2xhc3MoY29udHJvbGxlci5fX2J1dHRvbiwgJ2hvdmVyJyk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIENvbG9yQ29udHJvbGxlcikge1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgJ2NvbG9yJyk7XG4gICAgY29udHJvbGxlci51cGRhdGVEaXNwbGF5ID0gQ29tbW9uLmNvbXBvc2UoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgbGkuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29udHJvbGxlci5fX2NvbG9yLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSk7XG4gICAgY29udHJvbGxlci51cGRhdGVEaXNwbGF5KCk7XG4gIH1cbiAgY29udHJvbGxlci5zZXRWYWx1ZSA9IENvbW1vbi5jb21wb3NlKGZ1bmN0aW9uICh2YWwpIHtcbiAgICBpZiAoZ3VpLmdldFJvb3QoKS5fX3ByZXNldF9zZWxlY3QgJiYgY29udHJvbGxlci5pc01vZGlmaWVkKCkpIHtcbiAgICAgIG1hcmtQcmVzZXRNb2RpZmllZChndWkuZ2V0Um9vdCgpLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfSwgY29udHJvbGxlci5zZXRWYWx1ZSk7XG59XG5mdW5jdGlvbiByZWNhbGxTYXZlZFZhbHVlKGd1aSwgY29udHJvbGxlcikge1xuICB2YXIgcm9vdCA9IGd1aS5nZXRSb290KCk7XG4gIHZhciBtYXRjaGVkSW5kZXggPSByb290Ll9fcmVtZW1iZXJlZE9iamVjdHMuaW5kZXhPZihjb250cm9sbGVyLm9iamVjdCk7XG4gIGlmIChtYXRjaGVkSW5kZXggIT09IC0xKSB7XG4gICAgdmFyIGNvbnRyb2xsZXJNYXAgPSByb290Ll9fcmVtZW1iZXJlZE9iamVjdEluZGVjZXNUb0NvbnRyb2xsZXJzW21hdGNoZWRJbmRleF07XG4gICAgaWYgKGNvbnRyb2xsZXJNYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udHJvbGxlck1hcCA9IHt9O1xuICAgICAgcm9vdC5fX3JlbWVtYmVyZWRPYmplY3RJbmRlY2VzVG9Db250cm9sbGVyc1ttYXRjaGVkSW5kZXhdID0gY29udHJvbGxlck1hcDtcbiAgICB9XG4gICAgY29udHJvbGxlck1hcFtjb250cm9sbGVyLnByb3BlcnR5XSA9IGNvbnRyb2xsZXI7XG4gICAgaWYgKHJvb3QubG9hZCAmJiByb290LmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgdmFyIHByZXNldE1hcCA9IHJvb3QubG9hZC5yZW1lbWJlcmVkO1xuICAgICAgdmFyIHByZXNldCA9IHZvaWQgMDtcbiAgICAgIGlmIChwcmVzZXRNYXBbZ3VpLnByZXNldF0pIHtcbiAgICAgICAgcHJlc2V0ID0gcHJlc2V0TWFwW2d1aS5wcmVzZXRdO1xuICAgICAgfSBlbHNlIGlmIChwcmVzZXRNYXBbREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FXSkge1xuICAgICAgICBwcmVzZXQgPSBwcmVzZXRNYXBbREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwcmVzZXRbbWF0Y2hlZEluZGV4XSAmJiBwcmVzZXRbbWF0Y2hlZEluZGV4XVtjb250cm9sbGVyLnByb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHByZXNldFttYXRjaGVkSW5kZXhdW2NvbnRyb2xsZXIucHJvcGVydHldO1xuICAgICAgICBjb250cm9sbGVyLmluaXRpYWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBjb250cm9sbGVyLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIF9hZGQoZ3VpLCBvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgaWYgKG9iamVjdFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IFwiJyArIG9iamVjdCArICdcIiBoYXMgbm8gcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCInKTtcbiAgfVxuICB2YXIgY29udHJvbGxlciA9IHZvaWQgMDtcbiAgaWYgKHBhcmFtcy5jb2xvcikge1xuICAgIGNvbnRyb2xsZXIgPSBuZXcgQ29sb3JDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmYWN0b3J5QXJncyA9IFtvYmplY3QsIHByb3BlcnR5XS5jb25jYXQocGFyYW1zLmZhY3RvcnlBcmdzKTtcbiAgICBjb250cm9sbGVyID0gQ29udHJvbGxlckZhY3RvcnkuYXBwbHkoZ3VpLCBmYWN0b3J5QXJncyk7XG4gIH1cbiAgaWYgKHBhcmFtcy5iZWZvcmUgaW5zdGFuY2VvZiBDb250cm9sbGVyKSB7XG4gICAgcGFyYW1zLmJlZm9yZSA9IHBhcmFtcy5iZWZvcmUuX19saTtcbiAgfVxuICByZWNhbGxTYXZlZFZhbHVlKGd1aSwgY29udHJvbGxlcik7XG4gIGRvbS5hZGRDbGFzcyhjb250cm9sbGVyLmRvbUVsZW1lbnQsICdjJyk7XG4gIHZhciBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkb20uYWRkQ2xhc3MobmFtZSwgJ3Byb3BlcnR5LW5hbWUnKTtcbiAgbmFtZS5pbm5lckhUTUwgPSBjb250cm9sbGVyLnByb3BlcnR5O1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRyb2xsZXIuZG9tRWxlbWVudCk7XG4gIHZhciBsaSA9IGFkZFJvdyhndWksIGNvbnRhaW5lciwgcGFyYW1zLmJlZm9yZSk7XG4gIGRvbS5hZGRDbGFzcyhsaSwgR1VJLkNMQVNTX0NPTlRST0xMRVJfUk9XKTtcbiAgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBDb2xvckNvbnRyb2xsZXIpIHtcbiAgICBkb20uYWRkQ2xhc3MobGksICdjb2xvcicpO1xuICB9IGVsc2Uge1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgX3R5cGVvZihjb250cm9sbGVyLmdldFZhbHVlKCkpKTtcbiAgfVxuICBhdWdtZW50Q29udHJvbGxlcihndWksIGxpLCBjb250cm9sbGVyKTtcbiAgZ3VpLl9fY29udHJvbGxlcnMucHVzaChjb250cm9sbGVyKTtcbiAgcmV0dXJuIGNvbnRyb2xsZXI7XG59XG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VIYXNoKGd1aSwga2V5KSB7XG4gIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmICsgJy4nICsga2V5O1xufVxuZnVuY3Rpb24gYWRkUHJlc2V0T3B0aW9uKGd1aSwgbmFtZSwgc2V0U2VsZWN0ZWQpIHtcbiAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHQuaW5uZXJIVE1MID0gbmFtZTtcbiAgb3B0LnZhbHVlID0gbmFtZTtcbiAgZ3VpLl9fcHJlc2V0X3NlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xuICBpZiAoc2V0U2VsZWN0ZWQpIHtcbiAgICBndWkuX19wcmVzZXRfc2VsZWN0LnNlbGVjdGVkSW5kZXggPSBndWkuX19wcmVzZXRfc2VsZWN0Lmxlbmd0aCAtIDE7XG4gIH1cbn1cbmZ1bmN0aW9uIHNob3dIaWRlRXhwbGFpbihndWksIGV4cGxhaW4pIHtcbiAgZXhwbGFpbi5zdHlsZS5kaXNwbGF5ID0gZ3VpLnVzZUxvY2FsU3RvcmFnZSA/ICdibG9jaycgOiAnbm9uZSc7XG59XG5mdW5jdGlvbiBhZGRTYXZlTWVudShndWkpIHtcbiAgdmFyIGRpdiA9IGd1aS5fX3NhdmVfcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgZG9tLmFkZENsYXNzKGd1aS5kb21FbGVtZW50LCAnaGFzLXNhdmUnKTtcbiAgZ3VpLl9fdWwuaW5zZXJ0QmVmb3JlKGRpdiwgZ3VpLl9fdWwuZmlyc3RDaGlsZCk7XG4gIGRvbS5hZGRDbGFzcyhkaXYsICdzYXZlLXJvdycpO1xuICB2YXIgZ2VhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGdlYXJzLmlubmVySFRNTCA9ICcmbmJzcDsnO1xuICBkb20uYWRkQ2xhc3MoZ2VhcnMsICdidXR0b24gZ2VhcnMnKTtcbiAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdTYXZlJztcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbiwgJ2J1dHRvbicpO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uLCAnc2F2ZScpO1xuICB2YXIgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYnV0dG9uMi5pbm5lckhUTUwgPSAnTmV3JztcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjIsICdidXR0b24nKTtcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjIsICdzYXZlLWFzJyk7XG4gIHZhciBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBidXR0b24zLmlubmVySFRNTCA9ICdSZXZlcnQnO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uMywgJ2J1dHRvbicpO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uMywgJ3JldmVydCcpO1xuICB2YXIgc2VsZWN0ID0gZ3VpLl9fcHJlc2V0X3NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBpZiAoZ3VpLmxvYWQgJiYgZ3VpLmxvYWQucmVtZW1iZXJlZCkge1xuICAgIENvbW1vbi5lYWNoKGd1aS5sb2FkLnJlbWVtYmVyZWQsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBhZGRQcmVzZXRPcHRpb24oZ3VpLCBrZXksIGtleSA9PT0gZ3VpLnByZXNldCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkUHJlc2V0T3B0aW9uKGd1aSwgREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FLCBmYWxzZSk7XG4gIH1cbiAgZG9tLmJpbmQoc2VsZWN0LCAnY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBndWkuX19wcmVzZXRfc2VsZWN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgZ3VpLl9fcHJlc2V0X3NlbGVjdFtpbmRleF0uaW5uZXJIVE1MID0gZ3VpLl9fcHJlc2V0X3NlbGVjdFtpbmRleF0udmFsdWU7XG4gICAgfVxuICAgIGd1aS5wcmVzZXQgPSB0aGlzLnZhbHVlO1xuICB9KTtcbiAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gIGRpdi5hcHBlbmRDaGlsZChnZWFycyk7XG4gIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XG4gIGRpdi5hcHBlbmRDaGlsZChidXR0b24zKTtcbiAgaWYgKFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UpIHtcbiAgICB2YXIgZXhwbGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1sb2NhbC1leHBsYWluJyk7XG4gICAgdmFyIGxvY2FsU3RvcmFnZUNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RnLWxvY2FsLXN0b3JhZ2UnKTtcbiAgICB2YXIgc2F2ZUxvY2FsbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGctc2F2ZS1sb2NhbGx5Jyk7XG4gICAgc2F2ZUxvY2FsbHkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goZ3VpLCAnaXNMb2NhbCcpKSA9PT0gJ3RydWUnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH1cbiAgICBzaG93SGlkZUV4cGxhaW4oZ3VpLCBleHBsYWluKTtcbiAgICBkb20uYmluZChsb2NhbFN0b3JhZ2VDaGVja0JveCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGd1aS51c2VMb2NhbFN0b3JhZ2UgPSAhZ3VpLnVzZUxvY2FsU3RvcmFnZTtcbiAgICAgIHNob3dIaWRlRXhwbGFpbihndWksIGV4cGxhaW4pO1xuICAgIH0pO1xuICB9XG4gIHZhciBuZXdDb25zdHJ1Y3RvclRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RnLW5ldy1jb25zdHJ1Y3RvcicpO1xuICBkb20uYmluZChuZXdDb25zdHJ1Y3RvclRleHRBcmVhLCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUubWV0YUtleSAmJiAoZS53aGljaCA9PT0gNjcgfHwgZS5rZXlDb2RlID09PSA2NykpIHtcbiAgICAgIFNBVkVfRElBTE9HVUUuaGlkZSgpO1xuICAgIH1cbiAgfSk7XG4gIGRvbS5iaW5kKGdlYXJzLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbmV3Q29uc3RydWN0b3JUZXh0QXJlYS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShndWkuZ2V0U2F2ZU9iamVjdCgpLCB1bmRlZmluZWQsIDIpO1xuICAgIFNBVkVfRElBTE9HVUUuc2hvdygpO1xuICAgIG5ld0NvbnN0cnVjdG9yVGV4dEFyZWEuZm9jdXMoKTtcbiAgICBuZXdDb25zdHJ1Y3RvclRleHRBcmVhLnNlbGVjdCgpO1xuICB9KTtcbiAgZG9tLmJpbmQoYnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZ3VpLnNhdmUoKTtcbiAgfSk7XG4gIGRvbS5iaW5kKGJ1dHRvbjIsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJlc2V0TmFtZSA9IHByb21wdCgnRW50ZXIgYSBuZXcgcHJlc2V0IG5hbWUuJyk7XG4gICAgaWYgKHByZXNldE5hbWUpIHtcbiAgICAgIGd1aS5zYXZlQXMocHJlc2V0TmFtZSk7XG4gICAgfVxuICB9KTtcbiAgZG9tLmJpbmQoYnV0dG9uMywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGd1aS5yZXZlcnQoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRSZXNpemVIYW5kbGUoZ3VpKSB7XG4gIHZhciBwbW91c2VYID0gdm9pZCAwO1xuICBndWkuX19yZXNpemVfaGFuZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIENvbW1vbi5leHRlbmQoZ3VpLl9fcmVzaXplX2hhbmRsZS5zdHlsZSwge1xuICAgIHdpZHRoOiAnNnB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnLTNweCcsXG4gICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgIGN1cnNvcjogJ2V3LXJlc2l6ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgfSk7XG4gIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBndWkud2lkdGggKz0gcG1vdXNlWCAtIGUuY2xpZW50WDtcbiAgICBndWkub25SZXNpemUoKTtcbiAgICBwbW91c2VYID0gZS5jbGllbnRYO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBkcmFnU3RvcCgpIHtcbiAgICBkb20ucmVtb3ZlQ2xhc3MoZ3VpLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19EUkFHKTtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIGRyYWdTdG9wKTtcbiAgfVxuICBmdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwbW91c2VYID0gZS5jbGllbnRYO1xuICAgIGRvbS5hZGRDbGFzcyhndWkuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0RSQUcpO1xuICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBkcmFnU3RvcCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGRvbS5iaW5kKGd1aS5fX3Jlc2l6ZV9oYW5kbGUsICdtb3VzZWRvd24nLCBkcmFnU3RhcnQpO1xuICBkb20uYmluZChndWkuX19jbG9zZUJ1dHRvbiwgJ21vdXNlZG93bicsIGRyYWdTdGFydCk7XG4gIGd1aS5kb21FbGVtZW50Lmluc2VydEJlZm9yZShndWkuX19yZXNpemVfaGFuZGxlLCBndWkuZG9tRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG59XG5mdW5jdGlvbiBzZXRXaWR0aChndWksIHcpIHtcbiAgZ3VpLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgaWYgKGd1aS5fX3NhdmVfcm93ICYmIGd1aS5hdXRvUGxhY2UpIHtcbiAgICBndWkuX19zYXZlX3Jvdy5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuICB9XG4gIGlmIChndWkuX19jbG9zZUJ1dHRvbikge1xuICAgIGd1aS5fX2Nsb3NlQnV0dG9uLnN0eWxlLndpZHRoID0gdyArICdweCc7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcmVzZXQoZ3VpLCB1c2VJbml0aWFsVmFsdWVzKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBDb21tb24uZWFjaChndWkuX19yZW1lbWJlcmVkT2JqZWN0cywgZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICB2YXIgc2F2ZWRWYWx1ZXMgPSB7fTtcbiAgICB2YXIgY29udHJvbGxlck1hcCA9IGd1aS5fX3JlbWVtYmVyZWRPYmplY3RJbmRlY2VzVG9Db250cm9sbGVyc1tpbmRleF07XG4gICAgQ29tbW9uLmVhY2goY29udHJvbGxlck1hcCwgZnVuY3Rpb24gKGNvbnRyb2xsZXIsIHByb3BlcnR5KSB7XG4gICAgICBzYXZlZFZhbHVlc1twcm9wZXJ0eV0gPSB1c2VJbml0aWFsVmFsdWVzID8gY29udHJvbGxlci5pbml0aWFsVmFsdWUgOiBjb250cm9sbGVyLmdldFZhbHVlKCk7XG4gICAgfSk7XG4gICAgdG9SZXR1cm5baW5kZXhdID0gc2F2ZWRWYWx1ZXM7XG4gIH0pO1xuICByZXR1cm4gdG9SZXR1cm47XG59XG5mdW5jdGlvbiBzZXRQcmVzZXRTZWxlY3RJbmRleChndWkpIHtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGd1aS5fX3ByZXNldF9zZWxlY3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgaWYgKGd1aS5fX3ByZXNldF9zZWxlY3RbaW5kZXhdLnZhbHVlID09PSBndWkucHJlc2V0KSB7XG4gICAgICBndWkuX19wcmVzZXRfc2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlzKGNvbnRyb2xsZXJBcnJheSkge1xuICBpZiAoY29udHJvbGxlckFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxLmNhbGwod2luZG93LCBmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVEaXNwbGF5cyhjb250cm9sbGVyQXJyYXkpO1xuICAgIH0pO1xuICB9XG4gIENvbW1vbi5lYWNoKGNvbnRyb2xsZXJBcnJheSwgZnVuY3Rpb24gKGMpIHtcbiAgICBjLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSk7XG59XG5cbnZhciBjb2xvciA9IHtcbiAgQ29sb3I6IENvbG9yLFxuICBtYXRoOiBDb2xvck1hdGgsXG4gIGludGVycHJldDogaW50ZXJwcmV0XG59O1xudmFyIGNvbnRyb2xsZXJzID0ge1xuICBDb250cm9sbGVyOiBDb250cm9sbGVyLFxuICBCb29sZWFuQ29udHJvbGxlcjogQm9vbGVhbkNvbnRyb2xsZXIsXG4gIE9wdGlvbkNvbnRyb2xsZXI6IE9wdGlvbkNvbnRyb2xsZXIsXG4gIFN0cmluZ0NvbnRyb2xsZXI6IFN0cmluZ0NvbnRyb2xsZXIsXG4gIE51bWJlckNvbnRyb2xsZXI6IE51bWJlckNvbnRyb2xsZXIsXG4gIE51bWJlckNvbnRyb2xsZXJCb3g6IE51bWJlckNvbnRyb2xsZXJCb3gsXG4gIE51bWJlckNvbnRyb2xsZXJTbGlkZXI6IE51bWJlckNvbnRyb2xsZXJTbGlkZXIsXG4gIEZ1bmN0aW9uQ29udHJvbGxlcjogRnVuY3Rpb25Db250cm9sbGVyLFxuICBDb2xvckNvbnRyb2xsZXI6IENvbG9yQ29udHJvbGxlclxufTtcbnZhciBkb20kMSA9IHsgZG9tOiBkb20gfTtcbnZhciBndWkgPSB7IEdVSTogR1VJIH07XG52YXIgR1VJJDEgPSBHVUk7XG52YXIgaW5kZXggPSB7XG4gIGNvbG9yOiBjb2xvcixcbiAgY29udHJvbGxlcnM6IGNvbnRyb2xsZXJzLFxuICBkb206IGRvbSQxLFxuICBndWk6IGd1aSxcbiAgR1VJOiBHVUkkMVxufTtcblxuZXhwb3J0IHsgY29sb3IsIGNvbnRyb2xsZXJzLCBkb20kMSBhcyBkb20sIGd1aSwgR1VJJDEgYXMgR1VJIH07XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdC5ndWkubW9kdWxlLmpzLm1hcFxuIiwiLy8gc3RhdHMuanMgLSBodHRwOi8vZ2l0aHViLmNvbS9tcmRvb2Ivc3RhdHMuanNcbihmdW5jdGlvbihmLGUpe1wib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOmYuU3RhdHM9ZSgpfSkodGhpcyxmdW5jdGlvbigpe3ZhciBmPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtjLmFwcGVuZENoaWxkKGEuZG9tKTtyZXR1cm4gYX1mdW5jdGlvbiB1KGEpe2Zvcih2YXIgZD0wO2Q8Yy5jaGlsZHJlbi5sZW5ndGg7ZCsrKWMuY2hpbGRyZW5bZF0uc3R5bGUuZGlzcGxheT1kPT09YT9cImJsb2NrXCI6XCJub25lXCI7bD1hfXZhciBsPTAsYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Muc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjAuOTt6LWluZGV4OjEwMDAwXCI7Yy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCk7XG51KCsrbCVjLmNoaWxkcmVuLmxlbmd0aCl9LCExKTt2YXIgaz0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpLGc9ayxhPTAscj1lKG5ldyBmLlBhbmVsKFwiRlBTXCIsXCIjMGZmXCIsXCIjMDAyXCIpKSxoPWUobmV3IGYuUGFuZWwoXCJNU1wiLFwiIzBmMFwiLFwiIzAyMFwiKSk7aWYoc2VsZi5wZXJmb3JtYW5jZSYmc2VsZi5wZXJmb3JtYW5jZS5tZW1vcnkpdmFyIHQ9ZShuZXcgZi5QYW5lbChcIk1CXCIsXCIjZjA4XCIsXCIjMjAxXCIpKTt1KDApO3JldHVybntSRVZJU0lPTjoxNixkb206YyxhZGRQYW5lbDplLHNob3dQYW5lbDp1LGJlZ2luOmZ1bmN0aW9uKCl7az0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpfSxlbmQ6ZnVuY3Rpb24oKXthKys7dmFyIGM9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKTtoLnVwZGF0ZShjLWssMjAwKTtpZihjPmcrMUUzJiYoci51cGRhdGUoMUUzKmEvKGMtZyksMTAwKSxnPWMsYT0wLHQpKXt2YXIgZD1wZXJmb3JtYW5jZS5tZW1vcnk7dC51cGRhdGUoZC51c2VkSlNIZWFwU2l6ZS9cbjEwNDg1NzYsZC5qc0hlYXBTaXplTGltaXQvMTA0ODU3Nil9cmV0dXJuIGN9LHVwZGF0ZTpmdW5jdGlvbigpe2s9dGhpcy5lbmQoKX0sZG9tRWxlbWVudDpjLHNldE1vZGU6dX19O2YuUGFuZWw9ZnVuY3Rpb24oZSxmLGwpe3ZhciBjPUluZmluaXR5LGs9MCxnPU1hdGgucm91bmQsYT1nKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSxyPTgwKmEsaD00OCphLHQ9MyphLHY9MiphLGQ9MyphLG09MTUqYSxuPTc0KmEscD0zMCphLHE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtxLndpZHRoPXI7cS5oZWlnaHQ9aDtxLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDo4MHB4O2hlaWdodDo0OHB4XCI7dmFyIGI9cS5nZXRDb250ZXh0KFwiMmRcIik7Yi5mb250PVwiYm9sZCBcIis5KmErXCJweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZlwiO2IudGV4dEJhc2VsaW5lPVwidG9wXCI7Yi5maWxsU3R5bGU9bDtiLmZpbGxSZWN0KDAsMCxyLGgpO2IuZmlsbFN0eWxlPWY7Yi5maWxsVGV4dChlLHQsdik7XG5iLmZpbGxSZWN0KGQsbSxuLHApO2IuZmlsbFN0eWxlPWw7Yi5nbG9iYWxBbHBoYT0uOTtiLmZpbGxSZWN0KGQsbSxuLHApO3JldHVybntkb206cSx1cGRhdGU6ZnVuY3Rpb24oaCx3KXtjPU1hdGgubWluKGMsaCk7az1NYXRoLm1heChrLGgpO2IuZmlsbFN0eWxlPWw7Yi5nbG9iYWxBbHBoYT0xO2IuZmlsbFJlY3QoMCwwLHIsbSk7Yi5maWxsU3R5bGU9ZjtiLmZpbGxUZXh0KGcoaCkrXCIgXCIrZStcIiAoXCIrZyhjKStcIi1cIitnKGspK1wiKVwiLHQsdik7Yi5kcmF3SW1hZ2UocSxkK2EsbSxuLWEscCxkLG0sbi1hLHApO2IuZmlsbFJlY3QoZCtuLWEsbSxhLHApO2IuZmlsbFN0eWxlPWw7Yi5nbG9iYWxBbHBoYT0uOTtiLmZpbGxSZWN0KGQrbi1hLG0sYSxnKCgxLWgvdykqcCkpfX19O3JldHVybiBmfSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy4xX3dlYnBhY2tANS43My4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy4xX3dlYnBhY2tANS43My4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDYuNy4xX3dlYnBhY2tANS43My4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANi43LjFfd2VicGFja0A1LjczLjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFN0YXRzIGZyb20gJ3N0YXRzLmpzJztcbmNvbnN0IE1PVkVfRVBTSUxPTiA9IDYwO1xuZXhwb3J0IHR5cGUgRGltZW5zaW9ucyA9IHtcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgaGVpZ2h0OiBudW1iZXJcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViR1BVUHJvamVjdCB7XG4gICAgZGV2aWNlOiBHUFVEZXZpY2VcbiAgICBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0XG4gICAgaW5pdGlhbGl6ZTogKCkgPT4gdm9pZFxuICAgIHJlbmRlcjogKGZyYW1lUmF0ZTogbnVtYmVyKSA9PiB2b2lkXG4gICAgb25DbGljazogKG1vdXNlWDogbnVtYmVyLCBtb3VzZVk6IG51bWJlcikgPT4gdm9pZFxuICAgIG9uRHJhZ0ZpbmlzaGVkOiAoZHg6IG51bWJlciwgZHk6IG51bWJlciwgbW91c2VYOiBudW1iZXIsIG1vdXNlWTogbnVtYmVyKSA9PiB2b2lkXG4gICAgb25EcmFnOiAobW91c2VYOiBudW1iZXIsIG1vdXNlWTogbnVtYmVyKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXZWJHUFVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0OiBXZWJHUFVQcm9qZWN0LCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZSA8IHZvaWQgPiB7XG5cbiAgICBsZXQgbGFzdEZyYW1lOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gICAgbGV0IG51bUZyYW1lcyA9IDA7XG4gICAgbGV0IHN1bURlbHRhID0gMDtcblxuXG4gICAgY3VycmVudFByb2plY3QuaW5pdGlhbGl6ZSgpO1xuXG4gICAgdmFyIHN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgc3RhdHMuc2hvd1BhbmVsKDApOyAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcblxuICAgIGxldCB1cGRhdGVGcmFtZSA9ICgpID0+IHtcbiAgICAgICAgc3RhdHMuYmVnaW4oKTtcbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBpZiAodHlwZW9mIGxhc3RGcmFtZSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgIHN1bURlbHRhICs9IDEwMDAuMCAvIChjdXJyZW50RnJhbWUgLSBsYXN0RnJhbWUpO1xuICAgICAgICBudW1GcmFtZXMgKz0gMTtcbiAgICAgICAgbGFzdEZyYW1lID0gY3VycmVudEZyYW1lO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5yZW5kZXIoc3VtRGVsdGEgLyBudW1GcmFtZXMpXG5cbiAgICAgICAgc3RhdHMuZW5kKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZSk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZSk7XG5cbiAgICBsZXQgbW91c2VYOiBudW1iZXIgPSAwLFxuICAgICAgICBtb3VzZVk6IG51bWJlciA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1vdXNlWCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICBtb3VzZVkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgfSlcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICBsZXQgbXggPSBldmVudC5wYWdlWDtcbiAgICAgICAgICAgIGxldCBteSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3Qub25EcmFnKG14LCBteSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZHggPSBNYXRoLmFicyhldmVudC5wYWdlWCAtIG1vdXNlWCk7XG4gICAgICAgIGNvbnN0IGR5ID0gTWF0aC5hYnMoZXZlbnQucGFnZVkgLSBtb3VzZVkpO1xuICAgICAgICBjb25zdCBpc0RyYWcgPSBkeCA+PSBNT1ZFX0VQU0lMT04gfHwgZHkgPj0gTU9WRV9FUFNJTE9OO1xuICAgICAgICBpZiAoIWlzRHJhZykge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3Qub25DbGljayhtb3VzZVgsIG1vdXNlWSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5vbkRyYWdGaW5pc2hlZChkeCwgZHksIG1vdXNlWCwgbW91c2VZKTtcbiAgICAgICAgfVxuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfSlcblxufSIsImltcG9ydCB7IFdlYkdQVVByb2plY3QsIERpbWVuc2lvbnMgfSBmcm9tICcuLi9jb3JlL2ZyYW1ld29yaydcbmltcG9ydCAqIGFzIGRhdCBmcm9tICdkYXQuZ3VpJztcblxuaW1wb3J0IHsgSW1hZ2VUb0J1ZmZlciB9IGZyb20gJy4uL2hlbHBlcnMvSW1hZ2VUb0J1ZmZlcic7XG5cbmltcG9ydCB7IEJ1ZmZlclJlbmRlcmVyIH0gZnJvbSAnLi4vaGVscGVycy9idWZmZXJSZW5kZXJlcic7XG5pbXBvcnQgeyBHcmlkQnVmZmVyIH0gZnJvbSAnLi4vaGVscGVycy9ncmlkQnVmZmVyJztcbmltcG9ydCB7IEdyaWRTaGFkZXIgfSBmcm9tICcuLi9oZWxwZXJzL2dyaWRTaGFkZXInO1xuXG5pbXBvcnQgZGlmZnVzZVdHU0wgZnJvbSAnLi9jb21wdXRlRGlmZnVzZS53Z3NsJztcbmltcG9ydCBwYWludFdHU0wgZnJvbSAnLi9jb21wdXRlUGFpbnQud2dzbCc7XG5pbXBvcnQgZHJhd1dHU0wgZnJvbSAnLi9kcmF3Lndnc2wnO1xuXG5mdW5jdGlvbiByZWFkRmlsZShmaWxlOkZpbGUpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpOyAgXG4gICAgICBmci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZnIucmVzdWx0IClcbiAgICAgIH07XG4gICAgICBmci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgZnIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9KTtcbiAgfVxuICBcbmV4cG9ydCBjbGFzcyBHcmlkRGlmZnVzaW9uVW5zdGFibGUgaW1wbGVtZW50cyBXZWJHUFVQcm9qZWN0IHtcbiAgICBkZXZpY2U6IEdQVURldmljZTtcbiAgICBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAgIHNjcmVlbkRpbWVuc2lvbjogRGltZW5zaW9uc1xuXG4gICAgcmVuZGVyRnJhbWVDb3VudDogbnVtYmVyID0gMDtcbiAgICBmcmFtZUNvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgU1BFRUQ6IG51bWJlciA9IDE7XG4gICAgbGFzdFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsYXN0TW91c2VYOiBudW1iZXIgPSAwO1xuICAgIGxhc3RNb3VzZVk6IG51bWJlciA9IDA7XG4gICAgc2ltUGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgZ3JpZEJ1ZmZlcjogR3JpZEJ1ZmZlcjtcbiAgICBpbWFnZVRvQnVmZmVySGVscGVyOiBJbWFnZVRvQnVmZmVyO1xuICAgIGJ1ZmZlclJlbmRlcmVyOiBCdWZmZXJSZW5kZXJlcjtcbiAgICBncmlkRGlmZnVzZVNoYWRlciA6IEdyaWRTaGFkZXI7XG4gICAgcGFpbnRTaGFkZXIgOiBHcmlkU2hhZGVyO1xuXG4gICAgQlVGRkVSX1NJWkVfWCA6IG51bWJlciA9IDI1NlxuICAgIEJVRkZFUl9TSVpFX1kgOiBudW1iZXIgPSAxNDRcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgc2NyZWVuRGltZW5zaW9uOiBEaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnNjcmVlbkRpbWVuc2lvbiA9IHNjcmVlbkRpbWVuc2lvbjtcbiAgICB9XG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgaGlkZGVuRmlsZUlucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaGlkZGVuRmlsZUlucHV0LnR5cGUgPSBcImZpbGVcIlxuICAgICAgICBoaWRkZW5GaWxlSW5wdXQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcblxuICAgICAgICBjb25zdCBndWkgPSBuZXcgZGF0LkdVSSh7IG5hbWU6ICdNeSBHVUknIH0pO1xuICAgICAgICB2YXIgZ3JpZFNldHRpbmdzID0gZ3VpLmFkZEZvbGRlcignR3JpZCBTZXR0aW5ncycpO1xuICAgICAgICB2YXIgIEltYWdlSW5wdXRDb250cm9sbGVyIDogYW55O1xuICAgICAgICB2YXIgdGhpc09iaiA6IEdyaWREaWZmdXNpb25VbnN0YWJsZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2ltUGFyYW1zID0ge1xuICAgICAgICAgICAgcmVzb2x1dGlvblNjYWxpbmc6JzI1NngxNDQnLFxuICAgICAgICAgICAgc3BlZWQ6IDEuMCxcbiAgICAgICAgICAgIC8vIGxvYWRJbWFnZTogYCR7XCJtb25rZS5wbmdcIn1gLFxuICAgICAgICAgICAgbG9hZEltYWdlSW5wdXQgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGhpZGRlbkZpbGVJbnB1dC5jbGljaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvcHlJbWFnZVRvQnVmZmVyIDogYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgaGlkZGVuRmlsZUlucHV0Py5maWxlc1swXSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZVVSTCA6IHN0cmluZyA9IGF3YWl0IHJlYWRGaWxlKGhpZGRlbkZpbGVJbnB1dD8uZmlsZXNbMF0pIGFzIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzT2JqLmltYWdlVG9CdWZmZXJIZWxwZXIuaW5pdGlhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNPYmouZGV2aWNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzT2JqLmdyaWRCdWZmZXIuYnVmZmVyc0FycmF5LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNPYmouZ3JpZEJ1ZmZlci5idWZmZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDp0aGlzT2JqLkJVRkZFUl9TSVpFX1ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6dGhpc09iai5CVUZGRVJfU0laRV9YXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc09iai5pbWFnZVRvQnVmZmVySGVscGVyLnBlcmZvcm1Db3B5KHRoaXNPYmouZnJhbWVDb3VudCUyKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzT2JqLmltYWdlVG9CdWZmZXJIZWxwZXIuaW5pdGlhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNPYmouZGV2aWNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBVUkwoJy4vbW9ua2UuanBnJyxpbXBvcnQubWV0YS51cmwpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzT2JqLmdyaWRCdWZmZXIuYnVmZmVyc0FycmF5LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNPYmouZ3JpZEJ1ZmZlci5idWZmZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDp0aGlzT2JqLkJVRkZFUl9TSVpFX1ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6dGhpc09iai5CVUZGRVJfU0laRV9YXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc09iai5pbWFnZVRvQnVmZmVySGVscGVyLnBlcmZvcm1Db3B5KHRoaXNPYmouZnJhbWVDb3VudCUyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc01hcHBpbmcgOlJlY29yZDxzdHJpbmcsIEFycmF5PG51bWJlcj4+ID0ge1xuICAgICAgICAgICAgJzMyeDI0JzpbMzIsIDI0XSxcbiAgICAgICAgICAgICc2NHg0MCc6WzY0LCA0MF0sXG4gICAgICAgICAgICAnMTI4eDcyJzpbMTI4LCA3Ml0sXG4gICAgICAgICAgICAnMjU2eDE0NCc6WzI1NiwgMTQ0XSxcbiAgICAgICAgICAgICc1MTJ4Mjg4JzpbNTEyLCAyODhdLFxuICAgICAgICAgICAgJzEwMjR4NTc2JzpbMTAyNCwgNTc2XSxcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXBkYXRlU2ltUmVzb2x1dGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZCBQYXJhbXNcIiwgdGhpcy5zaW1QYXJhbXMpXG4gICAgICAgICAgICB0aGlzLlNQRUVEID0gdGhpcy5zaW1QYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLkJVRkZFUl9TSVpFX1ggPSByZXNNYXBwaW5nW3RoaXMuc2ltUGFyYW1zLnJlc29sdXRpb25TY2FsaW5nXVswXTtcbiAgICAgICAgICAgIHRoaXMuQlVGRkVSX1NJWkVfWSA9IHJlc01hcHBpbmdbdGhpcy5zaW1QYXJhbXMucmVzb2x1dGlvblNjYWxpbmddWzFdO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZVJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cGRhdGVTaW1TcGVlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZCBQYXJhbXNcIiwgdGhpcy5zaW1QYXJhbXMpXG4gICAgICAgICAgICB0aGlzLlNQRUVEID0gdGhpcy5zaW1QYXJhbXMuc3BlZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBncmlkU2V0dGluZ3MuYWRkKHRoaXMuc2ltUGFyYW1zLCBcInJlc29sdXRpb25TY2FsaW5nXCIsIHtcbiAgICAgICAgICAgICczMngyNCc6JzMyeDI0JyxcbiAgICAgICAgICAgICc2NHg0MCc6JzY0eDQwJyxcbiAgICAgICAgICAgICcxMjh4NzInOicxMjh4NzInLFxuICAgICAgICAgICAgJzI1NngxNDQnOicyNTZ4MTQ0JyxcbiAgICAgICAgICAgICc1MTJ4Mjg4JzonNTEyeDI4OCcsXG4gICAgICAgICAgICAnMTAyNHg1NzYnOicxMDI0eDU3NicsXG4gICAgICAgIH0pLm9uRmluaXNoQ2hhbmdlKHVwZGF0ZVNpbVJlc29sdXRpb24pO1xuICAgICAgICBncmlkU2V0dGluZ3MuYWRkKHRoaXMuc2ltUGFyYW1zLCBcInNwZWVkXCIsIDAsIDUsIDAuMSkub25GaW5pc2hDaGFuZ2UodXBkYXRlU2ltU3BlZWQpO1xuICAgICAgICAvLyBncmlkU2V0dGluZ3MuYWRkKHRoaXMuc2ltUGFyYW1zLCAnbG9hZEltYWdlJykubmFtZSgnTG9hZGVkIEltYWdlJyk7XG4gICAgICAgIEltYWdlSW5wdXRDb250cm9sbGVyID0gZ3JpZFNldHRpbmdzLmFkZCh0aGlzLnNpbVBhcmFtcywgJ2xvYWRJbWFnZUlucHV0JykubmFtZShgVGV4dHVyZSBVcGxvYWQgOiAke1wibW9ua2UucG5nXCJ9YCk7XG4gICAgICAgIGdyaWRTZXR0aW5ncy5hZGQodGhpcy5zaW1QYXJhbXMsICdjb3B5SW1hZ2VUb0J1ZmZlcicpLm5hbWUoYENvcHkgVGV4dHVyZSB0byBCdWZmZXJgKTtcbiAgICAgICAgZ3JpZFNldHRpbmdzLm9wZW4oKVxuXG4gICAgICAgIGhpZGRlbkZpbGVJbnB1dC5vbmNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50OmFueSkge1xuICAgICAgICAgICAgaWYodHlwZW9mIGhpZGRlbkZpbGVJbnB1dD8uZmlsZXNbMF0/Lm5hbWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBJbWFnZUlucHV0Q29udHJvbGxlci5uYW1lKGBUZXh0dXJlIFVwbG9hZCA6ICR7aGlkZGVuRmlsZUlucHV0Py5maWxlc1swXT8ubmFtZX1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaGlkZGVuRmlsZUlucHV0Py5maWxlc1swXT8ubmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMucmVSZW5kZXIoKTtcbiAgICB9XG4gICAgYXN5bmMgcmVSZW5kZXIoKSB7XG5cbiAgICAgICAgdGhpcy5ncmlkQnVmZmVyID0gbmV3IEdyaWRCdWZmZXIodGhpcy5kZXZpY2UsIHtcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5CVUZGRVJfU0laRV9ZLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuQlVGRkVSX1NJWkVfWFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZ3JpZERpZmZ1c2VTaGFkZXIgPSBuZXcgR3JpZFNoYWRlcihcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLFxuICAgICAgICAgICAgdGhpcy5ncmlkQnVmZmVyLFxuICAgICAgICAgICAgZGlmZnVzZVdHU0wsXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkRpbWVuc2lvbixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aWR0aDp0aGlzLkJVRkZFUl9TSVpFX1gsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OnRoaXMuQlVGRkVSX1NJWkVfWVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wYWludFNoYWRlciA9IG5ldyBHcmlkU2hhZGVyKFxuICAgICAgICAgICAgdGhpcy5kZXZpY2UsXG4gICAgICAgICAgICB0aGlzLmdyaWRCdWZmZXIsXG4gICAgICAgICAgICBwYWludFdHU0wsXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkRpbWVuc2lvbixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aWR0aDp0aGlzLkJVRkZFUl9TSVpFX1gsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OnRoaXMuQlVGRkVSX1NJWkVfWVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idWZmZXJSZW5kZXJlciA9IG5ldyBCdWZmZXJSZW5kZXJlcihcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlLFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgZHJhd1dHU0wsXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkRpbWVuc2lvbixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aWR0aDp0aGlzLkJVRkZFUl9TSVpFX1gsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OnRoaXMuQlVGRkVSX1NJWkVfWVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuZ3JpZEJ1ZmZlci5idWZmZXJzQXJyYXksXG4gICAgICAgICAgICB0aGlzLmdyaWRCdWZmZXIuYnVmZmVyU2l6ZSlcblxuICAgICAgICB0aGlzLmltYWdlVG9CdWZmZXJIZWxwZXIgPSBuZXcgSW1hZ2VUb0J1ZmZlcigpO1xuXG4gICAgICAgIC8vIGF3YWl0IHRoaXMuaW1hZ2VUb0J1ZmZlckhlbHBlci5pbml0aWFsaXplKFxuICAgICAgICAvLyAgICAgdGhpcy5kZXZpY2UsIFxuICAgICAgICAvLyAgICAgbmV3IFVSTCgnLi9tb25rZS5qcGcnLGltcG9ydC5tZXRhLnVybCkudG9TdHJpbmcoKSxcbiAgICAgICAgLy8gICAgIHRoaXMuZ3JpZEJ1ZmZlci5idWZmZXJzQXJyYXksIFxuICAgICAgICAvLyAgICAgdGhpcy5ncmlkQnVmZmVyLmJ1ZmZlclNpemUsXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OnRoaXMuQlVGRkVSX1NJWkVfWSxcbiAgICAgICAgLy8gICAgICAgICB3aWR0aDp0aGlzLkJVRkZFUl9TSVpFX1hcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB0aGlzLmltYWdlVG9CdWZmZXJIZWxwZXIucGVyZm9ybUNvcHkodGhpcy5mcmFtZUNvdW50JTIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB9XG5cbiAgICByZW5kZXIoZnJhbWVSYXRlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgY29tcHV0ZVRpbWVzID0gMDtcbiAgICAgICAgaWYgKHRoaXMuU1BFRUQgPCAxKSB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBOYW1lID0gTWF0aC5yb3VuZCgxLjAgLyB0aGlzLlNQRUVEKTtcbiAgICAgICAgICAgIGlmICgodGhpcy5yZW5kZXJGcmFtZUNvdW50ICUgZ3JvdXBOYW1lID09IDApKVxuICAgICAgICAgICAgICAgIGNvbXB1dGVUaW1lcyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5TUEVFRCA+PSAxKSB7XG4gICAgICAgICAgICBjb21wdXRlVGltZXMgPSBNYXRoLnJvdW5kKHRoaXMuU1BFRUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tbWFuZEVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuXG4gICAgICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKFxuICAgICAgICAgICAgdGhpcy5wYWludFNoYWRlci51bmlmb3JtQnVmZmVyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuRGltZW5zaW9uLndpZHRoLFxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuRGltZW5zaW9uLmhlaWdodCxcbiAgICAgICAgICAgICAgICB0aGlzLkJVRkZFUl9TSVpFX1gsXG4gICAgICAgICAgICAgICAgdGhpcy5CVUZGRVJfU0laRV9ZLFxuICAgICAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCxcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVksXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50XG4gICAgICAgICAgICBdKVxuICAgICAgICApO1xuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0UHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFpbnRTaGFkZXIucmVuZGVyKGNvbW1hbmRFbmNvZGVyLHRoaXMuZnJhbWVDb3VudCAlIDIpO1xuICAgICAgICAgICAgICAgICsrdGhpcy5mcmFtZUNvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICB3aGlsZSAoY29tcHV0ZVRpbWVzLS0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWREaWZmdXNlU2hhZGVyLnJlbmRlcihjb21tYW5kRW5jb2Rlcix0aGlzLmZyYW1lQ291bnQgJSAyKVxuICAgICAgICAgICAgICAgICsrdGhpcy5mcmFtZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyUmVuZGVyZXIucmVuZGVyKGNvbW1hbmRFbmNvZGVyLHRoaXMuZnJhbWVDb3VudCAlIDIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtjb21tYW5kRW5jb2Rlci5maW5pc2goKV0pO1xuICAgICAgICArK3RoaXMucmVuZGVyRnJhbWVDb3VudDtcbiAgICB9XG4gICAgb25DbGljayhtb3VzZVg6IG51bWJlciwgbW91c2VZOiBudW1iZXIpIHtcbiAgICAgICAgLy8gdGhpcy5sYXN0TW91c2VYID0gbW91c2VYO1xuICAgICAgICAvLyB0aGlzLmxhc3RNb3VzZVkgPSBtb3VzZVk7XG4gICAgICAgIC8vIHRoaXMubGFzdFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBvbkRyYWdGaW5pc2hlZChkeDogbnVtYmVyLCBkeTogbnVtYmVyLCBtb3VzZVg6IG51bWJlciwgbW91c2VZOiBudW1iZXIpIHtcblxuICAgIH1cbiAgICBvbkRyYWcobW91c2VYOiBudW1iZXIsIG1vdXNlWTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IG1vdXNlWDtcbiAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gbW91c2VZO1xuICAgICAgICB0aGlzLmxhc3RQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4uL2NvcmUvZnJhbWV3b3JrJztcbmltcG9ydCBpbWFnZVRvQnVmZmVyV0dTTCBmcm9tICcuL3NoYWRlcnMvSW1hZ2VUb0J1ZmZlci53Z3NsJztcbmNvbnN0IFdPUktHUk9VUF9TSVpFID0gOFxuXG5cblxuZXhwb3J0IGNsYXNzIEltYWdlVG9CdWZmZXIge1xuICAgIGltYWdlVG9CdWZmZXJCaW5kR3JvdXBMYXlvdXQ6IEdQVUJpbmRHcm91cExheW91dFxuICAgIGltYWdlVG9CdWZmZXJQaXBlbGluZTogR1BVQ29tcHV0ZVBpcGVsaW5lO1xuICAgIGRldmljZTogR1BVRGV2aWNlO1xuICAgIHNhbXBsZXI6IEdQVVNhbXBsZXJcbiAgICBidWZmZXJCaW5kR3JvdXBzOiBHUFVCaW5kR3JvdXBbXVxuICAgIHVuaWZvcm1CdWZmZXI6IEdQVUJ1ZmZlclxuICAgIG51bUJ1ZmZlcnM6IG51bWJlcjtcbiAgICBidWZmZXJEaW1lbnNpb25zOiBEaW1lbnNpb25zXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdGlhbGl6ZShkZXZpY2U6IEdQVURldmljZSwgaW1hZ2VVUkw6c3RyaW5nLCBidWZmZXJBcnJheTogR1BVQnVmZmVyW10sIGJ1ZmZlclNpemU6IG51bWJlciwgYnVmZmVyRGltZW5zaW9uczogRGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZTtcblxuICAgICAgICBjb25zdCBpbWc6SFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2VVUkxcbiAgICAgICAgYXdhaXQgaW1nLmRlY29kZSgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGV4dCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGVtcENhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuICAgICAgICAvLyBHZXQgdGhlIGltYWdlIGRhdGEgZnJvbSB0aGUgdGVtcG9yYXJ5IGNhbnZhc1xuICAgICAgICBjb25zdCBpbWFnZURhdGFUZW1wID0gdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCkuZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGltYWdlRGF0YUYzMiA9IG5ldyBGbG9hdDMyQXJyYXkoaW1nLndpZHRoICogaW1nLmhlaWdodCAqIDQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltZy53aWR0aCAqIGltZy5oZWlnaHQgKiA0OyArK2kpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YUYzMls0ICogaSArIDBdID0gaW1hZ2VEYXRhVGVtcFs0ICogaSArIDBdLzI1Ni4wO1xuICAgICAgICAgICAgaW1hZ2VEYXRhRjMyWzQgKiBpICsgMV0gPSBpbWFnZURhdGFUZW1wWzQgKiBpICsgMV0vMjU2LjA7XG4gICAgICAgICAgICBpbWFnZURhdGFGMzJbNCAqIGkgKyAyXSA9IGltYWdlRGF0YVRlbXBbNCAqIGkgKyAyXS8yNTYuMDtcbiAgICAgICAgICAgIGltYWdlRGF0YUYzMls0ICogaSArIDNdID0gaW1hZ2VEYXRhVGVtcFs0ICogaSArIDNdLzI1Ni4wO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGltYWdlQnVmZmVyOkdQVUJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgICAgICBzaXplOiBpbWFnZURhdGFGMzIuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgICAgICAgICBtYXBwZWRBdENyZWF0aW9uOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheShpbWFnZUJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKS5zZXQoXG4gICAgICAgICAgICBpbWFnZURhdGFGMzJcbiAgICAgICAgKTtcbiAgICAgICAgaW1hZ2VCdWZmZXIudW5tYXAoKTtcblxuXG4gICAgICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xuICAgICAgICB0aGlzLm51bUJ1ZmZlcnMgPSBidWZmZXJBcnJheS5sZW5ndGg7XG4gICAgICAgIHRoaXMuYnVmZmVyRGltZW5zaW9ucyA9IGJ1ZmZlckRpbWVuc2lvbnM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmltYWdlVG9CdWZmZXJCaW5kR3JvdXBMYXlvdXQgPVxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwTGF5b3V0KHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkNPTVBVVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVuaWZvcm1cIiBhcyBHUFVCdWZmZXJCaW5kaW5nVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBHUFVTaGFkZXJTdGFnZS5DT01QVVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZWFkLW9ubHktc3RvcmFnZVwiIGFzIEdQVUJ1ZmZlckJpbmRpbmdUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkNPTVBVVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0b3JhZ2VcIiBhcyBHUFVCdWZmZXJCaW5kaW5nVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW1hZ2VUb0J1ZmZlclBpcGVsaW5lID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tcHV0ZVBpcGVsaW5lKHtcbiAgICAgICAgICAgIGxheW91dDogdGhpcy5kZXZpY2UuY3JlYXRlUGlwZWxpbmVMYXlvdXQoe1xuICAgICAgICAgICAgICAgIGJpbmRHcm91cExheW91dHM6IFt0aGlzLmltYWdlVG9CdWZmZXJCaW5kR3JvdXBMYXlvdXRdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjb21wdXRlOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBpbWFnZVRvQnVmZmVyV0dTTCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBlbnRyeVBvaW50OiAnbWFpbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCB1bmlmb3JtQnVmZmVyU2l6ZSA9IDQgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgICAgIHRoaXMudW5pZm9ybUJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgICAgICBzaXplOiB1bmlmb3JtQnVmZmVyU2l6ZSxcbiAgICAgICAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKFxuICAgICAgICAgICAgdGhpcy51bmlmb3JtQnVmZmVyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgICAgIGltZy53aWR0aCxcbiAgICAgICAgICAgICAgICBpbWcuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyRGltZW5zaW9ucy53aWR0aCxcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlckRpbWVuc2lvbnMuaGVpZ2h0LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLmJ1ZmZlckJpbmRHcm91cHMgPSBuZXcgQXJyYXkodGhpcy5udW1CdWZmZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUJ1ZmZlcnM7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJCaW5kR3JvdXBzW2ldID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHRoaXMuaW1hZ2VUb0J1ZmZlclBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgICAgICAgICAgICBlbnRyaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy51bmlmb3JtQnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBpbWFnZUJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogaW1hZ2VEYXRhRjMyLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IGJ1ZmZlckFycmF5W2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBidWZmZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGVyZm9ybUNvcHkoaW5kZXg6IG51bWJlcil7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRFbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICAgICAgY29uc3QgcGFzc0VuY29kZXIgPSBjb21tYW5kRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XG4gICAgICAgIHBhc3NFbmNvZGVyLnNldFBpcGVsaW5lKHRoaXMuaW1hZ2VUb0J1ZmZlclBpcGVsaW5lKTtcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0QmluZEdyb3VwKDAsIHRoaXMuYnVmZmVyQmluZEdyb3Vwc1tpbmRleCAlIHRoaXMubnVtQnVmZmVyc10pO1xuICAgICAgICBwYXNzRW5jb2Rlci5kaXNwYXRjaFdvcmtncm91cHModGhpcy5idWZmZXJEaW1lbnNpb25zLndpZHRoIC8gV09SS0dST1VQX1NJWkUsIHRoaXMuYnVmZmVyRGltZW5zaW9ucy5oZWlnaHQgLyBXT1JLR1JPVVBfU0laRSk7XG4gICAgICAgIHBhc3NFbmNvZGVyLmVuZCgpO1xuICAgICAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRFbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29waWVkIEltYWdlIHRvIGJ1ZmZlclwiKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSBcIi4uL2NvcmUvZnJhbWV3b3JrXCI7XG5cbmV4cG9ydCBjbGFzcyBCdWZmZXJSZW5kZXJlciB7XG4gICAgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICAgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgICBzY3JlZW5EaW1lbnNpb246IERpbWVuc2lvbnNcbiAgICBidWZmZXJEaW1lbnNpb246IERpbWVuc2lvbnNcblxuICAgIGltYWdlVG9CdWZmZXJCaW5kR3JvdXBMYXlvdXQ6IEdQVUJpbmRHcm91cExheW91dFxuICAgIGltYWdlVG9CdWZmZXJQaXBlbGluZTogR1BVQ29tcHV0ZVBpcGVsaW5lO1xuXG4gICAgcmVuZGVyQmluZEdyb3VwczogR1BVQmluZEdyb3VwW11cbiAgICBwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICAgdW5pZm9ybUJ1ZmZlcjogR1BVQnVmZmVyXG4gICAgYnVmZmVyRGltZW5zaW9uczogRGltZW5zaW9uc1xuXG4gICAgbnVtQnVmZmVyczogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkZXZpY2U6IEdQVURldmljZSxcbiAgICAgICAgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgXG4gICAgICAgIHNoYWRlcjogc3RyaW5nLFxuICAgICAgICBzY3JlZW5EaW1lbnNpb246IERpbWVuc2lvbnMsIFxuICAgICAgICBidWZmZXJEaW1lbnNpb246IERpbWVuc2lvbnMsXG4gICAgICAgIGJ1ZmZlckFycmF5OiBHUFVCdWZmZXJbXSxcbiAgICAgICAgYnVmZmVyU2l6ZTogbnVtYmVyKVxuICAgIHtcblxuICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5zY3JlZW5EaW1lbnNpb24gPSBzY3JlZW5EaW1lbnNpb247XG4gICAgICAgIHRoaXMuYnVmZmVyRGltZW5zaW9uID0gYnVmZmVyRGltZW5zaW9uO1xuXG4gICAgICAgIHRoaXMubnVtQnVmZmVycyA9IGJ1ZmZlckFycmF5Lmxlbmd0aDtcblxuICAgICAgICBjb25zdCBwcmVzZW50YXRpb25Gb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGRldmljZTogdGhpcy5kZXZpY2UsXG4gICAgICAgICAgICBmb3JtYXQ6IHByZXNlbnRhdGlvbkZvcm1hdCxcbiAgICAgICAgICAgIGFscGhhTW9kZTogJ3ByZW11bHRpcGxpZWQnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW5kZXJCaW5kR3JvdXBMYXlvdXQgPVxuICAgICAgICB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXBMYXlvdXQoe1xuICAgICAgICAgICAgZW50cmllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuRlJBR01FTlQgfHwgR1BVU2hhZGVyU3RhZ2UuVkVSVEVYLFxuICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidW5pZm9ybVwiIGFzIEdQVUJ1ZmZlckJpbmRpbmdUeXBlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAxLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBHUFVTaGFkZXJTdGFnZS5GUkFHTUVOVCB8fCBHUFVTaGFkZXJTdGFnZS5WRVJURVgsXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZWFkLW9ubHktc3RvcmFnZVwiIGFzIEdQVUJ1ZmZlckJpbmRpbmdUeXBlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGlwZWxpbmUgPSB0aGlzLmRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICAgICAgICBsYXlvdXQ6IHRoaXMuZGV2aWNlLmNyZWF0ZVBpcGVsaW5lTGF5b3V0KHtcbiAgICAgICAgICAgICAgICBiaW5kR3JvdXBMYXlvdXRzOiBbcmVuZGVyQmluZEdyb3VwTGF5b3V0XSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdmVydGV4OiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBzaGFkZXIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZW50cnlQb2ludDogJ3ZlcnRleF9tYWluJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmFnbWVudDoge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogdGhpcy5kZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogc2hhZGVyLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGVudHJ5UG9pbnQ6ICdmcmFnbWVudF9tYWluJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogcHJlc2VudGF0aW9uRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpbWl0aXZlOiB7XG4gICAgICAgICAgICAgICAgdG9wb2xvZ3k6ICd0cmlhbmdsZS1saXN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVuaWZvcm1CdWZmZXJTaXplID0gNyAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICAgICAgdGhpcy51bmlmb3JtQnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgICAgICAgIHNpemU6IHVuaWZvcm1CdWZmZXJTaXplLFxuICAgICAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybUJ1ZmZlcixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbkRpbWVuc2lvbi53aWR0aCxcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbkRpbWVuc2lvbi5oZWlnaHQsXG4gICAgICAgICAgICAgICAgYnVmZmVyRGltZW5zaW9uLndpZHRoLFxuICAgICAgICAgICAgICAgIGJ1ZmZlckRpbWVuc2lvbi5oZWlnaHQsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJCaW5kR3JvdXBzID0gbmV3IEFycmF5KDIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtQnVmZmVyczsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckJpbmRHcm91cHNbaV0gPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgICAgICAgICAgIGxheW91dDogdGhpcy5waXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICAgICAgICAgICAgZW50cmllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHRoaXMudW5pZm9ybUJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyQXJyYXlbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IGJ1ZmZlclNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKGNvbW1hbmRFbmNvZGVyOiBHUFVDb21tYW5kRW5jb2RlcixpbmRleDogbnVtYmVyKXtcbiAgICAgICAgY29uc3QgdGV4dHVyZVZpZXcgPSB0aGlzLmNvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCk7XG4gICAgICAgIGNvbnN0IHJlbmRlclBhc3NEZXNjcmlwdG9yOiBHUFVSZW5kZXJQYXNzRGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIGNvbG9yQXR0YWNobWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IHRleHR1cmVWaWV3LFxuICAgICAgICAgICAgICAgICAgICBjbGVhclZhbHVlOiB7IHI6IDAuMCwgZzogMC4wLCBiOiAwLjAsIGE6IDEuMCB9LFxuICAgICAgICAgICAgICAgICAgICBsb2FkT3A6ICdjbGVhcicgYXMgR1BVTG9hZE9wLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZU9wOiAnc3RvcmUnIGFzIEdQVVN0b3JlT3AsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGFzc0VuY29kZXIgPSBjb21tYW5kRW5jb2Rlci5iZWdpblJlbmRlclBhc3MocmVuZGVyUGFzc0Rlc2NyaXB0b3IpO1xuICAgICAgICBwYXNzRW5jb2Rlci5zZXRQaXBlbGluZSh0aGlzLnBpcGVsaW5lKTtcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0QmluZEdyb3VwKDAsIHRoaXMucmVuZGVyQmluZEdyb3Vwc1tpbmRleF0pO1xuICAgICAgICBwYXNzRW5jb2Rlci5kcmF3KDYsIDEsIDAsIDApO1xuICAgICAgICBwYXNzRW5jb2Rlci5lbmQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gXCIuLi9jb3JlL2ZyYW1ld29ya1wiO1xuaW1wb3J0IGNvbXB1dGVXR1NMIGZyb20gJy4vc2hhZGVycy9jb21wdXRlLndnc2wnO1xuXG5leHBvcnQgY2xhc3MgR3JpZEJ1ZmZlciB7XG4gICAgIGRldmljZTogR1BVRGV2aWNlO1xuICAgIGJ1ZmZlckRpbWVuc2lvbnM6IERpbWVuc2lvbnNcblxuICAgIGNvbXB1dGVQaXBlbGluZTogR1BVQ29tcHV0ZVBpcGVsaW5lO1xuICAgIG51bUJ1ZmZlcnM6IG51bWJlcjtcblxuICAgIHVuaWZvcm1CdWZmZXI6IEdQVUJ1ZmZlclxuICAgIHB1YmxpYyBidWZmZXJzQXJyYXk6IEdQVUJ1ZmZlcltdO1xuXG4gICAgYmluZEdyb3VwTGF5b3V0IDpHUFVCaW5kR3JvdXBMYXlvdXQ7XG5cbiAgICBidWZmZXJEaW1lbnNpb246IERpbWVuc2lvbnM7XG4gICAgYnVmZmVyU2l6ZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRldmljZTogR1BVRGV2aWNlLCBidWZmZXJEaW1lbnNpb246IERpbWVuc2lvbnMpe1xuICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICAgICAgdGhpcy5idWZmZXJEaW1lbnNpb24gPSBidWZmZXJEaW1lbnNpb247XG5cbiAgICAgICAgdGhpcy5iaW5kR3JvdXBMYXlvdXQgPVxuICAgICAgICAgICAgdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwTGF5b3V0KHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBHUFVTaGFkZXJTdGFnZS5DT01QVVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1bmlmb3JtXCIgYXMgR1BVQnVmZmVyQmluZGluZ1R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuQ09NUFVURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVhZC1vbmx5LXN0b3JhZ2VcIiBhcyBHUFVCdWZmZXJCaW5kaW5nVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmc6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBHUFVTaGFkZXJTdGFnZS5DT01QVVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdG9yYWdlXCIgYXMgR1BVQnVmZmVyQmluZGluZ1R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBpbml0aWFsUGFydGljbGVEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmJ1ZmZlckRpbWVuc2lvbi53aWR0aCAqIHRoaXMuYnVmZmVyRGltZW5zaW9uLmhlaWdodCAqIDQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnVmZmVyRGltZW5zaW9uLndpZHRoICogdGhpcy5idWZmZXJEaW1lbnNpb24uaGVpZ2h0ICogNDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgeENvb3JkID0gTWF0aC5mbG9vcigoaSAvIDQpICUgdGhpcy5idWZmZXJEaW1lbnNpb24ud2lkdGgpIC8gdGhpcy5idWZmZXJEaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgICBsZXQgeUNvb3JkID0gTWF0aC5mbG9vcigoaSAvIDQpIC8gdGhpcy5idWZmZXJEaW1lbnNpb24ud2lkdGgpIC8gdGhpcy5idWZmZXJEaW1lbnNpb24uaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTih5Q29vcmQpKVxuICAgICAgICAgICAgICAgIHlDb29yZCA9IDAuMDtcblxuICAgICAgICAgICAgaW5pdGlhbFBhcnRpY2xlRGF0YVs0ICogaSArIDBdID0gMC41O1xuICAgICAgICAgICAgaW5pdGlhbFBhcnRpY2xlRGF0YVs0ICogaSArIDFdID0geUNvb3JkO1xuICAgICAgICAgICAgaW5pdGlhbFBhcnRpY2xlRGF0YVs0ICogaSArIDJdID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGluaXRpYWxQYXJ0aWNsZURhdGFbNCAqIGkgKyAzXSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idWZmZXJTaXplID0gaW5pdGlhbFBhcnRpY2xlRGF0YS5ieXRlTGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuYnVmZmVyc0FycmF5ID0gbmV3IEFycmF5KDIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJzQXJyYXlbaV0gPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICAgICAgICAgIHNpemU6IGluaXRpYWxQYXJ0aWNsZURhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgICAgICAgICAgICAgIG1hcHBlZEF0Q3JlYXRpb246IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXJzQXJyYXlbaV0uZ2V0TWFwcGVkUmFuZ2UoKSkuc2V0KFxuICAgICAgICAgICAgICAgIGluaXRpYWxQYXJ0aWNsZURhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcnNBcnJheVtpXS51bm1hcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gXCIuLi9jb3JlL2ZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3JpZEJ1ZmZlciB9IGZyb20gXCIuL2dyaWRCdWZmZXJcIjtcbmltcG9ydCBjb21wdXRlV0dTTCBmcm9tICcuL3NoYWRlcnMvY29tcHV0ZS53Z3NsJztcblxuZXhwb3J0IGNsYXNzIEdyaWRTaGFkZXIge1xuICAgIGRldmljZTogR1BVRGV2aWNlO1xuXG4gICAgdW5pZm9ybUJ1ZmZlcjogR1BVQnVmZmVyXG5cbiAgICBjb21wdXRlUGlwZWxpbmU6IEdQVUNvbXB1dGVQaXBlbGluZTtcbiAgICBiaW5kR3JvdXBzQXJyYXk6IEdQVUJpbmRHcm91cFtdO1xuXG4gICAgbnVtQnVmZmVyczogbnVtYmVyO1xuICAgIGJ1ZmZlckRpbWVuc2lvbjogRGltZW5zaW9uc1xuICAgIHNjcmVlbkRpbWVuc2lvbjogRGltZW5zaW9uc1xuXG4gICAgY29uc3RydWN0b3IoZGV2aWNlOiBHUFVEZXZpY2UsIGdyaWRCdWZmZXI6IEdyaWRCdWZmZXIsIHNoYWRlcjogc3RyaW5nLCBzY3JlZW5EaW1lbnNpb246IERpbWVuc2lvbnMsIGJ1ZmZlckRpbWVuc2lvbjogRGltZW5zaW9ucyl7XG4gICAgICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xuICAgICAgICB0aGlzLmJ1ZmZlckRpbWVuc2lvbiA9IGJ1ZmZlckRpbWVuc2lvbjtcbiAgICAgICAgdGhpcy5zY3JlZW5EaW1lbnNpb24gPSBzY3JlZW5EaW1lbnNpb247XG5cbiAgICAgICAgY29uc3QgdW5pZm9ybUJ1ZmZlclNpemUgPSA3ICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgICAgICB0aGlzLnVuaWZvcm1CdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICAgICAgc2l6ZTogdW5pZm9ybUJ1ZmZlclNpemUsXG4gICAgICAgICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKFxuICAgICAgICAgICAgdGhpcy51bmlmb3JtQnVmZmVyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuRGltZW5zaW9uLndpZHRoLFxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuRGltZW5zaW9uLmhlaWdodCxcbiAgICAgICAgICAgICAgICBidWZmZXJEaW1lbnNpb24ud2lkdGgsXG4gICAgICAgICAgICAgICAgYnVmZmVyRGltZW5zaW9uLmhlaWdodCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNvbXB1dGVQaXBlbGluZSA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbXB1dGVQaXBlbGluZSh7XG4gICAgICAgICAgICBsYXlvdXQ6IHRoaXMuZGV2aWNlLmNyZWF0ZVBpcGVsaW5lTGF5b3V0KHtcbiAgICAgICAgICAgICAgICBiaW5kR3JvdXBMYXlvdXRzOiBbZ3JpZEJ1ZmZlci5iaW5kR3JvdXBMYXlvdXRdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjb21wdXRlOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBzaGFkZXIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZW50cnlQb2ludDogJ21haW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmluZEdyb3Vwc0FycmF5ID0gbmV3IEFycmF5KDIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5iaW5kR3JvdXBzQXJyYXlbaV0gPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgICAgICAgICAgIGxheW91dDogdGhpcy5jb21wdXRlUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgICAgICAgICAgIGVudHJpZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnVuaWZvcm1CdWZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IGdyaWRCdWZmZXIuYnVmZmVyc0FycmF5W2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBncmlkQnVmZmVyLmJ1ZmZlclNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IGdyaWRCdWZmZXIuYnVmZmVyc0FycmF5WyhpICsgMSkgJSAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZ3JpZEJ1ZmZlci5idWZmZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbmRlcihjb21tYW5kRW5jb2RlcjogR1BVQ29tbWFuZEVuY29kZXIsaW5kZXg6IG51bWJlcil7XG4gICAgICAgIGNvbnN0IHBhc3NFbmNvZGVyID0gY29tbWFuZEVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xuICAgICAgICBwYXNzRW5jb2Rlci5zZXRQaXBlbGluZSh0aGlzLmNvbXB1dGVQaXBlbGluZSk7XG4gICAgICAgIHBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgwLCB0aGlzLmJpbmRHcm91cHNBcnJheVtpbmRleF0pO1xuICAgICAgICBwYXNzRW5jb2Rlci5kaXNwYXRjaFdvcmtncm91cHModGhpcy5idWZmZXJEaW1lbnNpb24ud2lkdGggLyA4LCB0aGlzLmJ1ZmZlckRpbWVuc2lvbi5oZWlnaHQgLyA4KTtcbiAgICAgICAgcGFzc0VuY29kZXIuZW5kKCk7XG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IEJvaWRzIH0gZnJvbSAnLi9ib2lkcy9ib2lkcydcbmltcG9ydCB7IFRveVNoYWRlciB9IGZyb20gJy4vVG95U2hhZGVyL1RveVNoYWRlcidcbmltcG9ydCB7IERpbWVuc2lvbnMsIFdlYkdQVVByb2plY3QsIGNyZWF0ZVdlYkdQVVByb2plY3QgfSBmcm9tICcuL2NvcmUvZnJhbWV3b3JrJztcbmltcG9ydCB7IEdyaWREaWZmdXNpb25VbnN0YWJsZSB9IGZyb20gJy4vZ3JpZERpZmZ1c2lvblVuc3RhYmxlL2dyaWREaWZmdXNpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2ViZ3B1LWNhbnZhc1wiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ3B1JykgYXMgdW5rbm93biBhcyBHUFVDYW52YXNDb250ZXh0O1xuXG4gICAgY29uc3QgZGltZW5zaW9uOiBEaW1lbnNpb25zID0geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH1cblxuICAgIGNvbnN0IGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIGNvbnN0IGNhbnZhc1NjYWxlID0gMS4wO1xuICAgIGNhbnZhcy53aWR0aCA9IGRpbWVuc2lvbi53aWR0aCAqIGNhbnZhc1NjYWxlO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0ICogY2FudmFzU2NhbGU7XG5cbiAgICBcbiAgICBsZXQgY3VycmVudFByb2plY3Q6IFdlYkdQVVByb2plY3Q7XG4gICAgLy8gY3VycmVudFByb2plY3QgPSBuZXcgQm9pZHMoZGV2aWNlLCBjb250ZXh0KTtcbiAgICAvLyBjdXJyZW50UHJvamVjdCA9IG5ldyBUb3lTaGFkZXIoZGV2aWNlLCBjb250ZXh0LCBkaW1lbnNpb24pO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gbmV3IEdyaWREaWZmdXNpb25VbnN0YWJsZShkZXZpY2UsIGNvbnRleHQsIGRpbWVuc2lvbik7XG5cbiAgICBjcmVhdGVXZWJHUFVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LCBjYW52YXMpO1xufVxuXG5pbml0KClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9