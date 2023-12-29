(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_admin_components_settings_Settings_js"],{

/***/ "./resources/pos/src/admin/components/settings/Settings.js":
/*!*****************************************************************!*\
  !*** ./resources/pos/src/admin/components/settings/Settings.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SettingsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsForm */ "./resources/pos/src/admin/components/settings/SettingsForm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../appConstant */ "./resources/pos/src/appConstant.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/pos/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/pos/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/settingAction */ "./resources/pos/src/admin/store/actions/settingAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }














var Settings = function Settings(props) {
  var currencies = props.currencies,
    fetchSettings = props.fetchSettings,
    fetchCurrencies = props.fetchCurrencies,
    postSettings = props.postSettings,
    postAppLogo = props.postAppLogo,
    selectedCurrency = props.selectedCurrency,
    settings = props.settings,
    selectedLanguage = props.selectedLanguage,
    exist_library_logo = props.exist_library_logo,
    exist_favicon_logo = props.exist_favicon_logo,
    postAppFavicon = props.postAppFavicon;
  var bookLanguagesOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_4__.languageOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchSettings(true);
    fetchCurrencies();
  }, []);
  var onSaveSettings = function onSaveSettings(formValues) {
    postSettings([].concat(_toConsumableArray(formValues), [exist_library_logo, exist_favicon_logo]));
  };
  var onChangeAppLogo = function onChangeAppLogo(file) {
    if (file) {
      var formData = new FormData();
      formData.append('logo', file, file.name);
      postAppLogo(formData);
    }
  };
  var onChangeAppFavicon = function onChangeAppFavicon(file) {
    if (file) {
      var formData = new FormData();
      formData.append('favicon', file, file.name);
      postAppFavicon(formData);
    }
  };
  var getLogo = function getLogo(settings, key) {
    return settings && settings[key] ? settings[key].logo_url : null;
  };
  var prepareFormOption = {
    currencies: currencies,
    initialValues: {
      currency: selectedCurrency,
      issue_due_days: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.ISSUE_DUE_DAYS] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.ISSUE_DUE_DAYS].value : null,
      stripe_key: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.STRIPE_KEY] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.STRIPE_KEY].value : null,
      stripe_secret: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.STRIPE_SECRET] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.STRIPE_SECRET].value : null,
      return_due_days: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.RETURN_DUE_DAYS] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.RETURN_DUE_DAYS].value : null,
      issue_books_limit: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.ISSUE_BOOKS_LIMIT] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.ISSUE_BOOKS_LIMIT].value : null,
      reserve_books_limit: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.RESERVE_BOOKS_LIMIT] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.RESERVE_BOOKS_LIMIT].value : null,
      library_name: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_NAME] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_NAME].value : null,
      penalty_per_day: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.PENALTY_PER_DAY] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.PENALTY_PER_DAY].value : null,
      book_due_reminder_before_days: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.BOOK_DUE_REMINDER_BEFORE_DAYS] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.BOOK_DUE_REMINDER_BEFORE_DAYS].value : null,
      library_logo: getLogo(settings, _constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_LOGO),
      library_favicon: getLogo(settings, _constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_FAVICON),
      language: bookLanguagesOptions.find(function (lang) {
        return lang.id === selectedLanguage.id;
      })
    },
    onSaveSettings: onSaveSettings,
    onChangeAppLogo: onChangeAppLogo,
    onChangeAppFavicon: onChangeAppFavicon
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Settings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        xs: 12,
        className: "mb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h5", {
          className: "page-heading",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('settings.title')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "sticky-table-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SettingsForm__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, prepareFormOption))
            })
          })
        })
      })]
    })]
  });
};
Settings.propTypes = {
  selectedCurrency: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  selectedLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  exist_library_logo: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  exist_favicon_logo: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  settings: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  currencies: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array),
  fetchSettings: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  fetchCurrencies: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  postSettings: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  postAppLogo: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  postAppFavicon: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func)
};
var prepareCurrencies = function prepareCurrencies(currencies) {
  var currenciesArray = [];
  currencies.forEach(function (cur) {
    return currenciesArray.push({
      id: cur.iso_code,
      name: cur.country,
      symbol: cur.symbol
    });
  });
  return currenciesArray;
};
var prepareSelectedSetting = function prepareSelectedSetting(settings, filterKey) {
  var setting = settings.filter(function (setting) {
    return setting.key === filterKey;
  }).map(function (_ref) {
    var value = _ref.value,
      display_name = _ref.display_name,
      currency_symbol = _ref.currency_symbol;
    return {
      id: value,
      name: display_name,
      symbol: currency_symbol
    };
  });
  if (setting.length > 0) {
    return {
      id: setting[0].id,
      name: setting[0].name,
      symbol: setting[0].symbol
    };
  }
};
var mapStateToProps = function mapStateToProps(state) {
  var currencies = state.currencies,
    settings = state.settings;
  var settingsArray = Object.values(settings);
  var settingsArr = lodash__WEBPACK_IMPORTED_MODULE_2___default().mapKeys(settingsArray, 'key');
  return {
    currencies: prepareCurrencies(currencies),
    selectedCurrency: prepareSelectedSetting(settingsArray, _constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.CURRENCY),
    settings: settingsArr,
    selectedLanguage: prepareSelectedSetting(settingsArray, _constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LANGUAGE),
    exist_library_logo: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_LOGO] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_LOGO] : null,
    exist_favicon_logo: settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_FAVICON] ? settings[_constants__WEBPACK_IMPORTED_MODULE_4__.settingsKey.LIBRARY_FAVICON] : null
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchSettings: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.fetchSettings,
  fetchCurrencies: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.fetchCurrencies,
  postSettings: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.postSettings,
  postAppLogo: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.postAppLogo,
  postAppFavicon: _store_actions_settingAction__WEBPACK_IMPORTED_MODULE_9__.postAppFavicon
})(Settings));

