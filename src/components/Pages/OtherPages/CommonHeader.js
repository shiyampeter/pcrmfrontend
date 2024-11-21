import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Badge } from 'react-bootstrap';
const CommonHeader = ({ hintText, bigTitle, leadDescription }) => {
    return (_jsx(_Fragment, { children: _jsx(Card.Header, { className: "py-12 py-md-16 py-lg-24 py-xl-32 bg-secondary-subtle position-relative", children: _jsxs("div", { className: "w-100 mx-auto text-center", style: { maxWidth: '600px' }, children: [_jsx(Badge, { bg: "", className: "fs-13 fw-semibold bg-primary-subtle text-primary px-3 mb-4 text-uppercase rounded-pill", children: hintText }), _jsx("div", { className: "display-4 text-dark fw-bold mb-4 text-uppercase", children: bigTitle }), _jsx("p", { className: "lead mb-0", children: leadDescription }), _jsx("div", { className: "mx-auto border border-2 border-primary rounded-pill mt-6", style: { width: '3rem' } })] }) }) }));
};
export default CommonHeader;
