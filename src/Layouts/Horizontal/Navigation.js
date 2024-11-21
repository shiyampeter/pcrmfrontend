import { jsx as _jsx } from "react/jsx-runtime";
import { Collapse } from 'react-bootstrap';
import AppMenu from './Menu';
import { getHorizontalMenuItems } from '@/common';
const Navigation = ({ isMenuOpened }) => {
    return (_jsx("div", { className: "topnav-content", children: _jsx("div", { className: "topnav-inner", children: _jsx("nav", { className: "navbar navbar-expand-lg", children: _jsx(Collapse, { in: isMenuOpened, children: _jsx("div", { className: "collapse navbar-collapse", id: "topnav-menu-content", children: _jsx(AppMenu, { menuItems: getHorizontalMenuItems() }) }) }) }) }) }));
};
export default Navigation;
