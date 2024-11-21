import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ListGroup, Stack } from 'react-bootstrap';
import Loading from '@/components/Misc/Loading';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
const EmailList = ({ filteredEmails, selectedEmail, handleEmailItemClick, setLoading, setFilteredEmails, setContainerToggle, setSidebarMiniToggle, }) => {
    const handleEmailtemClick = (email) => {
        setSidebarMiniToggle(false);
        setContainerToggle(true);
        setLoading(true);
        setTimeout(() => {
            handleEmailItemClick(email);
            setLoading(false);
            setFilteredEmails((prevFilteredEmails) => prevFilteredEmails.map((item) => item.id === email.id ? { ...item, unread: false } : item));
        }, 1000);
    };
    return (_jsx(_Fragment, { children: _jsxs(PerfectScrollbar, { className: "h-100 d-flex flex-column", children: [filteredEmails.length === 0 ? (_jsx(ListGroup.Item, { className: "py-4 text-center flex-grow-1", children: "No items found" })) : (_jsx(ListGroup, { variant: "flush", className: "flex-grow-1", children: filteredEmails.map((email, idx) => (_jsx(ListGroup.Item, { className: `py-4 ${selectedEmail && selectedEmail.id === email.id ? 'bg-secondary-subtle' : ''}`, onClick: () => handleEmailtemClick(email), style: { cursor: 'pointer' }, children: _jsxs(Stack, { direction: "horizontal", gap: 3, className: "w-100 align-items-start", children: [_jsx("div", { className: "flex-grow-1", children: _jsx(Avatar, { type: "image", size: "sm", src: email.image, alt: "User Avatar" }) }), _jsxs("div", { className: "w-100", children: [_jsxs(Stack, { direction: "horizontal", className: "w-100 align-items-start mb-1", children: [_jsx("span", { className: "fs-13 text-dark d-block mb-0", children: email.name }), _jsxs(Stack, { direction: "horizontal", gap: 2, className: "ms-auto text-end", children: [email.attachment && (_jsx(Link, { to: "", children: _jsx("i", { className: "fi fi-rr-paperclip-vertical fs-14 text-muted" }) })), email.starred && (_jsx(Link, { to: "", className: "text-warning", children: _jsx("i", { className: "fi fi-rr-star fs-14" }) }))] })] }), _jsx("div", { style: { maxWidth: '275px' }, children: _jsx("h6", { className: "fs-14 text-truncate", children: email.subject }) }), _jsxs("div", { children: [_jsx("p", { className: "fw-light mw-100", style: {
                                                        overflow: 'hidden',
                                                        display: '-webkit-box',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: 2,
                                                    }, children: email.message }), _jsxs(Stack, { direction: "horizontal", gap: 2, className: "text-muted", children: [_jsx("i", { className: "fi fi-rr-calendar fs-12" }), _jsx("small", { className: "text-lowercase", children: email.fulldatetime })] })] })] })] }) }, idx))) })), _jsx("div", { className: "m-4", children: _jsx(Loading, { className: "w-100" }) })] }) }));
};
export default EmailList;
