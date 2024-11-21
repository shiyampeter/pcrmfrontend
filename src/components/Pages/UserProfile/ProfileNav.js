import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
const ProfileNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = React.useState(location.pathname);
    const handleSelect = (selectedKey) => {
        if (selectedKey) {
            setActiveKey(selectedKey);
            navigate(selectedKey);
        }
    };
    const ProfileNavs = [
        {
            icon: 'fi fi-rr-circle-user',
            label: 'Overview',
            to: '/user-profile/overview',
        },
        {
            icon: 'fi fi-rr-rss',
            label: 'Activity',
            to: '/user-profile/activity',
        },
        {
            icon: 'fi fi-rr-user-check',
            label: 'Followers',
            to: '/user-profile/followers',
        },
        {
            icon: 'fi fi-rr-user-add',
            label: 'Contacts',
            to: '/user-profile/contacts',
        },
        {
            icon: 'fi fi-rr-apps-add',
            label: 'Projects',
            to: '/user-profile/projects',
        },
        {
            icon: 'fi fi-rr-picture',
            label: 'Gallery',
            to: '/user-profile/gallery',
        },
    ];
    return (_jsx(_Fragment, { children: _jsx(PerfectScrollbar, { children: _jsx(Nav, { activeKey: activeKey, onSelect: handleSelect, variant: "pills", defaultActiveKey: "/user-profile/overview", className: "d-flex flex-row flex-nowrap flex-row px-4 py-3 border-top", children: ProfileNavs.map((tab, idx) => (_jsx(Nav.Item, { children: _jsxs(Nav.Link, { as: Link, to: tab.to, eventKey: tab.to, className: "hstack gap-2", children: [_jsx("i", { className: tab.icon }), _jsx("span", { children: tab.label })] }) }, idx))) }) }) }));
};
export default ProfileNav;
