import React, { createRef, useEffect, useState } from "react";
import { Field, reduxForm, change } from "redux-form";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import bookItemValidate from "./bookItemValidate";
import "../book-details/BookDetails.scss";
import SaveAction from "../../../shared/action-buttons/SaveAction";
import InputGroup from "../../../shared/components/InputGroup";
import Select from "../../../shared/components/Select";
import {
    enableDisableUserInput,
    generateRandomNumber,
    getFormattedOptions,
} from "../../../shared/sharedMethod";
import {
    bookItemStatusOptions,
    bookFormatOptions,
    bookItemStatusConstants,
    maxDigits,
} from "../../constants";
import { prepareBookLanguage } from "../../shared/prepareArray";
import { fetchPublishers } from "../../store/actions/publisherAction";
import { fetchBookLanguages } from "../../store/actions/bookLanguageAction";
import InputFile from "./inputFile";
import { Tokens } from "../../../constants";
import { prepareProductCreatableObject } from "../../../shared/prepareArray";
import { fetchProducts } from "../../../store/action/productAction";

const BookItemForm = (props) => {
    const {
        bookLanguages,
        publishers,
        onSaveBookItems,
        initialValues,
        currency,
        fetchBookLanguages,
        fetchPublishers,
        handleSubmit,
        newBookItem = false,
        e_book_url = "",
        products,
        fetchProducts,
    } = props;

    const [isDisabledStatus, setDisabledStatus] = useState(false);
    const inputRef = createRef();
    const bookItemsStatusOptions = getFormattedOptions(bookItemStatusOptions);
    const booksFormatOptions = getFormattedOptions(bookFormatOptions);
    const [formateOptions, setFormatOptions] = useState(
        initialValues ? initialValues.format : null
    );

    useEffect(() => {
        fetchBookLanguages();
        fetchPublishers();
        prepareInitialValues();
        if (e_book_url) {
            props.change("file", "false");
        }
        fetchProducts();
    }, []);
    const prepareInitialValues = () => {
        if (!initialValues) {
            props.change("status", { ...bookItemsStatusOptions[0] });
            props.change("book_code", Number(generateRandomNumber(10)));
        } else {
            if (
                initialValues.status &&
                initialValues.status.id === bookItemStatusConstants.UNAVAILABLE
            ) {
                setDisabledStatus(true);
            }
        }
        // inputRef.current.focus();
    };

    const regenerate = () => {
        props.change("book_code", Number(generateRandomNumber(10)));
    };

    const onSave = (formValues) => {
        const {
            book_code,
            edition,
            format,
            language,
            publisher,
            location,
            price,
            status,
            file,
            product_id,
            rack_number,
            pdf_preview_file,
        } = formValues;
        // console.log({ formValues });
        {
            newBookItem
                ? onSaveBookItems({
                      book_code,
                      edition,
                      format,
                      language,
                      publisher,
                      status,
                      location,
                      price,
                      file,
                      product_id,
                      rack_number,
                      pdf_preview_file,
                  })
                : onSaveBookItems({
                      book_code,
                      edition,
                      format: format.id,
                      language_id: language.id,
                      publisher_id: publisher ? publisher.id : null,
                      status: status.id,
                      location,
                      price,
                      file: e_book_url ? "" : file,
                      product_id: product_id.id,
                      rack_number: rack_number,
                      pdf_preview_file: e_book_url ? "" : pdf_preview_file,
                  });
        }
    };

    const onChangeFormat = (options) => {
        setFormatOptions(options);
    };

    useEffect(() => {
        document
            .querySelector(".inputBox")
            .addEventListener("keypress", function (evt) {
                if (
                    (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
                    evt.which > 57
                ) {
                    evt.preventDefault();
                }
            });
    }, []);

    const onClickOpenEBook = (e_book_url) => {
        const api = e_book_url + "?token=" + localStorage.getItem(Tokens.ADMIN);
        window.open(api, "_blank");
    };

    return (
        <Row className="animated fadeIn book-form m-3">
            <Col xs={12} sm={6}>
                <Field
                    name="book_code"
                    className="inputBox"
                    label="books.items.input.book-code.label"
                    min="1"
                    inputRef={inputRef}
                    required
                    // onChange={(e) =>
                    //     enableDisableUserInput(e, maxDigits.BOOK_CODE)
                    // }
                    type="number"
                    groupText="file-text"
                    component={InputGroup}
                />
                <Button onClick={regenerate} size="md">
                    Generate
                </Button>
            </Col>
            <Col xs={12} sm={6}>
                <Field
                    name="product_id"
                    label="books.select.product.title"
                    options={products}
                    placeholder="books.select.product.placeholder"
                    groupText="user-circle-o"
                    component={Select}
                />
            </Col>
            <Col xs={12} sm={6}>
                <Field
                    name="edition"
                    label="books.items.input.edition.label"
                    required
                    groupText="file-text"
                    component={InputGroup}
                />
            </Col>
            <Col xs={12} sm={6}>
                <Field
                    name="format"
                    label="books.items.select.format.label"
                    required
                    options={booksFormatOptions}
                    placeholder="books.items.select.format.placeholder"
                    groupText="wpforms"
                    component={Select}
                    onChange={(options) => onChangeFormat(options)}
                />
            </Col>
            {formateOptions && formateOptions.id === 3 && e_book_url ? (
                <Col xs={12} sm={6} className="pt-4">
                    View your PDF{" "}
                    <i
                        className="fa fa-download fa-md cursor-pointer text-info ml-2"
                        onClick={() => onClickOpenEBook(e_book_url)}
                    />
                </Col>
            ) : formateOptions && formateOptions.id === 3 ? (
                <Col xs={12} sm={6} className="pt-4">
                    <Field name="file" type="file" component={InputFile} />
                </Col>
            ) : null}
            {/* <Col xs={12} sm={6}>
                <Field
                    name="location"
                    label="books.items.input.location.label"
                    groupText="map-pin"
                    component={InputGroup}
                    type="text"
                />
            </Col> */}
            {formateOptions && formateOptions.id !== 3 ? (
                <Col xs={12} sm={6}>
                    <Field
                        name="price"
                        min="1"
                        type="number"
                        label="books.items.input.price.label"
                        groupText={currency}
                        isDefaultCurrency={true}
                        component={InputGroup}
                    />
                </Col>
            ) : null}
            <Col xs={12} sm={6}>
                <Field
                    name="language"
                    label="books.items.select.language.label"
                    required
                    options={bookLanguages}
                    placeholder="books.items.select.language.placeholder"
                    groupText="language"
                    component={Select}
                    isSearchable={true}
                />
            </Col>
            <Col>
                <Field
                    name="publisher"
                    label="books.items.select.publisher.label"
                    options={publishers}
                    placeholder="books.items.select.publisher.placeholder"
                    groupText="user-circle-o"
                    component={Select}
                    isSearchable={true}
                />
            </Col>
            <Col xs={12} sm={6}>
                <Field
                    name="status"
                    label="books.items.select.status.label"
                    disabled={!initialValues || isDisabledStatus}
                    options={bookItemsStatusOptions}
                    placeholder="books.items.select.status.placeholder"
                    groupText="user-circle-o"
                    component={Select}
                    isSearchable={true}
                />
            </Col>
            <Col xs={12} sm={6}>
                <Field
                    name="rack_number"
                    label="books.items.select.rack.number.label"
                    groupText="user-circle-o"
                    component={InputGroup}
                    isSearchable={true}
                />
            </Col>
            <Col xs={12} sm={6} className="pt-4">
                <label htmlFor="pdf-preview" className="form-label">
                    PDF Preview
                </label>
                <Field
                    name="pdf_preview_file"
                    type="file"
                    required
                    component={InputFile}
                />
            </Col>
            <Col xs={12}>
                <SaveAction onSave={handleSubmit(onSave)} {...props} />
            </Col>
        </Row>
    );
};

BookItemForm.propTypes = {
    initialValues: PropTypes.object,
    currency: PropTypes.string,
    bookLanguages: PropTypes.array,
    publishers: PropTypes.array,
    fetchPublishers: PropTypes.func,
    fetchBookLanguages: PropTypes.func,
    handleSubmit: PropTypes.func,
    onSaveBookItems: PropTypes.func,
};

const mapStateToProps = (state) => {
    const { publishers, bookLanguages, products } = state;
    return {
        bookLanguages: prepareBookLanguage(bookLanguages),
        publishers: Object.values(publishers),
        products: prepareProductCreatableObject(products),
    };
};
const bookItemForm = reduxForm({
    form: "bookItemForm",
    validate: bookItemValidate,
})(BookItemForm);

export default connect(mapStateToProps, {
    fetchPublishers,
    fetchBookLanguages,
    fetchProducts,
})(bookItemForm);
