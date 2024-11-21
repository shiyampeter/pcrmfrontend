import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ReactQuill from 'react-quill';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, Stack, Button } from 'react-bootstrap';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import 'react-quill/dist/quill.snow.css';
const EmailDetails = ({ selectedEmail }) => {
    const [editorContent, setEditorContent] = useState('');
    const [showEditor, setShowEditor] = useState(false);
    const [loading, setLoading] = useState(false);
    if (!selectedEmail) {
        return null;
    }
    const handleReply = () => {
        setShowEditor(true);
    };
    const handleForward = () => {
        setShowEditor(true);
    };
    const handleSend = () => {
        console.log('Sending Email:', editorContent);
        setEditorContent('');
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowEditor(false);
            toast.success('Email sent successfully');
        }, 2000);
    };
    const handleDiscard = () => {
        setEditorContent('');
        setShowEditor(false);
    };
    const { name, email, subject, fulldatetime, message, description, attachment } = selectedEmail;
    return (_jsx(_Fragment, { children: _jsxs(PerfectScrollbar, { className: "px-4 py-4 h-100", children: [_jsx("h2", { className: "fs-20 fw-semibold text-dark mb-4", children: subject }), _jsxs(Card, { className: "mb-4", children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex align-items-center justify-content-between", children: [_jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsx("div", { children: _jsx(Avatar, { type: "image", size: "md", src: selectedEmail?.image || '', alt: "User Avatar" }) }), _jsxs("div", { children: [_jsx("h6", { className: "mb-1", children: name }), _jsx("span", { className: "fs-13 text-muted d-block", children: email })] })] }), _jsxs(Stack, { direction: "horizontal", gap: 2, className: "ms-auto", children: [_jsx("time", { className: "fs-12 text-uppercase text-muted d-none d-sm-flex", children: fulldatetime }), _jsx(Button, { variant: "light", className: "btn-icon btn-sm", children: _jsx("i", { className: "fi fi-br-menu-dots-vertical" }) })] })] }), _jsxs(Card.Body, { children: [_jsx("p", { children: message }), _jsx("p", { children: description }), _jsxs("div", { children: [_jsx("span", { children: "Best Regards," }), _jsx("br", {}), _jsx("span", { className: "fw-bold", children: name })] }), attachment && (_jsxs(_Fragment, { children: [_jsx("hr", { className: "my-4" }), _jsxs("h6", { className: "mb-3", children: [_jsx("i", { className: "fi fi-rr-paperclip-vertical fs-12" }), " Attachment"] }), _jsxs("div", { className: "d-grid d-md-flex gap-2", children: [_jsxs(Link, { to: "", className: "d-inline-flex align-items-center gap-3 px-4 py-3 rounded border", children: [_jsx("i", { className: "fi fi-rr-file-zipper text-primary fs-32" }), _jsxs("div", { children: [_jsx("h6", { children: "Dashboard UiKit" }), _jsx("p", { className: "fs-12 text-muted mb-0", children: "34.75 MB" })] })] }), _jsxs(Link, { to: "", className: "d-inline-flex align-items-center gap-3 px-4 py-3 rounded border", children: [_jsx("i", { className: "fi fi-rr-file-zipper text-primary fs-32" }), _jsxs("div", { children: [_jsx("h6", { children: "Discussion Platform" }), _jsx("p", { className: "fs-12 text-muted mb-0", children: "23.48 MB" })] })] })] })] }))] })] }), _jsx("hr", { className: "my-12" }), _jsxs(Stack, { direction: "horizontal", gap: 2, className: "mb-4", children: [_jsxs(Button, { variant: "neutral", className: "rounded-pill", onClick: handleReply, children: [_jsx("i", { className: "fi fi-rr-undo" }), _jsx("span", { className: "ms-2", children: "Reply" })] }), _jsxs(Button, { variant: "neutral", className: "rounded-pill", onClick: handleForward, children: [_jsx("i", { className: "fi fi-rr-redo" }), _jsx("span", { className: "ms-2", children: "Forward" })] })] }), showEditor && (_jsxs(_Fragment, { children: [_jsx(ReactQuill, { value: editorContent, onChange: (content) => setEditorContent(content), theme: "snow", modules: {
                                toolbar: [
                                    [{ header: [1, 2, false] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    ['link', 'image', 'video'],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['clean'],
                                ],
                            } }), _jsxs(Stack, { direction: "horizontal", gap: 2, className: "mt-4", children: [_jsx(Button, { variant: "primary", onClick: handleSend, className: "text-white", disabled: loading, children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "fi fi-rr-paper-plane me-2 fs-14" }), "Send"] })) }), _jsx(Button, { variant: "", className: "text-danger", onClick: handleDiscard, children: "Discard" })] })] }))] }) }));
};
export default EmailDetails;
