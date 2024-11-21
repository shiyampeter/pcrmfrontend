import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const radioCardsData = [
    {
        id: 'radio-card-example1-1',
        title: 'Basic',
        price: 'Free',
        description: 'Get 1 project with 1 team member.',
        defaultChecked: true,
    },
    {
        id: 'radio-card-example1-2',
        title: 'Premium',
        price: '$12',
        priceSuffix: '/Mon',
        description: 'Get 5 projects with 5 team members.',
    },
    {
        id: 'radio-card-example1-3',
        title: 'Business',
        price: '$30',
        priceSuffix: '/Mon',
        description: 'Get 100 projects with 100 team members.',
    },
];
const AdvRadioEx1 = () => {
    return (_jsx(Row, { className: "g-3 g-md-4", children: radioCardsData.map(({ id, title, price, priceSuffix, description, defaultChecked }) => (_jsx(Col, { lg: 4, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "radio-card", children: [_jsx(Form.Check.Input, { id: id, type: "radio", name: "radio-card-example1", defaultChecked: defaultChecked }), _jsxs("span", { className: "radio-card-wrapper d-flex gap-3", children: [_jsx("span", { className: "check-icon" }), _jsxs("span", { className: "radio-card-content", children: [_jsxs("span", { className: "radio-card-title d-flex justify-content-between", children: [_jsx("span", { className: "fw-bold text-dark d-block", children: title }), _jsxs("span", { className: "radio-card-price text-dark d-block", children: [price, " ", _jsx("span", { className: "fs-12 fw-normal", children: priceSuffix })] })] }), _jsx("span", { className: "radio-card-desc d-block", children: description })] })] })] }) }, id))) }));
};
export default AdvRadioEx1;
