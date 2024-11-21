import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MenuCard = () => {
    return (_jsx(Card, { className: "nav-card text-center mx-3 my-6", children: _jsxs(Card.Body, { className: "text-primary", children: [_jsx("i", { className: "fi fi-rr-rocket-lunch fs-1 mb-6 d-inline-block", style: { transform: 'rotate(320deg)' } }), _jsx("h6", { className: "fs-16 text-uppercase text-primary fw-bold mb-2", children: "Support Center" }), _jsx("p", { className: "fs-13 fw-lighter mb-4", children: "Window is a production ready admin dashboard to get started up and running quickly." }), _jsx(Link, { to: "mailto:wrapcoders@gmail.com", className: "btn btn-primary w-100", children: "Get Support" })] }) }));
};
export default MenuCard;
