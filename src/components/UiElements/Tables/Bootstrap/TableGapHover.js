import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Table, Image } from 'react-bootstrap';
import { tableData } from './data';
function TableGapHover() {
    const tableGapStyle = {
        borderSpacing: '0 0.75rem',
        borderCollapse: 'separate',
    };
    return (_jsxs(Table, { responsive: true, hover: true, className: "table-gap-hover mb-0 overflow-hidden ", style: tableGapStyle, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "border-top border-start", children: "#ID" }), _jsx("th", { className: "border-top", children: "Sale Rep." }), _jsx("th", { className: "border-top", children: "Status" }), _jsx("th", { className: "border-top", children: "Date & Time" }), _jsx("th", { className: "text-end border-top border-end", children: "Actions" })] }) }), _jsx("tbody", { children: (tableData || []).map((data, idx) => {
                    return (_jsxs("tr", { children: [_jsx("td", { className: "border-top border-start", children: _jsxs(Link, { to: "#!", children: ["#", data.id] }) }), _jsx("td", { className: "border-top", children: _jsxs(Link, { to: "#!", className: "d-flex gap-3 align-items-center", children: [_jsx("div", { className: "avatar avatar-sm flex-grow-0", children: _jsx(Image, { src: data.avatar, alt: "", className: "img-fluid" }) }), _jsxs("div", { className: "flex-shrink-0", children: [_jsx("div", { children: data.name }), _jsx("div", { className: "fs-13 fw-normal text-muted", children: data.email })] })] }) }), _jsx("td", { className: "border-top", children: _jsx("span", { dangerouslySetInnerHTML: { __html: data.status } }) }), _jsx("td", { className: "border-top", children: data.dob }), _jsx("td", { className: "text-end border-top border-end", children: _jsx(Link, { to: "#", className: "btn btn-icon", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical fs-14" }) }) })] }, idx));
                }) })] }));
}
export default TableGapHover;