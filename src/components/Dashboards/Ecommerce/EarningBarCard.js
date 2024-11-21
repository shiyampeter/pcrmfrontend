import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import ReactApexChart from 'react-apexcharts';
import { Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const EarningBarCard = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const earningChartOptions = {
        chart: {
            width: '100%',
            type: 'bar',
            stacked: false,
            foreColor: '#7d8aa2',
            fontFamily: 'Inter, sans-serif',
            toolbar: {
                show: false,
            },
        },
        series: [
            {
                name: 'Earning',
                data: [15, 20, 10, 30, 20, 40, 30, 50, 40, 60, 50, 70],
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 2,
                columnWidth: '25%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: [themeColor],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        grid: {
            show: false,
            padding: {
                top: -32,
                left: -6,
                right: 6,
                bottom: -12,
            },
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (e) {
                    return +e + 'K';
                },
            },
        },
    };
    return (_jsx(_Fragment, { children: _jsx(Card, { children: _jsx(Card.Body, { children: _jsxs("div", { children: [_jsxs(Stack, { direction: "horizontal", gap: 2, className: "align-items-start", children: [_jsxs("div", { className: "me-auto", children: [_jsx("p", { className: "fs-13 text-muted mb-1", children: "Monthyly Earning" }), _jsx("h4", { className: "fs-18 fw-bold", children: "32.46K" })] }), _jsx(Link, { to: "", className: "badge fs-12 fw-sembold bg-danger-subtle text-danger", children: "(-) 2.4%" })] }), _jsx(ReactApexChart, { options: earningChartOptions, series: earningChartOptions.series, type: "bar", height: 133, width: "100%" })] }) }) }) }));
};
export default EarningBarCard;
