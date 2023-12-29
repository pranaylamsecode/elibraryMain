"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_admin_components_book-details_BookDetails_js"],{

/***/ "./resources/pos/src/admin/components/book-details/BookDetails.js":
/*!************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-details/BookDetails.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _BookDetails_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookDetails.scss */ "./resources/pos/src/admin/components/book-details/BookDetails.scss");
/* harmony import */ var _BookDetailsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookDetailsModal */ "./resources/pos/src/admin/components/book-details/BookDetailsModal.js");
/* harmony import */ var _book_items_BookItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book-items/BookItems */ "./resources/pos/src/admin/components/book-items/BookItems.js");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../appConstant */ "./resources/pos/src/appConstant.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/pos/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/pos/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/bookAction */ "./resources/pos/src/admin/store/actions/bookAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var react_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-viewer */ "./node_modules/react-viewer/dist/index.js");
/* harmony import */ var react_viewer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_viewer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var BookDetail = function BookDetail(props) {
  var book = props.book,
    toggleModal = props.toggleModal,
    history = props.history,
    fetchBook = props.fetchBook,
    match = props.match;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isParentToggle = _useState2[0],
    setIsParentToggle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isToggle = _useState4[0],
    setIsToggle = _useState4[1];
  var cardModalProps = {
    book: book,
    toggleModal: toggleModal,
    isToggle: isToggle
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    visible = _useState6[0],
    setVisible = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchBook(+match.params.id);
  }, []);
  if (!book || !book.genres) {
    return null;
  }
  var onOpenModal = function onOpenModal() {
    setIsToggle(true);
    setIsParentToggle(true);
    toggleModal();
  };
  var goBack = function goBack() {
    history.goBack();
  };
  var bookItemFormOptions = {
    bookItemList: book.items,
    bookId: book.id,
    goBack: goBack,
    isParentToggle: isParentToggle,
    setIsParentToggle: setIsParentToggle
  };
  var imageUrl = book.image_path ? book.image_path : _appConstant__WEBPACK_IMPORTED_MODULE_5__.publicImagePath.BOOK_AVATAR;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Book-Details"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        sm: 12,
        className: "mb-2 d-block d-sm-flex justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h5", {
          className: "page-heading w-100",
          children: book.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "d-block d-sm-flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "mr-2",
            color: "primary text-white",
            onClick: function onClick() {
              return onOpenModal();
            },
            children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.edit-book-details.title')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "float-right",
            onClick: function onClick() {
              return goBack();
            },
            children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('global.input.back-btn.label')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "sticky-table-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
            className: "px-0 py-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                className: "book-detail-row d-flex",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                  className: "book-image-container",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                    className: "book-image-holder",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
                        className: "book-img",
                        onClick: function onClick() {
                          setVisible(true);
                        },
                        src: imageUrl,
                        height: "250",
                        alt: imageUrl
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((react_viewer__WEBPACK_IMPORTED_MODULE_11___default()), {
                        changeable: false,
                        drag: false,
                        disableMouseZoom: true,
                        loop: false,
                        zIndex: 1100,
                        scalable: false,
                        noNavbar: true,
                        visible: visible,
                        onClose: function onClose() {
                          setVisible(false);
                        },
                        images: [{
                          src: imageUrl,
                          alt: ''
                        }]
                      })]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                  className: "book-detail",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                    className: "book-detail__item-container",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-detail__item-isbn-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.edit-book-details.table.isbn.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: book.isbn
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-detail__item-genre-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.edit-book-details.table.genres.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: book.genres.map(function (_ref) {
                          var name = _ref.name;
                          return name;
                        }).join(',  ')
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-detail__item-authors-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.edit-book-details.table.authors.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.prepareFullNames)(book.authors).map(function (_ref2) {
                          var name = _ref2.name;
                          return name;
                        }).join(',  ')
                      })]
                    }), book.tags.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-detail__item-tags-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.edit-book-details.table.tags.column')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: book.tags.map(function (_ref3) {
                          var name = _ref3.name;
                          return name;
                        }).join(',  ')
                      })]
                    }) : null, book.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-detail__item-url-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.input.url.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
                          target: "_blank",
                          href: book.url,
                          children: book.url
                        })
                      })]
                    }) : null, book.description ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                      className: "book-detail__item",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-detail__item-desc-heading",
                        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.input.description.label')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "book-detail__item-desc-text",
                        children: book.description
                      })]
                    }) : null]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                className: book.description ? 'mt-5' : 'mt-5',
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h5", {
                  className: "mb-3",
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.items.title')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_book_items_BookItems__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, bookItemFormOptions))]
              }), isParentToggle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_BookDetailsModal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, cardModalProps)) : null]
            })
          })
        })
      })]
    })]
  });
};
BookDetail.propTypes = {
  book: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  match: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool),
  isToggle: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool),
  fetchBook: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func)
};
var mapStateToProps = function mapStateToProps(state, ownProp) {
  var books = state.books,
    isToggle = state.isToggle;
  return {
    book: books.find(function (book) {
      return book.id === +ownProp.match.params.id;
    }),
    isToggle: isToggle
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchBook: _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_9__.fetchBook,
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_10__.toggleModal
})(BookDetail));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-details/BookDetailsForm.js":
/*!****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-details/BookDetailsForm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _shared_bookValidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/bookValidate */ "./resources/pos/src/admin/shared/bookValidate.js");
/* harmony import */ var _shared_bookValidateWarning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/bookValidateWarning */ "./resources/pos/src/admin/shared/bookValidateWarning.js");
/* harmony import */ var _books_Books_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../books/Books.scss */ "./resources/pos/src/admin/components/books/Books.scss");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/pos/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/pos/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/TextArea */ "./resources/pos/src/shared/components/TextArea.js");
/* harmony import */ var _shared_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/ToggleSwitch */ "./resources/pos/src/shared/components/ToggleSwitch.js");
/* harmony import */ var _shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/image-picker/ImagePicker */ "./resources/pos/src/shared/image-picker/ImagePicker.js");
/* harmony import */ var _appConstant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../appConstant */ "./resources/pos/src/appConstant.js");
/* harmony import */ var _shared_components_SelectCreatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/SelectCreatable */ "./resources/pos/src/shared/components/SelectCreatable.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/pos/src/shared/custom-hooks/index.js");
/* harmony import */ var _shared_prepareArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/prepareArray */ "./resources/pos/src/admin/shared/prepareArray.js");
/* harmony import */ var _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/authorAction */ "./resources/pos/src/admin/store/actions/authorAction.js");
/* harmony import */ var _store_actions_tagAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/actions/tagAction */ "./resources/pos/src/admin/store/actions/tagAction.js");
/* harmony import */ var _store_actions_genreAction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/genreAction */ "./resources/pos/src/admin/store/actions/genreAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























