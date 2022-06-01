/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tasks = [\r\n    {\r\n      description: 'wash the dishes',\r\n      completed: true,\r\n      index: 1,\r\n    },\r\n    {\r\n      description: 'complete to do list',\r\n      completed: true,\r\n      index: 2,\r\n    },\r\n  ];\r\n\r\n  const Mainpage = tasks.map((section) => `\r\n  <li><input type=\"checkbox\" name=\"name\" >${section.description}<a class =\"svg\" href=\"#\"><img src=\"svg.PNG\" alt=\"\"></a>\r\n  <hr></li>`).join('');\r\n\r\nconst list = document.querySelector('.list');\r\nlist.innerHTML += Mainpage;\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;