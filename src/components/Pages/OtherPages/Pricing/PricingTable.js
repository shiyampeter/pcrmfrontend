import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import featuresData from './data/pricingFeaturesData';
const PricingTable = () => {
    const [billingOption, setBillingOption] = useState('monthly');
    const plans = {
        monthly: [
            {
                type: 'Basic',
                price: 12.99,
                features: 'Basic feature for up to 5 employees with everything you need.',
            },
            {
                type: 'Business',
                price: 24.99,
                features: 'Advanced feature and reporting, better workflow and.',
            },
            {
                type: 'Enterprise',
                price: 39.99,
                features: 'Personalized service and enterprise security for large team.',
            },
        ],
        annual: [
            {
                type: 'Basic',
                price: 10.99 * 12,
                features: 'Basic feature for up to 5 employees with everything you need.',
            },
            {
                type: 'Business',
                price: 20.99 * 12,
                features: 'Advanced feature and reporting, better workflow and.',
            },
            {
                type: 'Enterprise',
                price: 34.99 * 12,
                features: 'Personalized service and enterprise security for large team.',
            },
        ],
    };
    const handleBillingOptionChange = (option) => {
        setBillingOption(option);
    };
    const commonWidth = {
        minWidth: '320px',
        maxWidth: '320px',
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "mb-8 mb-md-12 mb-lg-16 text-center mx-auto", style: { maxWidth: '600px' }, children: _jsxs("div", { className: "d-inline-block border rounded-pill", children: [_jsx(Link, { to: "#!", className: `btn rounded-pill ${billingOption === 'monthly' ? 'active' : ''}`, onClick: () => handleBillingOptionChange('monthly'), children: "Monthly billing" }), _jsx(Link, { to: "#!", className: `btn rounded-pill ${billingOption === 'annual' ? 'active' : ''}`, onClick: () => handleBillingOptionChange('annual'), children: "Annual billing" })] }) }), _jsxs(Table, { responsive: true, bordered: true, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", {}), plans[billingOption].map(({ type, price, features }, idx) => (_jsxs("th", { style: commonWidth, className: "text-wrap", children: [_jsx("h5", { className: "fw-semibold mb-4", children: type }), _jsxs("div", { className: "mb-2", children: [_jsxs("span", { className: "fw-bold text-dark h2", children: [_jsx("span", { className: "text-secondary", children: "$" }), price.toFixed(2)] }), _jsxs("span", { className: "fw-normal", children: [' ', "/ per ", billingOption === 'annual' ? 'year' : 'month'] })] }), _jsx("p", { className: "fs-14 lead mb-8", children: features }), _jsx(Button, { variant: "primary", className: "w-100", children: "Get Started" })] }, idx)))] }) }), _jsx("tbody", { children: featuresData.map(({ name, basic, business, enterprise }, idx) => (_jsx(React.Fragment, { children: _jsxs("tr", { children: [_jsxs("td", { className: "hstack", children: [name, " ", _jsx("i", { className: "fi fi-rr-info text-muted fs-10 ms-2" })] }), _jsx("td", { style: commonWidth, className: "text-center", children: basic }), _jsx("td", { style: commonWidth, className: "text-center", children: business }), _jsx("td", { style: commonWidth, className: "text-center", children: enterprise })] }) }, idx))) }), _jsx("tfoot", { children: _jsxs("tr", { children: [_jsx("th", {}), _jsx("th", { style: commonWidth, children: _jsxs("div", { className: "d-grid gap-2", children: [_jsx(Button, { variant: "primary", children: "Get Started" }), _jsx(Button, { variant: "neutral", children: "Chat to Sales" })] }) }), _jsx("th", { style: commonWidth, children: _jsxs("div", { className: "d-grid gap-2", children: [_jsx(Button, { variant: "primary", children: "Get Started" }), _jsx(Button, { variant: "neutral", children: "Chat to Sales" })] }) }), _jsx("th", { style: commonWidth, children: _jsxs("div", { className: "d-grid gap-2", children: [_jsx(Button, { variant: "primary", children: "Get Started" }), _jsx(Button, { variant: "neutral", children: "Chat to Sales" })] }) })] }) })] })] }));
};
export default PricingTable;
