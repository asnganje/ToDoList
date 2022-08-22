"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./modules/ToDoList.js":
/*!*****************************!*\
  !*** ./modules/ToDoList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toDo = [
  {
    description: 'shopping',
    completed: 'false',
    index: 0,
  },
  {
    description: 'wash the dishes',
    completed: 'false',
    index: 1,
  },
  {
    description: 'complete to do list project',
    completed: 'false',
    index: 2,
  },
  {
    description: 'reading',
    completed: 'false',
    index: 3,
  },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);

/***/ }),

/***/ "./modules/addTodo.js":
/*!****************************!*\
  !*** ./modules/addTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./modules/data.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./modules/display.js");
/* harmony import */ var _domElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElement.js */ "./modules/domElement.js");




const addTodo = (e) => {
  e.preventDefault();
  const task = _domElement_js__WEBPACK_IMPORTED_MODULE_2__.form.tasks.value;
  if (task === ' ') return;

  const newTodo = {
    description: task,
    completed: false,
    index: _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.length + 1,
  };
  _domElement_js__WEBPACK_IMPORTED_MODULE_2__.form.tasks.value = '';
  _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos));
  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodo);


/***/ }),

/***/ "./modules/clearTodo.js":
/*!******************************!*\
  !*** ./modules/clearTodo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./modules/data.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./modules/display.js");
/* eslint-disable no-plusplus */



const clearTodo = () => {
  let count = 1;
  _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos = _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.filter((todo) => todo.completed !== true);

  _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos = _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.map((todo) => ({
    description: todo.description,
    completed: todo.completed,
    index: count++,
  }));
  localStorage.setItem('todos', JSON.stringify(_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos));
  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearTodo);


/***/ }),

/***/ "./modules/data.js":
/*!*************************!*\
  !*** ./modules/data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const data = {
    todos: [],
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);
  

/***/ }),

/***/ "./modules/display.js":
/*!****************************!*\
  !*** ./modules/display.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./modules/data.js");
/* harmony import */ var _domElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElement.js */ "./modules/domElement.js");



const display = () => {
  _domElement_js__WEBPACK_IMPORTED_MODULE_1__.list.innerHTML = '';
  _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.forEach((todo) => {
    const li = document.createElement('li');
    const checked = document.createElement('input');
    const text = document.createElement('input');
    const menuIcon = document.createElement('span');
    const deleteIcon = document.createElement('span');
    li.setAttribute('class', 'li-wrapper');
    checked.type = 'checkbox';
    checked.name = 'task-done';
    checked.checked = false;
    checked.id = todo.index;
    text.type = 'text';
    text.name = 'task';
    text.value = todo.description;
    text.id = todo.index;
    text.disabled = true;
    text.style.cursor = 'pointer';
    text.style.background = 'none';
    text.style.color = 'black';
    menuIcon.innerHTML = '<i class="fas fa-ellipsis-v " for="select"></i>';
    deleteIcon.innerHTML = `<i class="fas fa-trash-alt" id="${todo.index}"></i>`;
    deleteIcon.style.display = 'none';
    li.appendChild(checked);
    li.appendChild(text);
    li.appendChild(menuIcon);
    li.appendChild(deleteIcon);
    _domElement_js__WEBPACK_IMPORTED_MODULE_1__.list.appendChild(li);
    if (todo.completed === true) {
      checked.checked = true;
      text.style.textDecoration = 'line-through';
    }

    const deleteTodo = (e) => {
      const taskId = e.target.id;
      _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos = _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.filter((todo) => todo.index !== Number(taskId));
      _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos = _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.map((todo) => {
        if (todo.index > taskId) {
          deleteIcon.id = todo.index - 1;
          return {
            description: todo.description,
            completed: todo.completed,
            index: todo.index - 1,
          };
        }

        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos));
      e.target.parentElement.parentElement.remove();
    };

    const changeTodoValue = (e, text) => {
      const textId = e.target.id;
      if (e.key === 'Enter') {
        _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos = _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.map((todo) => {
          if (Number(textId) === todo.index) {
            return {
              description: text.value,
              completed: false,
              index: todo.index,
            };
          }

          return todo;
        });
        localStorage.setItem('todos', JSON.stringify(_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos));
        display();
      }
    };

    menuIcon.addEventListener('click', () => {
      deleteIcon.style.display = 'block';
      menuIcon.style.display = 'none';
      text.disabled = false;
      text.style.background = '#f1f5f9';

      text.addEventListener('keydown', (e) => changeTodoValue(e, text));
    });

    deleteIcon.addEventListener('click', (e) => deleteTodo(e));

    checked.addEventListener('change', (e) => {
      const taskId = e.target.id;
      if (text.style.textDecoration === 'line-through') {
        text.style.textDecoration = '';
      } else {
        text.style.textDecoration = 'line-through';
      }

      _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos = _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos.map((todo) => {
        if (Number(taskId) === todo.index) {
          return {
            description: todo.description,
            completed: !todo.completed,
            index: todo.index,
          };
        }

        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos));
    });
  });
  // }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./modules/domElement.js":
/*!*******************************!*\
  !*** ./modules/domElement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
const list = document.querySelector('ul');
const form = document.querySelector('form');
const clear = document.querySelector('.clear-btn');


/***/ }),

