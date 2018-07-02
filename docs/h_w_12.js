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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);

var _accordion = __webpack_require__(22);

var _creation = __webpack_require__(24);

function AutoAccordions(target) {
    var HereBeAccordion = document.createElement('div');
    HereBeAccordion.classList.add('here__be__accordion');
    target.appendChild(HereBeAccordion);
    var createdAccordions = Array.from(document.querySelectorAll('.here__be__accordion'));

    for (var i = 0; i < createdAccordions.length; i++) {
        (0, _creation.creation)(createdAccordions[i]);
    }

    var accordions = Array.from(document.querySelectorAll('.content_wrapper'));

    for (var _i = 0; _i < accordions.length; _i++) {
        (0, _accordion.accordion)(accordions[_i]);
    }
}

AutoAccordions(document.querySelector('.here__be__accordionh'));
AutoAccordions(document.querySelector('.here__be__accordionj'));
AutoAccordions(document.querySelector('.here__be'));

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accordion = accordion;

__webpack_require__(23);

function accordion(piano) {
    var notes = Array.from(piano.querySelectorAll('.accordion__icon'));
    var texts = Array.from(piano.querySelectorAll('.accordion__text'));
    var triangl = Array.from(piano.querySelectorAll('.accordion__icon__right-part'));
    var ShowText = 'accordion__text__show';
    var trianglBottom = 'accordion__icon__right-part_open';

    function switcher() {
        for (var i = 0; i < notes.length; i++) {
            notes[i].addEventListener('click', turnOf);
        }
    }

    function turnOf() {
        for (var i = 0; i < notes.length; i++) {
            texts[i].classList.remove(ShowText);
            triangl[i].classList.remove(trianglBottom);
            if (notes[i] == event.currentTarget) {
                texts[i].classList.toggle(ShowText);
                triangl[i].classList.toggle(trianglBottom);
            }
        }
    }

    switcher();
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.creation = creation;
function creation(AcordionPlace) {
    var ContentWrapper = document.createElement('div');
    var AccordionBodyCreated = 'content_wrapper';
    var AccordionBody = 'created-content';

    AcordionPlace.appendChild(ContentWrapper);
    ContentWrapper.classList.add(AccordionBody);
    ContentWrapper.classList.add(AccordionBodyCreated);

    var targetEl = AcordionPlace.querySelector('.created-content');
    targetEl.innerHTML = '\n    <div class="accordion__icon accordion__icon__border">\n        <span class="accordion__icon__title"></span>\n        <span class="accordion__icon__right-part">&#8249</span></div>\n    <div class="accordion__text accordion__text__show"></div>\n    <div class="accordion__icon accordion__icon__border">\n        <span class="accordion__icon__title"></span>\n        <span class="accordion__icon__right-part accordion__icon__right-part_open">&#8249</span></div>\n    <div class="accordion__text"></div>\n    <div class="accordion__icon accordion__icon__border">\n        <span class="accordion__icon__title"></span>\n        <span class="accordion__icon__right-part">&#8249</span></div>\n    <div class="accordion__text"></div>\n    <div class="accordion__icon">\n        <span class="accordion__icon__title"></span>\n        <span class="accordion__icon__right-part">&#8249</span></div>\n    <div class="accordion__text"></div>\n     ';

    var accordContent = [{
        title: 'Collapsible item #1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
    }, {
        title: 'Collapsible item #2',
        content: 'Sorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
    }, {
        title: 'Collapsible item #3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa tempora facere magnam similique, unde autem totam sit in a esse? Modi, iste mollitia. Itaque autem asperiores nemo sint laboriosam.'
    }, {
        title: 'Collapsible item #4',
        content: 'Porem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
    }];

    function pasteContent(target) {
        var accordionIconTitle = Array.from(AcordionPlace.querySelectorAll('.accordion__icon__title'));
        var accordionText = Array.from(AcordionPlace.querySelectorAll('.accordion__text'));
        for (var i = 0; i < accordionIconTitle.length; i++) {
            accordionIconTitle[i].textContent = target[i].title;
        }
        for (var _i = 0; _i < accordionText.length; _i++) {
            accordionText[_i].textContent = target[_i].content;
        }
    }
    pasteContent(accordContent);
}

/***/ })

/******/ });