import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Copyright from '@/components/Misc/Copyright';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (_jsx("footer", { className: "footer-content", children: _jsxs(Stack, { direction: "horizontal", gap: 4, className: "footer-inner", children: [_jsx(Copyright, {}), _jsxs(Stack, { direction: "horizontal", gap: 3, className: "ms-auto d-none d-sm-flex", style: { lineHeight: 'normal' }, children: [_jsx(Link, { to: "../docs/index.html", children: "Documentation" }), _jsx(Link, { to: "../docs/changelog.html", children: "Changelog" }), _jsx(Link, { to: "../docs/support.html", children: "Support" })] })] }) }));
};
export default Footer;
