import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Col, Row } from 'react-bootstrap';
// images
import banner1 from '@/assets/images/banner/1.jpg';
import banner2 from '@/assets/images/banner/2.jpg';
const CardOverlay = () => {
    const cardGradintColor = {
        backgroundImage: 'linear-gradient(135deg, rgba(188, 26, 78, 1) 0%, rgba(0, 79, 230, 1) 100%)',
    };
    const cardImageWithGradient = {
        backgroundImage: ' linear-gradient(rgba(0, 0, 255, 0.75), rgba(255, 255, 0, 0.75))',
    };
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { lg: 4, children: _jsxs(Card, { className: "text-bg-dark", style: cardGradintColor, children: [_jsx("div", { style: { height: '300px' } }), _jsxs(Card.ImgOverlay, { children: [_jsx(Card.Title, { className: "mb-2", children: "Gradient overlay card" }), _jsx(Card.Text, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." }), _jsx(Card.Text, { children: "Last updated 3 mins ago" })] })] }) }), _jsx(Col, { lg: 4, children: _jsxs(Card, { className: "text-bg-dark", children: [_jsx(Card.Img, { src: banner1, style: { height: '300px' }, alt: "Card image" }), _jsxs(Card.ImgOverlay, { children: [_jsx(Card.Title, { className: "mb-2", children: "Image overlay card" }), _jsx(Card.Text, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." }), _jsx(Card.Text, { children: "Last updated 3 mins ago" })] })] }) }), _jsx(Col, { lg: 4, children: _jsxs(Card, { className: "text-bg-dark", children: [_jsx(Card.Img, { src: banner2, style: { height: '300px' }, alt: "Card image" }), _jsxs(Card.ImgOverlay, { style: cardImageWithGradient, children: [_jsx(Card.Title, { className: "mb-2", children: "Image with gradient card" }), _jsx(Card.Text, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." }), _jsx(Card.Text, { children: "Last updated 3 mins ago" })] })] }) })] }) }));
};
export default CardOverlay;
