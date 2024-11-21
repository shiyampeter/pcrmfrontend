import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// images
import banner1 from '@/assets/images/banner/big_1.jpg';
import banner2 from '@/assets/images/banner/big_2.jpg';
import banner3 from '@/assets/images/banner/big_3.jpg';
import banner4 from '@/assets/images/banner/big_4.jpg';
import banner5 from '@/assets/images/banner/big_5.jpg';
export default class ReactSlickAutoPlay extends Component {
    render() {
        const banners = [banner1, banner2, banner3, banner4, banner5];
        const settings = {
            customPaging: function (i) {
                return (_jsx("a", { children: _jsx(Image, { src: banners[i], alt: `banner-${i + 1}`, fluid: true }) }));
            },
            dots: true,
            dotsClass: 'slick-dots slick-thumb flex-wrap d-flex justify-content-center',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (_jsx(_Fragment, { children: _jsx(Slider, { ...settings, children: banners.map((banner, index) => (_jsx("div", { className: "slick-slide-items", children: _jsx(Image, { src: banner, alt: `banner-${index + 1}`, fluid: true }) }, index))) }) }));
    }
}
