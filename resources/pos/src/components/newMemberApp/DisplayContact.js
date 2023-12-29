import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { publicImagePath } from "../../appConstant";
// import HeaderTitle from "../../shared/header-title/HeaderTitle";
import ModalAction from "../../shared/action-buttons/ModalAction";
import {
    getFormattedMessage,
    prepareFullNames,
} from "../../shared/sharedMethod";
import ReactDataTable from "../../shared/table/ReactDataTable";
import TopProgressBar from "../../shared/components/loaders/TopProgressBar";
import MasterLayout from "../MasterLayout";
import { useSelector } from "react-redux";
import TabTitle from "../../shared/tab-title/TabTitle";
import { placeholderText } from "../../shared/sharedMethod";

import { useNavigate } from "react-router-dom";
import { fetchContacts } from "../../member/store/actions/frontendContactAction";
import { storageKey } from "../../admin/constants";
import DeleteContact from "./DeleteContact";
import { toggleModal } from "../../store/action/modalAction";

const DisplayContact = (props) => {
    const navigate = useNavigate();
    const {
        isLoading,
        fetchContacts,
        frontendContact,
        totalRecord,
        toggleModal,
    } = props;

    const [contact, setContact] = useState(null);

    const cardModalProps = {
        contact,
        toggleModal,
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const onChange = (filter) => {
        // console.log("filter-onChange");
        fetchContacts(filter, navigate, true);
    };

    const onOpenModal = (contact = null) => {
        setContact(contact);
        toggleModal();
    };

    const onClickExport = () => {
        exportBook((res) => {
            if (res.url) {
                window.open(res.url, "_self");
            }
        });
    };

    const itemsValue =
        frontendContact.length >= 0
            ? frontendContact.map((contact) => {
                  return {
                      name: contact.name,
                      email: contact.email,
                      subject: contact.subject,
                      notes: contact.notes,
                      id: contact.id,
                  };
              })
            : [];

    const columns = [
        // {
        //     name: getFormattedMessage("books.table.cover.column"),
        //     selector: (row) => row.name,
        //     width: "100px",
        //     ignoreRowClick: true,
        //     allowOverflow: true,
        //     button: true,
        //     cell: (row) => {
        //         const imageUrl = row.image_path
        //             ? row.image_path
        //             : publicImagePath.BOOK_AVATAR;
        //         return (
        //             <div>
        //                 <img
        //                     onClick={() => {
        //                         openImage(imageUrl);
        //                     }}
        //                     src={imageUrl}
        //                     height="50"
        //                     alt={imageUrl}
        //                 />
        //             </div>
        //         );
        //     },
        // },
        {
            name: "NAME",
            selector: (row) => row.name,
            width: "140px",
            sortable: true,
            cell: (row) => row.name,
        },
        {
            name: "EMAIL",
            selector: (row) => row.email,
            sortable: true,
            wrap: true,
            cell: (row) => row.email,
        },
        {
            name: "SUBJECT",
            selector: (row) => row.subject,
            sortable: true,
            cell: (row) => row.subject,
        },
        {
            name: "MESSAGE",
            selector: (row) => row.notes,
            sortable: true,
            cell: (row) => row.notes,
        },
        {
            name: getFormattedMessage("react-data-table.action.column"),
            selector: (row) => row.id,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "100px",
            cell: (row) => (
                <ModalAction
                    isHideDeleteIcon={false}
                    isHideEditIcon={true}
                    isHideDetailIcon={true}
                    // goToDetailScreen={goToBookDetail}
                    onOpenModal={onOpenModal}
                    item={row}
                    isEditMode={true}
                />
            ),
        },
    ];

    return (
        <MasterLayout>
            <TopProgressBar />
            <TabTitle title={placeholderText("books.title")} />
            <Row className="animated test fadeIn">
                {/* <Col sm={12} className="mb-2">
                    <TopProgressBar />
                    <HeaderTitle title={"Books"} settings={"here"} />
                    <h5 className="page-heading">
                        {getFormattedMessage("books.title")}
                    </h5>
                    <div className="d-flex justify-content-end">
                        <Dropdown>
                            <Dropdown.Toggle
                                className="btn btn-primary ml-2 text-white"
                                id="dropdown-basic"
                            >
                                {placeholderText(
                                    "react-data-table.action.column"
                                )}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="p-0">
                                <Dropdown.Item
                                    href={`#/admin${Routes.BOOKS}new`}
                                    className="header__border"
                                >
                                    {placeholderText(
                                        "books.input.new-btn.label"
                                    )}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href={`#/admin${Routes.BOOKS}import-book`}
                                    className="header__border"
                                >
                                    {placeholderText(
                                        "books.input.import-btn.label"
                                    )}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => onClickModal()}
                                    className="header__border"
                                >
                                    {placeholderText(
                                        "books.import-file-btn.label"
                                    )}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => onClickExport()}
                                    className="header__border"
                                >
                                    {placeholderText("books.export-btn.label")}
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {importBook ? (
                        <ImportBook {...importBookModalProps} />
                    ) : null}
                    <Viewer
                        drag={false}
                        changeable={false}
                        loop={false}
                        zIndex={1100}
                        scalable={false}
                        noNavbar={true}
                        visible={visible}
                        disableMouseZoom={true}
                        onClose={() => {
                            setVisible(false);
                        }}
                        images={[{ src: imageUrl, alt: "" }]}
                    />
                </Col> */}
                <Col sm={12}>
                    <div className="sticky-table-container">
                        <Card>
                            <CardBody>
                                <ReactDataTable
                                    items={itemsValue}
                                    columns={columns}
                                    loading={isLoading}
                                    isShowFilterField={false}
                                    emptyStateMessageId="books.empty-state.title"
                                    totalRows={totalRecord}
                                    filterKeyName={"name"}
                                    // filterOptions={bookStatusFilter}
                                    emptyNotFoundStateMessageId="contact.not-found.empty-state.title"
                                    onChange={onChange}
                                    // icon={icon.BOOK}
                                />
                                <DeleteContact {...cardModalProps} />
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </MasterLayout>
    );
};

const mapStateToProps = (state) => {
    const { frontendContact, isLoading, totalRecord } = state;
    return { frontendContact, isLoading, totalRecord };
};

export default connect(mapStateToProps, { fetchContacts, toggleModal })(
    DisplayContact
);
