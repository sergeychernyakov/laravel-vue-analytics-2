(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./frontend/src/@core/comp-functions/forms/form-utils.js":
/*!***************************************************************!*\
  !*** ./frontend/src/@core/comp-functions/forms/form-utils.js ***!
  \***************************************************************/
/*! exports provided: useInputImageRenderer, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInputImageRenderer", function() { return useInputImageRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
var useInputImageRenderer = function useInputImageRenderer(inputEl, callback) {
  var inputImageRenderer = function inputImageRenderer() {
    var file = inputEl.value.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      callback(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return {
    inputImageRenderer: inputImageRenderer
  };
};
var _ = null;

/***/ }),

/***/ "./frontend/src/views/products/AccountSetting.vue":
/*!********************************************************!*\
  !*** ./frontend/src/views/products/AccountSetting.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSetting_vue_vue_type_template_id_a343a65a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSetting.vue?vue&type=template&id=a343a65a& */ "./frontend/src/views/products/AccountSetting.vue?vue&type=template&id=a343a65a&");
/* harmony import */ var _AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSetting.vue?vue&type=script&lang=js& */ "./frontend/src/views/products/AccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSetting_vue_vue_type_template_id_a343a65a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSetting_vue_vue_type_template_id_a343a65a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/products/AccountSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/products/AccountSetting.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSetting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/products/AccountSetting.vue?vue&type=template&id=a343a65a&":
/*!***************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSetting.vue?vue&type=template&id=a343a65a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_a343a65a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSetting.vue?vue&type=template&id=a343a65a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSetting.vue?vue&type=template&id=a343a65a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_a343a65a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_a343a65a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/products/AccountSettingGeneral.vue":
/*!***************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingGeneral.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingGeneral_vue_vue_type_template_id_48496676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingGeneral.vue?vue&type=template&id=48496676& */ "./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=template&id=48496676&");
/* harmony import */ var _AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingGeneral.vue?vue&type=script&lang=js& */ "./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingGeneral_vue_vue_type_template_id_48496676___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingGeneral_vue_vue_type_template_id_48496676___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/products/AccountSettingGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=template&id=48496676&":
/*!**********************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=template&id=48496676& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_48496676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingGeneral.vue?vue&type=template&id=48496676& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=template&id=48496676&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_48496676___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_48496676___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/products/AccountSettingInformation.vue":
/*!*******************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingInformation.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingInformation_vue_vue_type_template_id_1f7a66ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingInformation.vue?vue&type=template&id=1f7a66ee& */ "./frontend/src/views/products/AccountSettingInformation.vue?vue&type=template&id=1f7a66ee&");
/* harmony import */ var _AccountSettingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingInformation.vue?vue&type=script&lang=js& */ "./frontend/src/views/products/AccountSettingInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingInformation_vue_vue_type_template_id_1f7a66ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingInformation_vue_vue_type_template_id_1f7a66ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/products/AccountSettingInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingInformation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingInformation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingInformation.vue?vue&type=template&id=1f7a66ee&":
/*!**************************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingInformation.vue?vue&type=template&id=1f7a66ee& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_template_id_1f7a66ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingInformation.vue?vue&type=template&id=1f7a66ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingInformation.vue?vue&type=template&id=1f7a66ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_template_id_1f7a66ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_template_id_1f7a66ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/products/AccountSettingNotification.vue":
/*!********************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingNotification.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingNotification_vue_vue_type_template_id_12d40bde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingNotification.vue?vue&type=template&id=12d40bde& */ "./frontend/src/views/products/AccountSettingNotification.vue?vue&type=template&id=12d40bde&");
/* harmony import */ var _AccountSettingNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingNotification.vue?vue&type=script&lang=js& */ "./frontend/src/views/products/AccountSettingNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingNotification_vue_vue_type_template_id_12d40bde___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingNotification_vue_vue_type_template_id_12d40bde___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/products/AccountSettingNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingNotification.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingNotification.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingNotification.vue?vue&type=template&id=12d40bde&":
/*!***************************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingNotification.vue?vue&type=template&id=12d40bde& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_template_id_12d40bde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingNotification.vue?vue&type=template&id=12d40bde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingNotification.vue?vue&type=template&id=12d40bde&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_template_id_12d40bde___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_template_id_12d40bde___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/products/AccountSettingPassword.vue":
/*!****************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingPassword.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingPassword_vue_vue_type_template_id_6b7a0b0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingPassword.vue?vue&type=template&id=6b7a0b0e& */ "./frontend/src/views/products/AccountSettingPassword.vue?vue&type=template&id=6b7a0b0e&");
/* harmony import */ var _AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingPassword.vue?vue&type=script&lang=js& */ "./frontend/src/views/products/AccountSettingPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingPassword_vue_vue_type_template_id_6b7a0b0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingPassword_vue_vue_type_template_id_6b7a0b0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/products/AccountSettingPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingPassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingPassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingPassword.vue?vue&type=template&id=6b7a0b0e&":
/*!***********************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingPassword.vue?vue&type=template&id=6b7a0b0e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_6b7a0b0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingPassword.vue?vue&type=template&id=6b7a0b0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingPassword.vue?vue&type=template&id=6b7a0b0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_6b7a0b0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_6b7a0b0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/products/AccountSettingSocial.vue":
/*!**************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingSocial.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingSocial_vue_vue_type_template_id_e43e6cc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingSocial.vue?vue&type=template&id=e43e6cc0& */ "./frontend/src/views/products/AccountSettingSocial.vue?vue&type=template&id=e43e6cc0&");
/* harmony import */ var _AccountSettingSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingSocial.vue?vue&type=script&lang=js& */ "./frontend/src/views/products/AccountSettingSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingSocial_vue_vue_type_template_id_e43e6cc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingSocial_vue_vue_type_template_id_e43e6cc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/products/AccountSettingSocial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingSocial.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingSocial.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingSocial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/products/AccountSettingSocial.vue?vue&type=template&id=e43e6cc0&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/views/products/AccountSettingSocial.vue?vue&type=template&id=e43e6cc0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_template_id_e43e6cc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingSocial.vue?vue&type=template&id=e43e6cc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingSocial.vue?vue&type=template&id=e43e6cc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_template_id_e43e6cc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_template_id_e43e6cc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/products/productStoreModule.js":
/*!***********************************************************!*\
  !*** ./frontend/src/views/products/productStoreModule.js ***!
  \***********************************************************/
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
    fetchProduct: function fetchProduct(ctx, _ref) {
      var id = _ref.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/order/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSetting.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSetting.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _AccountSettingGeneral_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingGeneral.vue */ "./frontend/src/views/products/AccountSettingGeneral.vue");
