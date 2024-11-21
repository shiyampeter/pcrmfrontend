import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Dropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { appsData } from './data/appsData';
const Applications = () => {
    const apps = appsData || [];
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    };
    return (_jsxs(Dropdown, { show: dropDownOpen, onToggle: toggleDropDown, children: [_jsx(Dropdown.Toggle, { as: "a", className: "arrow-none header-btn", "data-bs-toggle": "dropdown", "data-bs-auto-close": "outside", role: "button", onClick: toggleDropDown, children: _jsx("i", { className: "fi fi-rr-apps-add" }) }), _jsxs(Dropdown.Menu, { align: "end", className: "dropdown-xl py-0 px-0 overflow-hidden", children: [_jsx(Row, { className: "g-2 p-3", children: apps.map((app, idx) => {
                            return (_jsx(Col, { xs: 4, className: "hstack", children: _jsxs(Link, { to: "", className: "w-100 d-block px-2 py-3 text-center text-decoration-none rounded", children: [_jsx("img", { src: app.img, alt: app.name, width: 20, height: 20, className: "img-fluid rounded-circle" }), _jsx("p", { className: "fs-13 fw-medium text-truncate mb-0 mt-1 pt-1", children: app.name })] }) }, idx));
                        }) }), _jsx("div", { className: "px-4 py-3 border-top  text-center", children: _jsxs(Link, { to: "/account-settings/integrations", className: "icon-link icon-link-hover", children: [_jsx("span", { children: "All Applications" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] }) })] })] }));
};
export default Applications;
