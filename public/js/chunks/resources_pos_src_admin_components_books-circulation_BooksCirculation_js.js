"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_admin_components_books-circulation_BooksCirculation_js"],{

/***/ "./resources/pos/src/admin/components/books-circulation/BookCirculationForm.js":
/*!*************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/BookCirculationForm.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/formValueSelector.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bookCirculationValidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookCirculationValidate */ "./resources/pos/src/admin/components/books-circulation/bookCirculationValidate.js");
/* harmony import */ var _BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BooksCirculation.scss */ "./resources/pos/src/admin/components/books-circulation/BooksCirculation.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/pos/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/pos/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/TextArea */ "./resources/pos/src/shared/components/TextArea.js");
/* harmony import */ var _shared_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/DatePicker */ "./resources/pos/src/shared/components/DatePicker.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/pos/src/shared/components/Select.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/bookAction */ "./resources/pos/src/admin/store/actions/bookAction.js");
/* harmony import */ var _store_actions_memberAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/memberAction */ "./resources/pos/src/admin/store/actions/memberAction.js");
/* harmony import */ var _store_actions_availableBooksAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/availableBooksAction */ "./resources/pos/src/admin/store/actions/availableBooksAction.js");
/* harmony import */ var _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/actions/availableBookLimitAction */ "./resources/pos/src/admin/store/actions/availableBookLimitAction.js");
/* harmony import */ var _PenaltyWarningModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PenaltyWarningModal */ "./resources/pos/src/admin/components/books-circulation/PenaltyWarningModal.js");
/* harmony import */ var _store_actions_toggleDueBookModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/actions/toggleDueBookModal */ "./resources/pos/src/admin/store/actions/toggleDueBookModal.js");
/* harmony import */ var _shared_components_CheckBox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/CheckBox */ "./resources/pos/src/shared/components/CheckBox.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


























