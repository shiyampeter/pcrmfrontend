import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Button, Dropdown, DropdownDivider, Stack } from 'react-bootstrap';
const InvoiceContentHeader = ({ selectedInvoice, setSelectedInvoice, handleSendClick, onDeleteInvoice, setContainerToggle, sidebarLeftToggle, setSidebarLeftToggle, }) => {
    const [isStarred, setIsStarred] = useState(false);
    const [isArchive, setIsArchive] = useState(false);
    useEffect(() => {
        if (!selectedInvoice) {
            return;
        }
        setIsStarred(false);
        setIsArchive(false);
    }, [selectedInvoice]);
    const handleStarClick = () => {
        setIsStarred(!isStarred);
        toast[isStarred ? 'error' : 'success'](isStarred ? 'Removed from starred' : 'Added to starred');
    };
    const handleArchiveClick = () => {
        setIsArchive(!isArchive);
        toast[isArchive ? 'error' : 'success'](isArchive ? 'Removed from archive' : 'Added to archive');
    };
    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            const contentToPrint = document.getElementById('invoice-content');
            if (contentToPrint) {
                const contentClone = contentToPrint.cloneNode(true);
                const styles = document.getElementsByTagName('style');
                printWindow.document.head.innerHTML = document.head.innerHTML;
                for (let i = 0; i < styles.length; i++) {
                    printWindow.document.head.appendChild(styles[i].cloneNode(true));
                }
                printWindow.document.body.appendChild(contentClone);
                printWindow.print();
            }
        }
    };
    const handleGoBack = () => {
        document.querySelector('.apps-card')?.classList.remove('apps-container-toggle');
        setSelectedInvoice(null);
        setContainerToggle(false);
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
    return (_jsx(_Fragment, { children: _jsxs(Stack, { direction: "horizontal", className: "px-3 border-bottom justify-content-between", style: { minHeight: '4.5rem' }, children: [_jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx(Button, { variant: "light", className: "btn-icon", onClick: handleGoBack, children: _jsx("i", { className: "fi fi-rr-arrow-left" }) }), _jsx("h5", { className: "fw-bold mb-0", children: selectedInvoice.invnumber })] }), _jsxs(Stack, { direction: "horizontal", gap: 1, children: [_jsx(Button, { variant: "light", className: "btn-icon btn-md d-none d-lg-flex", onClick: handleSidebarLeftToggle, children: _jsx("i", { className: "fi fi-rr-menu-burger" }) }), _jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handlePrint, children: _jsx("i", { className: "fi fi-rr-print" }) }), _jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handleSendClick, children: _jsx("i", { className: "fi fi-rr-paper-plane" }) }), _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "light", className: "btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-edit" }), _jsxs("span", { className: "ms-3 ", children: ["Edit ", _jsx("span", { className: "fs-12 fst-italic fw-light text-muted", children: "(Coming Soon)" })] })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { onClick: handleStarClick, children: [_jsx("i", { className: `fi fi-rr-star ${isStarred ? 'text-warning' : ''}` }), _jsx("span", { className: "ms-3 ", children: isStarred ? 'Unstarred' : 'Starred' })] }), _jsxs(Dropdown.Item, { onClick: handleArchiveClick, children: [_jsx("i", { className: `fi fi-rr-add-folder ${isArchive ? 'text-success' : ''}` }), _jsx("span", { className: "ms-3 ", children: isArchive ? 'Unarchive' : 'Archived' })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { className: "text-danger", onClick: (e) => {
                                                e.stopPropagation();
                                                if (selectedInvoice?.id) {
                                                    onDeleteInvoice(selectedInvoice.id);
                                                }
                                            }, children: [_jsx("i", { className: "fi fi-rr-trash" }), _jsx("span", { className: "ms-3 ", children: "Delete" })] })] })] })] })] }) }));
};
export default InvoiceContentHeader;
