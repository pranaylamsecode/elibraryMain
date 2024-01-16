import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import ProgressBar from "../../shared/progress-bar/ProgressBar";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import defaultBook from "../../../src/assets/images/defaultBook.png";
import { connect, useDispatch } from "react-redux";
import { fetchBooksHistory } from "../../member/store/actions/bookHistoryAction";
import { fetchEbookSubscription } from "../../member/store/actions/ebookSubscriptionAction";
import { reserveBook } from "../../member/store/actions/bookSearchAction";
import { bookItemStatusConstants } from "../../constants";
import { findBooksWithout } from "../../member/store/actions/bookSearchAction";
/* import { fetchBooksAll, fe } from "../../member/store/actions/bookAction"; */
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
import { getFormattedMessage } from "../../shared/sharedMethod";

const Staff = (props) => {
    const { goTo, findBooksWithout } = props;
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
                `${window.location.origin.toString()}/api/v1/books?order_by=created_at&limit=${4}&search=${term}&genre=${formgenre}&library_id=111&author=${formauthors}&publisher=${formpublishers}&language=${formlanguages}&format=${formformats}`
            );

            setDetails(resources.data.data);
            /* setIsLoading(false); */
        };
        fetchDetails();
    }, []);

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
                    {details &&
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
                                                        // src="images/Group95.svg"
                                                        src={
                                                            book.image
                                                                ? site_name_image_path
                                                                : defaultBook
                                                        }
                                                        onError={({
                                                            currentTarget,
                                                        }) => {
                                                            currentTarget.onerror =
                                                                null; // prevents looping
                                                            currentTarget.src =
                                                                defaultBook;
                                                        }}
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
                                                </div>
                                                <div className="card-desc-box d-flex align-items-center justify-content-around">
                                                    <div
                                                        className="badge badge-info"
                                                        style={{
                                                            width: "fit-content",
                                                            padding: "auto 5px",
                                                        }}
                                                    >
                                                        <span>
                                                            {book.items
                                                                .length &&
                                                            book.items[0]
                                                                .format === 3
                                                                ? "E-Book"
                                                                : "Book"}
                                                        </span>
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
        libraryId,
        setLibraryId,
        filteredBook,
        isDisabled,
        formatId,
        setFormatId,
        isFormatDisabled,
    } = props;
    const [isReserved, setReserved] = useState(false);
    const [modal, setModal] = useState(false);
    const [isExpired, setExpired] = useState(false);
    const [isSpinner, setIsSpinner] = useState(true);

    const navigate = useNavigate();

    const libraryOnChange = (e) => {
        setLibraryId(e.target.value.toString());
    };
    const formatOnChange = (e) => {
        setFormatId(e.target.value.toString());
    };

    const toggle = () => setModal(!modal);
    var history = [];
    var ebookSub = null;
    const status = bookHistory.filter((book) => book.status === 1);

    if (ebookSubscription.length && member && filteredBook.length) {
        ebookSub = ebookSubscription.find(
            (ebook) =>
                ebook.member_id === member.id &&
                filteredBook[0].id === ebook.ebook_id &&
                filteredBook[0].book.library_id === ebook.library_id
        );
    }

    if (filteredBook.length && bookHistory.length && filteredBook.length) {
        history = bookHistory.filter(
            (book) => filteredBook[0].id == book.book_item_id
        );
    }

    // console.log({
    //     member,
    //     ebookSubscription,
    //     ebookSub,
    //     searchBooks,
    //     subscriptionLimit,
    //     isAvailable,
    // });

    // console.log({ filteredBook, libraryId });

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
            filteredBook.length > 0 ? filteredBook[0].pdf_preview_file : null,
    };

    useEffect(() => {
        setTimeout(() => setIsSpinner(false), 1500);
    }, []);

    useEffect(() => {
        if (searchBooks.length && subscriptionLimit.length) {
            const esub = subscriptionLimit.find(
                (sub) => sub.ebook_id == filteredBook[0]?.id
            );
            if (esub && esub.count === 20) {
                setIsAvailable(false);
            }
        }
    }, [filteredBook.length, subscriptionLimit.length]);

    return (
        <div className="book-wrapper">
            <section className="book-details modal-content shadow-none">
                {!isSpinner ? (
                    filteredBook.length ? (
                        filteredBook.map((book, index) => {
                            return book.format === 3 ? (
                                <div key={index + 34} className="container">
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
                                                        null; // prevents looping
                                                    currentTarget.src =
                                                        "https://cdn-icons-png.flaticon.com/512/3845/3845824.png";
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
                                                <>
                                                    {book &&
                                                    book.book.authors[0]
                                                        .first_name &&
                                                    book.book.authors[0]
                                                        .last_name
                                                        ? book.book.authors[0]
                                                              .first_name +
                                                          " " +
                                                          book.book.authors[0]
                                                              .last_name
                                                        : ""}
                                                </>
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
                                                {book.edition
                                                    ? book.edition
                                                    : "N/A"}
                                            </p>
                                            <p className="author_name specifications">
                                                <span>Genre: </span>
                                                {book.book?.genres?.length
                                                    ? book.book.genres[0].name
                                                    : ""}
                                            </p>
                                            <p className="author_name specifications">
                                                <span>Publisher: </span>
                                                {book.publisher?.name}
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
                                            <button
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
                                                    (ebookSub?.library_id ==
                                                        book?.book
                                                            ?.library_id &&
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
                                                    handleSubscribe(
                                                        book.id,
                                                        book.book.library_id
                                                    )
                                                }
                                            >
                                                <span>
                                                    {" "}
                                                    {ebookSubscription.length &&
                                                    ebookSub?.library_id ==
                                                        book?.book
                                                            ?.library_id &&
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
                                            {(ebookSub ||
                                                ebookSub?.length > 0) &&
                                            moment(ebookSub.returned_on).format(
                                                "YYYY-MM-DD"
                                            ) > moment().format("YYYY-MM-DD") &&
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
                                                    <span> Read</span>
                                                </button>
                                            ) : null}
                                            {book.pdf_preview_file && member && (
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
                            ) : null;
                        })
                    ) : (
                        <p className="specifications mx-auto">
                            <span>
                                {getFormattedMessage(
                                    "books.table.book-un-available.column"
                                )}
                            </span>
                        </p>
                    )
                ) : (
                    <div className="spinner">
                        <img src="/public/images/301.gif" />
                    </div>
                )}
                <PDFviewerModal {...pdfModalOptions} libraryId={libraryId} />
            </section>
        </div>
    );
};

function EbookDetails(props) {
    const {
        books,

        fetchSubscriptionLimit,
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
        latestBooks,
        fetchLatestBooks,
    } = props;
    const params = useParams();
    const { id, library_id } = params;
    const navigate = useNavigate();
    const member = getCurrentMember();
    const [isAvailable, setIsAvailable] = useState(true);
    const [filteredBook, setFilteredBook] = useState([]);
    const [libraryId, setLibraryId] = useState(library_id);
    const [formatId, setFormatId] = useState("");
    const [isDisabled, setIsDisabled] = useState([]);
    const [isFormatDisabled, setIsFormatDisabled] = useState([]);
    const location = useLocation();
    const goTo = (url) => {
        navigate(url);
    };

    const dispatch = useDispatch();

    const handleSubscribe = useCallback(
        (id, libraryId) => {
            if (member) {
                if (member.subscription) {
                    const isRegistered = isMemberRegistered.length
                        ? isMemberRegistered.some(
                              (item) => item.user_library_id == libraryId
                          )
                        : false;
                    if (member.user_library_id != libraryId && !isRegistered) {
                        toggleModal();
                    } else {
                        navigate(
                            "/lms/ebook-subscription/" + id + "/" + libraryId
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
        },
        [libraryId, isMemberRegistered]
    );

    useEffect(() => {
        fetchEbookSubscription();
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
    }, [reserveBook, library_id, id]);

    useEffect(() => {
        fetchSubscriptionLimit();
        if (member) fetchMemberStatus(member.id);
    }, []);

    const handleFurtherReservation = useCallback(() => {
        registerMemberToLibrary(member, libraryId);
        toggleModal();
    }, [libraryId]);

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
        libraryId,
        setLibraryId,
        filteredBook,
        isDisabled,
        isFormatDisabled,
    };

    const content = `These book belongs to ${
        libraryId
            ? libraryStatus.find((status) => status.id == libraryId)?.name
            : "N/A"
    } Library. And Your are not the Member either. Do you want to Register for ${
        libraryId
            ? libraryStatus.find((status) => status.id == libraryId)?.name
            : "N/A"
    } and Continue ?`;

    useEffect(() => {
        if (searchBooks.length) {
            let tempBooks = [];
            if (libraryId) {
                tempBooks = searchBooks.filter(
                    (book) => book.book.library_id === parseInt(libraryId)
                );
                setFilteredBook(tempBooks);
            }

            const tempIsDisabled = libraryStatus.map((status, i) =>
                searchBooks.find(
                    (book, i) => book?.book?.library_id == status.id
                )
                    ? true
                    : false
            );
            setIsDisabled(tempIsDisabled);

            const tempFormatIsDisabled = [
                {
                    id: 1,
                    name: "Hardcover",
                },
                {
                    id: 2,
                    name: "Paperback",
                },
                {
                    id: 3,
                    name: "E-Book",
                },
            ].map((format, i) =>
                searchBooks.find((book, i) => book?.format == format.id)
                    ? true
                    : false
            );

            setIsFormatDisabled(tempFormatIsDisabled);
        }
    }, [location.pathname, libraryId, searchBooks, formatId]);

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
        searchBooks,
        bookHistory,
        ebookSubscription,
        subscriptionLimit,
        isMemberRegistered,
        books,
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
    findBooksWithout,
    reserveBook,
    fetchBooksHistory,
    fetchEbookSubscription,
    fetchSubscriptionLimit,
    toggleModal,
    fetchMemberStatus,
    registerMemberToLibrary,
})(EbookDetails);
