"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Space Grotesk', sans-serif;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-blend-mode: soft-light;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: #545862;\r\n  height: 100vh;\r\n}\r\n\r\n#todo-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  background-color: rgb(247, 247, 248);\r\n  border: 10px solid whitesmoke;\r\n\r\n}\r\n\r\n#todo-list a {\r\n  border: none;\r\n  padding: 1rem 1.3rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.icon {\r\n  fill: rgba(152, 152, 152, 1);\r\n  cursor: pointer;\r\n}\r\n\r\n#header,\r\n#add-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n#add-task input {\r\n  background-color: rgb(247, 247, 248);\r\n  width: 90%;\r\n  outline: none;\r\n  border: none;\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n}\r\n\r\n#add-icon svg {\r\n  fill: rgb(231, 104, 56);\r\n}\r\n\r\n#header h2 {\r\n  font-family: 'Darker Grotesque', sans-serif;\r\n  background-image: linear-gradient(90deg, rgb(78, 73, 76), rgb(75, 67, 68), rgb(219, 174, 157));\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  font-style: italic;\r\n  width: 70%;\r\n}\r\n\r\n#sync {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#sync svg {\r\n  fill: rgb(219, 45, 67);\r\n}\r\n\r\n#sync svg:hover {\r\n  fill: #57d131;\r\n}\r\n\r\ni[class^=\"fa\"] {\r\n  color: rgba(152, 152, 152, 1);\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  display: none;\r\n}\r\n\r\n.fa-ellipsis-vertical.show {\r\n  display: block;\r\n}\r\n\r\n.fa-trash-can {\r\n  display: none;\r\n}\r\n\r\n.fa-trash-can.show {\r\n  display: block;\r\n}\r\n\r\n#task-list {\r\n  width: 100%;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.8rem 1.3rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.task.active {\r\n  background-color: #28df99;\r\n}\r\n\r\n.task-d {\r\n  width: 90%;\r\n  background-color: rgb(247, 247, 248);\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n  padding-left: 0.8rem;\r\n}\r\n\r\n.task-d.active {\r\n  background-color: #28df99;\r\n}\r\n\r\n.task-d.cross {\r\n  text-decoration: line-through;\r\n  width: 87.1%;\r\n  background-color: transparent;\r\n}\r\n\r\n#clear-all {\r\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  #todo-list,\r\n  #hero {\r\n    width: 50%;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,oCAAoC;EACpC,6BAA6B;;AAE/B;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,eAAe;EACf,4CAA4C;AAC9C;;AAEA;EACE,oCAAoC;EACpC,UAAU;EACV,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2CAA2C;EAC3C,8FAA8F;EAC9F,2BAA2B;EAC3B,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,oCAAoC;EACpC,aAAa;EACb,YAAY;EACZ,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,iHAAiH;EACjH,2BAA2B;EAC3B,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE;;IAEE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Space Grotesk', sans-serif;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-blend-mode: soft-light;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: #545862;\r\n  height: 100vh;\r\n}\r\n\r\n#todo-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  background-color: rgb(247, 247, 248);\r\n  border: 10px solid whitesmoke;\r\n\r\n}\r\n\r\n#todo-list a {\r\n  border: none;\r\n  padding: 1rem 1.3rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.icon {\r\n  fill: rgba(152, 152, 152, 1);\r\n  cursor: pointer;\r\n}\r\n\r\n#header,\r\n#add-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n#add-task input {\r\n  background-color: rgb(247, 247, 248);\r\n  width: 90%;\r\n  outline: none;\r\n  border: none;\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n}\r\n\r\n#add-icon svg {\r\n  fill: rgb(231, 104, 56);\r\n}\r\n\r\n#header h2 {\r\n  font-family: 'Darker Grotesque', sans-serif;\r\n  background-image: linear-gradient(90deg, rgb(78, 73, 76), rgb(75, 67, 68), rgb(219, 174, 157));\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  font-style: italic;\r\n  width: 70%;\r\n}\r\n\r\n#sync {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#sync svg {\r\n  fill: rgb(219, 45, 67);\r\n}\r\n\r\n#sync svg:hover {\r\n  fill: #57d131;\r\n}\r\n\r\ni[class^=\"fa\"] {\r\n  color: rgba(152, 152, 152, 1);\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  display: none;\r\n}\r\n\r\n.fa-ellipsis-vertical.show {\r\n  display: block;\r\n}\r\n\r\n.fa-trash-can {\r\n  display: none;\r\n}\r\n\r\n.fa-trash-can.show {\r\n  display: block;\r\n}\r\n\r\n#task-list {\r\n  width: 100%;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.8rem 1.3rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.task.active {\r\n  background-color: #28df99;\r\n}\r\n\r\n.task-d {\r\n  width: 90%;\r\n  background-color: rgb(247, 247, 248);\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n  padding-left: 0.8rem;\r\n}\r\n\r\n.task-d.active {\r\n  background-color: #28df99;\r\n}\r\n\r\n.task-d.cross {\r\n  text-decoration: line-through;\r\n  width: 87.1%;\r\n  background-color: transparent;\r\n}\r\n\r\n#clear-all {\r\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  #todo-list,\r\n  #hero {\r\n    width: 50%;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/store.js */ "./src/modules/store.js");
/* harmony import */ var _modules_showTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showTask.js */ "./src/modules/showTask.js");
/* harmony import */ var _modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toDo.js */ "./src/modules/toDo.js");
/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/remove.js */ "./src/modules/remove.js");






