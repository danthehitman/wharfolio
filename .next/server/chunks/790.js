exports.id = 790;
exports.ids = [790];
exports.modules = {

/***/ 8527:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5958, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8950, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2513, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1551, 23))

/***/ }),

/***/ 2245:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3716, 23))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 9798:
/***/ ((module) => {

// Exports
module.exports = {
	"test": "styles_test__cIYAC"
};


/***/ }),

/***/ 1917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4458);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1094);
/* harmony import */ var app_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5141);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5126);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2817);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(658);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fonts__WEBPACK_IMPORTED_MODULE_6__);







function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        className: (_fonts__WEBPACK_IMPORTED_MODULE_6___default().className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "This is the /app layout."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/settings",
                    children: "Settings"
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(app_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_settings_page__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                })
            ]
        })
    });
}


/***/ }),

/***/ 5141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4458);

function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading is happening."
    });
}


/***/ }),

/***/ 5126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4458);
;// CONCATENATED MODULE: ./app/clients/testClient.js
const getData = async ()=>{
    const res = await fetch("http://127.0.0.1:3000/api/posts", {
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};


// EXTERNAL MODULE: ./app/settings/styles.module.css
var styles_module = __webpack_require__(9798);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./app/settings/page.js



async function SettingsPage({ posts  }) {
    const dataTemp = getData();
    const [data] = await Promise.all([
        dataTemp
    ]);
    console.log(data);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (styles_module_default()).test,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "This is the /settings page."
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                children: data["data"].map((record)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: record.title
                    }, record.title))
            })
        ]
    });
}


/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;