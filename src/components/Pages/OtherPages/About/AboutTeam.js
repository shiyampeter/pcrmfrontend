import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Image, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import teamData from './data/teamData';
const AboutTeam = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "w-100 mx-auto text-center mb-16", style: { maxWidth: '600px' }, children: [_jsx("p", { className: "fs-12 fw-semibold text-primary mb-4 text-uppercase", children: "Our Team" }), _jsx("div", { className: "fw-bold  text-dark display-5 lh-base mb-4", children: "Amazing team of us." }), _jsx("p", { className: "fs-20 lead mb-0", children: "We're here to bring financial stability, improve the economy." })] }), _jsx(Slider, { ...settings, children: teamData.map(({ image, name, designation }, idx) => (_jsx("div", { className: "slick-slide-items ", children: _jsxs(Card, { className: "m-2", children: [_jsx("div", { className: "p-4", children: _jsx(Image, { src: image, alt: "", className: "img-fluid", style: {
                                        clipPath: 'polygon(46.1731656763% .7612046749%,47.411809549% .3407417371%,48.6947380778% .0855513863%,50% 0,51.3052619222% .0855513863%,52.588190451% .3407417371%,53.8268343237% .7612046749%,82.1111055711% 12.4769334274%,83.2842712475% 13.0554747147%,84.3718855375% 13.7821953496%,85.3553390593% 14.6446609407%,86.2178046504% 15.6281144625%,86.9445252853% 16.7157287525%,87.5230665726% 17.8888944289%,99.2387953251% 46.1731656763%,99.6592582629% 47.411809549%,99.9144486137% 48.6947380778%,100% 50%,99.9144486137% 51.3052619222%,99.6592582629% 52.588190451%,99.2387953251% 53.8268343237%,87.5230665726% 82.1111055711%,86.9445252853% 83.2842712475%,86.2178046504% 84.3718855375%,85.3553390593% 85.3553390593%,84.3718855375% 86.2178046504%,83.2842712475% 86.9445252853%,82.1111055711% 87.5230665726%,53.8268343237% 99.2387953251%,52.588190451% 99.6592582629%,51.3052619222% 99.9144486137%,50% 100%,48.6947380778% 99.9144486137%,47.411809549% 99.6592582629%,46.1731656763% 99.2387953251%,17.8888944289% 87.5230665726%,16.7157287525% 86.9445252853%,15.6281144625% 86.2178046504%,14.6446609407% 85.3553390593%,13.7821953496% 84.3718855375%,13.0554747147% 83.2842712475%,12.4769334274% 82.1111055711%,.7612046749% 53.8268343237%,.3407417371% 52.588190451%,.0855513863% 51.3052619222%,0 50%,.0855513863% 48.6947380778%,.3407417371% 47.411809549%,.7612046749% 46.1731656763%,12.4769334274% 17.8888944289%,13.0554747147% 16.7157287525%,13.7821953496% 15.6281144625%,14.6446609407% 14.6446609407%,15.6281144625% 13.7821953496%,16.7157287525% 13.0554747147%,17.8888944289% 12.4769334274%)',
                                    } }) }), _jsxs(Stack, { className: "p-4 border-top  text-center", children: [_jsx(Link, { to: "#!", className: "fs-16 fw-semibold", children: name }), _jsx("span", { className: "fs-13 text-muted", children: designation })] })] }) }, idx))) })] }));
};
export default AboutTeam;
