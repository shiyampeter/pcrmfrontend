import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class ReactSlickSingle extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const slideItems = [
            { id: 1, content: '1' },
            { id: 2, content: '2' },
            { id: 3, content: '3' },
            { id: 4, content: '4' },
            { id: 5, content: '5' },
            { id: 6, content: '6' },
        ];
        return (_jsx(_Fragment, { children: _jsx(Slider, { ...settings, children: slideItems.map(({ id, content }) => (_jsx("div", { className: "slick-slide-items", children: _jsx("div", { className: "slick-slide-single", children: content }) }, id))) }) }));
    }
}
