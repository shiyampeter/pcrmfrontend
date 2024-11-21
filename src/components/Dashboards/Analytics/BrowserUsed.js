import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Card, Dropdown, DropdownDivider, Image, Table } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
// Images
import safari from '@/assets/images/browsers/safari.png';
import chrome from '@/assets/images/browsers/chrome.png';
import firefox from '@/assets/images/browsers/firefox.png';
import opera from '@/assets/images/browsers/opera.png';
import edge from '@/assets/images/browsers/edge.png';
import web from '@/assets/images/browsers/web.png';
const BrowserUsed = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const browserData = [
        { image: safari, name: 'Safari', click: 486, bounceRate: '66.36%' },
        { image: chrome, name: 'Chrome', click: 640, bounceRate: '86.01%' },
        { image: firefox, name: 'Firefox', click: 274, bounceRate: '59.22%' },
        { image: opera, name: 'Opera', click: 456, bounceRate: '63.82%' },
        { image: edge, name: 'Edge', click: 312, bounceRate: '57.48%' },
        { image: web, name: 'Others', click: 428, bounceRate: '35.62%' },
    ];
    const barChartOptions = {
        chart: {
            height: 206,
            width: '100%',
            type: 'bar',
            stacked: false,
            foreColor: '#7d8aa2',
            fontFamily: 'Inter, sans-serif',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 3,
                columnWidth: '25%',
            },
        },
        colors: [themeColor],
        xaxis: {
            categories: browserData.map((browser) => browser.name),
            axisBorder: {
                show: false,
            },
            axisTicks: {
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
                top: -48,
                left: 12,
                right: 20,
                bottom: -8,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        tooltip: {
            theme: 'dark',
        },
    };
    const series = [
        {
            name: 'Clicks',
            data: browserData.map((browser) => browser.click),
        },
    ];
    return (_jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Browser Used" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "Full Reports" })] })] })] })] }), _jsx(ReactApexChart, { options: barChartOptions, series: series, type: "bar", height: 206 }), _jsx(Table, { responsive: true, className: "mb-0", children: _jsx("tbody", { children: browserData.map((browser, index) => (_jsxs("tr", { children: [_jsxs("td", { className: "d-flex align-items-center gap-2", children: [_jsx("div", { className: "avatar avatar-xs", children: _jsx(Image, { src: browser.image, fluid: true, alt: browser.name }) }), _jsx(Link, { to: "", className: "ms-2", children: browser.name })] }), _jsx("td", { className: "text-end", children: browser.click }), _jsx("td", { className: "text-end", children: browser.bounceRate })] }, index))) }) })] }));
};
export default BrowserUsed;
