import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// images
import paypal from '@/assets/images/brands/paypal.svg';
import mastercard from '@/assets/images/brands/mastercard.svg';
import bank from '@/assets/images/brands/bank.svg';
const paymentMethods = [
    {
        id: 'radio-card-example3-1',
        image: paypal,
        title: 'Paypal',
        fee: '2.5%',
    },
    {
        id: 'radio-card-example3-2',
        image: mastercard,
        title: 'Mastercard',
        fee: '2.0%',
        defaultChecked: true,
    },
    {
        id: 'radio-card-example3-3',
        image: bank,
        title: 'BankTransfer',
        fee: '5%',
    },
];
const AdvRadioEx3 = () => {
    return (_jsx(Row, { children: paymentMethods.map(({ id, image, title, fee, defaultChecked }) => (_jsx(Col, { lg: 4, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "radio-card", children: [_jsx(Form.Check.Input, { id: id, type: "radio", name: "radio-card-example3", defaultChecked: defaultChecked }), _jsxs("span", { className: "radio-card-wrapper d-flex gap-4 align-items-center", children: [_jsx("span", { style: { width: '48px', height: '48px' }, children: _jsx(Image, { src: image, alt: title, className: "img-fluid" }) }), _jsxs("span", { className: "radio-card-content", children: [_jsxs("span", { className: "radio-card-title d-flex justify-content-between", children: [_jsxs("span", { children: [_jsxs("span", { className: "fw-bold text-dark", children: [title, " - "] }), _jsx("span", { className: "radio-card-price fw-semibold text-dark mt-3", children: fee })] }), _jsx("span", { className: "check-icon" })] }), _jsxs("span", { className: "radio-card-desc", children: ["Last time used: ", _jsx("strong", { children: "26 March, 2023" })] })] })] })] }) }, id))) }));
};
export default AdvRadioEx3;
