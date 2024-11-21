import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PageBreadcrumb from '@/components/Common/PageBreadcrumb';
import { Row, Col, Card } from 'react-bootstrap';
import { CarouseAutoplay, CarouseControlled, CarouseCrossfade, CarouselBasic, } from '@/components/UiElements/Base/Carousels';
const Carousels = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumb, { title: "Carousels", subName: "Base UI" }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { lg: 6, children: _jsxs(Card, { className: "overflow-hidden", children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Basic" }) }), _jsx(Card.Body, { className: "p-0", children: _jsx(CarouselBasic, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { className: "overflow-hidden", children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Controlled" }) }), _jsx(Card.Body, { className: "p-0", children: _jsx(CarouseControlled, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { className: "overflow-hidden", children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Crossfade" }) }), _jsx(Card.Body, { className: "p-0", children: _jsx(CarouseCrossfade, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { className: "overflow-hidden", children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Autoplay" }) }), _jsx(Card.Body, { className: "p-0", children: _jsx(CarouseAutoplay, {}) })] }) })] })] }));
};
export default Carousels;
