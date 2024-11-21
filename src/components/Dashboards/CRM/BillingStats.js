import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Card, Col, Dropdown, DropdownDivider, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const BillingStats = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Billing Stats" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "All Channels" })] })] })] })] }), _jsx(Card.Body, { children: _jsx("div", { className: "text-center", children: _jsx(CircularProgressbar, { value: 60, text: `${60}%`, styles: {
                                root: {
                                    height: '12.75rem',
                                    width: '12.75rem',
                                },
                                path: {
                                    stroke: themeColor,
                                    strokeWidth: '0.375rem',
                                    strokeLinecap: 'round',
                                },
                                trail: {
                                    stroke: '#EDEFF1',
                                    strokeWidth: '0.15rem',
                                },
                                text: {
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    fill: themeColor,
                                },
                            } }) }) }), _jsxs(Row, { className: "g-0 border-top", children: [_jsxs(Col, { xl: 6, className: "p-4 text-center border-bottom border-end", children: [_jsx("div", { className: "fs-18 fw-bold text-dark", children: "5h : 33m" }), _jsx("div", { className: "fs-13 text-muted", children: "Billable Hours" })] }), _jsxs(Col, { xl: 6, className: "p-4 text-center border-bottom", children: [_jsx("div", { className: "fs-18 fw-bold text-dark", children: "6h : 14m" }), _jsx("div", { className: "fs-13 text-muted", children: "Unbillable Hours" })] }), _jsxs(Col, { xl: 6, className: "p-4 text-center border-end", children: [_jsx("div", { className: "fs-18 fw-bold text-dark", children: "15 / 30" }), _jsx("div", { className: "fs-13 text-muted", children: "Tasks Completed" })] }), _jsxs(Col, { xl: 6, className: "p-4 text-center", children: [_jsx("div", { className: "fs-18 fw-bold text-dark", children: "16 / 25" }), _jsx("div", { className: "fs-13 text-muted", children: "Projects Done" })] })] }), _jsx(Card.Footer, { className: "text-center", children: _jsxs(Link, { to: "", className: "ms-auto icon-link icon-link-hover link-primary", children: [_jsx("span", { children: "View Details" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] }) })] }) }));
};
export default BillingStats;
