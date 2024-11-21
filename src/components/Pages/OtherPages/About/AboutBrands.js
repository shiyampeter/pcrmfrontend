import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Col, Image, Row } from 'react-bootstrap';
import brandData from './data/brandData';
const AboutBrands = () => {
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { lg: 12, children: _jsx("div", { className: "w-100 mx-auto text-center", style: { maxWidth: '576px' }, children: _jsx("h2", { className: "fw-bold lh-base mb-6", children: "We help hundreds of teams plan better events while saving money." }) }) }), brandData.map(({ image }, idx) => (_jsx(Col, { xs: 6, sm: 4, xl: 3, xxl: 2, children: _jsx(Card, { children: _jsx(Card.Body, { className: "text-center", children: _jsx(Image, { src: image, alt: "", className: "img-fluid", style: { height: '2.5rem' } }) }) }) }, idx)))] }) }));
};
export default AboutBrands;
