import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Button, Card, Stack } from 'react-bootstrap';
import { Preloader } from '@/components/Misc/Preloader';
import { ChatActionFooter, ChatAsideHeader, ChatAsideSearch, ChatAsiderChatList, ChatContentDetails, ChatContentHeader, ChatUserInfoSidebar, InviteFriendModal, } from '@/components/Apps/Chat';
import chatItemsData from '@/components/Apps/Chat/data/chatItems';
import TitleHelmet from '@/components/Common/TitleHelmet';
const Chat = () => {
    const [chatItems, setChatItems] = useState(chatItemsData);
    const [selectedChat, setSelectedChat] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [inviteEmail, setInviteEmail] = useState('');
    const [containerToggle, setContainerToggle] = useState(false);
    const [sidebarLeftToggle, setSidebarLeftToggle] = useState(false);
    const [sidebarRightToggle, setSidebarRightToggle] = useState(false);
    const handleReplyMessage = async (message) => {
        const currentTime = new Date().toLocaleTimeString();
        const newReplyMessage = {
            reply: message,
            datetime: currentTime,
        };
        if (selectedChat) {
            const updatedChat = { ...selectedChat };
            updatedChat.conversion = updatedChat.conversion || [];
            updatedChat.conversion.push({ replyMessage: [newReplyMessage] });
            setSelectedChat(updatedChat);
        }
        setSearchQuery('');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (selectedChat) {
            const updatedChat = { ...selectedChat };
            updatedChat.conversion = updatedChat.conversion || [];
            const automatedSentMessage = {
                sent: 'Thank you for your awesome support! ❣️❣️❣️',
                datetime: new Date().toLocaleTimeString(),
            };
            updatedChat.conversion.push({ sentMessage: [automatedSentMessage] });
            setSelectedChat(updatedChat);
        }
        const updatedChatItems = chatItems.map((chat) => {
            if (chat.id === selectedChat?.id) {
                return selectedChat;
            }
            return chat;
        });
        setChatItems(updatedChatItems);
    };
    const handleDeleteChat = (chatId) => {
        if (chatId) {
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this chat!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3E97FF',
                confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
                if (result.isConfirmed) {
                    setLoading(true);
                    setTimeout(() => {
                        const updatedChatItems = chatItems.filter((chat) => chat.id !== chatId);
                        setChatItems(updatedChatItems);
                        if (selectedChat && selectedChat.id === chatId) {
                            setSelectedChat(null);
                        }
                        setLoading(false);
                        setContainerToggle(false);
                        setSidebarLeftToggle(false);
                        setSidebarRightToggle(false);
                        toast.success('Chat deleted successfully');
                    }, 1500);
                }
            });
        }
    };
    const handleInviteClick = () => {
        setShowInviteModal(true);
    };
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
    useEffect(() => {
        if (containerToggle) {
            document.querySelector('.apps-card')?.classList.add('apps-container-toggle');
        }
        else {
            document.querySelector('.apps-card')?.classList.remove('apps-container-toggle');
        }
    }, [containerToggle]);
    useEffect(() => {
        if (sidebarRightToggle) {
            document.querySelector('.apps-card')?.classList.add('apps-sidebar-right-toggle');
        }
        else {
            document.querySelector('.apps-card')?.classList.remove('apps-sidebar-right-toggle');
        }
    }, [sidebarRightToggle]);
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Chats" }), _jsxs(Card, { className: `apps-card  ${selectedChat ? 'apps-container-toggle' : ''}  ${sidebarLeftToggle ? 'apps-sidebar-left-toggle' : ''} ${sidebarRightToggle ? 'apps-sidebar-right-toggle' : ''}`, children: [_jsxs("div", { className: "apps-sidebar apps-sidebar-left", children: [_jsx(ChatAsideHeader, { handleInviteClick: handleInviteClick }), _jsx(ChatAsideSearch, { onSearch: setSearchQuery }), _jsx(ChatAsiderChatList, { chatItems: chatItems, selectedChat: selectedChat, setSelectedChat: setSelectedChat, setLoading: setLoading, searchQuery: searchQuery, onDeleteChat: handleDeleteChat, setContainerToggle: setContainerToggle })] }), _jsxs("div", { className: "apps-container", children: [_jsx("div", { className: "apps-container-inner", children: loading ? (_jsx(Stack, { className: "align-items-center justify-content-center flex-grow-1 h-100 ", children: _jsx(Preloader, {}) })) : !selectedChat ? (_jsxs(Stack, { className: "d-none d-lg-flex align-items-center justify-content-center flex-grow-1 h-100 mx-auto text-center", style: { maxWidth: '320px' }, children: [_jsx("i", { className: "fi fi-rr-comment-alt-dots fs-48 mb-6" }), _jsx("h4", { className: "fw-bold", children: "Start new conversation" }), _jsx("p", { className: "fs-15 fw-light text-muted mb-4", children: "Pick a person or group from the left sidebar chat list and start your conversation." }), _jsxs(Button, { variant: "", className: "btn-neutral", onClick: handleInviteClick, children: [_jsx("i", { className: "fi fi-br-plus fs-10" }), _jsx("span", { className: "ms-2", children: "Invite Friend" })] })] })) : (_jsxs(_Fragment, { children: [_jsx(ChatContentHeader, { selectedChat: selectedChat, onDeleteChat: handleDeleteChat, setSelectedChat: setSelectedChat, setContainerToggle: setContainerToggle, sidebarLeftToggle: sidebarLeftToggle, setSidebarLeftToggle: setSidebarLeftToggle, sidebarRightToggle: sidebarRightToggle, setSidebarRightToggle: setSidebarRightToggle }), _jsx(ChatContentDetails, { selectedChat: selectedChat }), _jsx(ChatActionFooter, { onReplyMessage: handleReplyMessage })] })) }), _jsx(ChatUserInfoSidebar, { selectedChat: selectedChat, setSidebarRightToggle: setSidebarRightToggle })] }), _jsx("div", { className: "custom-backdrop", onClick: () => setSidebarRightToggle(false) })] }), _jsx(InviteFriendModal, { show: showInviteModal, inviteEmail: inviteEmail, setInviteEmail: setInviteEmail, handleInviteClose: () => setShowInviteModal(false) })] }));
};
export default Chat;
