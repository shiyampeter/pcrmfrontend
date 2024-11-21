import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import EmailTemplatesLayout from '../etemplates/EmailTemplatesLayout';
import EmailTemplatesFooter from '../etemplates/EmailTemplatesFooter';
import card from '@/assets/images/etemplate/card.svg';
const EmailTemplateExpiredCard = () => {
    return (_jsx(_Fragment, { children: _jsxs(EmailTemplatesLayout, { children: [_jsxs("div", { className: "text-center mx-auto", children: [_jsx("div", { className: "mt-4 mb-12", children: _jsx(Image, { src: card, fluid: true, alt: card }) }), _jsxs("div", { children: [_jsx("h3", { className: "fw-bold mb-3", children: "Your card expired." }), _jsx("p", { className: "lead mb-0", children: "It happens. To keep your account active, just sign in and update your payment information. Press the button below to get started." }), _jsx(Button, { variant: "primary", size: "lg", className: "my-16", children: "Update Payment Info" })] })] }), _jsxs("div", { className: "fs-15", children: [_jsx("h5", { className: "fw-bold mb-3", children: "ant to save money?" }), _jsxs("p", { children: ["By switching to annual billing, you'll", ' ', _jsx("span", { className: "fw-bolder text-success", children: "Save 30%" }), " on your account. We like to think of it as a just reward for our loyal friends.", _jsxs(Link, { to: "#!", className: "text-primary", children: [' ', "learn more..."] })] })] }), _jsx(EmailTemplatesFooter, {})] }) }));
};
export default EmailTemplateExpiredCard;
