import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import { Card } from 'react-bootstrap';
import CommonHeader from '@/components/Pages/OtherPages/CommonHeader';
import CommonFooter from '@/components/Pages/OtherPages/CommonFooter';
import { PricingTable } from '@/components/Pages/OtherPages/Pricing';
import { FaqHelp, FaqItems } from '@/components/Pages/OtherPages/FAQs';
const Pricing = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Pricing" }), _jsxs(Card, { children: [_jsx(CommonHeader, { hintText: "Pricing Plan", bigTitle: "Pricing Plan", leadDescription: "Compare our plans and find yours. Simple, trasnparent pricing that grow with you. Try any plan free for 30 days." }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(PricingTable, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(FaqItems, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(FaqHelp, {}) }), _jsx(CommonFooter, {})] })] }));
};
export default Pricing;
