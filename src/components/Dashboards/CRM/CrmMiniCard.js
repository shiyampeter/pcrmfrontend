import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, Col, ProgressBar, Row, Stack } from 'react-bootstrap';
const cardData = [
    {
        icon: 'album-circle-plus',
        title: 'Awaiting payment',
        count: '37/50',
        amount: '$5,569',
        percentage: 56,
        color: 'warning',
    },
    {
        icon: 'briefcase',
        title: 'Converted leads',
        count: '23/40',
        amount: '$2,326',
        percentage: 67,
        color: 'danger',
    },
    {
        icon: 'animated-icon',
        title: 'Projects progress',
        count: '16/20',
        amount: '$3,478',
        percentage: 78,
        color: 'success',
    },
];
const CrmMiniCard = () => {
    return (_jsx(Row, { xl: 3, children: cardData.map(({ icon, count, title, amount, percentage, color }, index) => (_jsx(Col, { children: _jsx(Card, { children: _jsxs(Card.Body, { children: [_jsxs(Stack, { direction: "horizontal", gap: 4, className: "mb-12 align-items-start", children: [_jsxs(Stack, { direction: "horizontal", gap: 4, children: [_jsx("div", { className: `d-flex align-items-center justify-content-center rounded bg-${color}-subtle text-${color}`, style: { width: '3.5rem', height: '3.5rem' }, children: _jsx("i", { className: `fs-4 fi fi-rr-${icon}` }) }), _jsxs("div", { children: [_jsx("div", { className: "fs-24 fw-bold text-dark", children: count }), _jsx("div", { children: title })] })] }), _jsx(Button, { variant: "light", className: "btn-icon btn-md ms-auto", children: _jsx("i", { className: "fi fi-br-menu-dots-vertical" }) })] }), _jsxs("div", { children: [_jsxs(Stack, { direction: "horizontal", gap: 2, className: "mb-2", children: [_jsx("div", { children: title }), _jsxs("div", { className: "fs-13 ms-auto", children: [amount, " ", _jsxs("span", { className: " text-muted", children: ["(", percentage, "%)"] })] })] }), _jsx(ProgressBar, { variant: color, now: percentage, style: { height: '0.25rem' } })] })] }) }) }, index))) }));
};
export default CrmMiniCard;
