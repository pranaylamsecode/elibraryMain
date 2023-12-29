import { membershipPlanActionType, toastType } from "../../constants";
import apiConfig from "../../config/apiConfig";
import { setLoading } from "../../../store/action/progressBarAction";
import { addToast } from "../../../store/action/toastAction";
import { toggleModal } from "../../../store/action/modalAction";
import { getFormattedMessage } from "../../../shared/sharedMethod";
import { apiBaseURL } from "../../../constants";

export const fetchMembershipPlans =
    (isLoading = false) =>
    async (dispatch) => {
        dispatch(setLoading(true));
        await apiConfig
            .get(apiBaseURL.MEMBER_PLAN)
            .then((response) => {
                if (response) {
                    dispatch({
                        type: membershipPlanActionType.FETCH_MEMBERSHIP_PLANS,
                        payload: response.data.data,
                    });
                    dispatch(setLoading(false));
                }
            })
            .catch(({ response }) => {
                if (response) {
                    dispatch(
                        addToast({
                            text: response.data.message,
                            type: toastType.ERROR,
                        })
                    );
                    dispatch(setLoading(false));
                }
            });
    };

export const addMembershipPlan = (membershipPlan) => async (dispatch) => {
    dispatch(setLoading(true));
    await apiConfig
        .post(apiBaseURL.MEMBER_PLAN, membershipPlan)
        .then((response) => {
            if (response) {
                dispatch({
                    type: membershipPlanActionType.ADD_MEMBERSHIP_PLAN,
                    payload: response.data.data,
                });
                dispatch(
                    addToast({
                        text: getFormattedMessage(
                            "membership-plans.success.create.message"
                        ),
                    })
                );
                dispatch(toggleModal());
                dispatch(setLoading(false));
            }
        })
        .catch(({ response }) => {
            if (response) {
                dispatch(
                    addToast({
                        text: response.data.message,
                        type: toastType.ERROR,
                    })
                );
                dispatch(setLoading(false));
            }
        });
};

export const editMembershipPlan =
    (membershipPlanId, membershipPlan) => async (dispatch) => {
        dispatch(setLoading(true));
        await apiConfig
            .put(
                apiBaseURL.MEMBER_PLAN + "/" + membershipPlanId,
                membershipPlan
            )
            .then((response) => {
                if (response) {
                    dispatch({
                        type: membershipPlanActionType.EDIT_MEMBERSHIP_PLAN,
                        payload: response.data.data,
                    });
                    dispatch(
                        addToast({
                            text: getFormattedMessage(
                                "membership-plans.success.edit.message"
                            ),
                        })
                    );
                    dispatch(toggleModal());
                    dispatch(setLoading(false));
                }
            })
            .catch(({ response }) => {
                if (response) {
                    dispatch(
                        addToast({
                            text: response.data.message,
                            type: toastType.ERROR,
                        })
                    );
                    dispatch(setLoading(false));
                }
            });
    };

export const deleteMembershipPlan = (membershipPlanId) => async (dispatch) => {
    dispatch(setLoading(true));
    await apiConfig
        .delete(apiBaseURL.MEMBER_PLAN + "/" + membershipPlanId)
        .then((response) => {
            if (response) {
                dispatch({
                    type: membershipPlanActionType.DELETE_MEMBERSHIP_PLAN,
                    payload: membershipPlanId,
                });
                dispatch(
                    addToast({
                        text: getFormattedMessage(
                            "membership-plans.success.delete.message"
                        ),
                    })
                );
                dispatch(toggleModal());
                dispatch(setLoading(false));
            }
        })
        .catch(({ response }) => {
            if (response) {
                dispatch(
                    addToast({
                        text: response.data.message,
                        type: toastType.ERROR,
                    })
                );
                dispatch(setLoading(false));
            }
        });
};
