import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const radioCardsData = [
    {
        id: 'radio-card-example2-1',
        title: 'Standard',
        description: '4-10 business days',
        price: '$10 USD',
    },
    {
        id: 'radio-card-example2-2',
        title: 'Express',
        description: '3-6 business days',
        price: '$15 USD',
        defaultChecked: true,
    },
    {
        id: 'radio-card-example2-3',
        title: 'Quickly',
        description: '2-4 business days',
        price: '$20 USD',
    },
    {
        id: 'radio-card-example2-4',
        title: 'Superfast',
        description: '1-2 business days',
        price: '$25 USD',
    },
];
const AdvRadioEx2 = () => {
    return (_jsx(Row, { children: radioCardsData.map(({ id, title, description, price, defaultChecked }) => (_jsx(Col, { lg: 3, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "radio-card", children: [_jsx(Form.Check.Input, { id: id, type: "radio", name: "radio-card-example2", defaultChecked: defaultChecked }), _jsxs("span", { className: "radio-card-wrapper d-flex gap-3", children: [_jsxs("span", { className: "radio-card-content", children: [_jsx("span", { className: "radio-card-title fw-bold text-dark d-block", children: title }), _jsx("span", { className: "radio-card-desc d-block", children: description }), _jsx("span", { className: "radio-card-price fw-semibold text-dark mt-3 d-block", children: price })] }), _jsx("span", { className: "check-icon" })] })] }) }, id))) }));
};
export default AdvRadioEx2;
