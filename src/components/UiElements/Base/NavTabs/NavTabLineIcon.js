import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { tabsData } from './data/tabsData';
const NavTabLineIcon = () => {
    const [activeKey, setActiveKey] = useState('home');
    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };
    return (_jsxs(Tab.Container, { defaultActiveKey: "home", activeKey: activeKey, onSelect: handleSelect, children: [_jsx(Nav, { variant: "tabs", fill: true, className: "nav-line-tabs mb-3", children: tabsData.map(({ eventKey, icon, title, disabled }, index) => (_jsx(Nav.Item, { children: _jsxs(Nav.Link, { eventKey: eventKey, disabled: disabled, className: "hstack", children: [_jsx("i", { className: icon }), _jsx("span", { className: "ms-2", children: title })] }) }, index))) }), _jsx(Tab.Content, { children: tabsData.map(({ eventKey, content }, index) => (_jsx(Tab.Pane, { eventKey: eventKey, children: content }, index))) })] }));
};
export default NavTabLineIcon;
