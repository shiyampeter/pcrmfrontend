import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Tab, Nav, NavDropdown } from 'react-bootstrap';
import { tabsData, tabsDropdownData } from './data/tabsData';
const NavTabDropdown = () => {
    const [activeKey, setActiveKey] = useState('home');
    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };
    return (_jsxs(Tab.Container, { defaultActiveKey: "home", activeKey: activeKey, onSelect: handleSelect, children: [_jsxs(Nav, { variant: "pills", className: "mb-3", children: [tabsData.map(({ eventKey, title, disabled }) => (_jsx(Nav.Item, { children: _jsx(Nav.Link, { eventKey: eventKey, disabled: disabled, children: title }) }, eventKey))), _jsx(NavDropdown, { title: "Dropdown", children: tabsDropdownData.map((item, index) => (_jsx(NavDropdown.Item, { eventKey: item.eventKey, children: item.title }, index))) })] }), _jsxs(Tab.Content, { children: [tabsData.map((tab, index) => (_jsx(Tab.Pane, { eventKey: tab.eventKey, children: tab.content }, index))), tabsDropdownData.map((item, index) => (_jsx(Tab.Pane, { eventKey: item.eventKey, children: item.content }, index)))] })] }));
};
export default NavTabDropdown;