/***/ "./modules/getTodos.js":
/*!*****************************!*\
  !*** ./modules/getTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./modules/data.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./modules/display.js");



const getTodos = () => {
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('todos')) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].todos = JSON.parse(localStorage.getItem('todos'));
      (0,_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTodos);


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #eee;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  height: 100vh;\r\n}\r\n\r\ni {\r\n  color: rgb(149, 139, 139);\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.list-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  margin: auto;\r\n  background-color: #fff;\r\n  box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.02);\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  padding: 1rem;\r\n  font-weight: 700;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  width: 100%;\r\n  margin: auto;\r\n  background-color: #fff;\r\n  box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.02);\r\n  border-radius: 10px;\r\n  padding: 5px 0;\r\n}\r\n\r\n.input-text {\r\n  padding: 0.5rem;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n.insert-text {\r\n  width: 100%;\r\n  padding: 0.4rem;\r\n  border: none;\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.insert-text:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.list-container {\r\n  list-style: none;\r\n}\r\n\r\n.li-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 10px;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n.li-wrapper input[type=\"checkbox\"] {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.li-wrapper input[type=\"text\"] {\r\n  border: none;\r\n  outline: none;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.clear-elements {\r\n  padding: 15px 0;\r\n  text-align: center;\r\n  background-color: #dedede;\r\n  color: #757575;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  color: inherit;\r\n  border: none;\r\n  padding: 0;\r\n  font: inherit;\r\n  cursor: pointer;\r\n  outline: inherit;\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\nhtml {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  background-color: rgba(227, 231, 234, 0.308);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  margin-top: 10em;\r\n  margin-bottom: 2em;\r\n  border: 0.5px solid #ddd9d9dd;\r\n  box-shadow: 4px 5px #e5e6e9;\r\n}\r\n\r\n.main-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px 0;\r\n  padding-left: 2%;\r\n  font-style: normal;\r\n  color: #696969eb;\r\n  font-size: medium;\r\n  border-bottom: 1px solid #c1bcbcdd;\r\n}\r\n\r\n.main-heading span {\r\n  color: #9a9898dd;\r\n  font-size: large;\r\n  text-align: right;\r\n  margin-right: 3%;\r\n}\r\n\r\n.Add-list input {\r\n  width: 100%;\r\n  font-style: italic;\r\n  padding: 10px;\r\n  padding-left: 2%;\r\n  border: none;\r\n  border-bottom: 1px solid #c1bcbcdd;\r\n}\r\n\r\n.Add-list ::-webkit-input-placeholder {\r\n  font-style: italic;\r\n  padding-left: 1%;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n  gap: 1%;\r\n  padding-left: 2%;\r\n  border-bottom: 1px solid #c1bcbcdd;\r\n}\r\n\r\n.list-item input {\r\n  color: #c0bcbcdd;\r\n}\r\n\r\n.list-item span {\r\n  color: #9a9898dd;\r\n}\r\n\r\n.list-item label {\r\n  width: 90%;\r\n  font-size: small;\r\n}\r\n\r\n.clearBtn {\r\n  font-size: small;\r\n  padding: 10px;\r\n  color: #6f6c6cdd;\r\n  border: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,sBAAsB;EACtB,8CAA8C;EAC9C,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,yCAAyC;EACzC,aAAa;EACb,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,8CAA8C;EAC9C,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,UAAU;EACV,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAIA;EACE,WAAW;EACX,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,4CAA4C;AAC9C;;AAEA;;;EAGE,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,6BAA6B;EAC7B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,OAAO;EACP,gBAAgB;EAChB,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #eee;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  height: 100vh;\r\n}\r\n\r\ni {\r\n  color: rgb(149, 139, 139);\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.list-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  margin: auto;\r\n  background-color: #fff;\r\n  box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.02);\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  padding: 1rem;\r\n  font-weight: 700;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  width: 100%;\r\n  margin: auto;\r\n  background-color: #fff;\r\n  box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.02);\r\n  border-radius: 10px;\r\n  padding: 5px 0;\r\n}\r\n\r\n.input-text {\r\n  padding: 0.5rem;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n.insert-text {\r\n  width: 100%;\r\n  padding: 0.4rem;\r\n  border: none;\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.insert-text:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.list-container {\r\n  list-style: none;\r\n}\r\n\r\n.li-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 10px;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n.li-wrapper input[type=\"checkbox\"] {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.li-wrapper input[type=\"text\"] {\r\n  border: none;\r\n  outline: none;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.clear-elements {\r\n  padding: 15px 0;\r\n  text-align: center;\r\n  background-color: #dedede;\r\n  color: #757575;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  color: inherit;\r\n  border: none;\r\n  padding: 0;\r\n  font: inherit;\r\n  cursor: pointer;\r\n  outline: inherit;\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\r\n\r\nhtml {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  background-color: rgba(227, 231, 234, 0.308);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  margin-top: 10em;\r\n  margin-bottom: 2em;\r\n  border: 0.5px solid #ddd9d9dd;\r\n  box-shadow: 4px 5px #e5e6e9;\r\n}\r\n\r\n.main-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px 0;\r\n  padding-left: 2%;\r\n  font-style: normal;\r\n  color: #696969eb;\r\n  font-size: medium;\r\n  border-bottom: 1px solid #c1bcbcdd;\r\n}\r\n\r\n.main-heading span {\r\n  color: #9a9898dd;\r\n  font-size: large;\r\n  text-align: right;\r\n  margin-right: 3%;\r\n}\r\n\r\n.Add-list input {\r\n  width: 100%;\r\n  font-style: italic;\r\n  padding: 10px;\r\n  padding-left: 2%;\r\n  border: none;\r\n  border-bottom: 1px solid #c1bcbcdd;\r\n}\r\n\r\n.Add-list ::-webkit-input-placeholder {\r\n  font-style: italic;\r\n  padding-left: 1%;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n  gap: 1%;\r\n  padding-left: 2%;\r\n  border-bottom: 1px solid #c1bcbcdd;\r\n}\r\n\r\n.list-item input {\r\n  color: #c0bcbcdd;\r\n}\r\n\r\n.list-item span {\r\n  color: #9a9898dd;\r\n}\r\n\r\n.list-item label {\r\n  width: 90%;\r\n  font-size: small;\r\n}\r\n\r\n.clearBtn {\r\n  font-size: small;\r\n  padding: 10px;\r\n  color: #6f6c6cdd;\r\n  border: none;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/addTodo.js */ "./modules/addTodo.js");
/* harmony import */ var _modules_domElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/domElement.js */ "./modules/domElement.js");
/* harmony import */ var _modules_getTodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/getTodos.js */ "./modules/getTodos.js");
/* harmony import */ var _modules_clearTodo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/clearTodo.js */ "./modules/clearTodo.js");
/* harmony import */ var _modules_ToDoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/ToDoList */ "./modules/ToDoList.js");







