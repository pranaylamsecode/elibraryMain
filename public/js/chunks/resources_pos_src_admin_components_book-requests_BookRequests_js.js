"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_admin_components_book-requests_BookRequests_js"],{

/***/ "./resources/pos/src/admin/components/book-requests/BookRequestForm.js":
/*!*****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-requests/BookRequestForm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _bookRequestValidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookRequestValidate */ "./resources/pos/src/admin/components/book-requests/bookRequestValidate.js");
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/pos/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/pos/src/shared/components/Select.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/pos/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var BookRequestForm = function BookRequestForm(props) {
  var onSaveBookRequest = props.onSaveBookRequest,
    handleSubmit = props.handleSubmit,
    initialValues = props.initialValues;
  var inputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var bookFormats = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedOptions)(_admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookFormatOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    inputRef.current.focus();
  }, []);
  var onSave = function onSave(formValues) {
    var status = formValues.status;
    onSaveBookRequest(status.id);
  };

  // used for render a book request status options
  var renderBookStatusOption = function renderBookStatusOption() {
    var booKRequestStatus = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedOptions)(_admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookRequestStatusOptions);
    switch (initialValues.status.id) {
      case _admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookRequestStatus.APPROVED:
        // remove pending af request approved
        return booKRequestStatus.filter(function (bookStatus) {
          return bookStatus.id !== _admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookRequestStatus.PENDING;
        });
      case _admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookRequestStatus.AVAILABLE:
        // remove pending and approve option from dropdown af request approved and book available for use
        return booKRequestStatus.filter(function (bookStatus) {
          return bookStatus.id !== _admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookRequestStatus.PENDING || bookStatus.id !== _admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookRequestStatus.APPROVED;
        });
      case _admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookRequestStatus.CANCEL:
        return booKRequestStatus.filter(function (bookStatus) {
          return bookStatus.id === _admin_constants__WEBPACK_IMPORTED_MODULE_2__.bookCirculationStatusConstant.CANCEL;
        });
      default:
        return booKRequestStatus;
      // return all options
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "animated fadeIn m-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "book_name",
        label: "books.table.book.column",
        required: true,
        inputRef: inputRef,
        groupText: "book",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
        readOnly: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "isbn",
        label: "book-request.input.isbn.label",
        required: true,
        groupText: "id-card",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
        readOnly: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "edition",
        label: "book-request.input.edition.label",
        required: true,
        groupText: "file-text",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
        readOnly: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "format",
        label: "book-request.select.format.label",
        required: true,
        options: bookFormats,
        placeholder: "book-request.select.format.placeholder",
        groupText: "wpforms",
        component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_4__["default"],
        disabled: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "status",
        label: "books-circulation.select.status.label",
        required: true,
        options: renderBookStatusOption(),
        groupText: "info-circle",
        placeholder: "books-circulation.select.status.placeholder",
        component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_4__["default"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
        onSave: handleSubmit(onSave)
      }, props))
    })]
  });
};
BookRequestForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  onSaveBookRequest: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_form__WEBPACK_IMPORTED_MODULE_12__["default"])({
  form: 'bookRequestForm',
  validate: _bookRequestValidate__WEBPACK_IMPORTED_MODULE_1__["default"]
})(BookRequestForm));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-requests/BookRequestModal.js":
/*!******************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-requests/BookRequestModal.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookRequestModal": () => (/* binding */ BookRequestModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CreateBookRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateBookRequest */ "./resources/pos/src/admin/components/book-requests/CreateBookRequest.js");
/* harmony import */ var _EditBookRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditBookRequest */ "./resources/pos/src/admin/components/book-requests/EditBookRequest.js");
/* harmony import */ var _DeleteBookRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteBookRequest */ "./resources/pos/src/admin/components/book-requests/DeleteBookRequest.js");
/* harmony import */ var _shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/modal-config/ModalConfig */ "./resources/pos/src/shared/modal-config/ModalConfig.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var BookRequestModal = function BookRequestModal(props) {
  var bookRequest = props.bookRequest,
    isCreate = props.isCreate,
    isEdit = props.isEdit,
    isDelete = props.isDelete;
  var editConfig = {
    bookRequest: bookRequest
  };
  var delConfig = {
    bookRequestId: bookRequest ? bookRequest.id : null
  };
  var modalOptions = {
    modalTitle: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getModalTitle)(isCreate, isEdit, isDelete, 'book-request.input.new-btn.label', 'book-request.modal.edit.title', 'book-request.modal.delete.title'),
    NewComponent: _CreateBookRequest__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditComponent: _EditBookRequest__WEBPACK_IMPORTED_MODULE_2__["default"],
    DeleteComponent: _DeleteBookRequest__WEBPACK_IMPORTED_MODULE_3__["default"],
    deleteKey: bookRequest ? bookRequest.book_name : null,
    editConfig: editConfig,
    delConfig: delConfig,
    props: props
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, modalOptions));
};
BookRequestModal.propTypes = {
  author: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  isCreate: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isEdit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isDelete: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookRequestModal);

