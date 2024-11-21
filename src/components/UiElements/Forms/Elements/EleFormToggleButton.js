import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Form } from 'react-bootstrap';
const EleFormSolidRadio = () => {
    const checkboxes = [
        { id: 'btnCheckPrimary', label: 'Single toggle', variant: 'outline-primary', disabled: false },
        {
            id: 'btnCheckSecondary',
            label: 'Single toggle',
            variant: 'outline-secondary',
            disabled: false,
        },
        { id: 'btnCheckWarning', label: 'Single toggle', variant: 'outline-warning', disabled: false },
        {
            id: 'btnCheckInfo',
            label: 'Checked',
            variant: 'outline-info',
            disabled: false,
            defaultChecked: true,
        },
        { id: 'btnCheckDisabled', label: 'Disabled', variant: 'outline-danger', disabled: true },
    ];
    const radioButtons = [
        { id: 'btnRadioOption1', label: 'Checked', variant: 'outline-secondary', defaultChecked: true },
        { id: 'btnRadioOption2', label: 'Radio', variant: 'outline-secondary', defaultChecked: false },
        { id: 'btnRadioOption3', label: 'Radio', variant: 'outline-secondary', defaultChecked: false },
        { id: 'btnRadioOption4', label: 'Radio', variant: 'outline-secondary', defaultChecked: false },
        { id: 'btnRadioOption5', label: 'Radio', variant: 'outline-secondary', defaultChecked: false },
        {
            id: 'btnRadioOptionDisabled',
            label: 'Disabled',
            variant: 'outline-secondary',
            disabled: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "hstack flex-wrap gap-2", children: checkboxes.map(({ id, label, variant, disabled, defaultChecked }) => (_jsxs("div", { className: "form-check ps-0", children: [_jsx(Form.Control, { type: "checkbox", className: "btn-check", id: id, disabled: disabled, defaultChecked: defaultChecked }), _jsx(Form.Label, { className: `btn btn-${variant} rounded-pill`, htmlFor: id, children: label })] }, id))) }), _jsx("hr", { className: "my-4" }), _jsx("div", { className: "hstack flex-wrap gap-2", children: radioButtons.map(({ id, label, variant, disabled, defaultChecked }) => (_jsxs("div", { children: [_jsx(Form.Control, { type: "radio", className: "btn-check", name: "options", id: id, disabled: disabled, defaultChecked: defaultChecked }), _jsx(Form.Label, { className: `btn btn-${variant}`, htmlFor: id, children: label })] }, id))) })] }));
};
export default EleFormSolidRadio;
