import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Image, Stack, Button } from 'react-bootstrap';
import workingOfficeTogather from '@/assets/images/general/working-office-togather.jpg';
import OverlayLayerStyle from '@/components/Misc/OverlayLayer';
const AboutCompany = () => {
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "g-6 align-items-center", children: [_jsxs(Col, { xl: 6, children: [_jsx("p", { className: "fs-12 fw-semibold text-primary mb-4 text-uppercase", children: "WHO WE ARE" }), _jsxs("div", { className: "fw-bold text-dark display-5 lh-base mb-6", children: ["About our company ", _jsx("br", {}), _jsxs("div", { className: "px-2 d-inline-block border border-2 border-primary position-relative", children: [_jsx("span", { className: "text-primary", children: "wrapdocers" }), _jsx("span", { className: "d-block bg-primary position-absolute", style: {
                                                width: '0.75rem',
                                                height: '0.75rem',
                                                left: '-0.3rem',
                                                top: '-0.3rem',
                                            } }), _jsx("span", { className: "d-block bg-primary position-absolute", style: {
                                                width: '0.75rem',
                                                height: '0.75rem',
                                                left: '-0.3rem',
                                                bottom: '-0.3rem',
                                            } }), _jsx("span", { className: "d-block bg-primary position-absolute", style: {
                                                width: '0.75rem',
                                                height: '0.75rem',
                                                right: '-0.3rem',
                                                top: '-0.3rem',
                                            } }), _jsx("span", { className: "d-block bg-primary position-absolute", style: {
                                                width: '0.75rem',
                                                height: '0.75rem',
                                                right: '-0.3rem',
                                                bottom: '-0.3rem',
                                            } })] }), ' ', "sky high."] }), _jsx("p", { className: "fs-20 lead mb-4", children: "We're here to bring financial stability, improve the economy. Leave money issue with us and focus on your business & make something awesome." }), _jsxs(Stack, { direction: "horizontal", gap: 1, children: [_jsx(Button, { variant: "primary", onClick: () => {
                                        navigate('/other-pages/pricing');
                                    }, children: "Pricing Plan" }), _jsx(Link, { to: "/other-pages/contact-us", className: "btn btn-light bg-secondary-subtle border border-secondary border-opacity-10", children: "Contact Us" })] })] }), _jsxs(Col, { xl: 6, className: "p-0 rounded position-relative", children: [_jsx(Image, { src: workingOfficeTogather, alt: "Image", className: "img-fluid img-thumbnail rounded-3" }), _jsx("div", { style: OverlayLayerStyle, children: _jsx(Button, { variant: "", className: "bg-light text-dark border border-6 border-secondary-subtle hstack rounded-circle position-absolute top-50 start-50 translate-middle", style: { width: '5rem', height: '5rem' }, children: _jsx("i", { className: "fi fi-rr-play fs-24" }) }) })] })] }) }));
};
export default AboutCompany;
