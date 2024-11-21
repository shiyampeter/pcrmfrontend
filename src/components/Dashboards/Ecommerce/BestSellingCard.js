import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Card, ListGroup, Pagination, Stack, Dropdown, DropdownDivider } from 'react-bootstrap';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
// Sample images
import img1 from '@/assets/images/gallery/1.png';
import img2 from '@/assets/images/gallery/2.png';
import img3 from '@/assets/images/gallery/3.png';
import img4 from '@/assets/images/gallery/4.png';
import img5 from '@/assets/images/gallery/5.png';
const products = [
    {
        id: 1,
        name: 'Edifier headphone',
        img: img1,
        itemNumber: '#WLH-001',
        reviews: 895,
    },
    {
        id: 2,
        name: 'Apple watch ultra',
        img: img2,
        itemNumber: '#PCK-202',
        reviews: 732,
    },
    {
        id: 3,
        name: 'Google pixel buds',
        img: img3,
        itemNumber: '#SHS-303',
        reviews: 621,
    },
    {
        id: 4,
        name: 'iPhone 15 pro max',
        img: img4,
        itemNumber: '#UHD-404',
        reviews: 543,
    },
    {
        id: 5,
        name: 'Canon camera kit',
        img: img5,
        itemNumber: '#GPL-505',
        reviews: 467,
    },
];
const BestSellingCard = () => {
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Best Selling" }), _jsxs(Dropdown, { className: "ms-auto", drop: "down", children: [_jsx(Dropdown.Toggle, { variant: "light", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-share" }), _jsx("span", { className: "ms-3", children: "Share" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-refresh" }), _jsx("span", { className: "ms-3", children: "Refresh" })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-3", children: "All Reviews" })] })] })] })] }), _jsx(ListGroup, { variant: "flush", children: products.map((product) => (_jsxs(ListGroup.Item, { className: "hstack", style: { borderBottomStyle: 'dashed' }, children: [_jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsx("div", { style: { width: '3.5rem', height: '3rem' }, children: _jsx(Avatar, { size: "md", type: "image", shape: "1", src: product.img, alt: `Product ${product.id} Avatar`, className: "w-100 flex-shrink-0 rounded bg-body-secondary" }) }), _jsxs(Link, { to: "", children: [_jsx("h6", { children: product.name }), _jsxs("span", { className: "fs-12 text-muted", children: ["Code: ", product.itemNumber] })] })] }), _jsxs("div", { className: "ms-auto text-end", children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "mb-2", children: [...Array(5)].map((_, index) => (_jsx("i", { className: "fi fi-sr-star fs-12 text-warning" }, index))) }), _jsxs("p", { className: "fs-13 text-muted mb-0", children: [product.reviews, " Reviews"] })] })] }, product.id))) }), _jsx(Card.Footer, { children: _jsxs(Pagination, { className: "mb-0", children: [_jsx(Pagination.Prev, {}), [...Array(4)].map((_, index) => (_jsx(Pagination.Item, { children: index + 1 }, index))), _jsx(Pagination.Next, {})] }) })] }) }));
};
export default BestSellingCard;
