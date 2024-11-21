import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import avatar from '@/assets/images/avatars/1.png';
const ChatContentDetails = ({ selectedChat }) => {
    if (!selectedChat) {
        return null;
    }
    return (_jsx(PerfectScrollbar, { className: "px-4 py-4 h-100", children: selectedChat.conversion?.map((conversion, idx) => (_jsxs("div", { className: "w-100", children: [conversion.replyMessage && (_jsxs("div", { className: "d-flex align-items-start flex-row-reverse gap-3 mb-12 ms-auto", style: { maxWidth: '400px' }, children: [_jsx(Avatar, { type: "image", size: "md", src: avatar, className: "flex-shrink-0" }), _jsxs("div", { className: "w-100 d-flex flex-column align-items-end justify-content-end", children: [_jsx("p", { className: "px-2 py-2 mb-2 rounded bg-primary text-white", children: conversion.replyMessage[0]?.reply }), _jsx("div", { className: "fs-12 text-muted", children: conversion.replyMessage[0]?.datetime })] })] })), conversion.sentMessage && (_jsxs("div", { className: "d-flex align-items-start gap-3 mb-12", style: { maxWidth: '400px' }, children: [_jsx(Avatar, { type: "image", size: "md", src: selectedChat.image, className: "flex-shrink-0" }), _jsxs("div", { className: "w-100 d-flex flex-column align-items-start justify-content-start", children: [_jsx("p", { className: "px-2 py-2 mb-2 rounded bg-body-secondary text-dark", children: conversion.sentMessage[0]?.sent || 'No message content' }), _jsx("div", { className: "fs-12 text-muted", children: conversion.sentMessage[0]?.datetime })] })] }))] }, idx))) }));
};
export default ChatContentDetails;
