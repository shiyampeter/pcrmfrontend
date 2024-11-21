import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Dropdown, Stack } from 'react-bootstrap';
const DropdownThemeSoft = () => {
    const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: colors.map((variant) => (_jsxs(Dropdown, { className: `d-inline-block dropdown-soft-${variant.toLowerCase()}`, children: [_jsxs(Dropdown.Toggle, { variant: "", className: `btn-soft-${variant.toLowerCase()}`, children: ["ThemeSoft ", variant] }), _jsxs(Dropdown.Menu, { children: [_jsxs(Dropdown.Item, { eventKey: "1", children: [_jsx("i", { className: "fi fi-rr-apps-add" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsxs(Dropdown.Item, { eventKey: "2", children: [_jsx("i", { className: "fi fi-rr-airplay" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsxs(Dropdown.Item, { eventKey: "3", children: [_jsx("i", { className: "fi fi-rr-star" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { eventKey: "4", children: [_jsx("i", { className: "fi fi-rr-trash" }), _jsx("span", { className: "ms-3", children: "Menu item" })] })] })] }, variant))) }) }));
};
export default DropdownThemeSoft;