(0,_modules_getTodos_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

_modules_domElement_js__WEBPACK_IMPORTED_MODULE_2__.form.addEventListener('submit', (e) => (0,_modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));

_modules_domElement_js__WEBPACK_IMPORTED_MODULE_2__.clear.addEventListener('click', _modules_clearTodo_js__WEBPACK_IMPORTED_MODULE_4__["default"]);



const toDoList = document.querySelector('.main');

const TASKS = () => {
  let taskList = '';

  for (let i = 0; i < _modules_ToDoList__WEBPACK_IMPORTED_MODULE_5__["default"].length; i += 1) {
    const list = `
        <div class="list-item" > 
        <input type="checkbox" name="task" value="task" ${_modules_ToDoList__WEBPACK_IMPORTED_MODULE_5__["default"][i].completed}>  
        <label for="item">${_modules_ToDoList__WEBPACK_IMPORTED_MODULE_5__["default"][i].description}</label>
        <span class="material-symbols-outlined">more_vert</span>            
        </div>
            `;
    taskList += list;
  }

  toDoList.innerHTML = taskList;
  console.log(toDoList);
};

TASKS();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ3JCO0FBQzRDO0FBQ1c7QUFDVDtBQUNFO0FBQ2hEO0FBQ0EsZ0VBQVE7QUFDUjtBQUNBLHlFQUFxQixrQkFBa0IsK0RBQU87QUFDOUM7QUFDQSwwRUFBc0IsVUFBVSw2REFBUztBQUNGO0FBQ2xCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLGdFQUFXLEVBQUU7QUFDbkM7QUFDQTtBQUNBLDBEQUEwRCx5REFBSSxjQUFjO0FBQzVFLDRCQUE0Qix5REFBSSxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vbW9kdWxlcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL21vZHVsZXMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL21vZHVsZXMvY2xlYXJUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbW9kdWxlcy9kYXRhLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbW9kdWxlcy9kb21FbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbW9kdWxlcy9nZXRUb2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b0RvID0gW1xyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnc2hvcHBpbmcnLFxyXG4gICAgY29tcGxldGVkOiAnZmFsc2UnLFxyXG4gICAgaW5kZXg6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ3dhc2ggdGhlIGRpc2hlcycsXHJcbiAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXHJcbiAgICBpbmRleDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnY29tcGxldGUgdG8gZG8gbGlzdCBwcm9qZWN0JyxcclxuICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcclxuICAgIGluZGV4OiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdyZWFkaW5nJyxcclxuICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcclxuICAgIGluZGV4OiAzLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IHRvRG87IiwiaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJztcclxuaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vZG9tRWxlbWVudC5qcyc7XHJcblxyXG5jb25zdCBhZGRUb2RvID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdGFzayA9IGZvcm0udGFza3MudmFsdWU7XHJcbiAgaWYgKHRhc2sgPT09ICcgJykgcmV0dXJuO1xyXG5cclxuICBjb25zdCBuZXdUb2RvID0ge1xyXG4gICAgZGVzY3JpcHRpb246IHRhc2ssXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaW5kZXg6IGRhdGEudG9kb3MubGVuZ3RoICsgMSxcclxuICB9O1xyXG4gIGZvcm0udGFza3MudmFsdWUgPSAnJztcclxuICBkYXRhLnRvZG9zLnB1c2gobmV3VG9kbyk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2RvcykpO1xyXG4gIGRpc3BsYXkoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFRvZG87XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qcyc7XHJcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcyc7XHJcblxyXG5jb25zdCBjbGVhclRvZG8gPSAoKSA9PiB7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBkYXRhLnRvZG9zID0gZGF0YS50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY29tcGxldGVkICE9PSB0cnVlKTtcclxuXHJcbiAgZGF0YS50b2RvcyA9IGRhdGEudG9kb3MubWFwKCh0b2RvKSA9PiAoe1xyXG4gICAgZGVzY3JpcHRpb246IHRvZG8uZGVzY3JpcHRpb24sXHJcbiAgICBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkLFxyXG4gICAgaW5kZXg6IGNvdW50KyssXHJcbiAgfSkpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KGRhdGEudG9kb3MpKTtcclxuICBkaXNwbGF5KCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhclRvZG87XHJcbiIsImNvbnN0IGRhdGEgPSB7XHJcbiAgICB0b2RvczogW10sXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4gICIsImltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qcyc7XHJcbmltcG9ydCB7IGxpc3QgfSBmcm9tICcuL2RvbUVsZW1lbnQuanMnO1xyXG5cclxuY29uc3QgZGlzcGxheSA9ICgpID0+IHtcclxuICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gIGRhdGEudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGktd3JhcHBlcicpO1xyXG4gICAgY2hlY2tlZC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIGNoZWNrZWQubmFtZSA9ICd0YXNrLWRvbmUnO1xyXG4gICAgY2hlY2tlZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBjaGVja2VkLmlkID0gdG9kby5pbmRleDtcclxuICAgIHRleHQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRleHQubmFtZSA9ICd0YXNrJztcclxuICAgIHRleHQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgdGV4dC5pZCA9IHRvZG8uaW5kZXg7XHJcbiAgICB0ZXh0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHRleHQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgdGV4dC5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnO1xyXG4gICAgdGV4dC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICBtZW51SWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdiBcIiBmb3I9XCJzZWxlY3RcIj48L2k+JztcclxuICAgIGRlbGV0ZUljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiIGlkPVwiJHt0b2RvLmluZGV4fVwiPjwvaT5gO1xyXG4gICAgZGVsZXRlSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tlZCk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIGxpLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBpZiAodG9kby5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgY2hlY2tlZC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgdGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5pZDtcclxuICAgICAgZGF0YS50b2RvcyA9IGRhdGEudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmluZGV4ICE9PSBOdW1iZXIodGFza0lkKSk7XHJcbiAgICAgIGRhdGEudG9kb3MgPSBkYXRhLnRvZG9zLm1hcCgodG9kbykgPT4ge1xyXG4gICAgICAgIGlmICh0b2RvLmluZGV4ID4gdGFza0lkKSB7XHJcbiAgICAgICAgICBkZWxldGVJY29uLmlkID0gdG9kby5pbmRleCAtIDE7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgY29tcGxldGVkOiB0b2RvLmNvbXBsZXRlZCxcclxuICAgICAgICAgICAgaW5kZXg6IHRvZG8uaW5kZXggLSAxLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2RvcykpO1xyXG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRvZG9WYWx1ZSA9IChlLCB0ZXh0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRleHRJZCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICBkYXRhLnRvZG9zID0gZGF0YS50b2Rvcy5tYXAoKHRvZG8pID0+IHtcclxuICAgICAgICAgIGlmIChOdW1iZXIodGV4dElkKSA9PT0gdG9kby5pbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0ZXh0LnZhbHVlLFxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaW5kZXg6IHRvZG8uaW5kZXgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2RvcykpO1xyXG4gICAgICAgIGRpc3BsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZGVsZXRlSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgbWVudUljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGV4dC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB0ZXh0LnN0eWxlLmJhY2tncm91bmQgPSAnI2YxZjVmOSc7XHJcblxyXG4gICAgICB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gY2hhbmdlVG9kb1ZhbHVlKGUsIHRleHQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlVG9kbyhlKSk7XHJcblxyXG4gICAgY2hlY2tlZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5pZDtcclxuICAgICAgaWYgKHRleHQuc3R5bGUudGV4dERlY29yYXRpb24gPT09ICdsaW5lLXRocm91Z2gnKSB7XHJcbiAgICAgICAgdGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRleHQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YS50b2RvcyA9IGRhdGEudG9kb3MubWFwKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgaWYgKE51bWJlcih0YXNrSWQpID09PSB0b2RvLmluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGluZGV4OiB0b2RvLmluZGV4LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2RvcykpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8gfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcclxuIiwiZXhwb3J0IGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5leHBvcnQgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuZXhwb3J0IGNvbnN0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ0bicpO1xyXG4iLCJpbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXkuanMnO1xyXG5cclxuY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkge1xyXG4gICAgICBkYXRhLnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XHJcbiAgICAgIGRpc3BsYXkoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFRvZG9zO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgY29sb3I6IHJnYigxNDksIDEzOSwgMTM5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2MwYzBjMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzBjMGMwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zZXJ0LXRleHQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluc2VydC10ZXh0OmZvY3VzLXZpc2libGUge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjMGMwYzA7XFxyXFxufVxcclxcblxcclxcbi5saS13cmFwcGVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saS13cmFwcGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItZWxlbWVudHMge1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcXHJcXG4gIGNvbG9yOiAjNzU3NTc1O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIzMSwgMjM0LCAwLjMwOCk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNkZGQ5ZDlkZDtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA1cHggI2U1ZTZlOTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBjb2xvcjogIzY5Njk2OWViO1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYmNiY2RkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkaW5nIHNwYW4ge1xcclxcbiAgY29sb3I6ICM5YTk4OThkZDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5BZGQtbGlzdCBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWJjYmNkZDtcXHJcXG59XFxyXFxuXFxyXFxuLkFkZC1saXN0IDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGdhcDogMSU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWJjYmNkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSBpbnB1dCB7XFxyXFxuICBjb2xvcjogI2MwYmNiY2RkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHNwYW4ge1xcclxcbiAgY29sb3I6ICM5YTk4OThkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSBsYWJlbCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyQnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY29sb3I6ICM2ZjZjNmNkZDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsOENBQThDO0VBQzlDLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsOENBQThDO0VBQzlDLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUlBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNENBQTRDO0FBQzlDOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTQ5LCAxMzksIDEzOSk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjAyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjMGMwYzA7XFxyXFxufVxcclxcblxcclxcbiNmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2MwYzBjMDtcXHJcXG59XFxyXFxuXFxyXFxuLmluc2VydC10ZXh0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnNlcnQtdGV4dDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGktd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzBjMGMwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGktd3JhcHBlciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGktd3JhcHBlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWVsZW1lbnRzIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XFxyXFxuICBjb2xvcjogIzc1NzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjMxLCAyMzQsIDAuMzA4KTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMTBlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2RkZDlkOWRkO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDVweCAjZTVlNmU5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiAjNjk2OTY5ZWI7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFiY2JjZGQ7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWhlYWRpbmcgc3BhbiB7XFxyXFxuICBjb2xvcjogIzlhOTg5OGRkO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLkFkZC1saXN0IGlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYmNiY2RkO1xcclxcbn1cXHJcXG5cXHJcXG4uQWRkLWxpc3QgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZ2FwOiAxJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYmNiY2RkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIGlucHV0IHtcXHJcXG4gIGNvbG9yOiAjYzBiY2JjZGQ7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0gc3BhbiB7XFxyXFxuICBjb2xvcjogIzlhOTg5OGRkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIGxhYmVsIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJCdG4ge1xcclxcbiAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjb2xvcjogIzZmNmM2Y2RkO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IGFkZFRvZG8gZnJvbSAnLi4vbW9kdWxlcy9hZGRUb2RvLmpzJztcclxuaW1wb3J0IHsgZm9ybSwgY2xlYXIgfSBmcm9tICcuLi9tb2R1bGVzL2RvbUVsZW1lbnQuanMnO1xyXG5pbXBvcnQgZ2V0VG9kb3MgZnJvbSAnLi4vbW9kdWxlcy9nZXRUb2Rvcy5qcyc7XHJcbmltcG9ydCBjbGVhclRvZG8gZnJvbSAnLi4vbW9kdWxlcy9jbGVhclRvZG8uanMnO1xyXG5cclxuZ2V0VG9kb3MoKTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGFkZFRvZG8oZSkpO1xyXG5cclxuY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclRvZG8pO1xyXG5pbXBvcnQgdG9EbyBmcm9tICcuLi9tb2R1bGVzL1RvRG9MaXN0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcblxyXG5jb25zdCBUQVNLUyA9ICgpID0+IHtcclxuICBsZXQgdGFza0xpc3QgPSAnJztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiA+IFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidGFza1wiIHZhbHVlPVwidGFza1wiICR7dG9Eb1tpXS5jb21wbGV0ZWR9PiAgXHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW1cIj4ke3RvRG9baV0uZGVzY3JpcHRpb259PC9sYWJlbD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5tb3JlX3ZlcnQ8L3NwYW4+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICB0YXNrTGlzdCArPSBsaXN0O1xyXG4gIH1cclxuXHJcbiAgdG9Eb0xpc3QuaW5uZXJIVE1MID0gdGFza0xpc3Q7XHJcbiAgY29uc29sZS5sb2codG9Eb0xpc3QpO1xyXG59O1xyXG5cclxuVEFTS1MoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9