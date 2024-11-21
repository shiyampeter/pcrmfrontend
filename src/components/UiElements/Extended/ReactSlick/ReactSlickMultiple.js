import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class ReactSlickMultiple extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
        };
        const slideItems = Array.from({ length: 12 }, (_, index) => ({
            id: index + 1,
            content: index + 1,
        }));
        return (_jsx(_Fragment, { children: _jsx(Slider, { ...settings, children: slideItems.map(({ id, content }) => (_jsx("div", { className: "slick-slide-items", children: _jsx("div", { className: "slick-slide-single", children: content }) }, id))) }) }));
    }
}
