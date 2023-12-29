"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_admin_components_user-profile_UserProfile_js"],{

/***/ "./resources/pos/src/admin/components/user-profile/UserProfile.js":
/*!************************************************************************!*\
  !*** ./resources/pos/src/admin/components/user-profile/UserProfile.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _UserProfile_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfile.scss */ "./resources/pos/src/admin/components/user-profile/UserProfile.scss");
/* harmony import */ var _UserProfileForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfileForm */ "./resources/pos/src/admin/components/user-profile/UserProfileForm.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/pos/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/pos/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_prepareUserFormData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/prepareUserFormData */ "./resources/pos/src/admin/shared/prepareUserFormData.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_userProfileAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/userProfileAction */ "./resources/pos/src/admin/store/actions/userProfileAction.js");
/* harmony import */ var _store_actions_countryAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/countryAction */ "./resources/pos/src/admin/store/actions/countryAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var UserProfile = function UserProfile(props) {
  var countries = props.countries,
    userProfile = props.userProfile,
    fetchUserProfile = props.fetchUserProfile,
    fetchCountries = props.fetchCountries,
    editUserProfile = props.editUserProfile,
    history = props.history;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchUserProfile();
    fetchCountries();
  }, []);
  var onSaveProfile = function onSaveProfile(formValues) {
    editUserProfile((0,_shared_prepareUserFormData__WEBPACK_IMPORTED_MODULE_6__["default"])(formValues), history);
  };
  if (!userProfile || !userProfile.id) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {});
  }
  var prepareFormOption = {
    initialValues: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.prepareProfileData)(userProfile),
    countries: countries,
    onSaveProfile: onSaveProfile,
    history: history
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Profile"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sm: 12,
        className: "mb-2 d-flex justify-content-between",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h5", {
          className: "pull-left text-dark",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('profile.title')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "sticky-table-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: "w-100",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UserProfileForm__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, prepareFormOption))
              })
            })
          })
        })
      })]
    })]
  });
};
UserProfile.propTypes = {
  userProfile: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  countries: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array),
  fetchUserProfile: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  fetchCountries: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  editUserProfile: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  var userProfile = state.userProfile,
    countries = state.countries;
  return {
    userProfile: userProfile,
    countries: countries
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchUserProfile: _store_actions_userProfileAction__WEBPACK_IMPORTED_MODULE_8__.fetchUserProfile,
  fetchCountries: _store_actions_countryAction__WEBPACK_IMPORTED_MODULE_9__.fetchCountries,
  editUserProfile: _store_actions_userProfileAction__WEBPACK_IMPORTED_MODULE_8__.editUserProfile
})(UserProfile));

/***/ }),

/***/ "./resources/pos/src/admin/components/user-profile/UserProfileForm.js":
/*!****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/user-profile/UserProfileForm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _UserProfile_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.scss */ "./resources/pos/src/admin/components/user-profile/UserProfile.scss");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../appConstant */ "./resources/pos/src/appConstant.js");
/* harmony import */ var _shared_userValidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/userValidate */ "./resources/pos/src/admin/shared/userValidate.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/pos/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/pos/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/image-picker/ImagePicker */ "./resources/pos/src/shared/image-picker/ImagePicker.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/pos/src/shared/components/Select.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/pos/src/shared/custom-hooks/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
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
















