import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import Form from 'react-bootstrap/Form';
const switches = [
    {
        label: 'withText Default',
        className: 'switch',
        onText: 'on',
        offText: 'off',
        defaultChecked: true,
    },
    {
        label: 'withText Square',
        className: 'switch switch-square',
        onText: 'on',
        offText: 'off',
        defaultChecked: false,
    },
];
const AdvSwitchWithText = () => {
    return (_jsx(_Fragment, { children: switches.map(({ label, className, onText, offText, defaultChecked }, index) => (_jsxs(React.Fragment, { children: [_jsxs(Form.Check.Label, { className: className, children: [_jsx(Form.Check.Input, { type: "checkbox", className: "switch-input", defaultChecked: defaultChecked }), _jsxs("span", { className: "switch-toggle-slider", children: [_jsx("span", { className: "switch-on", children: onText }), _jsx("span", { className: "switch-off", children: offText })] }), _jsx("span", { className: "switch-label", children: label })] }), _jsx("br", {}), _jsx("br", {})] }, index))) }));
};
export default AdvSwitchWithText;