var BookDetailsForm = function BookDetailsForm(props) {
  var initialValues = props.initialValues,
    change = props.change,
    authors = props.authors,
    tags = props.tags,
    genres = props.genres,
    onSaveBook = props.onSaveBook,
    handleSubmit = props.handleSubmit,
    fetchAuthors = props.fetchAuthors,
    fetchGenres = props.fetchGenres,
    fetchTags = props.fetchTags;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!(initialValues && initialValues.is_featured)),
    _useState2 = _slicedToArray(_useState, 2),
    isFeatured = _useState2[0],
    setIsFeatured = _useState2[1];
  var _imagePicker = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__.imagePicker)(change, !!initialValues.image_path ? initialValues.image_path : !!initialValues.isCreate ? _appConstant__WEBPACK_IMPORTED_MODULE_10__.publicImagePath.USER_AVATAR : null, !!initialValues.isCreate ? _appConstant__WEBPACK_IMPORTED_MODULE_10__.publicImagePath.USER_AVATAR : null, !!!initialValues.image_path),
    _imagePicker2 = _slicedToArray(_imagePicker, 5),
    image = _imagePicker2[0],
    isDefaultImage = _imagePicker2[1],
    file = _imagePicker2[2],
    onFileChange = _imagePicker2[3],
    onRemovePhoto = _imagePicker2[4];
  var _bookCreationWarning = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__.bookCreationWarning)(change),
    _bookCreationWarning2 = _slicedToArray(_bookCreationWarning, 1),
    onChangeAuthor = _bookCreationWarning2[0];
  var _bookCreationWarning3 = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__.bookCreationWarning)(change),
    _bookCreationWarning4 = _slicedToArray(_bookCreationWarning3, 1),
    onChangeGenres = _bookCreationWarning4[0];
  var _bookCreationWarning5 = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_13__.bookCreationWarning)(change),
    _bookCreationWarning6 = _slicedToArray(_bookCreationWarning5, 1),
    onChangeTags = _bookCreationWarning6[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchAuthors();
    fetchGenres();
    fetchTags();
  }, []);
  var onSave = function onSave(formValues) {
    formValues.file = file;
    onSaveBook(formValues);
  };
  var onChecked = function onChecked() {
    setIsFeatured(!isFeatured);
  };
  var imagePickerOptions = {
    image: image,
    buttonName: 'image-picker.dropdown.cover.label',
    isDefaultImage: isDefaultImage,
    onRemovePhoto: onRemovePhoto,
    onFileChange: onFileChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: "animated fadeIn book-detail-form-card m-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      xs: 8,
      className: "book-detail-form-card__primary-details",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: "d-flex justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("h5", {
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books.form.primary-details')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
          className: "d-flex",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
              name: "is_featured",
              checked: isFeatured,
              label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books.toggle.is-featured.label'),
              onChange: onChecked,
              component: _shared_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_8__["default"]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("hr", {
        className: "book-detail-form-card__hr"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "name",
            label: "books.input.name.label",
            required: true,
            groupText: "book",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "authors",
            label: "authors.title",
            required: true,
            isMulti: true,
            onChange: function onChange(options) {
              return onChangeAuthor(options, authors, 'new_authors');
            },
            options: authors,
            placeholder: "books.select.authors.placeholder",
            groupText: "user-circle-o",
            component: _shared_components_SelectCreatable__WEBPACK_IMPORTED_MODULE_11__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "isbn",
            label: "books.input.isbn.label",
            required: true,
            groupText: "id-card",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "genres",
            label: "genres.title",
            required: true,
            isMulti: true,
            onChange: function onChange(options) {
              return onChangeGenres(options, genres, 'new_genres');
            },
            options: genres,
            placeholder: "books.select.genres.placeholder",
            groupText: "list-alt",
            component: _shared_components_SelectCreatable__WEBPACK_IMPORTED_MODULE_11__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "tags",
            label: "tags.title",
            isMulti: true,
            onChange: function onChange(options) {
              return onChangeTags(options, tags, 'new_tags');
            },
            options: tags,
            placeholder: "books.select.tags.placeholder",
            groupText: "tag",
            component: _shared_components_SelectCreatable__WEBPACK_IMPORTED_MODULE_11__["default"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          xs: 12,
          sm: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "url",
            label: "books.input.url.label",
            groupText: "link",
            component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__["default"]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      xs: 4,
      className: "book-detail-form-card__book-cover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("h5", {
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('books.book-cover.title')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: "mt-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
          name: "file_name",
          type: "hidden",
          component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_6__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({}, imagePickerOptions))]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      xs: 12,
      className: "mt-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_21__["default"], {
            name: "description",
            cols: 90,
            rows: 3,
            label: "books.input.description.label",
            component: _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_7__["default"]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
        onSave: handleSubmit(onSave)
      }, props))
    })]
  });
};
BookDetailsForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object),
  authors: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().array),
  genres: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().array),
  tags: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().array),
  change: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func),
  onSaveBook: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func),
  fetchAuthors: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func),
  fetchGenres: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func),
  fetchTags: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  var authors = state.authors,
    tags = state.tags,
    genres = state.genres;
  return {
    authors: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_14__.prepareCreatableObject)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.prepareFullNames)(authors)),
    tags: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_14__.prepareCreatableObject)(tags),
    genres: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_14__.prepareCreatableObject)(genres)
  };
};
var bookDetailsForm = (0,redux_form__WEBPACK_IMPORTED_MODULE_23__["default"])({
  form: 'bookForm',
  validate: _shared_bookValidate__WEBPACK_IMPORTED_MODULE_2__["default"],
  warn: _shared_bookValidateWarning__WEBPACK_IMPORTED_MODULE_3__["default"]
})(BookDetailsForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchAuthors: _store_actions_authorAction__WEBPACK_IMPORTED_MODULE_15__.fetchAuthors,
  fetchGenres: _store_actions_genreAction__WEBPACK_IMPORTED_MODULE_17__.fetchGenres,
  fetchTags: _store_actions_tagAction__WEBPACK_IMPORTED_MODULE_16__.fetchTags
})(bookDetailsForm));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-details/BookDetailsModal.js":
/*!*****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-details/BookDetailsModal.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDetailsModal": () => (/* binding */ BookDetailsModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EditBookDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditBookDetails */ "./resources/pos/src/admin/components/book-details/EditBookDetails.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BookDetailsModal = function BookDetailsModal(props) {
  var book = props.book,
    isToggle = props.isToggle,
    toggleModal = props.toggleModal;
  if (isToggle) {
    var prepareModalOption = {
      book: book,
      modalConfig: {
        className: 'book-detail__modal',
        title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books.edit-book-details.title'),
        toggleModal: toggleModal
      }
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_EditBookDetails__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, prepareModalOption));
  }
  return null;
};
BookDetailsModal.propTypes = {
  book: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  isToggle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookDetailsModal);

/***/ }),

/***/ "./resources/pos/src/admin/components/book-details/EditBookDetails.js":
/*!****************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-details/EditBookDetails.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _BookDetailsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookDetailsForm */ "./resources/pos/src/admin/components/book-details/BookDetailsForm.js");
/* harmony import */ var _books_Books_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../books/Books.scss */ "./resources/pos/src/admin/components/books/Books.scss");
/* harmony import */ var _shared_prepareBookFormData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/prepareBookFormData */ "./resources/pos/src/admin/shared/prepareBookFormData.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_prepareArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/prepareArray */ "./resources/pos/src/admin/shared/prepareArray.js");
/* harmony import */ var _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/bookAction */ "./resources/pos/src/admin/store/actions/bookAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var EditBookDetails = function EditBookDetails(props) {
  var book = props.book,
    editBook = props.editBook,
    modalConfig = props.modalConfig;
  var id = book.id,
    is_featured = book.is_featured,
    isbn = book.isbn,
    name = book.name,
    price = book.price,
    url = book.url,
    description = book.description,
    image = book.image,
    image_path = book.image_path;
  var onSaveBook = function onSaveBook(formValues) {
    editBook(id, (0,_shared_prepareBookFormData__WEBPACK_IMPORTED_MODULE_4__["default"])(formValues));
  };
  var changAbleFields = {
    id: id,
    is_featured: is_featured,
    isbn: isbn,
    genres: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_7__.prepareCreatableObject)(book.genres),
    authors: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_7__.prepareCreatableObject)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.prepareFullNames)(book.authors)),
    name: name,
    price: price,
    tags: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_7__.prepareCreatableObject)(book.tags),
    url: url,
    description: description,
    image: image,
    image_path: image_path,
    file_name: !!image
  };
  var prepareFormOption = {
    onSaveBook: onSaveBook,
    initialValues: changAbleFields,
    onCancel: modalConfig.toggleModal
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, modalConfig), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_BookDetailsForm__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, prepareFormOption))
  }));
};
EditBookDetails.propTypes = {
  book: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  modalConfig: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  editBook: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  fetchAuthors: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  fetchGenres: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  fetchTags: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  var authors = state.authors,
    tags = state.tags,
    genres = state.genres;
  return {
    authors: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_7__.prepareCreatableObject)((0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.prepareFullNames)(authors)),
    tags: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_7__.prepareCreatableObject)(tags),
    genres: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_7__.prepareCreatableObject)(genres)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  editBook: _store_actions_bookAction__WEBPACK_IMPORTED_MODULE_8__.editBook
})(EditBookDetails));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/BookItemForm.js":
/*!***********************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/BookItemForm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _bookItemValidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookItemValidate */ "./resources/pos/src/admin/components/book-items/bookItemValidate.js");
/* harmony import */ var _book_details_BookDetails_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book-details/BookDetails.scss */ "./resources/pos/src/admin/components/book-details/BookDetails.scss");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/pos/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/pos/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/Select */ "./resources/pos/src/shared/components/Select.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _shared_prepareArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/prepareArray */ "./resources/pos/src/admin/shared/prepareArray.js");
/* harmony import */ var _store_actions_publisherAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/publisherAction */ "./resources/pos/src/admin/store/actions/publisherAction.js");
/* harmony import */ var _store_actions_bookLanguageAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/bookLanguageAction */ "./resources/pos/src/admin/store/actions/bookLanguageAction.js");
/* harmony import */ var _inputFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inputFile */ "./resources/pos/src/admin/components/book-items/inputFile.js");
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



















