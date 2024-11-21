import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button, Card, Dropdown, DropdownDivider, ListGroup, Stack } from 'react-bootstrap';
const MeetingItem = ({ date, month, title, time, joinButtonVariant, joinButtonText, badgeDate, badgeColor, badgeText, }) => {
    const [loading, setLoading] = useState(false);
    const [joined, setJoined] = useState(false);
    const handleJoinClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setJoined(true);
            toast.success('Meeting joined successfully!');
        }, 2000);
    };
    return (_jsx(ListGroup.Item, { className: "py-5", children: _jsxs("div", { className: "d-flex gap-4", children: [_jsxs("div", { className: `p-2 rounded-2 bg-${badgeColor}-subtle text-${badgeColor} text-center flex-shrink-0`, style: { width: '4rem', height: '4rem' }, children: [_jsx("span", { className: "d-block fw-bold fs-18", children: date }), _jsx("span", { className: "d-block fw-semibold fs-14", children: month })] }), _jsxs("div", { className: "w-100", children: [_jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsxs("div", { className: "py-1", children: [_jsx("h6", { children: _jsxs(Link, { to: "#!", children: [title, " "] }) }), _jsx("div", { className: "fs-13 text-muted mb-2", children: time })] }), _jsx(Button, { variant: joinButtonVariant, className: "btn-xs ms-auto text-white", onClick: handleJoinClick, disabled: loading || joined, children: loading ? (_jsx("span", { children: "Joining..." })) : joined ? (_jsx("span", { children: "Joined" })) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "fi fi-rr-plus fs-10" }), _jsx("span", { className: "ms-1", children: joinButtonText })] })) })] }), _jsxs("div", { className: "d-flex gap-2", children: [_jsxs("span", { className: "p-2 hstack gap-2 badge text-body-secondary border rounded-pill", children: [_jsx("i", { className: "fi fi-rr-calendar fs-12" }), _jsx("span", { children: badgeDate })] }), _jsxs("span", { className: "p-2 hstack gap-2 badge text-body-secondary border rounded-pill", children: [_jsx("span", { className: `rounded-circle d-inline-block bg-${badgeColor}`, style: { width: '0.5rem', height: '0.5rem' } }), _jsx("span", { children: badgeText })] })] })] })] }) }));
};
const NewMeeting = () => {
    const meetings = [
        {
            date: 22,
            month: 'FEB',
            title: 'Standup team meeting',
            time: '4:30 to 7:00pm - 2h 30min',
            joinButtonVariant: 'danger',
            joinButtonText: 'Join',
            badgeDate: '22 Feb 2024',
            badgeColor: 'danger',
            badgeText: 'Urgent',
        },
        {
            date: 24,
            month: 'FEB',
            title: 'Standup team meeting',
            time: '4:30 to 7:00pm - 2h 30min',
            joinButtonVariant: 'success',
            joinButtonText: 'Join',
            badgeDate: '24 Feb 2024',
            badgeColor: 'success',
            badgeText: 'Normal',
        },
        {
            date: 25,
            month: 'FEB',
            title: 'Standup team meeting',
            time: '4:30 to 7:00pm - 2h 30min',
            joinButtonVariant: 'warning',
            joinButtonText: 'Join',
            badgeDate: '25 Feb 2024',
            badgeColor: 'warning',
            badgeText: 'Normal',
        },
    ];
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "New Meeting" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "All Channels" })] })] })] })] }), _jsx(Card.Body, { className: "p-0", children: _jsx(ListGroup, { variant: "flush", children: meetings.map((meeting, index) => (_jsx(MeetingItem, { ...meeting }, index))) }) }), _jsx(Card.Footer, { className: "text-center", children: _jsxs(Link, { to: "", className: "ms-auto icon-link icon-link-hover link-primary", children: [_jsx("span", { children: "View Details" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] }) })] }) }));
};
export default NewMeeting;
