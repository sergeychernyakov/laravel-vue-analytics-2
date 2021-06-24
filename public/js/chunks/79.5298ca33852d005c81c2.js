(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./frontend/src/@core/comp-functions/ui/app.js":
/*!*****************************************************!*\
  !*** ./frontend/src/@core/comp-functions/ui/app.js ***!
  \*****************************************************/
/*! exports provided: useResponsiveAppLeftSidebarVisibility, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResponsiveAppLeftSidebarVisibility", function() { return useResponsiveAppLeftSidebarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");


var useResponsiveAppLeftSidebarVisibility = function useResponsiveAppLeftSidebarVisibility() {
  var mqShallShowLeftSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false); // Close Active Sidebars and other stuff when going in large device

  var currentBreakPoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['app/currentBreakPoint'];
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(currentBreakPoint, function (val, oldVal) {
    // Reset chats & contacts left sidebar
    if (oldVal === 'md' && val === 'lg') mqShallShowLeftSidebar.value = false;
  });
  return {
    mqShallShowLeftSidebar: mqShallShowLeftSidebar
  };
};
var _ = {};

/***/ }),

/***/ "./frontend/src/@core/utils/filter.js":
/*!********************************************!*\
  !*** ./frontend/src/@core/utils/filter.js ***!
  \********************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend/src/@core/utils/utils.js");

var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./frontend/src/@core/utils/utils.js":
/*!*******************************************!*\
  !*** ./frontend/src/@core/utils/utils.js ***!
  \*******************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return _objectSpread(_objectSpread({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./frontend/src/views/apps/chat/Chat.vue":
/*!***********************************************!*\
  !*** ./frontend/src/views/apps/chat/Chat.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_796abdbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=796abdbd&scoped=true& */ "./frontend/src/views/apps/chat/Chat.vue?vue&type=template&id=796abdbd&scoped=true&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=1&lang=scss& */ "./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_796abdbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_796abdbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "796abdbd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/chat/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/Chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/chat/Chat.vue?vue&type=template&id=796abdbd&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/Chat.vue?vue&type=template&id=796abdbd&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_796abdbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=796abdbd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/Chat.vue?vue&type=template&id=796abdbd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_796abdbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_796abdbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue":
/*!*******************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_0b533e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=0b533e2a& */ "./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=0b533e2a&");
/* harmony import */ var _ChatActiveChatContentDetailsSidedbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatActiveChatContentDetailsSidedbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_0b533e2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_0b533e2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=0b533e2a&":
/*!**************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=0b533e2a& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_0b533e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=0b533e2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=0b533e2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_0b533e2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_0b533e2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatContact.vue":
/*!******************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatContact.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatContact_vue_vue_type_template_id_366d7fd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=template&id=366d7fd3& */ "./frontend/src/views/apps/chat/ChatContact.vue?vue&type=template&id=366d7fd3&");
/* harmony import */ var _ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatContact_vue_vue_type_template_id_366d7fd3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatContact_vue_vue_type_template_id_366d7fd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/chat/ChatContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatContact.vue?vue&type=template&id=366d7fd3&":
/*!*************************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatContact.vue?vue&type=template&id=366d7fd3& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_366d7fd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContact.vue?vue&type=template&id=366d7fd3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatContact.vue?vue&type=template&id=366d7fd3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_366d7fd3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_366d7fd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatLeftSidebar.vue":
/*!**********************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatLeftSidebar.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatLeftSidebar_vue_vue_type_template_id_fbae1df0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatLeftSidebar.vue?vue&type=template&id=fbae1df0& */ "./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=fbae1df0&");
/* harmony import */ var _ChatLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLeftSidebar.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatLeftSidebar_vue_vue_type_template_id_fbae1df0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatLeftSidebar_vue_vue_type_template_id_fbae1df0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/chat/ChatLeftSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLeftSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=fbae1df0&":
/*!*****************************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=fbae1df0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_template_id_fbae1df0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLeftSidebar.vue?vue&type=template&id=fbae1df0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=fbae1df0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_template_id_fbae1df0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_template_id_fbae1df0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatLog.vue":
/*!**************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatLog.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatLog_vue_vue_type_template_id_da7adb12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=template&id=da7adb12& */ "./frontend/src/views/apps/chat/ChatLog.vue?vue&type=template&id=da7adb12&");
/* harmony import */ var _ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatLog_vue_vue_type_template_id_da7adb12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatLog_vue_vue_type_template_id_da7adb12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/chat/ChatLog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/chat/ChatLog.vue?vue&type=template&id=da7adb12&":
/*!*********************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/ChatLog.vue?vue&type=template&id=da7adb12& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_da7adb12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLog.vue?vue&type=template&id=da7adb12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatLog.vue?vue&type=template&id=da7adb12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_da7adb12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_da7adb12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/chat/UserProfileSidebar.vue":
/*!*************************************************************!*\
  !*** ./frontend/src/views/apps/chat/UserProfileSidebar.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfileSidebar_vue_vue_type_template_id_e03f027a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfileSidebar.vue?vue&type=template&id=e03f027a&scoped=true& */ "./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=e03f027a&scoped=true&");
