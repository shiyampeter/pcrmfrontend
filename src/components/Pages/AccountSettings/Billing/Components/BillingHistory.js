import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Row, Col, Table, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const active = 2;
const items = [];
for (let number = 1; number <= 5; number++) {
    items.push(_jsx(Pagination.Item, { active: number === active, children: number }, number));
}
const billingData = [
    {
        reference: '#741258',
        product: 'Bootstrap Admin Dashboard',
        status: '<span class="badge bg-success-subtle text-success">Paid</span>',
        date: '01/06/2023',
        amount: '$59.00',
    },
    {
        reference: '#258963',
        product: 'Dashboard & Webapps Template',
        status: '<span class="badge bg-warning-subtle text-warning">Pending</span>',
        date: '02/07/2023',
        amount: '$99.00',
    },
    {
        reference: '#644789',
        product: 'Window Admin Dashboard',
        status: '<span class="badge bg-success-subtle text-success">Paid</span>',
        date: '03/07/2023',
        amount: '$29.00',
    },
    {
        reference: '#854789',
        product: 'React Admin Dashboard',
        status: '<span class="badge bg-danger-subtle text-danger">Reject</span>',
        date: '04/08/2023',
        amount: '$49.00',
    },
    {
        reference: '#357895',
        product: 'React Typescript Dashboard',
        status: '<span class="badge bg-success-subtle text-success">Paid</span>',
        date: '04/09/2023',
        amount: '$39.00',
    },
];
const BillingHistory = () => {
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "g-4 mb-4", children: [_jsxs(Col, { md: 3, children: [_jsx("h5", { className: "fw-semibold", children: "Billing History" }), _jsx("p", { children: "View your previos billing history." })] }), _jsxs(Col, { md: 9, children: [_jsxs(Table, { size: "lg", borderless: true, responsive: true, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Reference" }), _jsx("th", { children: "product" }), _jsx("th", { children: "Status" }), _jsx("th", { children: "Date" }), _jsx("th", { className: "text-end", children: "Amount" })] }) }), _jsx("tbody", { children: (billingData || []).map(({ reference, product, date, status, amount }, idx) => {
                                        return (_jsxs("tr", { children: [_jsx("td", { children: _jsxs(Link, { to: "#!", className: "fw-semibold text-primary", children: ["INV-", reference] }) }), _jsx("td", { children: _jsx(Link, { to: "#!", className: "fw-medium", children: product }) }), _jsx("td", { children: _jsx("span", { dangerouslySetInnerHTML: { __html: status } }) }), _jsx("td", { className: "text-end", children: date }), _jsx("td", { className: "text-end fs-15 fw-semibold", children: amount })] }, idx));
                                    }) })] }), _jsx(Pagination, { className: "mt-3", children: items })] })] }) }));
};
export default BillingHistory;
