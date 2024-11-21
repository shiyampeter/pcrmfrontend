import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Button, Col, Form, InputGroup, Row, Stack, Table } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
const CurrencyOptions = [
    { value: 'USD - US Dollar - $', label: 'USD - US Dollar - $' },
    { value: 'AFN - Afghan Afghani - ؋', label: 'AFN - Afghan Afghani - ؋' },
    { value: 'BDT - Bangladeshi Taka - ৳', label: 'BDT - Bangladeshi Taka - ৳' },
    { value: 'DEM - German Mark - DM', label: 'DEM - German Mark - DM' },
    {
        value: 'XOF - CFA Franc BCEAO - CFA',
        label: 'XOF - CFA Franc BCEAO - CFA',
    },
    {
        value: 'GBP - British Pound Sterling - £',
        label: 'GBP - British Pound Sterling - £',
    },
    { value: 'INR - Indian Rupee - ₹', label: 'INR - Indian Rupee - ₹' },
    { value: 'PKR - Pakistani Rupee - ₨', label: 'PKR - Pakistani Rupee - ₨' },
    { value: 'RUB - Russian Ruble - ₽', label: 'RUB - Russian Ruble - ₽' },
];
const PaymentOptions = [
    { value: 'Paypal', label: 'Paypal' },
    { value: 'Bank Transfer', label: 'Bank Transfer' },
    { value: 'Credit/Debit Card', label: 'Credit/Debit Card' },
    { value: 'Cashapp', label: 'Cashapp' },
];
const InvoiceCreateContent = ({ handleSendClick, setSelectedInvoice, setShowInvoiceCreate, sidebarLeftToggle, setSidebarLeftToggle, }) => {
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Window React Admin Dashboard',
            qty: '1',
            unitPrice: '39',
            totalPrice: '39',
        },
    ]);
    useEffect(() => {
        calculateTotals();
    }, [items]);
    const handleAddNewItem = () => {
        const newItem = {
            id: items.length + 1,
            name: '',
            qty: '',
            unitPrice: '',
            totalPrice: '',
        };
        setItems((prevItems) => [...prevItems, newItem]);
    };
    const handleDeleteItem = (itemId) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };
    const handleInputChange = (itemId, field, value) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, [field]: value } : item)));
    };
    const calculateTotal = (item) => {
        const { qty, unitPrice } = item;
        return qty && unitPrice ? (parseFloat(qty) * parseFloat(unitPrice)).toFixed(2) : '';
    };
    const calculateTotals = () => {
        const subtotal = items.reduce((acc, item) => {
            const total = parseFloat(calculateTotal(item)) || 0;
            return acc + total;
        }, 0);
        const defaultDiscount = 25;
        const defaultTax = 12;
        const discount = subtotal * (defaultDiscount / 100);
        const tax = subtotal * (defaultTax / 100);
        const total = subtotal - discount + tax;
        setSubtotal(subtotal);
        setDiscount(discount);
        setTax(tax);
        setTotal(total);
    };
    const handleToggleLateFees = (checked) => {
        if (checked) {
            toast.success('Late Fees enabled');
        }
        else {
            toast.error('Late Fees disabled');
        }
    };
    const handleToggleClientNotes = (checked) => {
        if (checked) {
            toast.success('Client Notes enabled');
        }
        else {
            toast.error('Client Notes disabled');
        }
    };
    const handleToggleSavePayment = (checked) => {
        if (checked) {
            toast.success('Save Payment enabled');
        }
        else {
            toast.error('Save Payment disabled');
        }
    };
    const handleGoBack = () => {
        document.querySelector('.apps-card')?.classList.remove('apps-container-toggle');
        setSelectedInvoice(null);
        setShowInvoiceCreate(false);
        setSidebarLeftToggle(false);
    };
    const handleSidebarLeftToggle = () => {
        document.querySelector('.apps-card')?.classList.add('apps-sidebar-left-toggle');
        setSidebarLeftToggle(true);
        if (sidebarLeftToggle) {
            document.querySelector('.apps-card')?.classList.remove('apps-sidebar-left-toggle');
            setSidebarLeftToggle(false);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { direction: "horizontal", gap: 3, className: "px-3 border-bottom justify-content-between bg-body-tertiary", style: { minHeight: '4.5rem' }, children: [_jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx(Button, { variant: "light", className: "btn-icon", onClick: handleGoBack, children: _jsx("i", { className: "fi fi-rr-arrow-left" }) }), _jsx("h5", { className: "fw-bold mb-0", children: "Create Invoice" })] }), _jsx(Button, { variant: "light", className: "btn-icon btn-md ms-auto d-none d-lg-flex", onClick: handleSidebarLeftToggle, children: _jsx("i", { className: "fi fi-rr-menu-burger" }) })] }), _jsxs(PerfectScrollbar, { className: "h-100", children: [_jsxs("div", { className: "border-bottom", children: [_jsx("div", { className: "px-4 py-4", children: _jsxs(Row, { className: "g-4 mb-4", children: [_jsxs(Col, { md: 4, children: [_jsx(Form.Label, { children: "Invoice number:" }), _jsxs(InputGroup, { children: [_jsx(InputGroup.Text, { children: "#INV-" }), _jsx(InputMask, { mask: "999999", maskChar: null, className: "form-control", placeholder: "Invoice number...." })] })] }), _jsx(Col, { md: 4, children: _jsxs(Form.Group, { controlId: "exampleForm.ControlInputIssueDate", children: [_jsx(Form.Label, { children: "Issue date:" }), _jsx(Flatpickr, { options: {
                                                            dateFormat: 'Y-m-d',
                                                        }, placeholder: "Issue date...", className: "form-control" })] }) }), _jsx(Col, { md: 4, children: _jsxs(Form.Group, { controlId: "exampleForm.ControlInputDueDate", children: [_jsx(Form.Label, { children: "Due date:" }), _jsx(Flatpickr, { options: {
                                                            dateFormat: 'Y-m-d',
                                                        }, placeholder: "Due date...", className: "form-control" })] }) })] }) }), _jsx("hr", { className: "m-0" }), _jsx("div", { className: "px-4 py-4", children: _jsxs(Row, { className: "row gy-4 gx-12", children: [_jsx(Col, { lg: 6, children: _jsxs(Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInputBillFrom", children: [_jsx(Form.Label, { children: "Bill from:" }), _jsx(Form.Control, { type: "text", placeholder: "Name..." }), _jsx("br", {}), _jsx(Form.Control, { type: "email", placeholder: "Email..." }), _jsx("br", {}), _jsx(Form.Control, { type: "tel", placeholder: "Phone..." }), _jsx("br", {}), _jsx(Form.Control, { as: "textarea", rows: 3, placeholder: "Address..." })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInputBillTo", children: [_jsx(Form.Label, { children: "Bill to:" }), _jsx(Form.Control, { type: "text", placeholder: "Name..." }), _jsx("br", {}), _jsx(Form.Control, { type: "email", placeholder: "Email..." }), _jsx("br", {}), _jsx(Form.Control, { type: "tel", placeholder: "Phone..." }), _jsx("br", {}), _jsx(Form.Control, { as: "textarea", rows: 3, placeholder: "Address..." })] }) })] }) }), _jsx("hr", { className: "m-0" }), _jsxs("div", { className: "px-4 py-4", children: [_jsxs(Table, { bordered: true, responsive: true, children: [_jsx("thead", { children: _jsxs("tr", { className: "single-item", children: [_jsx("th", { children: "#" }), _jsx("th", { style: { minWidth: '300px' }, children: "Product" }), _jsx("th", { style: { minWidth: '120px' }, children: "Qty" }), _jsx("th", { style: { minWidth: '120px' }, children: "Price" }), _jsx("th", { style: { minWidth: '120px' }, children: "Total" }), _jsx("th", { style: { width: '100px' }, children: "Action" })] }) }), _jsx("tbody", { children: items.map((item) => (_jsxs("tr", { children: [_jsx("td", { children: item.id }), _jsx("td", { children: _jsx(Form.Control, { type: "text", name: "", placeholder: "Enter product name....", value: item.name, onChange: (e) => handleInputChange(item.id, 'name', e.target.value) }) }), _jsx("td", { children: _jsx(Form.Control, { type: "number", name: "", placeholder: "Qty", value: item.qty, onChange: (e) => handleInputChange(item.id, 'qty', e.target.value) }) }), _jsx("td", { children: _jsx(Form.Control, { type: "number", name: "", placeholder: "Price", value: item.unitPrice, onChange: (e) => handleInputChange(item.id, 'unitPrice', e.target.value) }) }), _jsx("td", { children: calculateTotal(item) }), _jsx("td", { children: _jsx(Button, { variant: "", onClick: () => handleDeleteItem(item.id), children: _jsx("i", { className: "fi fi-rr-trash text-danger" }) }) })] }, item.id))) })] }), _jsxs("div", { className: "d-md-flex align-items-start justify-content-between mt-4", children: [_jsx(Button, { variant: "primary", onClick: handleAddNewItem, children: "Add New Item" }), _jsxs("div", { className: "my-4 my-md-0 w-100", style: { maxWidth: '300px' }, children: [_jsxs(Stack, { direction: "horizontal", className: "justify-content-between mb-2", children: [_jsx("span", { children: "Subtotal" }), _jsxs("span", { className: "fw-medium", children: ["$", subtotal.toFixed(2)] })] }), _jsxs(Stack, { direction: "horizontal", className: "justify-content-between mb-2", children: [_jsxs("span", { children: ["Discount ", _jsx("span", { className: "fs-12 text-muted", children: "(25%)" })] }), _jsxs("span", { className: "fw-medium", children: ["$", discount.toFixed(2)] })] }), _jsxs(Stack, { direction: "horizontal", className: "justify-content-between mb-2", children: [_jsxs("span", { children: ["Tax ", _jsx("span", { className: "fs-12 text-muted", children: "(12%)" })] }), _jsxs("span", { className: "fw-medium", children: ["$", tax.toFixed(2)] })] }), _jsx("hr", {}), _jsxs(Stack, { direction: "horizontal", className: "justify-content-between", children: [_jsx("span", { className: "fs-14 fw-bold", children: "Grand Total" }), _jsxs("span", { className: "fs-16 fw-bold", children: ["$", total.toFixed(2)] })] })] })] })] })] }), _jsx("div", { className: "mw-100 px-4 py-12", children: _jsxs(Row, { className: "g-4", children: [_jsxs(Col, { xl: 6, lg: 12, md: 6, className: "mb-8", children: [_jsxs("div", { className: "mb-4", children: [_jsx(Form.Label, { children: "Select currency:" }), _jsx(Select, { options: CurrencyOptions, classNamePrefix: "select" })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Form.Label, { children: "Accept payment:" }), _jsx(Select, { options: PaymentOptions, classNamePrefix: "select" })] }), _jsxs(Form.Group, { className: "mb-3", controlId: "exampleForm.ControlTextarea1", children: [_jsx(Form.Label, { children: "Invoice note:" }), _jsx(Form.Control, { as: "textarea", rows: 3, placeholder: "Invoice notes...." })] }), _jsxs("div", { className: "mt-4", children: [_jsx("p", { className: "fs-13 fw-light fst-italic text-muted mb-1", children: "Payment are secure and encrypted" }), _jsxs("p", { className: "fs-13 fw-light fst-italic text-muted mb-0", children: ["Question? ", _jsx(Link, { to: "/other-pages/contact-us", children: "Concatc Us" })] })] })] }), _jsx(Col, { xl: 6, lg: 12, md: 6, children: _jsxs("div", { className: "px-4 px-md-6 py-4 py-md-8 bg-secondary-subtle rounded-3 ms-auto", children: [_jsxs("div", { className: "mb-8", children: [_jsxs(Form.Check, { type: "switch", id: "check-api-late-fees", className: "mb-4", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleLateFees(e.target.checked) }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Late Fees" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "Late fees for extra charge" })] })] }), _jsxs(Form.Check, { type: "switch", id: "check-api-client-notes", className: "mb-4", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleClientNotes(e.target.checked), defaultChecked: true }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Client Notes" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "Client notes for further query" })] })] }), _jsxs(Form.Check, { type: "switch", id: "check-api-save-payment", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleSavePayment(e.target.checked) }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Save Payment" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "Save payment for quick payout" })] })] })] }), _jsxs(Stack, { direction: "horizontal", gap: 2, className: "mb-2", children: [_jsx(Button, { variant: "soft-success", className: "w-50", children: "Save" }), _jsx(Button, { variant: "soft-danger", className: "w-50", children: "Preview" })] }), _jsx(Button, { variant: "primary", size: "lg", className: "w-100", onClick: handleSendClick, children: "Send Invoice" })] }) })] }) })] })] }));
};
export default InvoiceCreateContent;
