import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
const InvoiceAsideCreate = ({ handleCreateInvoice }) => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 3, className: "px-4 border-bottom", style: { minHeight: '4.5rem' }, children: _jsxs(Button, { className: "w-100", onClick: handleCreateInvoice, children: [_jsx("i", { className: "fi fi-br-plus fs-10" }), _jsx("span", { className: "ms-2", children: "Create Invoice" })] }) }) }));
};
export default InvoiceAsideCreate;
