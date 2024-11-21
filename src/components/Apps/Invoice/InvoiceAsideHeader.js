import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
const InvoiceAsideHeader = () => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 3, className: "px-4 border-bottom", style: { minHeight: '4.5rem' }, children: _jsx("h4", { className: "fw-bold mb-0", children: "Invoice" }) }) }));
};
export default InvoiceAsideHeader;
