import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Dropdown, DropdownDivider, Form, Stack } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import profilePic from '@/assets/images/avatars/2.png';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import avatar3 from '@/assets/images/avatars/3.png';
const avatarImages = [avatar1, avatar2, avatar3];
const supportLinks = [
    { text: 'I need request callback', url: '#!' },
    { text: 'How do I place an order?', url: '#!' },
    { text: 'I need help with something', url: '#!' },
    { text: 'My payment method not working', url: '#!' },
];
const SupportLiveChat = ({ show }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleChatExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    useEffect(() => {
        if (show) {
            document.body.classList.add('chat-show');
        }
        else {
            document.body.classList.remove('chat-show');
        }
        if (isExpanded) {
            document.body.classList.add('chat-expanded');
        }
        else {
            document.body.classList.remove('chat-expanded');
        }
    }, [show, isExpanded]);
    return (_jsx(_Fragment, { children: _jsxs(Card, { className: `support-live-chat ${show ? 'chat-show' : ''} ${isExpanded ? 'chat-expanded' : ''}`, children: [_jsxs(Card.Header, { className: "py-3 pe-2 d-flex align-items-center", children: [_jsxs(Stack, { direction: "horizontal", gap: 3, className: "flex-shrink-0", children: [_jsx(Avatar, { type: "image", size: "md", src: profilePic, alt: "Avatar", children: _jsx("div", { className: "avatar-status online" }) }), _jsxs("div", { children: [_jsx("h6", { className: "mb-1", children: "Althea Cabardo" }), _jsx("span", { className: "fs-12 text-success fst-italic", children: "Typing...." })] })] }), _jsxs("div", { className: "ms-auto d-flex align-items-center", children: [_jsx(Button, { variant: "", className: "btn-icon", onClick: toggleChatExpanded, children: isExpanded ? (_jsx("i", { className: "fi fi-ss-compress fs-14" })) : (_jsx("i", { className: "fi fi-ss-expand fs-14" })) }), _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "", className: "p-0 btn-icon btn-md arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) }), _jsxs(Dropdown.Menu, { align: "end", style: { marginTop: '0.875rem' }, children: [_jsx(Dropdown.Item, { children: "Chats close" }), _jsx(Dropdown.Item, { children: "Search chats" }), _jsx(Dropdown.Item, { children: "Show history" }), _jsx(Dropdown.Item, { children: "Report admin" }), _jsx(Dropdown.Item, { children: "Request callback" }), _jsx(DropdownDivider, {}), _jsx(Dropdown.Item, { className: "text-danger", children: "Delete chats" })] })] })] })] }), _jsx(PerfectScrollbar, { className: "support-chat-content-body", children: _jsxs(Card.Body, { children: [_jsxs("div", { className: "mt-8 mb-24 text-center mx-auto", style: { maxWidth: '280px' }, children: [_jsx("div", { className: "avatar-group avatar-group-lg mb-4 justify-content-center", children: avatarImages.map((avatarSrc, index) => (_jsx(Avatar, { type: "image", src: avatarSrc, alt: `User Avatar ${index + 1}`, className: "avatar avatar-lg" }, index))) }), _jsx("h5", { className: "text-dark mb-3", children: "Avilable Support Agents" }), _jsx("p", { className: "fw-light text-muted", children: "Ask us anything - we'll get back to you here or by email within 24 hours." })] }), _jsx("div", { className: "text-end", children: supportLinks.map(({ url, text }, idx) => (_jsx(Link, { to: url, className: "d-block mb-3", children: _jsx("span", { className: "rounded-pill border border-primary border-opacity-10 shadow-xs fs-13 fw-normal py-2 px-3", children: text }) }, idx))) })] }) }), _jsx(Card.Footer, { className: "w-100 ps-2 pe-3 py-3 d-flex align-items-center justify-content-between", children: _jsxs(Form, { className: "w-100 d-flex align-items-center", children: [_jsxs("div", { className: "w-100 mx-3 position-relative", children: [_jsx(Form.Control, { type: "text", className: "rounded-pill", placeholder: "Your message here...." }), _jsx(Stack, { direction: "horizontal", className: "align-items-center position-absolute top-50 end-0 translate-middle-y", children: _jsxs("div", { className: "d-flex align-items-center gap-3 me-3", children: [_jsx(Link, { to: "#!", className: "d-inline-flex", children: _jsx("i", { className: "fi fi-rr-clip fs-14" }) }), _jsx(Link, { to: "#!", className: "d-inline-flex", children: _jsx("i", { className: "fi fi-rr-smile fs-14" }) })] }) })] }), _jsx(Button, { variant: "primary", className: "btn-icon flex-shrink-0", children: _jsx("i", { className: "fi fi-rr-paper-plane" }) })] }) })] }) }));
};
export default SupportLiveChat;
