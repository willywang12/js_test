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

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* config.js */\n// require and configure dotenv, will load vars in .env in PROCESS.ENV\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst config = {\n  version: '1.0.0',\n  env: 'development',\n  port: '3000'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://nodejs/./src/config/config.js?");

/***/ }),

/***/ "./src/config/express.js":
/*!*******************************!*\
  !*** ./src/config/express.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config/config.js\");\n/* harmony import */ var _server_routes_index_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/routes/index.route */ \"./src/server/routes/index.route.js\");\n/* express.js */\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n/* GET home page. */\n\napp.get('/', (req, res) => {\n  res.send(`server started on  port http://127.0.0.1:${_config__WEBPACK_IMPORTED_MODULE_1__.default.port} (${_config__WEBPACK_IMPORTED_MODULE_1__.default.env})`);\n});\napp.use('/api', _server_routes_index_route__WEBPACK_IMPORTED_MODULE_2__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://nodejs/./src/config/express.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n/* harmony import */ var _config_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/express */ \"./src/config/express.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nif (!module.parent) {\n  // listen on port config.port\n  _config_express__WEBPACK_IMPORTED_MODULE_1__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.port, () => {\n    const factories = [{\n      name: \"BR1\",\n      employees: [\"John\", \"Alice\", \"Bob\", \"Jessie\", \"Karen\"]\n    }, {\n      name: \"BR2\",\n      employees: [\"Jessie\", \"Karen\", \"John\"]\n    }, {\n      name: \"BR3\",\n      employees: [\"Miles\", \"Eric\", \"Henry\", \"Bob\"]\n    }, {\n      name: \"BR4\",\n      employees: []\n    }];\n    const employeeType = [{\n      id: 1,\n      \"name\": \"FullTime\",\n      work_begin: \"09:00:00\",\n      work_end: \"17:00:00\"\n    }, {\n      id: 2,\n      \"name\": \"MidTime\",\n      work_begin: \"12:00:00\",\n      work_end: \"21:00:00\"\n    }, {\n      id: 3,\n      \"name\": \"HalfTime\",\n      work_begin: \"20:00:00\",\n      work_end: \"00:00:00\"\n    }];\n    const employees = [{\n      id: 1,\n      name: \"Alice\",\n      type: 2\n    }, {\n      id: 2,\n      name: \"Bob\",\n      type: 3\n    }, {\n      id: 3,\n      name: \"John\",\n      type: 2\n    }, {\n      id: 4,\n      name: \"Karen\",\n      type: 1\n    }, {\n      id: 5,\n      name: \"Miles\",\n      type: 3\n    }, {\n      id: 6,\n      name: \"Henry\",\n      type: 1\n    }];\n    const tasks = [{\n      id: 1,\n      title: \"task01\",\n      duration: 60\n    }, {\n      id: 2,\n      title: \"task02\",\n      duration: 120\n    }, {\n      id: 3,\n      title: \"task03\",\n      duration: 180\n    }, {\n      id: 4,\n      title: \"task04\",\n      duration: 360\n    }, {\n      id: 5,\n      title: \"task05\",\n      duration: 30\n    }, {\n      id: 6,\n      title: \"task06\",\n      duration: 220\n    }, {\n      id: 7,\n      title: \"task07\",\n      duration: 640\n    }, {\n      id: 8,\n      title: \"task08\",\n      duration: 250\n    }, {\n      id: 9,\n      title: \"task09\",\n      duration: 119\n    }, {\n      id: 10,\n      title: \"task10\",\n      duration: 560\n    }, {\n      id: 11,\n      title: \"task11\",\n      duration: 340\n    }, {\n      id: 12,\n      title: \"task12\",\n      duration: 45\n    }, {\n      id: 13,\n      title: \"task13\",\n      duration: 86\n    }, {\n      id: 14,\n      title: \"task14\",\n      duration: 480\n    }, {\n      id: 15,\n      title: \"task15\",\n      duration: 900\n    }]; // convert time string to seconds and calculate work hours \n\n    employeeType.forEach(function (type) {\n      type.work_begin = timeToSec(type.work_begin);\n      type.work_end = timeToSec(type.work_end);\n      type.work_hour = (type.work_end - type.work_begin) / 3600;\n      type.work_hour = type.work_hour < 0 ? type.work_hour + 24 : type.work_hour;\n    }); // Q1\n\n    function countEmployeesByFactory(factories) {\n      var employeeNumber = [];\n      factories.forEach(function (factory) {\n        employeeNumber.push({\n          name: factory.name,\n          count: factory.employees.length\n        });\n      });\n      return employeeNumber;\n    } // Q2\n\n\n    function countFactoriesByEmployee(factories) {\n      var obj = {};\n      var factoryNumber = [];\n      factories.forEach(function (factory) {\n        factory.employees.forEach(function (employee) {\n          obj[employee] = obj[employee] + 1 || 1;\n        });\n      });\n      Object.keys(obj).forEach(function (key) {\n        factoryNumber.push({\n          employee: key,\n          count: obj[key]\n        });\n      });\n      return factoryNumber;\n    } // Q3\n\n\n    function orderEmployeesList(factories) {\n      factories.forEach(function (factory) {\n        factory.employees.sort();\n      });\n      return factories;\n    } // Q4\n\n\n    function countTotalWorkHours(employees, employeeType) {\n      var totalHours = 0;\n      employees.forEach(function (employee) {\n        totalHours += employeeType.find(type => type.id === employee.type).work_hour;\n      });\n      return totalHours;\n    } // Q5\n\n\n    function howManyEmployeeByTime(employeeType, employees, dayTime) {\n      var time = timeToSec(dayTime);\n      var typeId = [];\n      var count = 0; // find out all type whose working hours contains day time\n\n      employeeType.forEach(function (type) {\n        if (timeBetween(time, type.work_begin, type.work_end)) {\n          typeId.push(type.id);\n        }\n      });\n      employees.forEach(function (employee) {\n        if (typeId.includes(employee.type)) {\n          count++;\n        }\n      });\n      return count;\n    } // Q6\n\n\n    function countDaysOfWork(tasks, employees, employeeType) {\n      var totalDuration = 0; // count total duration\n\n      tasks.forEach(function (task) {\n        totalDuration += task.duration;\n      });\n      return Math.ceil(totalDuration / countTotalWorkHours(employees, employeeType));\n    }\n\n    function timeToSec(timeString) {\n      var time = moment__WEBPACK_IMPORTED_MODULE_2___default()(timeString, \"HH:mm:ss\").diff(moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('day'), 'seconds');\n      return time;\n    }\n\n    function timeBetween(time, beg, end) {\n      if (end < beg) {\n        return time >= beg || time <= end;\n      } else {\n        return beg <= time && time <= end;\n      }\n    } // console.log(countEmployeesByFactory(factories));\n    // console.log(countFactoriesByEmployee(factories));\n    // console.log(orderEmployeesList(factories));\n    // console.log(countTotalWorkHours(employees, employeeType));\n    // console.log(howManyEmployeeByTime(employeeType, employees, \"17:00:00\"));\n    // console.log(countDaysOfWork(tasks, employees, employeeType));\n\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_express__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://nodejs/./src/index.js?");

/***/ }),

/***/ "./src/server/routes/index.route.js":
/*!******************************************!*\
  !*** ./src/server/routes/index.route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../config/config */ \"./src/config/config.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n/* GET localhost:[port]/api page. */\n\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:${_config_config__WEBPACK_IMPORTED_MODULE_1__.default.port}/api`);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nodejs/./src/server/routes/index.route.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;