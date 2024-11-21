import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import Form from 'react-bootstrap/Form';
const switches = [
    {
        label: 'Default',
        className: 'switch',
    },
    {
        label: 'Square',
        className: 'switch switch-square',
    },
];
const AdvSwitchDefault = () => {
    return (_jsx(_Fragment, { children: switches.map(({ label, className }, index) => (_jsxs(React.Fragment, { children: [_jsxs(Form.Check.Label, { className: className, children: [_jsx(Form.Check.Input, { type: "checkbox", className: "switch-input", defaultChecked: index === 0 }), _jsxs("span", { className: "switch-toggle-slider", children: [_jsx("span", { className: "switch-on" }), _jsx("span", { className: "switch-off" })] }), _jsx("span", { className: "switch-label", children: label })] }), _jsx("br", {}), _jsx("br", {})] }, index))) }));
};
export default AdvSwitchDefault;
