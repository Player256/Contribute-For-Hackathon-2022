"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(event) {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/users/signup\", {\n                                email: email,\n                                password: password\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(respon);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Signup\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"form-control\",\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"form-control\",\n                        value: password,\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\advar\\\\OneDrive\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n}, \"RbrO7EvaECjsVDQyExqmmCjcan0=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztBQUF3QztBQUNkO0FBRTFCLCtEQUFlLGNBQU07O0lBQ25CLElBQTBCQyxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CRSxLQUFLLEdBQWNGLEdBQVksR0FBMUIsRUFBRUcsUUFBUSxHQUFJSCxHQUFZLEdBQWhCO0lBQ3RCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDSSxRQUFRLEdBQWlCSixJQUFZLEdBQTdCLEVBQUVLLFdBQVcsR0FBSUwsSUFBWSxHQUFoQjtJQUU5QixJQUFNTSxRQUFRO21CQUFHLDZGQUFPQyxLQUFLLEVBQUk7Z0JBRzFCQyxRQUFROzs7O3dCQUZYRCxLQUFLLENBQUNFLGNBQWMsRUFBRSxDQUFDO3dCQUVUOzs0QkFBTVIsa0RBQVUsQ0FBQyxtQkFBbUIsRUFBQztnQ0FBQ0MsS0FBSyxFQUFMQSxLQUFLO2dDQUFDRSxRQUFRLEVBQVJBLFFBQVE7NkJBQUMsQ0FBQzswQkFBQTs7d0JBQWpFSSxRQUFRLEdBQUcsYUFBc0Q7d0JBRXZFRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDOzs7Ozs7UUFDcEIsQ0FBQzt3QkFOS1AsUUFBUSxDQUFVQyxLQUFLOzs7T0FNNUI7SUFFQyxxQkFDRSw4REFBQ08sTUFBSTtRQUFDUixRQUFRLEVBQUVBLFFBQVE7OzBCQUN0Qiw4REFBQ1MsSUFBRTswQkFBQyxRQUFNOzs7OztxQkFBSzswQkFDZiw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7O2tDQUN6Qiw4REFBQ0MsT0FBSztrQ0FBQyxlQUFhOzs7Ozs2QkFBUTtrQ0FDNUIsOERBQUNDLE9BQUs7d0JBQ0pGLFNBQVMsRUFBQyxjQUFjO3dCQUN4QkcsS0FBSyxFQUFFbEIsS0FBSzt3QkFDWm1CLFFBQVEsRUFBRSxTQUFDQyxDQUFDO21DQUFLbkIsUUFBUSxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzt5QkFBQTs7Ozs7NkJBQ3pDOzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNKLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOztrQ0FDekIsOERBQUNDLE9BQUs7a0NBQUMsVUFBUTs7Ozs7NkJBQVE7a0NBQ3ZCLDhEQUFDQyxPQUFLO3dCQUNORixTQUFTLEVBQUMsY0FBYzt3QkFDeEJHLEtBQUssRUFBSWhCLFFBQVE7d0JBQ2pCaUIsUUFBUSxFQUFFQyxTQUFBQSxDQUFDO21DQUFJakIsV0FBVyxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzt5QkFBQTs7Ozs7NkJBQ3hDOzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNJLFFBQU07Z0JBQUNQLFNBQVMsRUFBQyxpQkFBaUI7MEJBQUMsU0FBTzs7Ozs7cUJBQVM7Ozs7OzthQUMvQyxDQUNQO0FBQ0osQ0FBQyxtQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3NpZ251cC5qcz81NmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5jb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCk9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91c2Vycy9zaWdudXAnLHtlbWFpbCxwYXNzd29yZH0pO1xyXG5cclxuIGNvbnNvbGUubG9nKHJlc3BvbilcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPGgxPlNpZ251cDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgdmFsdWUgPSB7cGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvblN1Ym1pdCIsImV2ZW50IiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uIiwiZm9ybSIsImgxIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n"));

/***/ })

});