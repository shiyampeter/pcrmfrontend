import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Col, Row, Stack } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
const commonChartOptions = ({ name, seriesData, color }) => ({
    chart: {
        type: 'area',
        height: 60,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 1,
        curve: 'smooth',
    },
    fill: {
        opacity: [0.85, 0.25, 1, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 65, 100],
        },
    },
    yaxis: {
        min: 0,
    },
    colors: [color],
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (e) {
                return +e + '%';
            },
        },
    },
    series: [
        {
            name,
            data: seriesData.map((value, index) => ({ x: index + 1, y: value })),
        },
    ],
});
const columns = [
    {
        name: 'Bounce Rate',
        seriesData: [25, 60, 20, 90, 45, 100, 45, 100, 55],
        color: '#25b865',
    },
    {
        name: 'Page Views',
        seriesData: [35, 80, 45, 60, 90, 50, 75, 40, 85],
        color: '#3E97FF',
    },
    {
        name: 'Site Impressions',
        seriesData: [50, 30, 70, 40, 80, 25, 65, 30, 75],
        color: '#e49e3d',
    },
    {
        name: 'Conversions Rate',
        seriesData: [20, 45, 70, 30, 60, 25, 55, 35, 80],
        color: '#d13b4c',
    },
];
const StatisticsMiniCard = () => {
    return (_jsx(_Fragment, { children: _jsx(Row, { className: "g-3 g-md-4", children: columns.map((column, index) => (_jsx(Col, { xl: 3, md: 6, children: _jsx(Card, { children: _jsxs(Card.Body, { className: "p-0", children: [_jsxs(Stack, { direction: "horizontal", className: "p-4 mb-4 align-items-start", children: [_jsxs("div", { children: [_jsx("h6", { children: column.name }), _jsxs("div", { className: "fs-12 text-muted", children: [_jsx("i", { className: `fi ${index % 2 === 0 ? 'fi-rr-arrow-trend-up' : 'fi-rr-arrow-trend-down'} fs-14 ${index % 2 === 0 ? 'text-success' : 'text-danger'}` }), _jsxs("span", { className: "ms-2", children: [column.seriesData[0], "% (Prev)"] })] })] }), _jsx("div", { className: "ms-auto text-end", children: _jsxs("h4", { className: "fs-18 fw-bold text-dark", children: [column.seriesData[8], "%"] }) })] }), _jsx(ReactApexChart, { options: commonChartOptions(column), series: commonChartOptions(column).series, type: "area", height: 60 })] }) }) }, index))) }) }));
};
export default StatisticsMiniCard;
