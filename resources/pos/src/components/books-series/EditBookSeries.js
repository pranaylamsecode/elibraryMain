import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import BookSeriesForm from "./BookSeriesForm";
import ProgressBar from "../../shared/progress-bar/ProgressBar";
import HeaderTitle from "../../shared/header-title/HeaderTitle";
import { getFormattedMessage } from "../../shared/sharedMethod";
import {
    editBookSeries,
    fetchBookSeries,
} from "../../admin/store/actions/bookSeriesAction";

import { useParams, useNavigate } from "react-router-dom";

import TopProgressBar from "../../shared/components/loaders/TopProgressBar";
import MasterLayout from "../MasterLayout";
import { useSelector } from "react-redux";
import TabTitle from "../../shared/tab-title/TabTitle";
import { placeholderText } from "../../shared/sharedMethod";

const EditBookSeries = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetchBookSeries(params.id);
    }, []);

    const { bookSeries, history, editBookSeries, fetchBookSeries } = props;

    const onSaveBookSeries = (formValues) => {
        editBookSeries(bookSeries.id, formValues, navigate);
    };

    const goBack = () => {
        navigate(-1);
    };

    if (!bookSeries) {
        return <TopProgressBar />;
    }

    const { title, series_items } = bookSeries;
    const changAbleFields = { title, series_items };
    const prepareFormOption = {
        onSaveBookSeries,
        onCancel: goBack,
        initialValues: changAbleFields,
    };

    return (
        <MasterLayout>
            <TopProgressBar />
            <TabTitle title={placeholderText("books-series.title")} />
            <div className="animated fadeIn">
                {/* <ProgressBar /> */}
                <HeaderTitle title={"Edit Books Series"} />
                <Row>
                    <Col
                        sm={12}
                        className="mb-2 d-flex justify-content-between"
                    >
                        <h5 className="pull-left text-dark">
                            {" "}
                            {placeholderText("books-series.modal.edit.title")}
                        </h5>
                    </Col>
                    <Col sm={12}>
                        <div className="sticky-table-container">
                            <Card>
                                <CardBody>
                                    <BookSeriesForm {...prepareFormOption} />
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </MasterLayout>
    );
};

EditBookSeries.propTypes = {
    bookSeries: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object,
    editBookSeries: PropTypes.func,
    fetchBookSeries: PropTypes.func,
};

const mapStateToProps = (state, ownProp) => {
    const { isLoading, booksSeries } = state;
    var url = window.location.href;
    var id = url.match(/\d/g);
    return {
        isLoading,
        bookSeries: booksSeries[id],
    };
};

export default connect(mapStateToProps, { editBookSeries, fetchBookSeries })(
    EditBookSeries
);
