import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Image } from 'react-bootstrap';
import EmailTemplatesLayout from '../etemplates/EmailTemplatesLayout';
import EmailTemplatesFooter from '../etemplates/EmailTemplatesFooter';
import welcome from '@/assets/images/etemplate/welcome.svg';
const EmailTemplateWelcomeMessage = () => {
    return (_jsx(_Fragment, { children: _jsxs(EmailTemplatesLayout, { children: [_jsxs("div", { className: "text-center mx-auto", children: [_jsx("div", { className: "mt-4 mb-12", children: _jsx(Image, { src: welcome, fluid: true, alt: welcome }) }), _jsxs("div", { children: [_jsx("h3", { className: "fw-bold mb-3", children: "Welcome, Alexandra Della" }), _jsx("p", { className: "lead mb-0", children: "Lots of people make mistakes while creating paragraphs. Some writers just put whitespace in their text in random places." }), _jsx(Button, { variant: "primary", size: "lg", className: "my-16", children: "Let's Get Stared" })] })] }), _jsxs("div", { className: "fs-15", children: [_jsx("h5", { className: "fw-bold mb-3", children: "Your account is now acive." }), _jsx("p", { children: "If you have any questions, just reply to this email\u2014we're always happy to help out. Lorem ipsum dolor sit amet, consectetur adipisicing elit" }), _jsx("p", { children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." })] }), _jsx(EmailTemplatesFooter, {})] }) }));
};
export default EmailTemplateWelcomeMessage;
