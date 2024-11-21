import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Card, Row, Col, Dropdown, DropdownDivider } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
const SessionDevice = () => {
    const sessionDeviceData = [
        { label: 'Desktop', value: 37.74, change: '+2.6', color: '#3E97FF' },
        { label: 'Mobile', value: 34.23, change: '-3.2', color: '#e49e3d' },
        { label: 'Tablet', value: 22.65, change: '-2.2', color: '#25b865' },
        { label: 'Others', value: 24.47, change: '+2.8', color: '#d13b4c' },
    ];
    const donutChartOptions = {
        chart: {
            width: 262,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },
        series: sessionDeviceData.map((item) => item.value),
        labels: sessionDeviceData.map((item) => item.label),
        colors: sessionDeviceData.map((item) => item.color),
        stroke: {
            width: 0,
            lineCap: 'round',
        },
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '85%',
                    labels: {
                        show: false,
                        name: {
                            show: false,
                            fontSize: '16px',
                            colors: '#A0ACBB',
                            fontFamily: 'Inter',
                        },
                        value: {
                            show: false,
                            fontSize: '30px',
                            fontFamily: 'Inter',
                            color: '#A0ACBB',
                            formatter: function (e) {
                                return e;
                            },
                        },
                    },
                },
            },
        },
        responsive: [
            {
                breakpoint: 380,
                options: {
                    chart: {
                        width: 280,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (e) {
                    return +e + '%';
                },
            },
            style: {
                colors: '#A0ACBB',
                fontFamily: 'Inter',
            },
        },
    };
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Session Device" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "All Channels" })] })] })] })] }), _jsxs(Card.Body, { children: [_jsx(ReactApexChart, { options: donutChartOptions, series: donutChartOptions.series, type: "donut", height: 262 }), _jsx(Row, { className: "g-3 mt-2", children: sessionDeviceData.map((item, index) => (_jsx(Col, { sm: 6, children: _jsx(Card, { className: "border rounded-3 p-3", children: _jsxs("div", { className: "d-flex gap-2", children: [_jsx("div", { style: {
                                                    width: '0.45rem',
                                                    height: '0.45rem',
                                                    borderRadius: '50%',
                                                    marginTop: '0.4rem',
                                                    backgroundColor: `${item.color}`,
                                                } }), _jsxs("div", { children: [_jsx(Link, { to: "", className: "mb-1 d-block", children: item.label }), _jsxs("div", { className: "fs-16 fw-bold text-dark", children: [item.value, "%", ' ', _jsx("span", { className: "fs-13 fw-normal text-muted d-xl-none d-xxl-inline-flex", children: `(${item.change})` })] })] })] }) }) }, index))) })] })] }) }));
};
export default SessionDevice;
