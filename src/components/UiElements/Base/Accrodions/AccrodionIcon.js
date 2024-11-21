import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Accordion } from 'react-bootstrap';
import accordionData from './data/accordionData';
const AccrodionIcon = () => {
    return (_jsx(_Fragment, { children: _jsx(Accordion, { className: "accordion-icon", defaultActiveKey: "0", children: accordionData.map(({ id, header, body }) => (_jsxs(Accordion.Item, { eventKey: id, children: [_jsx(Accordion.Header, { children: header }), _jsx(Accordion.Body, { children: body })] }, id))) }) }));
};
export default AccrodionIcon;
