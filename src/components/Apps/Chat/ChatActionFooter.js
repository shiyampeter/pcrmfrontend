import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import EmojiPicker from 'emoji-picker-react';
const ChatActionFooter = ({ onReplyMessage }) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const emojiPickerRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                setShowEmojiPicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [emojiPickerRef]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            onReplyMessage(message);
            setMessage('');
        }
    };
    const handleToggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };
    const handleEmojiClick = (emojiObject) => {
        const emoji = emojiObject.emoji;
        setMessage((prevMessage) => prevMessage + emoji);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "border-top w-100 px-3 px-md-4 d-flex align-items-center justify-content-between", style: { minHeight: '4.5rem' }, children: [_jsxs(Stack, { direction: "horizontal", gap: 2, className: "align-items-center", children: [_jsx(Button, { variant: "light", className: "btn-icon d-none d-sm-flex", children: _jsx("i", { className: "fi fi-rr-plus" }) }), _jsx(Button, { variant: "light", className: "btn-icon", children: _jsx("i", { className: "fi fi-rr-clip" }) })] }), _jsxs(Form, { className: "w-100 d-flex align-items-center", onSubmit: handleSubmit, children: [_jsxs("div", { className: "w-100 mx-3 position-relative", ref: emojiPickerRef, children: [_jsx(Form.Control, { type: "text", className: "rounded-pill", placeholder: "Type your message here....", value: message, onChange: (e) => setMessage(e.target.value) }), _jsx(Button, { variant: "light", className: "btn-icon position-absolute top-50 end-0 translate-middle-y", onClick: handleToggleEmojiPicker, children: _jsx("i", { className: "fi fi-rr-smile" }) }), showEmojiPicker && (_jsx(EmojiPicker, { onEmojiClick: handleEmojiClick, style: { position: 'absolute', right: '0', bottom: '55px' } }))] }), _jsx(Button, { variant: "primary", className: "btn-icon flex-shrink-0", type: "submit", children: _jsx("i", { className: "fi fi-rr-paper-plane" }) })] })] }) }));
};
export default ChatActionFooter;
