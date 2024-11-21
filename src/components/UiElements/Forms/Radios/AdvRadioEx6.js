import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const cardData = [
    {
        id: 'radio-card-example6-1',
        name: 'William T. Angeles',
        company: 'Software Company',
        phone: '+1 662-618-5001',
        email: 'contact@jourrapide.com',
        specialization: 'Fronted Development',
        website: 'https://yourwebsite.com',
        address: 'New Yoark, United State',
    },
    {
        id: 'radio-card-example6-2',
        name: 'Kenneth P. Navarre',
        company: 'AI Technology',
        phone: '+1 662-618-5001',
        email: 'contact@jourrapide.com',
        specialization: 'Fronted Development',
        website: 'https://yourwebsite.com',
        address: 'Vargenia, United State',
        defaultChecked: true,
    },
    {
        id: 'radio-card-example6-3',
        name: 'Judith R. Truman',
        company: 'Entertainment',
        phone: '+1 662-618-5001',
        email: 'contact@jourrapide.com',
        specialization: 'Fronted Development',
        website: 'https://yourwebsite.com',
        address: 'California, United State',
    },
];
const AdvRadioEx6 = () => {
    return (_jsx(Row, { children: cardData.map(({ id, name, company, phone, email, specialization, website, address, defaultChecked }) => (_jsx(Col, { lg: 4, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "radio-card", children: [_jsx(Form.Check.Input, { id: id, type: "radio", name: "radio-card-example6", defaultChecked: defaultChecked }), _jsxs("span", { className: "radio-card-wrapper d-flex gap-3", children: [_jsx("span", { className: "check-icon" }), _jsxs("span", { className: "radio-card-content", children: [_jsxs("span", { className: "radio-card-title d-block", children: [_jsx("span", { className: "d-block fw-bold text-dark mb-2", children: name }), _jsx("span", { className: "d-block fs-12 fw-medium text-dark", children: company })] }), _jsxs("span", { className: "radio-card-desc d-block mt-6", children: [_jsxs("span", { className: "row mb-3", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-phone-call" }) }), _jsx("span", { className: "col-auto", children: phone })] }), _jsxs("span", { className: "row mb-3", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-envelope" }) }), _jsx("span", { className: "col-auto", children: email })] }), _jsxs("span", { className: "row mb-3", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-briefcase" }) }), _jsx("span", { className: "col-auto", children: specialization })] }), _jsxs("span", { className: "row mb-3", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-globe" }) }), _jsx("span", { className: "col-auto", children: website })] }), _jsxs("span", { className: "row mb-0", children: [_jsx("span", { className: "col-auto", children: _jsx("i", { className: "fi fi-rr-marker" }) }), _jsx("span", { className: "col-auto", children: address })] })] })] })] })] }) }, id))) }));
};
export default AdvRadioEx6;
