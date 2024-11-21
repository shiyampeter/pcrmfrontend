import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table } from 'react-bootstrap';
const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
const EleFormSolidCheckbox = () => {
    const checkboxes = colors.map((variant, idx) => ({
        id: `flexCheck${variant}`,
        label: variant,
        checkedId: `flexCheck${variant}Checked`,
        checkedDisabledId: `flexCheck${variant}CheckedDisabled`,
    }));
    return (_jsxs(Table, { responsive: true, borderless: true, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Colors" }), _jsx("th", { children: "Default" }), _jsx("th", { children: "Checked" }), _jsx("th", { children: "Disabled" })] }) }), _jsx("tbody", { children: checkboxes.map(({ id, label, checkedId, checkedDisabledId }) => (_jsxs("tr", { children: [_jsx("td", { children: label }), _jsx("td", { children: _jsxs("div", { className: "form-check mb-4 mb-md-6 mb-lg-8", children: [_jsx("input", { className: `form-check-input form-check-${label.toLowerCase()}`, type: "checkbox", id: id }), _jsx("label", { className: "form-check-label", htmlFor: id, children: label })] }) }), _jsx("td", { children: _jsxs("div", { className: "form-check mb-4 mb-md-6 mb-lg-8", children: [_jsx("input", { className: `form-check-input form-check-${label.toLowerCase()}`, type: "checkbox", id: checkedId, defaultChecked: true }), _jsx("label", { className: "form-check-label", htmlFor: checkedId, children: label })] }) }), _jsx("td", { children: _jsxs("div", { className: "form-check mb-4 mb-md-6 mb-lg-8", children: [_jsx("input", { className: `form-check-input form-check-${label.toLowerCase()}`, type: "checkbox", id: checkedDisabledId, defaultChecked: true, disabled: true }), _jsx("label", { className: "form-check-label", htmlFor: checkedDisabledId, children: label })] }) })] }, id))) })] }));
};
export default EleFormSolidCheckbox;
