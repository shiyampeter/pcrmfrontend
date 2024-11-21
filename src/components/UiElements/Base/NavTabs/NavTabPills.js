import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Tab, Nav } from 'react-bootstrap';
import { tabsData } from './data/tabsData';
const NavTabPills = () => {
    return (_jsx(_Fragment, { children: _jsxs(Tab.Container, { defaultActiveKey: "home", children: [_jsx(Nav, { variant: "pills", className: "mb-3", children: tabsData.map(({ eventKey, title, disabled }) => (_jsx(Nav.Item, { children: _jsx(Nav.Link, { eventKey: eventKey, disabled: disabled, children: title }) }, eventKey))) }), _jsx(Tab.Content, { children: tabsData.map(({ eventKey, content }) => (_jsx(Tab.Pane, { eventKey: eventKey, children: content }, eventKey))) })] }) }));
};
export default NavTabPills;
