import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, Dropdown, DropdownDivider } from 'react-bootstrap';
import ActivityComponentShort from '@/components/Pages/UserProfile/Activity/ActivityComponentShort';
const RecentActivity = () => {
    return (_jsx(_Fragment, { children: _jsxs(Card, { className: "overflow-hidden", children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Recent Activity" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "All Channels" })] })] })] })] }), _jsx(PerfectScrollbar, { style: { maxHeight: '510px' }, children: _jsx(ActivityComponentShort, {}) })] }) }));
};
export default RecentActivity;
