import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import { Card } from 'react-bootstrap';
import CommonHeader from '@/components/Pages/OtherPages/CommonHeader';
import CommonFooter from '@/components/Pages/OtherPages/CommonFooter';
import { FaqItems, FaqHelp } from '@/components/Pages/OtherPages/FAQs';
import { ContactCard } from '@/components/Pages/OtherPages/Contact';
const FAQs = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "FAQs" }), _jsxs(Card, { children: [_jsx(CommonHeader, { hintText: "FAQ's", bigTitle: "FAQ's", leadDescription: "Frequently asked questions. Here are the most frequently asked questions you may check before getting started" }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(FaqItems, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(ContactCard, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(FaqHelp, {}) }), _jsx(CommonFooter, {})] })] }));
};
export default FAQs;
