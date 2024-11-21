import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Copyright from '@/components/Misc/Copyright';
import { Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PublicFooter = () => {
    return (_jsx("footer", { className: "footer-public bg-body-tertiary hstack border-top", style: { minHeight: '4rem' }, children: _jsxs(Container, { className: "d-flex align-items-center", children: [_jsx(Copyright, {}), _jsxs(Stack, { direction: "horizontal", gap: 3, className: "ms-auto d-none d-sm-flex", style: { lineHeight: 'normal' }, children: [_jsx(Link, { to: "../docs/index.html", children: "Docs" }), _jsx(Link, { to: "../docs/changelog.html", children: "Changelog" }), _jsx(Link, { to: "../docs/support.html", children: "Support" })] })] }) }));
};
export default PublicFooter;
