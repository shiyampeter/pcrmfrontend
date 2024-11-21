import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Button, Card, Stack } from 'react-bootstrap';
import { Preloader } from '@/components/Misc/Preloader';
import { InvoiceAsideHeader, InvoiceAsideCreate, InvoiceAsideSearch, InvoiceAsideList, InvoiceContentDetails, InvoiceContentHeader, InvoiceSendOffcanvas, InvoiceCreateContent, } from '@/components/Apps/Invoice';
import InvoiceItems from '@/components/Apps/Invoice/data/invoiceItems';
import TitleHelmet from '@/components/Common/TitleHelmet';
const Invoice = () => {
    const [loading, setLoading] = useState(false);
    const [invoiceItems, setInvoiceItems] = useState(InvoiceItems);
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSendOptions, setShowSendOptions] = useState(false);
    const [showInvoiceCreateContent, setShowInvoiceCreate] = useState(false);
    const [containerToggle, setContainerToggle] = useState(false);
    const [sidebarLeftToggle, setSidebarLeftToggle] = useState(false);
    const handleCreateInvoice = () => {
        setContainerToggle(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowInvoiceCreate(true);
            setSelectedInvoice(null);
        }, 1000);
    };
    const handleDeleteInvoice = (invoiceId) => {
        if (invoiceId) {
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this invoice!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3E97FF',
                confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
                if (result.isConfirmed) {
                    setLoading(true);
                    setTimeout(() => {
                        const updatedInvoiceItems = invoiceItems.filter((invoice) => invoice.id !== invoiceId);
                        setInvoiceItems(updatedInvoiceItems);
                        if (selectedInvoice && selectedInvoice.id === invoiceId) {
                            setSelectedInvoice(null);
                        }
                        setLoading(false);
                        setContainerToggle(false);
                        setSidebarLeftToggle(false);
                        toast.success('Invoice deleted successfully');
                    }, 1500);
                }
            });
        }
    };
    const handleSendClick = () => {
        setShowSendOptions(true);
    };
    useEffect(() => {
        if (containerToggle) {
            document.querySelector('.apps-card')?.classList.add('apps-container-toggle');
        }
        else {
            document.querySelector('.apps-card')?.classList.remove('apps-container-toggle');
        }
    }, [containerToggle]);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991.98 && sidebarLeftToggle) {
                document.querySelector('.apps-card')?.classList.remove('apps-sidebar-left-toggle');
            }
        };
        if (sidebarLeftToggle) {
            document.querySelector('.apps-card')?.classList.add('apps-sidebar-left-toggle');
        }
        else {
            document.querySelector('.apps-card')?.classList.remove('apps-sidebar-left-toggle');
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [sidebarLeftToggle]);
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Invoice" }), _jsxs(Card, { className: `apps-card  ${selectedInvoice ? 'apps-container-toggle' : ''} ${sidebarLeftToggle ? 'apps-sidebar-left-toggle' : ''}`, children: [_jsxs("div", { className: "apps-sidebar apps-sidebar-left apps-sidebar-md", children: [_jsx(InvoiceAsideHeader, {}), _jsx(InvoiceAsideCreate, { handleCreateInvoice: handleCreateInvoice }), _jsx(InvoiceAsideSearch, { onSearch: setSearchQuery }), _jsx(InvoiceAsideList, { invoiceItems: invoiceItems, selectedInvoice: selectedInvoice, setSelectedInvoice: setSelectedInvoice, setShowInvoiceCreate: setShowInvoiceCreate, setLoading: setLoading, searchQuery: searchQuery, onDeleteInvoice: handleDeleteInvoice, setContainerToggle: setContainerToggle })] }), _jsx("div", { className: "apps-container", children: _jsx("div", { className: "apps-container-inner", children: loading ? (_jsx(Stack, { className: "align-items-center justify-content-center flex-grow-1 h-100 ", children: _jsx(Preloader, {}) })) : (_jsx(_Fragment, { children: showInvoiceCreateContent ? (_jsx(InvoiceCreateContent, { handleSendClick: handleSendClick, setSelectedInvoice: setSelectedInvoice, setShowInvoiceCreate: setShowInvoiceCreate, sidebarLeftToggle: sidebarLeftToggle, setSidebarLeftToggle: setSidebarLeftToggle })) : !selectedInvoice ? (_jsxs(Stack, { className: "d-none d-lg-flex align-items-center justify-content-center flex-grow-1 h-100 mx-auto text-center", style: { maxWidth: '320px' }, children: [_jsx("i", { className: "fi fi-rr-file-invoice-dollar fs-48 mb-6" }), _jsx("h4", { className: "fw-bold", children: "Create new invoice" }), _jsx("p", { className: "fs-15 fw-light text-muted mb-4", children: "Pick a person or group from the left sidebar invoice list and start your conversation." }), _jsxs(Button, { variant: "", className: "btn-neutral", onClick: handleCreateInvoice, children: [_jsx("i", { className: "fi fi-br-plus fs-10" }), _jsx("span", { className: "ms-2", children: "Create Invoice" })] })] })) : (_jsxs(_Fragment, { children: [_jsx(InvoiceContentHeader, { selectedInvoice: selectedInvoice, handleSendClick: handleSendClick, onDeleteInvoice: handleDeleteInvoice, setSelectedInvoice: setSelectedInvoice, setContainerToggle: setContainerToggle, sidebarLeftToggle: sidebarLeftToggle, setSidebarLeftToggle: setSidebarLeftToggle }), _jsx(InvoiceContentDetails, { selectedInvoice: selectedInvoice, colSpan: 2 })] })) })) }) })] }), _jsx(InvoiceSendOffcanvas, { showSendOptions: showSendOptions, handleCloseSendOptions: () => setShowSendOptions(false) })] }));
};
export default Invoice;
