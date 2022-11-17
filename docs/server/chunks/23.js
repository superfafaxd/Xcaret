"use strict";
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AJ": () => (/* binding */ onDeviceDetected),
/* harmony export */   "Eo": () => (/* binding */ onLoadData),
/* harmony export */   "jE": () => (/* binding */ onLanguage),
/* harmony export */   "tK": () => (/* binding */ appSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const appSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "app",
    initialState: {
        sistemLanguage: null,
        deviceDetected: null,
        data: {},
        navbar: null,
        header: null,
        promotions: null,
        carousel: null,
        buttonBook: null,
        legals: null,
        prefooter: null,
        footer: null
    },
    reducers: {
        onLanguage: (state, { payload  })=>{
            state.sistemLanguage = payload;
        },
        onDeviceDetected: (state, { payload  })=>{
            state.deviceDetected = payload;
        },
        onLoadData: (state, { payload  })=>{
            // state.data = payload;
            state.navbar = payload.navbar;
            state.header = payload.header;
            state.promotions = payload.promotions;
            state.carousel = payload.carousel;
            state.buttonBook = payload.buttonBook;
            state.legals = payload.legals;
            state.prefooter = payload.prefooter;
            state.footer = payload.footer;
        }
    }
});
// Action creators are generated for each case reducer function
const { onLanguage , onDeviceDetected , onLoadData  } = appSlice.actions;


/***/ })

};
;