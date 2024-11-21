import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import { Card } from 'react-bootstrap';
import CommonHeader from '@/components/Pages/OtherPages/CommonHeader';
import CommonFooter from '@/components/Pages/OtherPages/CommonFooter';
import { AboutBrands, AboutCompany, AboutCount, AboutTeam, AboutQuote, AboutOffice, } from '@/components/Pages/OtherPages/About';
const AboutUs = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "About Us" }), _jsxs(Card, { children: [_jsx(CommonHeader, { hintText: "ABOUT US", bigTitle: "ABOUT US", leadDescription: "We're here to bring financial stability, improve the economy. Leave money issue with us and focus on your business & make something awesome." }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(AboutCompany, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(AboutBrands, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(AboutCount, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(AboutQuote, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(AboutTeam, {}) }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(AboutOffice, {}) }), _jsx(CommonFooter, {})] })] }));
};
export default AboutUs;
