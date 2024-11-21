import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class ReactSlickVariableWidth extends Component {
    render() {
        const settings = {
            className: 'slider variable-width',
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
        };
        const slideItems = [
            { id: 1, width: 150, content: '150' },
            { id: 2, width: 200, content: '200' },
            { id: 3, width: 250, content: '250' },
            { id: 4, width: 300, content: '300' },
            { id: 5, width: 425, content: '425' },
            { id: 6, width: 275, content: '275' },
        ];
        return (_jsx(_Fragment, { children: _jsx(Slider, { ...settings, children: slideItems.map(({ id, width, content }) => (_jsx("div", { className: "slick-slide-items", style: { width: width }, children: _jsx("div", { className: "slick-slide-single", children: content }) }, id))) }) }));
    }
}