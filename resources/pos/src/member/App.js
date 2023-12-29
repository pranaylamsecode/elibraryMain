import React, { useEffect, lazy } from "react";
import PropTypes from "prop-types";
import { Route, Routes as Switch, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import LocaleData from "./locales";
import { fetchSettings } from "./store/actions/settingAction";
import { settingsKey } from "./constants";
import {
    appSettingsKey,
    LocalStorageKey,
    Routes,
    Tokens,
} from "./constants/index";
import { publicImagePath } from "../appConstant";
import ProgressBar from "../shared/progress-bar/ProgressBar";
import Toasts from "../shared/toast/Toasts";
import { addRTLSupport } from "../shared/sharedMethod";
import { fetchAppSetting } from "../store/action/appSettingAction";
import { getUserProfile } from "../store/action/localStorageAction";
import TestingApp from "../components/newMemberApp/TestingApp";
import UserBookDetails from "../components/newMemberApp/UserBookDetails";
import Terms from "../components/newMemberApp/Terms";
import PrivacyPolicy from "../components/newMemberApp/Privacy_policy";

import About from "../components/newMemberApp/About";
import ContactUs from "../components/newMemberApp/ContactUs";
import Books from "../components/newMemberApp/Books";
import EbookSubscription from "../components/newMemberApp/EbookSubscription";
import PDFReader from "../components/newMemberApp/PdfReader/PDFReader";
import EbookDetails from "../components/newMemberApp/EbookDetails";

import Layout from "./components/layout";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Home from "./components/home/Home";
import Registration from "./components/auth/registration/Registration";

import Desclaimer from "../components/newMemberApp/Desclaimer";
import SearchCards from "../components/newMemberApp/SearchCards";

const MemberApp = (props) => {
    const {
        getUserProfile,
        settings,
        fetchAppSetting,
        appSetting,
        member,
        fetchSettings,
    } = props;
    const messages = settings[settingsKey.LANGUAGE]
        ? LocaleData[settings[settingsKey.LANGUAGE].value]
        : LocaleData[settingsKey.DEFAULT_LOCALE];
    const appName = appSetting[appSettingsKey.LIBRARY_NAME]
        ? appSetting[appSettingsKey.LIBRARY_NAME].value
        : null;
    const appLogo = appSetting[appSettingsKey.LIBRARY_LOGO]
        ? appSetting[appSettingsKey.LIBRARY_LOGO].logo_url
        : publicImagePath.APP_LOGO;
    const routeProps = { appLogo, appName, member };
    addRTLSupport(
        settings[settingsKey.LANGUAGE]
            ? settings[settingsKey.LANGUAGE].value
            : settingsKey.DEFAULT_LOCALE
    );

    useEffect(() => {
        fetchAppSetting();
        getUserProfile(LocalStorageKey.MEMBER);

        if (localStorage.getItem(Tokens.MEMBER)) {
            fetchSettings();
        }
    }, []);

    return (
        <IntlProvider locale={settingsKey.DEFAULT_LOCALE} messages={messages}>
            <React.Suspense fallback={<ProgressBar />}>
                <Switch>
                    {/*<Route exact={true} path={Routes.APP_HOME} name="Home" render={props => <Home {...props}/>}/>*/}
                    {/* <Route path="/*" element={<ChildrenRoutes />} /> */}

                    <Route
                        path="/"
                        name="home"
                        exact
                        element={<TestingApp {...props} />}
                    />

                    <Route path="/view-book/:id" element={<PDFReader />} />
                    <Route
                        path="/books-list"
                        name="Books List"
                        exact
                        element={<Books />}
                    />

                    <Route
                        path="/about"
                        name="About Page"
                        exact
                        element={<About />}
                    />

                    <Route
                        path="/contact-us"
                        name="Contact Page"
                        exact
                        element={<ContactUs />}
                    />

                    <Route
                        path="/ebook-details/:id/:library_id"
                        name="Ebook"
                        exact
                        element={<EbookDetails />}
                    />

                    <Route
                        path="/disclaimer"
                        name="Desclaimer"
                        exact
                        element={<Desclaimer />}
                    />

                    <Route
                        path="/search-results"
                        name="search-results"
                        exact
                        element={<SearchCards />}
                    />

                    <Route
                        path="/terms"
                        name="About Page"
                        exact
                        element={<Terms />}
                    />
                    <Route
                        path="/privacy-policy"
                        name="Privacy policy"
                        exact
                        element={<PrivacyPolicy />}
                    />

                    <Route
                        path="/search/:search?/:id?/:library_id?"
                        name="home"
                        exact
                        element={<UserBookDetails />}
                    />
                    <Route
                        path="/lms/ebook-subscription/:id"
                        name="home"
                        exact
                        element={<EbookSubscription />}
                    />

                    <Route
                        path={Routes.MEMBER_LOGIN}
                        name="Login"
                        exact
                        element={<Login {...props} />}
                    />
                    <Route
                        path={Routes.MEMBER_REGISTRATION}
                        name="registration"
                        exact
                        element={<Registration {...props} />}
                    />
                    <Route
                        path={Routes.MEMBER_FORGOT_PASSWORD}
                        name="Forgot Password"
                        exact
                        element={<ForgotPassword {...props} />}
                    />
                    <Route
                        path={Routes.MEMBER_RESET_PASSWORD}
                        name="Reset Password"
                        exact
                        element={<ResetPassword {...props} />}
                    />
                    <Route
                        path="/lms/*"
                        element={<Layout {...props} {...routeProps} />}
                    />
                    {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
                </Switch>
                <Toasts
                    language={
                        settings[settingsKey.LANGUAGE]
                            ? settings[settingsKey.LANGUAGE].value
                            : null
                    }
                />
            </React.Suspense>
        </IntlProvider>
    );
};

MemberApp.propTypes = {
    member: PropTypes.object,
    appSetting: PropTypes.object,
    settings: PropTypes.object,
    getUserProfile: PropTypes.func,
    fetchAppSetting: PropTypes.func,
    sortAction: PropTypes.func,
    fetchSettings: PropTypes.func,
};

const mapStateToProps = (state) => {
    const { profile, appSetting, settings } = state;
    return {
        member: profile,
        appSetting,
        settings,
    };
};

export default connect(mapStateToProps, {
    fetchSettings,
    getUserProfile,
    fetchAppSetting,
})(MemberApp);
