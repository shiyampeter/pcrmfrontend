import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import Form from 'react-bootstrap/Form';
const switches = [
    {
        label: 'withIcon Default',
        className: 'switch',
        onIcon: 'fi fi-rr-check fs-12',
        offIcon: 'fi fi-rr-cross-small',
        defaultChecked: true,
    },
    {
        label: 'withIcon Square',
        className: 'switch switch-square',
        onIcon: 'fi fi-rr-check fs-12',
        offIcon: 'fi fi-rr-cross-small',
        defaultChecked: false,
    },
];
const AdvSwitchWithIcon = () => {
    return (_jsx(_Fragment, { children: switches.map(({ label, className, onIcon, offIcon, defaultChecked }, index) => (_jsxs(React.Fragment, { children: [_jsxs(Form.Check.Label, { className: className, children: [_jsx(Form.Check.Input, { type: "checkbox", className: "switch-input", defaultChecked: defaultChecked }), _jsxs("span", { className: "switch-toggle-slider", children: [_jsx("span", { className: "switch-on", children: _jsx("i", { className: onIcon }) }), _jsx("span", { className: "switch-off", children: _jsx("i", { className: offIcon }) })] }), _jsx("span", { className: "switch-label", children: label })] }), _jsx("br", {}), _jsx("br", {})] }, index))) }));
};
export default AdvSwitchWithIcon;