var UserProfileForm = function UserProfileForm(props) {
  var initialValues = props.initialValues,
    change = props.change,
    countries = props.countries,
    history = props.history,
    onSaveProfile = props.onSaveProfile,
    handleSubmit = props.handleSubmit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isPasswordHidden = _useState2[0],
    setPasswordHidden = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isConfirmPasswordHidden = _useState4[0],
    setConfirmPasswordHidden = _useState4[1];
  var _imagePicker = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_9__.imagePicker)(change, !!initialValues.image_path ? initialValues.image_path : null, null, !!!initialValues.image),
    _imagePicker2 = _slicedToArray(_imagePicker, 5),
    image = _imagePicker2[0],
    isDefaultImage = _imagePicker2[1],
    file = _imagePicker2[2],
    onFileChange = _imagePicker2[3],
    onRemovePhoto = _imagePicker2[4];
  var onSave = function onSave(formValues) {
    formValues.file = file;
    onSaveProfile(formValues);
  };
  var goToHomePage = function goToHomePage() {
    history.goBack();
  };
  var onclickPassword = function onclickPassword(password) {
    if (password) setPasswordHidden(!isPasswordHidden);
  };
  var onclickConfirmPassword = function onclickConfirmPassword(password) {
    if (password) setConfirmPasswordHidden(!isConfirmPasswordHidden);
  };
  var imagePickerOptions = {
    user: {
      name: initialValues ? initialValues.first_name + ' ' + initialValues.last_name : null
    },
    image: image,
    isDefaultImage: isDefaultImage,
    onRemovePhoto: onRemovePhoto,
    onFileChange: onFileChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "animated fadeIn user-form m-3 px-1",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      xs: 8,
      md: 12,
      lg: 8,
      className: "primary-detail",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "d-flex justify-content-between",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h5", {
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('profile.primary-details')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", {
        className: 'mt-0'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          lg: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "first_name",
            label: "profile.input.first-name.label",
            required: true,
            groupText: "user-circle-o",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          lg: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "last_name",
            label: "profile.input.last-name.label",
            required: true,
            groupText: "user",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          lg: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "email",
            label: "profile.input.email.label",
            readOnly: true,
            required: true,
            groupText: "envelope",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          lg: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "phone",
            type: "number",
            label: "profile.input.phone.label",
            onChange: function onChange(e) {
              return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.enableDisableUserInput)(e, _constants__WEBPACK_IMPORTED_MODULE_10__.maxDigits.PHONE_NUMBER);
            },
            groupText: "phone",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      xs: 4,
      md: 12,
      lg: 4,
      className: "user-profile",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h5", {
        className: "user-profile__title",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('profile.user-profile')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", {
        className: 'mt-0'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "mt-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
          name: "file_name",
          type: "hidden",
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({}, imagePickerOptions))]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      xs: 12,
      className: "mt-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h5", {
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('profile.additional-details')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "w-100",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "address_1",
            label: "profile.input.address1.label",
            groupText: "address-book",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "address_2",
            label: "profile.input.address2.label",
            groupText: "address-book-o",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "country",
            label: "profile.select.country.label",
            options: countries,
            placeholder: "profile.select.country.placeholder",
            groupText: "flag",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_7__["default"],
            isSearchable: true,
            isMini: true,
            menuPlacement: "top"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "state",
            label: "profile.input.state.label",
            groupText: "square",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "city",
            label: "profile.input.city.label",
            groupText: "circle",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_14__["default"], {
            name: "zip",
            label: "profile.input.zip.label",
            groupText: "map-pin",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
        onSave: handleSubmit(onSave),
        onCancel: goToHomePage
      }, props))
    })]
  });
};
UserProfileForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  match: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  countries: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array),
  onSaveProfile: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  change: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_form__WEBPACK_IMPORTED_MODULE_16__["default"])({
  form: 'userProfileForm',
  validate: _shared_userValidate__WEBPACK_IMPORTED_MODULE_3__["default"]
})(UserProfileForm));

/***/ }),

