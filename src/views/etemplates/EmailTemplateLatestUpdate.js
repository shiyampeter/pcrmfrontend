import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Row, Col, Card, Image } from 'react-bootstrap';
import EmailTemplatesLayout from '../etemplates/EmailTemplatesLayout';
import EmailTemplatesFooter from '../etemplates/EmailTemplatesFooter';
import update from '@/assets/images/etemplate/update.svg';
import img1 from '@/assets/images/gallery/1.png';
import img2 from '@/assets/images/gallery/2.png';
import img3 from '@/assets/images/gallery/3.png';
import img4 from '@/assets/images/gallery/4.png';
const updateData = [
    {
        image: img1,
        title: 'Elegant Dashboard Design',
        description: 'Discover the sleek and intuitive dashboard design that simplifies navigation and enhances user experience.',
    },
    {
        image: img2,
        title: 'Productivity Boosting Tools',
        description: 'Explore a suite of productivity tools designed to streamline workflows and optimize task management.',
    },
    {
        image: img3,
        title: 'Seamless Collaboration Platform',
        description: 'Unlock seamless collaboration with a platform that fosters teamwork and facilitates communication across teams.',
    },
    {
        image: img4,
        title: 'Innovative Data Visualization',
        description: 'Experience innovative data visualization techniques that transform complex information into actionable insights.',
    },
];
const EmailTemplateLatestUpdate = () => {
    return (_jsx(_Fragment, { children: _jsxs(EmailTemplatesLayout, { children: [_jsxs("div", { className: "text-center mx-auto", children: [_jsx("div", { className: "mt-4 mb-12", children: _jsx(Image, { src: update, fluid: true, alt: update }) }), _jsxs("div", { className: "my-16", children: [_jsx("h3", { className: "fw-bold mb-3", children: "Latest Updates" }), _jsx("p", { className: "lead mb-0", children: "Lots of people make mistakes while creating paragraphs. Some writers just put whitespace in their text in random places." })] })] }), _jsx(Row, { className: "g-4", children: updateData.map(({ image, title, description }, index) => (_jsx(Col, { sm: 6, children: _jsxs(Card, { children: [_jsx(Card.Img, { variant: "top", src: image, className: "bg-secondary-subtle" }), _jsxs(Card.Body, { children: [_jsx("h6", { className: "fw-bold text-truncate mb-3", children: title }), _jsx("p", { className: "fs-13 text-muted", children: description }), _jsx(Link, { to: "#!", className: "text-primary", children: "Learn more..." })] })] }) }, index))) }), _jsx(EmailTemplatesFooter, {})] }) }));
};
export default EmailTemplateLatestUpdate;
