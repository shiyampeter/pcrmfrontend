import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Col, Row, Stack } from 'react-bootstrap';
import LogoWhite from '@/components/Common/LogoWhite';
import BgCircleShapeStyle from '@/components/Misc/BgCircleShape';
const AuthClassic = ({ children }) => {
    return (_jsxs(Row, { className: "auth-layout g-0", children: [_jsx(Col, { lg: 6, className: "d-none d-lg-flex text-bg-primary text-white d-flex flex-column align-items-center justify-content-center", style: { ...BgCircleShapeStyle, minHeight: '100vh' }, children: _jsxs("div", { className: "h-100 mx-auto my-12 d-flex flex-column justify-content-between px-4 px-sm-6", style: { maxWidth: '576px' }, children: [_jsx(LogoWhite, {}), _jsxs("div", { children: [_jsx("h1", { className: "text-white mb-4", children: "Welcome back!" }), _jsx("p", { className: "lead fs-20", children: "We are glad to see you again! Get access to your Orders, Wishlist and Recommendations." })] }), _jsx("div", { children: _jsxs("div", { className: "text-white", children: [_jsx("span", { className: "fs-12 fw-medium text-uppercase", children: "Copyright\u00A9" }), _jsx("span", { className: "ms-1", children: new Date().getFullYear() })] }) })] }) }), _jsx(Col, { xs: 12, lg: 6, children: _jsx(Stack, { className: "align-items-center justify-content-center mx-4 mx-sm-6", style: { minHeight: '100vh' }, children: _jsx(Card, { className: "w-100 mx-auto my-6 my-sm-8", style: { maxWidth: '480px' }, children: _jsx(Card.Body, { className: "py-8 py-sm-8 px-sm-8", children: children }) }) }) })] }));
};
export default AuthClassic;
