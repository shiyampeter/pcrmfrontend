import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const radioCardsData = [
    {
        id: 'radio-card-example5-1',
        icon: 'fi fi-rr-layers',
        title: 'Starter',
        description: 'For smaller businesses, with simple salaries and pay schedules subscriptions.',
        price: 'Free',
        defaultChecked: true,
    },
    {
        id: 'radio-card-example5-2',
        icon: 'fi fi-rr-life-ring',
        title: 'Premium',
        description: 'For smaller businesses, with simple salaries and pay schedules subscriptions.',
        price: '$5',
        priceSuffix: '/Mon',
    },
    {
        id: 'radio-card-example5-3',
        icon: 'fi fi-rr-globe',
        title: 'Business',
        description: 'For smaller businesses, with simple salaries and pay schedules subscriptions.',
        price: '$15',
        priceSuffix: '/Mon',
        badge: 'Popular',
    },
    {
        id: 'radio-card-example5-4',
        icon: 'fi fi-rr-brightness',
        title: 'Enterprise',
        description: 'For smaller businesses, with simple salaries and pay schedules subscriptions.',
        price: '$30',
        priceSuffix: '/Mon',
    },
];
const AdvRadioEx5 = () => {
    return (_jsx(Row, { children: radioCardsData.map(({ id, icon, title, description, price, priceSuffix, badge, defaultChecked }) => (_jsx(Col, { lg: 3, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "radio-card", children: [_jsx(Form.Check.Input, { id: id, type: "radio", name: "radio-card-example5", defaultChecked: defaultChecked }), _jsxs("span", { className: "radio-card-wrapper text-center d-block", children: [_jsx("div", { className: "avatar avatar-xl", children: _jsx("i", { className: icon + ' text-dark' }) }), _jsxs("span", { className: "radio-card-content my-4 d-block", children: [_jsxs("span", { className: "radio-card-title fw-bold text-dark d-block", children: [title, badge && _jsx("span", { className: "badge bg-success-subtle text-success", children: badge })] }), _jsx("span", { className: "radio-card-desc d-block", children: description }), _jsxs("span", { className: "radio-card-price fw-semibold text-dark mt-3 d-block", children: [price, " ", _jsx("span", { className: "fs-12 fw-normal", children: priceSuffix })] })] }), _jsx("span", { className: "check-icon" })] })] }) }, id))) }));
};
export default AdvRadioEx5;