class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const syncIcon = document.getElementById('sync');

syncIcon.addEventListener('click', () => {
  _modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((task) => { task.completed = true; });
  const completed = _modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"].filter((task) => task.completed === true);
  completed.forEach((task) => (0,_modules_remove_js__WEBPACK_IMPORTED_MODULE_4__["default"])(task));
});

const addInput = document.getElementById('add');

document.addEventListener('DOMContentLoaded', () => {
  _modules_store_js__WEBPACK_IMPORTED_MODULE_1__.getTasks(_modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  _modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((task) => { task.completed = false; });
  _modules_store_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  _modules_showTask_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTaks(_modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

const addIcon = document.getElementById('add-icon');

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addInput.value) {
    const task = new Task(addInput.value, false, _modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"].length + 1);
    _modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(task);
    // Prevent submit
    e.preventDefault();
    _modules_showTask_js__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task);
    _modules_store_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

addIcon.addEventListener('click', (e) => {
  if (addInput.value) {
    const task = new Task(addInput.value, false, _modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"].length + 1);
    _modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(task);
    // Prevent submit
    e.preventDefault();
    _modules_showTask_js__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task);
    _modules_store_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_modules_toDo_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/modules/toDo.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");



const clearAll = document.getElementById('clear-all');

const removeTask = (index) => {
  const trashIcon = document.querySelectorAll('.fa-trash-can');
  const trashArr = Array.from(trashIcon);
  if (index.completed === true) {
    trashArr[index.index - 1].parentElement.remove();

    _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"].splice(index.index - 1, 1);
    for (let i = 0; i < _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"].length; i += 1) {
      _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].index = i + 1;
    }
  }
  _store_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);

clearAll.addEventListener('click', () => {
  const remain = _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const completed = remain.filter((task) => task.completed === true);
  completed.forEach((task) => removeTask(task));
});

/***/ }),

/***/ "./src/modules/showTask.js":
/*!*********************************!*\
  !*** ./src/modules/showTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIDisplay)
/* harmony export */ });
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/modules/toDo.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ "./src/modules/remove.js");




const taskList = document.getElementById('task-list');

const changeDesc = (input, taskel, el) => {
  taskel.classList.toggle('active');
  input.classList.toggle('active');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      input.value = e.target.value;
      input.classList.toggle('active');
      taskel.classList.toggle('active');
      _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"][el.index - 1].description = input.value;
      _store_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  });
};

