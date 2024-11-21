import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Row, Col, Button, ListGroup, Stack, Image, Badge } from 'react-bootstrap';
import mastercard from '@/assets/images/brands/mastercard.svg';
import visa from '@/assets/images/brands/visa.svg';
import paypal from '@/assets/images/brands/paypal.svg';
import bank from '@/assets/images/brands/bank.svg';
const paymentMethods = [
    {
        image: mastercard,
        name: 'Mastercard',
        number: '- 9632',
        expireDate: '03/2026',
        ifDefault: true,
    },
    { image: visa, name: 'Visa', number: '- 2587', expireDate: '06/2025', ifDefault: false },
    {
        image: paypal,
        name: 'Paypal',
        number: ' - 2.5%',
        lastUsed: '26 March, 2023',
        ifDefault: false,
    },
    {
        image: bank,
        name: 'BankTransfer',
        number: ' - 5%',
        lastUsed: '26 March, 2023',
        ifDefault: false,
    },
    {
        image: mastercard,
        name: 'Mastercard',
        number: '- 8796',
        expireDate: '02/2023',
        ifDefault: false,
    },
];
const BillingMethod = () => {
    const renderPaymentMethods = () => {
        return paymentMethods.map(({ name, image, number, expireDate, lastUsed, ifDefault }, index) => (_jsxs(ListGroup.Item, { className: "d-sm-flex align-items-center justify-content-between gap-4", children: [_jsxs("div", { className: "d-sm-flex align-items-center gap-4", children: [_jsx("div", { className: "mb-3 mb-sm-0", style: { width: '2rem', height: '2rem' }, children: _jsx(Image, { src: image, alt: name, className: "img-fluid" }) }), _jsxs("div", { className: "radio-card-content", children: [_jsxs("h6", { className: "fw-semibold mb-1", children: [name, " ending in ", number] }), expireDate && (_jsxs("span", { className: "text-muted", children: ["Expire date: ", _jsx("span", { className: "fw-medium", children: expireDate })] })), lastUsed && (_jsxs("span", { className: "text-muted", children: ["Last time used: ", _jsx("span", { className: "fw-medium", children: lastUsed })] }))] })] }), _jsxs(Stack, { direction: "horizontal", className: "gap-4 mt-3 mt-sm-0", children: [ifDefault && _jsx(Badge, { bg: "success", children: "Default" }), !ifDefault && (_jsx(Link, { to: "#!", className: "text-primary", children: "Set as default" })), _jsx(Link, { to: "#!", children: _jsx("i", { className: "fi fi-rr-trash text-danger" }) })] })] }, index)));
    };
    return (_jsxs(Row, { className: "g-4 mb-4", children: [_jsxs(Col, { md: 3, children: [_jsx("h5", { className: "fw-semibold", children: "Payment Method" }), _jsx("p", { children: "You can update your cards information here" })] }), _jsxs(Col, { md: 9, xl: 8, xxl: 6, children: [_jsx(ListGroup, { className: "mb-3", children: renderPaymentMethods() }), _jsxs(Button, { variant: "neutral", children: [_jsx("i", { className: "fi fi-rr-plus" }), _jsx("span", { className: "ms-3", children: "New payment method" })] })] })] }));
};
export default BillingMethod;
