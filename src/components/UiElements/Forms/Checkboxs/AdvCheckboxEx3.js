import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// images
import paypal from '@/assets/images/brands/paypal.svg';
import mastercard from '@/assets/images/brands/mastercard.svg';
import bank from '@/assets/images/brands/bank.svg';
const checkboxData = [
    {
        id: 'check-card-example3-1',
        image: paypal,
        title: 'Paypal',
        percentage: '2.5%',
    },
    {
        id: 'check-card-example3-2',
        image: mastercard,
        title: 'Mastercard',
        percentage: '2.0%',
        defaultChecked: true,
    },
    {
        id: 'check-card-example3-3',
        image: bank,
        title: 'BankTransfer',
        percentage: '5%',
    },
];
const AdvCheckboxEx3 = () => {
    return (_jsx(Row, { children: checkboxData.map(({ id, image, title, percentage, defaultChecked }) => (_jsx(Col, { lg: 4, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "check-card", children: [_jsx(Form.Check.Input, { id: id, type: "checkbox", name: "check-card-example3", defaultChecked: defaultChecked }), _jsxs("span", { className: "check-card-wrapper d-flex gap-4 align-items-center", children: [_jsx("span", { style: { width: '48px', height: '48px' }, children: _jsx(Image, { src: image, alt: title, className: "img-fluid" }) }), _jsxs("span", { className: "check-card-content", children: [_jsxs("span", { className: "check-card-title d-flex justify-content-between", children: [_jsxs("span", { children: [_jsxs("span", { className: "fw-bold text-dark", children: [title, " - "] }), _jsx("span", { className: "check-card-price fw-semibold text-dark mt-3", children: percentage })] }), _jsx("span", { className: "check-icon" })] }), _jsxs("span", { className: "check-card-desc", children: ["Last time used: ", _jsx("strong", { children: "26 March, 2023" })] })] })] })] }) }, id))) }));
};
export default AdvCheckboxEx3;
