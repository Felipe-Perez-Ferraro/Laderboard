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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ids */ \"./src/modules/ids.js\");\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functions */ \"./src/modules/functions.js\");\n\r\n\r\n\r\n\r\n// Event Listeners\r\ndocument.addEventListener('DOMContentLoaded', _modules_functions__WEBPACK_IMPORTED_MODULE_2__.getUserAndScores);\r\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.refreshBtn.addEventListener('click', _modules_functions__WEBPACK_IMPORTED_MODULE_2__.getUserAndScores);\r\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_functions__WEBPACK_IMPORTED_MODULE_2__.postForm)();\r\n});\n\n//# sourceURL=webpack://laderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserAndScores: () => (/* binding */ getUserAndScores),\n/* harmony export */   postForm: () => (/* binding */ postForm)\n/* harmony export */ });\n/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard */ \"./src/modules/leaderboard.js\");\n/* harmony import */ var _printLeaderboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printLeaderboard */ \"./src/modules/printLeaderboard.js\");\n/* harmony import */ var _ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ids */ \"./src/modules/ids.js\");\n\r\n\r\n\r\n\r\n// Initialize the Class and set the ApiId\r\nconst leaderboard = new _leaderboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n// Function to get the Users and Scores\r\nconst getUserAndScores = () => {\r\n  leaderboard.getUserAndScores().then((response) => (0,_printLeaderboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response.result));\r\n};\r\n\r\n// Function to post the User and his Score\r\nconst postForm = () => {\r\n  leaderboard.postForm(_ids__WEBPACK_IMPORTED_MODULE_2__.nameInpt.value, _ids__WEBPACK_IMPORTED_MODULE_2__.scoreInpt.value);\r\n  _ids__WEBPACK_IMPORTED_MODULE_2__.nameInpt.value = '';\r\n  _ids__WEBPACK_IMPORTED_MODULE_2__.scoreInpt.value = '';\r\n};\r\n\r\n\n\n//# sourceURL=webpack://laderboard/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/ids.js":
/*!****************************!*\
  !*** ./src/modules/ids.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   listContainer: () => (/* binding */ listContainer),\n/* harmony export */   nameInpt: () => (/* binding */ nameInpt),\n/* harmony export */   refreshBtn: () => (/* binding */ refreshBtn),\n/* harmony export */   scoreInpt: () => (/* binding */ scoreInpt)\n/* harmony export */ });\nconst nameInpt = document.getElementById('nameInpt');\r\nconst scoreInpt = document.getElementById('scoreInpt');\r\nconst listContainer = document.getElementById('listContainer');\r\nconst form = document.getElementById('form');\r\nconst refreshBtn = document.getElementById('refreshBtn');\r\n\r\n\n\n//# sourceURL=webpack://laderboard/./src/modules/ids.js?");

/***/ }),

/***/ "./src/modules/leaderboard.js":
/*!************************************!*\
  !*** ./src/modules/leaderboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Leaderboard)\n/* harmony export */ });\nclass Leaderboard {\r\n  constructor() {\r\n    this.URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\r\n    this.API = 'luf2eRQ3AvnQOJNDWRPw';\r\n  }\r\n\r\n  // Get the Users and Scores from the API method\r\n  getUserAndScores = async () => {\r\n    const response = await fetch(`${this.URL}${this.API}/scores/`);\r\n    const data = await response.json();\r\n    return data;\r\n  }\r\n\r\n  // Post the User and his score from the form\r\n  postForm = async (user, score) => {\r\n    const response = await fetch(`${this.URL}${this.API}/scores/`, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        user,\r\n        score,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n    const data = response.json();\r\n    return data;\r\n  }\r\n}\n\n//# sourceURL=webpack://laderboard/./src/modules/leaderboard.js?");

/***/ }),

/***/ "./src/modules/printLeaderboard.js":
/*!*****************************************!*\
  !*** ./src/modules/printLeaderboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ids */ \"./src/modules/ids.js\");\n\r\n\r\nconst printUsersAndScores = (data) => {\r\n  _ids__WEBPACK_IMPORTED_MODULE_0__.listContainer.innerHTML = '';\r\n  data.forEach((el) => {\r\n    _ids__WEBPACK_IMPORTED_MODULE_0__.listContainer.innerHTML += `\r\n      <li class=\"scores__list\">${el.user}: ${el.score}</li>\r\n    `;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printUsersAndScores);\n\n//# sourceURL=webpack://laderboard/./src/modules/printLeaderboard.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);