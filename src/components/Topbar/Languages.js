import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { langData } from './data/langData';
const Languages = () => {
    const lang = langData[0] || {};
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    };
    return (_jsx(_Fragment, { children: _jsxs(Dropdown, { show: dropDownOpen, onToggle: toggleDropDown, children: [_jsx(Dropdown.Toggle, { className: "arrow-none header-btn", as: "a", role: "button", onClick: toggleDropDown, children: _jsx("img", { src: lang.flag, alt: "flag", width: 20, height: 20, className: "img-fluid rounded-circle" }) }), _jsx(Dropdown.Menu, { align: "end", children: langData.map(({ flag, name }, idx) => (_jsxs(Link, { to: "#", className: "dropdown-item", children: [_jsx("img", { src: flag, alt: name, width: 20, height: 20, className: "img-fluid rounded-circle me-3" }), _jsx("span", { className: "align-middle", children: name })] }, idx + '-lang'))) })] }) }));
};
export default Languages;
