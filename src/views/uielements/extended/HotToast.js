import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { HotToastPosition, HotToastType } from '@/components/UiElements/Extended/HotToast';
const HotToast = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "HotToast", subName: "Extended", url: 'https://react-hot-toast.com/' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Toast Type" }) }), _jsx(Card.Body, { children: _jsx(HotToastType, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Toast Position" }) }), _jsx(Card.Body, { children: _jsx(HotToastPosition, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsx(Card, { className: "border-0", children: _jsxs(ListGroup, { children: [_jsx(ListGroup.Item, { children: _jsx("h5", { className: "mb-0", children: "Uses Instruction" }) }), _jsxs(ListGroup.Item, { children: ["HotToast is delivered primarily via npm. ", _jsx("code", { children: "npm install react-hot-toast" })] }), _jsxs(ListGroup.Item, { children: ["For full documentation please visit the link:", _jsx(Link, { to: "https://react-hot-toast.com/docs", target: "_blank", children: "https://react-hot-toast.com/docs" })] })] }) }) })] })] }));
};
export default HotToast;