var BookItemForm = function BookItemForm(props) {
  var bookLanguages = props.bookLanguages,
    publishers = props.publishers,
    onSaveBookItems = props.onSaveBookItems,
    initialValues = props.initialValues,
    currency = props.currency,
    fetchBookLanguages = props.fetchBookLanguages,
    fetchPublishers = props.fetchPublishers,
    handleSubmit = props.handleSubmit,
    _props$newBookItem = props.newBookItem,
    newBookItem = _props$newBookItem === void 0 ? false : _props$newBookItem,
    _props$e_book_url = props.e_book_url,
    e_book_url = _props$e_book_url === void 0 ? '' : _props$e_book_url;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDisabledStatus = _useState2[0],
    setDisabledStatus = _useState2[1];
  var inputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var bookItemsStatusOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_8__.bookItemStatusOptions);
  var booksFormatOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_8__.bookFormatOptions);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues ? initialValues.format : null),
    _useState4 = _slicedToArray(_useState3, 2),
    formateOptions = _useState4[0],
    setFormatOptions = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchBookLanguages();
    fetchPublishers();
    prepareInitialValues();
    if (e_book_url) {
      props.change('file', 'false');
    }
  }, []);
  var prepareInitialValues = function prepareInitialValues() {
    if (!initialValues) {
      props.change('status', _objectSpread({}, bookItemsStatusOptions[0]));
    } else {
      if (initialValues.status && initialValues.status.id === _constants__WEBPACK_IMPORTED_MODULE_8__.bookItemStatusConstants.UNAVAILABLE) {
        setDisabledStatus(true);
      }
    }
    inputRef.current.focus();
  };
  var onSave = function onSave(formValues) {
    var book_code = formValues.book_code,
      edition = formValues.edition,
      format = formValues.format,
      language = formValues.language,
      publisher = formValues.publisher,
      location = formValues.location,
      price = formValues.price,
      status = formValues.status,
      file = formValues.file;
    {
      newBookItem ? onSaveBookItems({
        book_code: book_code,
        edition: edition,
        format: format,
        language: language,
        publisher: publisher,
        status: status,
        location: location,
        price: price,
        file: file
      }) : onSaveBookItems({
        book_code: book_code,
        edition: edition,
        format: format.id,
        language_id: language.id,
        publisher_id: publisher ? publisher.id : null,
        status: status.id,
        location: location,
        price: price,
        file: e_book_url ? '' : file
      });
    }
  };
  var onChangeFormat = function onChangeFormat(options) {
    setFormatOptions(options);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelector(".inputBox").addEventListener("keypress", function (evt) {
      if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });
  }, []);
  var onClickOpenEBook = function onClickOpenEBook(e_book_url) {
    var api = e_book_url + "?token=" + localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_13__.Tokens.ADMIN);
    window.open(api, "_blank");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "animated fadeIn book-form m-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "book_code",
        className: "inputBox",
        label: "books.items.input.book-code.label",
        min: "1",
        inputRef: inputRef,
        required: true,
        onChange: function onChange(e) {
          return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.enableDisableUserInput)(e, _constants__WEBPACK_IMPORTED_MODULE_8__.maxDigits.BOOK_CODE);
        },
        type: "number",
        groupText: "file-text",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "edition",
        label: "books.items.input.edition.label",
        required: true,
        groupText: "file-text",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "format",
        label: "books.items.select.format.label",
        required: true,
        options: booksFormatOptions,
        placeholder: "books.items.select.format.placeholder",
        groupText: "wpforms",
        component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"],
        onChange: function onChange(options) {
          return onChangeFormat(options);
        }
      })
    }), formateOptions && formateOptions.id === 3 && e_book_url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      className: "pt-4",
      children: ["View your PDF ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
        className: "fa fa-download fa-md cursor-pointer text-info ml-2",
        onClick: function onClick() {
          return onClickOpenEBook(e_book_url);
        }
      })]
    }) : formateOptions && formateOptions.id === 3 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      className: "pt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "file",
        type: "file",
        component: _inputFile__WEBPACK_IMPORTED_MODULE_12__["default"]
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "location",
        label: "books.items.input.location.label",
        groupText: "map-pin",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"],
        type: "text"
      })
    }), formateOptions && formateOptions.id !== 3 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "price",
        min: "1",
        type: "number",
        label: "books.items.input.price.label",
        groupText: currency,
        isDefaultCurrency: true,
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "language",
        label: "books.items.select.language.label",
        required: true,
        options: bookLanguages,
        placeholder: "books.items.select.language.placeholder",
        groupText: "language",
        component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"],
        isSearchable: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "publisher",
        label: "books.items.select.publisher.label",
        options: publishers,
        placeholder: "books.items.select.publisher.placeholder",
        groupText: "user-circle-o",
        component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"],
        isSearchable: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "status",
        label: "books.items.select.status.label",
        disabled: !initialValues || isDisabledStatus,
        options: bookItemsStatusOptions,
        placeholder: "books.items.select.status.placeholder",
        groupText: "user-circle-o",
        component: _shared_components_Select__WEBPACK_IMPORTED_MODULE_6__["default"],
        isSearchable: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
        onSave: handleSubmit(onSave)
      }, props))
    })]
  });
};
BookItemForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
  bookLanguages: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().array),
  publishers: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().array),
  fetchPublishers: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  fetchBookLanguages: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  onSaveBookItems: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  var publishers = state.publishers,
    bookLanguages = state.bookLanguages;
  return {
    bookLanguages: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_9__.prepareBookLanguage)(bookLanguages),
    publishers: Object.values(publishers)
  };
};
var bookItemForm = (0,redux_form__WEBPACK_IMPORTED_MODULE_19__["default"])({
  form: 'bookItemForm',
  validate: _bookItemValidate__WEBPACK_IMPORTED_MODULE_2__["default"]
})(BookItemForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchPublishers: _store_actions_publisherAction__WEBPACK_IMPORTED_MODULE_10__.fetchPublishers,
  fetchBookLanguages: _store_actions_bookLanguageAction__WEBPACK_IMPORTED_MODULE_11__.fetchBookLanguages
})(bookItemForm));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/BookItemModal.js":
/*!************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/BookItemModal.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookItemModal": () => (/* binding */ BookItemModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CreateBookItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateBookItem */ "./resources/pos/src/admin/components/book-items/CreateBookItem.js");
/* harmony import */ var _EditBookItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditBookItem */ "./resources/pos/src/admin/components/book-items/EditBookItem.js");
/* harmony import */ var _DeleteBookItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteBookItem */ "./resources/pos/src/admin/components/book-items/DeleteBookItem.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal-config/ModalConfig */ "./resources/pos/src/shared/modal-config/ModalConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var BookItemModal = function BookItemModal(props) {
  var bookItem = props.bookItem,
    bookItems = props.bookItems,
    bookId = props.bookId,
    currency = props.currency,
    isCreate = props.isCreate,
    isEdit = props.isEdit,
    isDelete = props.isDelete;
  var addConfig = {
    bookId: bookId,
    bookItems: bookItems,
    currency: currency
  };
  var editConfig = {
    bookId: bookId,
    bookItems: bookItems,
    bookItem: bookItem,
    currency: currency
  };
  var delConfig = {
    bookItemId: bookItem ? bookItem.id : null
  };
  var modalOptions = {
    modalTitle: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getModalTitle)(isCreate, isEdit, isDelete, 'books.items.input.new-btn.label', 'books.items.modal.edit.title', 'books.items.modal.delete.title'),
    NewComponent: _CreateBookItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditComponent: _EditBookItem__WEBPACK_IMPORTED_MODULE_2__["default"],
    DeleteComponent: _DeleteBookItem__WEBPACK_IMPORTED_MODULE_3__["default"],
    deleteKey: bookItem ? bookItem.edition + '(' + bookItem.book_code + ')' : null,
    addConfig: addConfig,
    editConfig: editConfig,
    delConfig: delConfig,
    props: props
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, modalOptions));
};
BookItemModal.propTypes = {
  bookItem: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  bookItems: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array),
  bookId: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  isCreate: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isEdit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  isDelete: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookItemModal);

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/BookItemTable.js":
/*!************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/BookItemTable.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookItemTable": () => (/* binding */ BookItemTable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _BookItems_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookItems.scss */ "./resources/pos/src/admin/components/book-items/BookItems.scss");
/* harmony import */ var _config_sortConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/sortConfig */ "./resources/pos/src/config/sortConfig.js");
/* harmony import */ var _shared_table_header_Tableheader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/table-header/Tableheader */ "./resources/pos/src/shared/table-header/Tableheader.js");
/* harmony import */ var _shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/ModalAction */ "./resources/pos/src/shared/action-buttons/ModalAction.js");
/* harmony import */ var _shared_book_item_status_BookItemStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/book-item-status/BookItemStatus */ "./resources/pos/src/shared/book-item-status/BookItemStatus.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var BookItemTable = function BookItemTable(props) {
  var bookItems = props.bookItems,
    onClickModal = props.onClickModal,
    sortAction = props.sortAction,
    sortObject = props.sortObject,
    currency = props.currency;
  var headers = [{
    id: 'book_code',
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('books.items.input.book-code.label')
  }, {
    id: 'edition',
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('books.items.input.edition.label')
  }, {
    id: 'language_name',
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('books.items.select.language.label')
  }, {
    id: 'format',
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('books.items.select.format.label')
  }, {
    id: 'price',
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('books.items.input.price.label')
  }];
  var headerProps = {
    sortAction: sortAction,
    sortObject: sortObject,
    sortConfig: _config_sortConfig__WEBPACK_IMPORTED_MODULE_2__.sortConfig,
    headers: headers,
    isStatusField: true
  };
  var renderBookItemStatus = function renderBookItemStatus(bookItem) {
    var statusProps = {
      status: bookItem.status,
      item: bookItem
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_book_item_status_BookItemStatus__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, statusProps), {}, {
      item: bookItem
    }));
  };
  var onClickOpenEBook = function onClickOpenEBook(e_book_url) {
    var api = e_book_url + "?token=" + localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__.Tokens.ADMIN);
    window.open(api, "_blank");
  };
  var bookFormat = function bookFormat(_bookFormat) {
    var field = "books-items.filter.format.e-book.label";
    if (_bookFormat === _constants__WEBPACK_IMPORTED_MODULE_8__.bookFormatConstant.FORMAT_HARDCOVER) {
      field = "books-items.filter.format.hardcover.label";
    } else if (_bookFormat === _constants__WEBPACK_IMPORTED_MODULE_8__.bookFormatConstant.FORMAT_PAPERBACK) {
      field = "books-items.filter.format.paperback.label";
    }
    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)(field);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: "overflow-auto",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      hover: true,
      bordered: true,
      striped: true,
      responsive: true,
      size: "md",
      className: "book-item__table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_table_header_Tableheader__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, headerProps))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("tbody", {
        children: bookItems.map(function (bookItem) {
          if (bookItem.language) {
            bookItem.language_name = bookItem.language.language_name;
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
              className: "book-item__table-book-code",
              children: bookItem.book_code
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
              children: bookItem.edition
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
              children: bookItem.language_name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
              children: [bookFormat(bookItem.format), _constants__WEBPACK_IMPORTED_MODULE_8__.bookFormatConstant.FORMAT_E_BOOK === bookItem.format ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                className: "fa fa-download fa-md cursor-pointer text-info ml-2",
                onClick: function onClick() {
                  return onClickOpenEBook(bookItem.e_book_url);
                }
              }) : '']
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("td", {
              className: "book-item__table-price",
              children: [currency, bookItem.price === null ? '0.00' : bookItem.price]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
              className: "book-item__table-status",
              children: renderBookItemStatus(bookItem)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
              className: "text-center book-item__table-action",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
                onOpenModal: onClickModal,
                item: bookItem
              })
            })]
          }, bookItem.id.toString());
        })
      })]
    })
  });
};
BookItemTable.propTypes = {
  sortObject: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  bookItems: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  sortAction: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  onClickModal: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookItemTable);

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/BookItems.js":
/*!********************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/BookItems.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _BookItemModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookItemModal */ "./resources/pos/src/admin/components/book-items/BookItemModal.js");
/* harmony import */ var _BookItemTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookItemTable */ "./resources/pos/src/admin/components/book-items/BookItemTable.js");
/* harmony import */ var _BookItems_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookItems.scss */ "./resources/pos/src/admin/components/book-items/BookItems.scss");
/* harmony import */ var _shared_empty_component_EmptyComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/empty-component/EmptyComponent */ "./resources/pos/src/shared/empty-component/EmptyComponent.js");
/* harmony import */ var _shared_searchFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/searchFilter */ "./resources/pos/src/shared/searchFilter.js");
/* harmony import */ var _shared_sortFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sortFilter */ "./resources/pos/src/shared/sortFilter.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/pos/src/shared/custom-hooks/index.js");
/* harmony import */ var _store_action_sortAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/action/sortAction */ "./resources/pos/src/store/action/sortAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_bookItemAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/bookItemAction */ "./resources/pos/src/admin/store/actions/bookItemAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var BookItems = function BookItems(props) {
  var bookLanguages = props.bookLanguages,
    publishers = props.publishers,
    bookItemList = props.bookItemList,
    bookItems = props.bookItems,
    sortAction = props.sortAction,
    sortObject = props.sortObject,
    toggleModal = props.toggleModal,
    setBookItems = props.setBookItems,
    bookId = props.bookId,
    isParentToggle = props.isParentToggle,
    setIsParentToggle = props.setIsParentToggle,
    currency = props.currency;
  var _openModal = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_9__.openModal)(),
    _openModal2 = _slicedToArray(_openModal, 5),
    isCreate = _openModal2[0],
    isEdit = _openModal2[1],
    isDelete = _openModal2[2],
    bookItem = _openModal2[3],
    onOpenModal = _openModal2[4];
  var cardModalProps = {
    bookItem: bookItem,
    bookLanguages: bookLanguages,
    publishers: publishers,
    isCreate: isCreate,
    isEdit: isEdit,
    isDelete: isDelete,
    toggleModal: toggleModal,
    bookItems: bookItems,
    bookId: bookId,
    currency: currency
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setBookItems(_toConsumableArray(bookItemList));
  }, []);
  var onClickModal = function onClickModal(isEdit) {
    var bookItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onOpenModal(isEdit, bookItem, isDelete);
    setIsParentToggle(false);
    toggleModal();
  };
  var cardBodyProps = {
    sortAction: sortAction,
    sortObject: sortObject,
    bookItems: bookItems,
    bookLanguages: bookLanguages,
    publishers: publishers,
    onClickModal: onClickModal,
    currency: currency
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [bookItems.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_BookItemTable__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, cardBodyProps)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_shared_empty_component_EmptyComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isShort: true,
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.items.empty-state.title')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: "pull-right mt-3 text-white",
      onClick: function onClick() {
        return onClickModal(false);
      },
      size: "md",
      color: "primary",
      children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('books.items.input.new-btn.label')
    }), !isParentToggle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_BookItemModal__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, cardModalProps)) : null]
  });
};
BookItems.propTypes = {
  bookItem: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  sortObject: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  bookItemList: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array),
  bookItems: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array),
  bookLanguages: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array),
  publishers: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array),
  bookId: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().number),
  searchText: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),
  isParentToggle: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),
  setBookItems: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  sortAction: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  setIsParentToggle: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func)
};
var mapStateToProps = function mapStateToProps(state) {
  var bookItems = state.bookItems,
    searchText = state.searchText,
    sortObject = state.sortObject,
    isLoading = state.isLoading,
    currency = state.currency;
  var bookItemsArray = Object.values(bookItems);
  if (searchText) {
    bookItemsArray = (0,_shared_searchFilter__WEBPACK_IMPORTED_MODULE_6__["default"])(bookItemsArray, searchText);
  }
  if (sortObject) {
    bookItemsArray = (0,_shared_sortFilter__WEBPACK_IMPORTED_MODULE_7__["default"])(bookItemsArray, sortObject);
  }
  return {
    bookItems: bookItemsArray,
    sortObject: sortObject,
    isLoading: isLoading,
    currency: currency
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  setBookItems: _store_actions_bookItemAction__WEBPACK_IMPORTED_MODULE_12__.setBookItems,
  sortAction: _store_action_sortAction__WEBPACK_IMPORTED_MODULE_10__.sortAction,
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_11__.toggleModal
})(BookItems));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/CreateBookItem.js":
/*!*************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/CreateBookItem.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookItemForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookItemForm */ "./resources/pos/src/admin/components/book-items/BookItemForm.js");
/* harmony import */ var _shared_prepareBookItemData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/prepareBookItemData */ "./resources/pos/src/admin/shared/prepareBookItemData.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookItemAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/bookItemAction */ "./resources/pos/src/admin/store/actions/bookItemAction.js");
/* harmony import */ var _store_actions_publisherAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/publisherAction */ "./resources/pos/src/admin/store/actions/publisherAction.js");
/* harmony import */ var _store_actions_bookLanguageAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/bookLanguageAction */ "./resources/pos/src/admin/store/actions/bookLanguageAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var CreateBookItem = function CreateBookItem(props) {
  var bookItems = props.bookItems,
    toggleModal = props.toggleModal,
    addBookItem = props.addBookItem,
    bookId = props.bookId,
    currency = props.currency;
  var onSaveBookItems = function onSaveBookItems(formValues) {
    addBookItem((0,_shared_prepareBookItemData__WEBPACK_IMPORTED_MODULE_4__["default"])(formValues), bookId);
  };
  var prepareFormOption = {
    onSaveBookItems: onSaveBookItems,
    onCancel: toggleModal,
    currency: currency
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_BookItemForm__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, prepareFormOption))
  }));
};
CreateBookItem.propTypes = {
  bookItems: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().array),
  bookId: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
  addBookItem: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  addBookItem: _store_actions_bookItemAction__WEBPACK_IMPORTED_MODULE_6__.addBookItem,
  fetchPublishers: _store_actions_publisherAction__WEBPACK_IMPORTED_MODULE_7__.fetchPublishers,
  fetchBookLanguages: _store_actions_bookLanguageAction__WEBPACK_IMPORTED_MODULE_8__.fetchBookLanguages
})(CreateBookItem));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/DeleteBookItem.js":
/*!*************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/DeleteBookItem.js ***!
  \*************************************************************************/
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
/* harmony import */ var _store_actions_bookItemAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/bookItemAction */ "./resources/pos/src/admin/store/actions/bookItemAction.js");
/* harmony import */ var _shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/DeleteAction */ "./resources/pos/src/shared/action-buttons/DeleteAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DeleteBookItem = function DeleteBookItem(props) {
  var bookItemId = props.bookItemId,
    deleteBookItem = props.deleteBookItem,
    toggleModal = props.toggleModal;
  var onDeleteBookItem = function onDeleteBookItem() {
    deleteBookItem(bookItemId);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onDelete: onDeleteBookItem,
      onCancel: toggleModal
    })
  }));
};
DeleteBookItem.propTypes = {
  bookItemId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  deleteBookItem: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  deleteBookItem: _store_actions_bookItemAction__WEBPACK_IMPORTED_MODULE_3__.deleteBookItem
})(DeleteBookItem));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/EditBookItem.js":
/*!***********************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/EditBookItem.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookItemForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookItemForm */ "./resources/pos/src/admin/components/book-items/BookItemForm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/pos/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_bookItemAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/bookItemAction */ "./resources/pos/src/admin/store/actions/bookItemAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_prepareBookItemData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/prepareBookItemData */ "./resources/pos/src/admin/shared/prepareBookItemData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var EditBookItem = function EditBookItem(props) {
  var bookLanguages = props.bookLanguages,
    publishers = props.publishers,
    bookItems = props.bookItems,
    bookItem = props.bookItem,
    currency = props.currency,
    toggleModal = props.toggleModal,
    addBookItem = props.addBookItem,
    bookId = props.bookId;
  var id = bookItem.id,
    book_code = bookItem.book_code,
    edition = bookItem.edition,
    format = bookItem.format,
    location = bookItem.location,
    price = bookItem.price,
    language = bookItem.language,
    publisher = bookItem.publisher,
    status = bookItem.status,
    e_book_url = bookItem.e_book_url;
  var bookItemsStatusOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_4__.bookItemStatusOptions);
  var booksFormatOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_4__.bookFormatOptions);
  var changeAbleFields = {
    book_code: book_code,
    edition: edition,
    location: location,
    price: price,
    language: {
      id: language.id,
      name: language.language_name
    },
    publisher: publisher,
    format: booksFormatOptions.find(function (bookFormat) {
      return bookFormat.id === format;
    }),
    status: bookItemsStatusOptions.find(function (bookItemStatus) {
      return bookItemStatus.id === +status;
    })
  };
  var onSaveBookItems = function onSaveBookItems(formValues) {
    formValues.id = id;
    addBookItem((0,_shared_prepareBookItemData__WEBPACK_IMPORTED_MODULE_8__["default"])(formValues), bookId, true);
  };
  var prepareFormOption = {
    onSaveBookItems: onSaveBookItems,
    currency: currency,
    onCancel: toggleModal,
    bookLanguages: bookLanguages,
    publishers: publishers,
    e_book_url: e_book_url,
    initialValues: changeAbleFields
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_BookItemForm__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, prepareFormOption))
  }));
};
EditBookItem.propTypes = {
  bookItem: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  bookItems: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().array),
  bookLanguages: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().array),
  publishers: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().array),
  bookId: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
  addBookItem: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  addBookItem: _store_actions_bookItemAction__WEBPACK_IMPORTED_MODULE_6__.addBookItem
})(EditBookItem));

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/bookItemValidate.js":
/*!***************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/bookItemValidate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  var bookCodeExpression = /^\d{8}$/;
  if (!formValues.book_code) {
    errors.book_code = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.input.book-code.required.validate.label');
  }
  if (formValues.book_code && !bookCodeExpression.test(formValues.book_code)) {
    errors.book_code = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.input.book-code.validate.label');
  }
  if (!formValues.edition) {
    errors.edition = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.input.edition.validate.label');
  }
  if (!formValues.format) {
    errors.format = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.select.format.validate.label');
  }
  if (formValues.format && formValues.format.name === 'E-Book' && !formValues.hasOwnProperty('file')) {
    errors.format = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.select.format-file.validate.label');
  }
  if (!formValues.language) {
    errors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.select.language.validate.label');
  }
  // if (!formValues.price) { Remove comment for make price required
  //     errors.price = getFormattedMessage('books.items.input.price.validate.label');
  // }
  return errors;
});

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/inputFile.js":
/*!********************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/inputFile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _BookItems_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookItems.scss */ "./resources/pos/src/admin/components/book-items/BookItems.scss");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var InputFile = function InputFile(props) {
  var type = props.type,
    input = props.input;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    file = _useState2[0],
    setFile = _useState2[1];
  var onInputChange = function onInputChange(e) {
    e.preventDefault();
    setFile(event.target.files[0]);
    input.onChange(e.target.files);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
      className: "input-file",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-primary",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books.items.choose-file-btn.label')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
        className: "input-file__input-type",
        type: type,
        onChange: onInputChange,
        accept: ".pdf"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "text-primary file-name",
      children: file ? file.name : (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books.items.no-file-chosen-text')
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputFile);

/***/ }),

