import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import Member from "./MemberTable";
import "./Members.scss";
import { FilterOption, Routes } from "../../constants";
// import ProgressBar from "../../../shared/progress-bar/ProgressBar";
// import HeaderTitle from "../../../shared/header-title/HeaderTitle";
import { getFormattedMessage } from "../../shared/sharedMethod";
import { toggleModal } from "../../../src/store/action/modalAction";
import {
    activeInactiveMember,
    fetchMembers,
} from "../../admin/store/actions/memberAction";
import { fetchMembershipPlans } from "../../admin/store/actions/membershipPlanAction";
import { Link } from "react-router-dom";
import DeleteMember from "./DeleteMember";

import TabTitle from "../../shared/tab-title/TabTitle";
import TopProgressBar from "../../shared/components/loaders/TopProgressBar";
import MasterLayout from "../MasterLayout";
import { placeholderText } from "../../shared/sharedMethod";
import { useNavigate } from "react-router-dom";
const Members = (props) => {
    const navigate = useNavigate();
    const {
        members,
        fetchMembers,
        toggleModal,
        history,
        isLoading,
        totalRecord,
        membershipPlans,
        activeInactiveMember,
        fetchMembershipPlans,
    } = props;
    const [member, setMember] = useState(null);
    const cardModalProps = { member, toggleModal };
    const intl = useIntl();

    useEffect(() => {
        fetchMembershipPlans();
    }, []);

    const onChangeData = (filter) => {
        fetchMembers(filter, true);
    };

    const setActiveInactive = (id, isActive) => {
        if (id) activeInactiveMember(id, isActive);
    };

    const onClickModal = (isEdit, member = null, isDelete = false) => {
        if (isDelete) {
            setMember(member);
            toggleModal();
        } else {
            navigate("/admin" + Routes.MEMBERS + member.id + "/edit");
        }
    };

    const cardBodyProps = {
        members,
        setActiveInactive,
        onClickModal,
        history,
        isLoading,
        totalRecord,
        onChangeData,
        membershipPlans: [
            {
                id: 0,
                name: intl.formatMessage({ id: FilterOption.ALL }),
                defaultValue: "",
            },
            ...membershipPlans,
        ],
    };

    return (
        <MasterLayout>
            <TopProgressBar />
            <TabTitle title={placeholderText("members.title")} />
            <Row className="animated fadeIn">
                <Col sm={12} className="mb-2">
                    {/* <ProgressBar /> */}
                    {/* <HeaderTitle title="Members" /> */}
                    <h5 className="page-heading">
                        {getFormattedMessage("members.title")}
                    </h5>
                    <div className="d-flex justify-content-end">
                        <Link
                            to={`/admin${Routes.MEMBERS}new`}
                            size="md"
                            className="btn btn-primary ml-2 text-white"
                        >
                            {placeholderText("members.modal.add.title")}
                        </Link>
                    </div>
                </Col>
                <Col sm={12}>
                    <div className="sticky-table-container">
                        <Card>
                            <CardBody>
                                <Member {...cardBodyProps} />
                                <DeleteMember {...cardModalProps} />
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </MasterLayout>
    );
};

Members.propTypes = {
    history: PropTypes.object,
    members: PropTypes.array,
    membershipPlans: PropTypes.array,
    totalRecord: PropTypes.number,
    isLoading: PropTypes.bool,
    fetchMembers: PropTypes.func,
    activeInactiveMember: PropTypes.func,
    fetchMembershipPlans: PropTypes.func,
};

const mapStateToProps = (state) => {
    const { members, isLoading, totalRecord, membershipPlans } = state;
    return {
        members,
        isLoading,
        totalRecord,
        membershipPlans: [],
        // Object.values(membershipPlans),
    };
};

export default connect(mapStateToProps, {
    fetchMembers,
    activeInactiveMember,
    fetchMembershipPlans,
    toggleModal,
})(Members);
