import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import EmailTemplatesLayout from '../etemplates/EmailTemplatesLayout';
import EmailTemplatesFooter from '../etemplates/EmailTemplatesFooter';
import reset from '@/assets/images/etemplate/reset.svg';
const EmailTemplateResetPassword = () => {
    return (_jsx(_Fragment, { children: _jsxs(EmailTemplatesLayout, { children: [_jsxs("div", { className: "text-center mx-auto", children: [_jsx("div", { className: "mt-4 mb-12", children: _jsx(Image, { src: reset, fluid: true, alt: reset }) }), _jsxs("div", { children: [_jsx("h3", { className: "fw-bold mb-3", children: "Reset your password" }), _jsx("p", { className: "lead mb-0", children: "Resetting your password is easy. Just press the button below and follow the instructions. We'll have you up and running in no time." }), _jsx(Button, { variant: "primary", size: "lg", className: "my-16", children: "Reset Password" })] })] }), _jsxs("div", { className: "fs-15", children: [_jsx("h5", { className: "fw-bold mb-3", children: "Want a more secure account?" }), _jsxs("p", { children: ["We support two-factor authentication to help keep your information private.", _jsxs(Link, { to: "#!", className: "text-primary", children: [' ', "learn more..."] })] })] }), _jsx(EmailTemplatesFooter, {})] }) }));
};
export default EmailTemplateResetPassword;
