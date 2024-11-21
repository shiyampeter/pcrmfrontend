import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import ReactApexChart from 'react-apexcharts';
import { Card, Dropdown, DropdownDivider, ListGroup, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SalesHistoryCard = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const options = {
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
        colors: [themeColor],
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
            data: [2, 4, 1, 7, 3, 8],
            type: 'area',
        },
    ];
    const salesData = [
        {
            id: 1,
            name: 'Timothy Boyd',
            date: '24 DEC, 2023',
            amount: '$250.00',
            color: 'primary',
        },
        {
            id: 2,
            name: 'Adrian Monino',
            date: '23 DEC, 2023',
            amount: '$220.00',
            color: 'danger',
        },
        {
            id: 3,
            name: 'Socrates Itumay',
            date: '22 DEC, 2023',
            amount: '$180.00',
            color: 'success',
        },
        {
            id: 4,
            name: 'Althea Cabardo',
            date: '21 DEC, 2023',
            amount: '$150.00',
            color: 'warning',
        },
        {
            id: 5,
            name: 'Laura Foreman',
            date: '20 DEC, 2023',
            amount: '$200.00',
            color: 'info',
        },
    ];
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Sales History" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "Sales Report" })] })] })] })] }), _jsx(ReactApexChart, { options: options, series: series, type: "area", height: 107 }), _jsx(ListGroup, { variant: "flush", children: salesData.map(({ id, name, date, amount, color }) => (_jsxs(ListGroup.Item, { className: "hstack", style: { borderBottomStyle: 'dashed' }, children: [_jsxs(Stack, { direction: "horizontal", className: "d-flex gap-3", children: [_jsx("div", { className: `avatar avatar-md rounded bg-${color}-subtle text-${color}`, children: _jsx("i", { className: "fi fi-rr-grid" }) }), _jsxs("div", { children: [_jsx("h6", { className: "mb-1", children: name }), _jsx("p", { className: "fs-12 text-muted text-uppercase mb-0", children: date })] })] }), _jsx(Link, { to: "", className: `ms-auto fs-13 badge bg-${color}-subtle text-${color}`, children: amount })] }, id))) })] }) }));
};
export default SalesHistoryCard;
