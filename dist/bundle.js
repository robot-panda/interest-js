(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/config */ \"./src/modules/config.js\");\n/* harmony import */ var _modules_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/init */ \"./src/modules/init.js\");\n/* harmony import */ var _modules_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/customer */ \"./src/modules/customer.js\");\n/* harmony import */ var _modules_interest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/interest */ \"./src/modules/interest.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  var CONFIG = new _modules_config__WEBPACK_IMPORTED_MODULE_0__[\"Config\"]({})\n  return {\n    init: opts => Object(_modules_init__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CONFIG, opts),\n    customer: Object(_modules_customer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CONFIG, {}),\n    interests: Object(_modules_interest__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CONFIG, {})\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Config\", function() { return Config; });\nclass Config {\n  constructor (config) {\n    this.token = config.token\n    this.store_id = config.store_id\n    this.options = config.options\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/customer.js":
/*!*********************************!*\
  !*** ./src/modules/customer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((config, opts) => {\n  return {\n    unidentify: () => {},\n    identify: () => {}\n  }\n});\n\n\n//# sourceURL=webpack:///./src/modules/customer.js?");

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((config, opts) => {\n  config.token = opts.token\n  config.store_id = opts.store_id\n  config.options = opts.options\n  return config\n});\n\n\n//# sourceURL=webpack:///./src/modules/init.js?");

/***/ }),

/***/ "./src/modules/interest.js":
/*!*********************************!*\
  !*** ./src/modules/interest.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((config, opts) => {\n  return {\n    get: () => {},\n    add: () => {},\n    update: () => {},\n    list: () => {},\n    remove: () => {}\n  }\n});\n\n\n//# sourceURL=webpack:///./src/modules/interest.js?");

/***/ })

/******/ })));