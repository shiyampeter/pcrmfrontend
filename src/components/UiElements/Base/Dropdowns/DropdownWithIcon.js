import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dropdown, DropdownButton, ButtonGroup, Stack } from 'react-bootstrap';
const dropdownItems = [
    { autoClose: undefined, title: 'Default Close', icon: 'fi fi-rr-apps-add' },
    { autoClose: 'inside', title: 'Clickable Outside', icon: 'fi fi-rr-apps-add' },
    { autoClose: 'outside', title: 'Clickable Inside', icon: 'fi fi-rr-apps-add' },
    { autoClose: false, title: 'Manual Close', icon: 'fi fi-rr-apps-add' },
];
const DropdownWithIcon = () => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: dropdownItems.map(({ autoClose, title, icon }, index) => (_jsxs(DropdownButton, { as: ButtonGroup, title: _jsxs(_Fragment, { children: [_jsx("i", { className: icon }), _jsx("span", { className: "ms-2", children: title })] }), autoClose: autoClose, children: [_jsxs(Dropdown.Item, { eventKey: "1", children: [_jsx("i", { className: "fi fi-rr-apps-add" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsxs(Dropdown.Item, { eventKey: "2", children: [_jsx("i", { className: "fi fi-rr-airplay" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsxs(Dropdown.Item, { eventKey: "3", children: [_jsx("i", { className: "fi fi-rr-star" }), _jsx("span", { className: "ms-3", children: "Menu item" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { eventKey: "4", children: [_jsx("i", { className: "fi fi-rr-trash" }), _jsx("span", { className: "ms-3", children: "Menu item" })] })] }, index))) }) }));
};
export default DropdownWithIcon;
