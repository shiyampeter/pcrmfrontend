import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { ReactSlickAutoPlay, ReactSlickCustomPaging, ReactSlickMultiple, ReactSlickMultipleRows, ReactSlickResponsive, ReactSlickSingle, ReactSlickVariableWidth, } from '@/components/UiElements/Extended/ReactSlick';
const ReactSlick = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "Slick Slider", subName: "Extended", url: 'https://react-slick.neostack.com/docs/get-started' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Single" }) }), _jsx(Card.Body, { children: _jsx(ReactSlickSingle, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Multiple" }) }), _jsx(Card.Body, { children: _jsx(ReactSlickMultiple, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Responsive" }) }), _jsx(Card.Body, { children: _jsx(ReactSlickResponsive, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Multiple Rows" }) }), _jsx(Card.Body, { children: _jsx(ReactSlickMultipleRows, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Variable Width" }) }), _jsx(Card.Body, { children: _jsx(ReactSlickVariableWidth, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Auto Play" }) }), _jsx(Card.Body, { children: _jsx(ReactSlickAutoPlay, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Custom Paging" }) }), _jsx(Card.Body, { children: _jsx(ReactSlickCustomPaging, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsx(Card, { className: "border-0", children: _jsxs(ListGroup, { children: [_jsx(ListGroup.Item, { children: _jsx("h5", { className: "mb-0", children: "Uses Instruction" }) }), _jsxs(ListGroup.Item, { children: ["Slick is delivered primarily via npm. ", _jsx("code", { children: "npm install react-slick --save" })] }), _jsxs(ListGroup.Item, { children: ["For full documentation please visit the link:", _jsx(Link, { to: "https://react-slick.neostack.com/docs/get-started", target: "_blank", children: "https://react-slick.neostack.com/docs/get-started" })] })] }) }) })] })] }));
};
export default ReactSlick;
