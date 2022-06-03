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

eval("const description = document.querySelector('.text');\r\nconst enter = document.querySelector('.enter');\r\nconst list = document.querySelector('.list');\r\nconst tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n\r\nconst UI = ({ description, index }) => {\r\n  list.innerHTML += `<li><input type=\"checkbox\" name=\"name\" >${description}<a id = \"${index}\" class =\"remove\" href=\"#\">delete</a>\r\n <hr> </li>`;\r\n};\r\n\r\nclass Task {\r\n  constructor(description, completed, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\r\n\r\nenter.addEventListener('click', (e) => {\r\n  if (description.value === '') {\r\n    alert('Kindly write your todos');\r\n    return;\r\n  }\r\n  e.preventDefault();\r\n  const number = tasks.length;\r\n  const newtask = new Task(description.value, false, number);\r\n  tasks.push(newtask);\r\n  UI(newtask);\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n  description.value = '';\r\n});\r\n\r\ndocument.body.addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('remove')) {\r\n    e.target.parentElement.remove();\r\n    const selectedindex = e.target.id;\r\n    let items = JSON.parse(localStorage.getItem('tasks'));\r\n    items = items.filter((e) => e.index !== Number(selectedindex));\r\n    localStorage.setItem('tasks', JSON.stringify(items));\r\n  } else if (e.target.tagName == 'INPUT' && e.target.type == 'checkbox') {\r\n    if (e.target.checked == true) {\r\n      const li = e.target.parentElement;\r\n      li.classList.add('line');\r\n    } else {\r\n      const li = e.target.parentElement;\r\n      li.classList.remove('line');\r\n    }\r\n  }\r\n\r\n  const liline1 = document.querySelectorAll('.line');\r\n\r\n  for (let i = 0; i < liline1.length; i += 1) {\r\n    if (e.target.classList.contains('clear-btn')) {\r\n      console.log(list.children);\r\n      const liline = document.querySelector('.line');\r\n      liline.remove();\r\n    }\r\n  }\r\n});\r\n\r\nwindow.onbeforeunload = () => {\r\n  localStorage.removeItem('tasks');\r\n  return '';\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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