import { membershipPlanActionType } from "../../constants";
import apiConfig from "../../config/apiConfig";
import { setLoading } from "../../../store/action/progressBarAction";
import { addToast } from "../../../store/action/toastAction";
import { toastType } from "../../constants";
import { apiBaseURL } from "../../../constants";
import { setUserProfile } from "../../../store/action/localStorageAction";

export const createMembershipPaymentSession =
    (plan_id, navigate) => async (dispatch) => {
        dispatch(setLoading(true));
        await apiConfig
            .post(apiBaseURL.CREATE_MEMBERSHIP_PAYMENT_SESSION + `/${plan_id}`)
            .then((response) => {
                if (response) {
                    localStorage.setItem(
                        "member",
                        btoa(JSON.stringify(response.data.message.user))
                    );
                    dispatch({
                        type: membershipPlanActionType.FETCH_SESSION_ID,
                        payload: response.data.message.sessionId,
                    });
                    dispatch(
                        addToast({
                            text: "Subscription Created Successfully",
                        })
                    );
                    dispatch(setLoading(false));
                    navigate("/");
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
                }
                dispatch(setLoading(false));
            });
    };
