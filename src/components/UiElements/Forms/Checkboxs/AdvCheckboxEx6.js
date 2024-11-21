import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const checkboxData = [
    {
        id: 'check-card-example6-1',
        name: 'check-card-example6',
        title: 'William T. Angeles',
        company: 'Software Company',
        phone: '+1 662-618-5001',
        email: 'contact@jourrapide.com',
        briefcase: 'Fronted Development',
        website: 'https://yourwebsite.com',
        address: '3640 Saint Clair Street, MS 38930',
    },
    {
        id: 'check-card-example6-2',
        name: 'check-card-example6',
        title: 'Kenneth P. Navarre',
        company: 'AI Technology',
        phone: '+1 662-618-5001',
        email: 'contact@jourrapide.com',
        briefcase: 'Fronted Development',
        website: 'https://yourwebsite.com',
        address: '3640 Saint Clair Street, MS 38930',
        defaultChecked: true,
    },
    {
        id: 'check-card-example6-3',
        name: 'check-card-example6',
        title: 'Judith R. Truman',
        company: 'Entertainment',
        phone: '+1 662-618-5001',
        email: 'contact@jourrapide.com',
        briefcase: 'Fronted Development',
        website: 'https://yourwebsite.com',
        address: '3640 Saint Clair Street, MS 38930',
    },
];
const AdvCheckboxEx6 = () => {
    return (_jsx(Row, { children: checkboxData.map(({ id, name, title, company, phone, email, briefcase, website, address, defaultChecked, }) => (_jsx(Col, { lg: 4, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "check-card", children: [_jsx(Form.Check.Input, { id: id, type: "checkbox", name: name, defaultChecked: defaultChecked }), _jsxs("span", { className: "check-card-wrapper d-flex gap-3", children: [_jsx("span", { className: "check-icon" }), _jsxs("span", { className: "check-card-content", children: [_jsxs("span", { className: "check-card-title d-block", children: [_jsx("span", { className: "d-block fw-bold text-dark mb-2", children: title }), _jsx("span", { className: "d-block fs-12 fw-medium text-dark", children: company })] }), _jsxs("span", { className: "check-card-desc d-block mt-6", children: [_jsxs("span", { className: "row mb-3", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-phone-call" }) }), _jsx("span", { className: "col-auto", children: phone })] }), _jsxs("span", { className: "row mb-3", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-envelope" }) }), _jsx("span", { className: "col-auto", children: email })] }), _jsxs("span", { className: "row mb-3", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-briefcase" }) }), _jsx("span", { className: "col-auto", children: briefcase })] }), _jsxs("span", { className: "row mb-3", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-globe" }) }), _jsx("span", { className: "col-auto", children: website })] }), _jsxs("span", { className: "row mb-0", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-marker" }) }), _jsx("span", { className: "col-auto", children: address })] })] })] })] })] }) }, id))) }));
};
export default AdvCheckboxEx6;
