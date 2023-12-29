import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../";

import Header from "./Header";
import Footer from "./Footer";
import Book from "./bookGet";
import LoadingCard from "./loadingCard";
import Select from "react-select";

const Books = () => {
    /* variable for search */

    const [details, setDetails] = useState([]);
    const [prevLimit, setPrevLimit] = useState(10);
    const [prevSkip, setPrevSkip] = useState(0);
    const [checkprevLimit, setCheckPrevLimit] = useState(20);
    const [checkprevSkip, setCheckPrevSkip] = useState(10);
    const [term, setTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [text, setText] = useState("");
    const [showValidTextModal, setShowValidTextModal] = useState(false);
    const [genres, setGenre] = useState([]);
    const [authors, setAuthor] = useState([]);
    const [publishers, setPublisher] = useState([]);
    const [languages, setLanguage] = useState([]);
    const [formats, setFormat] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [library, setLibrary] = useState([
        { value: 111, label: "Dindayal Upadhyay Library" },
        { value: 222, label: "Kundanlal Gupta Library" },
        { value: 333, label: "Rashtra Matakasturba Library" },
    ]);

    const [formgenre, setformGenre] = useState("");
    const [formauthors, setformauthors] = useState("");
    const [formpublishers, setformpublishers] = useState("");
    const [formlanguages, setformlanguages] = useState(0);
    const [formformats, setformformats] = useState(0);
    const [formlibrary_id, setLibraryId] = useState(0);
    const [isLoadMoreAvailable, setIsLoadMoreAvailable] = useState(0);

    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(() => {
        console.log();
        const fetchGenre = async () => {
            const resources = await axios.get(
                `${window.location.origin.toString()}/api/v1/genres?order_by=name&direction=asc`
            );
            setGenre(resources.data.data);
        };
        const fetchAuthor = async () => {
            const resources = await axios.get(
                `${window.location.origin.toString()}/api/v1/authors?order_by=first_name&direction=asc`
            );
            setAuthor(resources.data.data);
        };
        const fetchPublisher = async () => {
            const resources = await axios.get(
                `${window.location.origin.toString()}/api/v1/publishers?order_by=name&direction=asc`
            );
            setPublisher(resources.data.data);
        };
        const fetchLanguage = async () => {
            const resources = await axios.get(
                `${window.location.origin.toString()}/api/b1/book-languages?order_by=created_at&direction=asc`
            );
            setLanguage(resources.data.data);
        };
        const fetchFormat = async () => {
            setFormat([
                { value: 1, label: "Hardcover" },
                { value: 2, label: "PaperBack" },
                { value: 3, label: "E-Book" },
            ]);
        };
        fetchGenre();
        fetchAuthor();
        fetchPublisher();
        fetchLanguage();
        fetchFormat();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === "" || !text.trim()) {
            setShowValidTextModal(true);
            return;
        }
        /* searchText(text); */
    };

    const onChangevalue = (e) => {
        e.preventDefault();

        setTerm(e.target.value);
    };

    const filterformGenre = (e) => {
        setformGenre(e.value);
    };
    const filterformAuthor = (e) => {
        setformauthors(e.value);
    };
    const filterformPublishers = (e) => {
        setformpublishers(e.value);
    };
    const filterformLanguages = (e) => {
        setformlanguages(e.value);
    };
    const filterformFormat = (e) => {
        setformformats(e.value);
    };

    const filterformLibrary = (e) => {
        setLibraryId(e.value);
    };

    /* variable for search end */

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true);
            setPrevLimit(10);
            setPrevSkip(0);

            setCheckPrevLimit(20);
            setCheckPrevSkip(10);

            const resources = await axios.get(
                `${window.location.origin.toString()}/api/v1/books?order_by=name&limit=${prevLimit}&skip=${prevSkip}&search=${term}&genre=${formgenre}&library_id=${formlibrary_id}&author=${formauthors}&publisher=${formpublishers}&language=${formlanguages}&format=${formformats}`
            );

            const resources2 = await axios.get(
                `${window.location.origin.toString()}/api/v1/books?order_by=name&limit=${checkprevLimit}&skip=${checkprevSkip}&search=${term}&genre=${formgenre}&library_id=${formlibrary_id}&author=${formauthors}&publisher=${formpublishers}&language=${formlanguages}&format=${formformats}`
            );
            setDetails(resources.data.data);
            setIsLoading(false);
            if (resources2.data.data.length > 0) {
                setIsLoadMoreAvailable(1);
            }
        };
        fetchDetails();
    }, [
        term,
        formgenre,
        formauthors,
        formpublishers,
        formlanguages,
        formformats,
        formlibrary_id,
    ]);

    const fetchDetails2 = async () => {
        setIsLoading(true);
        setPrevLimit(10);
        setPrevSkip(0);

        setCheckPrevLimit(20);
        setCheckPrevSkip(10);

        const resources = await axios.get(
            `${window.location.origin.toString()}/api/v1/books?order_by=name&limit=${prevLimit}&skip=${prevSkip}&search=${term}&genre=${formgenre}&library_id=${formlibrary_id}&author=${formauthors}&publisher=${formpublishers}&language=${formlanguages}&format=${formformats}`
        );

        const resources2 = await axios.get(
            `${window.location.origin.toString()}/api/v1/books?order_by=name&limit=${checkprevLimit}&skip=${checkprevSkip}&search=${term}&genre=${formgenre}&library_id=${formlibrary_id}&author=${formauthors}&publisher=${formpublishers}&language=${formlanguages}&format=${formformats}`
        );
        setDetails(resources.data.data);
        setIsLoading(false);

        if (resources2.data.data.length > 0) {
            setIsLoadMoreAvailable(1);
        }
    };

    const loadMore = async () => {
        setPrevLimit(prevLimit + 10);
        setPrevSkip(prevSkip + 10);

        setCheckPrevLimit(20);
        setCheckPrevSkip(10);

        const resources = await axios.get(
            `${window.location.origin.toString()}/api/v1/books?order_by=name&limit=${prevLimit}&skip=${prevSkip}&search=${term}&genre=${formgenre}&library_id=${formlibrary_id}&author=${formauthors}&publisher=${formpublishers}&language=${formlanguages}&format=${formformats}`
        );

        const resources2 = await axios.get(
            `${window.location.origin.toString()}/api/v1/books?order_by=name&limit=${checkprevLimit}&skip=${checkprevSkip}&search=${term}&genre=${formgenre}&library_id=${formlibrary_id}&author=${formauthors}&publisher=${formpublishers}&language=${formlanguages}&format=${formformats}`
        );
        setDetails((oldDetails) => [...oldDetails, ...resources.data.data]);

        if (resources2.data.data.length > 0) {
            setIsLoadMoreAvailable(1);
        }
    };

    return (
        <>
            <Header />

            <section className="case-studies" id="books-section">
                <div className="container">
                    {/* search logic  */}

                    <div
                        className="s003 d-flex flex-column align-items-center"
                        id="book_search_home_page_form"
                    >
                        <div className="search-bar">
                            <div
                                className="searchByBook"
                                data-tooltip-id="search"
                            >
                                <form onSubmit={handleSubmit}>
                                    <input
                                        id="onSearch"
                                        className="form-control"
                                        type="text"
                                        placeholder="Search here..."
                                        onChange={onChangevalue}
                                    />

                                    <div
                                        className="reset"
                                        data-tooltip-id="reset"
                                    >
                                        <button
                                            className="btn btn-danger frontend-btn ml-2"
                                            onClick={() => {
                                                fetchDetails2();
                                            }}
                                        >
                                            <span className="fa fa-search"></span>
                                        </button>
                                        <a
                                            className="btn btn-danger frontend-btn ml-2"
                                            onClick={() => {
                                                setTerm("");
                                                setformGenre(0);
                                                setformauthors(0);
                                                setformpublishers(0);
                                                setformlanguages(0);
                                                setformformats(0);
                                                setLibraryId(0);
                                            }}
                                        >
                                            <span>Reset</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="search-bar">
                        <div className="col-md-3">
                            <Select
                                title="Genre"
                                placeholder="Select Genre"
                                options={
                                    genres
                                        ? genres.map((genre, i) => ({
                                              label: genre.name,
                                              value: genre.name,
                                          }))
                                        : []
                                }
                                onChange={filterformGenre}
                            />
                        </div>

                        <div className="col-md-3">
                            <Select
                                title="Author"
                                placeholder="Select Author"
                                options={
                                    authors
                                        ? authors.map((author, i) => ({
                                              label: author.full_name,
                                              value: author.full_name,
                                          }))
                                        : []
                                }
                                onChange={filterformAuthor}
                            />
                        </div>

                        <div className="col-md-3">
                            <Select
                                title="Publishers"
                                placeholder="Select Publishers"
                                options={
                                    publishers
                                        ? publishers.map((publisher, i) => ({
                                              label: publisher.name,
                                              value: publisher.name,
                                          }))
                                        : []
                                }
                                onChange={filterformPublishers}
                            />
                        </div>

                        <div className="col-md-3">
                            <Select
                                title="Languages"
                                placeholder="Select Languages"
                                options={
                                    languages
                                        ? languages.map((language, i) => ({
                                              label: language.language_name,
                                              value: language.id,
                                          }))
                                        : []
                                }
                                onChange={filterformLanguages}
                            />
                        </div>

                        <div className="col-md-3">
                            <Select
                                title="Formats"
                                placeholder="Select Formats"
                                options={
                                    formats
                                        ? formats.map((genre, i) => ({
                                              label: genre.label,
                                              value: genre.value,
                                          }))
                                        : []
                                }
                                onChange={filterformFormat}
                            />
                        </div>

                        <div className="col-md-3">
                            <Select
                                title="Library"
                                placeholder="Select Library"
                                options={
                                    library
                                        ? library.map((genre, i) => ({
                                              label: genre.label,
                                              value: genre.value,
                                          }))
                                        : []
                                }
                                onChange={filterformLibrary}
                            />
                        </div>
                    </div>

                    {/* search logic end  */}

                    {isLoading ? (
                        <></>
                    ) : !details ? (
                        <h1
                            className="loading-name"
                            style={{
                                background: "white",
                                borderRadius: "1rem",
                                color: "#DB4437",
                                padding: "1rem",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                fontSize: 33,
                                fontFamily: "Inria Serif",
                                transform: "translate(-50%,-50%)",
                                textTransform: "capitalize",
                            }}
                        >
                            😞 Couldn't find books about {term}
                        </h1>
                    ) : (
                        <>
                            <div className="col-12 common-heading text-center pt-4 pb-5">
                                <h2>Our Books Collection</h2>
                                <div className="section-divider divider-traingle"></div>
                            </div>
                            <div className="col-12 common-heading text-left">
                                <div className="book-count-wrapper">
                                    <span className="book-count"></span>
                                </div>
                            </div>
                            <div className="row grid-margin">
                                {details.map((book, index) => (
                                    <Book {...book} key={index} />
                                ))}
                            </div>
                            {isLoadMoreAvailable ? (
                                <div className="load-more pt-5">
                                    <button
                                        className="btn btn-white frontend-btn"
                                        onClick={() => loadMore()}
                                    >
                                        Load More
                                    </button>
                                </div>
                            ) : (
                                <>No Book Found</>
                            )}
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Books;
