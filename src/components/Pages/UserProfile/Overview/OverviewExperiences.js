import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import ExperiencesData from './data/ExperiencesData';
const OverviewExperiences = () => {
    return (_jsxs(_Fragment, { children: [_jsx("h5", { className: "fw-semibold mb-5", children: "Experiences" }), ExperiencesData.map(({ image, title, time, duration, description }, idx) => (_jsxs("div", { className: "border p-3 mb-3 rounded d-sm-flex align-items-start", children: [_jsx("div", { className: "rounded flex-shrink-0 mb-3 mb-sm-0", style: { width: '3rem', height: '3rem' }, children: _jsx(Image, { src: image, className: "img-fluid rounded", alt: "" }) }), _jsxs("div", { className: "ms-sm-4", children: [_jsx("h6", { children: title }), _jsxs("div", { className: "hstack gap-2 fs-12 my-2", children: [_jsx("span", { children: time }), _jsx("span", { className: "bg-dark bg-opacity-25 rounded-circle", style: { width: '4px', height: '4px' } }), _jsx("span", { children: duration })] }), _jsx("p", { children: description }), _jsxs(Link, { to: "#!", className: "icon-link icon-link-hover", children: [_jsx("span", { children: "View Details" }), _jsx("i", { className: "fi fi-rr-arrow-right bi" })] })] })] }, idx)))] }));
};
export default OverviewExperiences;
