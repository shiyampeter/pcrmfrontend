import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import { Stack, OverlayTrigger, Tooltip, Dropdown, Button } from 'react-bootstrap';
const ContactDetailsHeader = ({ onDelete, handlePrev, handleNext, selectedContactIndex, filteredContacts, selectedContact, onStarChange, setFilteredContacts, setSelectedContact, setContainerToggle, sidebarLeftToggle, setSidebarLeftToggle, }) => {
    const [isStarred, setIsStarred] = useState(selectedContact?.starred || false);
    const { image, name, phone } = selectedContact || {};
    useEffect(() => {
        setIsStarred(selectedContact?.starred || false);
    }, [selectedContact]);
    const handleStarClick = () => {
        setIsStarred((prev) => !prev);
        const toastMessage = isStarred ? 'Unstarred' : 'Starred';
        toast[isStarred ? 'error' : 'success'](`${toastMessage} ${selectedContact?.name}!`);
        if (selectedContact) {
            onStarChange(selectedContact.id, !isStarred);
            setFilteredContacts((prevFilteredContacts) => prevFilteredContacts.map((item) => item.id === selectedContact.id ? { ...item, starred: !isStarred } : item));
        }
    };
    const handleGoBack = () => {
        document.querySelector('.apps-card')?.classList.remove('apps-container-toggle');
        setSelectedContact(null);
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
    return (_jsx(_Fragment, { children: _jsxs(Stack, { direction: "horizontal", className: "px-3 border-bottom justify-content-between", style: { minHeight: '4.5rem' }, children: [_jsxs(Stack, { gap: 2, direction: "horizontal", children: [_jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handleGoBack, children: _jsx("i", { className: "fi fi-rr-arrow-left" }) }), _jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsx("div", { children: _jsx(Avatar, { type: "image", size: "md", src: image || '', alt: "User Avatar" }) }), _jsxs("div", { className: "d-none d-sm-block", children: [_jsx("h6", { className: "mb-1", children: name }), _jsx("span", { className: "fs-13 text-muted d-block", children: phone })] })] })] }), _jsxs(Stack, { direction: "horizontal", gap: 1, children: [_jsx(Button, { variant: "light", className: "btn-icon btn-md d-none d-lg-flex", onClick: handleSidebarLeftToggle, children: _jsx("i", { className: "fi fi-rr-menu-burger" }) }), _jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handleStarClick, children: _jsx("i", { className: `fi fi-rr-star fs-14 ${isStarred ? 'text-warning' : ''}` }) }), _jsx(OverlayTrigger, { overlay: _jsx(Tooltip, { children: "Prev" }), children: _jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handlePrev, disabled: selectedContactIndex <= 0, children: _jsx("i", { className: "fi fi-rr-angle-left" }) }) }), _jsx(OverlayTrigger, { overlay: _jsx(Tooltip, { children: "Next" }), children: _jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handleNext, disabled: selectedContactIndex >= filteredContacts.length - 1, children: _jsx("i", { className: "fi fi-rr-angle-right" }) }) }), _jsxs(Dropdown, { id: "dropdown-contact-actions", children: [_jsx(Dropdown.Toggle, { variant: "light", id: "dropdown-contact-options", className: "btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-br-menu-dots-vertical fs-14" }) }), _jsxs(Dropdown.Menu, { children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-pen-nib" }), _jsx("span", { className: "ms-3", children: "Edit" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-box" }), _jsx("span", { className: "ms-3", children: "Archive" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-check-circle" }), _jsx("span", { className: "ms-3", children: "Add Tasks" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-time-half-past" }), _jsx("span", { className: "ms-3", children: "Add Labels" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-triangle-warning" }), _jsx("span", { className: "ms-3", children: "Report Spam" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-ban" }), _jsx("span", { className: "ms-3", children: "Block Contact" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-anchor" }), _jsx("span", { className: "ms-3", children: "Report Phishing" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { className: "text-danger", onClick: onDelete, children: [_jsx("i", { className: "fi fi-rr-trash" }), _jsx("span", { className: "ms-3", children: "Delete" })] })] })] })] })] }) }));
};
export default ContactDetailsHeader;
