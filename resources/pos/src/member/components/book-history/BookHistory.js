import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, CardBody, Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import BookHistoryTable from "./BookHistoryTable";
import UnReserveBook from "./UnReserveBook";
import ProgressBar from "../../../shared/progress-bar/ProgressBar";
import HeaderTitle from "../../../shared/header-title/HeaderTitle";
import { getFormattedMessage } from "../../../shared/sharedMethod";
import { toggleModal } from "../../../store/action/modalAction";
import { fetchBooksHistory } from "../../store/actions/bookHistoryAction";

const BookHistory = (props) => {
    const [history, setHistory] = useState(null);
    const {
        bookHistory,
        fetchBooksHistory,
        isLoading,
        toggleModal,
        totalRecordMember,
    } = props;

    const [isSpinner, setIsSpinner] = useState(true);

    const cardModalProps = {
        bookHistory: history,
        toggleModal,
    };

    const onChangeFilter = (filter) => {
        fetchBooksHistory(filter);
    };

    const onOpenModal = (bookItem = null) => {
        setHistory(bookItem);
        toggleModal();
    };

    useEffect(() => {
        setTimeout(() => setIsSpinner(false), 1500);
    }, []);

    const cardBodyProps = {
        bookHistory,
        onOpenModal,
        onChangeFilter,
        totalRecordMember,
        isLoading,
    };

    return (
        <section className="member_books_history">
            {!isSpinner ? (
                <div className="container">
                    <div className="animated fadeIn">
                        <div className="section-title-center text-center">
                            <h2 className="display-6">
                                {getFormattedMessage("book-history.title")}
                            </h2>
                            <div className="section-divider divider-traingle"></div>
                        </div>

                        <div className="common-container">
                            <BookHistoryTable {...cardBodyProps} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="spinner">
                    <img src="/public/images/301.gif" />
                </div>
            )}

            <UnReserveBook {...cardModalProps} />
        </section>
    );
};

BookHistory.propTypes = {
    history: PropTypes.object,
    bookHistory: PropTypes.array,
    totalRecordMember: PropTypes.number,
    isLoading: PropTypes.bool,
    fetchBooksHistory: PropTypes.func,
    toggleModal: PropTypes.func,
};

const mapStateToProps = (state) => {
    const { bookHistory, isLoading, totalRecordMember } = state;
    return {
        bookHistory,
        isLoading,
        totalRecordMember,
    };
};

export default connect(mapStateToProps, { fetchBooksHistory, toggleModal })(
    BookHistory
);
