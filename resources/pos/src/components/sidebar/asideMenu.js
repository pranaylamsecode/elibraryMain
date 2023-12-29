import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
    MenuItem,
    Menu,
    SubMenu,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import "react-pro-sidebar/dist/css/styles.css";
import {
    getFormattedMessage,
    placeholderText,
} from "../../shared/sharedMethod";
import { useIntl } from "react-intl";
import _uniqueId from "lodash/uniqueId";

const AsideMenu = (props) => {
    const {
        asideConfig,
        frontSetting,
        isResponsiveMenu,
        menuClick,
        menuIconClick,
        isMenuCollapse,
    } = props;
    const location = useLocation();
    const intl = useIntl();
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState("");

    // search-bar handling
    const filterMenu = (asideConfig, searchTerm) => {
        if (!searchTerm) {
            return asideConfig;
        }
        return asideConfig.filter((post) => {
            if (post.newRoute || post.subTitles) {
                if (post.newRoute) {
                    const allrouth = post.newRoute.map((posts) => {
                        const postName = intl
                            .formatMessage({ id: `${posts.title}` })
                            .toLowerCase();
                        return postName.includes(searchTerm.toLowerCase());
                    });
                    return allrouth.includes(true);
                } else {
                    const allrouth = post.subTitles.map((posts) => {
                        const postName = intl
                            .formatMessage({ id: `${posts.title}` })
                            .toLowerCase();
                        return postName.includes(searchTerm.toLowerCase());
                    });
                    return allrouth.includes(true);
                }
            } else {
                const postName = intl
                    .formatMessage({ id: `${post.title}` })
                    .toLowerCase();
                return postName.includes(searchTerm.toLowerCase());
            }
        });
    };

    const filteredMenu = filterMenu(asideConfig, searchTerm);
    // side sub-menu handling
    useEffect(() => {
        if (filteredMenu) {
            var element = document.getElementsByClassName("myDIV");
            var content = document.getElementsByClassName("pro-item-content");
            filteredMenu.map((SubMenus) => {
                for (let index = 0; index < element.length; index++) {
                    if (SubMenus?.newRoute?.length) {
                        element[index].lastChild.classList.remove("closed");
                        element[index].lastChild.style.height = "auto";
                        element[index].classList.add("open");
                        element[index].classList.add("pro-active-sub-search");
                    } else {
                        element[index].lastChild.classList.add("closed");
                        element[index].classList.remove("open");
                        element[index].classList.remove(
                            "pro-active-sub-search"
                        );
                    }
                }
                for (let index = 0; index < content.length; index++) {
                    if (SubMenus.newRoute && searchTerm.length) {
                        const postName =
                            content[index].children[0]?.innerText.toLowerCase();
                        if (postName !== undefined) {
                            if (
                                postName.includes(searchTerm.toLowerCase()) ===
                                    true ||
                                postName === "reports"
                            ) {
                                const hideElement =
                                    content[index].firstChild.parentElement
                                        .parentElement.parentElement;
                                hideElement.classList.remove("notShow");
                                hideElement.classList.add("d-flex");
                            } else {
                                const hideElement =
                                    content[index].firstChild.parentElement
                                        .parentElement.parentElement;
                                hideElement.classList.remove("d-flex");
                                hideElement.classList.add("notShow");
                            }
                        }
                    } else {
                        if (!searchTerm) {
                            const showElement =
                                content[index].parentElement.parentElement;
                            showElement.classList.remove("notShow");
                        }
                    }
                }
            });
        }
    }, [filteredMenu && searchTerm.length]);

    // default open side-menu handling
    useEffect(() => {
        var content = document.getElementsByClassName("pro-item-content");
        var element = document.getElementsByClassName("myDIV");
        for (let index = 0; index < content.length; index++) {
            const hideElementOne =
                content[index].firstChild.parentElement.parentElement
                    .parentElement;
            if (
                hideElementOne.classList.value.includes(
                    "pro-menu-item d-flex flex-column active"
                )
            ) {
                let closedElement =
                    hideElementOne.parentElement.parentElement.parentElement;
                closedElement.classList.add("openMenu");
                let activeElementOne = closedElement.parentElement;
                activeElementOne.classList.add("pro-active-sub");
            }
        }
        for (let index = 0; index < element.length; index++) {
            if (element[index].classList.value.includes("pro-active-sub")) {
                let closeMenu = element[index].firstChild.lastChild.firstChild;
                closeMenu.style.transform = "rotate(45deg)";
                element[index].addEventListener("click", () => {
                    let opneElement = element[index].lastChild;
                    console.log({ opneElement, elee: element[index] });
                    if (
                        opneElement.classList.value.includes(
                            "closed openMenu transitioning"
                        ) ||
                        opneElement.classList.value.includes(
                            "openMenu transitioning closed"
                        ) ||
                        opneElement.classList.value.includes(
                            "transitioning openMenu closed"
                        )
                    ) {
                        opneElement.classList.toggle("closeMenu", "closeMenu");
                        opneElement.classList.toggle("openMenu", "");
                        closeMenu.style.transform = "rotate(-45deg)";
                    } else {
                        closeMenu.style.transform = "rotate(45deg)";
                        opneElement.classList.toggle("closeMenu", "");
                        opneElement.classList.toggle("openMenu", "openMenu");
                        opneElement.classList.add("closed");
                    }
                });
            }
        }
    }, [location.pathname]);

    return (
        <>
            <ProSidebar
                collapsed={isMenuCollapse}
                className={`${
                    isResponsiveMenu === true ? "open-menu" : "hide-menu"
                } aside-menu-container`}
                key={_uniqueId("PS-").toString()}
            >
                <SidebarHeader className="aside-menu-container__aside-logo flex-column-auto pb-2 pt-3">
                    <a
                        href="/"
                        className="text-decoration-none sidebar-logo text-gray-900 fs-4"
                    >
                        <div
                            className={`${
                                isMenuCollapse
                                    ? "d-none"
                                    : "image image-mini me-3"
                            }`}
                        >
                            <img
                                src={
                                    frontSetting.value &&
                                    frontSetting.value.logo
                                }
                                className="img-fluid object-fit-contain"
                                alt="profile image"
                            />
                        </div>
                        {isMenuCollapse
                            ? null
                            : frontSetting.value &&
                              frontSetting.value.company_name}
                    </a>
                    <button
                        type="button"
                        onClick={(e) => menuIconClick(e)}
                        className="btn p-0 fs-1 aside-menu-container__aside-menubar d-lg-block d-none sidebar-btn border-0"
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className="text-gray-600"
                        />
                    </button>
                </SidebarHeader>
                <SidebarContent className="sidebar-scrolling">
                    {/* <form
                        className={`d-flex position-relative aside-menu-container__aside-search search-control ${
                            isMenuCollapse ? "d-none" : ""
                        } py-3 mt-1`}
                    >
                        <div className="position-relative d-flex w-100">
                            <input
                                className={`form-control ps-8 ${
                                    isMenuCollapse ? "d-none" : ""
                                }`}
                                type="search"
                                id="search"
                                placeholder={placeholderText(
                                    "react-data-table.searchbar.placeholder"
                                )}
                                aria-label="Search"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span className="position-absolute d-flex align-items-center top-0 bottom-0 left-0 text-gray-600 ms-3">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </form> */}
                    <Menu key={_uniqueId("Mm-").toString()}>
                        {filteredMenu.length ? (
                            filteredMenu.map((mainItems, index) => {
                                return (
                                    <div key={_uniqueId("SM-").toString()}>
                                        {mainItems.newRoute ? (
                                            <SubMenu
                                                title={intl.formatMessage({
                                                    id: `${mainItems.title}`,
                                                })}
                                                className={
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.userSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.customerSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.suppliareSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.productsSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.categoriesSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.brandsSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.unitsSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.barcodeSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.purchasesSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.purchaseReturnSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.salesSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.salesReturnSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.expensesSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.expenseCategoriesSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.emailTemplateSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.smsTemplateSubPath ||
                                                    location.pathname ===
                                                        mainItems?.subPath
                                                            ?.smsApiSubPath
                                                        ? "pro-active-sub myDIV"
                                                        : "myDIV"
                                                }
                                                icon={mainItems.fontIcon}
                                            >
                                                {mainItems.newRoute.map(
                                                    (subMainItems, index) => {
                                                        // subPath.push(subMainItems.to)
                                                        return !subMainItems.is_submenu ? (
                                                            <MenuItem
                                                                key={_uniqueId(
                                                                    "Mmi-"
                                                                ).toString()}
                                                                icon={
                                                                    subMainItems.fontIcon
                                                                }
                                                                className={`${
                                                                    isMenuCollapse ===
                                                                    false
                                                                        ? subMainItems.class
                                                                        : ""
                                                                } flex-column`}
                                                                active={
                                                                    location.pathname ===
                                                                        subMainItems.to ||
                                                                    location.pathname ===
                                                                        subMainItems.path ||
                                                                    location.pathname.includes(
                                                                        subMainItems.to
                                                                    ) ||
                                                                    location.pathname ===
                                                                        subMainItems.stockPath ||
                                                                    location.pathname ===
                                                                        subMainItems.productPath ||
                                                                    location.pathname ===
                                                                        subMainItems.purchasePath ||
                                                                    location.pathname ===
                                                                        subMainItems.topSellingPath ||
                                                                    location.pathname ===
                                                                        subMainItems.productQuantityAlertPath ||
                                                                    location.pathname ===
                                                                        subMainItems.stockDetailPath +
                                                                            "/" +
                                                                            id
                                                                }
                                                            >
                                                                <Link
                                                                    to={
                                                                        subMainItems.to
                                                                    }
                                                                >
                                                                    {intl.formatMessage(
                                                                        {
                                                                            id: `${subMainItems.title}`,
                                                                        }
                                                                    )}
                                                                </Link>
                                                            </MenuItem>
                                                        ) : (
                                                            <SubMenu
                                                                key={index}
                                                                title={intl.formatMessage(
                                                                    {
                                                                        id: `${subMainItems.title}`,
                                                                    }
                                                                )}
                                                                icon={
                                                                    subMainItems.fontIcon
                                                                }
                                                                className={
                                                                    Object.values(
                                                                        subMainItems.subPath
                                                                    ).filter(
                                                                        (
                                                                            path
                                                                        ) =>
                                                                            location.pathname.includes(
                                                                                path
                                                                            )
                                                                    ).length
                                                                        ? "open_sub_menu"
                                                                        : null
                                                                }
                                                            >
                                                                {subMainItems.subMenu &&
                                                                    subMainItems.subMenu.map(
                                                                        (
                                                                            subMenu
                                                                        ) => {
                                                                            return (
                                                                                <MenuItem
                                                                                    key={_uniqueId(
                                                                                        "Mmvi-"
                                                                                    ).toString()}
                                                                                    icon={
                                                                                        subMenu.fontIcon
                                                                                    }
                                                                                    className={`${
                                                                                        isMenuCollapse ===
                                                                                        false
                                                                                            ? subMenu.class
                                                                                            : ""
                                                                                    } flex-column removeclosed`}
                                                                                    active={
                                                                                        location.pathname ===
                                                                                            subMenu.to ||
                                                                                        location.pathname ===
                                                                                            subMenu.path ||
                                                                                        location.pathname.includes(
                                                                                            subMenu.to
                                                                                        ) ||
                                                                                        location.pathname ===
                                                                                            subMenu.stockPath ||
                                                                                        location.pathname ===
                                                                                            subMenu.productPath ||
                                                                                        location.pathname ===
                                                                                            subMenu.purchasePath ||
                                                                                        location.pathname ===
                                                                                            subMenu.topSellingPath ||
                                                                                        location.pathname ===
                                                                                            subMenu.productQuantityAlertPath ||
                                                                                        location.pathname ===
                                                                                            subMenu.stockDetailPath +
                                                                                                "/" +
                                                                                                id
                                                                                    }
                                                                                >
                                                                                    <Link
                                                                                        className="px-3"
                                                                                        to={
                                                                                            subMenu.to
                                                                                        }
                                                                                    >
                                                                                        {intl.formatMessage(
                                                                                            {
                                                                                                id: `${subMenu.title}`,
                                                                                            }
                                                                                        )}
                                                                                    </Link>
                                                                                </MenuItem>
                                                                            );
                                                                        }
                                                                    )}
                                                            </SubMenu>
                                                        );
                                                    }
                                                )}
                                            </SubMenu>
                                        ) : (
                                            mainItems.to !== "/admin/pos" && (
                                                <MenuItem
                                                    key={_uniqueId(
                                                        "SMmi-"
                                                    ).toString()}
                                                    icon={mainItems.fontIcon}
                                                    className={`${
                                                        isMenuCollapse === false
                                                            ? mainItems.class
                                                            : ""
                                                    } flex-column`}
                                                    active={
                                                        location.pathname ===
                                                            mainItems.to ||
                                                        location.pathname ===
                                                            mainItems.path ||
                                                        location.pathname ===
                                                            mainItems.mailSettingsPath ||
                                                        location.pathname ===
                                                            mainItems.prefixesPath ||
                                                        location.pathname ===
                                                            mainItems.profitLossReportPath ||
                                                        location.pathname.includes(
                                                            mainItems.to
                                                        ) ||
                                                        location.pathname ===
                                                            mainItems.stockPath ||
                                                        location.pathname ===
                                                            mainItems.productPath ||
                                                        location.pathname ===
                                                            mainItems.purchasePath ||
                                                        location.pathname ===
                                                            mainItems.topSellingPath ||
                                                        location.pathname ===
                                                            mainItems.productQuantityAlertPath ||
                                                        location.pathname ===
                                                            mainItems.supplierReportPath ||
                                                        location.pathname ===
                                                            mainItems.customerReportPath ||
                                                        location.pathname ===
                                                            mainItems.bestCustomerReportPath ||
                                                        location.pathname ===
                                                            mainItems.supplierReportDetailsPath +
                                                                "/" +
                                                                id ||
                                                        location.pathname ===
                                                            mainItems.customerReportDetailsPath +
                                                                "/" +
                                                                id
                                                    }
                                                >
                                                    <Link to={mainItems.to}>
                                                        {intl.formatMessage({
                                                            id: `${mainItems.title}`,
                                                        })}
                                                    </Link>
                                                </MenuItem>
                                            )
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center">
                                {getFormattedMessage("side-menu.empty.message")}
                            </div>
                        )}
                    </Menu>
                </SidebarContent>
            </ProSidebar>

            <div
                className={`${
                    isResponsiveMenu === true && "bg-overlay d-block"
                }`}
                onClick={menuClick}
            />
        </>
    );
};

export default AsideMenu;
