import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, Nav } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import 'react-circular-progressbar/dist/styles.css';
const AccountSettingsNav = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const location = useLocation();
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = React.useState(location.pathname);
    const handleSelect = (selectedKey) => {
        if (selectedKey) {
            setActiveKey(selectedKey);
            navigate(selectedKey);
        }
    };
    const AccountSettingsNavs = [
        {
            icon: 'fi fi-rr-user',
            label: 'Account',
            to: '/account-settings/account',
        },
        {
            icon: 'fi fi-rr-lock',
            label: 'Security',
            to: '/account-settings/security',
        },
        {
            icon: 'fi fi-rr-bell',
            label: 'Notifications',
            to: '/account-settings/notifications',
        },
        {
            icon: 'fi fi-rr-usd-circle',
            label: 'Billing',
            to: '/account-settings/billing',
        },
        {
            icon: 'fi fi-rr-square-plus',
            label: 'Integrations',
            to: '/account-settings/integrations',
        },
    ];
    return (_jsx(_Fragment, { children: _jsxs(Card, { className: "mb-3 mb-md-4", children: [_jsxs(Card.Body, { className: "py-6 d-md-flex align-items-center", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsxs("div", { className: "position-relative flex-shrink-0 me-4", style: { width: '5rem', height: '5rem' }, children: [_jsx("div", { className: "position-absolute w-100 h-100 rounded-circle d-flex align-items-center justify-content-center ", children: _jsx("i", { className: "fi fi-rr-user-gear text-primary fs-2" }) }), _jsx("div", { className: "position-absolute", children: _jsx(CircularProgressbar, { value: 50, styles: {
                                                    path: {
                                                        stroke: themeColor,
                                                        strokeWidth: '0.375rem',
                                                        strokeLinecap: 'round',
                                                    },
                                                    trail: {
                                                        stroke: '#EDEFF1',
                                                        strokeWidth: '0.375rem',
                                                    },
                                                    text: {
                                                        fontSize: '1rem',
                                                        fontWeight: 'bold',
                                                        fill: themeColor,
                                                    },
                                                } }) })] }), _jsxs("div", { style: { maxWidth: '280px' }, children: [_jsx("h4", { className: "fw-bold", children: "Account Settings" }), _jsx("p", { className: "fs-13 text-muted mb-0", children: "Set your pictures, name, bio, and others public-facing information." })] })] }), _jsxs("div", { className: "ms-auto d-none d-md-flex align-items-center text-end", children: [_jsx(Button, { variant: "", className: "text-danger me-2", children: "Reset" }), _jsxs(Button, { variant: "neutral", children: ["Finish Now ", _jsx("i", { className: "fi fi-rr-arrow-up-right-from-square fs-14 ms-2" })] })] })] }), _jsx(PerfectScrollbar, { children: _jsx(Nav, { activeKey: activeKey, onSelect: handleSelect, variant: "pills", defaultActiveKey: "/user-profile/overview", className: "d-flex flex-row flex-nowrap flex-row px-4 py-3 border-top", children: AccountSettingsNavs.map((tab, idx) => (_jsx(Nav.Item, { children: _jsxs(Nav.Link, { as: Link, to: tab.to, eventKey: tab.to, className: "hstack gap-2", children: [_jsx("i", { className: tab.icon }), _jsx("span", { children: tab.label })] }) }, idx))) }) })] }) }));
};
export default AccountSettingsNav;
