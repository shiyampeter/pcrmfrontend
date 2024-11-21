import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Col, Row } from 'react-bootstrap';
const CardBackground = () => {
    const colors = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info'];
    return (_jsx(_Fragment, { children: _jsx(Row, { className: "g-3 g-md-4", children: colors.map((variant) => (_jsx(Col, { lg: 4, children: _jsxs(Card, { bg: variant.toLowerCase(), text: variant.toLowerCase() === 'light' ? 'dark' : 'white', className: `card-${variant.toLowerCase()} text-bg-${variant.toLowerCase()} border-${variant.toLowerCase()}`, children: [_jsx(Card.Header, { children: "Header" }), _jsxs(Card.Body, { children: [_jsxs(Card.Title, { className: "mb-2", children: [variant, " Card Title "] }), _jsx(Card.Text, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." })] }), _jsx(Card.Footer, { children: "Footer" })] }) }, variant))) }) }));
};
export default CardBackground;