/***/ "./resources/pos/src/admin/shared/bookValidate.js":
/*!********************************************************!*\
  !*** ./resources/pos/src/admin/shared/bookValidate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};
  if (!formValues.isbn) {
    errors.isbn = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.input.isbn.validate.label');
  }
  if (!formValues.authors || !formValues.authors.length) {
    errors.authors = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.input.authors.validate.label');
  }
  if (!formValues.name) {
    errors.name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.input.name.validate.label');
  }
  if (!formValues.genres || !formValues.genres.length) {
    errors.genres = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.input.genres.validate.label');
  }
  if (!formValues.items || !formValues.items.length) {
    errors.items = {
      _error: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('redux-form.field-array.no-item.message.validate')
    };
  }
  var booksArrayErrors = [];
  if (formValues.items && formValues.items.length) {
    formValues.items.forEach(function (item, index) {
      var bookErrors = {};
      if (!item || !item.edition) {
        bookErrors.edition = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.input.edition.validate.label');
        booksArrayErrors[index] = bookErrors;
      }
      if (!item || !item.format) {
        bookErrors.format = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.select.format.validate.label');
        booksArrayErrors[index] = bookErrors;
      }
      if (!item || !item.language) {
        bookErrors.language = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('books.items.select.language.validate.label');
        booksArrayErrors[index] = bookErrors;
      }
      // if (!item || !item.price) {
      //     bookErrors.price = getFormattedMessage('books.items.input.price.validate.label');
      //     booksArrayErrors[index] = bookErrors
      // }
    });

    if (booksArrayErrors.length) {
      errors.items = booksArrayErrors;
    }
  }
  return errors;
});

/***/ }),

