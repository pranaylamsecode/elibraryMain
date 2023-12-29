import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card, CardBody } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeaderTitle from "../../../shared/header-title/HeaderTitle";
import ReactDataTable from "../../../shared/table/ReactDataTable";
import ProgressBar from "../../../shared/progress-bar/ProgressBar";
import {
    getCurrentMember,
    getFormattedMessage,
    getFormattedOptions,
} from "../../../shared/sharedMethod";
import { fetchEBookRequests } from "../../store/actions/ebookAction";
import { fetchEbookSubscription } from "../../store/actions/ebookSubscriptionAction";
import { icon, Tokens } from "../../../constants";
import "./ebook.scss";
import PDFviewerModal from "../../../components/book-details/PDFviewerModal";
import moment from "moment";

const Ebooks = (props) => {
    const {
        ebooks,
        ebookSubscription,
        isLoading,
        fetchEBookRequests,
        fetchEbookSubscription,
        totalRecordMember,
    } = props;

    const [modal, setModal] = useState(false);
    const [filePath, setFilePath] = useState("");
    const [isSpinner, setIsSpinner] = useState(true);
    const member = getCurrentMember();

    const toggle = () => setModal(!modal);
    const handleRead = () => {
        setModal(!modal);
        const ebook =
            ebookSubscription.length > 0 &&
            ebooks.length > 0 &&
            ebooks.filter((ebook, i) =>
                ebookSubscription.find((esub) =>
                    ebook.id === esub.ebook_id ? ebook : null
                )
            );
        // console.log(ebook);
    };

    const onChange = (filter) => {
        fetchEBookRequests(filter, true);
        fetchEbookSubscription();
    };

    const onClickBookDownload = (e_book_url) => {
        const api =
            e_book_url + "?token=" + localStorage.getItem(Tokens.MEMBER);
        window.open(api, "_blank");
    };

    const columns = [
        {
            name: getFormattedMessage("e-books.input.isbn.label"),
            selector: (row) => row.isbn,
            width: "200px",
            sortable: true,
            cell: (row) => <span>{row.isbn_no}</span>,
        },
        {
            name: getFormattedMessage("e-books.input.name.label"),
            selector: (row) => row.e_book_name,
            sortable: true,
            cell: (row) => (
                <span className="book-name">
                    {row.name}
                    {/* <i
                        className="fa fa-download fa-md cursor-pointer text-info ml-2"
                        onClick={() => onClickBookDownload(row.e_book_url)}
                    /> */}
                </span>
            ),
        },
        // {
        //     name: getFormattedMessage("e-books.input.edition.label"),
        //     selector: (row) => row.edition,
        //     sortable: true,
        //     cell: (row) => <span>{row.edition}</span>,
        // },
        {
            name: getFormattedMessage("e-books.input.language.label"),
            selector: (row) => row.language_name,
            sortable: true,
            cell: (row) => <span>{row.language_name}</span>,
        },
        {
            name: getFormattedMessage("e-books.input.author.label"),
            selector: (row) => row.authors,
            width: "300px",
            sortable: true,
            cell: (row) => <span>{row.authors}</span>,
        },
        {
            name: "Action",
            selector: (row) => row.authors,
            width: "300px",
            sortable: true,
            cell: (row) => (
                <Button
                    size="sm"
                    color="danger text-white"
                    onClick={(e) => {
                        setFilePath((prev) => (prev = row.file_name));
                        row.format === 3
                            ? (location.hash =
                                  "/view-book/" +
                                  row.file_name +
                                  "/" +
                                  row?.library_id)
                            : toggle();
                        // console.log(row.file_name);
                    }}
                >
                    Read
                </Button>
            ),
        },
    ];

    const pdfModalOptions = {
        modal,
        toggle,
        filePath: filePath,
    };

    useEffect(() => {
        setTimeout(() => setIsSpinner(false), 500);
    }, []);

    // console.log({ totalRecordMember });

    const itemsValue =
        ebookSubscription.length > 0 &&
        ebooks.length > 0 &&
        ebooks.filter((ebook, i) =>
            ebookSubscription.find((esub) =>
                moment(esub.returned_on).format("YYYY-MM-DD") >
                    moment().format("YYYY-MM-DD") &&
                ebook.id === esub.ebook_id &&
                esub.member_id === member.id
                    ? ebook
                    : null
            )
        );

    console.log({ itemsValue, member, ebooks, ebookSubscription });

    return (
        <section className="member_ebooks">
            <div className="container">
                <div className="animated fadeIn">
                    <div className="section-title-center text-center">
                        <h2 className="display-6">
                            {getFormattedMessage("e-book.title")}
                        </h2>
                        <div className="section-divider divider-traingle"></div>
                    </div>

                    <div className="common-container">
                        <ReactDataTable
                            items={itemsValue}
                            // items={ebooks}
                            className={"table-bordered table-striped mt-2"}
                            columns={columns}
                            loading={isLoading}
                            totalRows={itemsValue.length}
                            emptyStateMessageId="e-book.empty-state.title"
                            emptyNotFoundStateMessageId="e-books.not-found.empty-state.title"
                            onChange={onChange}
                            icon={icon.BOOK}
                        />
                    </div>
                </div>
            </div>

            <PDFviewerModal {...pdfModalOptions} />
        </section>
    );
};

Ebooks.propTypes = {
    ebooks: PropTypes.array,
    isLoading: PropTypes.bool,
    fetchEBookRequests: PropTypes.func,
    totalRecordMember: PropTypes.number,
};

const mapStateToProps = (state) => {
    const { ebooks, isLoading, totalRecordMember, ebookSubscription } = state;
    // console.log({ ebooks, ebookSubscription });
    return {
        ebooks,
        ebookSubscription,
        isLoading,
        totalRecordMember,
    };
};

export default connect(mapStateToProps, {
    fetchEBookRequests,
    fetchEbookSubscription,
})(Ebooks);
