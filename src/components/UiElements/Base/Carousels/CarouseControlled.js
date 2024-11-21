import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import carouselItems from './data/carouseData';
const CarouseControlled = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (_jsx(_Fragment, { children: _jsx(Carousel, { activeIndex: index, onSelect: handleSelect, interval: null, children: carouselItems.map(({ src, alt, caption, text }, itemIndex) => (_jsxs(Carousel.Item, { children: [_jsx(Image, { src: src, alt: alt, fluid: true }), _jsxs(Carousel.Caption, { children: [_jsx("h3", { className: "text-light", children: caption }), _jsx("p", { children: text })] })] }, itemIndex))) }) }));
};
export default CarouseControlled;
