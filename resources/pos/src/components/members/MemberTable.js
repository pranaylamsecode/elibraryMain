import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Spinner } from "reactstrap";
import "./Members.scss";
import { publicImagePathURL } from "../../appConstant";
import { Routes, icon } from "../../constants";
import { storageKey } from "../../constants";
import ModalAction from "../../shared/action-buttons/ModalAction";
import ToggleSwitch from "../../shared/components/ToggleSwitch";
import ReactDataTable from "../../shared/table/ReactDataTable";
import {
    getFormattedMessage,
    getFormattedOptions,
} from "../../shared/sharedMethod";
import { getAvatarName } from "../../shared/sharedMethod";
import { meberSendMail } from "../../admin/store/actions/memberAction";
import { useNavigate } from "react-router-dom";
const MemberTable = (props) => {
    const navigate = useNavigate();
    const {
        members,
        membershipPlans,
        onClickModal,
        setActiveInactive,
        history,
        isLoading,
        totalRecord,
        onChangeData,
        meberSendMail,
    } = props;
    const membershipPlansOptions = getFormattedOptions(membershipPlans);

    const onClickSendMail = (id) => {
        meberSendMail(id);
    };

    console.log({ totalRecord });

    const itemsValue = members.length
        ? members.map((member) => {
              if (member) {
                  return {
                      id: member.id,
                      image_path: member.image_path,
                      first_name: member.first_name,
                      last_name: member.last_name,
                      email: member.email,
                      phone: member.phone,
                      email_verified_at: member?.email_verified_at,
                      membership_plan_name: member.membership_plan_name,
                      status: member.status,
                      is_active: member.is_active,
                  };
              }
          })
        : [];

    const columns = [
        {
            name: getFormattedMessage("profile.title"),
            selector: (row) => row.image_path,
            width: "95px",
            cell: (row) => {
                const imageUrl = row.image_path ? row.image_path : null;
                if (imageUrl)
                    return (
                        <img
                            src={imageUrl ? imageUrl : null}
                            className="member-table-row__profile-img"
                            alt={imageUrl}
                        />
                    );
                return (
                    <div className="user__avatar">
                        <span>
                            {getAvatarName(
                                row.first_name + " " + row.last_name
                            )}
                        </span>
                    </div>
                );
            },
        },
        {
            name: getFormattedMessage("react-data-table.name.column.label"),
            selector: (row) => row.first_name,
            sortField: "first_name",
            sortable: true,
            cell: (row) => <span>{row.first_name + " " + row.last_name}</span>,
        },
        {
            name: getFormattedMessage("profile.input.email.label"),
            selector: (row) => row.email,
            sortField: "email",
            sortable: true,
        },
        {
            name: getFormattedMessage("profile.input.phone.label"),
            selector: (row) => row.phone,
            sortField: "phone",
            sortable: true,
            cell: (row) => {
                return <span>{row.phone ? row.phone : "N/A"}</span>;
            },
        },
        {
            name: getFormattedMessage("members.select.plan.label"),
            selector: (row) => row.membership_plan_name,
            sortField: "membership_plan_name",
            sortable: true,
            cell: (row) => {
                row.membership_plan_name = row.membership_plan_name
                    ? row.membership_plan_name
                    : "N/A";
                return <span>{row.membership_plan_name}</span>;
            },
        },
        {
            name: getFormattedMessage("react-data-table.status.column"),
            selector: (row) => row.status,
            width: "90px",
            center: true,
            cell: (row) => (
                <div className="member-form__switch">
                    <Field
                        name="is_active"
                        checked={row.is_active}
                        component={ToggleSwitch}
                        onChange={() => onChecked(row)}
                    />
                </div>
            ),
        },
        {
            name: getFormattedMessage("members.is-email-verified.label"),
            selector: (row) => row.status,
            width: "130px",
            center: true,
            cell: (row) =>
                row.email_verified_at === null ? (
                    <Button
                        color="primary"
                        size="sm"
                        onClick={() => onClickSendMail(row.id)}
                    >
                        <i className="fa fa-envelope fa-sm text-white" />
                    </Button>
                ) : (
                    <i className="fa fa-check-circle fa-lg text-success" />
                ),
        },
        {
            name: getFormattedMessage("react-data-table.action.column"),
            selector: (row) => row.id,
            center: true,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "120px",
            cell: (row) => (
                <ModalAction
                    onOpenModal={onClickModal}
                    isHideDetailIcon={false}
                    goToDetailScreen={goToMemberDetailPage}
                    item={row}
                />
            ),
        },
    ];

    const onChecked = (member) => {
        setActiveInactive(member.id, member.is_active);
    };

    const goToMemberDetailPage = (memberId) => {
        navigate(`/admin${Routes.MEMBERS + memberId}/details`);
    };

    const getStoredFilterKey = () => {
        const item = JSON.parse(localStorage.getItem(storageKey.MEMBERS));
        if (item) {
            const membershipPlan = membershipPlansOptions.find(
                (membershipPlan) => membershipPlan.id === item.id
            );
            if (membershipPlan) {
                return membershipPlan;
            }
        }
        return membershipPlansOptions[0];
    };

    return (
        <ReactDataTable
            items={itemsValue}
            columns={columns}
            emptyStateMessageId="members.empty-state.title"
            emptyNotFoundStateMessageId="member.not-found.empty-state.title"
            isShowFilterField={false}
            filterOptions={membershipPlansOptions}
            filterKey={getStoredFilterKey()}
            loading={isLoading}
            totalRows={totalRecord}
            onChange={onChangeData}
            filterKeyName={storageKey.MEMBERS}
            icon={icon.MEMBER}
        />
    );
};

MemberTable.propTypes = {
    history: PropTypes.object,
    members: PropTypes.array,
    membershipPlans: PropTypes.array,
    totalRecord: PropTypes.number,
    isLoading: PropTypes.bool,
    onChangeData: PropTypes.func,
    onClickModal: PropTypes.func,
    setActiveInactive: PropTypes.func,
};

const memberForm = reduxForm({ form: "memberForm" })(MemberTable);
export default connect(null, { meberSendMail })(memberForm);
