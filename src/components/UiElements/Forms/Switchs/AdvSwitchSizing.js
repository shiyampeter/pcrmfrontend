import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import Form from 'react-bootstrap/Form';
const switches = [
    { size: 'sm', label: 'Small' },
    { size: '', label: 'Default' },
    { size: 'lg', label: 'Large' },
];
const squareSwitches = [
    { size: 'sm', label: 'Small Square', className: 'switch switch-square' },
    { size: '', label: 'Default Square', className: 'switch switch-square' },
    { size: 'lg', label: 'Large Square', className: 'switch switch-square' },
];
const AdvSwitchSizing = () => {
    return (_jsxs(_Fragment, { children: [switches.map(({ size, label }, index) => (_jsxs(React.Fragment, { children: [_jsxs(Form.Check.Label, { className: `switch${size ? ` switch-${size}` : ''}`, children: [_jsx(Form.Check.Input, { type: "checkbox", className: "switch-input", defaultChecked: size === 'sm' }), _jsxs("span", { className: "switch-toggle-slider", children: [_jsx("span", { className: "switch-on", children: _jsx("i", { className: "ti ti-check" }) }), _jsx("span", { className: "switch-off", children: _jsx("i", { className: "ti ti-x" }) })] }), _jsx("span", { className: "switch-label", children: label })] }), _jsx("br", {}), _jsx("br", {})] }, index))), _jsx("hr", { className: "my-4" }), squareSwitches.map(({ size, label, className }, index) => (_jsxs(React.Fragment, { children: [_jsxs(Form.Check.Label, { className: `switch${size ? ` switch-${size}` : ''}${className ? ` ${className}` : ''}`, children: [_jsx(Form.Check.Input, { type: "checkbox", className: "switch-input", defaultChecked: size === 'sm' }), _jsxs("span", { className: "switch-toggle-slider", children: [_jsx("span", { className: "switch-on", children: _jsx("i", { className: "ti ti-check" }) }), _jsx("span", { className: "switch-off", children: _jsx("i", { className: "ti ti-x" }) })] }), _jsx("span", { className: "switch-label", children: label })] }), _jsx("br", {}), _jsx("br", {})] }, index)))] }));
};
export default AdvSwitchSizing;
