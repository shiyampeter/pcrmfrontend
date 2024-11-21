import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Card, Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const links = [
    { to: '/other-pages/about-us', text: 'About' },
    { to: '/other-pages/contact-us', text: 'Contact' },
    { to: '/other-pages/pricing', text: 'Pricing' },
    { to: '/other-pages/privacy-policy', text: 'Privacy' },
    { to: '/other-pages/terms-services', text: 'Terms' },
];
const socialMediaIcons = [
    { iconClass: 'fi fi-brands-facebook' },
    { iconClass: 'fi fi-brands-twitter' },
    { iconClass: 'fi fi-brands-instagram' },
    { iconClass: 'fi fi-brands-linkedin' },
    { iconClass: 'fi fi-brands-twitter-alt' },
];
const CommonFooter = () => {
    return (_jsx(_Fragment, { children: _jsxs(Card.Footer, { className: "px-4 px-6 py-12 py-lg-16", children: [_jsxs("div", { className: "mb-6 mx-auto mx-md-0 text-center text-md-start", style: { maxWidth: '425px' }, children: [_jsx("div", { className: "mx-auto mx-md-0 border border-2 border-primary rounded-pill mb-4", style: { width: '3rem' } }), _jsx("h6", { className: "fw-bold", children: "WRAPCODERS INC." }), _jsx("p", { className: "fw-light mb-4", children: "We're here to bring financial stability, improve the economy. Leave money issue with us and focus on your business & make something awesome." })] }), _jsxs(Row, { className: "g-4 align-items-center", children: [_jsx(Col, { md: 8, lg: 6, children: _jsx(Stack, { gap: 4, direction: "horizontal", className: "flex-wrap justify-content-center justify-content-md-start", children: links.map(({ to, text }, idx) => (_jsx(Link, { to: to, children: text }, idx))) }) }), _jsx(Col, { md: 4, lg: 6, children: _jsx(Stack, { gap: 1, direction: "horizontal", className: "justify-content-center justify-content-md-end", children: socialMediaIcons.map(({ iconClass }, idx) => (_jsx(Button, { variant: "", className: "btn-icon", children: _jsx("i", { className: iconClass }) }, idx))) }) })] })] }) }));
};
export default CommonFooter;
