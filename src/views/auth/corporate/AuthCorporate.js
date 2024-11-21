import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, Col, Image, Row, Stack } from 'react-bootstrap';
import BgCircleShapeStyle from '@/components/Misc/BgCircleShape';
import fullAvatar from '@/assets/images/general/full-avatar.png';
const AuthCorporate = ({ children }) => {
    return (_jsxs(Row, { className: "auth-layout g-0", children: [_jsx(Col, { xs: 12, lg: 6, xl: 4, children: _jsx(Stack, { className: "align-items-center justify-content-center mx-4 mx-sm-6", style: { minHeight: '100vh' }, children: _jsx(Card, { className: "w-100 mx-auto my-6 my-sm-8", style: { maxWidth: '480px' }, children: _jsx(Card.Body, { className: "py-8 py-sm-8 px-sm-8", children: children }) }) }) }), _jsxs(Col, { lg: 6, xl: 8, className: "d-none d-lg-flex flex-column align-items-center justify-content-center bg-primary bg-opacity-10 position-relative", style: { ...BgCircleShapeStyle, minHeight: '100vh' }, children: [_jsx(Image, { src: fullAvatar, fluid: true, style: { maxHeight: '100vh' }, className: "py-24" }), _jsxs("div", { className: "position-absolute end-10 bottom-10 bg-primary-subtle rounded-3 border border-primary border-opacity-10 p-5 shadow-sm", style: { maxWidth: '365px' }, children: [_jsx("h4", { className: "mb-3", children: "Grow faster with pro's help" }), _jsx("p", { className: "mb-4", children: "Experience top-notch features with our services and insights. Lorem ipsum dolor sit, amet consectetur adipisicing elit." }), _jsx(Button, { variant: "primary", children: "Get Started" })] })] })] }));
};
export default AuthCorporate;