var bookId = null;
var memberId = null;
var BookCirculationForm = function BookCirculationForm(props) {
  var initialValues = props.initialValues,
    books = props.books,
    members = props.members,
    change = props.change,
    bookItems = props.bookItems,
    fetchBooks = props.fetchBooks,
    fetchMembers = props.fetchMembers,
    fetchAvailableBooks = props.fetchAvailableBooks,
    onSaveBookCirculation = props.onSaveBookCirculation,
    handleSubmit = props.handleSubmit,
    fetchAvailableBookLimit = props.fetchAvailableBookLimit,
    clearAvailableBookLimit = props.clearAvailableBookLimit,
    toggleDueBookModal = props.toggleDueBookModal,
    hasPenaltyCollected = props.hasPenaltyCollected,
    penaltyPreDays = props.penaltyPreDays,
    selectedCurrency = props.selectedCurrency;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isDisabledItem = _useState2[0],
    setDisabledItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedDate = _useState6[0],
    setSelectedDate = _useState6[1];
  var bookItemRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var isDisabledStatus = initialValues && initialValues.status && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED;
  var bookCirculationStatusOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.bookStatusOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    prepareInitialValues();
    fetchBooks();
    fetchMembers();
    prepareInitialValues();
    clearAvailableBookLimit();
  }, []);
  var prepareInitialValues = function prepareInitialValues() {
    bookId = null;
    memberId = null;
    if (initialValues) {
      setStatus(initialValues.status.id);
      memberId = initialValues.member.id;
      if (initialValues.reserve_date && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED) {
        setSelectedDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.reserve_date).toDate());
        props.change('reserve_date', initialValues.reserve_date);
      } else if (initialValues.issued_on && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED) {
        setSelectedDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.issued_on).toDate());
        props.change('issued_on', initialValues.issued_on);
      } else if (initialValues.return_date && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED) {
        setSelectedDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.return_date).toDate());
        props.change('return_date', initialValues.return_date);
      }
    } else {
      bookItemRef.current.select.focus();
    }
  };
  var prepareFormValues = function prepareFormValues(formValues) {
    var book = formValues.book,
      book_item = formValues.book_item,
      member = formValues.member,
      note = formValues.note,
      collected_penalty = formValues.collected_penalty,
      penalty_collected = formValues.penalty_collected;
    var formData = {
      book_id: book.id,
      book_item_id: book_item.id,
      member_id: member.id,
      note: note,
      status: formValues.status.id,
      collected_penalty: collected_penalty,
      penalty_collected: penalty_collected
    };
    switch (status) {
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED:
        formData.reserve_date = selectedDate ? moment__WEBPACK_IMPORTED_MODULE_2___default()(selectedDate).format(_constants__WEBPACK_IMPORTED_MODULE_6__.dateFormat.DEFAULT_MOMENT) : '';
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED:
        formData.issued_on = selectedDate ? moment__WEBPACK_IMPORTED_MODULE_2___default()(selectedDate).format(_constants__WEBPACK_IMPORTED_MODULE_6__.dateFormat.DEFAULT_MOMENT) : '';
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED:
        formData.return_date = selectedDate ? moment__WEBPACK_IMPORTED_MODULE_2___default()(selectedDate).format(_constants__WEBPACK_IMPORTED_MODULE_6__.dateFormat.DEFAULT_MOMENT) : '';
        break;
      default:
        break;
    }
    return formData;
  };
  var onSave = function onSave(formValues) {
    onSaveBookCirculation(prepareFormValues(formValues));
  };
  var getBooks = function getBooks() {
    if (bookId && memberId) {
      setDisabledItem(false);
      fetchAvailableBooks(bookId, memberId);
    } else {
      setDisabledItem(true);
      change('book_item', null);
    }
  };
  var checkBookLimits = function checkBookLimits(status) {
    if (memberId && status) {
      if (status === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED || status === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED) {
        fetchAvailableBookLimit(memberId, status);
      } else {
        clearAvailableBookLimit();
      }
    }
  };
  var onSelectBook = function onSelectBook(option) {
    props.change('book_item', null);
    bookId = option ? option.id : null;
    getBooks();
    checkBookLimits(status);
  };
  var onSelectMember = function onSelectMember(option) {
    props.change('book_item', null);
    memberId = option ? option.id : null;
    getBooks();
    checkBookLimits(status);
  };
  var getDaysFromDueDate = function getDaysFromDueDate(returnDueDate) {
    return moment__WEBPACK_IMPORTED_MODULE_2___default()().diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(returnDueDate, 'YYYY-MM-DD hh:mm:ss'), 'days');
  };
  var onSelectBookStatus = function onSelectBookStatus(option) {
    if (option) {
      setSelectedDate(moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate());
      setStatus(option.id);
      checkBookLimits(option.id);
      if (option.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED) {
        var days = getDaysFromDueDate(initialValues.return_due_date);
        if (days > 0) {
          props.change('penalty_collected', true);
          props.change('collected_penalty', days * penaltyPreDays);
          toggleDueBookModal();
        }
      }
    } else {
      setStatus(null);
    }
  };
  var onSelectDate = function onSelectDate(date) {
    setSelectedDate(date);
    if (status === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED) {
      var returnDue = moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.return_due_date, 'YYYY-MM-DD hh:mm:ss');
      var days = moment__WEBPACK_IMPORTED_MODULE_2___default()(date, 'dddd MM, YYYY hh:mm:s').diff(returnDue, 'days');
      if (days > 0) {
        props.change('collected_penalty', days * penaltyPreDays);
      } else {
        props.change('collected_penalty', 0);
      }
    }
  };
  var renderDatePicker = function renderDatePicker(status) {
    if (!status) {
      return null;
    }
    var field = '';
    var label = '';
    var maxDate = '';
    var minDate = '';
    switch (status) {
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED:
        minDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate();
        label = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books-circulation.table.reserve-date.column');
        field = 'reserve_date';
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED:
        maxDate = initialValues && initialValues.reserve_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(moment__WEBPACK_IMPORTED_MODULE_2___default()().diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.reserve_date), 'days') - 1, 'days').toDate() : moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate();
        minDate = initialValues && initialValues.reserve_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate() : '';
        label = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books-circulation.table.issue-date.column');
        field = 'issued_on';
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED:
        minDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(moment__WEBPACK_IMPORTED_MODULE_2___default()().diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(initialValues.issued_on), 'days'), 'days').toDate();
        maxDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate();
        label = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books-circulation.table.return-date.column');
        field = 'return_date';
        break;
      default:
        return null;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_shared_components_DatePicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: label,
        selected: selectedDate,
        disabled: isDisabledStatus,
        maxDate: maxDate,
        minDate: minDate,
        onChange: onSelectDate,
        placeHolder: "Click to select a date"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
        name: field,
        type: "hidden",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
      })]
    });
  };
  var renderLateFeeInputs = function renderLateFeeInputs(status) {
    if (!status || status !== _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED) {
      return null;
    }
    var days = getDaysFromDueDate(initialValues.return_due_date);
    if (days <= 0) {
      return null;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
        xs: 12,
        sm: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
          name: "penalty_collected",
          label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books-circulation.checkbox.pay-amount.label'),
          component: _shared_components_CheckBox__WEBPACK_IMPORTED_MODULE_19__["default"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
        xs: 12,
        sm: 6,
        children: hasPenaltyCollected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
          name: "collected_penalty",
          type: "number",
          isDefaultCurrency: true,
          label: "books-circulation.input.amount.label",
          min: "0",
          groupText: selectedCurrency,
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]
        }) : ''
      })]
    });
  };
  var renderBookStatusOption = function renderBookStatusOption() {
    if (initialValues) {
      switch (initialValues.status.id) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED:
          return bookCirculationStatusOptions.filter(function (bookStatus) {
            return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_UN_RESERVED;
          });
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_UN_RESERVED:
          return bookCirculationStatusOptions.filter(function (bookStatus) {
            return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED;
          });
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED:
          return bookCirculationStatusOptions.filter(function (bookStatus) {
            return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_LOST || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_DAMAGED;
          });
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_LOST:
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_DAMAGED:
          return bookCirculationStatusOptions.filter(function (bookStatus) {
            return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED;
          });
        default:
          return [];
      }
    } else {
      return bookCirculationStatusOptions.filter(function (bookStatus) {
        return bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_ISSUED || bookStatus.id === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RESERVED;
      });
    }
  };
  var penaltyWarningModelProps = {
    toggleDueBookModal: toggleDueBookModal,
    collectedPenalty: initialValues ? getDaysFromDueDate(initialValues.return_due_date) * penaltyPreDays : 0,
    lateDays: initialValues ? getDaysFromDueDate(initialValues.return_due_date) : 0
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: "animated fadeIn m-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "book",
            label: "books-circulation.select.book.label",
            required: true,
            options: books,
            placeholder: "books-circulation.select.book.placeholder",
            onChange: onSelectBook,
            groupText: "book",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"],
            isSearchable: true,
            innerRef: bookItemRef,
            disabled: initialValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "member",
            label: "books-circulation.select.member.label",
            required: true,
            options: members,
            placeholder: "books-circulation.select.member.placeholder",
            onChange: onSelectMember,
            groupText: "user-circle-o",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"],
            isSearchable: true,
            disabled: initialValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "book_item",
            label: "books-circulation.select.book-item.label",
            required: true,
            options: bookItems,
            placeholder: "books-circulation.select.book-item.placeholder",
            groupText: "object-group",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"],
            isSearchable: true,
            disabled: isDisabledItem || initialValues
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
        name: "note",
        rows: "10",
        label: "books-circulation.input.note.label",
        component: _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_9__["default"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "status",
            label: "books-circulation.select.status.label",
            required: true,
            options: renderBookStatusOption(),
            placeholder: "books-circulation.select.status.placeholder",
            onChange: onSelectBookStatus,
            groupText: "info-circle",
            component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"],
            disabled: isDisabledStatus
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
          xs: 12,
          sm: 6,
          children: renderDatePicker(status)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_PenaltyWarningModal__WEBPACK_IMPORTED_MODULE_17__["default"], _objectSpread({}, penaltyWarningModelProps)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      children: renderLateFeeInputs(status)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({
        onSave: handleSubmit(onSave)
      }, props))
    })]
  });
};
BookCirculationForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().object),
  books: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().array),
  bookItems: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().array),
  members: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().array),
  onSaveBookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  change: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  fetchBooks: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  fetchMembers: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  fetchAvailableBooks: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  fetchAvailableBookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func),
  clearAvailableBookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func)
};
var prepareBookItems = function prepareBookItems(books) {
  var bookArray = [];
  books.forEach(function (book) {
    bookArray.push({
      id: +book.id,
      name: book.edition + " (".concat(book.book_code, ")")
    });
  });
  return bookArray;
};
var bookCirculationForm = (0,redux_form__WEBPACK_IMPORTED_MODULE_25__["default"])({
  form: 'bookCirculationForm',
  validate: _bookCirculationValidate__WEBPACK_IMPORTED_MODULE_3__["default"]
})(BookCirculationForm);
var selector = (0,redux_form__WEBPACK_IMPORTED_MODULE_26__["default"])('bookCirculationForm');
var mapStateToProps = function mapStateToProps(state) {
  var books = state.books,
    members = state.members,
    availableBooks = state.availableBooks,
    settings = state.settings;
  var hasPenaltyCollected = selector(state, 'penalty_collected');
  return {
    books: books,
    members: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.prepareFullNames)(members),
    bookItems: prepareBookItems(availableBooks),
    hasPenaltyCollected: hasPenaltyCollected,
    penaltyPreDays: settings.penalty_per_day.value,
    selectedCurrency: state.currency
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchAvailableBooks: _store_actions_availableBooksAction__WEBPACK_IMPORTED_MODULE_15__.fetchAvailableBooks,
  fetchBooks: _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_13__.fetchBooks,
  fetchMembers: _store_actions_memberAction__WEBPACK_IMPORTED_MODULE_14__.fetchMembers,
  fetchAvailableBookLimit: _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_16__.fetchAvailableBookLimit,
  clearAvailableBookLimit: _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_16__.clearAvailableBookLimit,
  toggleDueBookModal: _store_actions_toggleDueBookModal__WEBPACK_IMPORTED_MODULE_18__.toggleDueBookModal
})(bookCirculationForm));

