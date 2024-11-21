import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { MapVectorBasic, MapVectorLine, MapVectorMarker, MapVectorAdvanced, } from '@/components/UiElements/Maps/Vector';
const VectorMaps = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "Vector Maps", subName: "Maps", url: 'https://jvm-docs.vercel.app/' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Basic" }) }), _jsx(Card.Body, { children: _jsx(MapVectorBasic, { height: "500px", width: "100%" }) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Marker" }) }), _jsx(Card.Body, { children: _jsx(MapVectorMarker, { height: "500px", width: "100%" }) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Line" }) }), _jsx(Card.Body, { children: _jsx(MapVectorLine, { height: "500px", width: "100%" }) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Advanced" }) }), _jsx(Card.Body, { children: _jsx(MapVectorAdvanced, { height: "500px", width: "100%" }) })] }) }), _jsx(Col, { xs: 12, children: _jsx(Card, { className: "border-0", children: _jsxs(ListGroup, { children: [_jsx(ListGroup.Item, { children: _jsx("h5", { className: "mb-0", children: "Uses Instruction" }) }), _jsxs(ListGroup.Item, { children: ["Quill is delivered primarily via npm. ", _jsx("code", { children: "npm install jsvectormap" })] }), _jsxs(ListGroup.Item, { children: ["For full documentation please visit the link:", _jsx(Link, { to: "https://jvm-docs.vercel.app/docs/introduction", target: "_blank", children: "https://jvm-docs.vercel.app/docs/introduction" })] })] }) }) })] })] }));
};
export default VectorMaps;