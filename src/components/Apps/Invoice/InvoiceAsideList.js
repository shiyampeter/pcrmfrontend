import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ListGroup, Stack } from 'react-bootstrap';
import Loading from '@/components/Misc/Loading';
const InvoiceAsideList = ({ invoiceItems, selectedInvoice, setSelectedInvoice, setShowInvoiceCreate, setLoading, searchQuery, setContainerToggle, }) => {
    const handleInvoiceItemClick = (index) => {
        setSelectedInvoice(invoiceItems[index]);
        setContainerToggle(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowInvoiceCreate(false);
        }, 1000);
    };
    const filteredInvoiceItems = invoiceItems.filter(({ invnumber, date }) => invnumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        date.toLowerCase().includes(searchQuery.toLowerCase()));
    return (_jsxs(PerfectScrollbar, { className: "h-100 d-flex flex-column", children: [_jsx(ListGroup, { variant: "flush", className: "flex-grow-1", children: filteredInvoiceItems.length === 0 ? (_jsx(ListGroup.Item, { className: "py-4 text-center flex-grow-1", children: "No items found" })) : (filteredInvoiceItems.map(({ id, invnumber, date, amount, status }, idx) => (_jsx(ListGroup.Item, { className: `py-4 ${selectedInvoice === invoiceItems[idx] ? 'bg-secondary-subtle' : ''}`, onClick: () => handleInvoiceItemClick(idx), style: { cursor: 'pointer' }, children: _jsxs(Stack, { gap: 3, direction: "horizontal", children: [_jsxs(Stack, { gap: 3, direction: "horizontal", children: [_jsx("div", { className: `btn btn-lg btn-icon btn-neutral rounded-pill gap-3 ${selectedInvoice === id ? 'bg-dark-subtle' : ''}`, children: _jsx("i", { className: "fi fi-rr-file-invoice-dollar" }) }), _jsxs("div", { children: [_jsx("div", { className: "fs-13 fw-semibold mb-1", children: invnumber }), _jsx("span", { className: "fs-12 fw-normal text-muted", children: date })] })] }), _jsxs("div", { className: "ms-auto text-end", children: [_jsx("div", { className: "fw-semibold mb-1", children: amount }), _jsx("span", { dangerouslySetInnerHTML: { __html: status } })] })] }) }, id)))) }), _jsx("div", { className: "m-4", children: _jsx(Loading, { className: "w-100" }) })] }));
};
export default InvoiceAsideList;
