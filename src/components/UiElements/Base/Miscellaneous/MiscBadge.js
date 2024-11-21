import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from 'react-bootstrap';
const buttonsData = [
    { variant: 'primary' },
    { variant: 'secondary' },
    { variant: 'success' },
    { variant: 'warning' },
    { variant: 'danger' },
    { variant: 'info' },
];
const MiscBadge = () => {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "d-flex flex-wrap gap-8", children: buttonsData.map(({ variant }, index) => (_jsxs(Button, { variant: "", type: "button", className: `bg-${variant}-subtle text-${variant}`, children: ["Notifications ", _jsx("span", { className: `ms-2 badge bg-${variant}`, children: "5+" })] }, index))) }), _jsx("hr", { className: "my-6" }), _jsx("div", { className: "d-flex flex-wrap gap-12", children: buttonsData.map(({ variant }, index) => (_jsxs(Button, { variant: "", type: "button", className: `bg-${variant}-subtle text-${variant} position-relative`, children: ["Inbox", _jsxs("span", { className: `position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${variant}`, children: ["99+", _jsx("span", { className: "visually-hidden", children: "unread messages" })] })] }, index))) }), _jsx("hr", { className: "my-6" }), _jsx("div", { className: "d-flex flex-wrap gap-12", children: buttonsData.map(({ variant }, index) => (_jsxs(Button, { variant: "", type: "button", className: `bg-${variant}-subtle text-${variant} position-relative`, children: ["Profile", _jsx("span", { className: `position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle bg-${variant}`, children: _jsx("span", { className: "visually-hidden", children: "New alerts" }) })] }, index))) })] }));
};
export default MiscBadge;
