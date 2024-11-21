import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Col, Dropdown, DropdownDivider, Row, Stack } from 'react-bootstrap';
const storeData = [
    {
        title: 'Store Sales',
        icon: 'fi-rr-shopping-cart',
        color: 'warning',
        amount: '$89,585',
    },
    {
        title: 'Store Orders',
        icon: 'fi-rr-shopping-cart-add',
        color: 'danger',
        amount: '$42,455',
    },
    {
        title: 'Store Earnings',
        icon: 'fi-rr-sack-dollar',
        color: 'success',
        amount: '$38,625',
    },
];
const StoreOverview = () => {
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Store Overview" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "Full Reports" })] })] })] })] }), _jsx(Card.Body, { children: _jsx(Row, { className: "g-3 g-md-4", children: storeData.map(({ icon, color, amount, title }, index) => (_jsx(Col, { xs: 12, children: _jsx(Card.Body, { className: "border rounded-3 p-3", children: _jsxs(Stack, { direction: "horizontal", className: "pd-5", children: [_jsx("div", { className: `d-flex align-items-center justify-content-center rounded bg-${color}-subtle text-${color}`, style: { width: '3.5rem', height: '3.5rem' }, children: _jsx("i", { className: `fi ${icon} fs-2` }) }), _jsxs("div", { className: "ms-auto text-end", children: [_jsx("h4", { className: "fs-18 fw-bold", children: amount }), _jsx("span", { className: "fs-13 text-muted", children: title })] })] }) }) }, index))) }) })] }) }));
};
export default StoreOverview;