/* harmony import */ var _UserProfileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfileSidebar.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserProfileSidebar_vue_vue_type_style_index_0_id_e03f027a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true& */ "./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserProfileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfileSidebar_vue_vue_type_template_id_e03f027a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfileSidebar_vue_vue_type_template_id_e03f027a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e03f027a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/chat/UserProfileSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfileSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_e03f027a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_e03f027a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_e03f027a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_e03f027a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_e03f027a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=e03f027a&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=e03f027a&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_template_id_e03f027a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfileSidebar.vue?vue&type=template&id=e03f027a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=e03f027a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_template_id_e03f027a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_template_id_e03f027a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/chat/chatStoreModule.js":
/*!*********************************************************!*\
  !*** ./frontend/src/views/apps/chat/chatStoreModule.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @axios */ "./frontend/src/libs/axios.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchChatsAndContacts: function fetchChatsAndContacts() {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/apps/chat/chats-and-contacts').then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    getProfileUser: function getProfileUser() {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/apps/chat/users/profile-user').then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    getChat: function getChat(ctx, _ref) {
      var userId = _ref.userId;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/apps/chat/chats/".concat(userId)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    sendMessage: function sendMessage(ctx, _ref2) {
      var contactId = _ref2.contactId,
          message = _ref2.message,
          senderId = _ref2.senderId;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/apps/chat/chats/".concat(contactId), {
          message: message,
          senderId: senderId
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./frontend/src/views/apps/chat/useChat.js":
/*!*************************************************!*\
  !*** ./frontend/src/views/apps/chat/useChat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useChat; });
function useChat() {
  var resolveAvatarBadgeVariant = function resolveAvatarBadgeVariant(status) {
    if (status === 'online') return 'success';
    if (status === 'busy') return 'danger';
    if (status === 'away') return 'warning';
    return 'secondary';
  };

  return {
    resolveAvatarBadgeVariant: resolveAvatarBadgeVariant
  };
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/Chat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
/* harmony import */ var _core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/comp-functions/ui/app */ "./frontend/src/@core/comp-functions/ui/app.js");
/* harmony import */ var _ChatLeftSidebar_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatLeftSidebar.vue */ "./frontend/src/views/apps/chat/ChatLeftSidebar.vue");
/* harmony import */ var _chatStoreModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatStoreModule */ "./frontend/src/views/apps/chat/chatStoreModule.js");
/* harmony import */ var _ChatActiveChatContentDetailsSidedbar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatActiveChatContentDetailsSidedbar.vue */ "./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue");
/* harmony import */ var _ChatLog_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChatLog.vue */ "./frontend/src/views/apps/chat/ChatLog.vue");
/* harmony import */ var _useChat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useChat */ "./frontend/src/views/apps/chat/useChat.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import { formatDate } from '@core/utils/filter'








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // BSV
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BAvatar"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BDropdownItem"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    // 3rd Party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a,
    // SFC
    ChatLeftSidebar: _ChatLeftSidebar_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ChatActiveChatContentDetailsSidedbar: _ChatActiveChatContentDetailsSidedbar_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    ChatLog: _ChatLog_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  setup: function setup() {
    var CHAT_APP_STORE_MODULE_NAME = 'app-chat'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].hasModule(CHAT_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_0__["default"].registerModule(CHAT_APP_STORE_MODULE_NAME, _chatStoreModule__WEBPACK_IMPORTED_MODULE_7__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].hasModule(CHAT_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_0__["default"].unregisterModule(CHAT_APP_STORE_MODULE_NAME);
    });

    var _useChat = Object(_useChat__WEBPACK_IMPORTED_MODULE_10__["default"])(),
        resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant; // Scroll to Bottom ChatLog


    var refChatLogPS = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);

    var scrollToBottomInChatLog = function scrollToBottomInChatLog() {
      var scrollEl = refChatLogPS.value.$el || refChatLogPS.value;
      scrollEl.scrollTop = scrollEl.scrollHeight;
    }; // ------------------------------------------------
    // Chats & Contacts
    // ------------------------------------------------


    var chatsContacts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]);
    var contacts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]);

    var fetchChatAndContacts = function fetchChatAndContacts() {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-chat/fetchChatsAndContacts').then(function (response) {
        chatsContacts.value = response.data.chatsContacts;
        contacts.value = response.data.contacts; // eslint-disable-next-line no-use-before-define

        profileUserDataMinimal.value = response.data.profileUser;
      });
    };

    fetchChatAndContacts(); // ------------------------------------------------
    // Single Chat
    // ------------------------------------------------

    var activeChat = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({});
    var chatInputMessage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])('');

    var openChatOfContact = function openChatOfContact(userId) {
      // Reset send message input value
      chatInputMessage.value = '';
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-chat/getChat', {
        userId: userId
      }).then(function (response) {
        activeChat.value = response.data; // Set unseenMsgs to 0

        var contact = chatsContacts.value.find(function (c) {
          return c.id === userId;
        });
        if (contact) contact.chat.unseenMsgs = 0; // Scroll to bottom

        Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
          scrollToBottomInChatLog();
        });
      }); // if SM device =>  Close Chat & Contacts left sidebar
      // eslint-disable-next-line no-use-before-define

      mqShallShowLeftSidebar.value = false;
    };

    var sendMessage = function sendMessage() {
      if (!chatInputMessage.value) return;
      var payload = {
        contactId: activeChat.value.contact.id,
        // eslint-disable-next-line no-use-before-define
        senderId: profileUserDataMinimal.value.id,
        message: chatInputMessage.value
      };
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-chat/sendMessage', payload).then(function (response) {
        var _response$data = response.data,
            newMessageData = _response$data.newMessageData,
            chat = _response$data.chat; // ? If it's not undefined => New chat is created (Contact is not in list of chats)

        if (chat !== undefined) {
          activeChat.value = {
            chat: chat,
            contact: activeChat.value.contact
          };
          chatsContacts.value.push(_objectSpread(_objectSpread({}, activeChat.value.contact), {}, {
            chat: {
              id: chat.id,
              lastMessage: newMessageData,
              unseenMsgs: 0
            }
          }));
        } else {
          // Add message to log
          activeChat.value.chat.chat.push(newMessageData);
        } // Reset send message input value


        chatInputMessage.value = ''; // Set Last Message for active contact

        var contact = chatsContacts.value.find(function (c) {
          return c.id === activeChat.value.contact.id;
        });
        contact.chat.lastMessage = newMessageData; // Scroll to bottom

        Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
          scrollToBottomInChatLog();
        });
      });
    };

    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    }; // User Profile Sidebar
    // ? Will contain all details of profile user (e.g. settings, about etc.)

    var profileUserData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({}); // ? Will contain id, name and avatar & status

    var profileUserDataMinimal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({});
    var shallShowUserProfileSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);

    var showUserProfileSidebar = function showUserProfileSidebar() {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-chat/getProfileUser').then(function (response) {
        profileUserData.value = response.data;
        shallShowUserProfileSidebar.value = true;
      });
    }; // Active Chat Contact Details


    var shallShowActiveChatContactSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false); // UI + SM Devices
    // Left Sidebar Responsiveness

    var _useResponsiveAppLeft = Object(_core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_5__["useResponsiveAppLeftSidebarVisibility"])(),
        mqShallShowLeftSidebar = _useResponsiveAppLeft.mqShallShowLeftSidebar;

    var startConversation = function startConversation() {
      if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].state.app.windowWidth < _themeConfig__WEBPACK_IMPORTED_MODULE_4__["$themeBreakpoints"].lg) {
        mqShallShowLeftSidebar.value = true;
      }
    };

    return {
      // Filters
      // formatDate,
      // useChat
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant,
      // Chat & Contacts
      chatsContacts: chatsContacts,
      contacts: contacts,
      // Single Chat
      refChatLogPS: refChatLogPS,
      activeChat: activeChat,
      chatInputMessage: chatInputMessage,
      openChatOfContact: openChatOfContact,
      sendMessage: sendMessage,
      // Profile User Minimal Data
      profileUserDataMinimal: profileUserDataMinimal,
      // User Profile Sidebar
      profileUserData: profileUserData,
      shallShowUserProfileSidebar: shallShowUserProfileSidebar,
      showUserProfileSidebar: showUserProfileSidebar,
      // Active Chat Contact Details
      shallShowActiveChatContactSidebar: shallShowActiveChatContactSidebar,
      // UI
      perfectScrollbarSettings: perfectScrollbarSettings,
      // UI + SM Devices
      startConversation: startConversation,
      mqShallShowLeftSidebar: mqShallShowLeftSidebar
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // BSV
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    // 3rd Party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    shallShowActiveChatContactSidebar: {
      type: Boolean,
      required: true
    },
    contact: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    };
    return {
      perfectScrollbarSettings: perfectScrollbarSettings
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
/* harmony import */ var _useChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useChat */ "./frontend/src/views/apps/chat/useChat.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"]
  },
  props: {
    tag: {
      type: String,
      "default": 'div'
    },
    user: {
      type: Object,
      required: true
    },
    isChatContact: {
      type: Boolean,
      dedfault: false
    }
  },
  setup: function setup() {
    var _useChat = Object(_useChat__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant;

    return {
      formatDateToMonthShort: _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__["formatDateToMonthShort"],
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _ChatContact_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatContact.vue */ "./frontend/src/views/apps/chat/ChatContact.vue");
/* harmony import */ var _UserProfileSidebar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfileSidebar.vue */ "./frontend/src/views/apps/chat/UserProfileSidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // BSV
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroupPrepend"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    // 3rd party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    // SFC
    ChatContact: _ChatContact_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    UserProfileSidebar: _UserProfileSidebar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    chatsContacts: {
      type: Array,
      required: true
    },
    contacts: {
      type: Array,
      required: true
    },
    shallShowUserProfileSidebar: {
      type: Boolean,
      required: true
    },
    profileUserData: {
      type: Object,
      required: true
    },
    profileUserMinimalData: {
      type: Object,
      required: true
    },
    activeChatContactId: {
      type: Number,
      "default": null
    },
    mqShallShowLeftSidebar: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(props) {
    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    };

    var resolveChatContact = function resolveChatContact(userId) {
      return props.contacts.find(function (contact) {
        return contact.id === userId;
      });
    }; // Search Query


    var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])('');

    var searchFilterFunction = function searchFilterFunction(contact) {
      return contact.fullName.toLowerCase().includes(searchQuery.value.toLowerCase());
    };

    var filteredChatsContacts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return props.chatsContacts.filter(searchFilterFunction);
    });
    var filteredContacts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return props.contacts.filter(searchFilterFunction);
    });
    return {
      // Search Query
      searchQuery: searchQuery,
      filteredChatsContacts: filteredChatsContacts,
      filteredContacts: filteredContacts,
      // UI
      resolveChatContact: resolveChatContact,
      perfectScrollbarSettings: perfectScrollbarSettings
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"]
  },
  props: {
    chatData: {
      type: Object,
      required: true
    },
    profileUserAvatar: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var formattedChatData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      var contact = {
        id: props.chatData.contact.id,
        avatar: props.chatData.contact.avatar
      };
      var chatLog = [];

      if (props.chatData.chat) {
        chatLog = props.chatData.chat.chat;
      }

      var formattedChatLog = [];
      var chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined;
      var msgGroup = {
        sender: chatMessageSenderId,
        messages: []
      };
      chatLog.forEach(function (msg, index) {
        if (chatMessageSenderId === msg.senderId) {
          msgGroup.messages.push({
            msg: msg.message,
            time: msg.time
          });
        } else {
          chatMessageSenderId = msg.senderId;
          formattedChatLog.push(msgGroup);
          msgGroup = {
            senderId: msg.senderId,
            messages: [{
              msg: msg.message,
              time: msg.time
            }]
          };
        }

        if (index === chatLog.length - 1) formattedChatLog.push(msgGroup);
      });
      return {
        formattedChatLog: formattedChatLog,
        contact: contact,
        profileUserAvatar: props.profileUserAvatar
      };
    });
    return {
      formattedChatData: formattedChatData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    shallShowUserProfileSidebar: {
      type: Boolean,
      required: true
    },
    profileUserData: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    };
    var userStatusOptions = [{
      text: 'Active',
      value: 'online',
      radioVariant: 'success'
    }, {
      text: 'Do Not Disturb',
      value: 'busy',
      radioVariant: 'danger'
    }, {
      text: 'Away',
      value: 'away',
      radioVariant: 'warning'
    }, {
      text: 'Offline',
      value: 'offline',
      radioVariant: 'secondary'
    }];
    return {
      perfectScrollbarSettings: perfectScrollbarSettings,
      userStatusOptions: userStatusOptions
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \"{\".\n  ╷\n4 │ --theme-bg: #c6538c;\n  │                    ^\n  ╵\n  frontend/src/assets/scss/variables/_variables.scss 4:20             @import\n  frontend/src/@core/scss/base/bootstrap-extended/_include.scss 18:9  @import\n  frontend/src/@core/scss/base/pages/app-chat.scss 10:9               @import\n  /Users/vuestorefront/Sites/localhost/new-laravel-project/frontend/src/views/apps/chat/Chat.vue 392:9                                                         root stylesheet");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #user-status-options[data-v-e03f027a]  .custom-radio {\n  margin-bottom: 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=e03f027a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/Chat.vue?vue&type=template&id=796abdbd&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/Chat.vue?vue&type=template&id=796abdbd&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { height: "inherit" } },
    [
      _c("div", {
        staticClass: "body-content-overlay",
        class: {
          show:
            _vm.shallShowUserProfileSidebar ||
            _vm.shallShowActiveChatContactSidebar ||
            _vm.mqShallShowLeftSidebar
        },
        on: {
          click: function($event) {
            _vm.mqShallShowLeftSidebar = _vm.shallShowActiveChatContactSidebar = _vm.shallShowUserProfileSidebar = false
          }
        }
      }),
      _vm._v(" "),
      _c("section", { staticClass: "chat-app-window" }, [
        !_vm.activeChat.contact
          ? _c("div", { staticClass: "start-chat-area" }, [
              _c(
                "div",
                { staticClass: "mb-1 start-chat-icon" },
                [
                  _c("feather-icon", {
                    attrs: { icon: "MessageSquareIcon", size: "56" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h4",
                {
                  staticClass: "sidebar-toggle start-chat-text",
                  on: { click: _vm.startConversation }
                },
                [_vm._v("\n        Start Conversation\n      ")]
              )
            ])
          : _c(
              "div",
              { staticClass: "active-chat" },
              [
                _c("div", { staticClass: "chat-navbar" }, [
                  _c("header", { staticClass: "chat-header" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "sidebar-toggle d-block d-lg-none mr-1"
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer",
                              attrs: { icon: "MenuIcon", size: "21" },
                              on: {
                                click: function($event) {
                                  _vm.mqShallShowLeftSidebar = true
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-avatar", {
                          staticClass: "mr-1 cursor-pointer badge-minimal",
                          attrs: {
                            size: "36",
                            src: _vm.activeChat.contact.avatar,
                            badge: "",
                            "badge-variant": _vm.resolveAvatarBadgeVariant(
                              _vm.activeChat.contact.status
                            )
                          },
                          nativeOn: {
                            click: function($event) {
                              _vm.shallShowActiveChatContactSidebar = true
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("h6", { staticClass: "mb-0" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.activeChat.contact.fullName) +
                              "\n            "
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("feather-icon", {
                          staticClass: "cursor-pointer d-sm-block d-none mr-1",
                          attrs: { icon: "PhoneCallIcon", size: "17" }
                        }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "cursor-pointer d-sm-block d-none mr-1",
                          attrs: { icon: "VideoIcon", size: "17" }
                        }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "cursor-pointer d-sm-block d-none mr-50",
                          attrs: { icon: "SearchIcon", size: "17" }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown" },
                          [
                            _c(
                              "b-dropdown",
                              {
                                attrs: {
                                  variant: "link",
                                  "no-caret": "",
                                  "toggle-class": "p-0",
                                  right: ""
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "button-content",
                                    fn: function() {
                                      return [
                                        _c("feather-icon", {
                                          staticClass: "align-middle text-body",
                                          attrs: {
                                            icon: "MoreVerticalIcon",
                                            size: "17"
                                          }
                                        })
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              },
                              [
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  View Contact\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  Mute Notifications\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  Block Contact\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  Clear Chat\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  Report\n                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "vue-perfect-scrollbar",
                  {
                    ref: "refChatLogPS",
                    staticClass: "user-chats scroll-area",
                    attrs: { settings: _vm.perfectScrollbarSettings }
                  },
                  [
                    _c("chat-log", {
                      attrs: {
                        "chat-data": _vm.activeChat,
                        "profile-user-avatar": _vm.profileUserDataMinimal.avatar
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form",
                  {
                    staticClass: "chat-app-form",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.sendMessage($event)
                      }
                    }
                  },
                  [
                    _c(
                      "b-input-group",
                      {
                        staticClass: "input-group-merge form-send-message mr-1"
                      },
                      [
                        _c("b-form-input", {
                          attrs: { placeholder: "Enter your message" },
                          model: {
                            value: _vm.chatInputMessage,
                            callback: function($$v) {
                              _vm.chatInputMessage = $$v
                            },
                            expression: "chatInputMessage"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { attrs: { variant: "primary", type: "submit" } },
                      [_vm._v("\n          Send\n        ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
      ]),
      _vm._v(" "),
      _c("chat-active-chat-content-details-sidedbar", {
        attrs: {
          "shall-show-active-chat-contact-sidebar":
            _vm.shallShowActiveChatContactSidebar,
          contact: _vm.activeChat.contact || {}
        },
        on: {
          "update:shallShowActiveChatContactSidebar": function($event) {
            _vm.shallShowActiveChatContactSidebar = $event
          },
          "update:shall-show-active-chat-contact-sidebar": function($event) {
            _vm.shallShowActiveChatContactSidebar = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "content-renderer-sidebar-left" } },
        [
          _c("chat-left-sidebar", {
            attrs: {
              "chats-contacts": _vm.chatsContacts,
              contacts: _vm.contacts,
              "active-chat-contact-id": _vm.activeChat.contact
                ? _vm.activeChat.contact.id
                : null,
              "shall-show-user-profile-sidebar":
                _vm.shallShowUserProfileSidebar,
              "profile-user-data": _vm.profileUserData,
              "profile-user-minimal-data": _vm.profileUserDataMinimal,
              "mq-shall-show-left-sidebar": _vm.mqShallShowLeftSidebar
            },
            on: {
              "update:shallShowUserProfileSidebar": function($event) {
                _vm.shallShowUserProfileSidebar = $event
              },
              "update:shall-show-user-profile-sidebar": function($event) {
                _vm.shallShowUserProfileSidebar = $event
              },
              "update:mqShallShowLeftSidebar": function($event) {
                _vm.mqShallShowLeftSidebar = $event
              },
              "update:mq-shall-show-left-sidebar": function($event) {
                _vm.mqShallShowLeftSidebar = $event
              },
              "show-user-profile": _vm.showUserProfileSidebar,
              "open-chat": _vm.openChatOfContact
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=0b533e2a&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=0b533e2a& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "user-profile-sidebar",
      class: { show: _vm.shallShowActiveChatContactSidebar }
    },
    [
      _vm.contact
        ? _c("header", { staticClass: "user-profile-header" }, [
            _c(
              "span",
              { staticClass: "close-icon" },
              [
                _c("feather-icon", {
                  attrs: { icon: "XIcon" },
                  on: {
                    click: function($event) {
                      return _vm.$emit(
                        "update:shall-show-active-chat-contact-sidebar",
                        false
                      )
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "header-profile-sidebar" }, [
              _c(
                "div",
                { staticClass: "avatar box-shadow-1 avatar-xl avatar-border" },
                [
                  _c("b-avatar", {
                    attrs: { size: "70", src: _vm.contact.avatar }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "avatar-status-xl",
                    class: "avatar-status-" + _vm.contact.status
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "chat-user-name" }, [
                _vm._v("\n        " + _vm._s(_vm.contact.fullName) + "\n      ")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "user-post text-capitalize" }, [
                _vm._v(_vm._s(_vm.contact.role))
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "user-profile-sidebar-area scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings }
        },
        [
          _c("h6", { staticClass: "section-label mb-1" }, [
            _vm._v("\n      About\n    ")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.contact.about))]),
          _vm._v(" "),
          _c("div", { staticClass: "personal-info" }, [
            _c("h6", { staticClass: "section-label mb-1 mt-3" }, [
              _vm._v("\n        Personal Information\n      ")
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "list-unstyled" }, [
              _c(
                "li",
                { staticClass: "mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "MailIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("lucifer@email.com")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "PhoneCallIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("+1(123) 456 - 7890")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "ClockIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Mon - Fri 10AM - 8PM")
                  ])
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "more-options" }, [
            _c("h6", { staticClass: "section-label mb-1 mt-3" }, [
              _vm._v("\n        Options\n      ")
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "list-unstyled" }, [
              _c(
                "li",
                { staticClass: "cursor-pointer mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "TagIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Add Tag")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "cursor-pointer mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "StarIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Important Contact")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "cursor-pointer mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "ImageIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Shared Media")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "cursor-pointer mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "TrashIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Delete Contact")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "cursor-pointer" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "SlashIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Block Contact")
                  ])
                ],
                1
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatContact.vue?vue&type=template&id=366d7fd3&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/ChatContact.vue?vue&type=template&id=366d7fd3& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    _vm.tag,
    _vm._g({ tag: "component" }, _vm.$listeners),
    [
      _c("b-avatar", {
        staticClass: "badge-minimal",
        attrs: {
          size: "42",
          src: _vm.user.avatar,
          badge: _vm.isChatContact,
          "badge-variant": _vm.resolveAvatarBadgeVariant(_vm.user.status),
          variant: "transparent"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "chat-info flex-grow-1" }, [
        _c("h5", { staticClass: "mb-0" }, [
          _vm._v("\n      " + _vm._s(_vm.user.fullName) + "\n    ")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "card-text text-truncate" }, [
          _vm._v(
            "\n      " +
              _vm._s(
                _vm.isChatContact
                  ? _vm.user.chat.lastMessage.message
                  : _vm.user.about
              ) +
              "\n    "
          )
        ])
      ]),
      _vm._v(" "),
      _vm.isChatContact
        ? _c(
            "div",
            { staticClass: "chat-meta text-nowrap" },
            [
              _c("small", { staticClass: "float-right mb-25 chat-time" }, [
                _vm._v(
                  _vm._s(
                    _vm.formatDateToMonthShort(_vm.user.chat.lastMessage.time, {
                      hour: "numeric",
                      minute: "numeric"
                    })
                  )
                )
              ]),
              _vm._v(" "),
              _vm.user.chat.unseenMsgs
                ? _c(
                    "b-badge",
                    {
                      staticClass: "float-right",
                      attrs: { pill: "", variant: "primary" }
                    },
                    [
                      _vm._v(
                        "\n      " + _vm._s(_vm.user.chat.unseenMsgs) + "\n    "
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=fbae1df0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=fbae1df0& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sidebar-left" }, [
    _c(
      "div",
      { staticClass: "sidebar" },
      [
        _c("user-profile-sidebar", {
          attrs: {
            "shall-show-user-profile-sidebar": _vm.shallShowUserProfileSidebar,
            "profile-user-data": _vm.profileUserData
          },
          on: {
            "close-sidebar": function($event) {
              return _vm.$emit("update:shall-show-user-profile-sidebar", false)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "sidebar-content",
            class: { show: _vm.mqShallShowLeftSidebar }
          },
          [
            _c(
              "span",
              { staticClass: "sidebar-close-icon" },
              [
                _c("feather-icon", {
                  attrs: { icon: "XIcon", size: "16" },
                  on: {
                    click: function($event) {
                      return _vm.$emit(
                        "update:mq-shall-show-left-sidebar",
                        false
                      )
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "chat-fixed-search" }, [
              _c(
                "div",
                { staticClass: "d-flex align-items-center w-100" },
                [
                  _c(
                    "div",
                    { staticClass: "sidebar-profile-toggle" },
                    [
                      _c("b-avatar", {
                        staticClass:
                          "cursor-pointer badge-minimal avatar-border-2",
                        attrs: {
                          size: "42",
                          src: _vm.profileUserMinimalData.avatar,
                          variant: "transparent",
                          badge: "",
                          "badge-variant": "success"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.$emit("show-user-profile")
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "input-group-merge ml-1 w-100 round" },
                    [
                      _c(
                        "b-input-group-prepend",
                        { attrs: { "is-text": "" } },
                        [
                          _c("feather-icon", {
                            staticClass: "text-muted",
                            attrs: { icon: "SearchIcon" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-input", {
                        attrs: { placeholder: "Search..." },
                        model: {
                          value: _vm.searchQuery,
                          callback: function($$v) {
                            _vm.searchQuery = $$v
                          },
                          expression: "searchQuery"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "vue-perfect-scrollbar",
              {
                staticClass: "chat-user-list-wrapper list-group scroll-area",
                attrs: { settings: _vm.perfectScrollbarSettings }
              },
              [
                _c("h4", { staticClass: "chat-list-title" }, [
                  _vm._v("\n          Chats\n        ")
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "chat-users-list chat-list media-list" },
                  _vm._l(_vm.filteredChatsContacts, function(contact) {
                    return _c("chat-contact", {
                      key: contact.id,
                      class: { active: _vm.activeChatContactId === contact.id },
                      attrs: {
                        user: contact,
                        tag: "li",
                        "is-chat-contact": ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.$emit("open-chat", contact.id)
                        }
                      }
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "chat-list-title" }, [
                  _vm._v("\n          Contacts\n        ")
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "chat-users-list contact-list media-list" },
                  _vm._l(_vm.filteredContacts, function(contact) {
                    return _c("chat-contact", {
                      key: contact.id,
                      attrs: { user: contact, tag: "li" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("open-chat", contact.id)
                        }
                      }
                    })
                  }),
                  1
                )
              ]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/ChatLog.vue?vue&type=template&id=da7adb12&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/ChatLog.vue?vue&type=template&id=da7adb12& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "chats" },
    _vm._l(_vm.formattedChatData.formattedChatLog, function(msgGrp, index) {
      return _c(
        "div",
        {
          key: msgGrp.senderId + String(index),
          staticClass: "chat",
          class: {
            "chat-left": msgGrp.senderId === _vm.formattedChatData.contact.id
          }
        },
        [
          _c(
            "div",
            { staticClass: "chat-avatar" },
            [
              _c("b-avatar", {
                staticClass: "avatar-border-2 box-shadow-1",
                attrs: {
                  size: "36",
                  variant: "transparent",
                  src:
                    msgGrp.senderId === _vm.formattedChatData.contact.id
                      ? _vm.formattedChatData.contact.avatar
                      : _vm.profileUserAvatar
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "chat-body" },
            _vm._l(msgGrp.messages, function(msgData) {
              return _c(
                "div",
                { key: msgData.time, staticClass: "chat-content" },
                [_c("p", [_vm._v(_vm._s(msgData.msg))])]
              )
            }),
            0
          )
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=e03f027a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=e03f027a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "chat-profile-sidebar",
      class: { show: _vm.shallShowUserProfileSidebar }
    },
    [
      _c("header", { staticClass: "chat-profile-header" }, [
        _c(
          "span",
          { staticClass: "close-icon" },
          [
            _c("feather-icon", {
              attrs: { icon: "XIcon" },
              on: {
                click: function($event) {
                  return _vm.$emit("close-sidebar")
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "header-profile-sidebar" }, [
          _c(
            "div",
            { staticClass: "avatar box-shadow-1 avatar-xl avatar-border" },
            [
              _c("b-avatar", {
                attrs: { size: "70", src: _vm.profileUserData.avatar }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "avatar-status-xl",
                class: "avatar-status-" + _vm.profileUserData.status
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("h4", { staticClass: "chat-user-name" }, [
            _vm._v(
              "\n        " + _vm._s(_vm.profileUserData.fullName) + "\n      "
            )
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "user-post text-capitalize" }, [
            _vm._v(_vm._s(_vm.profileUserData.role))
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "profile-sidebar-area scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings }
        },
        [
          _c("h6", { staticClass: "section-label mb-1" }, [
            _vm._v("\n      About\n    ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "about-user" },
            [
              _c("b-form-textarea", {
                attrs: {
                  placeholder: "Something about yourself...",
                  rows: "5"
                },
                model: {
                  value: _vm.profileUserData.about,
                  callback: function($$v) {
                    _vm.$set(_vm.profileUserData, "about", $$v)
                  },
                  expression: "profileUserData.about"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "section-label mb-1 mt-3" }, [
            _vm._v("\n      Status\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-form-radio-group",
            {
              attrs: { id: "user-status-options", stacked: "" },
              model: {
                value: _vm.profileUserData.status,
                callback: function($$v) {
                  _vm.$set(_vm.profileUserData, "status", $$v)
                },
                expression: "profileUserData.status"
              }
            },
            _vm._l(_vm.userStatusOptions, function(option) {
              return _c(
                "b-form-radio",
                {
                  key: option.value,
                  class: "custom-control-" + option.radioVariant,
                  attrs: { value: option.value }
                },
                [_vm._v("\n        " + _vm._s(option.text) + "\n      ")]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "section-label mb-1 mt-2" }, [
            _vm._v("\n      Settings\n    ")
          ]),
          _vm._v(" "),
          _vm.profileUserData.settings
            ? _c("ul", { staticClass: "list-unstyled" }, [
                _c(
                  "li",
                  {
                    staticClass:
                      "d-flex justify-content-between align-items-center mb-1"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-75",
                          attrs: { icon: "CheckSquareIcon", size: "18" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle" }, [
                          _vm._v("Two-step Verification")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("b-form-checkbox", {
                      attrs: { switch: "" },
                      model: {
                        value:
                          _vm.profileUserData.settings
                            .isTwoStepAuthVerificationEnabled,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.profileUserData.settings,
                            "isTwoStepAuthVerificationEnabled",
                            $$v
                          )
                        },
                        expression:
                          "profileUserData.settings.isTwoStepAuthVerificationEnabled"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass:
                      "d-flex justify-content-between align-items-center mb-1"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-75",
                          attrs: { icon: "BellIcon", size: "18" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle" }, [
                          _vm._v("Notification")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("b-form-checkbox", {
                      attrs: { switch: "" },
                      model: {
                        value: _vm.profileUserData.settings.isNotificationsOn,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.profileUserData.settings,
                            "isNotificationsOn",
                            $$v
                          )
                        },
                        expression: "profileUserData.settings.isNotificationsOn"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "mb-1 d-flex align-items-center cursor-pointer"
                  },
                  [
                    _c("feather-icon", {
                      staticClass: "mr-75",
                      attrs: { icon: "UserIcon", size: "18" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "align-middle" }, [
                      _vm._v("Invite Friends")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "d-flex align-items-center cursor-pointer" },
                  [
                    _c("feather-icon", {
                      staticClass: "mr-75",
                      attrs: { icon: "TrashIcon", size: "18" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "align-middle" }, [
                      _vm._v("Delete Account")
                    ])
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-3" },
            [
              _c("b-button", { attrs: { variant: "primary" } }, [
                _vm._v("\n        Logout\n      ")
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);