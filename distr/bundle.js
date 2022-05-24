/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./one.js":
/*!****************!*\
  !*** ./one.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "sayHi": () => (/* binding */ sayHi),
/* harmony export */   "two": () => (/* binding */ two)
/* harmony export */ });
// function one() { 
//  console.log('one');
// }
// module.exports = one; // не вызываем а передаем Иван - 20-12


// Важно чтобы у каждой сущности было свое имя для экспорта
let one = 1; // можно в таком виде экспортировать

//или так - именованный синтаксис
let two = 2;
 // фиг. скобки обязательно

// можем экспортировать функции
function sayHi() { 
 console.log('hello');
}

// вариант с default
// export default function sayHi() { 
//   console.log('hello');
//  }

/***/ }),

/***/ "./two.js":
/*!****************!*\
  !*** ./two.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "obj": () => (/* binding */ obj)
/* harmony export */ });
let obj = {
  name: 'Ann',
  age: 32,
};

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one */ "./one.js");
/* harmony import */ var _two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two */ "./two.js");

// импортируем из всех файлов

 
 // из второго файла

(0,_one__WEBPACK_IMPORTED_MODULE_0__.sayHi)(); // hello
console.log(`${_one__WEBPACK_IMPORTED_MODULE_0__.one} and ${_one__WEBPACK_IMPORTED_MODULE_0__.two}`); // 1 and 2

console.log(_two__WEBPACK_IMPORTED_MODULE_1__.obj); // {name: 'Ann', age: 32}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map