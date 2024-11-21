import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import * as Lucide from 'react-icons/lu';
const IconsLucide = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const icons = Object.values(Lucide);
    const formatIconName = (name) => {
        return name.replace(/^Lu/, '');
    };
    const filteredIcons = icons.filter((icon) => icon.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        icon.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsxs("div", { className: "input-group", children: [_jsx("span", { className: "input-group-text border-0", children: _jsx("i", { className: "fi fi-rr-search" }) }), _jsx("input", { type: "search", placeholder: "Search icons...", className: "border-0 text-dark", onChange: (e) => setSearchTerm(e.target.value) })] }) }), _jsx(Card.Body, { children: _jsx(Row, { className: "g-4", children: filteredIcons.map((Icon, index) => (_jsx(Col, { xs: 6, sm: 4, md: 3, lg: 2, children: _jsxs("div", { className: "icon-holder", children: [_jsx(Icon, {}), _jsx("span", { className: "label", children: formatIconName(Icon.name) })] }) }, index))) }) })] }) }));
};
export default IconsLucide;