/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/BookCirculationModal.js":
/*!**************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/BookCirculationModal.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookCirculationModal": () => (/* binding */ BookCirculationModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CreateBookCirculation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateBookCirculation */ "./resources/pos/src/admin/components/books-circulation/CreateBookCirculation.js");
/* harmony import */ var _EditBookCirculation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditBookCirculation */ "./resources/pos/src/admin/components/books-circulation/EditBookCirculation.js");
/* harmony import */ var _DeleteBookCirculation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteBookCirculation */ "./resources/pos/src/admin/components/books-circulation/DeleteBookCirculation.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal-config/ModalConfig */ "./resources/pos/src/shared/modal-config/ModalConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var BookCirculationModal = function BookCirculationModal(props) {
  var bookCirculation = props.bookCirculation,
    filterObject = props.filterObject,
    isCreate = props.isCreate,
    isEdit = props.isEdit,
    isDelete = props.isDelete;
  var editConfig = {
    bookCirculation: bookCirculation,
    filterObject: filterObject
  };
  var delConfig = {
    bookCirculationId: bookCirculation ? bookCirculation.id : null
  };
  var modalOptions = {
    modalTitle: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getModalTitle)(isCreate, isEdit, isDelete, 'books-circulation.input.new-btn.label', 'books-circulation.modal.edit.title', 'books-circulation.modal.delete.title'),
    NewComponent: _CreateBookCirculation__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditComponent: _EditBookCirculation__WEBPACK_IMPORTED_MODULE_2__["default"],
    DeleteComponent: _DeleteBookCirculation__WEBPACK_IMPORTED_MODULE_3__["default"],
    deleteKey: bookCirculation ? bookCirculation.name : null,
    editConfig: editConfig,
    delConfig: delConfig,
    props: props
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, modalOptions));
};
BookCirculationModal.propTypes = {
  bookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  filterObject: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  isCreate: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isEdit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isDelete: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookCirculationModal);

/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/BooksCirculation.js":
/*!**********************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/BooksCirculation.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _BookCirculationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookCirculationModal */ "./resources/pos/src/admin/components/books-circulation/BookCirculationModal.js");
/* harmony import */ var _BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BooksCirculation.scss */ "./resources/pos/src/admin/components/books-circulation/BooksCirculation.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/pos/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/pos/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/action-buttons/ModalAction */ "./resources/pos/src/shared/action-buttons/ModalAction.js");
/* harmony import */ var _shared_book_status_book_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/book-status/book-status */ "./resources/pos/src/shared/book-status/book-status.js");
/* harmony import */ var _shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/table/ReactDataTable */ "./resources/pos/src/shared/table/ReactDataTable.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/pos/src/shared/custom-hooks/index.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/pos/src/admin/store/actions/bookCirculationAction.js");
/* harmony import */ var _MailSend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MailSend */ "./resources/pos/src/admin/components/books-circulation/MailSend.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















var BooksCirculation = function BooksCirculation(props) {
  var booksCirculation = props.booksCirculation,
    fetchBooksCirculation = props.fetchBooksCirculation,
    toggleModal = props.toggleModal,
    history = props.history,
    isLoading = props.isLoading,
    totalRecord = props.totalRecord,
    excelFile = props.excelFile;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    filterObject = _useState2[0],
    setFilterObject = _useState2[1];
  var _openModal = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_12__.openModal)(),
    _openModal2 = _slicedToArray(_openModal, 5),
    isCreate = _openModal2[0],
    isEdit = _openModal2[1],
    isDelete = _openModal2[2],
    bookCirculation = _openModal2[3],
    onOpenModal = _openModal2[4];
  var cardModalProps = {
    bookCirculation: bookCirculation,
    filterObject: filterObject,
    isCreate: isCreate,
    isEdit: isEdit,
    isDelete: isDelete,
    toggleModal: toggleModal
  };
  var bookCirculationStatusFilter = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationFilterOptions);
  var onChange = function onChange(filter) {
    setFilterObject(filter);
    fetchBooksCirculation(filter, function () {});
  };
  var onClickModal = function onClickModal(isEdit) {
    var bookCirculation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onOpenModal(isEdit, bookCirculation, isDelete);
    toggleModal();
  };
  var gotToBookHistoryDetail = function gotToBookHistoryDetail(bookCirculationId) {
    history.push("".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.Routes.BOOKS_CIRCULATION + bookCirculationId, "/details"));
  };
  var getStoredFilterKey = function getStoredFilterKey() {
    var item = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__.storageKey.BOOK_CIRCULATION));
    if (item) {
      var _bookCirculation = bookCirculationStatusFilter.find(function (bookCirculation) {
        return bookCirculation.id === item.id;
      });
      if (_bookCirculation) {
        return _bookCirculation;
      }
    }
    return bookCirculationStatusFilter[0];
  };
  var onClickExcelFile = function onClickExcelFile(filterObject) {
    filterObject.limit = '';
    filterObject.skip = '';
    excelFile(filterObject, function (res) {
      if (res.url) {
        window.open(res.url, "_self");
      }
    });
  };
  var columns = [{
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.select.book.label'),
    selector: 'name',
    sortable: true,
    wrap: true,
    cell: function cell(row) {
      return row.name = row.book_item.book.name;
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.select.book-item.label'),
    selector: 'book_code',
    width: '140px',
    sortable: true,
    cell: function cell(row) {
      return row.book_code = row.book_item.book_code;
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.select.member.label'),
    selector: 'member_name',
    width: '140px',
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
        children: row.member.first_name + ' ' + row.member.last_name
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('profile.input.phone.label'),
    selector: 'phone',
    width: '140px',
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
        children: row.member.phone ? row.member.phone : 'N/A'
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.issue-date.column'),
    selector: 'issued_on',
    width: '160px',
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
        children: row.issued_on ? (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.dateFormatter)(row.issued_on) : 'N/A'
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.return-date.column'),
    selector: 'return_date',
    width: '160px',
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
        children: [row.return_date ? (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.dateFormatter)(row.return_date) : 'N/A', " "]
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('react-data-table.status.column'),
    width: '100px',
    selector: 'status',
    center: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_book_status_book_status__WEBPACK_IMPORTED_MODULE_10__["default"], {
        status: row.status,
        item: row
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.table.mail.column'),
    width: '100px',
    selector: 'return_due_date',
    center: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_MailSend__WEBPACK_IMPORTED_MODULE_15__["default"], {
        return_due_date: row.return_due_date,
        book_item_id: row.book_item_id,
        status: row.status
      });
    }
  }, {
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('react-data-table.action.column'),
    selector: 'id',
    width: '160px',
    right: true,
    cell: function cell(row) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isHideDeleteIcon: row.status === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_RETURNED || row.status === _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_UN_RESERVED ? false : true,
        isHideDetailIcon: false,
        goToDetailScreen: gotToBookHistoryDetail,
        onOpenModal: onClickModal,
        item: row
      });
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
      sm: 12,
      className: "mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Books Circulation"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h5", {
        className: "page-heading",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.title')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: "d-flex justify-content-end",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Toggle, {
            className: "btn btn-primary ml-2 text-white",
            id: "dropdown-basic",
            children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('react-data-table.action.column')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Menu, {
            className: "p-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Item, {
              onClick: function onClick() {
                return onClickModal(false);
              },
              className: "header__border",
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.input.new-btn.label')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Item, {
              onClick: function onClick() {
                return onClickExcelFile(filterObject);
              },
              className: "header__border",
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('books-circulation.export-excel.label')
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
      sm: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: "sticky-table-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_table_ReactDataTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
              items: booksCirculation,
              isShowFilterField: true,
              isShowDateRangeField: true,
              emptyStateMessageId: "books-circulation.empty-state.title",
              emptyNotFoundStateMessageId: "books-circulation.not-found.empty-state.title",
              filterKeyName: _constants__WEBPACK_IMPORTED_MODULE_5__.storageKey.BOOK_CIRCULATION,
              filterOptions: bookCirculationStatusFilter,
              filterKey: getStoredFilterKey(),
              columns: columns,
              loading: isLoading,
              totalRows: totalRecord,
              onChange: onChange,
              icon: _constants__WEBPACK_IMPORTED_MODULE_4__.icon.BOOK_CIRCULATION
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_BookCirculationModal__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, cardModalProps))]
          })
        })
      })
    })]
  });
};
BooksCirculation.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object),
  booksCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().array),
  totalRecord: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().number),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().bool),
  fetchBooksCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func),
  excelFile: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  var booksCirculation = state.booksCirculation,
    isLoading = state.isLoading,
    totalRecord = state.totalRecord;
  return {
    booksCirculation: booksCirculation,
    isLoading: isLoading,
    totalRecord: totalRecord
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchBooksCirculation: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_14__.fetchBooksCirculation,
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_13__.toggleModal,
  excelFile: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_14__.excelFile
})(BooksCirculation));

