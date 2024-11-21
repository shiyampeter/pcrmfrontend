import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// images
import banner3 from '@/assets/images/banner/3.jpg';
import banner4 from '@/assets/images/banner/4.jpg';
import banner5 from '@/assets/images/banner/5.jpg';
import banner6 from '@/assets/images/banner/6.jpg';
const cardData = [
    { id: 'radio-card-example8-1', image: banner3, defaultChecked: true },
    { id: 'radio-card-example8-2', image: banner4 },
    { id: 'radio-card-example8-3', image: banner5 },
    { id: 'radio-card-example8-4', image: banner6 },
];
const AdvRadioEx8 = () => {
    return (_jsx(Row, { children: cardData.map(({ id, image, defaultChecked }) => (_jsx(Col, { lg: 3, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "radio-card", children: [_jsx(Form.Check.Input, { id: id, type: "radio", name: "radio-card-example8", defaultChecked: defaultChecked }), _jsxs("span", { className: "radio-card-wrapper text-center p-0 d-block", children: [_jsx(Image, { src: image, alt: "", className: "img-fluid" }), _jsx("span", { className: "position-absolute top-0 end-0 p-4 z-index-10", children: _jsx("span", { className: "check-icon" }) })] })] }) }, id))) }));
};
export default AdvRadioEx8;
