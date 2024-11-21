import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
const OverviewCompleation = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "hstack gap-4 justify-content-between mb-16", children: [_jsx("h5", { className: "card-title fw-semibold mb-0", children: "Compleation" }), _jsxs(Link, { to: "#!", className: "icon-link icon-link-hover link-primary", children: [_jsx("span", { children: "Complete" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] })] }), _jsxs("div", { className: "d-flex align-items-center flex-column", children: [_jsxs("div", { className: "d-flex justify-content-between w-100 mt-auto mb-2", children: [_jsx("span", { className: "fw-medium text-muted", children: "Profile compleation" }), _jsx("span", { className: "fw-bold", children: "78%" })] }), _jsx(ProgressBar, { now: 78, className: "w-100  rounded", style: { height: '5px' } })] })] }));
};
export default OverviewCompleation;