/***/ "./resources/pos/src/admin/shared/prepareUserFormData.js":
/*!***************************************************************!*\
  !*** ./resources/pos/src/admin/shared/prepareUserFormData.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var formData = new FormData();
  var is_active = formValues.is_active,
    first_name = formValues.first_name,
    last_name = formValues.last_name,
    email = formValues.email,
    password = formValues.password,
    confirm_password = formValues.confirm_password,
    phone = formValues.phone,
    address_1 = formValues.address_1,
    address_2 = formValues.address_2,
    country = formValues.country,
    city = formValues.city,
    state = formValues.state,
    zip = formValues.zip,
    membership_plan = formValues.membership_plan,
    role = formValues.role,
    file = formValues.file,
    file_name = formValues.file_name;
  formData.append('is_active', is_active ? '1' : '0');
  formData.append('first_name', first_name);
  formData.append('last_name', last_name ? last_name : '');
  formData.append('email', email);
  if (password) {
    formData.append('password', password);
  }
  if (confirm_password) {
    formData.append('confirm_password', confirm_password);
  }
  formData.append('phone', phone ? phone : '');
  formData.append('address_1', address_1 ? address_1 : '');
  formData.append('address_2', address_2 ? address_2 : '');
  formData.append('country_id', country ? country.id.toString() : '');
  formData.append('city', city ? city : '');
  formData.append('state', state ? state : '');
  formData.append('zip', zip ? zip.toString() : '');
  if (role) {
    formData.append('role_id', role.id.toString());
  }
  if (membership_plan) {
    formData.append('membership_plan_id', membership_plan.id.toString());
  }
  if (file) {
    formData.append('image', file, file.name);
  }
  if (!file_name && !file) {
    formData.append('remove_image', '1');
  }
  return formData;
});

/***/ }),

/***/ "./resources/pos/src/admin/shared/userValidate.js":
/*!********************************************************!*\
  !*** ./resources/pos/src/admin/shared/userValidate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.first_name) {
    errors.first_name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.first-name.validate.label');
  }
  if (!formValues.last_name) {
    errors.last_name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.last-name.validate.label');
  }
  if (!formValues.email) {
    errors.email = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.email-required.validate.label');
  }
  var emailExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/;
  if (formValues.email && !emailExpression.test(formValues.email)) {
    errors.email = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.email-invalid.validate.label');
  }
  if (!formValues.password) {
    errors.password = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('change-password.password.input.validate.msg');
  }
  if (!formValues.confirm_password) {
    errors.confirm_password = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('change-password.confirm_password.input.validate.msg');
  }
  if (formValues.confirm_password && formValues.password !== formValues.confirm_password) {
    errors.confirm_password = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('change-password.match_password.input.validate.msg');
  }
  var phoneExpression = /^\d{10}$/;
  if (formValues.phone && !phoneExpression.test(formValues.phone)) {
    errors.phone = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.phone.validate.label');
  }
  if (!formValues.membership_plan) {
    errors.membership_plan = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('members.select.plan.validate.label');
  }
  if (!formValues.role) {
    errors.role = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('users.select.role.validate.label');
  }
  return errors;
});

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/countryAction.js":
/*!****************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/countryAction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCountries": () => (/* binding */ fetchCountries)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var fetchCountries = function fetchCountries() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_3__.apiBaseURL.COUNTRY).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.countryActionType.FETCH_COUNTRIES,
                  payload: response.data.data
                });
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
              });
            case 2:
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

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/userProfileAction.js":
/*!********************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/userProfileAction.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editUserProfile": () => (/* binding */ editUserProfile),
/* harmony export */   "fetchUserProfile": () => (/* binding */ fetchUserProfile)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfigWthFormData */ "./resources/pos/src/admin/config/apiConfigWthFormData.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/pos/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_action_localStorageAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/localStorageAction */ "./resources/pos/src/store/action/localStorageAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var fetchUserProfile = function fetchUserProfile() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true));
              _context.next = 3;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_6__.apiBaseURL.USER_DETAILS).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.userProfileActionType.FETCH_USER_PROFILE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
              });
            case 3:
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
var editUserProfile = function editUserProfile(user, history) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true));
              _context2.next = 3;
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_6__.apiBaseURL.USER_PROFILE_UPDATE, user).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.userProfileActionType.EDIT_USER_PROFILE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('profile.success.update.message')
                }));
                dispatch((0,_store_action_localStorageAction__WEBPACK_IMPORTED_MODULE_5__.setUserProfile)(_constants__WEBPACK_IMPORTED_MODULE_6__.LocalStorageKey.USER, response.data.data));
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
                history.goBack();
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

