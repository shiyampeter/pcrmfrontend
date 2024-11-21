import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Col, Image, Row } from 'react-bootstrap';
import workingOffice from '@/assets/images/general/working-office.jpg';
import OverlayLayerStyle from '@/components/Misc/OverlayLayer';
const statistics = [
    { value: '99%', title: 'Data accuracy' },
    { value: '35.6k', title: 'Happy clients' },
    { value: '365+', title: 'Projects done' },
    { value: '24+', title: 'Trusted products' },
];
const AboutCount = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-8 mb-md-12 mb-lg-16 position-relative", children: [_jsx(Image, { src: workingOffice, alt: "Image", className: "img-fluid img-thumbnail rounded-3" }), _jsx("div", { style: OverlayLayerStyle, children: _jsx(Button, { variant: "", className: "bg-light text-dark border border-6 border-secondary-subtle hstack rounded-circle position-absolute top-50 start-50 translate-middle", style: { width: '5rem', height: '5rem' }, children: _jsx("i", { className: "fi fi-rr-play fs-24" }) }) })] }), _jsx(Row, { className: "g-3 g-md-6 align-items-center", children: statistics.map(({ value, title }, idx) => (_jsxs(Col, { sm: 6, lg: 3, children: [_jsx("div", { className: "fs-32 fw-bold text-dark mb-2", children: value }), _jsx("h4", { className: "text-primary mb-3", children: title }), _jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea tempore necessitatibus quia architecto voluptatum." })] }, idx))) })] }));
};
export default AboutCount;