/***/ "./resources/pos/src/admin/shared/bookValidateWarning.js":
/*!***************************************************************!*\
  !*** ./resources/pos/src/admin/shared/bookValidateWarning.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var warning = {};
  if (formValues.new_authors && formValues.new_authors.length > 0) {
    warning.authors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.authors.warning-start.label'), " \"", formValues.new_authors.map(function (_ref) {
        var value = _ref.value;
        return value;
      }).join(', '), "\"", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.authors.warning-end.label')]
    });
  }
  if (formValues.new_genres && formValues.new_genres.length > 0) {
    warning.genres = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.genres.warning-start.label'), " \"", formValues.new_genres.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      }).join(', '), "\"", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.authors.warning-end.label')]
    });
  }
  if (formValues.new_tags && formValues.new_tags.length > 0) {
    warning.tags = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.tags.warning-start.label'), " \"", formValues.new_tags.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      }).join(', '), "\"", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.authors.warning-end.label')]
    });
  }
  var booksArrayWarnings = [];
  if (formValues.items && formValues.items.length) {
    formValues.items.forEach(function (item, index) {
      var bookWarnings = {};
      if (item && item.new_language && item.new_language.length > 0) {
        bookWarnings.language = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.language.warning-start.label'), " \"", item.new_language[0].label, "\"", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.authors.warning-end.label')]
        });
        booksArrayWarnings[index] = bookWarnings;
      }
      if (item && item.new_publisher && item.new_publisher.length > 0) {
        bookWarnings.publisher = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.publisher.warning-start.label'), " \"", item.new_publisher[0].label, "\"", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('books.input.authors.warning-end.label')]
        });
        booksArrayWarnings[index] = bookWarnings;
      }
    });
    if (booksArrayWarnings.length) {
      warning.items = booksArrayWarnings;
    }
  }
  return warning;
});

/***/ }),

/***/ "./resources/pos/src/admin/shared/prepareArray.js":
/*!********************************************************!*\
  !*** ./resources/pos/src/admin/shared/prepareArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareBookLanguage": () => (/* binding */ prepareBookLanguage),
