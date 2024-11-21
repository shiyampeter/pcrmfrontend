import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Col, Row, Stack } from 'react-bootstrap';
import torusbg from '@/assets/images/general/torus-bg.png';
import LogoWhite from '@/components/Common/LogoWhite';
const AuthCreative = ({ children }) => {
    const creativeBgStyle = {
        minHeight: '100vh',
        backgroundImage: `url(${torusbg})`,
        backgroundSize: '992px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'start center',
        backgroundRepeat: 'no-repeat',
    };
    return (_jsxs(Row, { className: "auth-layout g-0", children: [_jsx(Col, { lg: 8, xl: 9, className: "d-none d-lg-flex flex-column align-items-center justify-content-center", style: { ...creativeBgStyle }, children: _jsx("div", { className: "w-100 h-100 bg-primary bg-opacity-50 text-white", children: _jsxs("div", { className: "my-12 mx-auto d-flex flex-column justify-content-between px-4 px-sm-6", style: { maxWidth: '768px', minHeight: 'calc(100vh - 6rem)' }, children: [_jsx(LogoWhite, {}), _jsxs("div", { children: [_jsx("h1", { className: "text-white mb-4", children: "Welcome back!" }), _jsx("p", { className: "lead fs-20", children: "We are glad to see you again! Get access to your Orders, Wishlist and Recommendations." })] }), _jsx("div", { children: _jsxs("div", { className: "text-white", children: [_jsx("span", { className: "fs-12 fw-medium text-uppercase", children: "Copyright\u00A9" }), _jsx("span", { className: "ms-1", children: new Date().getFullYear() })] }) })] }) }) }), _jsx(Col, { xs: 12, lg: 4, xl: 3, children: _jsx(Stack, { className: "align-items-center justify-content-center px-4 px-sm-6 auth-creative-layout", style: { minHeight: '100vh' }, children: _jsx(Card, { className: "w-100 mx-auto my-6 my-sm-8", style: { maxWidth: '480px' }, children: _jsx(Card.Body, { className: "py-8 py-sm-8 px-sm-8", children: children }) }) }) })] }));
};
export default AuthCreative;
