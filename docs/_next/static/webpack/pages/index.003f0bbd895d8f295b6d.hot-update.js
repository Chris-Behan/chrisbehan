webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignupForm.js":
/*!**********************************!*\
  !*** ./components/SignupForm.js ***!
  \**********************************/
/*! exports provided: SignupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignupForm\", function() { return SignupForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/signup.module.css */ \"./styles/signup.module.css\");\n/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/chris/dev/javascript/chris-behan.github.io/components/SignupForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction SignupForm() {\n  _s();\n\n  var mailChimpURL = 'https://chrisbehan.us6.list-manage.com/subscribe/post?u=0b20b88aeb38038fee452a64e&amp;id=ef13d3d07a';\n  var mailChimpUser = '0b20b88aeb38038fee452a64e';\n  var mailChimpID = 'ef13d3d07a';\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"Subscribe\"), __jsx(\"form\", {\n    className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.signUpForm,\n    action: mailChimpURL,\n    method: \"POST\",\n    noValidate: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"u\",\n    value: mailChimpUser,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"id\",\n    value: mailChimpID,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"MERGE0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"Email\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"EMAIL\",\n    id: \"MERGE0\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    autoCapitalize: \"off\",\n    autoCorrect: \"off\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  })), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Subscribe\",\n    name: \"subscribe\",\n    id: \"mc-embedded-subscribe\",\n    className: \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      position: 'absolute',\n      left: '-5000px'\n    },\n    \"aria-hidden\": \"true\",\n    \"aria-label\": \"Please leave the following three fields empty\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"Name: \"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"b_name\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"Freddie\",\n    id: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"Email: \"), __jsx(\"input\", {\n    type: \"email\",\n    name: \"b_email\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"youremail@gmail.com\",\n    id: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"Comment: \"), __jsx(\"textarea\", {\n    name: \"b_comment\",\n    tabIndex: \"-1\",\n    placeholder: \"Please comment\",\n    id: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(SignupForm, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n\n_c = SignupForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignupForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzP2IxZjIiXSwibmFtZXMiOlsiU2lnbnVwRm9ybSIsIm1haWxDaGltcFVSTCIsIm1haWxDaGltcFVzZXIiLCJtYWlsQ2hpbXBJRCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInN0eWxlcyIsInNpZ25VcEZvcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwb3NpdGlvbiIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUMzQixNQUFNQyxZQUFZLEdBQUcscUdBQXJCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLDJCQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQjs7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFNLGFBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0MsVUFBeEI7QUFBb0MsVUFBTSxFQUFFUCxZQUE1QztBQUEwRCxVQUFNLEVBQUMsTUFBakU7QUFBd0UsY0FBVSxNQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsR0FBMUI7QUFBOEIsU0FBSyxFQUFFQyxhQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUksRUFBQyxJQUExQjtBQUErQixTQUFLLEVBQUVDLFdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU8sV0FBTyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUVFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLE1BQUUsRUFBQyxRQUhMO0FBSUUsU0FBSyxFQUFFRSxLQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsYUFBT0gsUUFBUSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FMWjtBQU1FLGtCQUFjLEVBQUMsS0FOakI7QUFPRSxlQUFXLEVBQUMsS0FQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FIRixFQWdCRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxXQUEzQjtBQUF1QyxRQUFJLEVBQUMsV0FBNUM7QUFBd0QsTUFBRSxFQUFDLHVCQUEzRDtBQUFtRixhQUFTLEVBQUMsUUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQW1CRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsVUFBWjtBQUF3QkMsVUFBSSxFQUFFO0FBQTlCLEtBQVo7QUFBdUQsbUJBQVksTUFBbkU7QUFBMEUsa0JBQVcsK0NBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFFBQXhCO0FBQWlDLFlBQVEsRUFBQyxJQUExQztBQUErQyxTQUFLLEVBQUMsRUFBckQ7QUFBd0QsZUFBVyxFQUFDLFNBQXBFO0FBQThFLE1BQUUsRUFBQyxRQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQUtFO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsUUFBSSxFQUFDLFNBQXpCO0FBQW1DLFlBQVEsRUFBQyxJQUE1QztBQUFpRCxTQUFLLEVBQUMsRUFBdkQ7QUFBMEQsZUFBVyxFQUFDLHFCQUF0RTtBQUE0RixNQUFFLEVBQUMsU0FBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBT0U7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLEVBUUU7QUFBVSxRQUFJLEVBQUMsV0FBZjtBQUEyQixZQUFRLEVBQUMsSUFBcEM7QUFBeUMsZUFBVyxFQUFDLGdCQUFyRDtBQUFzRSxNQUFFLEVBQUMsV0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBbkJGLENBRkYsQ0FERjtBQW9DRDs7R0F6Q2ViLFU7O0tBQUFBLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zaWdudXAubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lnbnVwRm9ybSgpIHtcbiAgY29uc3QgbWFpbENoaW1wVVJMID0gJ2h0dHBzOi8vY2hyaXNiZWhhbi51czYubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9MGIyMGI4OGFlYjM4MDM4ZmVlNDUyYTY0ZSZhbXA7aWQ9ZWYxM2QzZDA3YSc7XG4gIGNvbnN0IG1haWxDaGltcFVzZXIgPSAnMGIyMGI4OGFlYjM4MDM4ZmVlNDUyYTY0ZSc7XG4gIGNvbnN0IG1haWxDaGltcElEID0gJ2VmMTNkM2QwN2EnO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlN1YnNjcmliZTwvaDI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zaWduVXBGb3JtfSBhY3Rpb249e21haWxDaGltcFVSTH0gbWV0aG9kPVwiUE9TVFwiIG5vVmFsaWRhdGU+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVcIiB2YWx1ZT17bWFpbENoaW1wVXNlcn0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiB2YWx1ZT17bWFpbENoaW1wSUR9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdNRVJHRTAnPlxuICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cIkVNQUlMXCJcbiAgICAgICAgICAgIGlkPVwiTUVSR0UwXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NhcGl0YWxpemU9XCJvZmZcIlxuICAgICAgICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1YnNjcmliZVwiIG5hbWU9XCJzdWJzY3JpYmVcIiBpZD1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZVwiIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG5cbiAgICAgICAgey8qIFByb3RlY3RzIGFnYWluc3QgYm90cyAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJy01MDAwcHgnIH19IGFyaWEtaGlkZGVuPSd0cnVlJyBhcmlhLWxhYmVsPVwiUGxlYXNlIGxlYXZlIHRoZSBmb2xsb3dpbmcgdGhyZWUgZmllbGRzIGVtcHR5XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiX25hbWVcIj5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiX25hbWVcIiB0YWJJbmRleD1cIi0xXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkZyZWRkaWVcIiBpZD1cImJfbmFtZVwiIC8+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJfZW1haWxcIj5FbWFpbDogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImJfZW1haWxcIiB0YWJJbmRleD1cIi0xXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInlvdXJlbWFpbEBnbWFpbC5jb21cIiBpZD1cImJfZW1haWxcIiAvPlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiX2NvbW1lbnRcIj5Db21tZW50OiA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiYl9jb21tZW50XCIgdGFiSW5kZXg9XCItMVwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGNvbW1lbnRcIiBpZD1cImJfY29tbWVudFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignupForm.js\n");

/***/ })

})