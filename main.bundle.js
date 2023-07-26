"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkladerboard"] = self["webpackChunkladerboard"] || []).push([["main"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://laderboard/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n// Id's\nconst nameInpt = document.getElementById('nameInpt');\nconst scoreInpt = document.getElementById('scoreInpt');\nconst listContainer = document.getElementById('listContainer');\nconst form = document.getElementById('form');\nconst refreshBtn = document.getElementById('refreshBtn');\n\n// Leaderboard Class setting\nclass Leaderboard {\n  constructor() {\n    this.URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\n  }\n\n  // Start the API method\n  start = async (game) => {\n    const response = await fetch(this.URL, {\n      method: 'POST',\n      body: JSON.stringify({\n        name: game,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = await response.json();\n    return data;\n  }\n\n  // Get the Users and Scores from the API method\n  getUserAndScores = async (apiId) => {\n    const response = await fetch(`${this.URL}${apiId}/scores/`);\n    const data = await response.json();\n    return data;\n  }\n\n  // Post the User and his score from the form\n  postForm = async (user, score, apiId) => {\n    const response = await fetch(`${this.URL}${apiId}/scores/`, {\n      method: 'POST',\n      body: JSON.stringify({\n        user,\n        score,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = response.json();\n    return data;\n  }\n}\n\n// Initialize the Class and set the ApiId\nconst leaderboard = new Leaderboard();\nlet apiId;\n\n// Function to start the API\nconst start = () => {\n  leaderboard\n    .start('Leaderboard Project')\n    .then((response) => response.result.split(' '))\n    .then((res) => {\n      [apiId] = [res[3]];\n    });\n};\n\n// Funtion to print the Users in the HTML\nconst printUsersAndScores = (data) => {\n  listContainer.innerHTML = '';\n  data.forEach((el) => {\n    listContainer.innerHTML += `\n      <li class=\"scores__list\">${el.user}: ${el.score}</li>\n    `;\n  });\n};\n\n// Function to get the Users and Scores\nconst getUserAndScores = () => {\n  leaderboard.getUserAndScores(apiId).then((response) => printUsersAndScores(response.result));\n};\n\n// Function to post the User and his Score\nconst postForm = () => {\n  leaderboard.postForm(nameInpt.value, scoreInpt.value, apiId);\n  nameInpt.value = '';\n  scoreInpt.value = '';\n};\n\n// Event Listeners\ndocument.addEventListener('DOMContentLoaded', start);\nrefreshBtn.addEventListener('click', getUserAndScores);\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  postForm();\n});\n\n//# sourceURL=webpack://laderboard/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);