class UIDisplay {
    static createTask = (el) => {
      const task = document.createElement('li');
      task.classList.add('task');

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.classList.add('checkB');
      task.appendChild(checkBox);

      const taskDesc = document.createElement('input');
      taskDesc.classList.add('task-d');
      taskDesc.value = `${el.description}`;
      task.appendChild(taskDesc);

      const dots = document.createElement('i');
      dots.classList.add('fa-solid', 'fa-ellipsis-vertical', 'show');
      task.appendChild(dots);

      const trashIcon = document.createElement('i');
      trashIcon.classList.add('fa-solid', 'fa-trash-can');
      task.appendChild(trashIcon);

      checkBox.addEventListener('change', () => {
        dots.classList.toggle('show');
        trashIcon.classList.toggle('show');
        taskDesc.classList.toggle('cross');
        task.classList.toggle('active');
        if (el.completed === false) {
          el.completed = true;
        } else {
          el.completed = false;
        }
        _store_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      });

      taskDesc.addEventListener('click', () => {
        changeDesc(taskDesc, task, el);
      });

      trashIcon.addEventListener('click', () => {
        (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__["default"])(el);
      });

      taskList.appendChild(task);
    };

    static displayTaks(arr) {
      arr.forEach((el) => UIDisplay.createTask(el));
    }
}

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "getTasks": () => (/* binding */ getTasks)
/* harmony export */ });
const getTasks = (tasks) => tasks.push(...JSON.parse(localStorage.getItem('tasks')));

const addTask = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};



/***/ }),

