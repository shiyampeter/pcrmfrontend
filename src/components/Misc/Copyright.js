import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Copyright = () => {
    return (_jsx(_Fragment, { children: _jsxs(Stack, { direction: "horizontal", style: { lineHeight: 'normal' }, children: [_jsxs("div", { className: "text-muted", children: [_jsx("span", { className: "fs-12 fw-medium text-uppercase", children: "Copyright\u00A9" }), _jsx("span", { className: "ms-1", children: new Date().getFullYear() })] }), _jsx("span", { className: "vr mx-2 bg-secondary bg-opacity-25" }), _jsxs("span", { children: ["Made with ", _jsx("span", { className: "fs-12", children: "\u2764\uFE0F" }), ' ', _jsx(Link, { to: "mailto:wrapcoders@gmail.com", children: "Window" })] })] }) }));
};
export default Copyright;
