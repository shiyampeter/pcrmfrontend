import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import Form from 'react-bootstrap/Form';
const stackedSwitches = [
    { size: 'sm', name: 'switches-stacked-radio', label: 'Option 1' },
    { size: '', name: 'switches-stacked-radio', label: 'Option 2' },
    { size: 'lg', name: 'switches-stacked-radio', label: 'Option 3' },
];
const stackedSquareSwitches = [
    {
        size: 'sm',
        name: 'switches-square-stacked-radio',
        label: 'Option 1',
        className: 'switch switch-square',
    },
    {
        size: '',
        name: 'switches-square-stacked-radio',
        label: 'Option 2',
        className: 'switch switch-square',
    },
    {
        size: 'lg',
        name: 'switches-square-stacked-radio',
        label: 'Option 3',
        className: 'switch switch-square',
    },
];
const AdvSwitchStacked = () => {
    return (_jsxs(_Fragment, { children: [stackedSwitches.map(({ size, name, label }, index) => (_jsxs(React.Fragment, { children: [_jsxs(Form.Check.Label, { className: `switch${size ? ` switch-${size}` : ''}`, children: [_jsx(Form.Check.Input, { type: "radio", className: "switch-input", name: name, defaultChecked: index === 0 }), _jsxs("span", { className: "switch-toggle-slider", children: [_jsx("span", { className: "switch-on" }), _jsx("span", { className: "switch-off" })] }), _jsx("span", { className: "switch-label", children: label })] }), _jsx("br", {}), _jsx("br", {})] }, index))), _jsx("hr", { className: "my-4" }), stackedSquareSwitches.map(({ size, name, label, className }, index) => (_jsxs(React.Fragment, { children: [_jsxs(Form.Check.Label, { className: `switch${size ? ` switch-${size}` : ''}${className ? ` ${className}` : ''}`, children: [_jsx(Form.Check.Input, { type: "radio", className: "switch-input", name: name, defaultChecked: index === 0 }), _jsxs("span", { className: "switch-toggle-slider", children: [_jsx("span", { className: "switch-on" }), _jsx("span", { className: "switch-off" })] }), _jsx("span", { className: "switch-label", children: label })] }), _jsx("br", {}), _jsx("br", {})] }, index)))] }));
};
export default AdvSwitchStacked;
