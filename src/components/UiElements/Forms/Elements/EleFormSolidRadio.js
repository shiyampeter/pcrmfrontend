import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table } from 'react-bootstrap';
const EleFormSolidRadio = () => {
    const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    const radioButtons = colors.map((variant, idx) => ({
        id: `flexRadio${variant}`,
        name: `flexRadioSolidColor${variant}`,
        label: variant,
        checkedId: `flexRadio${variant}Checked`,
    }));
    return (_jsxs(Table, { responsive: true, borderless: true, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Colors" }), _jsx("th", { children: "Default" }), _jsx("th", { children: "Checked" }), _jsx("th", { children: "Disabled" })] }) }), _jsx("tbody", { children: radioButtons.map(({ id, name, label, checkedId }) => (_jsxs("tr", { children: [_jsx("td", { children: label }), _jsx("td", { children: _jsxs("div", { className: "form-check mb-4 mb-md-6 mb-lg-8", children: [_jsx("input", { className: `form-check-input form-radio-${label.toLowerCase()}`, type: "radio", name: name, id: id }), _jsx("label", { className: "form-check-label", htmlFor: id, children: label })] }) }), _jsx("td", { children: _jsxs("div", { className: "form-check mb-4 mb-md-6 mb-lg-8", children: [_jsx("input", { className: `form-check-input form-radio-${label.toLowerCase()}`, type: "radio", name: name, id: checkedId, defaultChecked: !!checkedId }), _jsx("label", { className: "form-check-label", htmlFor: checkedId, children: label })] }) }), _jsx("td", { children: _jsxs("div", { className: "form-check mb-4 mb-md-6 mb-lg-8", children: [_jsx("input", { className: `form-check-input form-radio-${label.toLowerCase()}`, type: "radio", name: name, id: `${id}CheckedDisabled`, disabled: true }), _jsx("label", { className: "form-check-label", htmlFor: `${id}CheckedDisabled`, children: label })] }) })] }, id))) })] }));
};
export default EleFormSolidRadio;
