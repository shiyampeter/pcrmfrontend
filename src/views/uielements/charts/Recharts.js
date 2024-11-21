import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { RechartBiaxialLine, RechartComposed, RechartRadarChart, RechartRadialBar, RechartShapePie, RechartStackedArea, RechartStackedBar, RechartTreeMap, } from '@/components/UiElements/Charts/Recharts';
const Recharts = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "Recharts", subName: "Charts", url: 'https://recharts.org/' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Biaxial Line" }) }), _jsx(Card.Body, { children: _jsx(RechartBiaxialLine, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Stacked Area" }) }), _jsx(Card.Body, { children: _jsx(RechartStackedArea, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Stacked Bar" }) }), _jsx(Card.Body, { children: _jsx(RechartStackedBar, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Composed Chart" }) }), _jsx(Card.Body, { children: _jsx(RechartComposed, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Shape Pie" }) }), _jsx(Card.Body, { children: _jsx(RechartShapePie, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Radar Chart" }) }), _jsx(Card.Body, { children: _jsx(RechartRadarChart, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Radial Bar" }) }), _jsx(Card.Body, { children: _jsx(RechartRadialBar, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Tree Map" }) }), _jsx(Card.Body, { children: _jsx(RechartTreeMap, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Options" }) }), _jsxs(Table, { className: "mb-0", responsive: true, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Reference" }), _jsx("th", { children: "Details" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Getting Started" }) }), _jsx("td", { children: _jsx("a", { href: "https://recharts.org/en-US/guide/getting-started", target: "_blank", children: "https://recharts.org/en-US/guide/getting-started" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "API" }) }), _jsx("td", { children: _jsx("a", { href: "https://recharts.org/en-US/api", target: "_blank", children: "https://recharts.org/en-US/api" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Examples" }) }), _jsx("td", { children: _jsx("a", { href: "https://recharts.org/en-US/examples", target: "_blank", children: "https://recharts.org/en-US/examples" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Documentations" }) }), _jsxs("td", { children: ["Please visit:", _jsx("a", { href: "https://recharts.org/en-US/guide", target: "_blank", children: "https://recharts.org/en-US/guide" })] })] })] })] })] }) })] })] }));
};
export default Recharts;