/***/ }),

/***/ "./resources/pos/src/admin/components/settings/SettingsForm.js":
/*!*********************************************************************!*\
  !*** ./resources/pos/src/admin/components/settings/SettingsForm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _settings_settingsFormValidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/settingsFormValidate */ "./resources/pos/src/admin/components/settings/settingsFormValidate.js");
/* harmony import */ var _Settings_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings.scss */ "./resources/pos/src/admin/components/settings/Settings.scss");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../appConstant */ "./resources/pos/src/appConstant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/pos/src/shared/components/Select.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/pos/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/pos/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/image-picker/ImagePicker */ "./resources/pos/src/shared/image-picker/ImagePicker.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_components_ImageCropper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/ImageCropper */ "./resources/pos/src/shared/components/ImageCropper.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/pos/src/shared/custom-hooks/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var SettingsForm = function SettingsForm(props) {
  var currencies = props.currencies,
    initialValues = props.initialValues,
    change = props.change,
    onChangeAppLogo = props.onChangeAppLogo,
    toggleModal = props.toggleModal,
    onSaveSettings = props.onSaveSettings,
    handleSubmit = props.handleSubmit,
    onChangeAppFavicon = props.onChangeAppFavicon;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues.currency ? initialValues.currency.symbol : null),
    _useState2 = _slicedToArray(_useState, 2),
    groupText = _useState2[0],
    setGroupText = _useState2[1];
  var settingRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    logoRef = _useState4[0],
    setLogoRef = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    faviconRef = _useState6[0],
    setFaviconRef = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isToggleLogo = _useState8[0],
    setToggleLogo = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isToggleFavicon = _useState10[0],
    setToggleFavicon = _useState10[1];
  var _imagePicker = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__.imagePicker)(change, _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_LOGO, _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_LOGO, !!!initialValues.library_logo),
    _imagePicker2 = _slicedToArray(_imagePicker, 5),
    logo = _imagePicker2[0],
    isDefaultLogo = _imagePicker2[1],
    logoFile = _imagePicker2[2],
    onLogoChange = _imagePicker2[3],
    onRemoveLogo = _imagePicker2[4];
  var _imagePicker3 = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__.imagePicker)(change, _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_FAVICON, _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_FAVICON, !!!initialValues.library_favicon),
    _imagePicker4 = _slicedToArray(_imagePicker3, 5),
    favicon = _imagePicker4[0],
    isDefaultFavicon = _imagePicker4[1],
    faviconFile = _imagePicker4[2],
    onFaviconChange = _imagePicker4[3],
    onRemoveFavicon = _imagePicker4[4];
  var bookLanguagesOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.languageOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    settingRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelector(".inputBox").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox1").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox2").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox3").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox4").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
    document.querySelector(".inputBox5").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
  }, []);
  var onSelectCurrency = function onSelectCurrency(option) {
    if (option) setGroupText(option.symbol);
  };
  var prepareFormData = function prepareFormData(key, value, display_name) {
    return {
      key: key,
      value: value,
      display_name: display_name
    };
  };
  var onSave = function onSave(formValues) {
    var currency = formValues.currency,
      issue_due_days = formValues.issue_due_days,
      return_due_days = formValues.return_due_days,
      library_name = formValues.library_name,
      language = formValues.language,
      reserve_books_limit = formValues.reserve_books_limit,
      stripe_key = formValues.stripe_key,
      stripe_secret = formValues.stripe_secret,
      issue_books_limit = formValues.issue_books_limit,
      penalty_per_day = formValues.penalty_per_day,
      book_due_reminder_before_days = formValues.book_due_reminder_before_days;
    var settings = [prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.CURRENCY, currency.id, currency.name), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.LIBRARY_NAME, library_name, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.APP_NAME), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.PENALTY_PER_DAY, penalty_per_day, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.PENALTY_PER_DAY), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.ISSUE_DUE_DAYS, issue_due_days, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.ISSUE_DUE_DAYS), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.RETURN_DUE_DAYS, return_due_days, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.RETURN_DUE_DAYS), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.LANGUAGE, language.id, language.name), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.RESERVE_BOOKS_LIMIT, reserve_books_limit, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.RESERVE_BOOKS_LIMIT), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.ISSUE_BOOKS_LIMIT, issue_books_limit, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.ISSUE_BOOKS_LIMIT), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.BOOK_DUE_REMINDER_BEFORE_DAYS, book_due_reminder_before_days, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.BOOK_DUE_REMINDER_BEFORE_DAYS), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.STRIPE_KEY, stripe_key, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.STRIPE_KEY), prepareFormData(_constants__WEBPACK_IMPORTED_MODULE_5__.settingsKey.STRIPE_SECRET, stripe_secret, _constants__WEBPACK_IMPORTED_MODULE_5__.settingsDisplayName.STRIPE_SECRET)];
    onSaveSettings(settings);
  };
  var onChangingLogo = function onChangingLogo(event) {
    setLogoRef(logoFile);
    onLogoChange(event);
    setToggleFavicon(false);
    setToggleLogo(true);
    toggleModal();
  };
  var onChangingFavicon = function onChangingFavicon(event) {
    setFaviconRef(faviconFile);
    onFaviconChange(event);
    setToggleLogo(false);
    setToggleFavicon(true);
    toggleModal();
  };
  var onRemovingLogo = function onRemovingLogo() {
    onChangeAppLogo(null);
    onRemoveLogo();
  };
  var onRemovingFavicon = function onRemovingFavicon() {
    onChangeAppFavicon(null);
    onRemoveFavicon();
  };
  var emitLogoChange = function emitLogoChange(fileRef) {
    setLogoRef(fileRef);
  };
  var emitFaviconChange = function emitFaviconChange(fileRef) {
    setFaviconRef(fileRef);
  };
  var onSaveLogo = function onSaveLogo() {
    if (isToggleFavicon) {
      onChangeAppFavicon(logoRef);
    } else {
      onChangeAppLogo(logoRef);
    }
    toggleModal();
  };
  var onSaveFavicon = function onSaveFavicon() {
    onChangeAppFavicon(faviconRef);
    toggleModal();
  };
  var onCancel = function onCancel() {
    toggleModal();
  };
  var logoPickerOptions = {
    image: initialValues.library_logo ? initialValues.library_logo : _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_LOGO,
    isDefaultImage: isDefaultLogo,
    buttonName: 'image-picker.dropdown.logo.label',
    onRemovePhoto: onRemovingLogo,
    onFileChange: onChangingLogo,
    isRemoveOption: false,
    inputField: 'logo-picker'
  };
  var logoCropperOptions = {
    image: logo,
    emitFileChange: emitLogoChange,
    onSave: onSaveLogo,
    onCancel: onCancel,
    isToggle: isToggleLogo
  };
  var faviconPickerOptions = {
    image: initialValues.library_favicon ? initialValues.library_favicon : _appConstant__WEBPACK_IMPORTED_MODULE_4__.publicImagePath.APP_LOGO,
    isDefaultImage: isDefaultFavicon,
    buttonName: 'image-picker.dropdown.favicon.label',
    onRemovePhoto: onRemovingFavicon,
    onFileChange: onChangingFavicon,
    isRemoveOption: false,
    inputField: 'favicon-picker',
    isFavicon: true
  };
  var faviconCropperOptions = {
    image: favicon,
    emitFileChange: emitFaviconChange,
    onSave: onSaveFavicon,
    onCancel: onCancel,
    isToggle: isToggleFavicon,
    isFavicon: true
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 2,
      className: "settings__logo",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h6", {
        className: "settings__logo-heading",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)('image-picker.dropdown.logo.label')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
          name: "file_name",
          type: "hidden",
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_components_ImageCropper__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread({}, logoCropperOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({}, logoPickerOptions))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h6", {
        className: "settings__favicon-heading mt-3",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)('image-picker.dropdown.favicon.label')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
          name: "file_name",
          type: "hidden",
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_components_ImageCropper__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread({}, faviconCropperOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({}, faviconPickerOptions))]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 10,
      className: "settings__form",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "settings__form-columns",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "library_name",
            type: "text",
            label: "settings.input.app-name.label",
            required: true,
            groupText: "list",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"],
            inputRef: settingRef
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "currency",
            label: "settings.select.currency.label",
            required: true,
            groupText: groupText,
            options: currencies,
            onChange: onSelectCurrency,
            isDefaultCurrency: true,
            placeholder: "settings.select.currency.placeholder",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"],
            isSearchable: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "issue_due_days",
            className: "inputBox",
            type: "number",
            label: "settings.input.issue-due-days.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "return_due_days",
            className: "inputBox1",
            type: "number",
            label: "settings.input.return-due-days.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "issue_books_limit",
            className: "inputBox2",
            type: "number",
            label: "settings.input.max-issue-books-limit.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "reserve_books_limit",
            className: "inputBox3",
            type: "number",
            label: "settings.input.max-reserve-books-limit.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "book_due_reminder_before_days",
            type: "number",
            className: "inputBox4",
            label: "settings.input.book-due-reminder-before-days.label",
            min: "0",
            required: true,
            groupText: "calendar",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "penalty_per_day",
            type: "number",
            className: "inputBox5",
            label: "settings.input.penalty.label",
            min: "0",
            isDefaultCurrency: true,
            required: true,
            groupText: groupText,
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "language",
            label: "settings.select.language.label",
            required: true,
            groupText: "language",
            options: bookLanguagesOptions,
            placeholder: "settings.select.language.placeholder",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"],
            isSearchable: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "stripe_key",
            type: "text",
            label: "settings.input.stripe-key.label",
            groupText: "list",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
            name: "stripe_secret",
            type: "text",
            label: "settings.input.stripe-secret.label",
            groupText: "list",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 2,
      className: "settings__favicon mt-2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({
        onSave: handleSubmit(onSave),
        isHideCancel: true
      }, props))
    })]
  });
};
SettingsForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  currencies: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().array),
  onSaveSettings: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  change: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  onChangeAppLogo: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  onChangeAppFavicon: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func)
};
var form = (0,redux_form__WEBPACK_IMPORTED_MODULE_19__["default"])({
  form: 'settingsForm',
  validate: _settings_settingsFormValidate__WEBPACK_IMPORTED_MODULE_2__["default"],
  enableReinitialize: true
})(SettingsForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_12__.toggleModal
})(form));