/* harmony import */ var _AccountSettingPassword_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountSettingPassword.vue */ "./frontend/src/views/products/AccountSettingPassword.vue");
/* harmony import */ var _AccountSettingInformation_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountSettingInformation.vue */ "./frontend/src/views/products/AccountSettingInformation.vue");
/* harmony import */ var _AccountSettingSocial_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccountSettingSocial.vue */ "./frontend/src/views/products/AccountSettingSocial.vue");
/* harmony import */ var _AccountSettingNotification_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccountSettingNotification.vue */ "./frontend/src/views/products/AccountSettingNotification.vue");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @axios */ "./frontend/src/libs/axios.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _productStoreModule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productStoreModule.js */ "./frontend/src/views/products/productStoreModule.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTab"],
    AccountSettingGeneral: _AccountSettingGeneral_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AccountSettingPassword: _AccountSettingPassword_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AccountSettingInformation: _AccountSettingInformation_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccountSettingSocial: _AccountSettingSocial_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AccountSettingNotification: _AccountSettingNotification_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  setup: function setup() {
    var productData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_9__["ref"])(null);
    var USER_APP_STORE_MODULE_NAME = 'app-user'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_7__["default"].hasModule(USER_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_7__["default"].registerModule(USER_APP_STORE_MODULE_NAME, _productStoreModule_js__WEBPACK_IMPORTED_MODULE_10__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_9__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_7__["default"].hasModule(USER_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_7__["default"].unregisterModule(USER_APP_STORE_MODULE_NAME);
    });
    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch('app-user/fetchProduct', {
      id: _router__WEBPACK_IMPORTED_MODULE_8__["default"].currentRoute.params.id
    }).then(function (response) {
      productData.value = response.data;
    })["catch"](function (error) {
      if (error.response.status === 404) {
        productData.value = undefined;
      }
    });
    return {
      productData: productData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_comp_functions_forms_form_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/comp-functions/forms/form-utils */ "./frontend/src/@core/comp-functions/forms/form-utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormFile"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    productData: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var refInputEl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);
    var previewEl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);

    var _useInputImageRendere = Object(_core_comp_functions_forms_form_utils__WEBPACK_IMPORTED_MODULE_2__["useInputImageRenderer"])(refInputEl, previewEl),
        inputImageRenderer = _useInputImageRendere.inputImageRenderer;

    return {
      refInputEl: refInputEl,
      previewEl: previewEl,
      inputImageRenderer: inputImageRenderer
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingInformation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingInformation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_comp_functions_forms_form_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/comp-functions/forms/form-utils */ "./frontend/src/@core/comp-functions/forms/form-utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormFile"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    productData: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var refInputEl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);
    var previewEl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);

    var _useInputImageRendere = Object(_core_comp_functions_forms_form_utils__WEBPACK_IMPORTED_MODULE_2__["useInputImageRenderer"])(refInputEl, previewEl),
        inputImageRenderer = _useInputImageRendere.inputImageRenderer;

    return {
      refInputEl: refInputEl,
      previewEl: previewEl,
      inputImageRenderer: inputImageRenderer
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingNotification.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingNotification.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    notificationData: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      localOptions: JSON.parse(JSON.stringify(this.notificationData))
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroupAppend"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      passwordValueOld: '',
      newPasswordValue: '',
      RetypePassword: '',
      passwordFieldTypeOld: 'password',
      passwordFieldTypeNew: 'password',
      passwordFieldTypeRetype: 'password'
    };
  },
  computed: {
    passwordToggleIconOld: function passwordToggleIconOld() {
      return this.passwordFieldTypeOld === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    },
    passwordToggleIconNew: function passwordToggleIconNew() {
      return this.passwordFieldTypeNew === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    },
    passwordToggleIconRetype: function passwordToggleIconRetype() {
      return this.passwordFieldTypeRetype === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    }
  },
  methods: {
    togglePasswordOld: function togglePasswordOld() {
      this.passwordFieldTypeOld = this.passwordFieldTypeOld === 'password' ? 'text' : 'password';
    },
    togglePasswordNew: function togglePasswordNew() {
      this.passwordFieldTypeNew = this.passwordFieldTypeNew === 'password' ? 'text' : 'password';
    },
    togglePasswordRetype: function togglePasswordRetype() {
      this.passwordFieldTypeRetype = this.passwordFieldTypeRetype === 'password' ? 'text' : 'password';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingSocial.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingSocial.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    socialData: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      localOptions: JSON.parse(JSON.stringify(this.socialData))
    };
  },
  methods: {
    resetForm: function resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.socialData));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSetting.vue?vue&type=template&id=a343a65a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSetting.vue?vue&type=template&id=a343a65a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "b-tabs",
    {
      attrs: {
        vertical: "",
        "content-class": "col-12 col-md-9 mt-1 mt-md-0",
        pills: "",
        "nav-wrapper-class": "col-md-3 col-12",
        "nav-class": "nav-left"
      }
    },
    [
      _c(
        "b-tab",
        {
          attrs: { active: "" },
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function() {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "UserIcon", size: "18" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("General")
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _vm.options.general
            ? _c("account-setting-general", {
                attrs: { "general-data": _vm.options.general }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function() {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "LockIcon", size: "18" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Change Password")
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [_vm._v(" "), _c("account-setting-password")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function() {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "InfoIcon", size: "18" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Information")
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _vm.options.info
            ? _c("account-setting-information", {
                attrs: { "information-data": _vm.options.info }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function() {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "LinkIcon", size: "18" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Social")
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _vm.options.social
            ? _c("account-setting-social", {
                attrs: { "social-data": _vm.options.social }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function() {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "BellIcon", size: "18" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Notifications")
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _vm.options.notification
            ? _c("account-setting-notification", {
                attrs: { "notification-data": _vm.options.notification }
              })
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=template&id=48496676&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingGeneral.vue?vue&type=template&id=48496676& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    [
      _c(
        "b-media",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-media-aside",
            [
              _c(
                "b-link",
                [
                  _c("b-img", {
                    ref: "previewEl",
                    attrs: {
                      rounded: "",
                      src: _vm.productData.avatar,
                      height: "80"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-media-body",
            { staticClass: "mt-75 ml-75" },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mb-75 mr-75",
                  attrs: { variant: "primary", size: "sm" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.refInputEl.$el.click()
                    }
                  }
                },
                [_vm._v("\n        Upload\n      ")]
              ),
              _vm._v(" "),
              _c("b-form-file", {
                ref: "refInputEl",
                attrs: { accept: ".jpg, .png, .gif", hidden: true, plain: "" },
                on: { input: _vm.inputImageRenderer },
                model: {
                  value: _vm.profileFile,
                  callback: function($$v) {
                    _vm.profileFile = $$v
                  },
                  expression: "profileFile"
                }
              }),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(186, 191, 199, 0.15)",
                      expression: "'rgba(186, 191, 199, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mb-75 mr-75",
                  attrs: { variant: "outline-secondary", size: "sm" }
                },
                [_vm._v("\n        Reset\n      ")]
              ),
              _vm._v(" "),
              _c("b-card-text", [
                _vm._v("Allowed JPG, GIF or PNG. Max size of 800kB")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form",
        { staticClass: "mt-2" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Username",
                        "label-for": "account-username"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: "Username", name: "username" },
                        model: {
                          value: _vm.productData.username,
                          callback: function($$v) {
                            _vm.$set(_vm.productData, "username", $$v)
                          },
                          expression: "productData.username"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Name", "label-for": "account-name" } },
                    [
                      _c("b-form-input", {
                        attrs: { name: "name", placeholder: "Name" },
                        model: {
                          value: _vm.productData.customer_email,
                          callback: function($$v) {
                            _vm.$set(_vm.productData, "customer_email", $$v)
                          },
                          expression: "productData.customer_email"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: { label: "E-mail", "label-for": "account-e-mail" }
                    },
                    [
                      _c("b-form-input", {
                        attrs: { name: "email", placeholder: "Email" },
                        model: {
                          value: _vm.productData.email,
                          callback: function($$v) {
                            _vm.$set(_vm.productData, "email", $$v)
                          },
                          expression: "productData.email"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Company",
                        "label-for": "account-company"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: { name: "company", placeholder: "Company name" },
                        model: {
                          value: _vm.productData.company,
                          callback: function($$v) {
                            _vm.$set(_vm.productData, "company", $$v)
                          },
                          expression: "productData.company"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mt-75", attrs: { cols: "12" } },
                [
                  _c(
                    "b-alert",
                    {
                      staticClass: "mb-50",
                      attrs: { show: "", variant: "warning" }
                    },
                    [
                      _c("h4", { staticClass: "alert-heading" }, [
                        _vm._v(
                          "\n            Your email is not confirmed. Please check your inbox.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "alert-body" },
                        [
                          _c("b-link", { staticClass: "alert-link" }, [
                            _vm._v(
                              "\n              Resend confirmation\n            "
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      staticClass: "mt-2 mr-1",
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("\n          Save changes\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      staticClass: "mt-2",
                      attrs: { variant: "outline-secondary", type: "reset" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetForm($event)
                        }
                      }
                    },
                    [_vm._v("\n          Reset\n        ")]
                  )
                ],
                1
              )
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingInformation.vue?vue&type=template&id=1f7a66ee&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingInformation.vue?vue&type=template&id=1f7a66ee& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    [
      _c(
        "b-media",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-media-aside",
            [
              _c(
                "b-link",
                [
                  _c("b-img", {
                    ref: "previewEl",
                    attrs: {
                      rounded: "",
                      src: _vm.productData.avatar,
                      height: "80"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-media-body",
            { staticClass: "mt-75 ml-75" },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mb-75 mr-75",
                  attrs: { variant: "primary", size: "sm" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.refInputEl.$el.click()
                    }
                  }
                },
                [_vm._v("\n        Upload\n      ")]
              ),
              _vm._v(" "),
              _c("b-form-file", {
                ref: "refInputEl",
                attrs: { accept: ".jpg, .png, .gif", hidden: true, plain: "" },
                on: { input: _vm.inputImageRenderer },
                model: {
                  value: _vm.profileFile,
                  callback: function($$v) {
                    _vm.profileFile = $$v
                  },
                  expression: "profileFile"
                }
              }),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(186, 191, 199, 0.15)",
                      expression: "'rgba(186, 191, 199, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mb-75 mr-75",
                  attrs: { variant: "outline-secondary", size: "sm" }
                },
                [_vm._v("\n        Reset\n      ")]
              ),
              _vm._v(" "),
              _c("b-card-text", [
                _vm._v("Allowed JPG, GIF or PNG. Max size of 800kB")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form",
        { staticClass: "mt-2" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Username",
                        "label-for": "account-username"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: "Username", name: "username" },
                        model: {
                          value: _vm.productData.username,
                          callback: function($$v) {
                            _vm.$set(_vm.productData, "username", $$v)
                          },
                          expression: "productData.username"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Name", "label-for": "account-name" } },
                    [
                      _c("b-form-input", {
                        attrs: { name: "name", placeholder: "Name" },
                        model: {
                          value: _vm.productData.customer_email,
                          callback: function($$v) {
                            _vm.$set(_vm.productData, "customer_email", $$v)
                          },
                          expression: "productData.customer_email"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: { label: "E-mail", "label-for": "account-e-mail" }
                    },
                    [
                      _c("b-form-input", {
                        attrs: { name: "email", placeholder: "Email" },
                        model: {
                          value: _vm.productData.email,
                          callback: function($$v) {
                            _vm.$set(_vm.productData, "email", $$v)
                          },
                          expression: "productData.email"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Company",
                        "label-for": "account-company"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: { name: "company", placeholder: "Company name" },
                        model: {
                          value: _vm.productData.company,
                          callback: function($$v) {
                            _vm.$set(_vm.productData, "company", $$v)
                          },
                          expression: "productData.company"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mt-75", attrs: { cols: "12" } },
                [
                  _c(
                    "b-alert",
                    {
                      staticClass: "mb-50",
                      attrs: { show: "", variant: "warning" }
                    },
                    [
                      _c("h4", { staticClass: "alert-heading" }, [
                        _vm._v(
                          "\n            Your email is not confirmed. Please check your inbox.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "alert-body" },
                        [
                          _c("b-link", { staticClass: "alert-link" }, [
                            _vm._v(
                              "\n              Resend confirmation\n            "
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      staticClass: "mt-2 mr-1",
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("\n          Save changes\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      staticClass: "mt-2",
                      attrs: { variant: "outline-secondary", type: "reset" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetForm($event)
                        }
                      }
                    },
                    [_vm._v("\n          Reset\n        ")]
                  )
                ],
                1
              )
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingNotification.vue?vue&type=template&id=12d40bde&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingNotification.vue?vue&type=template&id=12d40bde& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    [
      _c(
        "b-row",
        [
          _c("h6", { staticClass: "section-label mx-1 mb-2" }, [
            _vm._v("\n      Activity\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch1",
                    checked: _vm.localOptions.commentOnArticle,
                    name: "check-button",
                    switch: "",
                    inline: ""
                  }
                },
                [
                  _c("span", [
                    _vm._v("Email me when someone comments on my article")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch2",
                    checked: _vm.localOptions.AnswerOnForm,
                    name: "check-button",
                    switch: "",
                    inline: ""
                  }
                },
                [
                  _c("span", [
                    _vm._v("Email me when someone answers on my form")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch3",
                    checked: _vm.localOptions.followMe,
                    name: "check-button",
                    switch: "",
                    inline: ""
                  }
                },
                [_c("span", [_vm._v("Email me hen someone follows me")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "section-label mx-1 mt-2" }, [
            _vm._v("\n      Application\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mt-1 mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch4",
                    checked: _vm.localOptions.newAnnouncements,
                    name: "check-button",
                    switch: "",
                    inline: ""
                  }
                },
                [_c("span", [_vm._v("News and announcements")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch5",
                    checked: _vm.localOptions.productUpdates,
                    name: "check-button",
                    switch: "",
                    inline: ""
                  }
                },
                [_c("span", [_vm._v("Weekly product updates")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch6",
                    checked: _vm.localOptions.blogDigest,
                    name: "check-button",
                    switch: "",
                    inline: ""
                  }
                },
                [_c("span", [_vm._v("Weekly blog digest")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mr-1 mt-1",
                  attrs: { variant: "primary" }
                },
                [_vm._v("\n        Save changes\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(186, 191, 199, 0.15)",
                      expression: "'rgba(186, 191, 199, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mt-1",
                  attrs: { type: "reset", variant: "outline-secondary" }
                },
                [_vm._v("\n        Cancel\n      ")]
              )
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingPassword.vue?vue&type=template&id=6b7a0b0e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingPassword.vue?vue&type=template&id=6b7a0b0e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    [
      _c(
        "b-form",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Old Password",
                        "label-for": "account-old-password"
                      }
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "account-old-password",
                              name: "old-password",
                              type: _vm.passwordFieldTypeOld,
                              placeholder: "Old Password"
                            },
                            model: {
                              value: _vm.passwordValueOld,
                              callback: function($$v) {
                                _vm.passwordValueOld = $$v
                              },
                              expression: "passwordValueOld"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-append",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer",
                                attrs: { icon: _vm.passwordToggleIconOld },
                                on: { click: _vm.togglePasswordOld }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-new-password",
                        label: "New Password"
                      }
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "account-new-password",
                              type: _vm.passwordFieldTypeNew,
                              name: "new-password",
                              placeholder: "New Password"
                            },
                            model: {
                              value: _vm.newPasswordValue,
                              callback: function($$v) {
                                _vm.newPasswordValue = $$v
                              },
                              expression: "newPasswordValue"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-append",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer",
                                attrs: { icon: _vm.passwordToggleIconNew },
                                on: { click: _vm.togglePasswordNew }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-retype-new-password",
                        label: "Retype New Password"
                      }
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "account-retype-new-password",
                              type: _vm.passwordFieldTypeRetype,
                              name: "retype-password",
                              placeholder: "New Password"
                            },
                            model: {
                              value: _vm.RetypePassword,
                              callback: function($$v) {
                                _vm.RetypePassword = $$v
                              },
                              expression: "RetypePassword"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-append",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer",
                                attrs: { icon: _vm.passwordToggleIconRetype },
                                on: { click: _vm.togglePasswordRetype }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      staticClass: "mt-1 mr-1",
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("\n          Save changes\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      staticClass: "mt-1",
                      attrs: { type: "reset", variant: "outline-secondary" }
                    },
                    [_vm._v("\n          Reset\n        ")]
                  )
                ],
                1
              )
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/products/AccountSettingSocial.vue?vue&type=template&id=e43e6cc0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/products/AccountSettingSocial.vue?vue&type=template&id=e43e6cc0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    [
      _c(
        "b-form",
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { cols: "12" } }, [
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center mb-2" },
                  [
                    _c("feather-icon", {
                      attrs: { icon: "LinkIcon", size: "18" }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "mb-0 ml-75" }, [
                      _vm._v("\n            Social Links\n          ")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-twitter",
                        label: "Twitter"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-twitter",
                          placeholder: "Add link"
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.twitter,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "twitter",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.twitter"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-facebook",
                        label: "Facebook"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-facebook",
                          placeholder: "Add link"
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.facebook,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "facebook",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.facebook"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: { "label-for": "account-google", label: "Google+" }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-google",
                          placeholder: "Add link"
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.google,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "google",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.google"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-linkedin",
                        label: "LinkedIn"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-linkedin",
                          placeholder: "Add link"
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.linkedIn,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "linkedIn",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.linkedIn"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Instagram",
                        "label-for": "account-instagram"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-instagram",
                          placeholder: "Add link"
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.instagram,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "instagram",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.instagram"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { "label-for": "account-quora", label: "Quora" } },
                    [
                      _c("b-form-input", {
                        attrs: { id: "account-quora", placeholder: "Add link" },
                        model: {
                          value: _vm.localOptions.socialLinks.quora,
                          callback: function($$v) {
                            _vm.$set(_vm.localOptions.socialLinks, "quora", $$v)
                          },
                          expression: "localOptions.socialLinks.quora"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("b-col", { attrs: { cols: "12" } }, [
                _c("hr", { staticClass: "my-2" })
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mt-1", attrs: { cols: "12" } },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex align-items-center mb-3" },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "UserIcon", size: "18" }
                      }),
                      _vm._v(" "),
                      _c("h4", { staticClass: "mb-0 ml-75" }, [
                        _vm._v("\n            Profile Connections\n          ")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", cols: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "font-weight-bold" },
                            [
                              _vm._v(
                                "\n              Your Twitter\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-1" },
                            [
                              _c("b-avatar", {
                                attrs: {
                                  size: "40",
                                  src:
                                    _vm.localOptions.connections.twitter
                                      .profileImg
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-card-text", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n              @" +
                                _vm._s(
                                  _vm.localOptions.connections.twitter.id
                                ) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-link", [
                            _vm._v("\n              Disconnect\n            ")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", cols: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "font-weight-bold mb-2" },
                            [
                              _vm._v(
                                "\n              Your Facebook\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "ripple",
                                  rawName: "v-ripple.400",
                                  value: "rgba(113, 102, 240, 0.15)",
                                  expression: "'rgba(113, 102, 240, 0.15)'",
                                  modifiers: { "400": true }
                                }
                              ],
                              attrs: { variant: "outline-primary" }
                            },
                            [_vm._v("\n              Connect\n            ")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", cols: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "font-weight-bold" },
                            [
                              _vm._v(
                                "\n              Your Google\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-1" },
                            [
                              _c("b-avatar", {
                                attrs: {
                                  size: "40",
                                  src:
                                    _vm.localOptions.connections.google
                                      .profileImg
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-card-text", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n              @" +
                                _vm._s(_vm.localOptions.connections.google.id) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-link", [
                            _vm._v("\n              Disconnect\n            ")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", cols: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "font-weight-bold mb-2" },
                            [
                              _vm._v(
                                "\n              Your GitHub\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "ripple",
                                  rawName: "v-ripple.400",
                                  value: "rgba(113, 102, 240, 0.15)",
                                  expression: "'rgba(113, 102, 240, 0.15)'",
                                  modifiers: { "400": true }
                                }
                              ],
                              attrs: { variant: "outline-primary" }
                            },
                            [_vm._v("\n              Connect\n            ")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      staticClass: "mt-1 mr-1",
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("\n          Save changes\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      staticClass: "mt-1 ml-25",
                      attrs: { type: "reset", variant: "outline-secondary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetForm($event)
                        }
                      }
                    },
                    [_vm._v("\n          Cancel\n        ")]
                  )
                ],
                1
              )
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