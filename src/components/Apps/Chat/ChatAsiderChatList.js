import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ListGroup, Stack } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Loading from '@/components/Misc/Loading';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
const ChatAsiderChatList = ({ chatItems, selectedChat, setSelectedChat, setLoading, searchQuery, onDeleteChat, setContainerToggle, }) => {
    const handleChatItemClick = (index) => {
        setSelectedChat(chatItems[index]);
        setContainerToggle(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
    const filteredChatItems = chatItems.filter(({ name, message }) => name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.toLowerCase().includes(searchQuery.toLowerCase()));
    return (_jsx(_Fragment, { children: _jsxs(PerfectScrollbar, { className: "h-100 d-flex flex-column", children: [_jsx(ListGroup, { variant: "flush", className: "flex-grow-1", children: filteredChatItems.length === 0 ? (_jsx(ListGroup.Item, { className: "py-4 text-center", children: "No items found" })) : (filteredChatItems.map(({ image, name, message, time, badge, id }, idx) => (_jsx(ListGroup.Item, { className: `py-4 ${selectedChat === chatItems[idx] ? 'bg-secondary-subtle' : ''}`, onClick: () => handleChatItemClick(idx), style: { cursor: 'pointer' }, children: _jsxs(Stack, { direction: "horizontal", gap: 3, className: "align-items-start", children: [_jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsx(Avatar, { type: "image", size: "md", src: image, alt: "User Avatar" }), _jsxs("div", { style: { maxWidth: '160px' }, children: [_jsx("h6", { className: "fs-14", children: name }), _jsx("p", { className: "fw-light text-truncate mb-0", children: message })] })] }), _jsxs(Stack, { className: "ms-auto align-items-end", children: [_jsx("time", { className: "fs-11 text-uppercase mb-1", children: time }), badge && (_jsx("span", { className: `badge bg-${badge[0].color}-subtle text-${badge[0].color}`, children: badge[0].count }))] })] }) }, id)))) }), _jsx("div", { className: "m-4", children: _jsx(Loading, { className: "w-100" }) })] }) }));
};
export default ChatAsiderChatList;
