import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import BgCircleShapeStyle from '../Misc/BgCircleShape';
const Helpdesk = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    };
    const applications = [
        { to: '/apps/chat', label: 'Chats' },
        { to: '/apps/email', label: 'Emails' },
        { to: '/apps/contact', label: 'Contact' },
        { to: '/apps/invoice', label: 'Invoice' },
        { to: '/apps/kanban', label: 'Kanban' },
        { to: '/apps/calendar', label: 'Calendar' },
    ];
    const shoutcuts = [
        { to: '/user-profile/overview', label: 'User Profile' },
        { to: '/account-settings/account', label: 'Account Settings' },
    ];
    const docs = [
        { to: '../docs/support.html', label: 'Support' },
        { to: '../docs/changelog.html', label: 'Changelog' },
        { to: '../docs/index.html', label: 'Documentation' },
    ];
    return (_jsx(_Fragment, { children: _jsxs(Dropdown, { show: dropDownOpen, onToggle: toggleDropDown, children: [_jsx(Dropdown.Toggle, { as: "a", className: "arrow-none header-btn", role: "button", onClick: toggleDropDown, children: _jsx("i", { className: "fi fi-rr-interrogation" }) }), _jsxs(Dropdown.Menu, { align: "end", className: "dropdown-xl py-0 px-0 overflow-hidden", children: [_jsxs("div", { className: "p-2 border-top-0 border-start-0 border-end-0 border-dashed border bg-primary text-white text-center px-6 py-12", onClick: toggleDropDown, style: BgCircleShapeStyle, children: [_jsx("h4", { className: "fw-bold text-white mb-2", children: "Help Center" }), _jsx("p", { className: "fs-13", children: "This greeting is courteous and professional, setting a positive tone for your ticket." }), _jsx(Button, { className: "fs-10 fw-semibold py-2 px-3 bg-body text-dark text-uppercase rounded-pill", style: { letterSpacing: '1px' }, children: "Get Support" })] }), _jsx(PerfectScrollbar, { style: { maxHeight: '320px' }, children: _jsxs(Row, { className: "g-0 px-4 pt-4 pb-2", children: [_jsxs(Col, { children: [_jsx("p", { className: "fs-11 fw-semibold text-uppercase text-muted mb-1", children: "Applications" }), applications.map(({ to, label }) => (_jsx(Link, { to: to, className: "px-0 dropdown-item", children: label }, to)))] }), _jsxs(Col, { children: [_jsx("p", { className: "fs-11 fw-semibold text-uppercase text-muted mb-1", children: "Helpdesk" }), docs.map(({ to, label }) => (_jsx(Link, { to: to, className: "px-0 dropdown-item", children: label }, to))), _jsx("p", { className: "fs-11 fw-semibold text-uppercase text-muted mt-4 mb-1", children: "Shoutcuts" }), shoutcuts.map(({ to, label }) => (_jsx(Link, { to: to, className: "px-0 dropdown-item", children: label }, to)))] })] }) })] })] }) }));
};
export default Helpdesk;