/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/CreateBookCirculation.js":
/*!***************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/CreateBookCirculation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _BookCirculationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookCirculationForm */ "./resources/pos/src/admin/components/books-circulation/BookCirculationForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/pos/src/admin/store/actions/bookCirculationAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/availableBookLimitAction */ "./resources/pos/src/admin/store/actions/availableBookLimitAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
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












var CreateBookCirculation = function CreateBookCirculation(props) {
  var toggleModal = props.toggleModal,
    className = props.className,
    title = props.title,
    bookLimit = props.bookLimit,
    books = props.books,
    onSelectBook = props.onSelectBook,
    bookId = props.bookId,
    members = props.members,
    addBookCirculation = props.addBookCirculation,
    addToast = props.addToast,
    clearAvailableBookLimit = props.clearAvailableBookLimit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDisableSubmit = _useState2[0],
    setDisableSubmit = _useState2[1];
  var modalOption = {
    toggleModal: toggleModal,
    className: className,
    title: title
  };
  var formOption = {
    books: books,
    onSelectBook: onSelectBook,
    bookId: bookId,
    members: members
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    displayLimitMessage(bookLimit);
  }, [bookLimit]);
  var displayLimitMessage = function displayLimitMessage(bookLimit) {
    if (!!bookLimit.isIssueLimitExceed && !bookLimit.isIssueLimitExceed.isExceed) {
      addToast({
        text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('books-circulation.issue.book-limit.message'),
        type: _constants__WEBPACK_IMPORTED_MODULE_5__.toastType.ERROR
      });
      setDisableSubmit(true);
    } else if (!!bookLimit.isReserveLimitExceed && !bookLimit.isReserveLimitExceed.isExceed) {
      addToast({
        text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('books-circulation.reserve.book-limit.message'),
        type: _constants__WEBPACK_IMPORTED_MODULE_5__.toastType.ERROR
      });
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  };
  var onSaveBookCirculation = function onSaveBookCirculation(formValues) {
    addBookCirculation(formValues, _constants__WEBPACK_IMPORTED_MODULE_9__.Filters.OBJ);
    clearAvailableBookLimit();
  };
  var onCancel = function onCancel() {
    clearAvailableBookLimit();
    toggleModal();
  };
  var prepareFormOption = {
    onSaveBookCirculation: onSaveBookCirculation,
    onCancel: onCancel,
    isDisableSubmit: isDisableSubmit
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, modalOption), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_BookCirculationForm__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, prepareFormOption), formOption))
  }));
};
CreateBookCirculation.propTypes = {
  bookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  bookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  books: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
  members: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
  bookId: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  isMemberBookHistory: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  addBookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  editMemberBookHistory: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  editMemberBookHistoryStatus: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  editBookCirculationStatus: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  onSelectBook: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  clearAvailableBookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  addToast: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    bookLimit: state.bookLimit
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  addBookCirculation: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_4__.addBookCirculation,
  addToast: _store_action_toastAction__WEBPACK_IMPORTED_MODULE_7__.addToast,
  clearAvailableBookLimit: _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_8__.clearAvailableBookLimit
})(CreateBookCirculation));

/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/DeleteBookCirculation.js":
/*!***************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/DeleteBookCirculation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/action-buttons/DeleteAction */ "./resources/pos/src/shared/action-buttons/DeleteAction.js");
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/pos/src/admin/store/actions/bookCirculationAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var DeleteBookCirculation = function DeleteBookCirculation(props) {
  var bookCirculationId = props.bookCirculationId,
    deleteBookCirculation = props.deleteBookCirculation,
    toggleModal = props.toggleModal;
  var onDeleteBookCirculation = function onDeleteBookCirculation() {
    deleteBookCirculation(bookCirculationId, _constants__WEBPACK_IMPORTED_MODULE_5__.Filters.OBJ);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onDelete: onDeleteBookCirculation,
      onCancel: toggleModal
    })
  }));
};
DeleteBookCirculation.propTypes = {
  bookCirculationId: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  deleteBookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  deleteBookCirculation: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_4__.deleteBookCirculation
})(DeleteBookCirculation));

