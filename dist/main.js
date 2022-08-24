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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageload */ \"./src/modules/pageload.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n\n\n\n\n(0,_modules_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nfunction hit(){\n    console.log(\"Hit!\");\n}\nfunction digGrave(plotNumber){\nlet gotoPlot = document.getElementsByClassName('grave');\n\n            for(let p=0; p<gotoPlot.length;p++){\n                gotoPlot[p].classList.add(\"hidden\")\n                    if(gotoPlot[p].id === plotNumber){\n                    gotoPlot[p].classList.remove('hidden')\n                    }\n            }\n\n        }\n\n\nfunction addNav() {\n    console.log(\"addnav up??\")\n    const homeButton = document.getElementById('navHome');\n    // const homeGrave = document.getElementById('grave0');\n    const menuButton = document.getElementById('navMenu');\n    // const homeGrave = document.getElementById('grave1');\n    const aboutButton = document.getElementById('navAbout');      \n    // const homeGrave = document.getElementById('grave2');\n        homeButton.addEventListener('click', ()=>{ (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()});\n        homeButton.addEventListener('click', ()=>{ digGrave('plot0')});\n        menuButton.addEventListener('click', ()=>{ (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()});\n        menuButton.addEventListener('click', ()=>{ digGrave('plot1')});\n        aboutButton.addEventListener('click',()=>{ (0,_modules_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()});\n        aboutButton.addEventListener('click',()=>{ digGrave('plot2')});\n        \n}\n\n\n\naddNav();\nfunction iStyleButton(){\n    let grabButtons = document.getElementsByClassName('navButton');\n    console.log(\"styling...\");\n    console.log(grabButtons);\n}\niStyleButton();\n\n//# sourceURL=webpack://restrauntpackage/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadAbout(){\n    const homeDisplay = document.getElementById('display');\n    homeDisplay.innerHTML=\"<h3>About Us!</h3><p>We are located at the intersection of your Wildest Dreams and Don't Say We Didn't Warn You. Our hours are:</p><ul><li>Monday:closed for hangover</li><li>Tuesday:closed for beachtrips</li><li>Wednesday: Take-out available 6pm -2am</li><li>Thursday: Take-out & delivery available 6pm -2am</li><li>Friday: Take-out & delivery available 6pm -2am</li><li>Saturday: Take-out & delivery available 6pm -2am</li><li>Sunday: Take-out & delivery available 6pm -2am</li></ul><br><h3>Our Story</h3><p>Friends.... We don't actually exist, though these are all recipes</p>\"\n    const employeeQuery = document.createElement('div')\n            employeeQuery.classList.add('container');\n            employeeQuery.classList.add('employeeSection');\n            employeeQuery.innerHTML=`   <legend>Employee Login</legend>\n                                        <form action=\"get\">\n                                        <label for=\"name\">Name</label>\n                                        <Input type=\"text\"></Input>\n                                        <label for=\"password\">Password</label>\n                                        <Input type=\"password\"></Input>\n                                        </form>\n                                    `;\n            homeDisplay.appendChild(employeeQuery);\n      }\n      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restrauntpackage/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome(){\n\n        const homeDisplay = document.getElementById('display');\n        homeDisplay.textContent= 'Welcome to \"I Am Trying To Kill You!\" My fantasy restraunt I will open someday bringing all of the unhealthy garbage I ate back in Boston, to my new home across the ocean. I will be slowly updating this will real recipes and photos of food that I like to cook';\n\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restrauntpackage/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu(){\n\nconst menuBacon = {\n                    item: 'Bacon',\n                    itemI: 'Bacon',\n                    image: \"\",\n                    cat: 'Appetisers',\n                    description: \"We cook our bacon half way, pull it out and THEN soak our bacon in garlic butter, and THEN finish it off; making the world's tasty way to piss off your heart.\",\n                    price: 4.34,    \n                }\nconst menuDeviled = {\n                    item: 'Deviled Eggs',\n                    itemI: 'DeviledEggs',\n                    image: \"\",\n                    cat: 'Appetisers',\n                    description: \"We cook our bacon half way, pull it out and THEN soak our bacon in garlic butter, and THEN finish it off; making the world's tasty way to piss off your heart.\",\n                    price: 4.34,    \n                }\nconst menuChicwings = {\n\n                    item: 'Chicken Wings',\n                    itemI: 'ChickenWings',\n                    image: \"\",\n                    cat: 'Meals',\n                    description: \"We cook our bacon half way, pull it out and THEN soak our bacon in garlic butter, and THEN finish it off; making the world's tasty way to piss off your heart.\",\n                    price: 4.34,    \n                }\nconst menuBurger= {\n\n                    item: 'Chicken Wings',\n                    itemI: 'ChickenWings',\n                    image: \"\",\n                    cat: 'Meals',\n                    description: \"We cook our bacon half way, pull it out and THEN soak our bacon in garlic butter, and THEN finish it off; making the world's tasty way to piss off your heart.\",\n                    price: 4.34,    \n                }\nconst menuRibs = {\n\n                    item: 'Chicken Wings',\n                    itemI: 'ChickenWings',\n                    image: \"\",\n                    cat: 'Meals',\n                    description: \"We cook our bacon half way, pull it out and THEN soak our bacon in garlic butter, and THEN finish it off; making the world's tasty way to piss off your heart.\",\n                    price: 4.34,    \n                }\n    let menuList =[menuBacon, menuDeviled, menuChicwings, menuBurger, menuRibs]\n    let menuCategories =['Appetisers', 'Meals', 'Desserts', 'Drinks',]\n                                                // const content= document.getElementById('content');\n            const homeDisplay = document.getElementById('display');\n            homeDisplay.textContent= \"Please inform staff of any food allergies or people you brought that are generally just annoying\"\n\n\n                                                // generate items\n                                                // HEADER\n            for (let m=0; m<menuCategories.length; m++){\n                let category = menuCategories[m];\n                let menuHeader = document.createElement('div');\n                    menuHeader.setAttribute(`id`, `${category}Header`);\n                    menuHeader.classList.add('menuHeader');\n                    menuHeader.textContent=`${category}`\n                    homeDisplay.appendChild(menuHeader);\n\n            \n            for(let i=0; i<menuList.length; i++){\n\n                    let ckbk = menuList[i];\n                    let menuItem = document.createElement('div');\n                        menuItem.setAttribute('id', `${ckbk.cat}#${i}`);\n                        // menuItem.textContent=menuItem.id;\n                    let itemImage = \"../src/Images/menu/\"+menuList[i].itemI+\".jpeg\";\n                    \n                        menuItem.innerHTML= \"<img class='menuImage' src=\"+itemImage+\"></img><h4 class='menuFood'>\"+menuList[i].item+ \"</h4> <p>\"+menuList[i].description+\"</p> <br><p>$ \" +menuList[i].price+\"</p>\"\n                        ckbk.image = itemImage;\n                  if(ckbk.cat === category){\n                        homeDisplay.appendChild(menuItem);}\n            }}\n      }\n      \n      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restrauntpackage/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/pageload.js":
/*!*********************************!*\
  !*** ./src/modules/pageload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction generateOnLoad(){\n    const grab = document.getElementById(\"content\");\n    const titleArray = [\"Home\", \"Menu\", \"About\"];\n                                            // GENERATE NAV BAR\n   \n    const generateNav = document.createElement(\"div\");\n            generateNav.setAttribute('id', 'navigation');\n            generateNav.classList.add('nav');\n            generateNav.classList.add('container');\n        grab.appendChild(generateNav);\n  \n\n                                            // GENERATE RESTRAURANT NAME\n    const generateTitle = document.createElement('h2');\n            generateTitle.classList.add('restraurantName');\n            generateTitle.textContent = \"I Am Trying To Kill You\";\n    generateNav.appendChild(generateTitle);\n            const buttonBox = document.createElement('div');\n            buttonBox.classList.add('buttonBox');   \n            generateNav.appendChild(buttonBox); \n\n\n                                            // GENERATE AND POPULATE BUTTONS\n                                for (let i=0; i<3; i++){\n                                                        let grave = document.createElement(\"div\");\n                                                        let gravenumber = `plot${i}`;\n                                                        grave.classList.add('grave');\n                                                        let gg = `grave${i}`\n                                                        grave.innerHTML=\"<img src = '../src/Images/graveicon.png' id=\"+gg+\"></img>\";\n                                                        buttonBox.appendChild(grave);            \n                                                        grave.setAttribute('id', gravenumber)\n                                                        // grave.setAttribute(transform, translateX(2em));\n                                                        }\n                                for (let i=0; i<3; i++){\n                                            let assignButtonName = titleArray[i]\n                                            let buttonName = `nav${assignButtonName}`;\n                                    \n                                            let button=document.createElement(\"button\")\n                                            button.classList.add('navButton')\n                                            button.setAttribute('id', buttonName);\n                                            button.textContent=assignButtonName;\n                                //     console.log(button.attributes.id)\n                                            buttonBox.appendChild(button);\n                                }\n                              \n\n\n    const generateDisp = document.createElement(\"div\");\n            generateDisp.setAttribute('id', 'display');\n            generateDisp.classList.add('display');\n            generateDisp.classList.add('container');\n            generateDisp.textContent = \"\";\n                        grab.appendChild(generateDisp);\n\n\n\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateOnLoad);\n\n\n//# sourceURL=webpack://restrauntpackage/./src/modules/pageload.js?");

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