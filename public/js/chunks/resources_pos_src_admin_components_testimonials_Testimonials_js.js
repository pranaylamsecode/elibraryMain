"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_admin_components_testimonials_Testimonials_js"],{

/***/ "./resources/pos/src/admin/components/testimonials/CreateTestimonial.js":
/*!******************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/CreateTestimonial.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _TestimonialForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestimonialForm */ "./resources/pos/src/admin/components/testimonials/TestimonialForm.js");
/* harmony import */ var _prepareTestimonialFormData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prepareTestimonialFormData */ "./resources/pos/src/admin/components/testimonials/prepareTestimonialFormData.js");
/* harmony import */ var _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/testimonialAction */ "./resources/pos/src/admin/store/actions/testimonialAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var CreateTestimonial = function CreateTestimonial(props) {
  var addTestimonial = props.addTestimonial,
    toggleModal = props.toggleModal;
  var onSaveTestimonial = function onSaveTestimonial(formValues) {
    addTestimonial((0,_prepareTestimonialFormData__WEBPACK_IMPORTED_MODULE_4__["default"])(formValues), _constants__WEBPACK_IMPORTED_MODULE_6__.Filters.OBJ);
  };
  var prepareFormOption = {
    initialValues: {
      isCreate: true
    },
    onSaveTestimonial: onSaveTestimonial,
    onCancel: toggleModal
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_TestimonialForm__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, prepareFormOption))
  }));
};
CreateTestimonial.propTypes = {
  addTestimonial: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  addTestimonial: _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_5__.addTestimonial
})(CreateTestimonial));

/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/DeleteTestimonial.js":
/*!******************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/DeleteTestimonial.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/action-buttons/DeleteAction */ "./resources/pos/src/shared/action-buttons/DeleteAction.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/testimonialAction */ "./resources/pos/src/admin/store/actions/testimonialAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DeleteTestimonial = function DeleteTestimonial(props) {
  var testimonialId = props.testimonialId,
    deleteTestimonial = props.deleteTestimonial,
    toggleModal = props.toggleModal,
    totalRecord = props.totalRecord;
  var onDeleteTestimonial = function onDeleteTestimonial() {
    deleteTestimonial(testimonialId, totalRecord);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onDelete: onDeleteTestimonial,
      onCancel: toggleModal
    })
  }));
};
DeleteTestimonial.propTypes = {
  testimonialId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  deleteTestimonial: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  deleteTestimonial: _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_4__.deleteTestimonial
})(DeleteTestimonial));

/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/EditTestimonial.js":
/*!****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/EditTestimonial.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TestimonialForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestimonialForm */ "./resources/pos/src/admin/components/testimonials/TestimonialForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _prepareTestimonialFormData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prepareTestimonialFormData */ "./resources/pos/src/admin/components/testimonials/prepareTestimonialFormData.js");
/* harmony import */ var _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/testimonialAction */ "./resources/pos/src/admin/store/actions/testimonialAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var prepareInitialValue = function prepareInitialValue(testimonial) {
  var id = testimonial.id,
    name = testimonial.name,
    occupation = testimonial.occupation,
    description = testimonial.description,
    image = testimonial.image,
    image_path = testimonial.image_path;
  return {
    id: id,
    name: name,
    occupation: occupation,
    description: description,
    image: image,
    image_path: image_path,
    file_name: !!image
  };
};
var EditTestimonial = function EditTestimonial(props) {
  var testimonial = props.testimonial,
    editTestimonial = props.editTestimonial,
    toggleModal = props.toggleModal;
  var onSaveTestimonial = function onSaveTestimonial(formValues) {
    editTestimonial(testimonial.id, (0,_prepareTestimonialFormData__WEBPACK_IMPORTED_MODULE_4__["default"])(formValues));
  };
  var prepareFormOption = {
    onSaveTestimonial: onSaveTestimonial,
    onCancel: toggleModal,
    initialValues: prepareInitialValue(testimonial)
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_TestimonialForm__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, prepareFormOption))
  }));
};
EditTestimonial.propTypes = {
  testimonial: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  editTestimonial: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  editTestimonial: _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_5__.editTestimonial
})(EditTestimonial));

