"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Promotions.jsx":
/*!***********************************!*\
  !*** ./components/Promotions.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Promotions\": function() { return /* binding */ Promotions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Promotions = ()=>{\n    _s();\n    const { promotions  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.app);\n    const { title , logoPromo , Subtitle , paragraphs , button , imagePromo  } = promotions[0];\n    const onSubmit = ()=>{\n        const numPedido = Math.floor(Math.random() * 100);\n        console.log(\"numero de pedido \" + numPedido);\n        console.log(\"Resumen de la compra \" + title);\n    };\n    //console.log({title, logoPromo, Subtitle, paragraphs, button, imagePromo } )\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-3 sm:m-32\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center shadow-xl xl:flex-row rounded-3xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"cursor-pointer rounded-3xl \",\n                    src: imagePromo,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-between p-4 leading-normal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"m-2 py-5 w-48 \",\n                            src: logoPromo\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"m-2 xl:text-6xl text-3xl text-center \",\n                            children: [\n                                title,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"m-2 xl:text-3xl text-xl font-normal text-gray-900\",\n                            children: [\n                                Subtitle,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"m-2 xl:text-3xl text-xl font-normal text-gray-900\",\n                            children: [\n                                paragraphs,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"py-2.5 px-5 mr-2 m-2 text-xl bg-white rounded-lg border border-black hover:bg-gray-200 \",\n                            onClick: onSubmit,\n                            children: button.text\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Proyects\\\\xcaret\\\\xcaret\\\\components\\\\Promotions.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Promotions, \"yqXoAr8st9XmbbzCbirJs0OQjK4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Promotions;\nvar _c;\n$RefreshReg$(_c, \"Promotions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb21vdGlvbnMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUNnQjtBQUVsQyxNQUFNRSxhQUFhLElBQU07O0lBQzVCLE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUdGLHdEQUFXQSxDQUFDRyxDQUFBQSxRQUFTQSxNQUFNQyxHQUFHO0lBQ3JELE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBRUMsV0FBVSxFQUFFQyxPQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUFHUixVQUFVLENBQUMsRUFBRTtJQUVwRixNQUFNUyxXQUFXLElBQUs7UUFDbkIsTUFBTUMsWUFBWUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7UUFDNUNDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JMO1FBQ2xDSSxRQUFRQyxHQUFHLENBQUMsMEJBQTBCWjtJQUMxQztJQUVBLDZFQUE2RTtJQUM3RSxxQkFDSSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFFWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBRVgsOERBQUNDO29CQUFJRCxXQUFVO29CQUE4QkUsS0FBS1g7b0JBQVlZLEtBQUk7Ozs7Ozs4QkFDbEUsOERBQUNKO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUlELFdBQVU7NEJBQWlCRSxLQUFLZjs7Ozs7O3NDQUNyQyw4REFBQ2lCOzRCQUFHSixXQUFVOztnQ0FBeUNkO2dDQUFNOzs7Ozs7O3NDQUM3RCw4REFBQ21COzRCQUFFTCxXQUFVOztnQ0FBcURaO2dDQUFTOzs7Ozs7O3NDQUMzRSw4REFBQ2lCOzRCQUFFTCxXQUFVOztnQ0FBcURYO2dDQUFXOzs7Ozs7O3NDQUU3RSw4REFBQ0M7NEJBQ0FVLFdBQVU7NEJBQ1ZNLFNBQVNkO3NDQUVMRixPQUFPaUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEMsRUFBQztHQWxDWXpCOztRQUNjRCxvREFBV0E7OztLQUR6QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9tb3Rpb25zLmpzeD80YzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9tb3Rpb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9tb3Rpb25zIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hcHApO1xyXG4gICAgY29uc3QgeyB0aXRsZSwgbG9nb1Byb21vLCBTdWJ0aXRsZSwgcGFyYWdyYXBocywgYnV0dG9uLCBpbWFnZVByb21vIH0gPSBwcm9tb3Rpb25zWzBdO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKCkgPT57XHJcbiAgICAgICBjb25zdCBudW1QZWRpZG8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdudW1lcm8gZGUgcGVkaWRvICcgKyBudW1QZWRpZG8pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VtZW4gZGUgbGEgY29tcHJhICcgKyB0aXRsZSlcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHt0aXRsZSwgbG9nb1Byb21vLCBTdWJ0aXRsZSwgcGFyYWdyYXBocywgYnV0dG9uLCBpbWFnZVByb21vIH0gKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbS0zIHNtOm0tMzInPnsvKiBtLTMyIHBhcmEgZGVza3RvcCAvLyBtLTMgcGFyYSBtb3ZpbCovfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzaGFkb3cteGwgeGw6ZmxleC1yb3cgIHJvdW5kZWQtM3hsXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0zeGwgXCIgc3JjPXtpbWFnZVByb21vfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTQgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbS0yIHB5LTUgdy00OCAnIHNyYz17bG9nb1Byb21vfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0yIHhsOnRleHQtNnhsIHRleHQtM3hsIHRleHQtY2VudGVyIFwiPnt0aXRsZX0gPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTIgeGw6dGV4dC0zeGwgdGV4dC14bCBmb250LW5vcm1hbCB0ZXh0LWdyYXktOTAwXCI+e1N1YnRpdGxlfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0yIHhsOnRleHQtM3hsIHRleHQteGwgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTkwMFwiPntwYXJhZ3JhcGhzfSA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIuNSBweC01IG1yLTIgbS0yIHRleHQteGwgICBiZy13aGl0ZSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItYmxhY2sgaG92ZXI6YmctZ3JheS0yMDAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbi50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZWxlY3RvciIsIlByb21vdGlvbnMiLCJwcm9tb3Rpb25zIiwic3RhdGUiLCJhcHAiLCJ0aXRsZSIsImxvZ29Qcm9tbyIsIlN1YnRpdGxlIiwicGFyYWdyYXBocyIsImJ1dHRvbiIsImltYWdlUHJvbW8iLCJvblN1Ym1pdCIsIm51bVBlZGlkbyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoNSIsInAiLCJvbkNsaWNrIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Promotions.jsx\n"));

/***/ })

});