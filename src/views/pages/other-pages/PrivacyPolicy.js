import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import CommonHeader from '@/components/Pages/OtherPages/CommonHeader';
import CommonFooter from '@/components/Pages/OtherPages/CommonFooter';
import { PrivacyPolicyContent } from '@/components/Pages/OtherPages/PrivacyPolicy';
const PrivacyPolicy = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Privacy & Policy" }), _jsxs(Card, { children: [_jsx(CommonHeader, { hintText: "ABOUT THIS POLICY", bigTitle: "Privacy & Policy", leadDescription: "A privacy policy is a statement or legal document that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data." }), _jsx("div", { className: "mx-4 mx-md-6 mt-8 mt-md-12 mt-lg-16", children: _jsxs(Link, { to: "#!", children: [_jsx("span", { className: "text-muted", children: "Updated:" }), " 26 March, 2024"] }) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(PrivacyPolicyContent, {}) }), _jsx(CommonFooter, {})] })] }));
};
export default PrivacyPolicy;
