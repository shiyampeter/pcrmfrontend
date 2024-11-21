import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Image } from 'react-bootstrap';
import EmailTemplatesLayout from '../etemplates/EmailTemplatesLayout';
import EmailTemplatesFooter from '../etemplates/EmailTemplatesFooter';
import coupon from '@/assets/images/etemplate/coupon.svg';
const EmailTemplateCouponSale = () => {
    return (_jsx(_Fragment, { children: _jsxs(EmailTemplatesLayout, { children: [_jsxs("div", { className: "text-center mx-auto", children: [_jsx("div", { className: "mt-4 mb-12", children: _jsx(Image, { src: coupon, fluid: true, alt: coupon }) }), _jsxs("div", { className: "my-16", children: [_jsx("h3", { className: "fw-bold mb-3", children: "Coupon Sales" }), _jsx("p", { className: "lead mb-0", children: "Lots of people make mistakes while creating paragraphs. Some writers just put whitespace in their text in random places." })] })] }), _jsxs("div", { className: "p-12 bg-black rounded-5 text-center", children: [_jsxs("div", { className: "display-1 fw-bolder", children: [_jsx("span", { className: "text-white", children: "25%" }), " OFF"] }), _jsx(Button, { variant: "primary", size: "lg", className: "mt-12", children: "Claim your coupon \u2192" })] }), _jsx(EmailTemplatesFooter, {})] }) }));
};
export default EmailTemplateCouponSale;
