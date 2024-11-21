import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ListGroup, Stack } from 'react-bootstrap';
import Loading from '@/components/Misc/Loading';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
const ContactList = ({ filteredContacts, selectedContact, handleContactItemClick, setLoading, setFilteredContacts, handleStarChange, setContainerToggle, setSidebarMiniToggle, }) => {
    const handleClick = (contact) => {
        setSidebarMiniToggle(false);
        setContainerToggle(true);
        setLoading(true);
        setTimeout(() => {
            handleContactItemClick(contact);
            setLoading(false);
            setFilteredContacts((prevFilteredContacts) => prevFilteredContacts.map((item) => item.id === contact.id ? { ...item, unread: false } : item));
        }, 1000);
    };
    return (_jsx(_Fragment, { children: _jsxs(PerfectScrollbar, { className: "h-100 d-flex flex-column", children: [filteredContacts.length === 0 ? (_jsx(ListGroup.Item, { className: "py-4 text-center flex-grow-1", children: "No items found" })) : (_jsx(ListGroup, { variant: "flush", className: "flex-grow-1", children: filteredContacts.map((contact, idx) => (_jsx(ListGroup.Item, { className: `py-4 ${selectedContact && selectedContact.id === contact.id ? 'bg-secondary-subtle' : ''}`, onClick: () => handleClick(contact), style: { cursor: 'pointer' }, children: _jsxs(Stack, { direction: "horizontal", gap: 3, className: "w-100 align-items-start", children: [_jsx("div", { className: "flex-grow-1", children: _jsx(Avatar, { type: "image", size: "md", src: contact.image, alt: "User Avatar" }) }), _jsxs("div", { className: "w-100", children: [_jsx("h6", { children: contact.name }), _jsx("span", { className: "fs-13 fw-light d-block", children: contact.phone })] })] }) }, idx))) })), _jsx("div", { className: "m-4", children: _jsx(Loading, { className: "w-100" }) })] }) }));
};
export default ContactList;
