webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignupForm.js":
/*!**********************************!*\
  !*** ./components/SignupForm.js ***!
  \**********************************/
/*! exports provided: SignupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignupForm\", function() { return SignupForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/signup.module.css */ \"./styles/signup.module.css\");\n/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/chris/dev/javascript/chris-behan.github.io/components/SignupForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction SignupForm() {\n  _s();\n\n  var mailChimpURL = 'https://chrisbehan.us6.list-manage.com/subscribe/post?u=0b20b88aeb38038fee452a64e&amp;id=ef13d3d07a';\n  var mailChimpUser = '0b20b88aeb38038fee452a64e';\n  var mailChimpID = 'ef13d3d07a';\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.signUpForm,\n    action: mailChimpURL,\n    method: \"POST\",\n    noValidate: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"u\",\n    value: mailChimpUser,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"id\",\n    value: mailChimpID,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Email\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"EMAIL\",\n    id: \"email\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    autoCapitalize: \"off\",\n    autoCorrect: \"off\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  })), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Subscribe\",\n    name: \"subscribe\",\n    id: \"mc-embedded-subscribe\",\n    className: \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      position: 'absolute',\n      left: '-5000px'\n    },\n    \"aria-hidden\": \"true\",\n    \"aria-label\": \"Please leave the following three fields empty\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Name: \"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"b_name\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"Freddie\",\n    id: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"Email: \"), __jsx(\"input\", {\n    type: \"email\",\n    name: \"b_email\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"youremail@gmail.com\",\n    id: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, \"Comment: \"), __jsx(\"textarea\", {\n    name: \"b_comment\",\n    tabIndex: \"-1\",\n    placeholder: \"Please comment\",\n    id: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(SignupForm, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n\n_c = SignupForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignupForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzP2IxZjIiXSwibmFtZXMiOlsiU2lnbnVwRm9ybSIsIm1haWxDaGltcFVSTCIsIm1haWxDaGltcFVzZXIiLCJtYWlsQ2hpbXBJRCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInN0eWxlcyIsInNpZ25VcEZvcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwb3NpdGlvbiIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUMzQixNQUFNQyxZQUFZLEdBQUcscUdBQXJCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLDJCQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQjs7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFQyxnRUFBTSxDQUFDQyxVQUF4QjtBQUFvQyxVQUFNLEVBQUVQLFlBQTVDO0FBQTBELFVBQU0sRUFBQyxNQUFqRTtBQUF3RSxjQUFVLE1BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUksRUFBQyxHQUExQjtBQUE4QixTQUFLLEVBQUVDLGFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLElBQTFCO0FBQStCLFNBQUssRUFBRUMsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRUU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsTUFBRSxFQUFDLE9BSEw7QUFJRSxTQUFLLEVBQUVFLEtBSlQ7QUFLRSxZQUFRLEVBQUUsa0JBQUNJLENBQUQ7QUFBQSxhQUFPSCxRQUFRLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUxaO0FBTUUsa0JBQWMsRUFBQyxLQU5qQjtBQU9FLGVBQVcsRUFBQyxLQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUhGLEVBZ0JFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFdBQTNCO0FBQXVDLFFBQUksRUFBQyxXQUE1QztBQUF3RCxNQUFFLEVBQUMsdUJBQTNEO0FBQW1GLGFBQVMsRUFBQyxRQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBbUJFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxVQUFaO0FBQXdCQyxVQUFJLEVBQUU7QUFBOUIsS0FBWjtBQUF1RCxtQkFBWSxNQUFuRTtBQUEwRSxrQkFBVywrQ0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsUUFBeEI7QUFBaUMsWUFBUSxFQUFDLElBQTFDO0FBQStDLFNBQUssRUFBQyxFQUFyRDtBQUF3RCxlQUFXLEVBQUMsU0FBcEU7QUFBOEUsTUFBRSxFQUFDLFFBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUlFO0FBQU8sV0FBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLEVBS0U7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixRQUFJLEVBQUMsU0FBekI7QUFBbUMsWUFBUSxFQUFDLElBQTVDO0FBQWlELFNBQUssRUFBQyxFQUF2RDtBQUEwRCxlQUFXLEVBQUMscUJBQXRFO0FBQTRGLE1BQUUsRUFBQyxTQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFPRTtBQUFPLFdBQU8sRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsRUFRRTtBQUFVLFFBQUksRUFBQyxXQUFmO0FBQTJCLFlBQVEsRUFBQyxJQUFwQztBQUF5QyxlQUFXLEVBQUMsZ0JBQXJEO0FBQXNFLE1BQUUsRUFBQyxXQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FuQkYsQ0FERixDQURGO0FBbUNEOztHQXhDZWIsVTs7S0FBQUEsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lnbnVwRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NpZ251cC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWdudXBGb3JtKCkge1xuICBjb25zdCBtYWlsQ2hpbXBVUkwgPSAnaHR0cHM6Ly9jaHJpc2JlaGFuLnVzNi5saXN0LW1hbmFnZS5jb20vc3Vic2NyaWJlL3Bvc3Q/dT0wYjIwYjg4YWViMzgwMzhmZWU0NTJhNjRlJmFtcDtpZD1lZjEzZDNkMDdhJztcbiAgY29uc3QgbWFpbENoaW1wVXNlciA9ICcwYjIwYjg4YWViMzgwMzhmZWU0NTJhNjRlJztcbiAgY29uc3QgbWFpbENoaW1wSUQgPSAnZWYxM2QzZDA3YSc7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zaWduVXBGb3JtfSBhY3Rpb249e21haWxDaGltcFVSTH0gbWV0aG9kPVwiUE9TVFwiIG5vVmFsaWRhdGU+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVcIiB2YWx1ZT17bWFpbENoaW1wVXNlcn0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiB2YWx1ZT17bWFpbENoaW1wSUR9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+XG4gICAgICAgICAgRW1haWxcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiRU1BSUxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGF1dG9DYXBpdGFsaXplPVwib2ZmXCJcbiAgICAgICAgICAgIGF1dG9Db3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJzY3JpYmVcIiBuYW1lPVwic3Vic2NyaWJlXCIgaWQ9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmVcIiBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxuXG4gICAgICAgIHsvKiBQcm90ZWN0cyBhZ2FpbnN0IGJvdHMgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICctNTAwMHB4JyB9fSBhcmlhLWhpZGRlbj0ndHJ1ZScgYXJpYS1sYWJlbD1cIlBsZWFzZSBsZWF2ZSB0aGUgZm9sbG93aW5nIHRocmVlIGZpZWxkcyBlbXB0eVwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYl9uYW1lXCI+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYl9uYW1lXCIgdGFiSW5kZXg9XCItMVwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJGcmVkZGllXCIgaWQ9XCJiX25hbWVcIiAvPlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiX2VtYWlsXCI+RW1haWw6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJiX2VtYWlsXCIgdGFiSW5kZXg9XCItMVwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ5b3VyZW1haWxAZ21haWwuY29tXCIgaWQ9XCJiX2VtYWlsXCIgLz5cblxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYl9jb21tZW50XCI+Q29tbWVudDogPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImJfY29tbWVudFwiIHRhYkluZGV4PVwiLTFcIiBwbGFjZWhvbGRlcj1cIlBsZWFzZSBjb21tZW50XCIgaWQ9XCJiX2NvbW1lbnRcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignupForm.js\n");

/***/ })

})