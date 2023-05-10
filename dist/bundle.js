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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    background-color: rgba(183, 164, 164, 0.986);\\r\\n}\\r\\n\\r\\n.list-container{\\r\\nbackground-color: #fff;\\r\\nwidth: 45%;\\r\\nheight: auto;\\r\\nposition: absolute;\\r\\ntop: 25%;\\r\\nleft: 50%;\\r\\ntransform: translate(-50%, -25%);\\r\\ndisplay: flex;\\r\\njustify-content: center;\\r\\nflex-direction: column;\\r\\nalign-items: center;\\r\\n}\\r\\n.bi-journal-text{\\r\\n    font-size: 5rem;\\r\\n    color: rgb(29, 125, 185);\\r\\n    margin: 15px auto;\\r\\n}\\r\\n#list-heading{\\r\\n    font-size: 1.9rem;\\r\\n    color: rgba(74, 71, 71, 0.747);\\r\\n    font-weight: 900;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n#list-item{\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n#todo-form{\\r\\n    width: 90%;\\r\\n}\\r\\n#input-list{\\r\\n    width: 100%;\\r\\n    height: 30px;\\r\\n    margin-bottom: 20px;\\r\\n    border: none;\\r\\n    border-bottom: 2px solid gray;\\r\\n}\\r\\n#input-list::placeholder{\\r\\n    padding-left: 10px;\\r\\n    font-size: 15px;\\r\\n}\\r\\nul li{\\r\\n    position: relative;\\r\\n    list-style: none;\\r\\n    width: 90%;\\r\\n    font-size: 15px;\\r\\n    height: 38px;\\r\\n    display: flex;\\r\\n    align-items: baseline;\\r\\n    border-bottom: 1px solid gray;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n.checkbox{\\r\\n    margin-right: 20px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.edit{\\r\\n    position: absolute;\\r\\n    font-size: 1.2rem;\\r\\n    color: green;\\r\\n    right: 40px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.delete{\\r\\n    position: absolute;\\r\\n    font-size: 1.2rem;\\r\\n    color: red;\\r\\n    right: 5px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n#edit-form{\\r\\n    outline: none;\\r\\n    border: 2px solid green;\\r\\n}\\r\\n.edit-list{\\r\\n    width: 100%;\\r\\n    background-color: aquamarine;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.completed{\\r\\n    text-decoration: line-through;\\r\\n}\\r\\n#clear-btn{\\r\\n    width: 80%;\\r\\n    padding: 12px;\\r\\n    margin: 15px auto;\\r\\n    background-color: rgb(186, 185, 185);\\r\\n    font-size: 20px;\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n/* harmony import */ var _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _modules_toDoStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toDoStatus.js */ \"./src/modules/toDoStatus.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Event for Displaying the to do tasks\r\ndocument.addEventListener('DOMContentLoaded', _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayToDoList);\r\n\r\n// Event for adding new to do tasks\r\ndocument.querySelector('#todo-form').addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    e.preventDefault();\r\n    _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getNewToDoTask();\r\n  }\r\n});\r\n\r\n// Event for deleting new item for the list\r\ndocument.querySelector('#list-item').addEventListener('click', (e) => {\r\n  _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removetodoTask(e.target);\r\n  _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deletetodoTask(e.target);\r\n});\r\n\r\n// Event for editing the to do list\r\ndocument.querySelector('#list-item').addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('bi-pencil-square')) {\r\n    _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editeToDoTask(e.target);\r\n  }\r\n});\r\n\r\n// Event for completed tasks\r\ndocument.querySelector('#list-item').addEventListener('change', (e) => {\r\n  if (e.target.classList.contains('checkbox')) {\r\n    _modules_toDoStatus_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].istodoCompleted(e.target);\r\n  }\r\n});\r\n\r\n// Event for updating tasks\r\ndocument.querySelector('#list-item').addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter' && e.target.classList.contains('edit-list')) {\r\n    e.preventDefault();\r\n    _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updatetodoTask(e.target);\r\n    window.location.reload();\r\n  }\r\n});\r\n\r\n// Event for removing tasks\r\ndocument.getElementById('clear-btn').addEventListener('click', () => {\r\n  _modules_toDoStatus_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cleartodoCompleted();\r\n  window.location.reload();\r\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ \"./src/modules/toDo.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n\r\n\r\n\r\nclass UI{\r\n    static displayToDoList=()=>{\r\n        const tasks=_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gettodoTasks();\r\n        tasks.forEach((todo)=>UI.addTaskToList(todo))\r\n    }\r\n\r\n    \r\n  static getNewToDoTask = () => {\r\n    const inputTask = document.querySelector('#input-list').value;\r\n\r\n    // valitation for empy form\r\n    if (inputTask !== '') {\r\n      const todo = new _toDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputTask);\r\n\r\n      UI.addTaskToList(todo);\r\n\r\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addtodoTask(todo);\r\n\r\n      UI.clearFields();\r\n    }\r\n  }\r\n\r\n  static addTaskToList = (todo) => {\r\n    const list = document.querySelector('#list-item');\r\n\r\n    const li = document.createElement('li');\r\n\r\n    const checkedBok = document.createElement('input');\r\n    checkedBok.type = 'checkbox';\r\n    checkedBok.classList.add('checkbox');\r\n    if (todo.completed) {\r\n      checkedBok.checked = true;\r\n    }\r\n\r\n    const spanEl = document.createElement('span');\r\n    spanEl.textContent = todo.desc;\r\n\r\n    const editButton = document.createElement('span');\r\n    editButton.classList.add('edit');\r\n    editButton.innerHTML = '<i class=\"bi bi-pencil-square\"></i>';\r\n\r\n    const deleteButton = document.createElement('span');\r\n    deleteButton.classList.add('delete');\r\n    deleteButton.innerHTML = '<i class=\"bi bi-trash3-fill\"></i>';\r\n\r\n    li.appendChild(checkedBok);\r\n    li.appendChild(spanEl);\r\n    li.appendChild(editButton);\r\n    li.appendChild(deleteButton);\r\n\r\n    if (todo.completed) {\r\n      li.childNodes[1].classList.add('completed');\r\n    }\r\n\r\n    list.appendChild(li);\r\n  }\r\n\r\n  static editeToDoTask = (element) => {\r\n    const mainValue = element.parentElement.parentElement.childNodes[1].textContent;\r\n    const editForm = document.createElement('form');\r\n    editForm.id = 'todo-form';\r\n    element.parentElement.parentElement.childNodes[1].innerHTML = `\r\n\r\n    <form id=\"edit-form\">\r\n        <input type=\"text\" class=\"edit-list\" value=\"${mainValue}\">\r\n    </form>\r\n\r\n    `;\r\n\r\n    element.parentElement.parentElement.classList.add('highlight');\r\n\r\n    if (element.classList.contains('bi-trash3-fill')) {\r\n      element.parentElement.parentElement.remove();\r\n    }\r\n  }\r\n\r\n  static deletetodoTask = (element) => {\r\n    if (element.classList.contains('bi-trash3-fill')) {\r\n      element.parentElement.parentElement.remove();\r\n    }\r\n  }\r\n\r\n  static clearFields = () => {\r\n    document.querySelector('#input-list').value = '';\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://webpack/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/localstorage.js":
/*!*************************************!*\
  !*** ./src/modules/localstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Store Class: For localstorage functionalty\r\n\r\nclass Store {\r\n    static gettodoTasks = () => {\r\n      let todoTask;\r\n      if (localStorage.getItem('todoTask') === null) {\r\n        todoTask = [];\r\n      } else {\r\n        todoTask = JSON.parse(localStorage.getItem('todoTask'));\r\n      }\r\n\r\n      return todoTask;\r\n    }\r\n\r\n    static addtodoTask = (todo) => {\r\n      const todoTask = Store.gettodoTasks();\r\n      todo.index = (todoTask.length) + 1;\r\n      todoTask.push(todo);\r\n      localStorage.setItem('todoTask', JSON.stringify(todoTask));\r\n    }\r\n\r\n    static updatetodoTask = (element) => {\r\n      const editedtodoTask = element.value;\r\n      const todoTask = Store.gettodoTasks();\r\n      const list = element.parentElement.parentElement.parentElement;\r\n      const todoList = document.getElementById('list-item');\r\n      const id = Array.prototype.indexOf.call(todoList.children, list);\r\n\r\n      todoTask.forEach((todo) => {\r\n        if (todo.index === id) {\r\n          todo.desc = editedtodoTask;\r\n        }\r\n      });\r\n\r\n      localStorage.setItem('todoTask', JSON.stringify(todoTask));\r\n    }\r\n\r\n    static removetodoTask = (element) => {\r\n      const todoTask = Store.gettodoTasks();\r\n      const list = element.parentElement.parentElement;\r\n      const todoList = document.getElementById('list-item');\r\n      const id = Array.prototype.indexOf.call(todoList.children, list);\r\n\r\n      todoTask.forEach((todo, i) => {\r\n        if (todo.index === id && element.classList.contains('bi-trash3-fill')) {\r\n          todoTask.splice(i, 1);\r\n        }\r\n      });\r\n\r\n      todoTask.forEach((todo, i) => {\r\n        todo.index = i + 1;\r\n      });\r\n\r\n      localStorage.setItem('todoTask', JSON.stringify(todoTask));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);\n\n//# sourceURL=webpack://webpack/./src/modules/localstorage.js?");

/***/ }),

