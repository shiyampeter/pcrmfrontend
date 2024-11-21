import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BgCircleShapeStyle from '@/components/Misc/BgCircleShape';
import { Card, Button } from 'react-bootstrap';
const AnalyticPromoAction = () => {
    return (_jsx(Card, { className: "px-4 py-24 d-flex flex-column align-items-center justify-content-center text-center", style: BgCircleShapeStyle, children: _jsxs("div", { className: "mx-auto d-flex flex-column align-items-center justify-content-center", style: { maxWidth: '320px' }, children: [_jsx("div", { className: "text-primary mb-12", children: _jsx("i", { className: "fi fi-rs-rocket-lunch", style: { fontSize: '3rem', transform: 'rotate(320deg)', display: 'flex' } }) }), _jsx("h4", { className: "fw-bold mb-4", children: "Grow faster with pro's help" }), _jsx("p", { className: "mb-8 text-muted", children: "Experience top-notch features with our services and insights. Lorem ipsum dolor sit, amet consectetur adipisicing elit." }), _jsx(Button, { variant: "primary", children: "Get Started" })] }) }));
};
export default AnalyticPromoAction;