/* harmony export */   "prepareCreatableObject": () => (/* binding */ prepareCreatableObject),
/* harmony export */   "prepareImportedBookObject": () => (/* binding */ prepareImportedBookObject),
/* harmony export */   "preparePermissions": () => (/* binding */ preparePermissions),
/* harmony export */   "prepareRoles": () => (/* binding */ prepareRoles)
/* harmony export */ });
var prepareRoles = function prepareRoles(roles) {
  var rolesArray = [];
  roles.forEach(function (role) {
    return rolesArray.push({
      id: role.id,
      name: role.display_name
    });
  });
  return rolesArray;
};
var prepareBookLanguage = function prepareBookLanguage(bookLanguages) {
  var bookLanguageArray = [];
  bookLanguages.forEach(function (author) {
    return bookLanguageArray.push({
      id: author.id,
      name: author.language_name
    });
  });
  return bookLanguageArray;
};
var prepareCreatableObject = function prepareCreatableObject(objectArray) {
  var labelKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  var newObjectArray = [];
  objectArray.forEach(function (item) {
    return newObjectArray.push({
      value: item.id,
      label: item[labelKey]
    });
  });
  return newObjectArray;
};
var prepareImportedBookObject = function prepareImportedBookObject(objectArray) {
  var newObjectArray = [];
  objectArray.forEach(function (item) {
    return newObjectArray.push({
      value: item,
      label: item
    });
  });
  return newObjectArray;
};
var preparePermissions = function preparePermissions(permissions) {
  var permissionArray = [];
  permissions.forEach(function (permission) {
    permissionArray.push({
      id: permission.id,
      name: permission.display_name
    });
  });
  return permissionArray;
};

/***/ }),

/***/ "./resources/pos/src/admin/shared/prepareBookFormData.js":
/*!***************************************************************!*\
  !*** ./resources/pos/src/admin/shared/prepareBookFormData.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var is_featured = formValues.is_featured,
    isbn = formValues.isbn,
    genres = formValues.genres,
    authors = formValues.authors,
    name = formValues.name,
    tags = formValues.tags,
    url = formValues.url,
    image_url = formValues.image_url,
    description = formValues.description,
    file = formValues.file,
    items = formValues.items,
    file_name = formValues.file_name;
  var formData = new FormData();
  formData.append('is_featured', is_featured ? '1' : '0');
  formData.append('isbn', isbn);
  genres.forEach(function (genre) {
    return formData.append('genres[]', genre.value.toString());
  });
  authors.forEach(function (author) {
    return formData.append('authors[]', author.value.toString());
  });
  formData.append('name', name);
  if (tags) {
    tags.forEach(function (tag) {
      return formData.append('tags[]', tag.value.toString());
    });
  }
  formData.append('url', url ? url : '');
  if (image_url) {
    formData.append('image_url', image_url ? image_url : '');
  }
  formData.append('description', description ? description : '');
  if (file) {
    formData.append('photo', file, file.name);
  }
  if (!file_name && !file) {
    formData.append('remove_image', '1');
  }
  if (items && items.length > 0 && items) {
    items.forEach(function (item, index) {
      formData.append("items[".concat(index, "][edition]"), item.edition ? item.edition : '');
      formData.append("items[".concat(index, "][book_code]"), item.book_code ? item.book_code : '');
      formData.append("items[".concat(index, "][format]"), item.format ? item.format.id.toString() : '');
      formData.append("items[".concat(index, "][language_id]"), item.language ? item.language.id.toString() : '');
      formData.append("items[".concat(index, "][publisher_id]"), item.publisher ? item.publisher.id.toString() : '');
      formData.append("items[".concat(index, "][price]"), item.price ? item.price.toString() : '');
      formData.append("items[".concat(index, "][file]"), item.file ? item.file[0] : '');
    });
  }
  return formData;
});

/***/ }),

/***/ "./resources/pos/src/admin/shared/prepareBookItemData.js":
/*!***************************************************************!*\
  !*** ./resources/pos/src/admin/shared/prepareBookItemData.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var book_code = formValues.book_code,
    edition = formValues.edition,
    file = formValues.file,
    format = formValues.format,
    language_id = formValues.language_id,
    location = formValues.location,
    price = formValues.price,
    publisher_id = formValues.publisher_id,
    status = formValues.status,
    items = formValues.items,
    id = formValues.id;
  var formData = new FormData();
  formData.append('id', id ? id : '');
  formData.append('book_code', book_code);
  formData.append('edition', edition);
  formData.append('file', file ? file[0] : '');
  formData.append('format', format);
  formData.append('language_id', language_id);
  formData.append('location', location ? location : '');
  formData.append('price', price ? price : '');
  formData.append('status', status);
  formData.append('items', items ? items : '');
  formData.append('publisher_id', publisher_id);
  return formData;
});

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/authorAction.js":
/*!***************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/authorAction.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAuthor": () => (/* binding */ addAuthor),
/* harmony export */   "deleteAuthor": () => (/* binding */ deleteAuthor),
/* harmony export */   "editAuthor": () => (/* binding */ editAuthor),
/* harmony export */   "fetchAuthors": () => (/* binding */ fetchAuthors)
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










var fetchAuthors = function fetchAuthors() {
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
              url = _constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.AUTHOR;
              if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.authorActionType.FETCH_AUTHORS,
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
var addAuthor = function addAuthor(author) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.AUTHOR, author).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.authorActionType.ADD_AUTHOR,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('authors.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
                dispatch(fetchAuthors(filterObj));
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
var editAuthor = function editAuthor(authorId, author) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.AUTHOR + '/' + authorId, author).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.authorActionType.EDIT_AUTHOR,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('authors.success.edit.message')
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
var deleteAuthor = function deleteAuthor(authorId) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.AUTHOR + '/' + authorId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.authorActionType.DELETE_AUTHOR,
                  payload: authorId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('authors.success.delete.message')
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

/***/ "./resources/pos/src/admin/store/actions/bookItemAction.js":
/*!*****************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/bookItemAction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBookItem": () => (/* binding */ addBookItem),
/* harmony export */   "deleteBookItem": () => (/* binding */ deleteBookItem),
/* harmony export */   "setBookItems": () => (/* binding */ setBookItems)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/pos/src/store/action/modalAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./resources/pos/src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var setBookItems = function setBookItems(bookItems) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookItemActionType.SET_BOOKS_ITEMS,
                payload: bookItems
              });
            case 1:
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
var addBookItem = function addBookItem(items, bookId) {
  var isEdit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post("".concat(_constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.BOOK, "/").concat(+bookId, "/items"), items).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookItemActionType.ADD_BOOK_ITEM,
                  payload: response.data.data.items
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)(isEdit ? 'books.items.success.edit.message' : 'books.items.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_3__.toggleModal)());
              })["catch"](function (_ref3) {
                var response = _ref3.response;
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
      return _ref2.apply(this, arguments);
    };
  }();
};
var deleteBookItem = function deleteBookItem(bookItemId) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_5__.apiBaseURL.BOOK_ITEM + '/' + bookItemId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookItemActionType.DELETE_BOOK_ITEM,
                  payload: bookItemId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)('books.items.success.delete.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_3__.toggleModal)());
              })["catch"](function (_ref5) {
                var response = _ref5.response;
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
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/pos/src/admin/store/actions/bookLanguageAction.js":
/*!*********************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/bookLanguageAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBookLanguage": () => (/* binding */ addBookLanguage),
/* harmony export */   "deleteBookLanguage": () => (/* binding */ deleteBookLanguage),
/* harmony export */   "editBookLanguage": () => (/* binding */ editBookLanguage),
/* harmony export */   "fetchBookLanguages": () => (/* binding */ fetchBookLanguages)
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










var fetchBookLanguages = function fetchBookLanguages() {
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
              url = _constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.BOOK_LANGUAGE;
              if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookLanguageActionType.FETCH_BOOK_LANGUAGES,
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
var addBookLanguage = function addBookLanguage(language, filterObj) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.BOOK_LANGUAGE, language).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookLanguageActionType.ADD_BOOK_LANGUAGE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('book-languages.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
                dispatch(fetchBookLanguages(filterObj));
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
var editBookLanguage = function editBookLanguage(bookLanguageId, language) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.BOOK_LANGUAGE + '/' + bookLanguageId, language).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookLanguageActionType.EDIT_BOOK_LANGUAGE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('book-languages.success.edit.message')
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
var deleteBookLanguage = function deleteBookLanguage(bookLanguageId) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.BOOK_LANGUAGE + '/' + bookLanguageId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.bookLanguageActionType.DELETE_BOOK_LANGUAGE,
                  payload: bookLanguageId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('book-languages.success.delete.message')
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

/***/ "./resources/pos/src/admin/store/actions/genreAction.js":
/*!**************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/genreAction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGenre": () => (/* binding */ addGenre),
/* harmony export */   "deleteGenre": () => (/* binding */ deleteGenre),
/* harmony export */   "editGenre": () => (/* binding */ editGenre),
/* harmony export */   "fetchGenres": () => (/* binding */ fetchGenres)
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










