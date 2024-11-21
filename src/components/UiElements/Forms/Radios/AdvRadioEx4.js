import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// images
import illus1 from '@/assets/images/brands/1.svg';
import illus2 from '@/assets/images/brands/2.svg';
import illus3 from '@/assets/images/brands/3.svg';
const radioCardsData = [
    {
        id: 'radio-card-example4-1',
        image: illus1,
        title: 'Starter',
        price: 'Free',
        description: 'For smaller businesses, with simple salaries and pay schedules subscriptions.',
    },
    {
        id: 'radio-card-example4-2',
        image: illus2,
        title: 'Personal',
        price: '$10',
        priceSuffix: '/Mon',
        description: 'For smaller businesses, with simple salaries and pay schedules subscriptions.',
    },
    {
        id: 'radio-card-example4-3',
        image: illus3,
        title: 'Enterprise',
        price: '$20',
        priceSuffix: '/Mon',
        description: 'For smaller businesses, with simple salaries and pay schedules subscriptions.',
        defaultChecked: true,
    },
];
const AdvRadioEx4 = () => {
    return (_jsx(Row, { children: radioCardsData.map(({ id, image, title, price, priceSuffix, description, defaultChecked }) => (_jsx(Col, { lg: 4, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "radio-card", children: [_jsx(Form.Check.Input, { id: id, type: "radio", name: "radio-card-example4", defaultChecked: defaultChecked }), _jsxs("span", { className: "radio-card-wrapper d-flex gap-4 align-items-start", children: [_jsx("span", { style: { width: '80px', height: '80px' }, children: _jsx(Image, { src: image, alt: "", className: "img-fluid" }) }), _jsxs("span", { className: "radio-card-content flex-shrink-1", children: [_jsxs("span", { className: "radio-card-title d-flex justify-content-between", children: [_jsxs("span", { children: [_jsxs("span", { className: "fw-bold text-dark", children: [title, " - "] }), _jsxs("span", { className: "radio-card-price fw-semibold text-dark mt-3", children: [price, " ", _jsx("span", { className: "fs-12 fw-normal", children: priceSuffix })] })] }), _jsx("span", { className: "check-icon flex-grow-0" })] }), _jsx("span", { className: "radio-card-desc", children: description })] })] })] }) }, id))) }));
};
export default AdvRadioEx4;
