import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProgressBar from "../../shared/progress-bar/ProgressBar";
import Header from "./Header";
import Footer from "./Footer";
import { connect, useDispatch } from "react-redux";
import { fetchBooksHistory } from "../../member/store/actions/bookHistoryAction";
import { fetchEbookSubscription } from "../../member/store/actions/ebookSubscriptionAction";
import { reserveBook } from "../../member/store/actions/bookSearchAction";
import { bookItemStatusConstants } from "../../constants";
import { findBooksWithout } from "../../member/store/actions/bookSearchAction";
import { fetchBooksAll } from "../../member/store/actions/bookAction";
import { getCurrentMember } from "../../admin/shared/sharedMethod";
import PDFviewerModal from "../book-details/PDFviewerModal";
import moment from "moment";
import _ from "lodash";
import { fetchSubscriptionLimit } from "../../member/store/actions/subscriptionLimitAction";
import { addToast } from "../../store/action/toastAction";
import { toastType } from "../../member/constants";
import Modal from "../../shared/components/Modal";
import ConfirmAction from "../../shared/action-buttons/ConfirmAction";
import { toggleModal } from "../../store/action/modalAction";
import libraryStatus from "./libraryStatus.json";
import {
    fetchMemberStatus,
    registerMemberToLibrary,
} from "../../member/store/actions/isMemberRegisteredAction";
const Staff = (props) => {
    const { books, goTo, findBooksWithout } = props;

    const handleDetails = (id) => {
        findBooksWithout("id=" + id + "&search_by_book=" + true);
        goTo("/search/staff/" + id);
        window.scroll({ top: 0, behavior: "smooth" });
    };

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
                    {books &&
                        books.map((book, i) => {
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
                                                    handleDetails(book.id)
                                                }
                                            >
                                                <div className="card-image">
                                                    <img
                                                        // src="images/Group95.svg"
                                                        src={
                                                            book.image_path
                                                                ? book.image_path
                                                                : "https://cdn-icons-png.flaticon.com/512/3845/3845824.png"
                                                        }
                                                        className="case-studies-card-img"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="card-details text-center pt-4">
                                                    <h6 className="m-0 pb-1">
                                                        {book.name
                                                            ? book.name
                                                            : "NA"}
                                                    </h6>
                                                    {/* <h5 className="text-success">
                                                    ₹{" "}
                                                    {book.items
                                                        ? book.items[0].price
                                                        : "NA"}
                                                </h5> */}
                                                </div>
                                                <div className="card-desc-box d-flex align-items-center justify-content-around">
                                                    {/* <h6 className="text-white pb-2 px-3">
                                                            Know more about the Book
                                                        </h6> */}
                                                    <div
                                                        className="badge badge-info"
                                                        style={{
                                                            width: "fit-content",
                                                            padding: "auto 5px",
                                                        }}
                                                    >
                                                        <span>
                                                            {book?.items[0]
                                                                ?.format === 3
                                                                ? "E-Book"
                                                                : "Book"}
                                                        </span>
                                                    </div>
                                                    <button
                                                        className="btn btn-white frontend-btn"
                                                        onClick={() =>
                                                            handleDetails(
                                                                book.id
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
                        })}
                </div>
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
        handleSubscribe,
        subscriptionLimit,
        isAvailable,
        setIsAvailable,
        toggleModal,
    } = props;
    const [isReserved, setReserved] = useState(false);
    const [modal, setModal] = useState(false);
    const [isExpired, setExpired] = useState(false);
    const [isSpinner, setIsSpinner] = useState(true);

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

    console.log({
        ebookSubscription,
        ebookSub,
        searchBooks,
        subscriptionLimit,
        isAvailable,
    });

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
        setTimeout(() => setIsSpinner(false), 1500);
    }, []);

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

    return (
        <div className="book-wrapper">
            <section className="book-details modal-content shadow-none">
                {!isSpinner ? (
                    searchBooks.map((book, index) => {
                        return book.format === 3 ? (
                            <div key={index + 34} className="container">
                                {/* <button
                                    className="btn back_btn btn-white frontend-btn"
                                    onClick={() => {
                                        setIsSpinner(true);
                                        goTo(-1);
                                    }}
                                >
                                    <span>Back</span>
                                </button> */}

                                <div className="row">
                                    <div className="col-md-6 product_img">
                                        <img
                                            src={
                                                book && book.book.image_path
                                                    ? book.book.image_path
                                                    : "https://cdn-icons-png.flaticon.com/512/3845/3845824.png"
                                            }
                                            className="img-responsive"
                                            width={400}
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
                                                : ""}
                                        </p>

                                        <p className="author_name specifications">
                                            <span>Author: </span>{" "}
                                            {book &&
                                            book.book.authors[0].first_name &&
                                            book.book.authors[0].last_name
                                                ? book.book.authors[0]
                                                      .first_name +
                                                  " " +
                                                  book.book.authors[0].last_name
                                                : ""}
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
                                                ? book.book.genres[0].name
                                                : ""}
                                        </p>
                                        <p className="author_name specifications">
                                            <span>Belongs To: </span>
                                            {book?.book?.library_id === 111 ? (
                                                <span className="badge badge-danger">
                                                    Dindayal Upadhyay Digital
                                                    Library
                                                </span>
                                            ) : book?.book?.library_id ===
                                              222 ? (
                                                <span className="badge badge-danger">
                                                    Kundanlal Gupta Digital
                                                    Library
                                                </span>
                                            ) : (
                                                <span className="badge badge-danger">
                                                    Rashtramata Kasturba Digital
                                                    Library
                                                </span>
                                            )}
                                        </p>
                                        <p className="description">
                                            {book && book.book.description
                                                ? book.book.description
                                                : ""}
                                        </p>

                                        {/* <button
                                            type="button"
                                            className={`frontend-btn ${
                                                ebookSub &&
                                                moment(
                                                    ebookSub.returned_on
                                                ).format("YYYY-MM-DD") <
                                                    moment().format(
                                                        "YYYY-MM-DD"
                                                    )
                                                    ? "btn-danger"
                                                    : "btn-warning"
                                            }`}
                                            disabled={
                                                !isAvailable ||
                                                (ebookSub &&
                                                    moment(
                                                        ebookSub.returned_on
                                                    ).format("YYYY-MM-DD") >
                                                        moment().format(
                                                            "YYYY-MM-DD"
                                                        ))
                                                    ? true
                                                    : false
                                            }
                                            onClick={() =>
                                                handleSubscribe(book.id)
                                            }
                                        >
                                            <span>
                                                {" "}
                                                {ebookSubscription.length > 0 &&
                                                ebookSub &&
                                                !(
                                                    moment(
                                                        ebookSub.returned_on
                                                    ).format("YYYY-MM-DD") <
                                                    moment().format(
                                                        "YYYY-MM-DD"
                                                    )
                                                )
                                                    ? "Ebook is Subscribed"
                                                    : ebookSub &&
                                                      moment(
                                                          ebookSub.returned_on
                                                      ).format("YYYY-MM-DD") <
                                                          moment().format(
                                                              "YYYY-MM-DD"
                                                          )
                                                    ? "Book is Expired want to Renew"
                                                    : isAvailable
                                                    ? "Subscribe"
                                                    : "Unavailable"}
                                            </span>
                                        </button> */}
                                        <a
                                            target="_blank"
                                            href={
                                                book?.book?.library_id === 111
                                                    ? "https://dindayalupadhyay.smartcitylibrary.com/" +
                                                      location.href.slice(
                                                          location.href.lastIndexOf(
                                                              "#"
                                                          )
                                                      )
                                                    : book?.book?.library_id ===
                                                      222
                                                    ? "https://kundanlalgupta.smartcitylibrary.com/" +
                                                      location.href.slice(
                                                          location.href.lastIndexOf(
                                                              "#"
                                                          )
                                                      )
                                                    : "https://rashtramatakasturba.smartcitylibrary.com/" +
                                                      location.href.slice(
                                                          location.href.lastIndexOf(
                                                              "#"
                                                          )
                                                      )
                                            }
                                            className="frontend-btn"
                                        >
                                            {book.format == 3
                                                ? "Subscribe"
                                                : "Reserve"}
                                        </a>
                                        {(ebookSub || ebookSub?.length > 0) &&
                                        moment(ebookSub.returned_on).format(
                                            "YYYY-MM-DD"
                                        ) > moment().format("YYYY-MM-DD") &&
                                        book.pdf_preview_file ? (
                                            <button
                                                type="button"
                                                className="frontend-btn ml-3 btn btn-info"
                                                // onClick={() =>
                                                //     !book.format === 3
                                                //         ? toggle()
                                                //         : (location.hash =
                                                //               "/view-book/" +
                                                //               book.id)
                                                // }
                                                onClick={() => {
                                                    book.format === 3
                                                        ? (location.hash =
                                                              "/view-book/" +
                                                              book.file_name)
                                                        : toggle();
                                                }}
                                            >
                                                <span> Read</span>
                                            </button>
                                        ) : null}
                                        {/* {book.pdf_preview_file && (
                                            <button
                                                type="button"
                                                className="ml-3 frontend-btn btn btn-info"
                                                onClick={() => toggle()}
                                            >
                                                <span>PDF Preview</span>
                                            </button>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        ) : null;
                    })
                ) : (
                    <div className="spinner">
                        <img src="/public/images/301.gif" />
                    </div>
                )}

                <PDFviewerModal {...pdfModalOptions} />
            </section>
        </div>
    );
};

function EbookDetails(props) {
    const {
        fetchBooksAll,
        fetchSubscriptionLimit,
        books,
        reserveBook,
        findBooksWithout,
        searchBooks,
        fetchBooksHistory,
        bookHistory,
        fetchEbookSubscription,
        ebookSubscription,
        subscriptionLimit,
        toggleModal,
        isMemberRegistered,
        fetchMemberStatus,
        registerMemberToLibrary,
    } = props;
    const params = useParams();
    const { id, library_id } = params;
    const navigate = useNavigate();
    const member = getCurrentMember();
    const [isAvailable, setIsAvailable] = useState(true);
    const goTo = (url) => {
        navigate(url);
    };

    const dispatch = useDispatch();

    const handleSubscribe = (id) => {
        // if (member) {
        //     if (member.subscription) {
        //         const isRegistered = isMemberRegistered.length
        //             ? isMemberRegistered.some(
        //                   (item) => item.user_library_id == library_id
        //               )
        //             : false;
        //         console.log({ isRegistered });
        //         if (member.user_library_id != library_id && !isRegistered) {
        //             toggleModal();
        //         } else {
        //             navigate("/lms/ebook-subscription/" + id);
        //         }
        //     }
        // } else if (!isAvailable) {
        //     dispatch(
        //         addToast({
        //             text: "Ebook is Unavailable.",
        //             type: toastType.ERROR,
        //         })
        //     );
        // } else {
        //     navigate("/lms/login");
        //     dispatch(
        //         addToast({
        //             text: "UnAuthenticated",
        //             type: toastType.ERROR,
        //         })
        //     );
        // }
        location.href =
            "https://elibrary.veerit.com/" +
            location.href.slice(location.href.lastIndexOf("#"));
    };

    useEffect(() => {
        fetchEbookSubscription();
        fetchBooksAll();
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
        // if (books) {
        //     let newBooks = books.filter((book) =>
        //         search.split("&")[0] !== "book"
        //             ? book.authors[0].first_name
        //                   .replaceAll(" ", "")
        //                   .match(search.split("&")[1])
        //             : book.name
        //                   .replaceAll(" ", "")
        //                   .includes(search.split("&")[1])
        //     );
        //     setFilteredBook(newBooks);
        // }

        window.scroll({ top: 0, behavior: "smooth" });
    }, [reserveBook]);

    useEffect(() => {
        fetchSubscriptionLimit();
        if (member) fetchMemberStatus(member.id);
    }, []);

    const handleFurtherReservation = () => {
        registerMemberToLibrary(member, library_id);
        toggleModal();
    };

    const staffOptions = {
        goTo,
        findBooksWithout,
        books: books.slice(6, 10),
    };

    const bookDetails = {
        member,
        bookHistory,
        searchBooks,
        reserveBook,
        dispatch,
        member,
        goTo,
        ebookSubscription,
        handleSubscribe,
        subscriptionLimit,
        isAvailable,
        setIsAvailable,
        toggleModal,
    };

    // console.log({ searchBooks });
    const content = `These book belongs to ${
        library_id
            ? libraryStatus.find((status) => status.id == library_id).name
            : "N/A"
    } Library. And Your are not the Member either. Do you want to Register for ${
        library_id
            ? libraryStatus.find((status) => status.id == library_id).name
            : "N/A"
    } and Continue ?`;
    return (
        <div>
            {" "}
            <ProgressBar />
            <Header goTo={goTo} />
            <BookDetails {...bookDetails} />
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
        isRegistered,
    } = state;
    return {
        books,
        searchBooks,
        bookHistory,
        ebookSubscription,
        subscriptionLimit,
        isRegistered,
    };
};

export default connect(mapStateToProps, {
    fetchBooksAll,
    findBooksWithout,
    reserveBook,
    fetchBooksHistory,
    fetchEbookSubscription,
    fetchSubscriptionLimit,
    toggleModal,
    fetchMemberStatus,
    registerMemberToLibrary,
})(EbookDetails);
