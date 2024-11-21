import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Carousel, Image } from 'react-bootstrap';
import carouselItems from './data/carouseData';
const CarouseAutoplay = () => {
    return (_jsx(_Fragment, { children: _jsx(Carousel, { children: carouselItems.map(({ src, alt, caption, text }, index) => (_jsxs(Carousel.Item, { interval: 1200, children: [_jsx(Image, { src: src, alt: alt, fluid: true }), _jsxs(Carousel.Caption, { children: [_jsx("h3", { className: "text-light", children: caption }), _jsx("p", { children: text })] })] }, index))) }) }));
};
export default CarouseAutoplay;