/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/TestimonialForm.js":
/*!****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/TestimonialForm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Testimonials_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonials.scss */ "./resources/pos/src/admin/components/testimonials/Testimonials.scss");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../appConstant */ "./resources/pos/src/appConstant.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/pos/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/pos/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/image-picker/ImagePicker */ "./resources/pos/src/shared/image-picker/ImagePicker.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/pos/src/shared/custom-hooks/index.js");
/* harmony import */ var _testimonialValidate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testimonialValidate */ "./resources/pos/src/admin/components/testimonials/testimonialValidate.js");
/* harmony import */ var _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/TextArea */ "./resources/pos/src/shared/components/TextArea.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var TestimonialForm = function TestimonialForm(props) {
  var initialValues = props.initialValues,
    change = props.change,
    onSaveTestimonial = props.onSaveTestimonial,
    handleSubmit = props.handleSubmit;
  var inputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var _imagePicker = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_7__.imagePicker)(change, !!initialValues.image_path ? initialValues.image_path : !!initialValues.isCreate ? _appConstant__WEBPACK_IMPORTED_MODULE_2__.publicImagePath.USER_AVATAR : null, !!initialValues.isCreate ? _appConstant__WEBPACK_IMPORTED_MODULE_2__.publicImagePath.USER_AVATAR : null, !!!initialValues.image_path),
    _imagePicker2 = _slicedToArray(_imagePicker, 5),
    image = _imagePicker2[0],
    isDefaultImage = _imagePicker2[1],
    file = _imagePicker2[2],
    onFileChange = _imagePicker2[3],
    onRemovePhoto = _imagePicker2[4];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    inputRef.current.focus();
  }, []);
  var onSave = function onSave(formValues) {
    formValues.file = file;
    onSaveTestimonial(formValues);
  };
  var imagePickerOptions = {
    testimonial: {
      name: initialValues ? initialValues.name : null
    },
    image: image,
    isDefaultImage: isDefaultImage,
    onRemovePhoto: onRemovePhoto,
    onFileChange: onFileChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "animated fadeIn testimonial-form m-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
      xs: 8,
      className: "primary-detail",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_13__["default"], {
            name: "name",
            label: "testimonials.input.name.label",
            required: true,
            inputRef: inputRef,
            groupText: "user-circle-o",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_13__["default"], {
            name: "occupation",
            label: "testimonials.input.occupation.label",
            required: true,
            groupText: "user-circle-o",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_13__["default"], {
            name: "description",
            required: true,
            cols: 90,
            rows: 7,
            label: "testimonials.input.description.label",
            component: _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_9__["default"]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
      xs: 4,
      className: "testimonial-profile",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h5", {
        className: "testimonial-profile__title",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('testimonials.profile')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "mt-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: "file_name",
          type: "hidden",
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, imagePickerOptions))]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
        onSave: handleSubmit(onSave)
      }, props))
    })]
  });
};
TestimonialForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  onSaveTestimonial: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  change: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_form__WEBPACK_IMPORTED_MODULE_15__["default"])({
  form: 'testimonialForm',
  validate: _testimonialValidate__WEBPACK_IMPORTED_MODULE_8__["default"]
})(TestimonialForm));

/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/TestimonialModal.js":
/*!*****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/TestimonialModal.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialModal": () => (/* binding */ TestimonialModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CreateTestimonial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTestimonial */ "./resources/pos/src/admin/components/testimonials/CreateTestimonial.js");
/* harmony import */ var _EditTestimonial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditTestimonial */ "./resources/pos/src/admin/components/testimonials/EditTestimonial.js");
/* harmony import */ var _DeleteTestimonial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteTestimonial */ "./resources/pos/src/admin/components/testimonials/DeleteTestimonial.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal-config/ModalConfig */ "./resources/pos/src/shared/modal-config/ModalConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var TestimonialModal = function TestimonialModal(props) {
  var testimonial = props.testimonial,
    isCreate = props.isCreate,
    isEdit = props.isEdit,
    isDelete = props.isDelete,
    totalRecord = props.totalRecord;
  var editConfig = {
    testimonial: testimonial
  };
  var delConfig = {
    testimonialId: testimonial ? testimonial.id : null,
    totalRecord: totalRecord
  };
  var modalOptions = {
    modalTitle: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getModalTitle)(isCreate, isEdit, isDelete, 'testimonials.modal.add.title', 'testimonials.modal.edit.title', 'testimonials.modal.delete.title'),
    NewComponent: _CreateTestimonial__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditComponent: _EditTestimonial__WEBPACK_IMPORTED_MODULE_2__["default"],
    DeleteComponent: _DeleteTestimonial__WEBPACK_IMPORTED_MODULE_3__["default"],
    deleteKey: testimonial ? testimonial.name : null,
    editConfig: editConfig,
    delConfig: delConfig,
    isWide: true,
    props: props
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, modalOptions));
};
TestimonialModal.propTypes = {
  testimonial: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  isCreate: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isEdit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isDelete: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialModal);

/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/TestimonialTable.js":
/*!*****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/TestimonialTable.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Testimonials_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Testimonials.scss */ "./resources/pos/src/admin/components/testimonials/Testimonials.scss");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../appConstant */ "./resources/pos/src/appConstant.js");
/* harmony import */ var _shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/ModalAction */ "./resources/pos/src/shared/action-buttons/ModalAction.js");
/* harmony import */ var _shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/table/ReactDataTable */ "./resources/pos/src/shared/table/ReactDataTable.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