/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/EditBookCirculation.js":
/*!*************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/EditBookCirculation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookCirculationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookCirculationForm */ "./resources/pos/src/admin/components/books-circulation/BookCirculationForm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/pos/src/admin/store/actions/bookCirculationAction.js");
/* harmony import */ var _store_actions_memberBookHistoryAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/memberBookHistoryAction */ "./resources/pos/src/admin/store/actions/memberBookHistoryAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/availableBookLimitAction */ "./resources/pos/src/admin/store/actions/availableBookLimitAction.js");
/* harmony import */ var _member_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../member/constants */ "./resources/pos/src/member/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var EditBookCirculation = function EditBookCirculation(props) {
  var toggleModal = props.toggleModal,
    className = props.className,
    editBookCirculationStatus = props.editBookCirculationStatus,
    editBookCirculation = props.editBookCirculation,
    editMemberBookHistoryStatus = props.editMemberBookHistoryStatus,
    editMemberBookHistory = props.editMemberBookHistory,
    title = props.title,
    bookCirculation = props.bookCirculation,
    onSelectBook = props.onSelectBook,
    bookId = props.bookId,
    isMemberBookHistory = props.isMemberBookHistory,
    filterObject = props.filterObject,
    addToast = props.addToast,
    bookLimit = props.bookLimit,
    clearAvailableBookLimit = props.clearAvailableBookLimit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDisableSubmit = _useState2[0],
    setDisableSubmit = _useState2[1];
  var modalOption = {
    toggleModal: toggleModal,
    className: className,
    title: title
  };
  var formOption = {
    onSelectBook: onSelectBook,
    bookId: bookId
  };
  var bookCirculationStatusOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_5__.bookStatusOptions);
  var note = bookCirculation.note,
    reserve_date = bookCirculation.reserve_date,
    issued_on = bookCirculation.issued_on,
    return_date = bookCirculation.return_date,
    member = bookCirculation.member,
    return_due_date = bookCirculation.return_due_date;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    displayLimitMessage(bookLimit);
  }, [bookLimit]);
  var displayLimitMessage = function displayLimitMessage(bookLimit) {
    if (!!bookLimit.isIssueLimitExceed && !bookLimit.isIssueLimitExceed.isExceed) {
      addToast({
        text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('books-circulation.issue.book-limit.message'),
        type: _member_constants__WEBPACK_IMPORTED_MODULE_12__.toastType.ERROR
      });
      setDisableSubmit(true);
    } else if (!!bookLimit.isReserveLimitExceed && !bookLimit.isReserveLimitExceed.isExceed) {
      addToast({
        text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('books-circulation.reserve.book-limit.message'),
        type: _member_constants__WEBPACK_IMPORTED_MODULE_12__.toastType.ERROR
      });
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  };
  var changeAbleFields = {
    book: bookCirculation.book_item.book,
    note: note,
    reserve_date: reserve_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()(reserve_date, _constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.DEFAULT_MOMENT).format(_constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.NATIVE) : '',
    issued_on: issued_on ? moment__WEBPACK_IMPORTED_MODULE_2___default()(issued_on, _constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.DEFAULT_MOMENT).format(_constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.NATIVE) : '',
    return_date: return_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()(return_date, _constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.DEFAULT_MOMENT).format(_constants__WEBPACK_IMPORTED_MODULE_4__.dateFormat.NATIVE) : '',
    book_item: {
      id: bookCirculation.book_item.id,
      name: bookCirculation.book_item.edition + " (".concat(bookCirculation.book_item.book_code, ")")
    },
    member: member ? {
      id: member.id,
      name: member.first_name + ' ' + member.last_name
    } : null,
    return_due_date: return_due_date,
    status: bookCirculationStatusOptions.find(function (bookCirculationStatus) {
      return bookCirculationStatus.id === +bookCirculation.status;
    }),
    penalty_collected: false,
    collected_penalty: 0
  };
  var onSaveBookCirculation = function onSaveBookCirculation(formValues) {
    if (!isMemberBookHistory) {
      switch (formValues.status) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_LOST:
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_DAMAGED:
          editBookCirculationStatus(formValues, filterObject);
          break;
        default:
          editBookCirculation(formValues, filterObject);
          break;
      }
    } else {
      switch (formValues.status) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_LOST:
        case _constants__WEBPACK_IMPORTED_MODULE_5__.bookCirculationStatusConstant.BOOK_DAMAGED:
          editMemberBookHistoryStatus(formValues);
          break;
        default:
          editMemberBookHistory(formValues);
          break;
      }
    }
    clearAvailableBookLimit();
  };
  var onCancel = function onCancel() {
    clearAvailableBookLimit();
    toggleModal();
  };
  var prepareFormOption = {
    onSaveBookCirculation: onSaveBookCirculation,
    onCancel: onCancel,
    initialValues: changeAbleFields,
    isDisableSubmit: isDisableSubmit
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, modalOption), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_BookCirculationForm__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, prepareFormOption), formOption))
  }));
};
EditBookCirculation.propTypes = {
  bookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  bookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  filterObject: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  books: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().array),
  members: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().array),
  bookId: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  isMemberBookHistory: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  editBookCirculation: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  editMemberBookHistory: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  editMemberBookHistoryStatus: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  editBookCirculationStatus: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  fetchBooks: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  fetchMembers: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  onSelectBook: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  clearAvailableBookLimit: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  addToast: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    bookLimit: state.bookLimit
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  editBookCirculation: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_7__.editBookCirculation,
  editMemberBookHistory: _store_actions_memberBookHistoryAction__WEBPACK_IMPORTED_MODULE_8__.editMemberBookHistory,
  editMemberBookHistoryStatus: _store_actions_memberBookHistoryAction__WEBPACK_IMPORTED_MODULE_8__.editMemberBookHistoryStatus,
  editBookCirculationStatus: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_7__.editBookCirculationStatus,
  clearAvailableBookLimit: _store_actions_availableBookLimitAction__WEBPACK_IMPORTED_MODULE_11__.clearAvailableBookLimit,
  addToast: _store_action_toastAction__WEBPACK_IMPORTED_MODULE_10__.addToast
})(EditBookCirculation));

/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/MailSend.js":
/*!**************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/MailSend.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/bookCirculationAction */ "./resources/pos/src/admin/store/actions/bookCirculationAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var MailSend = function MailSend(props) {
  var return_due_date = props.return_due_date,
    book_item_id = props.book_item_id,
    sendMail = props.sendMail,
    status = props.status;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loader = _useState2[0],
    setLoader = _useState2[1];
  var SendMail = function SendMail() {
    setLoader(true);
    sendMail(book_item_id, function (res) {
      if (res) {
        setLoader(false);
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    children: status === _constants__WEBPACK_IMPORTED_MODULE_4__.bookCirculationStatusConstant.BOOK_ISSUED && return_due_date < moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).format("YYYY-MM-DD hh:mm:ss") ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "success",
      size: "sm",
      onClick: function onClick() {
        return SendMail();
      },
      children: loader ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "text-white",
        as: "span",
        animation: "border",
        size: "sm",
        role: "status",
        "aria-hidden": "true"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
        className: "fa fa-envelope fa-sm text-white"
      })
    }) : null
  });
};
MailSend.prototype = {
  sendMail: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  sendMail: _store_actions_bookCirculationAction__WEBPACK_IMPORTED_MODULE_3__.sendMail
})(MailSend));