/***/ }),

/***/ "./resources/pos/src/admin/components/settings/settingsFormValidate.js":
/*!*****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/settings/settingsFormValidate.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.library_name) {
    errors.library_name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.app-name.validate.label');
  }
  if (!formValues.currency) {
    errors.currency = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.select.currency.validate.label');
  }
  if (!formValues.issue_due_days) {
    errors.issue_due_days = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.issue-due-days.validate.label');
  }
  if (!formValues.return_due_days) {
    errors.return_due_days = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.return-due-days.validate.label');
  }
  if (!formValues.language) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.select.language.validate.label');
  }
  if (!formValues.reserve_books_limit) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.max-reserve-books-limit.validate.label');
  }
  if (!formValues.issue_books_limit) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('settings.input.max-issue-books-limit.validate.label');
  }
  if (!formValues.stripe_key) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)("settings.input.stripe-key.validate.label");
  }
  if (!formValues.stripe_secret) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)("Stripe secret must be required.");
  }
  return errors;
});

/***/ }),

/***/ "./resources/pos/src/shared/action-buttons/ConfirmAction.js":
/*!******************************************************************!*\
  !*** ./resources/pos/src/shared/action-buttons/ConfirmAction.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var ConfirmAction = function ConfirmAction(props) {
  var onConfirm = props.onConfirm,
    onCancel = props.onCancel;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "success",
      onClick: onConfirm,
      children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('global.input.yes-btn.label')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "secondary",
      onClick: onCancel,
      children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('global.input.no-btn.label')
    })]
  });
};
ConfirmAction.propTypes = {
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmAction);

/***/ }),