var TestimonialTable = function TestimonialTable(props) {
  var testimonials = props.testimonials,
    onClickModal = props.onClickModal,
    isLoading = props.isLoading,
    totalRecord = props.totalRecord,
    onChangeData = props.onChangeData;
  var columns = [{
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('react-data-table.image.column'),
    selector: 'image',
    width: '90px',
    cell: function cell(row) {
      var imageUrl = row.image_path ? row.image_path : null;
      if (imageUrl) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
        src: imageUrl ? imageUrl : null,
        className: "testimonial-table-row__profile-img",
        alt: imageUrl
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "user__avatar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getAvatarName)(row.name)
        })
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('react-data-table.name.column'),
    selector: 'name',
    sortable: true,
    minWidth: '200px'
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('react-data-table.occupation.column'),
    selector: 'occupation',
    sortable: true,
    minWidth: '200px'
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('react-data-table.action.column'),
    selector: 'id',
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    center: true,
    width: '150px',
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onOpenModal: onClickModal,
        item: row
      });
    }
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: testimonials,
    columns: columns,
    icon: _constants__WEBPACK_IMPORTED_MODULE_8__.icon.TESTIMONIAL,
    emptyStateMessageId: "testimonials.empty-state.title",
    emptyNotFoundStateMessageId: "testimonials.not-found.empty-state.title",
    loading: isLoading,
    totalRows: totalRecord,
    onChange: onChangeData
  });
};
TestimonialTable.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  testimonials: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().array),
  totalRecord: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  onChangeData: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  onClickModal: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
var testimonialForm = (0,redux_form__WEBPACK_IMPORTED_MODULE_11__["default"])({
  form: 'testimonialForm'
})(TestimonialTable);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  addToast: _store_action_toastAction__WEBPACK_IMPORTED_MODULE_7__.addToast
})(testimonialForm));

/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/Testimonials.js":
/*!*************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/Testimonials.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Testimonials_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Testimonials.scss */ "./resources/pos/src/admin/components/testimonials/Testimonials.scss");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/pos/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/pos/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/pos/src/shared/custom-hooks/index.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/testimonialAction */ "./resources/pos/src/admin/store/actions/testimonialAction.js");
/* harmony import */ var _TestimonialModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TestimonialModal */ "./resources/pos/src/admin/components/testimonials/TestimonialModal.js");
/* harmony import */ var _TestimonialTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TestimonialTable */ "./resources/pos/src/admin/components/testimonials/TestimonialTable.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Testimonials = function Testimonials(props) {
  var testimonials = props.testimonials,
    fetchTestimonials = props.fetchTestimonials,
    toggleModal = props.toggleModal,
    history = props.history,
    isLoading = props.isLoading,
    totalRecord = props.totalRecord;
  var _openModal = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_6__.openModal)(),
    _openModal2 = _slicedToArray(_openModal, 5),
    isCreate = _openModal2[0],
    isEdit = _openModal2[1],
    isDelete = _openModal2[2],
    testimonial = _openModal2[3],
    onOpenModal = _openModal2[4];
  var cardModalProps = {
    testimonial: testimonial,
    isCreate: isCreate,
    isEdit: isEdit,
    isDelete: isDelete,
    toggleModal: toggleModal,
    totalRecord: totalRecord
  };
  var onChangeData = function onChangeData(filter) {
    fetchTestimonials(filter, true);
  };
  var onClickModal = function onClickModal(isEdit) {
    var testimonial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onOpenModal(isEdit, testimonial, isDelete);
    toggleModal();
  };
  var cardBodyProps = {
    testimonials: testimonials,
    onClickModal: onClickModal,
    history: history,
    isLoading: isLoading,
    totalRecord: totalRecord,
    onChangeData: onChangeData
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      sm: 12,
      className: "mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "Testimonials"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h5", {
        className: "page-heading",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('testimonials.title')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "d-flex justify-content-end",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onClick: function onClick() {
            return onClickModal(false);
          },
          size: "md",
          color: "primary ml-2 text-white",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('testimonials.modal.add.title')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      sm: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "sticky-table-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_TestimonialTable__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread({}, cardBodyProps)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_TestimonialModal__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({}, cardModalProps))]
          })
        })
      })
    })]
  });
};
Testimonials.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),
  testimonials: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().array),
  totalRecord: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().number),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),
  fetchTestimonials: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  var testimonials = state.testimonials,
    isLoading = state.isLoading,
    totalRecord = state.totalRecord;
  return {
    testimonials: testimonials,
    isLoading: isLoading,
    totalRecord: totalRecord
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchTestimonials: _store_actions_testimonialAction__WEBPACK_IMPORTED_MODULE_8__.fetchTestimonials,
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_7__.toggleModal
})(Testimonials));

