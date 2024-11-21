import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { OverlayTrigger, Tooltip, Stack, Dropdown, DropdownDivider, Button } from 'react-bootstrap';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
const ChatContentHeader = ({ selectedChat, onDeleteChat, setSelectedChat, setContainerToggle, sidebarLeftToggle, setSidebarLeftToggle, sidebarRightToggle, setSidebarRightToggle, }) => {
    const [isStarred, setIsStarred] = useState(false);
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [isArchive, setIsArchive] = useState(false);
    const handleStarClick = () => {
        setIsStarred(!isStarred);
        toast[isStarred ? 'error' : 'success'](isStarred ? 'Removed from favorites' : 'Added to favorites');
    };
    const handleArchiveClick = () => {
        setIsArchive(!isArchive);
        toast[isArchive ? 'error' : 'success'](isArchive ? 'Removed from archive' : 'Added to archive');
    };
    const toggleSound = () => {
        setIsSoundOn(!isSoundOn);
        const message = isSoundOn ? 'Sound turned off' : 'Sound turned on';
        const type = isSoundOn ? 'success' : 'error';
        toast(message, {
            icon: type === 'success' ? '🔕' : '🔔',
        });
    };
    const handleSidebarRightToggle = () => {
        document.querySelector('.apps-card')?.classList.add('apps-sidebar-right-toggle');
        setSidebarRightToggle(true);
        setSidebarLeftToggle(false);
        if (sidebarRightToggle) {
            document.querySelector('.apps-card')?.classList.remove('apps-sidebar-right-toggle');
            setSidebarRightToggle(false);
        }
    };
    const handleGoBack = () => {
        document.querySelector('.apps-card')?.classList.remove('apps-container-toggle');
        document.querySelector('.apps-card')?.classList.add('apps-sidebar-left-toggle');
        setSelectedChat(null);
        setContainerToggle(false);
        setSidebarLeftToggle(false);
        setSidebarRightToggle(false);
    };
    const handleSidebarLeftToggle = () => {
        document.querySelector('.apps-card')?.classList.add('apps-sidebar-left-toggle');
        setSidebarLeftToggle(true);
        if (sidebarLeftToggle) {
            document.querySelector('.apps-card')?.classList.remove('apps-sidebar-left-toggle');
            setSidebarLeftToggle(false);
        }
    };
    return (_jsx(_Fragment, { children: _jsxs(Stack, { direction: "horizontal", className: "ps-2 ps-md-3 pe-2 pe-md-3 border-bottom justify-content-between", style: { minHeight: '4.5rem' }, children: [_jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx(Button, { variant: "light", className: "btn-icon", onClick: handleGoBack, children: _jsx("i", { className: "fi fi-rr-arrow-left" }) }), _jsxs(Stack, { direction: "horizontal", gap: 3, onClick: handleSidebarRightToggle, style: { cursor: 'pointer' }, children: [_jsx(Avatar, { type: "image", size: "md", src: selectedChat?.image || '', alt: "User Avatar" }), _jsxs("div", { className: "mt-2", children: [_jsx("h6", { className: "mb-1", children: selectedChat?.name || 'User' }), _jsx("span", { className: "fs-13 text-muted", children: selectedChat?.role || 'No message' })] })] })] }), _jsxs(Stack, { direction: "horizontal", gap: 1, children: [_jsx(Button, { variant: "light", className: "btn-icon btn-md d-none d-lg-flex", onClick: handleSidebarLeftToggle, children: _jsx("i", { className: "fi fi-rr-menu-burger" }) }), _jsxs("div", { className: "d-none d-sm-flex align-item-center gap-1", children: [_jsx(OverlayTrigger, { overlay: _jsx(Tooltip, { children: "Comming Soon!" }), children: _jsx(Button, { variant: "light", className: "btn-icon", children: _jsx("i", { className: "fi fi-rr-phone-call" }) }) }), _jsx(OverlayTrigger, { overlay: _jsx(Tooltip, { children: "Comming Soon!" }), children: _jsx(Button, { variant: "light", className: "btn-icon", children: _jsx("i", { className: "fi fi-rr-video-plus fs-16" }) }) }), _jsx(Button, { variant: "light", className: "btn-icon", onClick: handleSidebarRightToggle, children: _jsx("i", { className: "fi fi-rr-info" }) })] }), _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "light", className: "btn-icon arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical fs-14" }) }), _jsxs(Dropdown.Menu, { children: [_jsxs(Dropdown.Item, { onClick: toggleSound, children: [isSoundOn ? (_jsx("i", { className: "fi fi-rr-volume" })) : (_jsx("i", { className: "fi fi-rr-volume-slash" })), _jsx("span", { className: "ms-3 ", children: isSoundOn ? 'Mute' : 'Unmute' })] }), _jsxs(Dropdown.Item, { onClick: handleStarClick, children: [_jsx("i", { className: `fi fi-rr-star ${isStarred ? 'text-warning' : ''}` }), _jsx("span", { className: "ms-3 ", children: isStarred ? 'Unstarred' : 'Starred' })] }), _jsxs(Dropdown.Item, { onClick: handleArchiveClick, children: [_jsx("i", { className: `fi fi-rr-add-folder ${isArchive ? 'text-success' : ''}` }), _jsx("span", { className: "ms-3 ", children: isArchive ? 'Unarchive' : 'Archived' })] }), _jsx(DropdownDivider, {}), _jsxs(Dropdown.Item, { className: "text-danger", onClick: (e) => {
                                                e.stopPropagation();
                                                if (selectedChat?.id) {
                                                    onDeleteChat(selectedChat.id);
                                                }
                                            }, children: [_jsx("i", { className: "fi fi-rr-trash" }), _jsx("span", { className: "ms-3 ", children: "Delete" })] })] })] })] })] }) }));
};
export default ChatContentHeader;