/***/ "./src/modules/toDo.js":
/*!*****************************!*\
  !*** ./src/modules/toDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Todo Class: Represents a Task\r\n\r\nclass ToDo {\r\n    constructor(todo) {\r\n      this.desc = todo;\r\n      this.completed = false;\r\n      this.index = 0;\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n//# sourceURL=webpack://webpack/./src/modules/toDo.js?");

/***/ }),

/***/ "./src/modules/toDoStatus.js":
/*!***********************************!*\
  !*** ./src/modules/toDoStatus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n\r\n\r\nclass Todostatus {\r\n    static istodoCompleted = (element) => {\r\n      const todoTask = _localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gettodoTasks();\r\n      const checkedValue = element.checked;\r\n      const list = element.parentElement;\r\n      const todoList = document.getElementById('list-item');\r\n      const id = Array.prototype.indexOf.call(todoList.children, list);\r\n\r\n      todoTask.forEach((todo) => {\r\n        if (todo.index === id) {\r\n          todo.completed = checkedValue;\r\n          list.childNodes[1].classList.toggle('completed');\r\n        }\r\n      });\r\n\r\n      localStorage.setItem('todoTask', JSON.stringify(todoTask));\r\n    };\r\n\r\n    static cleartodoCompleted = () => {\r\n      let todoTask = _localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gettodoTasks();\r\n      todoTask = todoTask.filter((item) => !item.completed);\r\n      localStorage.setItem('todoTask', JSON.stringify(todoTask));\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todostatus);\n\n//# sourceURL=webpack://webpack/./src/modules/toDoStatus.js?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;