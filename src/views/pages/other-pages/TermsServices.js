import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import CommonHeader from '@/components/Pages/OtherPages/CommonHeader';
import CommonFooter from '@/components/Pages/OtherPages/CommonFooter';
import { TermsServicesContent } from '@/components/Pages/OtherPages/TermsServices';
const TermsServices = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Terms of Services" }), _jsxs(Card, { children: [_jsx(CommonHeader, { hintText: "Terms of Services", bigTitle: "Terms of Services", leadDescription: "Terms of service (ToS) is a type of document stating details about what a service provider is responsible for as well as user obligations that must be adhered to for continuation of the service." }), _jsx("div", { className: "mx-4 mx-md-6 mt-8 mt-md-12 mt-lg-16", children: _jsxs(Link, { to: "#!", children: [_jsx("span", { className: "text-muted", children: "Updated:" }), " 26 March, 2024"] }) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(TermsServicesContent, {}) }), _jsx(CommonFooter, {})] })] }));
};
export default TermsServices;
