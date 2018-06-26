/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _light = __webpack_require__(9);

var _light_js = __webpack_require__(10);

var _lighter_auto = __webpack_require__(12);

(0, _light.clickCounter)();
(0, _light_js.clickCounterJs)();
(0, _lighter_auto.lighter)();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clickCounter = clickCounter;
function clickCounter() {
    var input_red = document.querySelector('.input_red');
    var input_yellow = document.querySelector('.input_yellow');
    var input_green = document.querySelector('.input_green');
    var content_show_red = document.querySelector('.content_show_red');

    input_red.addEventListener('click', clickRed);
    input_yellow.addEventListener('click', clickYellow);
    input_green.addEventListener('click', clickGreen);

    var redCounter = 2;
    var yellowCounter = 2;
    var greenCounter = 2;

    function clickRed() {
        redCounter++;
        if (redCounter > 2) {
            //content_show_red.classList.remove('content_show_red');
            redCounter = 1;
        }
    }
    function clickYellow() {
        yellowCounter++;
        if (yellowCounter > 2) {
            yellowCounter = 1;
        }
    }
    function clickGreen() {
        greenCounter++;
        if (greenCounter > 2) {
            greenCounter = 1;
        }
    }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clickCounterJs = clickCounterJs;

__webpack_require__(11);

function clickCounterJs() {
  var lights = document.querySelector('.content_show__js');
  var lightsRed = lights.querySelector('.content_show__red_js');
  var lightsYellow = lights.querySelector('.content_show__yellow_js');
  var lightsGreen = lights.querySelector('.content_show__green_js');

  function redShow() {
    lightsRed.classList.add('content_show__active_js');
    lightsYellow.classList.remove('content_show__active_js');
    lightsGreen.classList.remove('content_show__active_js');
  }
  function yellowShow() {
    lightsYellow.classList.add('content_show__active_js');
    lightsRed.classList.remove('content_show__active_js');
    lightsGreen.classList.remove('content_show__active_js');
  }
  function greenShow() {
    lightsGreen.classList.add('content_show__active_js');
    lightsYellow.classList.remove('content_show__active_js');
    lightsRed.classList.remove('content_show__active_js');
  }
  lightsRed.addEventListener('click', redShow);
  lightsYellow.addEventListener('click', yellowShow);
  lightsGreen.addEventListener('click', greenShow);
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lighter = lighter;

__webpack_require__(13);

function lighter() {
    var lights = document.querySelector('.wrapper_lighter');
    var lightsRed = lights.querySelector('.lighter__red');
    var lightsYellow = lights.querySelector('.lighter__yellow');
    var lightsGreen = lights.querySelector('.lighter__green');
    var lightActive = 'lighter__on';
    var lightState = void 0;

    function turnOff() {
        lightsRed.classList.remove(lightActive);
        lightsYellow.classList.remove(lightActive);
        lightsGreen.classList.remove(lightActive);
    }

    function switcher(light) {
        if (lightState == light) {
            turnOff();
            lightState = undefined;
        } else {
            turnOff();
            lightState = light;
            light.classList.add(lightActive);
        }
    }

    lightsRed.addEventListener('click', function () {
        switcher(lightsRed);
    });
    lightsYellow.addEventListener('click', function () {
        switcher(lightsYellow);
    });
    lightsGreen.addEventListener('click', function () {
        switcher(lightsGreen);
    });
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);