import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Breadcrumb } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const PageBreadcrumb = ({ subName, title, addedChild }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsxs("title", { children: [title, " | Window - React Admin & Dashboard"] }) }), subName && (_jsxs("div", { className: "mt-2 mb-4 mb-md-6", children: [_jsx("h4", { className: "fw-semibold", children: title }), addedChild, _jsx("div", { className: "page-title-right", children: _jsxs("ol", { className: "breadcrumb m-0", children: [_jsx(Link, { to: "/", className: "breadcrumb-item", children: "Home" }), _jsx(Breadcrumb.Item, { children: subName }), _jsx(Breadcrumb.Item, { active: true, children: title })] }) })] }))] }));
};
export default PageBreadcrumb;
