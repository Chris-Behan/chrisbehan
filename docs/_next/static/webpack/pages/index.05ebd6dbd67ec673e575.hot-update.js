webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignupForm.js":
/*!**********************************!*\
  !*** ./components/SignupForm.js ***!
  \**********************************/
/*! exports provided: SignupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignupForm\", function() { return SignupForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/chris/dev/javascript/chris-behan.github.io/components/SignupForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction SignupForm() {\n  _s();\n\n  var mailChimpURL = 'https://chrisbehan.us6.list-manage.com/subscribe/post?u=0b20b88aeb38038fee452a64e&amp;id=ef13d3d07a';\n  var mailChimpUser = '0b20b88aeb38038fee452a64e';\n  var mailChimpID = 'ef13d3d07a';\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, \"Subscribe\"), __jsx(\"form\", {\n    action: \"https://cool.us16.list-manage.com/subscribe/post\",\n    method: \"POST\",\n    noValidate: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"u\",\n    value: \"eb05e4f830c2a04be30171b01\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"id\",\n    value: \"8281a64779\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"MERGE0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Email\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"EMAIL\",\n    id: \"MERGE0\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    autoCapitalize: \"off\",\n    autoCorrect: \"off\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  })), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Subscribe\",\n    name: \"subscribe\",\n    id: \"mc-embedded-subscribe\",\n    className: \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      position: 'absolute',\n      left: '-5000px'\n    },\n    \"aria-hidden\": \"true\",\n    \"aria-label\": \"Please leave the following three fields empty\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"Name: \"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"b_name\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"Freddie\",\n    id: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"Email: \"), __jsx(\"input\", {\n    type: \"email\",\n    name: \"b_email\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"youremail@gmail.com\",\n    id: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"Comment: \"), __jsx(\"textarea\", {\n    name: \"b_comment\",\n    tabIndex: \"-1\",\n    placeholder: \"Please comment\",\n    id: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(SignupForm, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n\n_c = SignupForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignupForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzP2IxZjIiXSwibmFtZXMiOlsiU2lnbnVwRm9ybSIsIm1haWxDaGltcFVSTCIsIm1haWxDaGltcFVzZXIiLCJtYWlsQ2hpbXBJRCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBvc2l0aW9uIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDM0IsTUFBTUMsWUFBWSxHQUFHLHFHQUFyQjtBQUNBLE1BQU1DLGFBQWEsR0FBRywyQkFBdEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsWUFBcEI7O0FBQ0Esa0JBQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBTSxVQUFNLEVBQUMsa0RBQWI7QUFBZ0UsVUFBTSxFQUFDLE1BQXZFO0FBQThFLGNBQVUsTUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLEdBQTFCO0FBQThCLFNBQUssRUFBQywyQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsSUFBMUI7QUFBK0IsU0FBSyxFQUFDLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU8sV0FBTyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUVFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLE1BQUUsRUFBQyxRQUhMO0FBSUUsU0FBSyxFQUFFRCxLQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsYUFBT0QsUUFBUSxDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FMWjtBQU1FLGtCQUFjLEVBQUMsS0FOakI7QUFPRSxlQUFXLEVBQUMsS0FQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FIRixFQWdCRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxXQUEzQjtBQUF1QyxRQUFJLEVBQUMsV0FBNUM7QUFBd0QsTUFBRSxFQUFDLHVCQUEzRDtBQUFtRixhQUFTLEVBQUMsUUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWtCRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsVUFBWjtBQUF3QkMsVUFBSSxFQUFFO0FBQTlCLEtBQVo7QUFBdUQsbUJBQVksTUFBbkU7QUFBMEUsa0JBQVcsK0NBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFFBQXhCO0FBQWlDLFlBQVEsRUFBQyxJQUExQztBQUErQyxTQUFLLEVBQUMsRUFBckQ7QUFBd0QsZUFBVyxFQUFDLFNBQXBFO0FBQThFLE1BQUUsRUFBQyxRQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQUtFO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsUUFBSSxFQUFDLFNBQXpCO0FBQW1DLFlBQVEsRUFBQyxJQUE1QztBQUFpRCxTQUFLLEVBQUMsRUFBdkQ7QUFBMEQsZUFBVyxFQUFDLHFCQUF0RTtBQUE0RixNQUFFLEVBQUMsU0FBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBT0U7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLEVBUUU7QUFBVSxRQUFJLEVBQUMsV0FBZjtBQUEyQixZQUFRLEVBQUMsSUFBcEM7QUFBeUMsZUFBVyxFQUFDLGdCQUFyRDtBQUFzRSxNQUFFLEVBQUMsV0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBbEJGLENBRkYsQ0FERjtBQW1DRDs7R0F4Q2VYLFU7O0tBQUFBLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZ251cEZvcm0oKSB7XG4gIGNvbnN0IG1haWxDaGltcFVSTCA9ICdodHRwczovL2NocmlzYmVoYW4udXM2Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTBiMjBiODhhZWIzODAzOGZlZTQ1MmE2NGUmYW1wO2lkPWVmMTNkM2QwN2EnO1xuICBjb25zdCBtYWlsQ2hpbXBVc2VyID0gJzBiMjBiODhhZWIzODAzOGZlZTQ1MmE2NGUnO1xuICBjb25zdCBtYWlsQ2hpbXBJRCA9ICdlZjEzZDNkMDdhJztcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5TdWJzY3JpYmU8L2gyPlxuICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9jb29sLnVzMTYubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0XCIgbWV0aG9kPVwiUE9TVFwiIG5vVmFsaWRhdGU+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVcIiB2YWx1ZT1cImViMDVlNGY4MzBjMmEwNGJlMzAxNzFiMDFcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIHZhbHVlPVwiODI4MWE2NDc3OVwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdNRVJHRTAnPlxuICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cIkVNQUlMXCJcbiAgICAgICAgICAgIGlkPVwiTUVSR0UwXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NhcGl0YWxpemU9XCJvZmZcIlxuICAgICAgICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1YnNjcmliZVwiIG5hbWU9XCJzdWJzY3JpYmVcIiBpZD1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZVwiIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJy01MDAwcHgnIH19IGFyaWEtaGlkZGVuPSd0cnVlJyBhcmlhLWxhYmVsPVwiUGxlYXNlIGxlYXZlIHRoZSBmb2xsb3dpbmcgdGhyZWUgZmllbGRzIGVtcHR5XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiX25hbWVcIj5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiX25hbWVcIiB0YWJJbmRleD1cIi0xXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkZyZWRkaWVcIiBpZD1cImJfbmFtZVwiIC8+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJfZW1haWxcIj5FbWFpbDogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImJfZW1haWxcIiB0YWJJbmRleD1cIi0xXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInlvdXJlbWFpbEBnbWFpbC5jb21cIiBpZD1cImJfZW1haWxcIiAvPlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiX2NvbW1lbnRcIj5Db21tZW50OiA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiYl9jb21tZW50XCIgdGFiSW5kZXg9XCItMVwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGNvbW1lbnRcIiBpZD1cImJfY29tbWVudFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignupForm.js\n");

/***/ })

})