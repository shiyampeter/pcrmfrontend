import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { getMenuItems } from '@/common';
import Logo from '@/components/Common/Logo';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import AppMenu from './Menu';
const SideBarContent = () => {
    return (_jsxs(_Fragment, { children: [_jsx(AppMenu, { menuItems: getMenuItems() }), _jsx("div", { className: "clearfix" })] }));
};
const Navigation = () => {
    return (_jsx(_Fragment, { children: _jsxs("aside", { className: "leftside-menu position-fixed top-0 bottom-0 z-1040", children: [_jsx("div", { className: "navigation-header top-0 sticky-top z-1020 px-4", children: _jsx(Link, { to: "/", children: _jsx(Logo, {}) }) }), _jsx(SimpleBar, { id: "leftside-menu-container", "data-simplebar": "", style: { height: 'calc(100%  - 4.5rem)' }, children: _jsx(SideBarContent, {}) })] }) }));
};
export default Navigation;
