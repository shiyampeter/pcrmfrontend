import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Card, Stack, Dropdown, DropdownDivider } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const WeeklyStatsCard = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const options = {
        chart: {
            type: 'bar',
            width: '100%',
            stacked: true,
            foreColor: '#7d8aa2',
            fontFamily: 'Inter, sans-serif',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 3,
                columnWidth: '15%',
                horizontal: false,
            },
        },
        colors: [themeColor, '#E4E8EF'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
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
                top: -42,
                left: -12,
                right: 6,
                bottom: -16,
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
            name: 'Total Sales',
            data: [300, 325, 280, 350, 320, 315, 320],
        },
        {
            name: 'Total Revenue',
            data: [-325, -300, -350, -280, -315, -320, -315],
        },
    ];
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Weekly Stats" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "Full Reports" })] })] })] })] }), _jsxs(Card.Body, { children: [_jsx(ReactApexChart, { options: options, series: series, type: "bar", height: 183, id: "weeklyStatsChart" }), _jsx("hr", { style: { borderTopStyle: 'dashed' } }), _jsxs(Stack, { direction: "horizontal", children: [_jsxs(Stack, { direction: "horizontal", children: [_jsx("div", { className: "avatar avatar-lg flex-shrink-0 rounded bg-primary-subtle text-primary", children: _jsx("i", { className: "fi fi-rr-shopping-cart-add" }) }), _jsxs("div", { className: "flex-grow-1 ms-3", children: [_jsx(Link, { to: "", className: "mb-1 d-block", children: "Total Sales" }), _jsx("p", { className: "fs-12 text-muted mb-0", children: "2,456 Sales" })] })] }), _jsx("div", { className: "ms-auto text-end", children: _jsx(Link, { to: "", className: "badge bg-primary-subtle text-primary", children: "$5,458" }) })] }), _jsx("hr", { style: { borderTopStyle: 'dashed' } }), _jsxs(Stack, { direction: "horizontal", children: [_jsxs(Stack, { direction: "horizontal", children: [_jsx("div", { className: "avatar avatar-lg flex-shrink-0 rounded bg-success-subtle text-success", children: _jsx("i", { className: "fi fi-sr-icon-star" }) }), _jsxs("div", { className: "flex-grow-1 ms-3", children: [_jsx(Link, { to: "", className: "mb-1 d-block", children: "Total Revenue" }), _jsx("p", { className: "fs-12 text-muted mb-0", children: "Expected earningss" })] })] }), _jsx("div", { className: "ms-auto text-end", children: _jsx(Link, { to: "", className: "badge bg-success-subtle text-success", children: "$8,568" }) })] }), _jsx("hr", { style: { borderTopStyle: 'dashed' } }), _jsxs(Stack, { direction: "horizontal", children: [_jsxs(Stack, { direction: "horizontal", children: [_jsx("div", { className: "avatar avatar-lg flex-shrink-0 rounded bg-danger-subtle text-danger", children: _jsx("i", { className: "fi fi-rr-chart-histogram" }) }), _jsxs("div", { className: "flex-grow-1 ms-3", children: [_jsx(Link, { to: "", className: "mb-1 d-block", children: "Net Profit" }), _jsx("p", { className: "fs-12 text-muted mb-0", children: "Overview of Profit" })] })] }), _jsx("div", { className: "ms-auto text-end", children: _jsx(Link, { to: "", className: "badge bg-danger-subtle text-danger", children: "$76,578" }) })] })] })] }) }));
};
export default WeeklyStatsCard;
