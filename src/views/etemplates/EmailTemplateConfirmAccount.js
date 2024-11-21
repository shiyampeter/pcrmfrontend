import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import EmailTemplatesLayout from '../etemplates/EmailTemplatesLayout';
import EmailTemplatesFooter from '../etemplates/EmailTemplatesFooter';
import confirm from '@/assets/images/etemplate/confirm.svg';
const EmailTemplateConfirmAccount = () => {
    return (_jsx(_Fragment, { children: _jsxs(EmailTemplatesLayout, { children: [_jsxs("div", { className: "text-center mx-auto", children: [_jsx("div", { className: "mt-4 mb-12", children: _jsx(Image, { src: confirm, fluid: true, alt: confirm }) }), _jsxs("div", { children: [_jsx("h3", { className: "fw-bold mb-3", children: "Confirm your account!" }), _jsx("p", { className: "lead mb-0", children: "We're excited to have you get started. First, you need to confirm your account. Just press the button below." }), _jsx(Button, { variant: "primary", size: "lg", className: "my-16", children: "Conform Account" })] })] }), _jsxs("div", { className: "fs-15", children: [_jsxs("p", { children: ["If that doesn't work, copy and paste the following link in your browser:", _jsxs(Link, { to: "https://bit.ly/3xyXdr2", className: "fs-16 fw-semibold text-primary", children: [' ', "https://bit.ly/3xyXdr2"] })] }), _jsx("p", { children: "If you have any questions, just reply to this email\u2014we're always happy to help out." })] }), _jsx(EmailTemplatesFooter, {})] }) }));
};
export default EmailTemplateConfirmAccount;
