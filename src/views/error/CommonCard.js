import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import ErrorLayout from './ErrorLayout';
const CommingSoon = ({ error, errorTitle, errorMessage }) => {
    return (_jsx(_Fragment, { children: _jsxs(ErrorLayout, { children: [_jsx("h2", { className: "fw-bolder mb-4 text-primary", style: { fontSize: '5rem' }, children: error }), _jsxs("div", { className: "mb-8", children: [_jsx("h3", { className: "fw-bold mb-3", children: errorTitle }), _jsx("p", { className: "fs-16 lead", children: errorMessage })] }), _jsx(Link, { to: "/", className: "btn btn-primary w-100", style: { maxWidth: '200px' }, children: "Back to Home" })] }) }));
};
export default CommingSoon;
