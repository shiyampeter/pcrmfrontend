import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack, Dropdown } from 'react-bootstrap';
const DropdownBasic = () => {
    const sizings = ['sm', 'default', 'md', 'lg', 'xl', 'xxl'];
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: sizings.map((variant) => (_jsxs(Dropdown, { className: "d-inline-block", children: [_jsx(Dropdown.Toggle, { variant: "primary", children: "Dropdown SM" }), _jsxs(Dropdown.Menu, { className: `dropdown-${variant}`, children: [_jsxs(Dropdown.Item, { eventKey: "1", children: [_jsx("i", { className: "fi fi-rr-apps-add" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsxs(Dropdown.Item, { eventKey: "2", children: [_jsx("i", { className: "fi fi-rr-airplay" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsxs(Dropdown.Item, { eventKey: "3", children: [_jsx("i", { className: "fi fi-rr-star" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { eventKey: "4", children: [_jsx("i", { className: "fi fi-rr-trash" }), _jsx("span", { className: "ms-3", children: "Menu item" })] })] })] }, variant))) }) }));
};
export default DropdownBasic;
