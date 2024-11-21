import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import MapBase from '@/components/UiElements/Maps/Vector/MapBase';
import { Card, Dropdown, DropdownDivider, ListGroup, Stack } from 'react-bootstrap';
import 'jsvectormap/dist/js/jsvectormap.min.js';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/css/jsvectormap.min.css';
const SalesLocation = ({ width, height }) => {
    const mapOptsMarker = {
        normalizeFunction: 'polynomial',
        zoomButtons: false,
        zoomOnScroll: false,
        hoverOpacity: 0.7,
        hoverColor: false,
        backgroundColor: 'transparent',
        markers: [
            {
                name: 'Russia',
                coords: [61, 105],
                style: {
                    fill: '#d13b4c',
                },
            },
            {
                name: 'Geenland',
                coords: [72, -42],
                style: {
                    fill: '#3dc7be',
                },
            },
            {
                name: 'Canada',
                coords: [56, -106],
                style: {
                    fill: '#ea4d4d',
                },
            },
            {
                name: 'Palestine',
                coords: [31.5, 34.8],
                style: {
                    fill: '#fd7e14',
                },
            },
            {
                name: 'Brazil',
                coords: [-14.235, -51.9253],
                style: {
                    fill: '#000000',
                },
            },
            {
                name: 'China',
                coords: [35.8617, 104.1954],
                style: {
                    fill: '#25b865',
                },
            },
            {
                name: 'United States',
                coords: [37.0902, -95.7129],
                style: {
                    fill: '#963258',
                },
                offsets: [2, 2],
            },
        ],
        markerStyle: {
            hover: {
                stroke: '#DDD',
                strokeWidth: 3,
                fill: '#FFF',
            },
            selected: {
                fill: '#ff525d',
            },
        },
    };
    const countries = [
        { name: 'United States', color: 'primary', count: '$9,658' },
        { name: 'Canada', color: 'danger', count: '$8,258' },
        { name: 'China', color: 'success', count: '$7,698' },
        { name: 'Russia', color: 'danger', count: '$6,657' },
        { name: 'Brazil', color: 'dark', count: '$5,357' },
        { name: 'Palestine', color: 'warning', count: '$4,456' },
    ];
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Sales Location" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "Full Reports" })] })] })] })] }), _jsxs(Card.Body, { children: [_jsx(MapBase, { type: "world", width: width, height: height, options: mapOptsMarker }), _jsxs(Stack, { direction: "horizontal", gap: 4, children: [_jsxs("div", { className: "mt-6", children: [_jsx("span", { className: "fs-20 fw-bold text-dark", children: "$72,695" }), _jsxs("span", { className: "badge bg-success-subtle text-success rounded-pill d-inline-flex align-items-center ms-2", children: [_jsx("i", { className: "fi fi-rr-arrow-trend-up fs-11" }), _jsx("span", { children: "12.68%" })] }), _jsx("span", { className: "fs-13 text-muted mt-1 d-block", children: "Compared to last month sales." })] }), _jsxs(Link, { to: "", className: "ms-auto icon-link icon-link-hover link-primary", children: [_jsx("span", { children: "Explore" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] })] })] }), _jsx(ListGroup, { children: countries.map(({ name, color, count }, index) => (_jsxs(ListGroup.Item, { className: "hstack py-2", children: [_jsx("div", { className: "me-auto", children: _jsxs(Link, { to: "", className: "hstack gap-3", children: [_jsx("span", { className: `bg-${color} rounded-circle d-flex flex-shrink-0`, style: { width: '0.45rem', height: '0.45rem' } }), _jsx("span", { children: name })] }) }), _jsx("div", { className: "text-muted", children: count })] }, index))) })] }) }));
};
export default SalesLocation;
