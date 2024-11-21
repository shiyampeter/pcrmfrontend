import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
const locations = [
    {
        city: 'Melbourne',
        address: '100 Flinders street <br /> Melbourne VIC 300, AU',
    },
    { city: 'Sydney', address: '944 Locust View Drive <br /> Novato, CA 94947' },
    { city: 'London', address: '2812 Southern Avenue <br /> Osceola, IA 50213' },
    {
        city: 'New York',
        address: '4299 Reppert Coal Road <br /> Detroit, MI 48219',
    },
    {
        city: 'Dhaka',
        address: '1678 Coal Road <br /> Brookside (Lycoming), PA 17963',
    },
    {
        city: 'Stockholm',
        address: '2630 Franklee Lane <br /> Philadelphia, PA 19108',
    },
];
const AboutOffice = () => {
    const column1 = locations.slice(0, 3);
    const column2 = locations.slice(3, 6);
    const renderAddress = (address) => _jsx("div", { dangerouslySetInnerHTML: { __html: address } });
    return (_jsx(_Fragment, { children: _jsx("div", { className: "pt-8 pt-md-12 pt-lg-16 px-4 px-md-6 bg-secondary-subtle rounded-3", children: _jsxs(Row, { children: [_jsxs(Col, { lg: 6, className: "mb-12", children: [_jsx("p", { className: "fs-12 fw-semibold mb-3 text-uppercase", children: "Our Locations" }), _jsx("div", { className: "h1 text-dark fw-bold mb-3 text-uppercase", children: "Visit our office" }), _jsx("p", { className: "lead", children: "Find us at the locations." }), _jsxs(Link, { to: "/other-pages/contact-us", className: "icon-link icon-link-hover link-primary", children: [_jsx("span", { children: "Contact Us" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] })] }), _jsx(Col, { sm: 6, lg: 3, children: column1.map(({ city, address }, idx) => (_jsxs("div", { className: "mb-6", children: [_jsx("h5", { children: city }), renderAddress(address)] }, idx))) }), _jsx(Col, { sm: 6, lg: 3, children: column2.map(({ city, address }, idx) => (_jsxs("div", { className: "mb-6", children: [_jsx("h5", { children: city }), renderAddress(address)] }, idx))) })] }) }) }));
};
export default AboutOffice;
