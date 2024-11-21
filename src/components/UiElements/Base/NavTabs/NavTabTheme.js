import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Tab, Nav } from 'react-bootstrap';
import { tabsData } from './data/tabsData';
const NavTabTheme = () => {
    const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    return (_jsx(_Fragment, { children: colors.map((variant, idx) => (_jsxs(Tab.Container, { defaultActiveKey: "home", children: [_jsx(Nav, { fill: true, variant: "pills", className: `mb-3 nav-theme-tabs-${variant.toLowerCase()}`, children: tabsData.map(({ eventKey, icon, title, disabled }, index) => (_jsx(Nav.Item, { children: _jsxs(Nav.Link, { eventKey: eventKey, disabled: disabled, className: "hstack", children: [_jsx("i", { className: icon }), _jsx("span", { className: "ms-2", children: title })] }) }, index))) }), _jsx(Tab.Content, { children: tabsData.map(({ eventKey, content }, index) => (_jsx(Tab.Pane, { eventKey: eventKey, children: content }, index))) }), _jsx("hr", { className: "my-12" })] }, idx))) }));
};
export default NavTabTheme;
