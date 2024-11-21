import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import avatar from '@/assets/images/avatars/1.png';
const AboutQuote = () => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "py-8 py-md-16 py-lg-24 bg-secondary-subtle rounded-3 border", children: _jsxs("div", { className: "px-4 w-100 mx-auto text-center", style: { maxWidth: '768px' }, children: [_jsx("div", { className: "mx-auto text-primary mb-4", children: _jsx("i", { className: "fi fi-rr-quote-right fs-2" }) }), _jsx("p", { className: "fs-12 fw-semibold text-primary mb-3 text-uppercase", children: "From Our Team" }), _jsx("h3", { className: "text-dark lh-base mb-4", children: "Untitled truely values work-life balance. We work hard and deliver, but at the end of the day you can switch off and plan better events while saving money." }), _jsxs(Stack, { children: [_jsx("div", { children: _jsx(Avatar, { type: "image", src: avatar, alt: "User Avatar", className: "avatar avatar-md justify-content-center" }) }), _jsx(Link, { to: "#!", children: "Alexandra Della" }), _jsx("span", { className: "text-muted", children: "CEO, Founder" })] })] }) }) }));
};
export default AboutQuote;
