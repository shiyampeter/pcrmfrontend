import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Logo from '@/components/Common/Logo';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
const navLinks = {
    documentation: '../docs/index.html',
    changelog: '../docs/changelog.html',
    support: '../docs/support.html',
};
const NavLink = ({ to, isActive, children }) => (_jsx(Nav.Item, { children: _jsx(Link, { to: to, className: `btn rounded px-3 ${isActive ? 'btn btn-soft-primary' : ''}`, children: children }) }));
const PublicHeader = () => {
    const location = useLocation();
    return (_jsx(_Fragment, { children: _jsx("header", { className: "header-public bg-body-tertiary hstack sticky-top border-bottom", style: { minHeight: '4.5rem' }, children: _jsx("div", { className: "container", children: _jsxs(Navbar, { expand: "lg", className: "w-100 bg-body-tertiary justify-content-between", children: [_jsx(Navbar.Brand, { children: _jsx(Link, { to: "/", children: _jsx(Logo, {}) }) }), _jsx(Navbar.Toggle, { className: "ms-auto border", "aria-controls": "basic-navbar-nav" }), _jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: _jsxs(Nav, { className: "ms-auto navbar-nav mt-4 mt-md-0", children: [Object.entries(navLinks).map(([key, value]) => (_jsx(NavLink, { to: value, isActive: location.pathname.includes(value), children: key.charAt(0).toUpperCase() + key.slice(1) }, key))), _jsxs(Link, { to: "/", className: "btn btn-primary btn-md ms-0 ms-md-4 mt-4 mb-2 mb-md-0 mt-md-0 flex-shrink-0", style: { width: 'fit-content' }, children: [_jsx("i", { className: "fi fi-rr-eye" }), _jsx("span", { className: "ms-2", children: "Live Preview" })] })] }) })] }) }) }) }));
};
export default PublicHeader;