/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/prepareTestimonialFormData.js":
/*!***************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/prepareTestimonialFormData.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var formData = new FormData();
  var name = formValues.name,
    occupation = formValues.occupation,
    description = formValues.description,
    file = formValues.file,
    file_name = formValues.file_name;
  formData.append('name', name);
  formData.append('occupation', occupation ? occupation : '');
  formData.append('description', description ? description : '');
  if (file) {
    formData.append('image', file, file.name);
  }
  if (!file_name && !file) {
    formData.append('remove_image', '1');
  }
  return formData;
});

/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/testimonialValidate.js":
/*!********************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/testimonialValidate.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");


/**
 *  Validation of testimonial
 * @param formValues
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.name) {
    errors.name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('testimonials.input.name.validate.label');
  }
  if (!formValues.occupation) {
    errors.occupation = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('testimonials.input.occupation.validate.label');
  }
  if (!formValues.description) {
    errors.description = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('testimonials.input.description.validate.label');
  }
  return errors;
});

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/testimonialAction.js":
/*!********************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/testimonialAction.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTestimonial": () => (/* binding */ addTestimonial),
/* harmony export */   "deleteTestimonial": () => (/* binding */ deleteTestimonial),
/* harmony export */   "editTestimonial": () => (/* binding */ editTestimonial),
/* harmony export */   "fetchTestimonial": () => (/* binding */ fetchTestimonial),
/* harmony export */   "fetchTestimonials": () => (/* binding */ fetchTestimonials)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfigWthFormData */ "./resources/pos/src/admin/config/apiConfigWthFormData.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/pos/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var fetchTestimonials = function fetchTestimonials() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var url;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true)) : null;
              url = _constants__WEBPACK_IMPORTED_MODULE_8__.apiBaseURL.TESTIMONIAL;
              if (filter.limit || filter.order_By || filter.search) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_6__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.testimonialActionType.FETCH_TESTIMONIALS,
                  payload: response.data.data
                });
                dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_7__.setTotalRecord)(response.data.totalRecords));
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchTestimonial = function fetchTestimonial(testimonialId) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true));
              _context2.next = 3;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_8__.apiBaseURL.TESTIMONIAL + '/' + testimonialId).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.testimonialActionType.FETCH_TESTIMONIAL,
                  payload: response.data.data
                });
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
              })["catch"](function (_ref4) {
                var response = _ref4.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var addTestimonial = function addTestimonial(testimonial, filterObj) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_8__.apiBaseURL.TESTIMONIAL, testimonial).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.testimonialActionType.ADD_TESTIMONIAL,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('testimonials.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
                dispatch(fetchTestimonials(filterObj));
              })["catch"](function (_ref6) {
                var response = _ref6.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var editTestimonial = function editTestimonial(testimonialId, testimonial) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_8__.apiBaseURL.TESTIMONIAL + '/' + testimonialId, testimonial).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.testimonialActionType.EDIT_TESTIMONIAL,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('testimonials.success.edit.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
              })["catch"](function (_ref8) {
                var response = _ref8.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var deleteTestimonial = function deleteTestimonial(testimonialId, totalRecord) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_8__.apiBaseURL.TESTIMONIAL + '/' + testimonialId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.testimonialActionType.DELETE_TESTIMONIAL,
                  payload: testimonialId
                });
                dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_7__.setTotalRecord)(totalRecord - 1));
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('testimonials.success.delete.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
              })["catch"](function (_ref10) {
                var response = _ref10.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
              });
            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/testimonials/Testimonials.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/testimonials/Testimonials.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".testimonial-modal {\n  max-width: 1000px;\n}\n\n.testimonial-table-row {\n  cursor: pointer;\n}\n.testimonial-table-row__profile {\n  width: 90px;\n}\n.testimonial-table-row__profile-img {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.testimonial-form {\n  display: flex;\n}\n.testimonial-form__divider--mt-0 {\n  margin-top: 0;\n}\n.testimonial-form__divider--mt-10 {\n  margin-top: 10px;\n}\n.testimonial-form__switch {\n  position: relative;\n  height: 26px;\n}\n\n.testimonial-profile__title {\n  margin-bottom: 18px;\n}\n\n@media only screen and (max-width: 700px) {\n  .testimonial-form {\n    flex-direction: column;\n  }\n  .testimonial-profile {\n    flex: 100%;\n    max-width: 100%;\n    width: 100%;\n  }\n  .primary-detail {\n    margin-top: 30px;\n    flex: 100%;\n    max-width: 100%;\n    width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/pos/src/admin/components/testimonials/Testimonials.scss":
/*!***************************************************************************!*\
  !*** ./resources/pos/src/admin/components/testimonials/Testimonials.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Testimonials_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./Testimonials.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/testimonials/Testimonials.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Testimonials_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Testimonials_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);