var fetchGenres = function fetchGenres() {
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
              url = _constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.GENRE;
              if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.genreActionType.FETCH_GENRES,
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
var addGenre = function addGenre(genre, filterObj) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.GENRE, genre).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.genreActionType.ADD_GENRE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('genres.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
                dispatch(fetchGenres(filterObj));
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
var editGenre = function editGenre(genreId, genre) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.GENRE + '/' + genreId, genre).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.genreActionType.EDIT_GENRE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('genres.success.edit.message')
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
var deleteGenre = function deleteGenre(genreId) {
  var filterObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var totalRecord = arguments.length > 2 ? arguments[2] : undefined;
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.GENRE + '/' + genreId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.genreActionType.DELETE_GENRE,
                  payload: genreId
                });
                dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_6__.setTotalRecord)(totalRecord - 1));
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('genres.success.delete.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
                // dispatch(fetchGenres(filterObj));
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

/***/ "./resources/pos/src/admin/store/actions/publisherAction.js":
/*!******************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/publisherAction.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPublisher": () => (/* binding */ addPublisher),
/* harmony export */   "deletePublisher": () => (/* binding */ deletePublisher),
/* harmony export */   "editPublisher": () => (/* binding */ editPublisher),
/* harmony export */   "fetchPublishers": () => (/* binding */ fetchPublishers)
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










var fetchPublishers = function fetchPublishers() {
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
              url = _constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.PUBLISHER;
              if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEmpty(filter) && filter.limit || filter.order_By || filter.search) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.publisherActionType.FETCH_PUBLISHERS,
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
var addPublisher = function addPublisher(Publisher, filterObj) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.PUBLISHER, Publisher).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.publisherActionType.ADD_PUBLISHER,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('publishers.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
                dispatch(fetchPublishers(filterObj));
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
var editPublisher = function editPublisher(publisherId, publisher) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.PUBLISHER + '/' + publisherId, publisher).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.publisherActionType.EDIT_PUBLISHER,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('publishers.success.edit.message')
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
var deletePublisher = function deletePublisher(publisherId) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.PUBLISHER + '/' + publisherId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.publisherActionType.DELETE_PUBLISHER,
                  payload: publisherId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('publishers.success.delete.message')
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

/***/ "./resources/pos/src/admin/store/actions/tagAction.js":
/*!************************************************************!*\
  !*** ./resources/pos/src/admin/store/actions/tagAction.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTag": () => (/* binding */ addTag),
/* harmony export */   "deleteTag": () => (/* binding */ deleteTag),
/* harmony export */   "editTag": () => (/* binding */ editTag),
/* harmony export */   "fetchTags": () => (/* binding */ fetchTags)
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










var fetchTags = function fetchTags() {
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
              url = _constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.TAG;
              if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEmpty(filter) && (filter.limit || filter.order_By || filter.search)) {
                url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter);
              }
              _context.next = 5;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.tagActionType.FETCH_TAGS,
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
var addTag = function addTag(tag, filterObj) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.TAG, tag).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.tagActionType.ADD_TAG,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('tags.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_4__.toggleModal)());
                dispatch(fetchTags(filterObj));
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
var editTag = function editTag(tagId, tag) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.TAG + '/' + tagId, tag).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.tagActionType.EDIT_TAG,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('tags.success.edit.message')
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
var deleteTag = function deleteTag(tagId) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_9__.apiBaseURL.TAG + '/' + tagId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_0__.tagActionType.DELETE_TAG,
                  payload: tagId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('tags.success.delete.message')
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

/***/ "./resources/pos/src/shared/book-item-status/BookItemStatus.js":
/*!*********************************************************************!*\
  !*** ./resources/pos/src/shared/book-item-status/BookItemStatus.js ***!
  \*********************************************************************/
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





var BookItemStatus = function BookItemStatus(props) {
  var status = props.status,
    item = props.item;
  switch (status) {
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookItemStatusConstants.AVAILABLE:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-items.filter.available.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-success",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-items.filter.available.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookItemStatusConstants.UNAVAILABLE:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-items.filter.unavailable.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-items.filter.unavailable.label')
        })
      });
    case _admin_constants__WEBPACK_IMPORTED_MODULE_1__.bookItemStatusConstants.LOST:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-items.filter.lost.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-danger",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-items.filter.lost.label')
        })
      });
    default:
      item.status_name = (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-items.filter.damaged.label');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "text-warning",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('books-items.filter.damaged.label')
        })
      });
  }
};
BookItemStatus.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  status: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookItemStatus);

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

/***/ "./resources/pos/src/shared/components/SelectCreatable.js":
/*!****************************************************************!*\
  !*** ./resources/pos/src/shared/components/SelectCreatable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_Creatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/Creatable */ "./node_modules/react-select/Creatable/dist/react-select.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupAddon.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/InputGroupText.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormFeedback.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/useIntl.js");
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component.scss */ "./resources/pos/src/shared/components/Component.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SelectCreatable = function SelectCreatable(props) {
  var input = props.input,
    placeholder = props.placeholder,
    required = props.required,
    label = props.label,
    groupText = props.groupText,
    _props$isSearchable = props.isSearchable,
    isSearchable = _props$isSearchable === void 0 ? true : _props$isSearchable,
    innerRef = props.innerRef,
    disabled = props.disabled,
    _props$menuPlacement = props.menuPlacement,
    menuPlacement = _props$menuPlacement === void 0 ? "auto" : _props$menuPlacement,
    isCustom = props.isCustom,
    _props$meta = props.meta,
    touched = _props$meta.touched,
    error = _props$meta.error,
    warning = _props$meta.warning,
    options = props.options,
    _props$isMulti = props.isMulti,
    isMulti = _props$isMulti === void 0 ? false : _props$isMulti,
    _props$isVisibleWarni = props.isVisibleWarning,
    isVisibleWarning = _props$isVisibleWarni === void 0 ? true : _props$isVisibleWarni;
  var intl = new react_intl__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var labelText = label ? intl.formatMessage({
    id: label
  }) : null;
  var placeholderText = placeholder ? intl.formatMessage({
    id: placeholder
  }) : null;
  var formGroupClass = isCustom ? 'react-select mb-0 mt-1' : 'react-select';
  var labelClass = required ? 'control-label' : '';
  var inputClass = isCustom ? 'react-select__input react-select__input--secondary' : 'react-select__input react-select__input--primary';
  var addNewButton = intl.formatMessage({
    id: 'global.select.add-new-btn.label'
  });
  var addNewOption = intl.formatMessage({
    id: 'global.select.option.label'
  });
  var formatCreate = function formatCreate(inputValue) {
    return " ".concat(addNewButton, " ").concat(label ? label : addNewOption, ": ").concat(inputValue);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: formGroupClass,
    children: [label ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: labelClass,
      children: labelText
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        addonType: "prepend",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
            className: "fa fa-".concat(groupText)
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_select_Creatable__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, input), {}, {
        className: inputClass,
        placeholder: placeholderText,
        options: options,
        value: input.value,
        isDisabled: disabled,
        isClearable: true,
        isSearchable: isSearchable,
        menuPlacement: menuPlacement,
        ref: innerRef,
        isMulti: isMulti,
        formatCreateLabel: function formatCreateLabel(inputValue) {
          return formatCreate(inputValue);
        },
        onChange: function onChange(value) {
          return input.onChange(value);
        },
        onBlur: function onBlur(value) {
          return input.onBlur();
        }
      }))]
    }), touched && error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "d-block",
      children: error
    }), !error && isVisibleWarning && warning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "d-block text-success",
      children: warning
    })]
  });
};
SelectCreatable.propTypes = {
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
  isCustom: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  isVisibleWarning: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectCreatable);

/***/ }),

/***/ "./resources/pos/src/shared/empty-component/EmptyComponent.js":
/*!********************************************************************!*\
  !*** ./resources/pos/src/shared/empty-component/EmptyComponent.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EmptyComponent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyComponent.scss */ "./resources/pos/src/shared/empty-component/EmptyComponent.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var EmptyComponent = function EmptyComponent(props) {
  var title = props.title,
    isShort = props.isShort,
    isMediumEmptyState = props.isMediumEmptyState,
    isLoading = props.isLoading,
    isShortEmptyState = props.isShortEmptyState,
    icon = props.icon;
  var prepareClassName = function prepareClassName() {
    if (isMediumEmptyState) {
      return 'empty-component empty-component--mid';
    }
    if (isShortEmptyState) {
      return 'empty-component empty-component--too-short';
    }
    if (isShort) {
      return 'empty-component empty-component--mini';
    }
    return 'empty-component empty-component--maxi';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: prepareClassName(),
    children: [!isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: icon === undefined ? "fa fa-2x fa-ban" : icon
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: "fa fa-2x fa-spinner"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
      className: "empty-component__title",
      children: title
    })]
  });
};
EmptyComponent.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  isShort: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  isMediumEmptyState: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  isShortEmptyState: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyComponent);

/***/ }),

/***/ "./resources/pos/src/shared/searchFilter.js":
/*!**************************************************!*\
  !*** ./resources/pos/src/shared/searchFilter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var searchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var filterKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (searchText && filterKeys.length > 0) {
    var resultArray = [];
    items.forEach(function (obj) {
      filterKeys.some(function (property) {
        if (obj[property] && obj[property].toString().toLowerCase().includes(searchText.toLowerCase())) {
          resultArray.push(obj);
          return true;
        }
      });
    });
    return resultArray;
  } else if (searchText) {
    return items.filter(function (item) {
      return JSON.stringify(item).toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
    });
  } else {
    return items;
  }
});

/***/ }),

