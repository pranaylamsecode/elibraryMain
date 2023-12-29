import React, { useEffect } from "react";
import { Col, Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    dateFormatter,
    getFormattedMessage,
    getFormattedOptions,
} from "../../../shared/sharedMethod";
import ProgressBar from "../../../shared/progress-bar/ProgressBar";
import { Button } from "react-bootstrap";
import Transactions from "../transactions/Transactions";
import { fetchCurrentPlanDetails } from "../../store/actions/currentPlanAction";
import { Routes } from "../../constants/index";
import { useNavigate } from "react-router-dom";
import { fetchAllSettings } from "../../store/actions/allSettingsAction";
import { membershipPlanFrequencyOptions } from "../../constants";
import currencyFile from "../currencies/currencies.json";
import { fetchTransactions } from "../../store/actions/transactionsAction";

const CurrentPlanForm = (props) => {
    const {
        currentPlanDetails,
        fetchCurrentPlanDetails,
        isLoading,
        allSettings,
        fetchAllSettings,
    } = props;
    const navigate = useNavigate();
    const membershipFrequencyOptions = getFormattedOptions(
        membershipPlanFrequencyOptions
    );

    useEffect(() => {
        fetchCurrentPlanDetails();
        fetchAllSettings();
    }, []);

    const onUpgradeClick = () => {
        navigate(Routes.MEMBER_PLAN);
    };

    const renderMemberShipPlanFrequency = () => {
        const frequency = membershipFrequencyOptions.filter(
            (fre) => fre.id === currentPlanDetails?.plan_frequency
        );
        return frequency[0]?.name;
    };

    const getCurrency = () => {
        const cure = allSettings?.currency?.currency_symbol;
        return cure;
    };

    console.log({ currentPlanDetails });

    return (
        <div>
            <ProgressBar />
            <div className="container">
                <div className="common-container plan-details">
                    <Col xs={12}>
                        <Card>
                            <CardBody className="p-5">
                                <div className="row d-flex align-items-center justify-content-between mb-4">
                                    <div className="col-md-6">
                                        <h3>
                                            {
                                                currentPlanDetails
                                                    ?.subscription_plan?.name
                                            }
                                        </h3>
                                        <h5 className="text-success">
                                            {getFormattedMessage(
                                                "active-till.title"
                                            )}{" "}
                                            {dateFormatter(
                                                currentPlanDetails?.end_date
                                            )}
                                        </h5>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <Button
                                            className="btn btn-primary mx-auto text-white btn-lg fs-6"
                                            onClick={onUpgradeClick}
                                        >
                                            {getFormattedMessage(
                                                "upgrade-plan.title"
                                            )}
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="fs-4">
                                        {currentPlanDetails.id &&
                                            getCurrency(
                                                currentPlanDetails.id
                                            )}{" "}
                                        {
                                            currentPlanDetails
                                                ?.subscription_plan?.price
                                        }
                                        {currentPlanDetails ? "/ " : ""}
                                        {renderMemberShipPlanFrequency()}
                                    </h4>
                                    <h6 className="text-secondary">
                                        {getFormattedMessage(
                                            "subscribed-date.title"
                                        )}
                                        :{" "}
                                        {dateFormatter(
                                            currentPlanDetails?.start_date
                                        )}
                                    </h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </div>
            <Col sm={12}>
                <div className="sticky-table-container">
                    <Card>
                        <CardBody>
                            <div className="w-100">
                                <Transactions />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Col>
        </div>
    );
};

CurrentPlanForm.propTypes = {
    currentPlanDetails: PropTypes.object,
    fetchCurrentPlanDetails: PropTypes.func,
};

const mapStateToProps = (state) => {
    const { currentPlanDetails, isLoading, allSettings, transactions } = state;
    return { currentPlanDetails, isLoading, allSettings, transactions };
};

export default connect(mapStateToProps, {
    fetchCurrentPlanDetails,
    fetchAllSettings,
})(CurrentPlanForm);
