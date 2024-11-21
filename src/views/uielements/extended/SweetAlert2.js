import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { SweetAlert2Basic, SweetAlert2Confirmation, SweetAlert2Custom, SweetAlert2Positioned, SweetAlert2Type, } from '@/components/UiElements/Extended/SweetAlert2';
const SweetAlert2 = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "SweetAlert2", subName: "Extended", url: 'https://github.com/sweetalert2/sweetalert2-react-content' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, xl: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Basic" }) }), _jsx(Card.Body, { children: _jsx(SweetAlert2Basic, {}) })] }) }), _jsx(Col, { xs: 12, xl: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Positioned" }) }), _jsx(Card.Body, { children: _jsx(SweetAlert2Positioned, {}) })] }) }), _jsx(Col, { xs: 12, xl: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Types" }) }), _jsx(Card.Body, { children: _jsx(SweetAlert2Type, {}) })] }) }), _jsx(Col, { xs: 12, xl: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Confirmation" }) }), _jsx(Card.Body, { children: _jsx(SweetAlert2Confirmation, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Custom Message" }) }), _jsx(Card.Body, { children: _jsx(SweetAlert2Custom, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsx(Card, { className: "border-0", children: _jsxs(ListGroup, { children: [_jsx(ListGroup.Item, { children: _jsx("h5", { className: "mb-0", children: "Uses Instruction" }) }), _jsxs(ListGroup.Item, { children: ["SweetAlert2 is delivered primarily via npm.", ' ', _jsx("code", { children: "npm install --save sweetalert2 sweetalert2-react-content" })] }), _jsxs(ListGroup.Item, { children: ["For full documentation please visit the link:", _jsx(Link, { to: "https://github.com/sweetalert2/sweetalert2-react-content", target: "_blank", children: "https://github.com/sweetalert2/sweetalert2-react-content" })] })] }) }) })] })] }));
};
export default SweetAlert2;
