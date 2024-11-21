import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const checkboxData = [
    {
        id: 'check-card-example2-1',
        title: 'Standard',
        desc: '4-10 business days',
        price: '$10 USD',
    },
    {
        id: 'check-card-example2-2',
        title: 'Express',
        desc: '3-6 business days',
        price: '$15 USD',
        defaultChecked: true,
    },
    {
        id: 'check-card-example2-3',
        title: 'Quickly',
        desc: '2-4 business days',
        price: '$20 USD',
    },
    {
        id: 'check-card-example2-4',
        title: 'Superfast',
        desc: '1-2 business days',
        price: '$25 USD',
    },
];
const AdvCheckboxEx2 = () => {
    return (_jsx(Row, { children: checkboxData.map(({ id, title, desc, price, defaultChecked }) => (_jsx(Col, { lg: 3, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "check-card", children: [_jsx(Form.Check.Input, { id: id, type: "checkbox", name: "check-card-example2", defaultChecked: defaultChecked }), _jsxs("span", { className: "check-card-wrapper d-flex gap-3", children: [_jsxs("span", { className: "check-card-content", children: [_jsx("span", { className: "check-card-title fw-bold text-dark d-block", children: title }), _jsx("span", { className: "check-card-desc d-block", children: desc }), _jsx("span", { className: "check-card-price fw-semibold text-dark mt-3 d-block", children: price })] }), _jsx("span", { className: "check-icon" })] })] }) }, id))) }));
};
export default AdvCheckboxEx2;
