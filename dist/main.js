/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageload */ \"./src/modules/pageload.js\");\n\n\n\n\nfunction test(){\nconsole.log(\"javascript running\");\n}\n\ntest();\n\n(0,_modules_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n\n\n\n\n\n// from example\n// 21 lines (18 sloc)  586 Bytes\n\n// import loadPage from './modules/initial-page-load';\n// import loadHome from './modules/home';\n// import loadMenu from './modules/menu';\n// import loadContact from './modules/contact';\n\n// init();\n\n// function addNavEvents() {\n//   const homeBtn = document.getElementById('home');\n//   const menuBtn = document.getElementById('menu');\n//   const contactBtn = document.getElementById('contact');\n\n//   homeBtn.addEventListener('click', loadHome);\n//   menuBtn.addEventListener('click', loadMenu);\n//   contactBtn.addEventListener('click', loadContact);\n// }\n// function init() {\n//   loadPage();\n//   loadHome();\n//   addNavEvents();\n// }\n\n//# sourceURL=webpack://restrauntpackage/./src/index.js?");

/***/ }),

/***/ "./src/modules/pageload.js":
/*!*********************************!*\
  !*** ./src/modules/pageload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateOnLoad(){\n    const grab = document.getElementById(\"content\");\n    const titleArray = [\"Home\", \"Menu\", \"About\"];\n                                            // GENERATE NAV BAR\n   \n    const generateNav = document.createElement(\"div\");\n            generateNav.setAttribute('id', 'navigation');\n            generateNav.classList.add('nav');\n            generateNav.classList.add('container');\n        grab.appendChild(generateNav);\n    console.log(\"title?\");\n\n                                            // GENERATE RESTRAURANT NAME\n    const generateTitle = document.createElement('h2');\n            generateTitle.classList.add('restraurantName');\n            generateTitle.textContent = \"I Am Trying To Kill You\";\n    generateNav.appendChild(generateTitle);\n            const buttonBox = document.createElement('div');\n            buttonBox.classList.add('buttonBox');   \n            generateNav.appendChild(buttonBox); \n\n\n                                            // GENERATE AND POPULATE BUTTONS\n                                for (let i=0; i<3; i++){\n                                                        let grave = document.createElement(\"div\");\n                                                        grave.classList.add('grave');\n                                                        grave.innerHTML=`<img src = \"../src/Images/graveicon.png\"></img>`;\n                                                        buttonBox.appendChild(grave);\n                                                        // grave.setAttribute(transform, translateX(2em));\n                                                        }\n                                for (let i=0; i<3; i++){\n                                    console.log(i);\n                                    console.log(titleArray[i]);\n                                            let assignButtonName = titleArray[i]\n                                            let buttonName = `nav${assignButtonName}`;\n                                    console.log(`Button name set to ${buttonName}`);\n                                            let button=document.createElement(\"button\")\n                                            button.classList.add('navButton')\n                                            button.setAttribute('id', buttonName);\n                                            button.textContent=assignButtonName;\n                                    console.log(button.attributes.id)\n                                            buttonBox.appendChild(button);\n                                }\n\n    const generateDisp = document.createElement(\"div\");\n            generateNav.setAttribute('id', 'display');\n            generateNav.classList.add('display');\n            generateNav.classList.add('container');\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateOnLoad);\n\n\n//# sourceURL=webpack://restrauntpackage/./src/modules/pageload.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;