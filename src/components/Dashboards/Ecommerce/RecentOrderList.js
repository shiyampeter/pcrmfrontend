import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Button, Card, Image, Pagination, Stack } from 'react-bootstrap';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
// Avatar Images
import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import avatar3 from '@/assets/images/avatars/3.png';
import avatar4 from '@/assets/images/avatars/4.png';
import avatar5 from '@/assets/images/avatars/5.png';
// Product Images
import product1 from '@/assets/images/gallery/1.png';
import product2 from '@/assets/images/gallery/2.png';
import product3 from '@/assets/images/gallery/3.png';
import product4 from '@/assets/images/gallery/4.png';
import product5 from '@/assets/images/gallery/5.png';
const orders = [
    {
        id: 1,
        invoice: '#896574',
        customer: {
            name: 'Archie Tones',
            email: 'archie@example.com',
            image: avatar1,
        },
        coupon: 'SU56HD246K',
        product: { name: 'Edifier headphone', image: product1 },
        paymentMethod: 'fi fi-brands-visa',
        status: { text: 'Completed', color: 'success' },
    },
    {
        id: 2,
        invoice: '#478523',
        customer: {
            name: 'Holmes Cherry',
            email: 'holmes@example.com',
            image: avatar2,
        },
        coupon: 'SU56HD246K',
        product: { name: 'Apple watch ultra', image: product2 },
        paymentMethod: 'fi fi-brands-stripe',
        status: { text: 'Rejected', color: 'danger' },
    },
    {
        id: 3,
        invoice: '#568745',
        customer: {
            name: 'Malanie Hanvey',
            email: 'malanie@example.com',
            image: avatar3,
        },
        coupon: 'SU56HD246K',
        product: { name: 'Google Pixel Buds', image: product3 },
        paymentMethod: 'fi fi-brands-cc-amazon-pay',
        status: { text: 'Completed', color: 'success' },
    },
    {
        id: 4,
        invoice: '#674523',
        customer: {
            name: 'Kenneth Hune',
            email: 'kenneth@example.com',
            image: avatar4,
        },
        coupon: 'SU56HD246K',
        product: { name: 'iPhone 15 pro max', image: product4 },
        paymentMethod: 'fi fi-brands-apple-pay',
        status: { text: 'Pending', color: 'warning' },
    },
    {
        id: 5,
        invoice: '#558746',
        customer: {
            name: 'Valentine Maton',
            email: 'valentine@example.com',
            image: avatar5,
        },
        coupon: 'SU56HD246K',
        product: { name: 'Canon camera kit', image: product5 },
        paymentMethod: 'fi fi-brands-stripe',
        status: { text: 'Completed', color: 'success' },
    },
];
const RecentOrderList = () => {
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "hstack py-3", children: [_jsx(Card.Title, { children: "Recent Orders" }), _jsxs(Button, { variant: "", className: "ms-auto btn-neutral", children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-2", children: "Order Report" })] })] }), _jsx("div", { className: "table-responsive", children: _jsxs("table", { className: "table mb-0", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Invoice" }), _jsx("th", { children: "Customer" }), _jsx("th", { children: "Coupon" }), _jsx("th", { children: "Product" }), _jsx("th", { children: "Payment" }), _jsx("th", { children: "Status" }), _jsx("th", { className: "text-end", children: "Action" })] }) }), _jsx("tbody", { children: orders.map((order) => (_jsxs("tr", { children: [_jsx("td", { children: _jsx(Link, { to: "", children: order.invoice }) }), _jsx("td", { children: _jsxs("div", { className: "hstack", children: [_jsx(Avatar, { size: "md", type: "image", src: order.customer.image, alt: order.customer.name }), _jsxs(Link, { to: "", className: "ms-3", children: [order.customer.name, _jsx("span", { className: "fs-13 fw-normal text-muted d-block", children: order.customer.email })] })] }) }), _jsx("td", { children: _jsx("span", { className: "badge text-success border border-success border-opacity-25", children: order.coupon }) }), _jsx("td", { children: _jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsx("div", { className: "rounded bg-body-secondary flex-shrink-0", style: { width: 'max-content' }, children: _jsx(Image, { src: order.product.image, fluid: true, rounded: true, className: "rounded", style: { height: '2.5rem' } }) }), _jsxs(Link, { to: "", className: "d-block", children: [order.product.name, _jsxs("span", { className: "fs-13 fw-normal text-muted d-block", children: ["Invoice: ", order.invoice] })] })] }) }), _jsx("td", { children: _jsx("i", { className: `fs-1 ${order.paymentMethod}` }) }), _jsx("td", { children: _jsx("span", { className: `badge bg-${order.status.color}-subtle text-${order.status.color}`, children: order.status.text }) }), _jsx("td", { className: "text-end", children: _jsx(Button, { variant: "light", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }) })] }, order.id))) })] }) }), _jsx(Card.Footer, { className: "border-top-0", children: _jsxs(Pagination, { className: "mb-0", children: [_jsx(Pagination.Prev, {}), [...Array(4)].map((_, index) => (_jsx(Pagination.Item, { children: index + 1 }, index))), _jsx(Pagination.Next, {})] }) })] }) }));
};
export default RecentOrderList;