/***/ "./resources/pos/src/shared/components/ImageCropper.js":
/*!*************************************************************!*\
  !*** ./resources/pos/src/shared/components/ImageCropper.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _action_buttons_ConfirmAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-buttons/ConfirmAction */ "./resources/pos/src/shared/action-buttons/ConfirmAction.js");
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component.scss */ "./resources/pos/src/shared/components/Component.scss");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var imageRef = null;
var ImageCropper = function ImageCropper(props) {
  var image = props.image,
    emitFileChange = props.emitFileChange,
    onSave = props.onSave,
    onCancel = props.onCancel,
    isToggle = props.isToggle,
    _props$isFavicon = props.isFavicon,
    isFavicon = _props$isFavicon === void 0 ? false : _props$isFavicon;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      aspect: 16 / 9,
      unit: 'px',
      width: 50,
      height: 50
    }),
    _useState2 = _slicedToArray(_useState, 2),
    crop = _useState2[0],
    setCrop = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    croppedImageUrl = _useState4[0],
    setCroppedImageUrl = _useState4[1];
  var faviocnExtraOptions = {
    minHeight: 50,
    maxHeight: 50,
    minWidth: 50,
    maxWidth: 50
  };
  var onImageLoaded = function onImageLoaded(image) {
    imageRef = image;
  };
  var onCropComplete = function onCropComplete(crop) {
    makeClientCrop(crop).then(function (croppedImageUrl) {
      setCroppedImageUrl(croppedImageUrl);
    });
  };
  var onCropChange = function onCropChange(crop, percentCrop) {
    setCrop(crop);
  };
  var makeClientCrop = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(crop) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(imageRef && crop.width && crop.height)) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return getCroppedImg(imageRef, crop, "newFile.jpeg");
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function makeClientCrop(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getCroppedImg = function getCroppedImg(image, crop, fileName) {
    var canvas = document.createElement("canvas");
    var scaleX = image.naturalWidth / image.width;
    var scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    return new Promise(function (resolve, reject) {
      canvas.toBlob(function (blob) {
        if (!blob) {
          // reject(new Error('Canvas is empty'));
          return;
        }
        blob.name = fileName;
        blob.lastModifiedDate = new Date();
        emitFileChange(blob, croppedImageUrl);
        resolve(window.URL.createObjectURL(blob));
      }, "image/jpeg");
    });
  };
  var prepareCropOption = {
    src: image,
    crop: crop,
    onImageLoaded: onImageLoaded,
    onComplete: onCropComplete,
    onChange: onCropChange
  };
  if (isFavicon) {
    prepareCropOption = _objectSpread(_objectSpread({}, prepareCropOption), faviocnExtraOptions);
  }
  var prepareModalOption = {
    className: 'membership-plan-modal',
    title: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('image-cropper.modal.title'),
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((react_image_crop__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({}, prepareCropOption)), croppedImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "mt-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
          children: "Preview"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            alt: "Crop",
            className: "react-img-cropper__img",
            src: croppedImageUrl
          })
        })]
      })]
    }),
    actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_action_buttons_ConfirmAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onConfirm: onSave,
      onCancel: onCancel
    })
  };
  return image && isToggle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, prepareModalOption)) : null;
};
ImageCropper.propTypes = {
  image: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  isToggle: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isFavicon: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  emitFileChange: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onSave: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCropper);

