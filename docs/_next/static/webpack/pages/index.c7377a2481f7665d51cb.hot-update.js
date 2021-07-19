webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignupForm.js":
/*!**********************************!*\
  !*** ./components/SignupForm.js ***!
  \**********************************/
/*! exports provided: SignupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignupForm\", function() { return SignupForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/chris/dev/javascript/chris-behan.github.io/components/SignupForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction SignupForm() {\n  _s();\n\n  var mailChimpURL = 'https://chrisbehan.us6.list-manage.com/subscribe/post?u=0b20b88aeb38038fee452a64e&amp;id=ef13d3d07a';\n  var mailChimpUser = '0b20b88aeb38038fee452a64e';\n  var mailChimpID = 'ef13d3d07a';\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"Subscribe\"), __jsx(\"form\", {\n    action: mailChimpURL,\n    method: \"POST\",\n    noValidate: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"u\",\n    value: mailChimpUser,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"id\",\n    value: mailChimpID,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"MERGE0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"Email\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"EMAIL\",\n    id: \"MERGE0\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    autoCapitalize: \"off\",\n    autoCorrect: \"off\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  })), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Subscribe\",\n    name: \"subscribe\",\n    id: \"mc-embedded-subscribe\",\n    className: \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      position: 'absolute',\n      left: '-5000px'\n    },\n    \"aria-hidden\": \"true\",\n    \"aria-label\": \"Please leave the following three fields empty\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"Name: \"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"b_name\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"Freddie\",\n    id: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"Email: \"), __jsx(\"input\", {\n    type: \"email\",\n    name: \"b_email\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"youremail@gmail.com\",\n    id: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"Comment: \"), __jsx(\"textarea\", {\n    name: \"b_comment\",\n    tabIndex: \"-1\",\n    placeholder: \"Please comment\",\n    id: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(SignupForm, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n\n_c = SignupForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignupForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzP2IxZjIiXSwibmFtZXMiOlsiU2lnbnVwRm9ybSIsIm1haWxDaGltcFVSTCIsIm1haWxDaGltcFVzZXIiLCJtYWlsQ2hpbXBJRCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBvc2l0aW9uIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQzNCLE1BQU1DLFlBQVksR0FBRyxxR0FBckI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsMkJBQXRCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFlBQXBCOztBQUNBLGtCQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQU0sVUFBTSxFQUFFTCxZQUFkO0FBQTRCLFVBQU0sRUFBQyxNQUFuQztBQUEwQyxjQUFVLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUksRUFBQyxHQUExQjtBQUE4QixTQUFLLEVBQUVDLGFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLElBQTFCO0FBQStCLFNBQUssRUFBRUMsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTyxXQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRUU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsTUFBRSxFQUFDLFFBSEw7QUFJRSxTQUFLLEVBQUVFLEtBSlQ7QUFLRSxZQUFRLEVBQUUsa0JBQUNFLENBQUQ7QUFBQSxhQUFPRCxRQUFRLENBQUNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUxaO0FBTUUsa0JBQWMsRUFBQyxLQU5qQjtBQU9FLGVBQVcsRUFBQyxLQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUhGLEVBZ0JFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFdBQTNCO0FBQXVDLFFBQUksRUFBQyxXQUE1QztBQUF3RCxNQUFFLEVBQUMsdUJBQTNEO0FBQW1GLGFBQVMsRUFBQyxRQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBbUJFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxVQUFaO0FBQXdCQyxVQUFJLEVBQUU7QUFBOUIsS0FBWjtBQUF1RCxtQkFBWSxNQUFuRTtBQUEwRSxrQkFBVywrQ0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsUUFBeEI7QUFBaUMsWUFBUSxFQUFDLElBQTFDO0FBQStDLFNBQUssRUFBQyxFQUFyRDtBQUF3RCxlQUFXLEVBQUMsU0FBcEU7QUFBOEUsTUFBRSxFQUFDLFFBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUlFO0FBQU8sV0FBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLEVBS0U7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixRQUFJLEVBQUMsU0FBekI7QUFBbUMsWUFBUSxFQUFDLElBQTVDO0FBQWlELFNBQUssRUFBQyxFQUF2RDtBQUEwRCxlQUFXLEVBQUMscUJBQXRFO0FBQTRGLE1BQUUsRUFBQyxTQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFPRTtBQUFPLFdBQU8sRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsRUFRRTtBQUFVLFFBQUksRUFBQyxXQUFmO0FBQTJCLFlBQVEsRUFBQyxJQUFwQztBQUF5QyxlQUFXLEVBQUMsZ0JBQXJEO0FBQXNFLE1BQUUsRUFBQyxXQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FuQkYsQ0FGRixDQURGO0FBb0NEOztHQXpDZVgsVTs7S0FBQUEsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lnbnVwRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWdudXBGb3JtKCkge1xuICBjb25zdCBtYWlsQ2hpbXBVUkwgPSAnaHR0cHM6Ly9jaHJpc2JlaGFuLnVzNi5saXN0LW1hbmFnZS5jb20vc3Vic2NyaWJlL3Bvc3Q/dT0wYjIwYjg4YWViMzgwMzhmZWU0NTJhNjRlJmFtcDtpZD1lZjEzZDNkMDdhJztcbiAgY29uc3QgbWFpbENoaW1wVXNlciA9ICcwYjIwYjg4YWViMzgwMzhmZWU0NTJhNjRlJztcbiAgY29uc3QgbWFpbENoaW1wSUQgPSAnZWYxM2QzZDA3YSc7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+U3Vic2NyaWJlPC9oMj5cbiAgICAgIDxmb3JtIGFjdGlvbj17bWFpbENoaW1wVVJMfSBtZXRob2Q9XCJQT1NUXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidVwiIHZhbHVlPXttYWlsQ2hpbXBVc2VyfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIHZhbHVlPXttYWlsQ2hpbXBJRH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J01FUkdFMCc+XG4gICAgICAgICAgRW1haWxcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiRU1BSUxcIlxuICAgICAgICAgICAgaWQ9XCJNRVJHRTBcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ2FwaXRhbGl6ZT1cIm9mZlwiXG4gICAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgbmFtZT1cInN1YnNjcmliZVwiIGlkPVwibWMtZW1iZWRkZWQtc3Vic2NyaWJlXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cblxuICAgICAgICB7LyogUHJvdGVjdHMgYWdhaW5zdCBib3RzICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTUwMDBweCcgfX0gYXJpYS1oaWRkZW49J3RydWUnIGFyaWEtbGFiZWw9XCJQbGVhc2UgbGVhdmUgdGhlIGZvbGxvd2luZyB0aHJlZSBmaWVsZHMgZW1wdHlcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJfbmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJfbmFtZVwiIHRhYkluZGV4PVwiLTFcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiRnJlZGRpZVwiIGlkPVwiYl9uYW1lXCIgLz5cblxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYl9lbWFpbFwiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiYl9lbWFpbFwiIHRhYkluZGV4PVwiLTFcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwieW91cmVtYWlsQGdtYWlsLmNvbVwiIGlkPVwiYl9lbWFpbFwiIC8+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJfY29tbWVudFwiPkNvbW1lbnQ6IDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJiX2NvbW1lbnRcIiB0YWJJbmRleD1cIi0xXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgY29tbWVudFwiIGlkPVwiYl9jb21tZW50XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignupForm.js\n");

/***/ })

})