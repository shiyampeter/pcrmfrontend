import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import avatar from '@/assets/images/avatars/1.png';
import Status from '@/components/Misc/Status';
const ChatAsideHeaderUser = ({ handleInviteClick }) => {
    const [status, setStatus] = useState('Online');
    const handleClick = () => {
        handleInviteClick();
    };
    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { direction: "horizontal", gap: 3, className: "px-4 border-bottom", style: { minHeight: '4.5rem' }, children: [_jsx("h4", { className: "fw-bold mb-0", children: "Chat" }), _jsx(Button, { variant: "light", className: "btn-icon rounded-pill ms-auto", onClick: handleClick, children: _jsx("i", { className: "fi fi-rr-user-add" }) })] }), _jsxs(Stack, { direction: "horizontal", gap: 3, className: "px-4 border-bottom", style: { minHeight: '4.5rem' }, children: [_jsx(Avatar, { type: "image", size: "md", src: avatar, alt: "User Avatar" }), _jsxs("div", { className: "mt-3", children: [_jsx("h6", { className: "text-dark mb-0", children: "Alexandra Della" }), _jsx(Status, { status: status, changeStatus: handleStatusChange })] })] })] }));
};
export default ChatAsideHeaderUser;
