import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// images
import banner3 from '@/assets/images/banner/3.jpg';
import banner4 from '@/assets/images/banner/4.jpg';
import banner5 from '@/assets/images/banner/5.jpg';
import banner6 from '@/assets/images/banner/6.jpg';
const checkboxData = [
    { id: 'check-card-example8-1', imageSrc: banner3, defaultChecked: true },
    { id: 'check-card-example8-2', imageSrc: banner4 },
    { id: 'check-card-example8-3', imageSrc: banner5 },
    { id: 'check-card-example8-4', imageSrc: banner6 },
];
const AdvCheckboxEx8 = () => {
    return (_jsx(Row, { children: checkboxData.map(({ id, imageSrc, defaultChecked }) => (_jsx(Col, { lg: 3, children: _jsxs(Form.Check.Label, { htmlFor: id, className: "check-card", children: [_jsx(Form.Check.Input, { id: id, type: "checkbox", name: "check-card-example8", defaultChecked: defaultChecked }), _jsxs("span", { className: "check-card-wrapper text-center p-0 d-block", children: [_jsx(Image, { src: imageSrc, alt: "", className: "img-fluid" }), _jsx("span", { className: "position-absolute top-0 end-0 p-4 z-index-10", children: _jsx("span", { className: "check-icon" }) })] })] }) }, id))) }));
};
export default AdvCheckboxEx8;