/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/PenaltyWarningModal.js":
/*!*************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/PenaltyWarningModal.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var _shared_action_buttons_ActionButtons_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/action-buttons/ActionButtons.scss */ "./resources/pos/src/shared/action-buttons/ActionButtons.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var PenaltyWarningModal = function PenaltyWarningModal(props) {
  var lateDays = props.lateDays,
    collectedPenalty = props.collectedPenalty,
    isReturnDueDateModal = props.isReturnDueDateModal,
    toggleDueBookModal = props.toggleDueBookModal,
    currency = props.currency;
  var renderMessage = function renderMessage() {
    var amount = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.priceFormatter)(collectedPenalty, currency);
    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getDynamicFormattedMessage)('books-circulation.penalties.customer-return-book.message', {
      lateDays: lateDays,
      amount: amount
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: isReturnDueDateModal,
    toggle: toggleDueBookModal,
    className: 'modal-primary modal-config--small',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      toggle: toggleDueBookModal,
      children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-circulation.return.modal.penalties-warning.label')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          xs: 12,
          children: renderMessage()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
            onClick: toggleDueBookModal,
            color: "primary",
            size: "md",
            className: "save-action__save-btn text-white",
            children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('global.input.ok-btn.label')
          })
        })]
      })
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var isReturnDueDateModal = state.isReturnDueDateModal,
    settings = state.settings;
  return {
    currency: settings.currency.value.toLowerCase(),
    isReturnDueDateModal: isReturnDueDateModal
  };
};
var penaltyWarningModal = (0,redux_form__WEBPACK_IMPORTED_MODULE_11__["default"])({
  form: 'penaltiesWarningForms'
})(PenaltyWarningModal);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(penaltyWarningModal));

/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/bookCirculationValidate.js":
/*!*****************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/bookCirculationValidate.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.book) {
    errors.book = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books-circulation.select.book.validate.label');
  }
  if (!formValues.book_item) {
    errors.book_item = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books-circulation.select.book-item.validate.label');
  }
  if (!formValues.member) {
    errors.member = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books-circulation.select.member.validate.label');
  }
  if (!formValues.status) {
    errors.status = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books-circulation.select.status.validate.label');
  }
  return errors;
});

/***/ }),

/***/ "./resources/pos/src/admin/shared/sharedMethod.js":
/*!********************************************************!*\
  !*** ./resources/pos/src/admin/shared/sharedMethod.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApiRouteForBookCirculation": () => (/* binding */ getApiRouteForBookCirculation),
/* harmony export */   "getBookCirculationSuccessMessage": () => (/* binding */ getBookCirculationSuccessMessage),
/* harmony export */   "getCurrentMember": () => (/* binding */ getCurrentMember),
/* harmony export */   "getCurrentUser": () => (/* binding */ getCurrentUser)
/* harmony export */ });
/* harmony import */ var _member_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../member/constants */ "./resources/pos/src/member/constants/index.js");

var getCurrentUser = function getCurrentUser() {
  return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
};
var getCurrentMember = function getCurrentMember() {
  return localStorage.getItem('member') ? JSON.parse(atob(localStorage.getItem('member'))) : null;
};
var getApiRouteForBookCirculation = function getApiRouteForBookCirculation(status) {
  switch (status) {
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_RESERVED:
      return 'reserve-book';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_ISSUED:
      return 'issue-book';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_RETURNED:
      return 'return-book';
    default:
      return 'un-reserve-book';
  }
};
var getBookCirculationSuccessMessage = function getBookCirculationSuccessMessage(status) {
  switch (status) {
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_RESERVED:
      return 'books-circulation.success.reserve.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_ISSUED:
      return 'books-circulation.success.issue.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_RETURNED:
      return 'books-circulation.success.return.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_LOST:
      return 'books-circulation.success.lost.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_DAMAGED:
      return 'books-circulation.success.damage.message';
    case _member_constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_UN_RESERVED:
      return 'books-circulation.success.unreserve.message';
    default:
      return 'books-circulation.success.reserve.message';
  }
};

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/availableBookLimitAction.js":
/*!***************************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/availableBookLimitAction.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAvailableBookLimit": () => (/* binding */ clearAvailableBookLimit),
/* harmony export */   "fetchAvailableBookLimit": () => (/* binding */ fetchAvailableBookLimit)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var fetchAvailableBookLimit = function fetchAvailableBookLimit(memberId, status) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.apiBaseURL.MEMBER, "/").concat(memberId, "/status/").concat(status)).then(function (response) {
                if (status === _constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationStatusConstant.BOOK_ISSUED) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__.availableBookLimitActionType.FETCH_AVAILABLE_ISSUE_BOOK_LIMIT,
                    payload: {
                      isExceed: response.data.data,
                      status: status
                    }
                  });
                } else {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__.availableBookLimitActionType.FETCH_AVAILABLE_RESERVE_BOOK_LIMIT,
                    payload: {
                      isExceed: response.data.data,
                      status: status
                    }
                  });
                }
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
var clearAvailableBookLimit = function clearAvailableBookLimit() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.availableBookLimitActionType.CLEAR_AVAILABLE_RESERVE_BOOK_LIMIT
  };
};

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/availableBooksAction.js":
/*!***********************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/availableBooksAction.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAvailableBooks": () => (/* binding */ fetchAvailableBooks)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var fetchAvailableBooks = function fetchAvailableBooks(bookId, memberId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.apiBaseURL.BOOK, "/").concat(bookId, "/available-books?member_id=").concat(memberId)).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.availableBookActionType.FETCH_AVAILABLE_BOOKS,
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