/***/ "./src/modules/toDo.js":
/*!*****************************!*\
  !*** ./src/modules/toDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskArr = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskArr);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9zaG93VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvdG9Eby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK0dyb3Rlc2s6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhcmtlcitHcm90ZXNxdWU6d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxyXFxuICBib3JkZXI6IDEwcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tbGlzdCBhIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS4zcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgZmlsbDogcmdiYSgxNTIsIDE1MiwgMTUyLCAxKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlcixcXHJcXG4jYWRkLXRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrIGlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ4KTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtaWNvbiBzdmcge1xcclxcbiAgZmlsbDogcmdiKDIzMSwgMTA0LCA1Nik7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgaDIge1xcclxcbiAgZm9udC1mYW1pbHk6ICdEYXJrZXIgR3JvdGVzcXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDc4LCA3MywgNzYpLCByZ2IoNzUsIDY3LCA2OCksIHJnYigyMTksIDE3NCwgMTU3KSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3luYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N5bmMgc3ZnIHtcXHJcXG4gIGZpbGw6IHJnYigyMTksIDQ1LCA2Nyk7XFxyXFxufVxcclxcblxcclxcbiNzeW5jIHN2Zzpob3ZlciB7XFxyXFxuICBmaWxsOiAjNTdkMTMxO1xcclxcbn1cXHJcXG5cXHJcXG5pW2NsYXNzXj1cXFwiZmFcXFwiXSB7XFxyXFxuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS1lbGxpcHNpcy12ZXJ0aWNhbC5zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdHJhc2gtY2FuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS10cmFzaC1jYW4uc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjNyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2suYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGRmOTk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ4KTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZC5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4ZGY5OTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZC5jcm9zcyB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIHdpZHRoOiA4Ny4xJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXItYWxsIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDE2OCwgMiwgMTExKSwgcmdiKDIxOSwgNDUsIDY3KSwgcmdiKDIzMSwgMTA0LCA1NiksIHJnYigyNTUsIDE1MywgMCkpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjdG9kby1saXN0LFxcclxcbiAgI2hlcm8ge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsOEZBQThGO0VBQzlGLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpSEFBaUg7RUFDakgsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTs7SUFFRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYXJrZXIrR3JvdGVzcXVlOndnaHRAOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDgpO1xcclxcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiN0b2RvLWxpc3QgYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGZpbGw6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIsXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayBpbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWljb24gc3ZnIHtcXHJcXG4gIGZpbGw6IHJnYigyMzEsIDEwNCwgNTYpO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIGgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig3OCwgNzMsIDc2KSwgcmdiKDc1LCA2NywgNjgpLCByZ2IoMjE5LCAxNzQsIDE1NykpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N5bmMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzeW5jIHN2ZyB7XFxyXFxuICBmaWxsOiByZ2IoMjE5LCA0NSwgNjcpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3luYyBzdmc6aG92ZXIge1xcclxcbiAgZmlsbDogIzU3ZDEzMTtcXHJcXG59XFxyXFxuXFxyXFxuaVtjbGFzc149XFxcImZhXFxcIl0ge1xcclxcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMSk7XFxyXFxufVxcclxcblxcclxcbi5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdmVydGljYWwuc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRyYXNoLWNhbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdHJhc2gtY2FuLnNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWxpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjhyZW0gMS4zcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkZjk5O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWQuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGRmOTk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWQuY3Jvc3Mge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICB3aWR0aDogODcuMSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWFsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigxNjgsIDIsIDExMSksIHJnYigyMTksIDQ1LCA2NyksIHJnYigyMzEsIDEwNCwgNTYpLCByZ2IoMjU1LCAxNTMsIDApKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgI3RvZG8tbGlzdCxcXHJcXG4gICNoZXJvIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9tb2R1bGVzL3N0b3JlLmpzJztcclxuaW1wb3J0IFVJRGlzcGxheSBmcm9tICcuL21vZHVsZXMvc2hvd1Rhc2suanMnO1xyXG5pbXBvcnQgdGFza0FyciBmcm9tICcuL21vZHVsZXMvdG9Eby5qcyc7XHJcbmltcG9ydCByZW1vdmVUYXNrIGZyb20gJy4vbW9kdWxlcy9yZW1vdmUuanMnO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3luY0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYycpO1xyXG5cclxuc3luY0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgdGFza0Fyci5mb3JFYWNoKCh0YXNrKSA9PiB7IHRhc2suY29tcGxldGVkID0gdHJ1ZTsgfSk7XHJcbiAgY29uc3QgY29tcGxldGVkID0gdGFza0Fyci5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSB0cnVlKTtcclxuICBjb21wbGV0ZWQuZm9yRWFjaCgodGFzaykgPT4gcmVtb3ZlVGFzayh0YXNrKSk7XHJcbn0pO1xyXG5cclxuY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkJyk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIFN0b3JlLmdldFRhc2tzKHRhc2tBcnIpO1xyXG4gIHRhc2tBcnIuZm9yRWFjaCgodGFzaykgPT4geyB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlOyB9KTtcclxuICBTdG9yZS5hZGRUYXNrKHRhc2tBcnIpO1xyXG4gIFVJRGlzcGxheS5kaXNwbGF5VGFrcyh0YXNrQXJyKTtcclxufSk7XHJcblxyXG5jb25zdCBhZGRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1pY29uJyk7XHJcblxyXG5hZGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGFkZElucHV0LnZhbHVlKSB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soYWRkSW5wdXQudmFsdWUsIGZhbHNlLCB0YXNrQXJyLmxlbmd0aCArIDEpO1xyXG4gICAgdGFza0Fyci5wdXNoKHRhc2spO1xyXG4gICAgLy8gUHJldmVudCBzdWJtaXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFVJRGlzcGxheS5jcmVhdGVUYXNrKHRhc2spO1xyXG4gICAgU3RvcmUuYWRkVGFzayh0YXNrQXJyKTtcclxuXHJcbiAgICBhZGRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG4gIH1cclxufSk7XHJcblxyXG5hZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoYWRkSW5wdXQudmFsdWUpIHtcclxuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhhZGRJbnB1dC52YWx1ZSwgZmFsc2UsIHRhc2tBcnIubGVuZ3RoICsgMSk7XHJcbiAgICB0YXNrQXJyLnB1c2godGFzayk7XHJcbiAgICAvLyBQcmV2ZW50IHN1Ym1pdFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgVUlEaXNwbGF5LmNyZWF0ZVRhc2sodGFzayk7XHJcbiAgICBTdG9yZS5hZGRUYXNrKHRhc2tBcnIpO1xyXG5cclxuICAgIGFkZElucHV0LnZhbHVlID0gJyc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgfVxyXG59KTsiLCJpbXBvcnQgdGFza0FyciBmcm9tICcuL3RvRG8uanMnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZSBmcm9tICcuL3N0b3JlLmpzJztcclxuXHJcbmNvbnN0IGNsZWFyQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWFsbCcpO1xyXG5cclxuY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10cmFzaC1jYW4nKTtcclxuICBjb25zdCB0cmFzaEFyciA9IEFycmF5LmZyb20odHJhc2hJY29uKTtcclxuICBpZiAoaW5kZXguY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICB0cmFzaEFycltpbmRleC5pbmRleCAtIDFdLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgdGFza0Fyci5zcGxpY2UoaW5kZXguaW5kZXggLSAxLCAxKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Fyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICB0YXNrQXJyW2ldLmluZGV4ID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFN0b3JlLmFkZFRhc2sodGFza0Fycik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW1vdmVUYXNrO1xyXG5cclxuY2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgcmVtYWluID0gdGFza0FycjtcclxuICBjb25zdCBjb21wbGV0ZWQgPSByZW1haW4uZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSk7XHJcbiAgY29tcGxldGVkLmZvckVhY2goKHRhc2spID0+IHJlbW92ZVRhc2sodGFzaykpO1xyXG59KTsiLCJpbXBvcnQgdGFza0FyciBmcm9tICcuL3RvRG8uanMnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZSBmcm9tICcuL3N0b3JlLmpzJztcclxuaW1wb3J0IHJlbW92ZVRhc2sgZnJvbSAnLi9yZW1vdmUuanMnO1xyXG5cclxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XHJcblxyXG5jb25zdCBjaGFuZ2VEZXNjID0gKGlucHV0LCB0YXNrZWwsIGVsKSA9PiB7XHJcbiAgdGFza2VsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGFza2VsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0YXNrQXJyW2VsLmluZGV4IC0gMV0uZGVzY3JpcHRpb24gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgU3RvcmUuYWRkVGFzayh0YXNrQXJyKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRGlzcGxheSB7XHJcbiAgICBzdGF0aWMgY3JlYXRlVGFzayA9IChlbCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblxyXG4gICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja0InKTtcclxuICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcblxyXG4gICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZCcpO1xyXG4gICAgICB0YXNrRGVzYy52YWx1ZSA9IGAke2VsLmRlc2NyaXB0aW9ufWA7XHJcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xyXG5cclxuICAgICAgY29uc3QgZG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgZG90cy5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcsICdzaG93Jyk7XHJcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZG90cyk7XHJcblxyXG4gICAgICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS10cmFzaC1jYW4nKTtcclxuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0cmFzaEljb24pO1xyXG5cclxuICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRvdHMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LnRvZ2dsZSgnY3Jvc3MnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGlmIChlbC5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBlbC5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbC5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU3RvcmUuYWRkVGFzayh0YXNrQXJyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjaGFuZ2VEZXNjKHRhc2tEZXNjLCB0YXNrLCBlbCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZVRhc2soZWwpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2spO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGlzcGxheVRha3MoYXJyKSB7XHJcbiAgICAgIGFyci5mb3JFYWNoKChlbCkgPT4gVUlEaXNwbGF5LmNyZWF0ZVRhc2soZWwpKTtcclxuICAgIH1cclxufSIsImNvbnN0IGdldFRhc2tzID0gKHRhc2tzKSA9PiB0YXNrcy5wdXNoKC4uLkpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpKTtcclxuXHJcbmNvbnN0IGFkZFRhc2sgPSAodGFza3MpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2V0VGFza3MsIGFkZFRhc2sgfTsiLCJjb25zdCB0YXNrQXJyID0gW107XHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tBcnI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9