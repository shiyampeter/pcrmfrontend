import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class ReactSlickAutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
        };
        const slideItems = Array.from({ length: 6 }, (_, index) => ({
            id: index + 1,
            content: index + 1,
        }));
        return (_jsx(_Fragment, { children: _jsx(Slider, { ...settings, children: slideItems.map(({ id, content }) => (_jsx("div", { className: "slick-slide-items", children: _jsx("div", { className: "slick-slide-single", children: content }) }, id))) }) }));
    }
}