/***/ "./resources/pos/src/admin/store/actions/bookCirculationAction.js":
/*!************************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/bookCirculationAction.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBookCirculation": () => (/* binding */ addBookCirculation),
/* harmony export */   "deleteBookCirculation": () => (/* binding */ deleteBookCirculation),
/* harmony export */   "editBookCirculation": () => (/* binding */ editBookCirculation),
/* harmony export */   "editBookCirculationStatus": () => (/* binding */ editBookCirculationStatus),
/* harmony export */   "excelFile": () => (/* binding */ excelFile),
/* harmony export */   "fetchBookCirculation": () => (/* binding */ fetchBookCirculation),
/* harmony export */   "fetchBooksCirculation": () => (/* binding */ fetchBooksCirculation),
/* harmony export */   "sendMail": () => (/* binding */ sendMail)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/pos/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/admin/shared/sharedMethod.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var fetchBooksCirculation = function fetchBooksCirculation() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = arguments.length > 1 ? arguments[1] : undefined;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var url;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(true));
              url = _constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK_HISTORY;
              if (!lodash__WEBPACK_IMPORTED_MODULE_8___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationActionType.FETCH_BOOKS_CIRCULATION,
                  payload: response.data.data
                });
                dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_6__.setTotalRecord)(response.data.totalRecords));
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false));
                cb({
                  status: response.data.success
                });
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false));
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
var fetchBookCirculation = function fetchBookCirculation(bookCirculationId) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(true));
              _context2.next = 3;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.ISSUED_BOOK + '/' + bookCirculationId).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationActionType.FETCH_BOOK_CIRCULATION,
                  payload: response.data.data
                });
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false));
              })["catch"](function (_ref4) {
                var response = _ref4.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false));
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
var addBookCirculation = function addBookCirculation(book) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post("".concat(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK, "/").concat(book.book_item_id, "/").concat((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getApiRouteForBookCirculation)(book.status)), book).then(function () {
                dispatch(fetchBooksCirculation(filterObj, function () {}));
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getBookCirculationSuccessMessage)(book.status))
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
var editBookCirculation = function editBookCirculation(book) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post("".concat(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK, "/").concat(book.book_item_id, "/").concat((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getApiRouteForBookCirculation)(book.status)), book).then(function () {
                dispatch(fetchBooksCirculation(filterObj, function () {}));
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getBookCirculationSuccessMessage)(book.status))
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
var editBookCirculationStatus = function editBookCirculationStatus(book) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].put("".concat(_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK, "/").concat(book.book_item_id, "/update-issued-book-status"), {
                status: book.status
              }).then(function () {
                dispatch(fetchBooksCirculation(filterObj, function () {}));
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getBookCirculationSuccessMessage)(book.status))
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
              })["catch"](function (_ref10) {
                var response = _ref10.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
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
var deleteBookCirculation = function deleteBookCirculation(bookId) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(dispatch) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.BOOK_HISTORY + '/' + bookId).then(function (response) {
                dispatch(fetchBooksCirculation(filterObj, function () {}));
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationActionType.DELETE_BOOK_CIRCULATION,
                  payload: bookId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
              })["catch"](function (_ref12) {
                var response = _ref12.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
              });
            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }();
};
var sendMail = function sendMail(id, cb) {
  return /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(dispatch) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post("book-history/".concat(id, "/send-book-due-mail"), null).then(function (response) {
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('books-circulation.success.reminder.message')
                }));
                cb({});
              })["catch"](function (_ref14) {
                var response = _ref14.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                cb({});
              });
            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref13.apply(this, arguments);
    };
  }();
};
var excelFile = function excelFile() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = arguments.length > 1 ? arguments[1] : undefined;
  var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(dispatch) {
      var url;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(true)) : null;
              url = _constants__WEBPACK_IMPORTED_MODULE_10__.apiBaseURL.EXPORT_BOOKS_CIRCULATION;
              if (!lodash__WEBPACK_IMPORTED_MODULE_8___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter);
              }
              _context8.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookCirculationActionType.EXCEL_FILE_CIRCULATION,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message
                }));
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false)) : null;
                cb({
                  url: response.data.data
                });
              })["catch"](function (_ref16) {
                var response = _ref16.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false)) : null;
              });
            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return function (_x8) {
      return _ref15.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/memberAction.js":
/*!***************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/memberAction.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeInactiveMember": () => (/* binding */ activeInactiveMember),
/* harmony export */   "addMember": () => (/* binding */ addMember),
/* harmony export */   "deleteMember": () => (/* binding */ deleteMember),
/* harmony export */   "editMember": () => (/* binding */ editMember),
/* harmony export */   "fetchMember": () => (/* binding */ fetchMember),
/* harmony export */   "fetchMembers": () => (/* binding */ fetchMembers),
/* harmony export */   "meberSendMail": () => (/* binding */ meberSendMail)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfigWthFormData */ "./resources/pos/src/admin/config/apiConfigWthFormData.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/pos/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var fetchMembers = function fetchMembers() {
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
              url = _constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.MEMBER;
              if (filter.limit || filter.order_By || filter.search) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_6__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberActionType.FETCH_MEMBERS,
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
var fetchMember = function fetchMember(memberId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true)) : null;
              _context2.next = 3;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.MEMBER + '/' + memberId).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberActionType.FETCH_MEMBER,
                  payload: response.data.data
                });
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
              })["catch"](function (_ref4) {
                var response = _ref4.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
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
var addMember = function addMember(member, history) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.MEMBER, member).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberActionType.ADD_MEMBER,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('members.success.create.message')
                }));
                history.push(_constants__WEBPACK_IMPORTED_MODULE_9__.Routes.MEMBERS);
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
var editMember = function editMember(memberId, member, history) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.MEMBER + '/' + memberId, member).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberActionType.EDIT_MEMBER,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message
                }));
                history.push(_constants__WEBPACK_IMPORTED_MODULE_9__.Routes.MEMBERS);
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
var deleteMember = function deleteMember(memberId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.MEMBER + '/' + memberId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberActionType.DELETE_MEMBER,
                  payload: memberId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('members.success.delete.message')
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
var activeInactiveMember = function activeInactiveMember(memberId, isActive) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(dispatch) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.MEMBER + '/' + memberId + '/update-status').then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberActionType.SET_ACTIVE_DE_ACTIVE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)(!isActive ? 'members.success.active-account.message' : 'members.success.inactive-account.message')
                }));
              })["catch"](function (_ref12) {
                var response = _ref12.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
              });
            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }();
};
var meberSendMail = function meberSendMail(id) {
  return /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(dispatch) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.MEMBER + '/' + id + '/re-activation').then(function (response) {
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message
                }));
              })["catch"](function (_ref14) {
                var response = _ref14.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
              });
            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref13.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/memberBookHistoryAction.js":
/*!**************************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/memberBookHistoryAction.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editMemberBookHistory": () => (/* binding */ editMemberBookHistory),
/* harmony export */   "editMemberBookHistoryStatus": () => (/* binding */ editMemberBookHistoryStatus),
/* harmony export */   "fetchMemberBooksHistory": () => (/* binding */ fetchMemberBooksHistory)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/admin/shared/sharedMethod.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/pos/src/store/action/progressBarAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/admin/store/actions/totalRecordAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var fetchMemberBooksHistory = function fetchMemberBooksHistory(memberId) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var url;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
              url = "members/".concat(memberId, "/books-history");
              if (filter.limit || filter.order_By || filter.search) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_6__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberBookHistoryActionType.FETCH_MEMBER_BOOK_HISTORY,
                  payload: response.data.data
                });
                dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_7__.setTotalRecord)(response.data.totalRecords));
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
                }));
                dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
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
var editMemberBookHistory = function editMemberBookHistory(book) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post("books/".concat(book.book_item_id, "/").concat((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getApiRouteForBookCirculation)(book.status)), book).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberBookHistoryActionType.EDIT_MEMBER_BOOK_HISTORY,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getBookCirculationSuccessMessage)(book.status))
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_3__.toggleModal)());
              })["catch"](function (_ref4) {
                var response = _ref4.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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
var editMemberBookHistoryStatus = function editMemberBookHistoryStatus(book) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].put("books/".concat(book.book_item_id, "/update-issued-book-status"), {
                status: book.status
              }).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.memberBookHistoryActionType.EDIT_MEMBER_BOOK_HISTORY,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getBookCirculationSuccessMessage)(book.status))
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_3__.toggleModal)());
              })["catch"](function (_ref6) {
                var response = _ref6.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/toggleDueBookModal.js":
/*!*********************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/toggleDueBookModal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleDueBookModal": () => (/* binding */ toggleDueBookModal)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");

var toggleDueBookModal = function toggleDueBookModal() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.PENALTIY_MODAL_ACTION
  };
};

