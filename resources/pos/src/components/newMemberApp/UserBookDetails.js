import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
/* import { fetchBooksAll } from "../../member/store/actions/bookAction"; */
import defaultBook from "../../../src/assets/images/defaultBook.png";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import {
    getCurrentMember,
    getFormattedMessage,
} from "../../shared/sharedMethod";
import ProgressBar from "../../shared/progress-bar/ProgressBar";
import { reserveBook } from "../../member/store/actions/bookSearchAction";
import { bookItemStatusConstants } from "../../constants";
import { findBooksWithout } from "../../member/store/actions/bookSearchAction";
import { addToast } from "../../store/action/toastAction";
import { toastType } from "../../constants";

import { fetchBooksHistory } from "../../member/store/actions/bookHistoryAction";
import { fetchEbookSubscription } from "../../member/store/actions/ebookSubscriptionAction";
import moment from "moment";

import PDFviewerModal from "../book-details/PDFviewerModal";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Header from "./Header";
import Footer from "./Footer";
import PDFReader from "./PdfReader/PDFReader";
import { Routes } from "../../member/constants";
import _ from "lodash";
import { fetchSubscriptionLimit } from "../../member/store/actions/subscriptionLimitAction";
import Modal from "../../shared/components/Modal";
import ConfirmAction from "../../shared/action-buttons/ConfirmAction";
import { toggleModal } from "../../store/action/modalAction";
import libraryStatus from "./libraryStatus.json";
import {
    fetchMemberStatus,
    registerMemberToLibrary,
} from "../../member/store/actions/isMemberRegisteredAction";

