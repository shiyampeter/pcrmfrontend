import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactApexChart from 'react-apexcharts';
import { Card, Dropdown, DropdownDivider } from 'react-bootstrap';
const LeadOverview = () => {
    const dataLeadOverview = [
        { label: 'Contacted', value: 37.74, change: '+2.6', color: '#3E97FF' },
        { label: 'Customer', value: 34.23, change: '-3.2', color: '#e49e3d' },
        { label: 'Proposal', value: 22.65, change: '-2.2', color: '#25b865' },
        { label: 'Working', value: 24.47, change: '+2.8', color: '#6f42c1' },
        { label: 'Progress', value: 22.65, change: '-2.2', color: '#495057' },
        { label: 'Projects', value: 24.47, change: '+2.8', color: '#d13b4c' },
    ];
    const donutChartOptions = {
        chart: {
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },
        series: dataLeadOverview.map((item) => item.value),
        labels: dataLeadOverview.map((item) => item.label),
        colors: dataLeadOverview.map((item) => item.color),
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
                    spacing: 5,
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
        grid: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
            },
        },
    };
    return (_jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Leads Overview" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "All Channels" })] })] })] })] }), _jsxs(Card.Body, { className: "mx-auto pt-2", children: [_jsx(ReactApexChart, { options: donutChartOptions, series: donutChartOptions.series, type: "donut", height: 260 }), _jsx("div", { className: "hstack gap-2 flex-wrap", children: dataLeadOverview.map((item, index) => (_jsxs("span", { className: "p-2 hstack gap-2 flex-fill rounded border border-dashed border-gray-5", children: [_jsx("span", { className: "rounded-circle d-inline-block", style: { backgroundColor: item.color, width: '0.5rem', height: '0.5rem' } }), _jsxs("span", { children: [item.label, _jsxs("span", { className: "fs-12 text-muted ms-1", children: ["(", item.value, "%)"] })] })] }, index))) })] })] }));
};
export default LeadOverview;
