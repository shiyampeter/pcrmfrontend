import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const checkboxData = [
    {
        id: 'check-card-example1-1',
        title: 'Basic',
        price: 'Free',
        desc: 'Get 1 project with 1 team member.',
        defaultChecked: true,
    },
    {
        id: 'check-card-example1-2',
        title: 'Premium',
        price: '$12',
        priceDesc: '/Mon',
        desc: 'Get 5 projects with 5 team members.',
    },
    {
        id: 'check-card-example1-3',
        title: 'Business',
        price: '$30',
        priceDesc: '/Mon',
        desc: 'Get 100 projects with 100 team members.',
    },
];
const AdvCheckboxEx1 = () => {
    return (_jsx(Row, { children: checkboxData.map(({ id, title, price, priceDesc, desc, defaultChecked }) => (_jsx(Col, { lg: 4, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "check-card", children: [_jsx(Form.Check.Input, { id: id, type: "checkbox", name: "check-card-example1", defaultChecked: defaultChecked }), _jsxs("span", { className: "check-card-wrapper d-flex gap-3", children: [_jsx("span", { className: "check-icon" }), _jsxs("span", { className: "check-card-content", children: [_jsxs("span", { className: "check-card-title d-flex justify-content-between", children: [_jsx("span", { className: "fw-bold text-dark d-block", children: title }), _jsxs("span", { className: "check-card-price text-dark d-block", children: [price, " ", _jsx("span", { className: "fs-12 fw-normal", children: priceDesc })] })] }), _jsx("span", { className: "check-card-desc d-block", children: desc })] })] })] }) }, id))) }));
};
export default AdvCheckboxEx1;
