import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Carousel, Image } from 'react-bootstrap';
import carouselItems from './data/carouseData';
const CarouselBasic = () => {
    return (_jsx(_Fragment, { children: _jsx(Carousel, { interval: null, children: carouselItems.map(({ src, alt }, index) => (_jsx(Carousel.Item, { children: _jsx(Image, { src: src, alt: alt, fluid: true }) }, index))) }) }));
};
export default CarouselBasic;
