import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import "./BookItems.scss";
import { sortConfig } from "../../config/sortConfig";
import TableHeader from "../../shared/table-header/Tableheader";
import ModalAction from "../../shared/action-buttons/ModalAction";
import BookItemStatus from "../../shared/book-item-status/BookItemStatus";
import { getFormattedMessage, priceFormatter } from "../../shared/sharedMethod";
import { Tokens } from "../../constants";
import { bookFormatConstant } from "../../constants";
import Barcode from "react-barcode";

export const BookItemTable = (props) => {
    const { bookItems, onClickModal, sortAction, sortObject, currency } = props;
    const headers = [
        {
            id: "id",
            name: "Accession No.",
        },
        {
            id: "book_code",
            name: getFormattedMessage("books.items.input.book-code.label"),
        },
        {
            id: "edition",
            name: getFormattedMessage("books.items.input.edition.label"),
        },
        {
            id: "language_name",
            name: getFormattedMessage("books.items.select.language.label"),
        },
        {
            id: "format",
            name: getFormattedMessage("books.items.select.format.label"),
        },
        {
            id: "price",
            name: "price",
        },
        // {
        //     id: "pdf preview",
        //     name: "pdf preview",
        // },
        {
            id: "barcode",
            name: "barcode",
        },
        {
            id: "rack_number",
            name: "Rack Number",
        },
        /* {
            id: "status",
            name: "status",
        }, */
    ];
    const headerProps = {
        sortAction,
        sortObject,
        sortConfig,
        headers,
        isStatusField: true,
    };
    const renderBookItemStatus = (bookItem) => {
        const statusProps = { status: bookItem.status, item: bookItem };
        return <BookItemStatus {...statusProps} item={bookItem} />;
    };

    const onClickOpenEBook = (e_book_url) => {
        const api = e_book_url + "?token=" + localStorage.getItem(Tokens.ADMIN);
        window.open(api, "_blank");
    };

    const bookFormat = (bookFormat) => {
        let field = "books-items.filter.format.e-book.label";
        if (bookFormat === bookFormatConstant.FORMAT_HARDCOVER) {
            field = "books-items.filter.format.hardcover.label";
        } else if (bookFormat === bookFormatConstant.FORMAT_PAPERBACK) {
            field = "books-items.filter.format.paperback.label";
        }

        return getFormattedMessage(field);
    };

    return (
        <div className="overflow-auto">
            <Table
                hover
                bordered
                striped
                responsive
                size="md"
                className="book-item__table"
            >
                <thead>
                    <TableHeader {...headerProps} />
                </thead>
                <tbody>
                    {bookItems.map((bookItem) => {
                        if (bookItem.language) {
                            bookItem.language_name =
                                bookItem.language.language_name;
                        }
                        return (
                            <tr key={bookItem.id.toString()}>
                                <td className={"book-item__table-book-code"}>
                                    {bookItem.id}
                                </td>
                                <td className={"book-item__table-book-code"}>
                                    {bookItem.book_code}
                                </td>
                                <td>{bookItem.edition}</td>
                                <td>{bookItem.language_name}</td>
                                <td>
                                    {bookFormat(bookItem.format)}
                                    {bookFormatConstant.FORMAT_E_BOOK ===
                                    bookItem.format ? (
                                        <i
                                            className="fa fa-download fa-md cursor-pointer text-info ml-2"
                                            onClick={() =>
                                                onClickOpenEBook(
                                                    bookItem.e_book_url
                                                )
                                            }
                                        />
                                    ) : (
                                        ""
                                    )}
                                </td>
                                <td className="book-item__table-price">
                                    {currency}
                                    {bookItem.price === null
                                        ? "0.00"
                                        : bookItem.price}
                                </td>
                                {/* <td>
                                    {bookItem.pdf_preview_file
                                        ? "Available"
                                        : "Unavailable"}
                                </td> */}

                                <td className={"book-item__table-book-code"}>
                                    {bookItem.book_code ? (
                                        <Barcode value={bookItem.book_code} />
                                    ) : (
                                        "Unavailable"
                                    )}
                                </td>
                                <td>
                                    <span>
                                        {bookItem.rack_number === null
                                            ? "Unavailable"
                                            : bookItem.rack_number}
                                    </span>
                                </td>
                                <td className="book-item__table-status">
                                    {renderBookItemStatus(bookItem)}
                                </td>
                                <td className="text-center book-item__table-action">
                                    <ModalAction
                                        onOpenModal={onClickModal}
                                        item={bookItem}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

BookItemTable.propTypes = {
    sortObject: PropTypes.object,
    bookItems: PropTypes.array,
    currency: PropTypes.string,
    sortAction: PropTypes.func,
    onClickModal: PropTypes.func,
};

export default BookItemTable;
