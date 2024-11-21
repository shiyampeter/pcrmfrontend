import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Card, Col, Row, Stack, Dropdown, ProgressBar } from 'react-bootstrap';
import Loading from '@/components/Misc/Loading';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import projectsData from './data/projectsData';
const ProjectsComponent = () => {
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "g-3 g-md-4", children: [projectsData.map(({ color, badge, name, client, startDate, endDate, desc, progress, avatars, attach, comment, }, idx) => (_jsx(Col, { sm: 6, xxl: 4, children: _jsx(Card, { children: _jsxs(Card.Body, { children: [_jsxs(Stack, { direction: "horizontal", className: "mb-6", children: [_jsx("div", { className: "flex-grow-1 me-3", children: _jsx("div", { className: `badge bg-${color}-subtle text-${color}`, children: badge }) }), _jsxs(Dropdown, { align: 'end', className: "flex-shrink-0 ms-2", children: [_jsx(Dropdown.Toggle, { variant: "soft-light", size: "sm", className: "rounded-pill", children: "Action" }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { href: "#!", children: "Invite" }), _jsx(Dropdown.Item, { href: "#!", children: "Rename" }), _jsx(Dropdown.Item, { href: "#!", children: "View Details" }), _jsx(Dropdown.Item, { href: "#!", children: "Add to Favorite" }), _jsx(Dropdown.Divider, {}), _jsx(Dropdown.Item, { href: "#!", className: "text-danger", children: "Leave Project" })] })] })] }), _jsxs(Stack, { direction: "horizontal", className: "justify-content-between mb-6", children: [_jsxs("div", { children: [_jsx("h5", { className: "fs-15 fw-bold text-truncate", children: _jsx(Link, { to: "#!", children: name }) }), _jsxs("div", { className: "text-muted text-truncate", children: ["Client:", ' ', _jsx(Link, { to: "#!", className: "fs-11 badge bg-secondary-subtle text-muted", children: client })] })] }), _jsxs("div", { children: [_jsxs("div", { className: "text-muted text-truncate mb-1", children: ["Started:", ' ', _jsx("span", { className: "fs-12 fw-medium text-success", children: startDate.toLocaleDateString() })] }), _jsxs("div", { className: "text-muted text-truncate", children: ["Deadline:", ' ', _jsx("span", { className: "fs-12 fw-medium text-danger", children: endDate.toLocaleDateString() })] })] })] }), _jsx("p", { className: "text-muted", children: desc }), _jsxs("div", { className: "my-6", children: [_jsxs("h5", { className: "fs-12", children: ["Inprogress ", _jsxs("span", { className: "float-end", children: [progress, "%"] })] }), _jsx(ProgressBar, { now: progress, variant: `w-100 rounded bg-${color}`, style: { height: '5px' } })] }), _jsxs(Stack, { direction: "horizontal", className: "mt-3 justify-content-between", children: [_jsx("div", { className: "avatar-group avatar-group-sm", children: avatars.map((avatar, idx) => (_jsx(Avatar, { type: "image", src: avatar, alt: `User Avatar ${idx + 1}`, className: "avatar avatar-sm" }, idx))) }), _jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsxs(Link, { to: "#!", className: "text-muted hstack", children: [_jsx("i", { className: "fi fi-rr-paperclip-vertical fs-12 me-1" }), _jsx("span", { children: attach })] }), _jsxs(Link, { to: "#!", className: "text-muted hstack", children: [_jsx("i", { className: "fi fi-rr-comment-alt fs-12 me-1" }), _jsx("span", { children: comment })] })] })] })] }) }) }, idx))), _jsx(Col, { sm: 12, className: "text-center", children: _jsx(Loading, {}) })] }) }));
};
export default ProjectsComponent;