/***/ "./resources/pos/src/shared/sortFilter.js":
/*!************************************************!*\
  !*** ./resources/pos/src/shared/sortFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var sortObject = arguments.length > 1 ? arguments[1] : undefined;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().orderBy(data, function (item) {
    return item[sortObject.orderBy];
  }, sortObject.order);
});

/***/ }),

/***/ "./resources/pos/src/shared/table-header/Tableheader.js":
/*!**************************************************************!*\
  !*** ./resources/pos/src/shared/table-header/Tableheader.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Tableheader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tableheader.scss */ "./resources/pos/src/shared/table-header/Tableheader.scss");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TableHeader = function TableHeader(props) {
  var headers = props.headers,
    sortObject = props.sortObject,
    staticField = props.staticField,
    sortConfig = props.sortConfig,
    sortAction = props.sortAction,
    _props$isAction = props.isAction,
    isAction = _props$isAction === void 0 ? true : _props$isAction,
    isStatusField = props.isStatusField;
  var sort = function sort(header) {
    sortAction({
      orderBy: header,
      order: sortObject.order === 'asc' ? 'desc' : 'asc'
    });
  };
  var sortIcon = function sortIcon(header) {
    return sortConfig(header, sortObject);
  };
  var renderActionColumn = function renderActionColumn() {
    if (isAction) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
        className: "table-header__action table-header__responsive",
        children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('react-data-table.action.column')
      });
    }
  };
  var renderStaticColumn = function renderStaticColumn() {
    if (staticField) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
        className: "table-header__responsive",
        children: staticField
      });
    }
  };
  var renderStatusColumn = function renderStatusColumn() {
    if (isStatusField) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
        className: "table-header__status table-header__responsive",
        children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('react-data-table.status.column')
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
    className: "table-header",
    children: [renderStaticColumn(), headers.map(function (header) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
        onClick: function onClick() {
          return sort(header.id);
        },
        className: "table-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            children: header.name
          }), " ", sortIcon(header.id)]
        })
      }, header.id);
    }), renderStatusColumn(), renderActionColumn()]
  });
};
TableHeader.propTypes = {
  sortObject: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  headers: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  staticField: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  isAction: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  isStatusField: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  sortConfig: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  sortAction: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHeader);

/***/ }),

/***/ "./resources/pos/src/store/action/sortAction.js":
/*!******************************************************!*\
  !*** ./resources/pos/src/store/action/sortAction.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortAction": () => (/* binding */ sortAction)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sortAction = function sortAction(sortObject) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.SORT_ACTION,
                payload: sortObject
              });
            case 1:
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/book-details/BookDetails.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/book-details/BookDetails.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 1140px) {\n  html[dir=rtl] .book-detail__item {\n    margin: auto 52px 25px auto;\n  }\n}\n\n.book-image-container {\n  height: 250px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  overflow: hidden;\n  width: 175px;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 1139px) {\n  .book-image-container {\n    margin: auto;\n  }\n}\n\n.book-img {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow: hidden;\n}\n\n.book-image-holder {\n  position: relative;\n  border-radius: 10px;\n  background: gray;\n  -o-object-fit: cover;\n  object-fit: fill;\n  max-width: 100%;\n  vertical-align: middle;\n}\n\n@media (max-width: 1139px) {\n  .book-detail-row {\n    flex-flow: column;\n  }\n}\n\n.book-detail__item-desc-heading, .book-detail__item-url-heading, .book-detail__item-tags-heading, .book-detail__item-authors-heading, .book-detail__item-genre-heading, .book-detail__item-isbn-heading, .book-detail__item-title-heading {\n  min-width: 110px;\n  font-weight: 700;\n}\n\n.book-detail {\n  width: calc(100% - 175px);\n}\n.book-detail__modal {\n  max-width: 1000px;\n}\n.book-detail__item-container {\n  margin-left: 50px;\n}\n@media (max-width: 1139px) {\n  .book-detail__item-container {\n    margin-top: 25px;\n    margin-left: 20px;\n  }\n}\n.book-detail__item {\n  display: flex;\n  margin-bottom: 25px;\n}\n@media (max-width: 1139px) {\n  .book-detail__item {\n    width: 100%;\n  }\n}\n@media (min-width: 1140px) {\n  .book-detail__item {\n    margin: auto auto 25px auto;\n  }\n}\n.book-detail__item-desc-text {\n  width: 1250px;\n}\n.book-detail-form-card {\n  display: flex;\n}\n.book-detail-form-card__hr {\n  margin-top: 0;\n}\n.book-detail-form-card .image__preview {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media only screen and (max-width: 800px) {\n  .book-detail-form-card {\n    flex-direction: column;\n  }\n  .book-detail-form-card__primary-details {\n    margin-top: 30px;\n    flex: 100%;\n    max-width: 100%;\n    width: 100%;\n  }\n  .book-detail-form-card__book-cover {\n    flex: 100%;\n    max-width: 100%;\n    width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/book-items/BookItems.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/book-items/BookItems.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".book-item__table-book-code {\n  width: 135px;\n}\n.book-item__table-book-link-code {\n  width: 135px;\n  color: #00C6FF;\n}\n.book-item__table-book-link-code:hover {\n  cursor: pointer;\n}\n.book-item__table-status, .book-item__table-action {\n  width: 100px;\n  text-align: center;\n}\n.book-item__table-price {\n  width: 150px;\n  text-align: right;\n}\n\n.input-file {\n  width: 105px;\n  border: solid 2px #00C6FF;\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  text-align: center;\n  margin: 0;\n}\n.input-file__input-type {\n  display: none;\n}\n\n.file-name {\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.table-responsive {\n  overflow: hidden !important;\n}\n@media (max-width: 1660px) {\n  .table-responsive {\n    overflow: inherit !important;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/shared/empty-component/EmptyComponent.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/shared/empty-component/EmptyComponent.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container-border, .empty-component--maxi, .empty-component--mini {\n  border: 1px solid #c8ced3;\n  border-radius: 0.25rem;\n}\n\n.empty-component {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n}\n.empty-component--mini {\n  height: 30vh;\n}\n.empty-component--mid {\n  height: 67vh;\n}\n.empty-component--maxi {\n  height: 70vh;\n}\n.empty-component--too-short {\n  height: 36vh;\n}\n.empty-component__title {\n  margin: 7px 10px 10px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/shared/table-header/Tableheader.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/shared/table-header/Tableheader.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-header th {\n  cursor: pointer;\n  min-width: 200px;\n}\n.table-header__status, .table-header__action {\n  cursor: default !important;\n  width: 110px;\n  text-align: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/pos/src/admin/components/book-details/BookDetails.scss":
/*!**************************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-details/BookDetails.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookDetails_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./BookDetails.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/book-details/BookDetails.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookDetails_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookDetails_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/pos/src/admin/components/book-items/BookItems.scss":
/*!**********************************************************************!*\
  !*** ./resources/pos/src/admin/components/book-items/BookItems.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookItems_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./BookItems.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/admin/components/book-items/BookItems.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookItems_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_BookItems_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/pos/src/shared/empty-component/EmptyComponent.scss":
/*!**********************************************************************!*\
  !*** ./resources/pos/src/shared/empty-component/EmptyComponent.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_EmptyComponent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./EmptyComponent.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/shared/empty-component/EmptyComponent.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_EmptyComponent_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_EmptyComponent_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/pos/src/shared/table-header/Tableheader.scss":
/*!****************************************************************!*\
  !*** ./resources/pos/src/shared/table-header/Tableheader.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Tableheader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./Tableheader.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/shared/table-header/Tableheader.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Tableheader_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Tableheader_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/react-select/Creatable/dist/react-select.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-select/Creatable/dist/react-select.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultProps": () => (/* binding */ defaultProps),
/* harmony export */   "makeCreatableSelect": () => (/* binding */ makeCreatableSelect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dist/index-75b02bac.browser.esm.js */ "./node_modules/react-select/dist/index-75b02bac.browser.esm.js");
/* harmony import */ var _dist_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../dist/Select-e1cf49ae.browser.esm.js */ "./node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var _dist_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../dist/stateManager-2f2b6f5b.browser.esm.js */ "./node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js");























function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"".concat(inputValue, "\"");
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var defaultProps = _objectSpread({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Creatable, _Component);

    var _super = _createSuper(Creatable);

    function Creatable(props) {
      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Creatable);

      _this = _super.call(this, props);
      _this.select = void 0;

      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value,
            name = _this$props.name;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option',
              name: name
            };

            if (isMulti) {
              onChange([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__.C)(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      };

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Creatable, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;
        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, (0,_dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__.C)(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }

        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(options)) : [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(options), [newOption]) : options
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var options = this.state.options;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(SelectComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(react__WEBPACK_IMPORTED_MODULE_11__.Component), _class.defaultProps = defaultProps, _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(_dist_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__.S);
var Creatable = (0,_dist_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_20__.m)(SelectCreatable);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creatable);



/***/ })

}]);