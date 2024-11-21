import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Stack, OverlayTrigger, Tooltip, Dropdown, Button } from 'react-bootstrap';
const EmailDetailsHeader = ({ onDelete, handlePrev, handleNext, selectedEmail, selectedEmailIndex, filteredEmails, onStarChange, setFilteredEmails, setSelectedEmail, setContainerToggle, sidebarLeftToggle, setSidebarLeftToggle, }) => {
    const [isStarred, setIsStarred] = useState(selectedEmail?.starred || false);
    const { subject, label } = selectedEmail || {};
    useEffect(() => {
        setIsStarred(selectedEmail?.starred || false);
    }, [selectedEmail]);
    const handleStarClick = () => {
        setIsStarred((prev) => !prev);
        const toastMessage = isStarred ? 'Unstarred' : 'Starred';
        toast[isStarred ? 'error' : 'success'](`Email ${toastMessage}`);
        if (selectedEmail) {
            onStarChange(selectedEmail.id, !isStarred);
            setFilteredEmails((prevFilteredEmails) => prevFilteredEmails.map((item) => item.id === selectedEmail.id ? { ...item, starred: !isStarred } : item));
        }
    };
    const handleGoBack = () => {
        document.querySelector('.apps-card')?.classList.remove('apps-container-toggle');
        setSelectedEmail(null);
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
    return (_jsx(_Fragment, { children: _jsxs(Stack, { gap: 4, direction: "horizontal", className: "w-100 px-3 border-bottom align-items-center justify-content-between", style: { minHeight: '4.5rem' }, children: [_jsxs(Stack, { gap: 2, direction: "horizontal", children: [_jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handleGoBack, children: _jsx("i", { className: "fi fi-rr-arrow-left" }) }), _jsx("div", { className: "fs-14 fw-semibold text-dark text-truncate d-none d-sm-flex", style: { maxWidth: '180px' }, children: subject }), label && typeof label === 'object' && (_jsx("div", { children: _jsxs("span", { className: "d-inline-flex align-items-center gap-2 rounded-pill border py-1 px-2", children: [_jsx("span", { className: `d-block rounded-circle bg-gradient bg-${label.gradient}`, style: { width: '7px', height: '7px' } }), _jsx("span", { className: "fs-12", children: label.name })] }) }))] }), _jsxs(Stack, { direction: "horizontal", gap: 1, className: "justify-content-end", children: [_jsx(Button, { variant: "light", className: "btn-icon btn-md d-none d-lg-flex", onClick: handleSidebarLeftToggle, children: _jsx("i", { className: "fi fi-rr-menu-burger" }) }), _jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handleStarClick, children: _jsx("i", { className: `fi fi-rr-star fs-14 ${isStarred ? 'text-warning' : ''}` }) }), _jsx(OverlayTrigger, { overlay: _jsx(Tooltip, { children: "Prev" }), children: _jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handlePrev, disabled: selectedEmailIndex <= 0, children: _jsx("i", { className: "fi fi-rr-angle-left" }) }) }), _jsx(OverlayTrigger, { overlay: _jsx(Tooltip, { children: "Next" }), children: _jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handleNext, disabled: selectedEmailIndex >= filteredEmails.length - 1, children: _jsx("i", { className: "fi fi-rr-angle-right" }) }) }), _jsxs(Dropdown, { id: "dropdown-email-actions", children: [_jsx(Dropdown.Toggle, { variant: "light", id: "dropdown-email-options", className: "btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-br-menu-dots-vertical fs-14" }) }), _jsxs(Dropdown.Menu, { children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-ban" }), _jsx("span", { className: "ms-3", children: "Unread" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-time-half-past" }), _jsx("span", { className: "ms-3", children: "Snooze" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-check-circle" }), _jsx("span", { className: "ms-3", children: "Add Tasks" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-triangle-warning" }), _jsx("span", { className: "ms-3", children: "Report Spam" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-anchor" }), _jsx("span", { className: "ms-3", children: "Report Phishing" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { className: "text-danger", onClick: onDelete, children: [_jsx("i", { className: "fi fi-rr-trash" }), _jsx("span", { className: "ms-3", children: "Delete" })] })] })] })] })] }) }));
};
export default EmailDetailsHeader;
