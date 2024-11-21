import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Table, Image } from 'react-bootstrap';
import { tableData } from './data';
function TableDefault() {
    return (_jsxs(Table, { responsive: true, className: "mb-0", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "#ID" }), _jsx("th", { children: "Sale Rep." }), _jsx("th", { children: "Status" }), _jsx("th", { children: "Date & Time" }), _jsx("th", { className: "text-end", children: "Actions" })] }) }), _jsx("tbody", { children: (tableData || []).map((data, idx) => {
                    return (_jsxs("tr", { children: [_jsx("td", { children: _jsxs(Link, { to: "#!", children: ["#", data.id] }) }), _jsx("td", { children: _jsxs(Link, { to: "#!", className: "d-flex gap-3 align-items-center", children: [_jsx("div", { className: "avatar avatar-sm flex-grow-0", children: _jsx(Image, { src: data.avatar, alt: "", className: "img-fluid" }) }), _jsxs("div", { className: "flex-shrink-0", children: [_jsx("div", { children: data.name }), _jsx("div", { className: "fs-13 fw-normal text-muted", children: data.email })] })] }) }), _jsx("td", { children: _jsx("span", { dangerouslySetInnerHTML: { __html: data.status } }) }), _jsx("td", { children: data.dob }), _jsx("td", { className: "text-end", children: _jsx(Link, { to: "#", className: "btn btn-icon", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical fs-14" }) }) })] }, idx));
                }) })] }));
}
export default TableDefault;