/***/ }),

/***/ "./resources/pos/src/shared/components/Select.js":
/*!*******************************************************!*\
  !*** ./resources/pos/src/shared/components/Select.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupAddon.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupText.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormFeedback.js");
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.scss */ "./resources/pos/src/shared/components/Component.scss");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/useIntl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ReactSelect = function ReactSelect(props) {
  var input = props.input,
    placeholder = props.placeholder,
    required = props.required,
    label = props.label,
    groupText = props.groupText,
    _props$isSearchable = props.isSearchable,
    isSearchable = _props$isSearchable === void 0 ? false : _props$isSearchable,
    innerRef = props.innerRef,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? {} : _props$defaultValue,
    disabled = props.disabled,
    _props$menuPlacement = props.menuPlacement,
    menuPlacement = _props$menuPlacement === void 0 ? "auto" : _props$menuPlacement,
    isCustom = props.isCustom,
    _props$meta = props.meta,
    touched = _props$meta.touched,
    error = _props$meta.error,
    options = props.options,
    _props$isMulti = props.isMulti,
    isMulti = _props$isMulti === void 0 ? false : _props$isMulti,
    _props$isDefaultCurre = props.isDefaultCurrency,
    isDefaultCurrency = _props$isDefaultCurre === void 0 ? false : _props$isDefaultCurre;
  var intl = new react_intl__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var labelText = label ? intl.formatMessage({
    id: label
  }) : null;
  var placeholderText = placeholder ? intl.formatMessage({
    id: placeholder
  }) : null;
  var formGroupClass = isCustom ? 'react-select mb-0 mt-1' : 'react-select';
  var labelClass = required ? 'control-label' : '';
  var inputClass = isCustom ? 'react-select__input react-select__input--secondary' : 'react-select__input react-select__input--primary';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: formGroupClass,
    children: [label ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: labelClass,
      children: labelText
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        addonType: "prepend",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: isDefaultCurrency ? groupText : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
            className: "fa fa-".concat(groupText)
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, input), {}, {
        className: inputClass,
        placeholder: placeholderText,
        value: input.value,
        isDisabled: disabled,
        onChange: function onChange(value) {
          return input.onChange(value);
        },
        onBlur: function onBlur(value) {
          return input.onBlur();
        },
        options: options,
        getOptionLabel: function getOptionLabel(option) {
          return option.name;
        },
        getOptionValue: function getOptionValue(option) {
          return option.id;
        },
        defaultValue: defaultValue,
        isSearchable: isSearchable,
        menuPlacement: menuPlacement,
        ref: innerRef,
        isClearable: true,
        isMulti: isMulti
      }))]
    }), touched && error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "d-block",
      children: error
    })]
  });
};
ReactSelect.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  innerRef: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  meta: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  groupText: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  addOnType: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  menuPlacement: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  isMulti: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)]),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  isSearchable: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  isCustom: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactSelect);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/user-profile/UserProfile.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/user-profile/UserProfile.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".user-form {\n  display: flex;\n}\n\n.user-profile__title {\n  margin-bottom: 9px;\n}\n\n@media only screen and (max-width: 700px) {\n  .user-profile {\n    flex: 100%;\n    max-width: 100%;\n    margin-bottom: 10px;\n  }\n  .primary-detail {\n    margin-top: 10px;\n    flex: 100%;\n    max-width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/pos/src/admin/components/user-profile/UserProfile.scss":
/*!**************************************************************************!*\
  !*** ./resources/pos/src/admin/components/user-profile/UserProfile.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_UserProfile_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./UserProfile.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/user-profile/UserProfile.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_UserProfile_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_UserProfile_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);