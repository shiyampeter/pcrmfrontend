import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ReactApexChart from 'react-apexcharts';
import { Card, Stack } from 'react-bootstrap';
const ProjectCustomerCard = () => {
    const optionsSuccess = {
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
            curve: 'smooth',
            show: true,
            width: 2,
        },
        colors: ['#25b865'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri'],
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
                top: 0,
                left: -10,
                right: 0,
                bottom: 0,
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
    };
    const optionsDanger = {
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
            curve: 'smooth',
            show: true,
            width: 2,
        },
        colors: ['#d13b4c'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri'],
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
                top: 0,
                left: -10,
                right: 0,
                bottom: 0,
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
    };
    const series = [
        {
            name: 'Transactions',
            data: [22, 42, 12, 72, 32, 80],
            type: 'area',
        },
    ];
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "d-grid gap-3 gap-md-4", children: [_jsxs(Card, { children: [_jsx(Card.Body, { children: _jsxs(Stack, { direction: "horizontal", gap: 4, children: [_jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsx("div", { className: "bg-success-subtle text-success border border-success border-opacity-10 rounded hstack justify-content-center", style: { width: '3rem', height: '3rem' }, children: _jsx("i", { className: "fi fi-rr-users fs-5" }) }), _jsxs("div", { children: [_jsx(Card.Title, { className: "mb-2", children: "New Customer" }), _jsxs(Card.Subtitle, { className: "fs-13 fw-light", children: [_jsx("span", { className: "fs-12 text-success", children: "(2.8% more)" }), " from last week"] })] })] }), _jsx("div", { className: "ms-auto fs-20 fw-bold text-dark", children: "23.65K" })] }) }), _jsx(ReactApexChart, { options: optionsSuccess, series: series, type: "area", height: 140 })] }), _jsxs(Card, { children: [_jsx(Card.Body, { children: _jsxs(Stack, { direction: "horizontal", gap: 4, children: [_jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsx("div", { className: "bg-danger-subtle text-danger border border-danger border-opacity-10 rounded hstack justify-content-center", style: { width: '3rem', height: '3rem' }, children: _jsx("i", { className: "fi fi-rr-briefcase fs-5" }) }), _jsxs("div", { children: [_jsx(Card.Title, { className: "mb-2", children: "New Projects" }), _jsxs(Card.Subtitle, { className: "fs-13 fw-light", children: [_jsx("span", { className: "fs-12 text-danger", children: "(-2.5% more)" }), " from last week"] })] })] }), _jsx("div", { className: "ms-auto fs-20 fw-bold text-dark", children: "72.42K" })] }) }), _jsx(ReactApexChart, { options: optionsDanger, series: series, type: "area", height: 140 })] })] }) }));
};
export default ProjectCustomerCard;