const Staff = (props) => {
    const { goTo, findBooksWithout, isSpinner, setIsSpinner, library_id } =
        props;

    const [details, setDetails] = useState([]);
    const [formgenre, setformGenre] = useState("");
    const [formauthors, setformauthors] = useState("");
    const [formpublishers, setformpublishers] = useState("");
    const [formlanguages, setformlanguages] = useState(0);
    const [formformats, setformformats] = useState(0);
    const [formlibrary_id, setLibraryId] = useState(0);
    const [term, setTerm] = useState("");
    const navigate = useNavigate();
    const handleDetails = (previewLink) => {
        navigate("/search/book&" + previewLink);
    };

    useEffect(() => {
        const fetchDetails = async () => {
            /* setIsLoading(true); */
            /* setPrevLimit(10);
            setPrevSkip(0); */

            const resources = await axios.get(
                `${window.location.origin.toString()}/api/v1/books?order_by=created_at&limit=4&library_id=${library_id}`
            );

            setDetails(resources.data.data);
            /* setIsLoading(false); */
        };
        fetchDetails();
    }, []);

    /* useEffect(() => {
        setTimeout(() => setIsSpinner(false), 1500);
    }, [isSpinner]); */

    return (
        <section className="case-studies detailTrending">
            <div className="container">
                <div className="row grid-margin">
                    <div className="col-12 text-center common-heading pb-5">
                        <h2
                            style={{
                                fontSize: "3rem",
                                fontFamily: "Philosopher",
                            }}
                        >
                            Trendings Books
                        </h2>
                    </div>
                    {details.length !== 0 ? (
                        details.slice(0, 4).map((book, i) => {
                            if (book.library_id == "111") {
                                var site_name_image_path = `https://dindayalupadhyay.smartcitylibrary.com/uploads/books/thumbnail/${book.image}`;
                            } else if (book.library_id == "222") {
                                var site_name_image_path = `https://kundanlalgupta.smartcitylibrary.com/uploads/books/thumbnail/${book.image}`;
                            } else {
                                var site_name_image_path = `https://rashtramatakasturba.smartcitylibrary.com/uploads/books/thumbnail/${book.image}`;
                            }
                            return (
                                <div
                                    key={i}
                                    className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0"
                                    data-aos="zoom-in"
                                >
                                    <div className="card color-cards">
                                        <div className="card-body p-0">
                                            <div
                                                className="text-center card-contents"
                                                style={{
                                                    backgroundColor: "#f2f2f2",
                                                }}
                                                onClick={() =>
                                                    handleDetails(
                                                        `${book.name}/${book.id}/${book.library_id}`
                                                    )
                                                }
                                            >
                                                <div className="card-image">
                                                    <img
                                                        src={
                                                            book.image
                                                                ? site_name_image_path
                                                                : defaultBook
                                                        }
                                                        className="case-studies-card-img"
                                                        alt=""
                                                        onError={({
                                                            currentTarget,
                                                        }) => {
                                                            currentTarget.onerror =
                                                                null; // prevents looping
                                                            currentTarget.src =
                                                                defaultBook;
                                                        }}
                                                    />
                                                </div>
                                                <div className="card-details text-center pt-4">
                                                    <h6 className="m-0 pb-1">
                                                        {book.name
                                                            ? book.name
                                                            : "NA"}
                                                    </h6>
                                                </div>
                                                <div className="card-desc-box d-flex align-items-center justify-content-around">
                                                    <div
                                                        style={{
                                                            width: "fit-content",
                                                            padding: "auto 5px",
                                                        }}
                                                    >
                                                        <div className="d-flex flex-column align-items-center library_badge">
                                                            <span className="badge badge-info">
                                                                {book.items
                                                                    .length &&
                                                                book.items[0]
                                                                    .format ===
                                                                    3
                                                                    ? "E-Book"
                                                                    : "Book"}
                                                            </span>

                                                            {book.library_id ===
                                                            111 ? (
                                                                <span className="badge badge-danger">
                                                                    Dindayal
                                                                    Upadhyay
                                                                    Library
                                                                </span>
                                                            ) : book.library_id ===
                                                              222 ? (
                                                                <span className="badge badge-danger">
                                                                    Kundanlal
                                                                    Gupta
                                                                    Library
                                                                </span>
                                                            ) : (
                                                                <span className="badge badge-danger">
                                                                    Rashtramata
                                                                    Kasturba
                                                                    Library
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="btn btn-white frontend-btn"
                                                        onClick={() =>
                                                            handleDetails(
                                                                `${book.name}/${book.id}/${book.library_id}`
                                                            )
                                                        }
                                                    >
                                                        <span>Read More</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="spinner">
                            <img src="/public/images/301.gif" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const SearchedBooks = (props) => {
    const {
        filteredBook,
        setFilteredBook,
        goTo,
        search,
        findBooksWithout,
        isSpinner,
        setIsSpinner,
        setIsDisabled,
    } = props;

    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        setIsSpinner(true);
        setTimeout(() => setIsSpinner(false), 1500);
    }, []);

    const bookValues = filteredBook.length
        ? filteredBook.map((book) => {
              return {
                  id: book.id,
                  title: book?.name,
                  image: book?.image_path,
                  description: String(book.description).slice(0, 100) + "...",
                  authors_name: book?.authors_name,
                  first_name: book.authors[0]?.first_name,
                  last_name: book.authors[0]?.last_name,
                  price: book.items[0]?.price,
                  format: book.items[0]?.format,
                  items: book.items,
                  library_id: book?.library_id,
              };
          })
        : [];
    const handleDetails = (id, format, library_id) => {
        findBooksWithout(
            "id=" + id + "&search_by_book=" + true + "&library_id=" + library_id
        );
        if (format === 3) {
            goTo("/ebook-details/" + id + "/" + library_id);
        } else {
            goTo("/search/" + search + "/" + id + "/" + library_id);
        }
    };

    return (
        <section className="case-studies" id="searchbooks">
            <div className="row grid-margin">
                <div className="col-12 text-center">
                    <h2>Searched Results</h2>
                    <div className="section-divider divider-traingle"></div>
                </div>
                {bookValues.length ? (
                    bookValues.map((book, index) => {
                        const modifiedUrl = book.image_path
                            ? book.image_path.replace(
                                  /\/(books)(\/|$)/,
                                  "/$1/thumbnail$2"
                              )
                            : null;
                        return (
                            <div
                                key={index}
                                className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0 mx-auto"
                                data-aos="zoom-in"
                            >
                                <div className="card color-cards">
                                    <div className="card-body p-0">
                                        <div
                                            className="text-center card-contents"
                                            style={{
                                                backgroundColor: "#f2f2f2",
                                            }}
                                            onClick={() =>
                                                handleDetails(
                                                    book.id,
                                                    book.format,
                                                    book.library_id
                                                )
                                            }
                                        >
                                            <div className="card-image">
                                                <img
                                                    src={
                                                        modifiedUrl
                                                            ? modifiedUrl
                                                            : defaultBook
                                                    }
                                                    className="case-studies-card-img"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="card-details text-center pt-4">
                                                <h6 className="m-0 pb-1">
                                                    {book.title}
                                                </h6>
                                            </div>
                                            <div className="card-desc-box d-flex flex-column align-items-center justify-content-around">
                                                <div
                                                    style={{
                                                        width: "fit-content",
                                                        padding: "auto 5px",
                                                    }}
                                                >
                                                    <div className="d-flex flex-column align-items-center library_badge">
                                                        <span className="badge badge-info">
                                                            {book.format === 3
                                                                ? "E-Book"
                                                                : "Book"}
                                                        </span>

                                                        {book.library_id ===
                                                        111 ? (
                                                            <span className="badge badge-danger">
                                                                Dindayal
                                                                Upadhyay Digital
                                                                Library
                                                            </span>
                                                        ) : book.library_id ===
                                                          222 ? (
                                                            <span className="badge badge-danger">
                                                                Kundanlal Gupta
                                                                Digital Library
                                                            </span>
                                                        ) : (
                                                            <span className="badge badge-danger">
                                                                Rashtramata
                                                                Kasturba Digital
                                                                Library
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div>
                                                        {book.items.find(
                                                            (item) =>
                                                                item.status ===
                                                                1
                                                        ) ? (
                                                            <span className="badge badge-success">
                                                                Available
                                                            </span>
                                                        ) : (
                                                            <span className="badge badge-danger">
                                                                Unavailable
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-white frontend-btn"
                                                    onClick={() =>
                                                        handleDetails(
                                                            book.id,
                                                            book.library_id,
                                                            book.format
                                                        )
                                                    }
                                                >
                                                    <span>Read More</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="row grid-margin">
                        <div className="col-12 text-center pb-5 mx-auto">
                            <img
                                src="images/bookLoading.gif"
                                alt="book-loading"
                                className="mx-auto"
                                width={100}
                            />

                            <h1>No books Found</h1>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

const BookDetails = (props) => {
    const {
        searchBooks,
        reserveBook,
        member,
        dispatch,
        bookHistory,
        goTo,
        ebookSubscription,
        isSpinner,
        setIsSpinner,
        isAvailable,
        setIsAvailable,
        subscriptionLimit,
        toggleModal,
        isMemberRegistered,
        isDisabled,
        setIsDisabled,
        setLibraryId,
        libraryId,
    } = props;

    const [isReserved, setReserved] = useState(false);
    const [modal, setModal] = useState(false);
    const [isExpired, setExpired] = useState(false);
    const navigate = useNavigate();

    const toggle = () => setModal(!modal);
    var history = [];
    var ebookSub = null;
    const status = bookHistory.filter((book) => book.status === 1);

    if (ebookSubscription.length > 0 && member) {
        ebookSub = ebookSubscription.find(
            (ebook) =>
                ebook.member_id === member.id &&
                searchBooks[0]?.id === ebook.ebook_id
        );
    }

    if (searchBooks.length > 0 && bookHistory.length > 0) {
        history = bookHistory.filter(
            (book) => searchBooks[0].id == book.book_item_id
        );
    }

    const handleReserve = (id, index, library_id) => {
        if (!_.isEmpty(member)) {
            if (member.subscription) {
                const isRegistered = isMemberRegistered.length
                    ? isMemberRegistered.some(
                          (item) => item.user_library_id == library_id
                      )
                    : false;
                if (member.user_library_id != library_id && !isRegistered) {
                    toggleModal();
                } else {
                    if (status && status.length - 1 !== 4) {
                        setReserved(true);
                    }
                    reserveBook(id ? id : null, index, library_id);
                    goTo("/lms/book-history");
                }
            } else {
                goTo(Routes.MEMBER_PLAN);
            }
        } else {
            location.hash = "/lms/login";
            dispatch(
                addToast({
                    text: "Please Login",
                    type: toastType.ERROR,
                })
            );
        }
    };

    useEffect(() => {
        if (searchBooks.length && subscriptionLimit.length) {
            const esub = subscriptionLimit.find(
                (sub) => sub.ebook_id == searchBooks[0]?.id
            );
            if (esub && esub.count === 20) {
                setIsAvailable(false);
            }
        }
    }, [searchBooks.length, subscriptionLimit.length]);

    const handleSubscribe = (id, library_id) => {
        if (member) {
            if (member.subscription) {
                const isRegistered = isMemberRegistered.length
                    ? isMemberRegistered.some(
                          (item) => item.user_library_id == library_id
                      )
                    : false;
                if (member.user_library_id != library_id && !isRegistered) {
                    toggleModal();
                } else {
                    navigate(
                        "/lms/ebook-subscription/" + id + "/" + library_id
                    );
                }
            }
        } else if (!isAvailable) {
            dispatch(
                addToast({
                    text: "Ebook is Unavailable.",
                    type: toastType.ERROR,
                })
            );
        } else {
            navigate("/lms/login");
            dispatch(
                addToast({
                    text: "Please Login",
                    type: toastType.ERROR,
                })
            );
        }
    };

    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });

        if (!member) {
            history = [];
            ebookSub = null;
        }
    }, []);

    const pdfModalOptions = {
        modal,
        toggle,
        filePath:
            searchBooks.length > 0 ? searchBooks[0].pdf_preview_file : null,
    };

    useEffect(() => {
        /* setTimeout(() => setIsSpinner(false), 1500); */
    }, []);

    const libraryOnChange = (e) => {
        setLibraryId(e.target.value);
    };

    return (
        <div className="book-wrapper">
            {searchBooks.length ? (
                <section className="book-details modal-content shadow-none">
                    {searchBooks.filter(
                        (book) =>
                            book.format !== 3 &&
                            book.status === bookItemStatusConstants.AVAILABLE
                    ).length
                        ? searchBooks
                              .filter(
                                  (book) =>
                                      book.format !== 3 &&
                                      book.status ===
                                          bookItemStatusConstants.AVAILABLE
                              )
                              .slice(-1)
                              .map((book, index) => {
                                  const authorsName = book
                                      ? book.book.authors.map((author) => {
                                            const firstName = author.first_name
                                                ? author.first_name
                                                : "";
                                            const lastName = author.last_name
                                                ? author.last_name
                                                : "";
                                            return (
                                                firstName +
                                                " " +
                                                lastName +
                                                ", "
                                            );
                                        })
                                      : null;
                                  return book ? (
                                      <div
                                          key={index + 111}
                                          className="container"
                                      >
                                          <div className="row">
                                              <div className="col-md-6 product_img">
                                                  <img
                                                      src={book.book.image_path}
                                                      className="img-responsive"
                                                      width={400}
                                                      onError={({
                                                          currentTarget,
                                                      }) => {
                                                          currentTarget.onerror =
                                                              null;
                                                          currentTarget.src =
                                                              defaultBook;
                                                      }}
                                                  />
                                              </div>
                                              <div className="col-md-6 product_content px-4 py-3 rounded-lg">
                                                  <h1 className="h1">
                                                      {book && book.book.name
                                                          ? book.book.name
                                                          : ""}
                                                  </h1>
                                                  <p className="isbn_no specifications">
                                                      <span>ISBN No: </span>{" "}
                                                      {book && book.book.isbn
                                                          ? book.book.isbn
                                                          : "N/A"}
                                                  </p>

                                                  <p className="author_name specifications">
                                                      <span>Author: </span>{" "}
                                                      {/* <a
                                                          href={`books/author/${authorsName}`}
                                                      >
                                                          {authorsName}
                                                      </a> */}
                                                      {authorsName}
                                                  </p>
                                                  <p className="author_name specifications">
                                                      <span>Format: </span>{" "}
                                                      {book.format === 1
                                                          ? "Hardcover"
                                                          : book.format === 2
                                                          ? "Paperback"
                                                          : "E-Book"}
                                                  </p>
                                                  <p className="author_name specifications">
                                                      <span>Edition: </span>{" "}
                                                      {book.edition}
                                                  </p>
                                                  <p className="author_name specifications">
                                                      <span>Genre: </span>
                                                      {book.book?.genres?.length
                                                          ? book.book.genres[0]
                                                                .name
                                                          : "N/A"}
                                                  </p>
                                                  <p className="author_name specifications">
                                                      <span>Publisher: </span>
                                                      {book.publisher.name
                                                          ? book.publisher.name
                                                          : "N/A"}
                                                  </p>
                                                  <p className="author_name specifications">
                                                      <span>Belongs To: </span>
                                                      <div className="publisher">
                                                          <select
                                                              defaultValue={
                                                                  book?.book
                                                                      ?.library_id
                                                              }
                                                              className="form-select"
                                                              aria-label="Select Library."
                                                              onChange={
                                                                  libraryOnChange
                                                              }
                                                          >
                                                              {libraryStatus.length ? (
                                                                  libraryStatus.map(
                                                                      (
                                                                          library,
                                                                          i
                                                                      ) => {
                                                                          return (
                                                                              <option
                                                                                  key={
                                                                                      i
                                                                                  }
                                                                                  value={
                                                                                      library.value
                                                                                  }
                                                                                  disabled={
                                                                                      !isDisabled[
                                                                                          i
                                                                                      ]
                                                                                  }
                                                                              >
                                                                                  {
                                                                                      library.label
                                                                                  }
                                                                              </option>
                                                                          );
                                                                      }
                                                                  )
                                                              ) : (
                                                                  <option value="">
                                                                      No records
                                                                      found.
                                                                  </option>
                                                              )}
                                                          </select>
                                                      </div>
                                                  </p>

                                                  <p className="description">
                                                      {book &&
                                                      book.book.description
                                                          ? book.book
                                                                .description
                                                          : ""}
                                                  </p>
                                                  <button
                                                      type="button"
                                                      className={`frontend-btn ${
                                                          (status.length - 1 <=
                                                              4 &&
                                                              isReserved) ||
                                                          (status.length - 1 <=
                                                              4 &&
                                                              history.length >
                                                                  0 &&
                                                              history[0]
                                                                  .status !== 5)
                                                              ? "btn-success"
                                                              : "btn-warning"
                                                      }`}
                                                      disabled={
                                                          (status.length - 1 <=
                                                              4 &&
                                                              isReserved) ||
                                                          (status.length - 1 <=
                                                              4 &&
                                                              history.length >
                                                                  0 &&
                                                              history[0]
                                                                  .status !==
                                                                  5 &&
                                                              history[0]
                                                                  .book_item
                                                                  ?.book
                                                                  .library_id ==
                                                                  book.book
                                                                      .library_id)
                                                              ? true
                                                              : false
                                                      }
                                                      onClick={() =>
                                                          handleReserve(
                                                              book.id,
                                                              index,
                                                              book.book
                                                                  .library_id
                                                          )
                                                      }
                                                  >
                                                      <span>
                                                          {" "}
                                                          {history.length &&
                                                          history[0].status ===
                                                              2
                                                              ? "Issued"
                                                              : (history.length &&
                                                                    history[0]
                                                                        .status ===
                                                                        1 &&
                                                                    history[0]
                                                                        .book_item
                                                                        ?.book
                                                                        .library_id ==
                                                                        book
                                                                            .book
                                                                            .library_id &&
                                                                    status.length -
                                                                        1 <=
                                                                        4) ||
                                                                isReserved
                                                              ? "Reserved"
                                                              : "Reserve"}
                                                      </span>
                                                  </button>

                                                  {book.pdf_preview_file && (
                                                      <button
                                                          type="button"
                                                          className="ml-3 frontend-btn btn btn-info"
                                                          onClick={() =>
                                                              toggle()
                                                          }
                                                      >
                                                          <span>Preview</span>
                                                      </button>
                                                  )}
                                              </div>
                                          </div>
                                      </div>
                                  ) : null;
                              })
                        : null}
                    {searchBooks.filter(
                        (book) =>
                            book.format !== 3 &&
                            book.status === bookItemStatusConstants.AVAILABLE
                    ).length === 0
                        ? searchBooks.slice(-1).map((book, i) => {
                              return (
                                  <div key={i + 3} className="container">
                                      <div className="row">
                                          <div className="col-md-6 product_img">
                                              <img
                                                  src={book.book.image_path}
                                                  className="img-responsive"
                                                  width={400}
                                                  onError={({
                                                      currentTarget,
                                                  }) => {
                                                      currentTarget.onerror =
                                                          null;
                                                      currentTarget.src =
                                                          defaultBook;
                                                  }}
                                              />
                                          </div>
                                          <div className="col-md-6 product_content px-4 py-3 rounded-lg">
                                              <h1 className="h1">
                                                  {book && book.book.name
                                                      ? book.book.name
                                                      : ""}
                                              </h1>
                                              <p className="isbn_no specifications">
                                                  <span>ISBN No: </span>{" "}
                                                  {book && book.book.isbn
                                                      ? book.book.isbn
                                                      : "N/A"}
                                              </p>
                                              <p className="author_name specifications">
                                                  <span>Author: </span>{" "}
                                                  {book
                                                      ? book.book.authors.map(
                                                            (author) => {
                                                                const firstName =
                                                                    author.first_name
                                                                        ? author.first_name
                                                                        : "";
                                                                const lastName =
                                                                    author.last_name
                                                                        ? author.last_name
                                                                        : "";
                                                                return (
                                                                    firstName +
                                                                    " " +
                                                                    lastName +
                                                                    ", "
                                                                );
                                                            }
                                                        )
                                                      : null}
                                              </p>
                                              <p className="author_name specifications">
                                                  <span>Format: </span>{" "}
                                                  {book.format === 1
                                                      ? "Hardcover"
                                                      : book.format === 2
                                                      ? "Paperback"
                                                      : "E-Book"}
                                              </p>

                                              <p className="author_name specifications">
                                                  <span>Genre: </span>
                                                  {book.book?.genres?.length
                                                      ? book.book.genres[0].name
                                                      : "N/A"}
                                              </p>
                                              <p className="author_name specifications">
                                                  <span>Publisher: </span>
                                                  {book.publisher.name
                                                      ? book.publisher.name
                                                      : "N/A"}
                                              </p>
                                              <p className="author_name specifications">
                                                  <span>Belongs To: </span>
                                                  <div className="publisher">
                                                      <select
                                                          defaultValue={
                                                              book?.book
                                                                  ?.library_id
                                                          }
                                                          className="form-select"
                                                          aria-label="Select Library."
                                                          onChange={
                                                              libraryOnChange
                                                          }
                                                      >
                                                          {libraryStatus.length ? (
                                                              libraryStatus.map(
                                                                  (
                                                                      library,
                                                                      i
                                                                  ) => {
                                                                      return (
                                                                          <option
                                                                              key={
                                                                                  i
                                                                              }
                                                                              value={
                                                                                  library.value
                                                                              }
                                                                              disabled={
                                                                                  !isDisabled[
                                                                                      i
                                                                                  ]
                                                                              }
                                                                          >
                                                                              {
                                                                                  library.label
                                                                              }
                                                                          </option>
                                                                      );
                                                                  }
                                                              )
                                                          ) : (
                                                              <option value="">
                                                                  No records
                                                                  found.
                                                              </option>
                                                          )}
                                                      </select>
                                                  </div>
                                              </p>
                                              <p className="description">
                                                  {book && book.book.description
                                                      ? book.book.description
                                                      : ""}
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : null}
                    <div className="e-book-avilable ebook-subscribed">
                        <div className="container">
                            <div className="ebook-inner-container">
                                <p className="cost">
                                    {searchBooks &&
                                        (searchBooks.filter(
                                            (book) =>
                                                book.format !== 3 &&
                                                book.status ===
                                                    bookItemStatusConstants.AVAILABLE
                                        ).length > 0 ? (
                                            <p className="specifications">
                                                <span>
                                                    {getFormattedMessage(
                                                        "books.table.book-available.column"
                                                    )}
                                                </span>
                                                <span className="quantity">
                                                    {
                                                        searchBooks.filter(
                                                            (book) =>
                                                                book.format !==
                                                                    3 &&
                                                                book.status ===
                                                                    bookItemStatusConstants.AVAILABLE
                                                        ).length
                                                    }
                                                </span>
                                            </p>
                                        ) : (
                                            <p className="specifications">
                                                <span>
                                                    {getFormattedMessage(
                                                        "books.table.book-un-available.column"
                                                    )}
                                                </span>
                                            </p>
                                        ))}
                                </p>
                            </div>
                        </div>
                    </div>
                    {searchBooks
                        .filter((book) => book.format === 3)
                        .map((book, index) => {
                            return (
                                <div
                                    key={index + 4}
                                    className="e-book-avilable ebook-subscribed"
                                >
                                    <div className="container">
                                        <div className="ebook-inner-container">
                                            {!ebookSub && isAvailable ? (
                                                <p>
                                                    Ebook version of this book
                                                    is available in{" "}
                                                    {book.book.library_id ===
                                                    111 ? (
                                                        <span className="badge badge-info">
                                                            Dindayal Upadhyay
                                                            Digital Library
                                                        </span>
                                                    ) : book.book.library_id ===
                                                      222 ? (
                                                        <span className="badge badge-info">
                                                            Kundanlal Gupta
                                                            Digital Library
                                                        </span>
                                                    ) : (
                                                        <span className="badge badge-info">
                                                            Rashtramata Kasturba
                                                            Digital Library
                                                        </span>
                                                    )}
                                                    . <br></br>
                                                    Please click on the below
                                                    button to subscribe.
                                                </p>
                                            ) : (
                                                <p>
                                                    Ebook version of this book
                                                    is Not available.
                                                </p>
                                            )}
                                            <div className="product_content rounded-lg">
                                                {book.format !== 3 ? (
                                                    book.status !== 2 && (
                                                        <button
                                                            type="button"
                                                            className={`frontend-btn ${
                                                                (status.length -
                                                                    1 <=
                                                                    4 &&
                                                                    isReserved) ||
                                                                (status.length -
                                                                    1 <=
                                                                    4 &&
                                                                    history.length >
                                                                        0 &&
                                                                    history[0]
                                                                        .status !==
                                                                        5)
                                                                    ? "btn-success"
                                                                    : "btn-warning"
                                                            }`}
                                                            disabled={
                                                                (status.length -
                                                                    1 <=
                                                                    4 &&
                                                                    isReserved) ||
                                                                (status.length -
                                                                    1 <=
                                                                    4 &&
                                                                    history.length >
                                                                        0 &&
                                                                    history[0]
                                                                        .status !==
                                                                        5)
                                                                    ? true
                                                                    : false
                                                            }
                                                            onClick={() =>
                                                                handleReserve(
                                                                    book.id,
                                                                    index,
                                                                    book.library_id
                                                                )
                                                            }
                                                        >
                                                            <span>
                                                                {" "}
                                                                {history.length &&
                                                                history[0]
                                                                    .status ===
                                                                    2
                                                                    ? "Issued"
                                                                    : (history.length &&
                                                                          history[0]
                                                                              .status ===
                                                                              1 &&
                                                                          history[0]
                                                                              .book_item
                                                                              ?.book
                                                                              .library_id ==
                                                                              book
                                                                                  .book
                                                                                  .book
                                                                                  .library_id &&
                                                                          status.length -
                                                                              1 <=
                                                                              4) ||
                                                                      isReserved
                                                                    ? "Reserved"
                                                                    : "Reserve"}
                                                            </span>
                                                        </button>
                                                    )
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className={`frontend-btn ${
                                                            ebookSub &&
                                                            moment(
                                                                ebookSub.returned_on
                                                            ).format(
                                                                "YYYY-MM-DD"
                                                            ) <
                                                                moment().format(
                                                                    "YYYY-MM-DD"
                                                                )
                                                                ? "btn-danger"
                                                                : "btn-warning"
                                                        }`}
                                                        disabled={
                                                            !isAvailable &&
                                                            ebookSub &&
                                                            moment(
                                                                ebookSub.returned_on
                                                            ).format(
                                                                "YYYY-MM-DD"
                                                            ) >
                                                                moment().format(
                                                                    "YYYY-MM-DD"
                                                                )
                                                                ? true
                                                                : false
                                                        }
                                                        onClick={() =>
                                                            handleSubscribe(
                                                                book.id,
                                                                book.book
                                                                    .library_id
                                                            )
                                                        }
                                                    >
                                                        <span>
                                                            {" "}
                                                            {ebookSubscription.length >
                                                                0 &&
                                                            ebookSub?.library_id &&
                                                            !(
                                                                moment(
                                                                    ebookSub.returned_on
                                                                ).format(
                                                                    "YYYY-MM-DD"
                                                                ) <
                                                                moment().format(
                                                                    "YYYY-MM-DD"
                                                                )
                                                            )
                                                                ? "Ebook is Subscribed"
                                                                : ebookSub &&
                                                                  moment(
                                                                      ebookSub.returned_on
                                                                  ).format(
                                                                      "YYYY-MM-DD"
                                                                  ) <
                                                                      moment().format(
                                                                          "YYYY-MM-DD"
                                                                      )
                                                                ? "Book is Expired want to Renew"
                                                                : isAvailable
                                                                ? "Subscribe"
                                                                : "Unavailable"}
                                                        </span>
                                                    </button>
                                                )}
                                                {(ebookSub ||
                                                    ebookSub?.length > 0) &&
                                                moment(
                                                    ebookSub.returned_on
                                                ).format("YYYY-MM-DD") >
                                                    moment().format(
                                                        "YYYY-MM-DD"
                                                    ) &&
                                                book.pdf_preview_file ? (
                                                    <button
                                                        type="button"
                                                        className="frontend-btn ml-3 btn btn-info"
                                                        onClick={() => {
                                                            book.format === 3
                                                                ? (location.hash =
                                                                      "/view-book/" +
                                                                      book.file_name)
                                                                : toggle();
                                                        }}
                                                    >
                                                        <span> Preview</span>
                                                    </button>
                                                ) : null}
                                                {book.pdf_preview_file && (
                                                    <button
                                                        type="button"
                                                        className="ml-3 frontend-btn btn btn-info"
                                                        onClick={() => toggle()}
                                                    >
                                                        <span>Preview</span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    <PDFviewerModal {...pdfModalOptions} />
                </section>
            ) : (
                <div className="spinner">
                    <img src="/public/images/301.gif" />
                </div>
            )}
        </div>
    );
};

function UserBookDetails(props) {
    const {
        books,
        reserveBook,
        findBooksWithout,
        searchBooks,
        fetchBooksHistory,
        bookHistory,
        fetchEbookSubscription,
        ebookSubscription,
        fetchSubscriptionLimit,
        subscriptionLimit,
        toggleModal,
        fetchMemberStatus,
        isMemberRegistered,
        registerMemberToLibrary,
    } = props;
    const { search, id, library_id } = useParams();
    const dispatch = useDispatch();
    const member = getCurrentMember();
    const [filteredBook, setFilteredBook] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [value, setValue] = useState("");
    const [filter, setFilter] = useState("book");
    const [isSpinner, setIsSpinner] = useState(true);
    const [isAvailable, setIsAvailable] = useState(true);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isDisabled, setIsDisabled] = useState([]);
    const [libraryId, setLibraryId] = useState(library_id);

    const navigate = useNavigate();
    useEffect(() => {
        fetchEbookSubscription();
        /* fetchBooksAll(); */
        if (!_.isEmpty(member)) {
            if (member.subscription) {
                fetchBooksHistory({
                    order_By: "",
                    limit: 10,
                    skip: 0,
                    direction: "asc",
                    sort: "asc",
                    search: "",
                });
            }
        }
        if (id) {
            findBooksWithout(
                "id=" +
                    id +
                    "&search_by_book=" +
                    true +
                    "&library_id=" +
                    library_id
            );
        }
        if (searchBooks) {
            // let newBooks = searchBooks.filter((book) =>
            //     search.split("&")[0] !== "book"
            //         ? book.authors[0].first_name
            //               .replaceAll(" ", "")
            //               .match(search.split("&")[1])
            //         : book.name
            //               .replaceAll(" ", "")
            //               .includes(search.split("&")[1])
            // );
            setFilteredBook(searchBooks);
        }

        window.scroll({ top: 0, behavior: "smooth" });
    }, [reserveBook, search, id, library_id, location.hash]);

    useEffect(() => {
        fetchSubscriptionLimit();
        if (member) fetchMemberStatus(member.id);
    }, []);

    const goTo = (url) => {
        navigate(url);
    };

    const handleFurtherReservation = () => {
        registerMemberToLibrary(member, library_id);
        toggleModal();
    };

    const searchBookOptions = {
        filteredBook,
        findBooksWithout,
        search,
        goTo,
        isSpinner,
        setIsSpinner,
        setIsDisabled,
    };

    const bookDetails = {
        member,
        bookHistory,
        searchBooks: filteredBooks,
        reserveBook,
        dispatch,
        member,
        goTo,
        ebookSubscription,
        isSpinner,
        setIsSpinner,
        isAvailable,
        setIsAvailable,
        subscriptionLimit,
        toggleModal,
        fetchMemberStatus,
        isMemberRegistered,
        isDisabled,
        setIsDisabled,
        setLibraryId,
        libraryId,
    };

    const handleOnSearch = (string, results) => {
        setValue(string);
    };

    const handleOnSelect = (item) => {
        const value =
            filter === "book"
                ? item.name.replaceAll(" ", "")
                : item.authors_name.replaceAll(" ", "");
        location.hash = "/search/" + filter + "&" + value;
    };

    const handleFilter = (e) => {
        setFilter((prev) => (prev = e.target.id));
    };

    const formatResult = (item) => {
        return (
            <>
                {filter === "book" ? (
                    <span style={{ display: "block", textAlign: "left" }}>
                        <i className="fa fa-book nav-icons pr-2"></i>{" "}
                        {item.name}
                    </span>
                ) : (
                    <span style={{ display: "block", textAlign: "left" }}>
                        <i className="fa fa-book nav-icons pr-2"></i>{" "}
                        {item.authors_name}
                    </span>
                )}
            </>
        );
    };
    const staffOptions = {
        goTo,
        findBooksWithout,
        books: books.slice(6, 10),
        isSpinner,
        setIsSpinner,
        library_id,
    };

    const content = `These book belongs to ${
        library_id
            ? libraryStatus.find((status) => status.id == library_id)?.name
            : "N/A"
    } Library. And Your are not the Member either. Do you want to Register for ${
        library_id
            ? libraryStatus.find((status) => status.id == library_id)?.name
            : "N/A"
    } and Continue ?`;

    useEffect(() => {
        if (searchBooks.length) {
            const tempBooks = searchBooks.filter(
                (book) => book?.book?.library_id == libraryId
            );
            setFilteredBooks(tempBooks);

            const tempIsDisabled = libraryStatus.map((status, i) =>
                searchBooks.find(
                    (book, i) => book?.book?.library_id == status.value
                )
                    ? true
                    : false
            );

            setIsDisabled(tempIsDisabled);
        }
    }, [libraryId, searchBooks]);

    return (
        <div>
            <ProgressBar />
            <Header goTo={goTo} />
            {!id ? (
                <SearchedBooks {...searchBookOptions} />
            ) : (
                <BookDetails {...bookDetails} />
            )}

            <Staff {...staffOptions} />
            <Footer />
            <Modal
                {...props}
                actions={
                    <ConfirmAction
                        onConfirm={handleFurtherReservation}
                        onCancel={toggleModal}
                    />
                }
                content={content}
                title={"Book Reservation/Subscription."}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    const {
        books,
        searchBooks,
        bookHistory,
        ebookSubscription,
        subscriptionLimit,
        isMemberRegistered,
    } = state;

    return {
        books,
        searchBooks,
        bookHistory,
        ebookSubscription,
        subscriptionLimit,
        isMemberRegistered,
    };
};

export default connect(mapStateToProps, {
    fetchSubscriptionLimit,

    findBooksWithout,
    reserveBook,
    fetchBooksHistory,
    fetchEbookSubscription,
    toggleModal,
    fetchMemberStatus,
    registerMemberToLibrary,
})(UserBookDetails);