/***/ }),

/***/ "./resources/pos/src/shared/components/Select.js":
/*!*******************************************************!*\
  !*** ./resources/pos/src/shared/components/Select.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/settings/Settings.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/settings/Settings.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings .image__preview {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n@media (max-width: 1544px) {\n  html[dir=rtl] .settings__form {\n    right: 6.3%;\n    max-width: 77%;\n  }\n}\n@media (max-width: 1250px) {\n  html[dir=rtl] .settings__form {\n    right: 10.3%;\n    max-width: 73%;\n  }\n}\n\n@media (max-width: 1544px) {\n  .settings__form {\n    left: 6.3%;\n    max-width: 77%;\n  }\n}\n@media (max-width: 1250px) {\n  .settings__form {\n    left: 10.3%;\n    max-width: 73%;\n  }\n}\n@media (max-width: 1060px) {\n  .settings {\n    flex-direction: column;\n    align-items: center;\n  }\n  .settings .settings__favicon,\n  .settings .settings__logo {\n    max-width: 100%;\n    margin-bottom: 30px;\n    width: 100%;\n  }\n  .settings .settings__favicon .settings__favicon-heading,\n  .settings .settings__favicon .settings__logo-heading,\n  .settings .settings__logo .settings__favicon-heading,\n  .settings .settings__logo .settings__logo-heading {\n    margin-left: calc(1px + 15%);\n  }\n  .settings__form {\n    left: 0;\n    right: 0 !important;\n    max-width: 100% !important;\n    width: 100%;\n  }\n  .settings__form .settings__form-columns {\n    flex-direction: column;\n  }\n  .settings__form .settings__form-columns .col-6 {\n    width: 100%;\n  }\n}\n.input-group-prepend .input-group-text {\n  min-width: 45px !important;\n}\n\n.react-select__input {\n  width: calc(100% - 45px) !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/pos/src/admin/components/settings/Settings.scss":
/*!*******************************************************************!*\
  !*** ./resources/pos/src/admin/components/settings/Settings.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Settings_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./Settings.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/settings/Settings.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Settings_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Settings_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/react-image-crop/dist/ReactCrop.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-image-crop/dist/ReactCrop.min.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}(this,(function(e){return(()=>{var t={703:(e,t,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},427:t=>{"use strict";t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";o.r(n),o.d(n,{Component:()=>S,containCrop:()=>O,default:()=>S,makeAspectCrop:()=>C});var e=o(427),t=o.n(e),r=o(697),i=o.n(r);function a(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t,r){return Math.min(Math.max(e,t),r)}function y(e){return e&&!isNaN(e.width)&&!isNaN(e.height)}function w(e){return"n"===e?"s":"ne"===e?"sw":"e"===e?"w":"se"===e?"nw":"s"===e?"n":"sw"===e?"ne":"w"===e?"e":"nw"===e?"se":e}function C(e,t,r){if(isNaN(e.aspect))return console.warn("`crop.aspect` should be a number in order to make an aspect crop",e),e;var o=m({unit:"px",x:0,y:0},e);return e.width&&(o.height=o.width/e.aspect),e.height&&(o.width=o.height*e.aspect),o.y+o.height>r&&(o.height=r-o.y,o.width=o.height*e.aspect),o.x+o.width>t&&(o.width=t-o.x,o.height=o.width/e.aspect),o}function b(e,t,r){return"%"===e.unit?e:{unit:"%",aspect:e.aspect,x:e.x/t*100,y:e.y/r*100,width:e.width/t*100,height:e.height/r*100}}function x(e,t,r){return e.unit?"px"===e.unit?e:{unit:"px",aspect:e.aspect,x:e.x*t/100,y:e.y*r/100,width:e.width*t/100,height:e.height*r/100}:m(m({},e),{},{unit:"px"})}function O(e,t,r,o){var n=x(t,r,o),i=x(e,r,o),a=m({},n);if(!n.aspect)return n.x<0?(a.x=0,a.width+=n.x):n.x+n.width>r&&(a.width=r-n.x),n.y+n.height>o&&(a.height=o-n.y),a;var s=!1;n.x<0?(a.x=0,a.width+=n.x,a.height=a.width/n.aspect,s=!0):n.x+n.width>r&&(a.width=r-n.x,a.height=a.width/n.aspect,s=!0),s&&i.y>a.y&&(a.y=n.y+(n.height-a.height));var c=!1;return a.y+a.height>o&&(a.height=o-n.y,a.width=a.height*n.aspect,c=!0),c&&i.x>a.x&&(a.x=n.x+(n.width-a.width)),a}var D={capture:!0,passive:!1},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(f,e);var r,o,n,i,s=(n=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(i){var r=l(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function f(){var e;c(this,f);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return v(u(e=s.call.apply(s,[this].concat(r))),"window","undefined"!=typeof window?window:{}),v(u(e),"document","undefined"!=typeof document?document:{}),v(u(e),"state",{}),v(u(e),"keysDown",new Set),v(u(e),"onCropPointerDown",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=e.mediaDimensions,a=x(o,i.width,i.height);if(!n){t.cancelable&&t.preventDefault(),e.bindDocMove(),e.componentRef.focus({preventScroll:!0});var s=t.target.dataset.ord,c="nw"===s||"w"===s||"sw"===s,d="nw"===s||"n"===s||"ne"===s;e.evData={clientStartX:t.clientX,clientStartY:t.clientY,cropStartWidth:a.width,cropStartHeight:a.height,cropStartX:c?a.x+a.width:a.x,cropStartY:d?a.y+a.height:a.y,xInversed:c,yInversed:d,xCrossOver:c,yCrossOver:d,startXCrossOver:c,startYCrossOver:d,isResize:t.target.dataset.ord,ord:s},e.mouseDownOnCrop=!0,e.setState({cropIsActive:!0})}})),v(u(e),"onComponentPointerDown",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=r.locked,a=r.keepSelection,s=r.onChange,c=e.mediaWrapperRef.firstChild;if(t.target===c&&c.contains(t.target)&&!(n||i||a&&y(o))){t.cancelable&&t.preventDefault(),e.bindDocMove(),e.componentRef.focus({preventScroll:!0});var d=e.mediaWrapperRef.getBoundingClientRect(),p=t.clientX-d.left,h=t.clientY-d.top,u={unit:"px",aspect:o?o.aspect:void 0,x:p,y:h,width:0,height:0};e.evData={clientStartX:t.clientX,clientStartY:t.clientY,cropStartWidth:u.width,cropStartHeight:u.height,cropStartX:u.x,cropStartY:u.y,xInversed:!1,yInversed:!1,xCrossOver:!1,yCrossOver:!1,startXCrossOver:!1,startYCrossOver:!1,isResize:!0,ord:"nw"},e.mouseDownOnCrop=!0;var l=e.mediaDimensions,f=l.width,m=l.height;s(x(u,f,m),b(u,f,m)),e.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})}})),v(u(e),"onDocPointerMove",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=r.onChange,a=r.onDragStart;if(!n&&e.mouseDownOnCrop){t.cancelable&&t.preventDefault(),e.dragStarted||(e.dragStarted=!0,a(t));var s,c=u(e).evData;if(c.xDiff=t.clientX-c.clientStartX,c.yDiff=t.clientY-c.clientStartY,(s=c.isResize?e.resizeCrop():e.dragCrop())!==o){var d=e.mediaDimensions,p=d.width,h=d.height;i(x(s,p,h),b(s,p,h))}}})),v(u(e),"onComponentKeyDown",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=r.onChange,a=r.onComplete;if(!n){e.keysDown.add(t.key);var s=!1;if(y(o)){var c=e.makeNewCrop(),d=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?f.nudgeStepLarge:t.shiftKey?f.nudgeStepMedium:f.nudgeStep;if(e.keysDown.has("ArrowLeft")&&(c.x-=d,s=!0),e.keysDown.has("ArrowRight")&&(c.x+=d,s=!0),e.keysDown.has("ArrowUp")&&(c.y-=d,s=!0),e.keysDown.has("ArrowDown")&&(c.y+=d,s=!0),s){t.cancelable&&t.preventDefault();var p=e.mediaDimensions,h=p.width,u=p.height;c.x=g(c.x,0,h-c.width),c.y=g(c.y,0,u-c.height);var l=x(c,h,u),m=b(c,h,u);i(l,m),a(l,m)}}}})),v(u(e),"onComponentKeyUp",(function(t){e.keysDown.delete(t.key)})),v(u(e),"onDocPointerDone",(function(t){var r=e.props,o=r.crop,n=r.disabled,i=r.onComplete,a=r.onDragEnd;if(e.unbindDocMove(),!n&&e.mouseDownOnCrop){e.mouseDownOnCrop=!1,e.dragStarted=!1;var s=e.mediaDimensions,c=s.width,d=s.height;a(t),i(x(o,c,d),b(o,c,d)),e.setState({cropIsActive:!1,newCropIsBeingDrawn:!1})}})),v(u(e),"onMediaLoaded",(function(){var t=e.props,r=t.onComplete,o=t.onChange,n=e.createNewCrop(),i=n.pixelCrop,a=n.percentCrop;o(i,a),r(i,a)})),v(u(e),"onImageLoad",(function(t){var r=t.target,o=e.props,n=o.onComplete,i=o.onChange;if(!1!==(0,o.onImageLoaded)(r)){var a=e.createNewCrop(),s=a.pixelCrop,c=a.percentCrop;i(s,c),n(s,c)}})),v(u(e),"bindComponentRef",(function(t){e.componentRef=t})),v(u(e),"bindMediaWrapperRef",(function(t){e.mediaWrapperRef=t})),v(u(e),"bindImageRef",(function(t){e.imageRef=t})),v(u(e),"bindCropSelectionRef",(function(t){e.cropSelectRef=t})),e}return r=f,(o=[{key:"componentDidMount",value:function(){this.componentRef.addEventListener&&this.componentRef.addEventListener("medialoaded",this.onMediaLoaded)}},{key:"componentWillUnmount",value:function(){this.componentRef.removeEventListener&&this.componentRef.removeEventListener("medialoaded",this.onMediaLoaded)}},{key:"componentDidUpdate",value:function(e){var t=this.props.crop;if(this.imageRef&&e.crop!==t&&t.aspect&&(t.width&&!t.height||!t.width&&t.height)){var r=this.imageRef,o=r.width,n=r.height,i=C(this.makeNewCrop(),o,n),a=x(i,o,n),s=b(i,o,n);this.props.onChange(a,s),this.props.onComplete(a,s)}}},{key:"bindDocMove",value:function(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,D),this.document.addEventListener("pointerup",this.onDocPointerDone,D),this.document.addEventListener("pointercancel",this.onDocPointerDone,D),this.docMoveBound=!0)}},{key:"unbindDocMove",value:function(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,D),this.document.removeEventListener("pointerup",this.onDocPointerDone,D),this.document.removeEventListener("pointercancel",this.onDocPointerDone,D),this.docMoveBound=!1)}},{key:"createNewCrop",value:function(){var e,t,r,o=this.mediaDimensions,n=o.width,i=o.height,a=(e=this.makeNewCrop(),t=n,r=i,!e.aspect||e.width&&e.height?e:C(e,t,r));return{pixelCrop:x(a,n,i),percentCrop:b(a,n,i)}}},{key:"mediaDimensions",get:function(){var e=this.mediaWrapperRef;return{width:e.clientWidth,height:e.clientHeight}}},{key:"getCropStyle",value:function(){var e=this.makeNewCrop(this.props.crop?this.props.crop.unit:"px");return{top:"".concat(e.y).concat(e.unit),left:"".concat(e.x).concat(e.unit),width:"".concat(e.width).concat(e.unit),height:"".concat(e.height).concat(e.unit)}}},{key:"getNewSize",value:function(){var e,t=this.props,r=t.crop,o=t.minWidth,n=t.maxWidth,i=t.minHeight,a=t.maxHeight,s=this.evData,c=this.mediaDimensions,d=c.width,p=c.height,h=s.cropStartWidth+s.xDiff;return s.xCrossOver&&(h=Math.abs(h)),h=g(h,o,n||d),e=r.aspect?h/r.aspect:s.cropStartHeight+s.yDiff,s.yCrossOver&&(e=Math.min(Math.abs(e),s.cropStartY)),e=g(e,i,a||p),r.aspect&&(h=g(e*r.aspect,0,d)),{width:h,height:e}}},{key:"dragCrop",value:function(){var e=this.makeNewCrop(),t=this.evData,r=this.mediaDimensions,o=r.width,n=r.height;return e.x=g(t.cropStartX+t.xDiff,0,o-e.width),e.y=g(t.cropStartY+t.yDiff,0,n-e.height),e}},{key:"resizeCrop",value:function(){var e=this.evData,t=this.makeNewCrop(),r=e.ord;e.xInversed&&(e.xDiff-=2*e.cropStartWidth),e.yInversed&&(e.yDiff-=2*e.cropStartHeight);var o=this.getNewSize(),n=e.cropStartX,i=e.cropStartY;e.xCrossOver&&(n=t.x+(t.width-o.width)),e.yCrossOver&&(i=!1===e.lastYCrossover?t.y-o.height:t.y+(t.height-o.height));var a=this.mediaDimensions,s=a.width,c=a.height,d=O(this.props.crop,{unit:t.unit,x:n,y:i,width:o.width,height:o.height,aspect:t.aspect},s,c);return t.aspect||f.xyOrds.indexOf(r)>-1?(t.x=d.x,t.y=d.y,t.width=d.width,t.height=d.height):f.xOrds.indexOf(r)>-1?(t.x=d.x,t.width=d.width):f.yOrds.indexOf(r)>-1&&(t.y=d.y,t.height=d.height),e.lastYCrossover=e.yCrossOver,this.crossOverCheck(),t.width<this.props.minWidth||t.height<this.props.minHeight?this.props.crop:t}},{key:"createCropSelection",value:function(){var e=this.props,r=e.disabled,o=e.locked,n=e.renderSelectionAddon,i=e.ruleOfThirds,a=e.crop,s=this.getCropStyle();return t().createElement("div",{ref:this.bindCropSelectionRef,style:s,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown},!r&&!o&&t().createElement("div",{className:"ReactCrop__drag-elements"},t().createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w"})),n&&y(a)&&t().createElement("div",{className:"ReactCrop__selection-addon",onMouseDown:function(e){return e.stopPropagation()}},n(this.state)),i&&t().createElement(t().Fragment,null,t().createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),t().createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}},{key:"makeNewCrop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"px",t=m(m({},f.defaultCrop),this.props.crop||{}),r=this.mediaDimensions,o=r.width,n=r.height;return"px"===e?x(t,o,n):b(t,o,n)}},{key:"crossOverCheck",value:function(){var e=this.evData,t=this.props,r=t.minWidth,o=t.minHeight;!r&&(!e.xCrossOver&&-Math.abs(e.cropStartWidth)-e.xDiff>=0||e.xCrossOver&&-Math.abs(e.cropStartWidth)-e.xDiff<=0)&&(e.xCrossOver=!e.xCrossOver),!o&&(!e.yCrossOver&&-Math.abs(e.cropStartHeight)-e.yDiff>=0||e.yCrossOver&&-Math.abs(e.cropStartHeight)-e.yDiff<=0)&&(e.yCrossOver=!e.yCrossOver);var n=e.xCrossOver!==e.startXCrossOver,i=e.yCrossOver!==e.startYCrossOver;e.inversedXOrd=!!n&&w(e.ord),e.inversedYOrd=!!i&&w(e.ord)}},{key:"render",value:function(){var e=this.props,r=e.children,o=e.circularCrop,n=e.className,i=e.crossorigin,s=e.crop,c=e.disabled,d=e.locked,p=e.imageAlt,h=e.onImageError,u=e.renderComponent,l=e.src,f=e.style,m=e.imageStyle,v=e.ruleOfThirds,g=this.state,w=g.cropIsActive,C=g.newCropIsBeingDrawn,b=y(s)&&this.componentRef?this.createCropSelection():null,x=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}("ReactCrop",n,{"ReactCrop--active":w,"ReactCrop--disabled":c,"ReactCrop--locked":d,"ReactCrop--new-crop":C,"ReactCrop--fixed-aspect":s&&s.aspect,"ReactCrop--circular-crop":s&&o,"ReactCrop--rule-of-thirds":s&&v,"ReactCrop--invisible-crop":!this.dragStarted&&s&&!s.width&&!s.height});return t().createElement("div",{ref:this.bindComponentRef,className:x,style:f,onPointerDown:this.onComponentPointerDown,tabIndex:0,onKeyDown:this.onComponentKeyDown,onKeyUp:this.onComponentKeyUp},t().createElement("div",{ref:this.bindMediaWrapperRef},u||t().createElement("img",{ref:this.bindImageRef,crossOrigin:i,className:"ReactCrop__image",style:m,src:l,onLoad:this.onImageLoad,onError:h,alt:p})),r,b)}}])&&d(r.prototype,o),f}(e.PureComponent);S.xOrds=["e","w"],S.yOrds=["n","s"],S.xyOrds=["nw","ne","se","sw"],S.nudgeStep=1,S.nudgeStepMedium=10,S.nudgeStepLarge=100,S.defaultCrop={x:0,y:0,width:0,height:0,unit:"px"},S.propTypes={className:i().string,children:i().oneOfType([i().arrayOf(i().node),i().node]),circularCrop:i().bool,crop:i().shape({aspect:i().number,x:i().number,y:i().number,width:i().number,height:i().number,unit:i().oneOf(["px","%"])}),crossorigin:i().string,disabled:i().bool,locked:i().bool,imageAlt:i().string,imageStyle:i().shape({}),keepSelection:i().bool,minWidth:i().number,minHeight:i().number,maxWidth:i().number,maxHeight:i().number,onChange:i().func.isRequired,onImageError:i().func,onComplete:i().func,onImageLoaded:i().func,onDragStart:i().func,onDragEnd:i().func,src:i().string.isRequired,style:i().shape({}),renderComponent:i().node,renderSelectionAddon:i().func,ruleOfThirds:i().bool},S.defaultProps={circularCrop:!1,className:void 0,crop:void 0,crossorigin:void 0,disabled:!1,locked:!1,imageAlt:"",maxWidth:void 0,maxHeight:void 0,minWidth:0,minHeight:0,keepSelection:!1,onComplete:function(){},onImageError:function(){},onImageLoaded:function(){},onDragStart:function(){},onDragEnd:function(){},children:void 0,style:void 0,renderComponent:void 0,imageStyle:void 0,renderSelectionAddon:void 0,ruleOfThirds:!1}})(),n})()}));

/***/ })

}]);