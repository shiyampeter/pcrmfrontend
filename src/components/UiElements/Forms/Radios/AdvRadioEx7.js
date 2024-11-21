import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// images
import banner1 from '@/assets/images/banner/1.jpg';
import banner2 from '@/assets/images/banner/2.jpg';
import banner3 from '@/assets/images/banner/3.jpg';
const cardData = [
    {
        id: 'radio-card-example7-1',
        image: banner1,
        title: 'Starter',
        desc: 'For smaller business, with simple salaries and pay shedules subscriptions.',
        price: 'Free',
    },
    {
        id: 'radio-card-example7-2',
        image: banner2,
        title: 'Premium',
        desc: 'For smaller business, with simple salaries and pay shedules subscriptions.',
        price: '$5 /Mon',
        popular: true,
    },
    {
        id: 'radio-card-example7-3',
        image: banner3,
        title: 'Business',
        desc: 'For smaller business, with simple salaries and pay shedules subscriptions.',
        price: '$15 /Mon',
        defaultChecked: true,
    },
];
const AdvRadioEx7 = () => {
    return (_jsx(Row, { children: cardData.map(({ id, image, title, desc, price, popular, defaultChecked }) => (_jsx(Col, { lg: 4, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "radio-card", children: [_jsx(Form.Check.Input, { id: id, type: "radio", name: "radio-card-example7", defaultChecked: defaultChecked }), _jsxs("span", { className: "radio-card-wrapper text-center d-block p-0 pb-4", children: [_jsx(Image, { src: image, alt: "", className: "img-fluid" }), _jsxs("span", { className: "radio-card-content my-4 px-4 d-block", children: [_jsxs("span", { className: "radio-card-title fw-bold text-dark d-block", children: [title, ' ', popular && _jsx("span", { className: "badge bg-danger-subtle text-danger", children: "Popular" })] }), _jsx("span", { className: "radio-card-desc d-block", children: desc }), _jsx("span", { className: "radio-card-price fw-semibold text-dark mt-3 d-block", children: price })] }), _jsx("span", { className: "check-icon" })] })] }) }, id))) }));
};
export default AdvRadioEx7;
