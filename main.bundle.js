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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ids */ \"./src/modules/ids.js\");\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functions */ \"./src/modules/functions.js\");\n\n\n\n\n// Event Listeners\ndocument.addEventListener('DOMContentLoaded', _modules_functions__WEBPACK_IMPORTED_MODULE_2__.start);\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.refreshBtn.addEventListener('click', _modules_functions__WEBPACK_IMPORTED_MODULE_2__.getUserAndScores);\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_functions__WEBPACK_IMPORTED_MODULE_2__.postForm)();\n});\n\n//# sourceURL=webpack://laderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserAndScores: () => (/* binding */ getUserAndScores),\n/* harmony export */   postForm: () => (/* binding */ postForm),\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard */ \"./src/modules/leaderboard.js\");\n/* harmony import */ var _printLeaderboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printLeaderboard */ \"./src/modules/printLeaderboard.js\");\n/* harmony import */ var _ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ids */ \"./src/modules/ids.js\");\n\n\n\n\n// Initialize the Class and set the ApiId\nconst leaderboard = new _leaderboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet apiId;\n\n// Function to start the API\nconst start = () => {\n  leaderboard\n    .start('Leaderboard Project')\n    .then((response) => response.result.split(' '))\n    .then((res) => {\n      [apiId] = [res[3]];\n    });\n};\n\n// Function to get the Users and Scores\nconst getUserAndScores = () => {\n  leaderboard.getUserAndScores(apiId).then((response) => (0,_printLeaderboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response.result));\n};\n\n// Function to post the User and his Score\nconst postForm = () => {\n  leaderboard.postForm(_ids__WEBPACK_IMPORTED_MODULE_2__.nameInpt.value, _ids__WEBPACK_IMPORTED_MODULE_2__.scoreInpt.value, apiId);\n  _ids__WEBPACK_IMPORTED_MODULE_2__.nameInpt.value = '';\n  _ids__WEBPACK_IMPORTED_MODULE_2__.scoreInpt.value = '';\n};\n\n\n\n//# sourceURL=webpack://laderboard/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/ids.js":
/*!****************************!*\
  !*** ./src/modules/ids.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   listContainer: () => (/* binding */ listContainer),\n/* harmony export */   nameInpt: () => (/* binding */ nameInpt),\n/* harmony export */   refreshBtn: () => (/* binding */ refreshBtn),\n/* harmony export */   scoreInpt: () => (/* binding */ scoreInpt)\n/* harmony export */ });\nconst nameInpt = document.getElementById('nameInpt');\nconst scoreInpt = document.getElementById('scoreInpt');\nconst listContainer = document.getElementById('listContainer');\nconst form = document.getElementById('form');\nconst refreshBtn = document.getElementById('refreshBtn');\n\n\n\n//# sourceURL=webpack://laderboard/./src/modules/ids.js?");

/***/ }),

/***/ "./src/modules/leaderboard.js":
/*!************************************!*\
  !*** ./src/modules/leaderboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Leaderboard)\n/* harmony export */ });\nclass Leaderboard {\n  constructor() {\n    this.URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\n  }\n\n  // Start the API method\n  start = async (game) => {\n    const response = await fetch(this.URL, {\n      method: 'POST',\n      body: JSON.stringify({\n        name: game,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = await response.json();\n    return data;\n  }\n\n  // Get the Users and Scores from the API method\n  getUserAndScores = async (apiId) => {\n    const response = await fetch(`${this.URL}${apiId}/scores/`);\n    const data = await response.json();\n    return data;\n  }\n\n  // Post the User and his score from the form\n  postForm = async (user, score, apiId) => {\n    const response = await fetch(`${this.URL}${apiId}/scores/`, {\n      method: 'POST',\n      body: JSON.stringify({\n        user,\n        score,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = response.json();\n    return data;\n  }\n}\n\n//# sourceURL=webpack://laderboard/./src/modules/leaderboard.js?");

/***/ }),

/***/ "./src/modules/printLeaderboard.js":
/*!*****************************************!*\
  !*** ./src/modules/printLeaderboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ids */ \"./src/modules/ids.js\");\n\n\nconst printUsersAndScores = (data) => {\n  _ids__WEBPACK_IMPORTED_MODULE_0__.listContainer.innerHTML = '';\n  data.forEach((el) => {\n    _ids__WEBPACK_IMPORTED_MODULE_0__.listContainer.innerHTML += `\n      <li class=\"scores__list\">${el.user}: ${el.score}</li>\n    `;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printUsersAndScores);\n\n//# sourceURL=webpack://laderboard/./src/modules/printLeaderboard.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);