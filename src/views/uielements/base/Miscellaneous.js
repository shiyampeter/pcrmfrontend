import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PageBreadcrumb from '@/components/Common/PageBreadcrumb';
import { Row, Col, Card } from 'react-bootstrap';
import { MiscAlert, MiscBadge, MiscTooltip, MiscPopover, } from '@/components/UiElements/Base/Miscellaneous';
const Miscellaneous = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumb, { title: "Miscellaneous", subName: "Base UI" }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Alert" }) }), _jsx(Card.Body, { children: _jsx(MiscAlert, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Badge" }) }), _jsx(Card.Body, { children: _jsx(MiscBadge, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Tooltip" }) }), _jsx(Card.Body, { children: _jsx(MiscTooltip, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Popover" }) }), _jsx(Card.Body, { children: _jsx(MiscPopover, {}) })] }) })] })] }));
};
export default Miscellaneous;