/***/ }),

/***/ "./resources/pos/src/shared/book-status/book-status.js":
/*!*************************************************************!*\
  !*** ./resources/pos/src/shared/book-status/book-status.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var BookStatus = function BookStatus(props) {
  var status = props.status,
    item = props.item;
  switch (status) {
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_ISSUED:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.issued.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-success",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.issued.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_AVAILABLE:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.available.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-success",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.available.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_RETURNED:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.returned.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-dark",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.returned.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_LOST:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.lost.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-danger",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.lost.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_DAMAGED:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.damaged.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-warning",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.damaged.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookCirculationStatusConstant.BOOK_UN_RESERVED:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.unreserved.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.unreserved.label')
        })
      });
    default:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.reserved.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-primary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('book-history.filter.reserved.label')
        })
      });
  }
};
BookStatus.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  status: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookStatus);

/***/ }),

/***/ "./resources/pos/src/shared/components/CheckBox.js":
/*!*********************************************************!*\
  !*** ./resources/pos/src/shared/components/CheckBox.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.scss */ "./resources/pos/src/shared/components/Component.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CheckBox = function CheckBox(props) {
  var input = props.input,
    label = props.label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: "control control--checkbox",
    children: [label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", _objectSpread({
      type: "checkbox",
      checked: !!input.value,
      onChange: function onChange(e, _ref) {
        var checked = _ref.checked;
        return input.onChange(checked);
      }
    }, input)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "control__indicator"
    })]
  });
};
CheckBox.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);

/***/ }),

/***/ "./resources/pos/src/shared/components/DatePicker.js":
/*!***********************************************************!*\
  !*** ./resources/pos/src/shared/components/DatePicker.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupAddon.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupText.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.scss */ "./resources/pos/src/shared/components/Component.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var ReactDatePicker = function ReactDatePicker(props) {
  var label = props.label,
    required = props.required,
    placeholder = props.placeholder,
    _props$selected = props.selected,
    selected = _props$selected === void 0 ? '' : _props$selected,
    _props$addOnType = props.addOnType,
    addOnType = _props$addOnType === void 0 ? 'prepend' : _props$addOnType,
    _props$groupText = props.groupText,
    groupText = _props$groupText === void 0 ? 'calendar-check-o' : _props$groupText,
    onChange = props.onChange,
    _props$minDate = props.minDate,
    minDate = _props$minDate === void 0 ? '' : _props$minDate,
    _props$maxDate = props.maxDate,
    maxDate = _props$maxDate === void 0 ? '' : _props$maxDate,
    _props$dateFormat = props.dateFormat,
    dateFormat = _props$dateFormat === void 0 ? 'MMMM d, yyyy' : _props$dateFormat,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$startOpen = props.startOpen,
    startOpen = _props$startOpen === void 0 ? false : _props$startOpen,
    _props$shouldCloseOnS = props.shouldCloseOnSelect,
    shouldCloseOnSelect = _props$shouldCloseOnS === void 0 ? true : _props$shouldCloseOnS;
  var labelClass = required ? 'control-label' : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [label ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: labelClass,
        children: label
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "date-picker-input",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          addonType: addOnType,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fa fa-".concat(groupText)
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), {
          placeholderText: placeholder,
          selected: selected,
          onChange: onChange,
          maxDate: maxDate,
          minDate: minDate,
          dateFormat: dateFormat,
          disabled: disabled,
          shouldCloseOnSelect: shouldCloseOnSelect,
          startOpen: startOpen
        })]
      })]
    })
  });
};
ReactDatePicker.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
  label: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)]),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  groupText: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  addOnType: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  dateFormat: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
  // minDate: PropTypes.oneOfType([
  //     PropTypes.func,
  //     PropTypes.date,
  // ]),
  // maxDate: PropTypes.oneOfType([
  //     PropTypes.func,
  //     PropTypes.date,
  // ]),
  // selected: PropTypes.oneOfType([
  //     PropTypes.func,
  //     PropTypes.date,
  // ]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactDatePicker);

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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/books-circulation/BooksCirculation.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/books-circulation/BooksCirculation.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".books-circulation-table-row {\n  cursor: pointer;\n}\n\n.header__border {\n  border-bottom: 1px solid #c8ced3;\n}\n\n@media (max-width: 355px) {\n  .react-datepicker {\n    margin-left: -55px;\n  }\n}\n\n.css-4ljt47-MenuList {\n  scroll-behavior: smooth;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/pos/src/admin/components/books-circulation/BooksCirculation.scss":
/*!************************************************************************************!*\
  !*** ./resources/pos/src/admin/components/books-circulation/BooksCirculation.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./BooksCirculation.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/books-circulation/BooksCirculation.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BooksCirculation_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/reactstrap/es/Spinner.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/Spinner.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "type", "size", "color", "children", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  type: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
var defaultProps = {
  tag: 'div',
  type: 'border',
  children: 'Loading...'
};

var Spinner = function Spinner(props) {
  var className = props.className,
      cssModule = props.cssModule,
      type = props.type,
      size = props.size,
      color = props.color,
      children = props.children,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "status"
  }, attributes, {
    className: classes
  }), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)('sr-only', cssModule)
  }, children));
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./node_modules/redux-form/es/createFormValueSelector.js":
/*!***************************************************************!*\
  !*** ./node_modules/redux-form/es/createFormValueSelector.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFormValueSelector)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");


function createFormValueSelector(_ref) {
  var getIn = _ref.getIn;
  return function (form, getFormState) {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(form, 'Form value must be specified');

    var nonNullGetFormState = getFormState || function (state) {
      return getIn(state, 'form');
    };

    return function (state) {
      for (var _len = arguments.length, fields = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        fields[_key - 1] = arguments[_key];
      }

      invariant__WEBPACK_IMPORTED_MODULE_0___default()(fields.length, 'No fields specified');
      return fields.length === 1 ? // only selecting one field, so return its value
      getIn(nonNullGetFormState(state), form + ".values." + fields[0]) : // selecting many fields, so return an object of field values
      fields.reduce(function (accumulator, field) {
        var value = getIn(nonNullGetFormState(state), form + ".values." + field);
        return value === undefined ? accumulator : _structure_plain__WEBPACK_IMPORTED_MODULE_1__["default"].setIn(accumulator, field, value);
      }, {});
    };
  };
}

/***/ }),

/***/ "./node_modules/redux-form/es/formValueSelector.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-form/es/formValueSelector.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createFormValueSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFormValueSelector */ "./node_modules/redux-form/es/createFormValueSelector.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createFormValueSelector__WEBPACK_IMPORTED_MODULE_0__["default"])(_structure_plain__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);