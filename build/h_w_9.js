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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var cart = [{
    title: 'macbook',
    price: 2000
}, {
    title: 'macbook',
    price: 2345
}, {
    title: 'macbook',
    price: 345
}];

function total(samePrice) {
    var summa = 0;
    for (var i = 0; i < samePrice.length; i++) {
        summa += cart[i].price;
    }
    console.log(summa);
}

total(cart);

function randominteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randominteger(10, 25));

var user = {};
user.name = 'Вася';
console.log(user);
user.surname = 'Петров';
console.log(user);
user.name = 'Сергей';
console.log(user);
delete user.name;
console.log(user);

function isEmpty(obj) {
    if (Object.keys(obj).length == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isEmpty(user);
isEmpty({});

var salaries = {
    Penya: 500,
    Vasya: 750,
    Pups: 933,
    Teepock: 1111,
    ard: 'dghdng'
};

function calc(target) {
    if (Object.keys(target).length == 0) {
        console.log('null');
    } else {
        var summ = 0;
        for (var key in target) {
            if (isNaN(target[key])) {
                continue;
            }
            summ += target[key];
        }
        console.log(summ);
    }
}
calc({});
calc(salaries);

function moreMoney(target) {
    var maxSalaries = 0;
    if (Object.keys(target).length == 0) {
        console.log('нет сотрудников');
    } else {
        for (var key in target) {
            if (isNaN(target[key])) {
                continue;
            }
            if (target[key] > maxSalaries) {
                maxSalaries = target[key];
            }
        }
        console.log(maxSalaries);
    }
}

moreMoney(salaries);
moreMoney({});

function multiplayNumerik(target) {
    for (var key in target) {
        if (isNaN(target[key])) {
            continue;
        }
        target[key] *= 2;
        console.log(target[key]);
    }
}

multiplayNumerik(salaries);

console.log(salaries);

var arr = [1, 5, 12, 54, 125];

// function rando(target) {
//     let rand = Math.floor(Math.random() * target.length);
//     console.log(target[rand]);
// }

// rando(arr);

// let mass = [];
// function query(target) {
//     let num = 0;
//     while(num >= 0) {
//         if (isNaN(num) == true || num === null || num === ''){
//             break;
//         }
//         else {
//             num = prompt('Введите число','');
//             target.push(num);
//         }
//     }
//     target.pop();
//     let summArr = target.reduce((sum, current) => {
//         return +sum + +current;
//     });
//     console.log(summArr);
// }

// query(mass);

// function filterRange(ar, a, b) {
//     let filterResult = [];
//     ar.forEach((item, i, arr) => {
//         if (ar[i] <= b && ar[i] >= a) {
//             filterResult.push(ar[i]);
//         }
//     });
//     console.log(filterResult);
// }

// filterRange(arr, 3, 50);

function find(target, value) {
    var indexFind = void 0;
    target.forEach(function (item, i, arr) {
        if (item === value) {
            indexFind = i;
        } else if (isNaN(indexFind)) {
            indexFind = -1;
        }
    });
    console.log(indexFind);
}

find(arr, 22);

function pow(x, n) {
    var result = x;
    for (var i = 0; i < n - 1; i++) {
        result *= x;
    }
    console.log(result);
}

pow(3, 15);

var Feb20_2012 = new Date(1977, 1, 8, 3, 12);

console.log(Feb20_2012);

function getWeekDay(x, y, z) {
    var date = new Date(x, y, z);
    var week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    // let WeekDay = date.getDay();
    // week.forEach((item, i, arr) => {
    //     if (i == WeekDay) {
    //         console.log(week[i]);
    //     }
    console.log(week[date.getDay()]);
}

getWeekDay(1977, 1, 8);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);