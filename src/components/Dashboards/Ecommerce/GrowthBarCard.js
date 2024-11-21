import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import ReactApexChart from 'react-apexcharts';
import { Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const GrowthBarCard = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const growthChartOptions = {
        chart: {
            width: '100%',
            type: 'area',
            stacked: false,
            foreColor: '#7d8aa2',
            fontFamily: 'Inter, sans-serif',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'straight',
            show: true,
            width: 2,
        },
        colors: [themeColor],
        series: [
            {
                name: 'Growth',
                data: [0, 20, 10, 30, 20, 40, 30, 50, 40, 60, 50, 70],
            },
        ],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
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
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.2,
                stops: [15, 120, 100],
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
        markers: {
            size: 3,
            strokeColors: 'transparent',
            strokeWidth: 3,
            discrete: [
                {
                    size: 5,
                    shape: 'circle',
                    seriesIndex: 0,
                    dataPointIndex: 11,
                    fillColor: '#e49e3d',
                    strokeColor: '#ffd396',
                },
            ],
            hover: {
                size: 5.5,
            },
        },
    };
    return (_jsx(_Fragment, { children: _jsx(Card, { children: _jsxs(Card.Body, { children: [_jsxs(Stack, { direction: "horizontal", gap: 2, className: "align-items-start", children: [_jsxs("div", { className: "me-auto", children: [_jsx("p", { className: "fs-13 text-muted mb-1", children: "Store Growth" }), _jsx("h4", { className: "fs-18 fw-bold", children: "12.65%" })] }), _jsx(Link, { to: "", className: "badge fs-12 fw-sembold bg-success-subtle text-success", children: "(+) 3.6%" })] }), _jsx(ReactApexChart, { options: growthChartOptions, series: growthChartOptions.series, type: "area", height: 133, width: "100%" })] }) }) }));
};
export default GrowthBarCard;
