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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27);

var WRAPPER = 'respons__wrapper';
var TITLE_NAME = 'respons__title';
var CONTENT_NAME = 'respons__content';
var xhr = new XMLHttpRequest();
var resp = void 0;

xhr.open('GET', 'http://localhost:4001/comments');
xhr.send();
xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4) {
        console.log('RESPONS', JSON.parse(xhr.response), xhr);
        resp = JSON.parse(xhr.response);
    }
});

function catalog(targetEl, options) {
    var wrapper = void 0;
    var title = void 0;

    function render() {
        renderWrapper();
        renderTitle();
    }

    function renderWrapper() {
        wrapper = document.createElement('div');
        wrapper.classList.add(WRAPPER);
        targetEl.appendChild(wrapper);
    }

    function renderTitle() {
        title = document.createElement('ul');
        title.classList.add(TITLE_NAME);

        options.forEach(function (contentText) {
            var contentItem = document.createElement('li');

            contentItem.classList.add(CONTENT_NAME);
            contentItem.textContent = contentText;

            title.appendChild(contentItem);
        });

        targetEl.appendChild(title);
    }

    render();
}

catalog(document.querySelector('.catalog-place'), resp);

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });