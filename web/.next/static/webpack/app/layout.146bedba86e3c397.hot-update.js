"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.77.8/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _codegouvfr_react_dsfr_next_appdir_DsfrHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codegouvfr/react-dsfr/next-appdir/DsfrHead */ \"(app-pages-browser)/./node_modules/.pnpm/@codegouvfr+react-dsfr@1.9.28/node_modules/@codegouvfr/react-dsfr/next-appdir/DsfrHead.js\");\n/* harmony import */ var _codegouvfr_react_dsfr_next_appdir_DsfrProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codegouvfr/react-dsfr/next-appdir/DsfrProvider */ \"(app-pages-browser)/./node_modules/.pnpm/@codegouvfr+react-dsfr@1.9.28/node_modules/@codegouvfr/react-dsfr/next-appdir/DsfrProvider.js\");\n/* harmony import */ var _codegouvfr_react_dsfr_next_appdir_getHtmlAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codegouvfr/react-dsfr/next-appdir/getHtmlAttributes */ \"(app-pages-browser)/./node_modules/.pnpm/@codegouvfr+react-dsfr@1.9.28/node_modules/@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes.js\");\n/* harmony import */ var _StartDsfr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StartDsfr */ \"(app-pages-browser)/./app/StartDsfr.tsx\");\n/* harmony import */ var _defaultColorScheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultColorScheme */ \"(app-pages-browser)/./app/defaultColorScheme.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.77.8/node_modules/next/dist/api/link.js\");\n/* harmony import */ var _codegouvfr_react_dsfr_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codegouvfr/react-dsfr/Header */ \"(app-pages-browser)/./node_modules/.pnpm/@codegouvfr+react-dsfr@1.9.28/node_modules/@codegouvfr/react-dsfr/Header/index.js\");\n/* harmony import */ var _codegouvfr_react_dsfr_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @codegouvfr/react-dsfr/Footer */ \"(app-pages-browser)/./node_modules/.pnpm/@codegouvfr+react-dsfr@1.9.28/node_modules/@codegouvfr/react-dsfr/Footer.js\");\n/* harmony import */ var _src_components_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/constants */ \"(app-pages-browser)/./src/components/constants.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.77.8/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const lang = \"fr\";\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);\n    const handleSearch = (e)=>{\n        // GET PRODUCTS BY NAME\n        // fetch\n        console.log(\"ici: \", e);\n        fetch(_src_components_constants__WEBPACK_IMPORTED_MODULE_9__.GET_PRODUCTS_BY_NAME + \"?product_name=\".concat(e)).then((res)=>res.json()).then((data)=>setProducts(data));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        console.log(\"ici products: \", products);\n    }, [\n        products\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        ...(0,_codegouvfr_react_dsfr_next_appdir_getHtmlAttributes__WEBPACK_IMPORTED_MODULE_3__.getHtmlAttributes)({\n            defaultColorScheme: _defaultColorScheme__WEBPACK_IMPORTED_MODULE_5__.defaultColorScheme,\n            lang\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StartDsfr__WEBPACK_IMPORTED_MODULE_4__.StartDsfr, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codegouvfr_react_dsfr_next_appdir_DsfrHead__WEBPACK_IMPORTED_MODULE_1__.DsfrHead, {\n                        Link: next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codegouvfr_react_dsfr_Header__WEBPACK_IMPORTED_MODULE_7__.Header, {\n                        // TODO: change\n                        brandTop: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"INTITULE\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 33\n                                }, void 0),\n                                \"OFFICIEL\"\n                            ]\n                        }, void 0, true),\n                        homeLinkProps: {\n                            href: \"/\",\n                            title: \"Accueil - Nom de l’entit\\xe9 (minist\\xe8re, secr\\xe9tariat d‘\\xe9tat, gouvernement)\"\n                        },\n                        serviceTagline: \"Test technique\",\n                        id: \"fr-header-simple-header-with-service-title-and-tagline\",\n                        serviceTitle: \"Direction g\\xe9n\\xe9rale des Finances publiques (DGFiP)\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codegouvfr_react_dsfr_next_appdir_DsfrProvider__WEBPACK_IMPORTED_MODULE_2__.DsfrProvider, {\n                        lang: lang,\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codegouvfr_react_dsfr_Footer__WEBPACK_IMPORTED_MODULE_8__.Footer, {\n                        accessibility: \"fully compliant\",\n                        contentDescription: \"   Ce message est \\xe0 remplacer par les informations de votre site.      Comme exemple de contenu, vous pouvez indiquer les informations    suivantes : Le site officiel d’information administrative pour les entreprises.   Retrouvez toutes les informations et d\\xe9marches administratives n\\xe9cessaires \\xe0 la cr\\xe9ation,    \\xe0 la gestion et au d\\xe9veloppement de votre entreprise.   \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jehan\\\\Documents\\\\test-dgfip\\\\web\\\\app\\\\layout.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV1RTtBQUNRO0FBQ1U7QUFDakQ7QUFDa0I7QUFDN0I7QUFDMEI7QUFDQTtBQUNZO0FBQ3ZCO0FBRzdCLFNBQVNXLFdBQVcsS0FBd0M7UUFBeEMsRUFBRUMsUUFBUSxFQUE4QixHQUF4Qzs7SUFDakMsTUFBTUMsT0FBTztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCxnREFBUUEsQ0FBWSxFQUFFO0lBRXRELE1BQU1NLGVBQWUsQ0FBQ0M7UUFDcEIsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUkMsUUFBUUMsR0FBRyxDQUFDLFNBQVNGO1FBQ3JCRyxNQUFNWiwyRUFBb0JBLEdBQUcsaUJBQW1CLE9BQUZTLElBQy9DSSxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVQsWUFBWVM7SUFDMUI7SUFFQWYsaURBQVNBLENBQUM7UUFDUlMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkw7SUFDaEMsR0FBRztRQUFDQTtLQUFTO0lBRWIscUJBQ0UsOERBQUNXO1FBQU0sR0FBR3ZCLHVHQUFpQkEsQ0FBQztZQUFFRSxrQkFBa0JBLHFFQUFBQTtZQUFFUztRQUFLLEVBQUU7OzBCQUN2RCw4REFBQ2E7O2tDQUNDLDhEQUFDdkIsaURBQVNBOzs7OztrQ0FDViw4REFBQ0gsaUZBQVFBO3dCQUFDSyxNQUFNQSxpREFBSUE7Ozs7Ozs7Ozs7OzswQkFFdEIsOERBQUNzQjs7a0NBQ0MsOERBQUNyQixpRUFBTUE7d0JBQ1AsZUFBZTt3QkFDWHNCLHdCQUFVOztnQ0FBRTs4Q0FBUSw4REFBQ0M7Ozs7O2dDQUFLOzs7d0JBQzFCQyxlQUFlOzRCQUNYQyxNQUFNOzRCQUNOQyxPQUFPO3dCQUNYO3dCQUNBQyxnQkFBZTt3QkFDZkMsSUFBRzt3QkFDSEMsY0FBYTs7Ozs7O2tDQUVqQiw4REFBQ2xDLHlGQUFZQTt3QkFBQ1ksTUFBTUE7a0NBQ2pCRDs7Ozs7O2tDQUVILDhEQUFDTCxpRUFBTUE7d0JBQ0g2QixlQUFjO3dCQUNkQyxvQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVkvQjtHQXBEd0IxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0LnRzeD85OTg4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRHNmckhlYWQgfSBmcm9tIFwiQGNvZGVnb3V2ZnIvcmVhY3QtZHNmci9uZXh0LWFwcGRpci9Ec2ZySGVhZFwiO1xyXG5pbXBvcnQgeyBEc2ZyUHJvdmlkZXIgfSBmcm9tIFwiQGNvZGVnb3V2ZnIvcmVhY3QtZHNmci9uZXh0LWFwcGRpci9Ec2ZyUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgZ2V0SHRtbEF0dHJpYnV0ZXMgfSBmcm9tIFwiQGNvZGVnb3V2ZnIvcmVhY3QtZHNmci9uZXh0LWFwcGRpci9nZXRIdG1sQXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgeyBTdGFydERzZnIgfSBmcm9tIFwiLi9TdGFydERzZnJcIjtcclxuaW1wb3J0IHsgZGVmYXVsdENvbG9yU2NoZW1lIH0gZnJvbSBcIi4vZGVmYXVsdENvbG9yU2NoZW1lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIkBjb2RlZ291dmZyL3JlYWN0LWRzZnIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCJAY29kZWdvdXZmci9yZWFjdC1kc2ZyL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVFNfQllfTkFNRSB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2ludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IEpTWC5FbGVtZW50OyB9KSB7XHJcbiAgY29uc3QgbGFuZyA9IFwiZnJcIjtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIC8vIEdFVCBQUk9EVUNUUyBCWSBOQU1FXHJcbiAgICAvLyBmZXRjaFxyXG4gICAgY29uc29sZS5sb2coJ2ljaTogJywgZSk7XHJcbiAgICBmZXRjaChHRVRfUFJPRFVDVFNfQllfTkFNRSArIGA/cHJvZHVjdF9uYW1lPSR7ZX1gKVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihkYXRhID0+IHNldFByb2R1Y3RzKGRhdGEpKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaWNpIHByb2R1Y3RzOiAnLCBwcm9kdWN0cylcclxuICB9LCBbcHJvZHVjdHNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgey4uLmdldEh0bWxBdHRyaWJ1dGVzKHsgZGVmYXVsdENvbG9yU2NoZW1lLCBsYW5nIH0pfSA+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxTdGFydERzZnIgLz5cclxuICAgICAgICA8RHNmckhlYWQgTGluaz17TGlua30gLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgLy8gVE9ETzogY2hhbmdlXHJcbiAgICAgICAgICAgIGJyYW5kVG9wPXs8PklOVElUVUxFPGJyIC8+T0ZGSUNJRUw8Lz59XHJcbiAgICAgICAgICAgIGhvbWVMaW5rUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQWNjdWVpbCAtIE5vbSBkZSBs4oCZZW50aXTDqSAobWluaXN0w6hyZSwgc2VjcsOpdGFyaWF0IGTigJjDqXRhdCwgZ291dmVybmVtZW50KSdcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2VydmljZVRhZ2xpbmU9XCJUZXN0IHRlY2huaXF1ZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZnItaGVhZGVyLXNpbXBsZS1oZWFkZXItd2l0aC1zZXJ2aWNlLXRpdGxlLWFuZC10YWdsaW5lXCJcclxuICAgICAgICAgICAgc2VydmljZVRpdGxlPVwiRGlyZWN0aW9uIGfDqW7DqXJhbGUgZGVzIEZpbmFuY2VzIHB1YmxpcXVlcyAoREdGaVApXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxEc2ZyUHJvdmlkZXIgbGFuZz17bGFuZ30+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Ec2ZyUHJvdmlkZXI+XHJcbiAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5PVwiZnVsbHkgY29tcGxpYW50XCJcclxuICAgICAgICAgICAgY29udGVudERlc2NyaXB0aW9uPVwiXHJcbiAgICAgICAgICAgICAgICBDZSBtZXNzYWdlIGVzdCDDoCByZW1wbGFjZXIgcGFyIGxlcyBpbmZvcm1hdGlvbnMgZGUgdm90cmUgc2l0ZS5cclxuXHJcbiAgICAgICAgICAgICAgICBDb21tZSBleGVtcGxlIGRlIGNvbnRlbnUsIHZvdXMgcG91dmV6IGluZGlxdWVyIGxlcyBpbmZvcm1hdGlvbnMgXHJcbiAgICAgICAgICAgICAgICBzdWl2YW50ZXMgOiBMZSBzaXRlIG9mZmljaWVsIGTigJlpbmZvcm1hdGlvbiBhZG1pbmlzdHJhdGl2ZSBwb3VyIGxlcyBlbnRyZXByaXNlcy5cclxuICAgICAgICAgICAgICAgIFJldHJvdXZleiB0b3V0ZXMgbGVzIGluZm9ybWF0aW9ucyBldCBkw6ltYXJjaGVzIGFkbWluaXN0cmF0aXZlcyBuw6ljZXNzYWlyZXMgw6AgbGEgY3LDqWF0aW9uLCBcclxuICAgICAgICAgICAgICAgIMOgIGxhIGdlc3Rpb24gZXQgYXUgZMOpdmVsb3BwZW1lbnQgZGUgdm90cmUgZW50cmVwcmlzZS5cclxuICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiRHNmckhlYWQiLCJEc2ZyUHJvdmlkZXIiLCJnZXRIdG1sQXR0cmlidXRlcyIsIlN0YXJ0RHNmciIsImRlZmF1bHRDb2xvclNjaGVtZSIsIkxpbmsiLCJIZWFkZXIiLCJGb290ZXIiLCJHRVRfUFJPRFVDVFNfQllfTkFNRSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwibGFuZyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJoYW5kbGVTZWFyY2giLCJlIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiaHRtbCIsImhlYWQiLCJib2R5IiwiYnJhbmRUb3AiLCJiciIsImhvbWVMaW5rUHJvcHMiLCJocmVmIiwidGl0bGUiLCJzZXJ2aWNlVGFnbGluZSIsImlkIiwic2VydmljZVRpdGxlIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRlbnREZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});