import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const checkboxData = [
    {
        id: 'check-card-example5-1',
        iconClass: 'fi fi-rr-layers',
        title: 'Starter',
        desc: 'For smaller business, with simple salaries and pay schedules subscriptions.',
        price: 'Free',
    },
    {
        id: 'check-card-example5-2',
        iconClass: 'fi fi-rr-life-ring',
        title: 'Premium',
        desc: 'For smaller business, with simple salaries and pay schedules subscriptions.',
        price: '$5 /Mon',
    },
    {
        id: 'check-card-example5-3',
        iconClass: 'fi fi-rr-globe',
        title: 'Business',
        desc: 'For smaller business, with simple salaries and pay schedules subscriptions.',
        price: '$15 /Mon',
        defaultChecked: true,
        popular: true,
    },
    {
        id: 'check-card-example5-4',
        iconClass: 'fi fi-rr-brightness',
        title: 'Enterprise',
        desc: 'For smaller business, with simple salaries and pay schedules subscriptions.',
        price: '$30 /Mon',
    },
];
const AdvCheckboxEx5 = () => {
    return (_jsx(Row, { children: checkboxData.map(({ id, iconClass, title, desc, price, defaultChecked, popular }) => (_jsx(Col, { lg: 3, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "check-card", children: [_jsx(Form.Check.Input, { id: id, type: "checkbox", name: "check-card-example5", defaultChecked: defaultChecked }), _jsxs("span", { className: "check-card-wrapper text-center d-block", children: [_jsx("div", { className: "avatar avatar-xl", children: _jsx("i", { className: `fi ${iconClass} text-dark` }) }), _jsxs("span", { className: "check-card-content my-4 d-block", children: [_jsx("span", { className: "check-card-title fw-bold text-dark d-block", children: title }), _jsx("span", { className: "check-card-desc d-block", children: desc }), _jsxs("span", { className: "check-card-price fw-semibold text-dark mt-3 d-block", children: [price, ' ', popular && _jsx("span", { className: "badge bg-success-subtle text-success", children: "Popular" })] })] }), _jsx("span", { className: "check-icon" })] })] }) }, id))) }));
};
export default AdvCheckboxEx5;
