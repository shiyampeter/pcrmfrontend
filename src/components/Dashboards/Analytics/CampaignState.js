import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Dropdown, Pagination, Badge, Table, DropdownDivider, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CampaignState = () => {
    const campaigns = [
        {
            id: 1,
            name: '[US] Google Display Network',
            desc: 'Maximizing well-planned advertising.',
            status: 'In Progress',
            state: 'primary',
            progress: [1, 1, 1, 0, 0],
        },
        {
            id: 2,
            name: '[UK] Shopping campaign',
            desc: 'Optimizing campaign for better results.',
            status: 'Upcoming',
            state: 'warning',
            progress: [1, 1, 1, 0, 0],
        },
        {
            id: 3,
            name: '[FR] Dynamic Search Ads',
            desc: 'Enhancing brand through strategic ads.',
            status: 'Completed',
            state: 'success',
            progress: [1, 1, 1, 1, 1],
        },
        {
            id: 4,
            name: '[AU] Spring Sale 2024',
            desc: 'Boosting sales with targeted campaigns.',
            status: 'Rejected',
            state: 'danger',
            progress: [1, 1, 1, 0, 0],
        },
        {
            id: 5,
            name: '[GB] Black Friday 2024',
            desc: 'When running several campaigns.',
            status: 'Updating',
            state: 'info',
            progress: [1, 1, 1, 0, 0],
        },
    ];
    return (_jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Campaign State" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "All Campaigns" })] })] })] })] }), _jsxs(Table, { responsive: true, className: "mb-0", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Name" }), _jsx("th", { className: "text-end", children: "Status" }), _jsx("th", { children: "State" }), _jsx("th", { className: "text-end", children: "Action" })] }) }), _jsx("tbody", { children: campaigns.map((campaign) => (_jsxs("tr", { children: [_jsx("td", { children: _jsxs("div", { className: "d-flex gap-3", children: [_jsx("div", { className: "avatar avatar-md", children: _jsx("i", { className: `fi fi-rr-${campaign.id}` }) }), _jsxs("div", { children: [_jsx(Link, { to: "", className: "mb-2 d-block", children: _jsx("span", { children: campaign.name }) }), _jsx("p", { className: "fs-13 text-muted mb-0", children: campaign.desc })] })] }) }), _jsx("td", { className: "text-end", children: _jsx(Badge, { className: `bg-${campaign.state}-subtle text-${campaign.state}`, children: campaign.status }) }), _jsx("td", { children: _jsx("div", { className: "d-flex gap-1", children: campaign.progress.map((p, index) => (_jsx("div", { className: `bg-${p ? campaign.state : 'secondary'} rounded-pill opacity-${p ? 75 : 25}`, style: { width: '1.5rem', height: '0.25rem' } }, index))) }) }), _jsx("td", { className: "text-end", children: _jsx(Button, { variant: "light", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-rr-arrow-small-right" }) }) })] }, campaign.id))) })] }), _jsx(Card.Footer, { children: _jsxs(Pagination, { className: "mb-0", children: [_jsx(Pagination.Prev, {}), [...Array(4)].map((_, index) => (_jsx(Pagination.Item, { children: index + 1 }, index))), _jsx(Pagination.Next, {})] }) })] }));
};
export default CampaignState;
