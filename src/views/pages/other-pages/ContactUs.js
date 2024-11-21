import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import { Card } from 'react-bootstrap';
import CommonHeader from '@/components/Pages/OtherPages/CommonHeader';
import CommonFooter from '@/components/Pages/OtherPages/CommonFooter';
import { ContactCard, ContactForm, ContactMap } from '@/components/Pages/OtherPages/Contact';
const ContactUs = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Contact Us" }), _jsxs(Card, { children: [_jsx(CommonHeader, { hintText: "Get in touch", bigTitle: "Contact US", leadDescription: "If you'd like to know more about my work or process feel free to get in touch. Either fill out the form with your inquiry or find the department email you'd like to contact below." }), _jsx("section", { className: "mx-4 mx-md-6 my-8 my-md-12 my-lg-16", children: _jsx(ContactCard, {}) }), _jsx(ContactForm, {}), _jsx(ContactMap, {}), _jsx(CommonFooter, {})] })] }));
};
export default ContactUs;
