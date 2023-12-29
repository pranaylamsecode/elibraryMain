import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import "./MemberPlan.scss";
import { fetchMembershipPlans } from "../../store/actions/membershipPlanAction";
import { connect, useDispatch } from "react-redux";
import { createMembershipPaymentSession } from "../../store/actions/MembershipPaymentAction";
import {
    getFormattedMessage,
    getFormattedOptions,
} from "../../../shared/sharedMethod";
import { loadStripe } from "@stripe/stripe-js";
import { setLoading } from "../../../store/action/progressBarAction";
import ProgressBar from "../../../shared/progress-bar/ProgressBar";
import { fetchAllSettings } from "../../store/actions/allSettingsAction";
import { fetchCurrentPlanDetails } from "../../store/actions/currentPlanAction";
import { membershipPlanFrequencyOptions } from "../../constants";
import { Routes } from "../../constants/index";
import { useNavigate } from "react-router-dom";

const MemberPlanForm = (props) => {
    const {
        membershipPlans,
        fetchMembershipPlans,
        createMembershipPaymentSession,
        paymentSessionId,
        isLoading,
        fetchAllSettings,
        allSettings,
        fetchCurrentPlanDetails,
        currentPlanDetails,
    } = props;
    const [monthly, setMonthly] = useState(false);
    const dispatch = useDispatch();
    const [pubKey, setPubKey] = useState();
    const frequency = getFormattedOptions(membershipPlanFrequencyOptions);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllSettings();
        fetchCurrentPlanDetails();
    }, []);

    // useEffect(() => {
    //     if (allSettings) {
    //         setPubKey(
    //             allSettings.stripe_key ? allSettings.stripe_key.value : null
    //         );
    //     }
    // }, [allSettings]);

    useEffect(() => {
        setTimeout(() => {
            const frequency = monthly === false ? 1 : 2;
            fetchMembershipPlans(frequency);
        }, 2000);
    }, [monthly]);

    // useEffect(() => {
    //     if (paymentSessionId) {
    //         callToStripe(pubKey);
    //     }
    // }, [paymentSessionId]);

    const onSwitchChange = (e) => {
        const value = e.target.checked;
        setMonthly(value);
    };

    const clickOnTryIt = (id) => {
        // createMembershipPaymentSession(id, navigate);
        navigate(`/lms/member-plan/method/${id}`);
    };

    const callToStripe = async (pubKey) => {
        const stripe = await loadStripe(`${pubKey}`);
        const { err } = await stripe.redirectToCheckout({
            sessionId: paymentSessionId,
        });
        dispatch(setLoading(false));
    };

    const planDate = currentPlanDetails?.end_date;
    const d1 = new Date();
    const d2 = new Date(planDate);

    return (
        <div>
            <ProgressBar />

            <div className="top mb-4">
                <div className="toggle-btn">
                    <span style={{ margin: "0.8em" }}>
                        {getFormattedMessage("membership-plan.monthly.title")}
                    </span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            id="checbox"
                            onChange={(e) => onSwitchChange(e)}
                        />
                        <span className="slider round" />
                    </label>
                    <span style={{ margin: "0.8em" }}>
                        {getFormattedMessage("membership-plan.yearly.title")}
                    </span>
                </div>
            </div>

            <div className="row align-items-center justify-content-center">
                {membershipPlans.length ? (
                    membershipPlans.toReversed().map((plan) => {
                        return (
                            // <Col
                            //     xs={12}
                            //     xl={3}
                            //     md={6}
                            //     lg={6}
                            //     className="pricing-card"
                            //     key={plan.id}
                            // >
                            //     <h3 className="pricing-card-header">
                            //         {plan.name}
                            //     </h3>
                            //     <div className="price">
                            //         <span className="price-span">
                            //             {allSettings.currency
                            //                 ? allSettings.currency
                            //                       .currency_symbol
                            //                 : "$"}
                            //         </span>
                            //         {plan.price}
                            //         <span className="year">
                            //             {monthly === true
                            //                 ? "/" + frequency[1]?.name
                            //                 : "/" + frequency[0]?.name}
                            //         </span>
                            //     </div>
                            //     <div className="plan-des">
                            //         <ul className="text-left text-white ">
                            //             {plan.description ? (
                            //                 <li>
                            //                     <span className="mr-3">
                            //                         <i className="fas fa-check" />
                            //                     </span>
                            //                     {plan.description}
                            //                 </li>
                            //             ) : (
                            //                 ""
                            //             )}
                            //         </ul>
                            //     </div>
                            //     <button
                            //         onClick={(e) => {
                            //             clickOnTryIt(plan.id);
                            //         }}
                            //         className={`${
                            //             currentPlanDetails?.plan_id === plan.id
                            //                 ? "active-btn"
                            //                 : "order-btn"
                            //         }`}
                            //         disabled={d1.getTime() < d2.getTime()}
                            //     >
                            //         {currentPlanDetails?.plan_id === plan.id
                            //             ? "Active"
                            //             : getFormattedMessage(
                            //                   "membership-plan.choose-it.title"
                            //               )}
                            //     </button>
                            // </Col>

                            <div
                                className="col-md-6 col-lg-4 mb-4 mb-lg-0 aos-init"
                                key={plan.id}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="150"
                            >
                                <div className="pricing__item translateEffect1 active">
                                    <h3 className="pricing__title">
                                        {plan.name}
                                    </h3>
                                    <h3 className="pricing__price test">
                                        {allSettings.currency
                                            ? allSettings.currency
                                                  .currency_symbol
                                            : "$"}{" "}
                                        {plan.price}
                                        <span>
                                            {monthly === true
                                                ? "/" + frequency[1]?.name
                                                : "/" + frequency[0]?.name}
                                        </span>
                                    </h3>
                                    <ul className="pricing__list">
                                        {plan.description ? (
                                            <li>{plan.description}</li>
                                        ) : (
                                            ""
                                        )}
                                    </ul>
                                    <button
                                        onClick={(e) => {
                                            clickOnTryIt(plan.id);
                                        }}
                                        className={`btn frontend-btn ${
                                            currentPlanDetails?.plan_id ===
                                            plan.id
                                                ? ""
                                                : ""
                                        }`}
                                        disabled={d1.getTime() < d2.getTime()}
                                    >
                                        <span>
                                            {currentPlanDetails?.plan_id ===
                                            plan.id
                                                ? "Active"
                                                : getFormattedMessage(
                                                      "membership-plan.choose-it.title"
                                                  )}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="empty-plan">
                        {!isLoading ? (
                            <i className="fa fa-2x fa-ban mb-2" />
                        ) : (
                            <i className="fa fa-2x fa-spinner" />
                        )}
                        {!isLoading && (
                            <span className="empty-component__title">
                                <h5 className="ms-1">
                                    {getFormattedMessage(
                                        "membership-plan-not-available-title"
                                    )}
                                </h5>
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

MemberPlanForm.propTypes = {
    membershipPlans: PropTypes.array,
    paymentSessionId: PropTypes.string,
};

const mapStateToProps = (state) => {
    const {
        membershipPlans,
        paymentSessionId,
        isLoading,
        allSettings,
        currentPlanDetails,
    } = state;
    return {
        membershipPlans,
        paymentSessionId,
        isLoading,
        allSettings,
        currentPlanDetails,
    };
};

export default connect(mapStateToProps, {
    fetchMembershipPlans,
    createMembershipPaymentSession,
    fetchAllSettings,
    fetchCurrentPlanDetails,
})(MemberPlanForm);
