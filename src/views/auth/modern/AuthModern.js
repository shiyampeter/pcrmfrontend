import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useThemeContext } from '@/common';
import { changeHTMLAttribute } from '@/utils';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import LogoWhite from '@/components/Common/LogoWhite';
import bgVideo from '@/assets/images/general/video_bg_1.mp4';
import dotBg from '@/assets/images/general/dot.png';
const AuthModern = ({ children }) => {
    const { settings } = useThemeContext();
    useEffect(() => {
        changeHTMLAttribute('data-color-scheme', settings.color);
    }, [settings.color]);
    useEffect(() => {
        changeHTMLAttribute('data-bs-theme', settings.theme);
    }, [settings.theme]);
    useEffect(() => {
        changeHTMLAttribute('data-theme-font', settings.font);
    }, [settings.font]);
    useEffect(() => {
        changeHTMLAttribute('data-content-skin', settings.layout.contentSkin);
    }, [settings.layout.contentSkin]);
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "g-0", children: [_jsxs(Col, { lg: 6, xl: 8, className: "d-none d-lg-flex bg-primary bg-opacity-25 text-white d-flex flex-column align-items-center justify-content-center position-relative", style: { minHeight: '100vh', backgroundImage: `url(${dotBg})` }, children: [_jsxs("video", { autoPlay: true, loop: true, muted: true, className: "position-absolute top-0 left-0 w-100 h-100 object-fit-cover", style: { zIndex: -1 }, children: [_jsx("source", { src: bgVideo, type: "video/mp4" }), "Your browser does not support the video tag."] }), _jsxs("div", { className: "h-100 mx-auto my-12 d-flex flex-column justify-content-between px-4 px-sm-6", style: { maxWidth: '768px' }, children: [_jsx(LogoWhite, {}), _jsxs("div", { children: [_jsx("h1", { className: "text-white mb-4", children: "Welcome back!" }), _jsx("p", { className: "lead fs-20", children: "We are glad to see you again! Get access to your Orders, Wishlist and Recommendations." })] }), _jsx("div", { children: _jsxs("div", { className: "text-white", children: [_jsx("span", { className: "fs-12 fw-medium text-uppercase", children: "Copyright\u00A9" }), _jsx("span", { className: "ms-1", children: new Date().getFullYear() })] }) })] })] }), _jsx(Col, { xs: 12, lg: 6, xl: 4, children: _jsx(Stack, { className: "align-items-center justify-content-center mx-4 mx-sm-6", style: { minHeight: '100vh' }, children: _jsx(Card, { className: "w-100 mx-auto my-6 my-sm-8", style: { maxWidth: '480px' }, children: _jsx(Card.Body, { className: "py-8 py-sm-8 px-sm-8", children: children }) }) }) })] }) }));
};
export default AuthModern;
