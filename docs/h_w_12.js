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

(0, _creation.creation)();

var accordions = Array.from(document.querySelectorAll('.content_wrapper'));

for (var i = 0; i < accordions.length; i++) {
    (0, _accordion.accordion)(accordions[i]);
}

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
function creation() {
    var ContentWrapper = document.createElement('div');
    var AcordionPlace = document.querySelector('.here__be__accordion');
    var AccordionBodyCreated = 'content_wrapper';
    var AccordionBody = 'created-content';

    AcordionPlace.appendChild(ContentWrapper);
    ContentWrapper.classList.add(AccordionBody);
    ContentWrapper.classList.add(AccordionBodyCreated);

    var targetEl = document.querySelector('.created-content');
    targetEl.innerHTML = '\n    <div class="accordion__icon accordion__icon__border">\n        <span>Collapsible item #1</span>\n        <span class="accordion__icon__right-part">&#8249</span></div>\n    <div class="accordion__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati rem nostrum dicta doloremque vitae reprehenderit pariatur eveniet, quidem mollitia nihil ad blanditiis. Enim nulla quos laborum accusantium. Quod, deleniti.</div>\n    <div class="accordion__icon accordion__icon__border">\n        <span>Collapsible item #2</span>\n        <span class="accordion__icon__right-part accordion__icon__right-part_open">&#8249</span></div>\n    <div class="accordion__text accordion__text__show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum tempora mollitia ducimus nobis a exercitationem accusantium quia, illum quae maiores ad accusamus itaque quibusdam quasi odit, possimus dignissimos distinctio?</div>\n    <div class="accordion__icon accordion__icon__border">\n        <span>Collapsible item #3</span>\n        <span class="accordion__icon__right-part">&#8249</span></div>\n    <div class="accordion__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa tempora facere magnam similique, unde autem totam sit in a esse? Modi, iste mollitia. Itaque autem asperiores nemo sint laboriosam.</div>\n    <div class="accordion__icon">\n        <span>Collapsible item #4</span>\n        <span class="accordion__icon__right-part">&#8249</span></div>\n    <div class="accordion__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nesciunt, quidem alias debitis rem porro neque tenetur labore temporibus excepturi, consequuntur doloremque nemo, fugit unde ullam. Dolore deleniti corrupti tempora?</div>\n     ';
}

/***/ })

/******/ });