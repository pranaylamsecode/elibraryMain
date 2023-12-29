import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Row, Col, Card, CardBody, Button, Form } from "reactstrap";

import ProgressBar from "../../shared/progress-bar/ProgressBar";
import HeaderTitle from "../../shared/header-title/HeaderTitle";
import { getCurrentMember, getFormattedDate } from "../../shared/sharedMethod";

import { fetchEBookRequests } from "../../member/store/actions/ebookAction";

import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router";
import CustomInputGroup from "../../shared/components/CustomInputGroup";
import { Field, reduxForm } from "redux-form";
import {
    ebookSubscribe,
    fetchEbookSubscription,
} from "../../member/store/actions/ebookSubscriptionAction";
import moment from "moment";

const EbookSubscription = (props) => {
    const {
        fetchEBookRequests,
        ebooks,
        ebookSubscribe,
        fetchEbookSubscription,
        ebookSubscription,
    } = props;
    const dispatch = useDispatch();
    const member = getCurrentMember();
    const navigate = useNavigate();
    const { id } = useParams();

    const loadScript = (url) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const onEbookSub = async () => {
        // const res = await loadScript(
        //     "https://checkout.razorpay.com/v1/checkout.js"
        // );

        // if (!res) {
        //     alert("Razorpay SDK failed to load. Are you online?");
        //     return;
        // }

        // const options = {
        //     key: process.env.MIX_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        //     amount: process.env.MIX_AMOUNT * 100,
        //     currency: "INR",
        //     image: location.hostname + "images/elibrary.png",
        //     name: "Nagpur Elibrary",
        //     description: "Test Transaction",
        //     prefill: {
        //         name: "Nagpur Elibrary",
        //         email: "example@example.com",
        //         contact: "9999999999",
        //     },
        //     notes: {
        //         address: "Example Corporate Office",
        //     },
        //     prefill: {
        //         name: "Nagpur Elibrary",
        //         email: "test@example.com",
        //         contact: "9999999999",
        //     },
        //     theme: {
        //         color: "#61dafb",
        //     },
        //     handler: (response) => {
        //         if (response) {
        //             const esubMember =
        //                 ebookSubscription.length > 0 &&
        //                 ebookSubscription.find(
        //                     (esub) => esub.member_id === member.id
        //                 );

        //             ebookSubscribe(
        //                 {
        //                     issued_on: moment().format("YYYY-MM-DD"),
        //                     returned_on: moment()
        //                         .add(10, "days")
        //                         .format("YYYY-MM-DD"),
        //                     member_id: member.id,
        //                     ebook_id: id,
        //                     razorpay_payment_id: response.razorpay_payment_id,
        //                     amount: 10,
        //                     renew:
        //                         esubMember &&
        //                         esubMember.returned_on <
        //                             moment().format("YYYY-MM-DD")
        //                             ? true
        //                             : false,
        //                 },
        //                 navigate
        //             );
        //             navigate(-1);
        //         }
        //     },
        // };

        // const paymentObject = new window.Razorpay(options);
        // if (member) {
        //     paymentObject.open();
        // }

        const esubMember =
            ebookSubscription.length > 0 &&
            ebookSubscription.find((esub) => esub.member_id === member.id);

        ebookSubscribe(
            {
                issued_on: moment().format("YYYY-MM-DD"),
                returned_on: moment().add(10, "days").format("YYYY-MM-DD"),
                member_id: member.id,
                ebook_id: id,
                // razorpay_payment_id: response.razorpay_payment_id,
                razorpay_payment_id: "NA",
                amount: 10,
                renew:
                    esubMember &&
                    esubMember.returned_on < moment().format("YYYY-MM-DD")
                        ? true
                        : false,
            },
            navigate
        );
        navigate("/lms/e-books");
    };

    useEffect(() => {
        fetchEBookRequests();
        fetchEbookSubscription();
    }, []);

    return (
        <>
            <ProgressBar />
            <Header />
            <section className="ebook_subscription">
                <div className="container">
                    <div className="animated fadeIn">
                        <div className="section-title-center text-center">
                            <h2 className="display-6">E-Book Subscription</h2>
                            <div className="section-divider divider-traingle"></div>
                        </div>

                        <div className="common-container">
                            <h4
                                style={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                }}
                            >
                                The Book Will be Subscribed from{" "}
                                <strong>{moment().format("MMM Do YY")}</strong>{" "}
                                to{" "}
                                <strong>
                                    {moment()
                                        .add(10, "days")
                                        .format("MMM Do YY")}
                                </strong>
                            </h4>
                            {/* <h4
                                style={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                }}
                            >
                                Amount generated :{" "}
                                <strong>
                                    <i className="fa fa-inr"></i> 10
                                </strong>
                            </h4> */}
                            <Button
                                style={{
                                    margin: "0 auto",
                                    display: "block",
                                    minWidth: "115px",
                                }}
                                className="frontend-btn btn btn-info"
                                onClick={() => onEbookSub()}
                            >
                                <span>Subscribe</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const mapStateToProps = (state) => {
    const { ebooks, ebookSubscription } = state;

    return { ebooks, ebookSubscription };
};

export default connect(mapStateToProps, {
    fetchEBookRequests,
    fetchEbookSubscription,
    ebookSubscribe,
})(EbookSubscription);
