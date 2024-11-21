import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const contactCards = [
    {
        iconClass: 'fi fi-rr-comment-alt',
        title: 'Chat to sales',
        description: 'Speaks to our friendly teams.',
        link: 'support@wrapcoders.com',
        col: 'col-12 col-md-6 col-lg-4',
    },
    {
        iconClass: 'fi fi-rr-map',
        title: 'Visit our store',
        description: 'Visit our office HQ.',
        link: 'Smith Street, California, USA',
        col: 'col-12 col-md-6 col-lg-4',
    },
    {
        iconClass: 'fi fi-rr-phone-call',
        title: 'Call now us',
        description: 'Mon-Fri from 10am to 6pm.',
        link: '+1(375)-98745-632',
        col: 'col-12 col-md-12 col-lg-4',
    },
];
const ContactCard = () => {
    return (_jsx(_Fragment, { children: _jsx(Row, { className: "g-3 g-md-4", children: contactCards.map(({ col, iconClass, title, description, link }, index) => (_jsx(Col, { className: col, children: _jsx(Card, { children: _jsxs(Card.Body, { className: "text-center", children: [_jsx("i", { className: `${iconClass} fs-32 text-primary` }), _jsxs("div", { className: "my-4", children: [_jsx("h5", { children: title }), _jsx("p", { children: description })] }), _jsx(Link, { to: "#!", children: link })] }) }) }, index))) }) }));
};
export default ContactCard;
