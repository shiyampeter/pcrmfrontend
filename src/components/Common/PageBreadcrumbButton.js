import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageBreadcrumb from './PageBreadcrumb';
const PageBreadcrumbButton = ({ title, subName, url }) => {
    return (_jsx(_Fragment, { children: _jsxs(Stack, { direction: "horizontal", className: "justify-content-between", children: [_jsx(PageBreadcrumb, { title: title, subName: subName }), _jsx(Stack, { gap: 2, direction: "horizontal", className: "mt-2 mb-4 mb-md-6", children: _jsx(Link, { to: url, target: "_black", className: "btn btn-primary ", children: "Offical Docs" }) })] }) }));
};
export default PageBreadcrumbButton;
