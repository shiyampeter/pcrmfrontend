import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Card, Stack } from 'react-bootstrap';
import SkillsData from './data/SkillsData';
const OverviewSkills = () => {
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { direction: "horizontal", className: "justify-content-between mb-4", children: [_jsx(Card.Title, { className: "fw-semibold", children: "Skills" }), _jsx(Link, { to: "#!", children: _jsx("i", { className: "fi fi-rr-plus" }) })] }), _jsx(Stack, { direction: "horizontal", gap: 2, className: "flex-wrap", children: SkillsData.map(({ name }, idx) => (_jsx(Link, { to: "#!", className: "py-1 px-2 border border-dashed rounded-pill fs-12", children: name }, idx))) })] }));
};
export default OverviewSkills;
