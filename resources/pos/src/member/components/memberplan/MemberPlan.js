import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import ProgressBar from '../../../shared/progress-bar/ProgressBar';
import HeaderTitle from "../../../shared/header-title/HeaderTitle";
import { getFormattedMessage } from "../../../shared/sharedMethod";
import MemberPlanForm from "./MemberPlanForm";


const MemberPlan = (props) => {
    const { membershipPlans } = props
    if (!membershipPlans) {
        return <ProgressBar />;
    }

    return (


        <div className="animated fadeIn">
            {/* <HeaderTitle title="Membership Plan" />
            <Row>
                <Col sm={12} className="mb-2 d-flex justify-content-between">
                    <h5 className="pull-left text-dark">{getFormattedMessage("membership-plan.title")}</h5>
                </Col>
                <Col sm={12}>
                    <div className="sticky-table-container">
                        <Card>
                            <CardBody>
                                <div className="w-100">
                                    <MemberPlanForm />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row> */}
            <section id="pricing" className="section-padding pricing">
                <div className="container">
                    <div className="section-title-center text-center">
                        <span>
                            PRICING</span>
                        <h2 className="display-6">
                            Pricing based on their version</h2>
                        <div className="section-divider divider-traingle">

                        </div>
                    </div>

                    <MemberPlanForm />

                </div>
            </section>
        </div>
    )
};

MemberPlan.propTypes = {
    history: PropTypes.object,
    fetchMembershipPlans: PropTypes.func,
};

const mapStateToProps = (state) => {
    const { membershipPlans } = state;
    return { membershipPlans }
};

export default connect(mapStateToProps, null)(MemberPlan);