/***/ }),

/***/ "./resources/pos/src/admin/components/book-requests/BookRequests.js":
/*!**************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-requests/BookRequests.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _BookRequestModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookRequestModal */ "./resources/pos/src/admin/components/book-requests/BookRequestModal.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/pos/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/table/ReactDataTable */ "./resources/pos/src/shared/table/ReactDataTable.js");
/* harmony import */ var _shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/action-buttons/ModalAction */ "./resources/pos/src/shared/action-buttons/ModalAction.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/pos/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _shared_book_request_status_BookRequestStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/book-request-status/BookRequestStatus */ "./resources/pos/src/shared/book-request-status/BookRequestStatus.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/pos/src/shared/custom-hooks/index.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/bookRequestAction */ "./resources/pos/src/admin/store/actions/bookRequestAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
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


















var BookRequests = function BookRequests(props) {
  var bookRequests = props.bookRequests,
    toggleModal = props.toggleModal,
    totalRecord = props.totalRecord,
    isLoading = props.isLoading,
    fetchBookRequests = props.fetchBookRequests;
  var _openModal = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_10__.openModal)(),
    _openModal2 = _slicedToArray(_openModal, 5),
    isCreate = _openModal2[0],
    isEdit = _openModal2[1],
    isDelete = _openModal2[2],
    bookRequest = _openModal2[3],
    onOpenModal = _openModal2[4];
  var cardModalProps = {
    bookRequest: bookRequest,
    isCreate: isCreate,
    isEdit: isEdit,
    isDelete: isDelete,
    toggleModal: toggleModal
  };
  var bookFormats = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedOptions)(_admin_constants__WEBPACK_IMPORTED_MODULE_7__.bookFormatOptions);
  var onChange = function onChange(filter) {
    fetchBookRequests(filter, true);
  };
  var onClickModal = function onClickModal(isEdit) {
    var bookRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onOpenModal(isEdit, bookRequest, isDelete);
    toggleModal();
  };
  var columns = [{
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('book-request.input.isbn.label'),
    selector: 'isbn',
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
        children: row.isbn
      });
    },
    minWidth: '200px'
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('books.table.book.column'),
    selector: 'book_name',
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
        children: row.book_name
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('book-request.input.edition.label'),
    selector: 'edition',
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
        children: row.edition
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('book-request.select.format.label'),
    selector: 'format',
    sortable: true,
    cell: function cell(row) {
      var format = bookFormats.find(function (format) {
        return format.id === row.format;
      });
      if (format) {
        return format.name;
      }
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('book-request.count.label'),
    selector: 'request_count',
    sortable: true,
    center: true,
    cell: function cell(row) {
      return row.request_count;
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('react-data-table.status.column'),
    selector: 'status',
    sortable: true,
    center: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_book_request_status_BookRequestStatus__WEBPACK_IMPORTED_MODULE_8__["default"], {
        status: row.status
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('react-data-table.action.column'),
    selector: 'id',
    right: true,
    cell: function cell(row) {
      return renderBookRequestAction(row);
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];
  var renderBookRequestAction = function renderBookRequestAction(row) {
    switch (row.status) {
      case _admin_constants__WEBPACK_IMPORTED_MODULE_7__.bookRequestStatus.APPROVED:
      case _admin_constants__WEBPACK_IMPORTED_MODULE_7__.bookRequestStatus.PENDING:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onOpenModal: onClickModal,
          item: row,
          isHideDeleteIcon: true
        });
      case _admin_constants__WEBPACK_IMPORTED_MODULE_7__.bookRequestStatus.AVAILABLE:
      case _admin_constants__WEBPACK_IMPORTED_MODULE_7__.bookRequestStatus.CANCEL:
      default:
        return '';
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sm: 12,
      className: "mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Books Request"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h5", {
        className: "page-heading",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('book-request.title')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sm: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "sticky-table-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
              items: bookRequests,
              columns: columns,
              loading: isLoading,
              emptyStateMessageId: "book-request.empty-state.title",
              emptyNotFoundStateMessageId: "book-request.not-found.empty-state.title",
              totalRows: totalRecord,
              onChange: onChange,
              icon: _constants__WEBPACK_IMPORTED_MODULE_13__.icon.BOOK_REQUEST
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_BookRequestModal__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, cardModalProps))]
          })
        })
      })
    })]
  });
};
BookRequests.propTypes = {
  adminBookRequests: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().array),
  totalRecord: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool),
  fetchBookRequests: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  var adminBookRequests = state.adminBookRequests,
    isLoading = state.isLoading,
    totalRecord = state.totalRecord;
  return {
    bookRequests: adminBookRequests,
    isLoading: isLoading,
    totalRecord: totalRecord
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchBookRequests: _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_12__.fetchBookRequests,
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__.toggleModal
})(BookRequests));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-requests/CreateBookRequest.js":
/*!*******************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-requests/CreateBookRequest.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BookRequestForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookRequestForm */ "./resources/pos/src/admin/components/book-requests/BookRequestForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/bookRequestAction */ "./resources/pos/src/admin/store/actions/bookRequestAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CreateBookRequest = function CreateBookRequest(props) {
  var addBookRequest = props.addBookRequest,
    toggleModal = props.toggleModal;
  var onSaveBookRequest = function onSaveBookRequest(formValues) {
    addBookRequest(formValues);
  };
  var prepareFormOption = {
    onSaveBookRequest: onSaveBookRequest,
    onCancel: toggleModal
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_BookRequestForm__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, prepareFormOption))
  }));
};
CreateBookRequest.propTypes = {
  addBookRequest: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  addBookRequest: _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_4__.addBookRequest
})(CreateBookRequest));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-requests/DeleteBookRequest.js":
/*!*******************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-requests/DeleteBookRequest.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/action-buttons/DeleteAction */ "./resources/pos/src/shared/action-buttons/DeleteAction.js");
/* harmony import */ var _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/bookRequestAction */ "./resources/pos/src/admin/store/actions/bookRequestAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DeleteBookRequest = function DeleteBookRequest(props) {
  var bookRequestId = props.bookRequestId,
    deleteBookRequest = props.deleteBookRequest,
    toggleModal = props.toggleModal;
  var onDeleteBookRequest = function onDeleteBookRequest() {
    deleteBookRequest(bookRequestId);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onDelete: onDeleteBookRequest,
      onCancel: toggleModal
    })
  }));
};
DeleteBookRequest.propTypes = {
  bookRequestId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  deleteBookRequest: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  deleteBookRequest: _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_4__.deleteBookRequest
})(DeleteBookRequest));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-requests/EditBookRequest.js":
/*!*****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-requests/EditBookRequest.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BookRequestForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookRequestForm */ "./resources/pos/src/admin/components/book-requests/BookRequestForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/bookRequestAction */ "./resources/pos/src/admin/store/actions/bookRequestAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../admin/constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var EditBookRequest = function EditBookRequest(props) {
  var bookRequest = props.bookRequest,
    editBookRequest = props.editBookRequest,
    toggleModal = props.toggleModal;
  var bookFormats = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedOptions)(_admin_constants__WEBPACK_IMPORTED_MODULE_6__.bookFormatOptions);
  var booRequestStatus = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedOptions)(_admin_constants__WEBPACK_IMPORTED_MODULE_6__.bookRequestStatusOptions);
  var onSaveBookRequest = function onSaveBookRequest(status) {
    editBookRequest(bookRequest, status);
  };
  var prepareFormOption = {
    onSaveBookRequest: onSaveBookRequest,
    onCancel: toggleModal,
    initialValues: {
      book_name: bookRequest.book_name,
      isbn: bookRequest.isbn,
      edition: bookRequest.edition,
      format: bookFormats.find(function (format) {
        return format.id === +bookRequest.format;
      }),
      status: booRequestStatus.find(function (status) {
        return status.id === +bookRequest.status;
      })
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BookRequestForm__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, prepareFormOption))
  }));
};
EditBookRequest.propTypes = {
  bookRequest: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  editBookRequest: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  editBookRequest: _store_actions_bookRequestAction__WEBPACK_IMPORTED_MODULE_4__.editBookRequest
})(EditBookRequest));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-requests/bookRequestValidate.js":
/*!*********************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-requests/bookRequestValidate.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.first_name) {
    errors.first_name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('profile.input.first-name.validate.label');
  }
  return errors;
});

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/bookRequestAction.js":
/*!********************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/bookRequestAction.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBookRequest": () => (/* binding */ addBookRequest),
/* harmony export */   "deleteBookRequest": () => (/* binding */ deleteBookRequest),
/* harmony export */   "editBookRequest": () => (/* binding */ editBookRequest),
/* harmony export */   "fetchBookRequests": () => (/* binding */ fetchBookRequests)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/pos/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var fetchBookRequests = function fetchBookRequests() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var url;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(true)) : null;
              url = _constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.BOOK_REQUEST;
              if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search || filter.direction)) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookRequestActionType.FETCH_ADMIN_BOOKS_REQUEST,
                  payload: response.data.data
                });
                dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_6__.setTotalRecord)(response.data.totalRecords));
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false)) : null;
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false)) : null;
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
var addBookRequest = function addBookRequest(bookRequest) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.BOOK_REQUEST, bookRequest).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookRequestActionType.ADD_ADMIN_BOOK_REQUEST,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('book-request.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
              })["catch"](function (_ref4) {
                var response = _ref4.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
              });
            case 2:
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
var editBookRequest = function editBookRequest(bookRequest, status) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.BOOK_REQUEST + '/' + bookRequest.id + '/status/' + status, {}).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookRequestActionType.EDIT_ADMIN_BOOK_REQUEST,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('book-request.success.edit.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
              })["catch"](function (_ref6) {
                var response = _ref6.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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
var deleteBookRequest = function deleteBookRequest(bookRequestId) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.BOOK_REQUEST + '/' + bookRequestId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookRequestActionType.DELETE_ADMIN_BOOK_REQUEST,
                  payload: bookRequestId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('book-request.success.delete.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
              })["catch"](function (_ref8) {
                var response = _ref8.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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

/***/ }),

/***/ "./resources/pos/src/shared/book-request-status/BookRequestStatus.js":
/*!***************************************************************************!*\
  !*** ./resources/pos/src/shared/book-request-status/BookRequestStatus.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/index */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var BookRequestStatus = function BookRequestStatus(props) {
  var status = props.status;
  switch (status) {
    case _constants_index__WEBPACK_IMPORTED_MODULE_1__.bookRequestConstants.PENDING:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-warning",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-request.filter.pending.label')
        })
      });
    case _constants_index__WEBPACK_IMPORTED_MODULE_1__.bookRequestConstants.APPROVED:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-success",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-request.filter.approved.label')
        })
      });
    case _constants_index__WEBPACK_IMPORTED_MODULE_1__.bookRequestConstants.AVAILABLE:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-request.filter.available.label')
        })
      });
    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-danger",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-request.filter.cancel.label')
        })
      });
  }
};
BookRequestStatus.propTypes = {
  status: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookRequestStatus);

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

/***/ })

}]);