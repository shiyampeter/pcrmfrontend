import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Tabs, Tab } from 'react-bootstrap';
import { tabsData } from './data/tabsData';
const NavTabBasic = () => {
    return (_jsx(_Fragment, { children: _jsx(Tabs, { defaultActiveKey: "home", className: "mb-3", children: tabsData.map(({ eventKey, title, content, disabled }) => (_jsx(Tab, { eventKey: eventKey, title: title, disabled: disabled, children: content }, eventKey))) }) }));
};
export default NavTabBasic;
