import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import { Card, Dropdown, DropdownDivider, Table, Button, Pagination } from 'react-bootstrap';
// Avatar Images
import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import avatar3 from '@/assets/images/avatars/3.png';
import avatar4 from '@/assets/images/avatars/4.png';
import avatar5 from '@/assets/images/avatars/5.png';
const LatestLeads = () => {
    const leads = [
        {
            avatar: avatar1,
            name: 'Archie Cantones',
            email: 'arcie.tones@gmail.com',
            proposal: 'Sent',
            date: '11/06/2023 10:53',
            status: 'Completed',
            color: 'success',
        },
        {
            avatar: avatar2,
            name: 'Holmes Cherryman',
            email: 'golms.chan@gmail.com',
            proposal: 'New',
            date: '11/06/2023 10:53',
            status: 'In Progress',
            color: 'warning',
        },
        {
            avatar: avatar3,
            name: 'Malanie Hanvey',
            email: 'lanie.nveyn@gmail.com',
            proposal: 'Sent',
            date: '11/06/2023 10:53',
            status: 'Completed',
            color: 'success',
        },
        {
            avatar: avatar4,
            name: 'Kenneth Hune',
            email: 'nneth.une@gmail.com',
            proposal: 'Rejected',
            date: '11/06/2023 10:53',
            status: 'Not Interested',
            color: 'danger',
        },
        {
            avatar: avatar5,
            name: 'Valentine Maton',
            email: 'alenine.aton@gmail.com',
            proposal: 'Sent',
            date: '11/06/2023 10:53',
            status: 'Completed',
            color: 'success',
        },
    ];
    return (_jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Latest Leads" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "All Channels" })] })] })] })] }), _jsxs(Table, { responsive: true, className: "mb-0", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b", children: [_jsx("th", { scope: "row", children: "Users" }), _jsx("th", { children: "Proposal" }), _jsx("th", { children: "Date" }), _jsx("th", { children: "Status" }), _jsx("th", { className: "text-end", children: "Actions" })] }) }), _jsx("tbody", { children: leads.map(({ avatar, name, email, proposal, date, status, color }, index) => (_jsxs("tr", { children: [_jsx("td", { children: _jsxs("div", { className: "d-flex align-items-center gap-3", children: [_jsx(Avatar, { type: "image", size: "md", src: avatar, alt: name }), _jsxs(Link, { to: "#!", children: [_jsx("h6", { className: "mb-1", children: name }), _jsx("span", { className: "fs-13 d-block fw-normal text-muted", children: email })] })] }) }), _jsx("td", { children: _jsx("span", { className: `badge bg-${color}-subtle text-${color}`, children: proposal }) }), _jsx("td", { children: date }), _jsx("td", { children: _jsx("span", { className: `badge bg-${color}-subtle text-${color}`, children: status }) }), _jsx("td", { className: "text-end", children: _jsx(Button, { variant: "light", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }) })] }, index))) })] }), _jsx(Card.Footer, { className: "border-top-0", children: _jsxs(Pagination, { className: "mb-0", children: [_jsx(Pagination.Prev, {}), [...Array(4)].map((_, index) => (_jsx(Pagination.Item, { children: index + 1 }, index))), _jsx(Pagination.Next, {})] }) })] }));
};
export default LatestLeads;
