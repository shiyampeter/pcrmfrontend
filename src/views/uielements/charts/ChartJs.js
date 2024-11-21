import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { ChartJsDoughnutChart, ChartJsMultipleBar, ChartJsPieChart, ChartJsPolarArea, ChartJsRadarChart, ChartJsRoundedArea, ChartJsRoundedLine, ChartJsStackedBar, } from '@/components/UiElements/Charts/ChartJs';
import { Link } from 'react-router-dom';
const ChartJs = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "ChartJS", subName: "Charts", url: 'https://react-chartjs-2.js.org/' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Multiple Bar" }) }), _jsx(Card.Body, { children: _jsx(ChartJsMultipleBar, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Stacked Bar" }) }), _jsx(Card.Body, { children: _jsx(ChartJsStackedBar, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Rounded Line" }) }), _jsx(Card.Body, { children: _jsx(ChartJsRoundedLine, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Rounded Area" }) }), _jsx(Card.Body, { children: _jsx(ChartJsRoundedArea, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Doughnut" }) }), _jsx(Card.Body, { children: _jsx(ChartJsDoughnutChart, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Pie Chart" }) }), _jsx(Card.Body, { children: _jsx(ChartJsPieChart, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Polar Area" }) }), _jsx(Card.Body, { children: _jsx(ChartJsPolarArea, {}) })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Radar Chart" }) }), _jsx(Card.Body, { children: _jsx(ChartJsRadarChart, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Options" }) }), _jsxs(Table, { className: "mb-0", responsive: true, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Reference" }), _jsx("th", { children: "Details" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Getting Started" }) }), _jsx("td", { children: _jsx(Link, { to: "https://react-chartjs-2.js.org/", target: "_blank", children: "https://react-chartjs-2.js.org/" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Components" }) }), _jsx("td", { children: _jsx(Link, { to: "https://react-chartjs-2.js.org/components", target: "_blank", children: "https://react-chartjs-2.js.org/components" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Documentations" }) }), _jsxs("td", { children: ["Please visit:", _jsx(Link, { to: "https://react-chartjs-2.js.org/", target: "_blank", children: "https://react-chartjs-2.js.org/" })] })] })] })] })] }) })] })] }));
};
export default ChartJs;
