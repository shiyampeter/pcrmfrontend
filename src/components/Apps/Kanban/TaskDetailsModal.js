import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Badge, Button, Form, Image, Modal, Spinner, Stack } from 'react-bootstrap';
import toast from 'react-hot-toast';
const TaskDetailsModal = ({ isOpen, onClose, onDelete, taskDetails, }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const { tasktitle, taskdesc, desclong, badge, avatars, date, attach, comment } = taskDetails;
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            toast.success('Task marked as complete');
        }
    };
    const handleDelete = () => {
        setIsDeleting(true);
        setTimeout(() => {
            onDelete();
            setIsDeleting(false);
            onClose();
            toast.success('Task Delete successfully');
        }, 1500);
    };
    return (_jsxs(Modal, { show: isOpen, onHide: onClose, centered: true, children: [_jsx(Modal.Header, { closeButton: true, children: _jsxs(Modal.Title, { className: "hstack gap-3", children: [tasktitle, badge && (_jsx(Stack, { direction: "horizontal", gap: 1, children: badge.map((badge, index) => (_jsx(Badge, { bg: "", className: `bg-${badge.toLowerCase()}-subtle text-${badge.toLowerCase()}`, children: badge.toUpperCase() }, index))) }))] }) }), _jsxs(Modal.Body, { children: [_jsxs("p", { children: [taskdesc, " ", desclong] }), _jsxs(Stack, { direction: "horizontal", className: "my-4", children: [_jsx("span", { className: "me-2", children: "Assigned:" }), avatars && (_jsx("div", { className: "avatar-group avatar-group-sm", children: avatars.map((avatar, index) => (_jsx("div", { className: "avatar avatar-sm", children: _jsx(Image, { src: avatar, alt: `Avatar ${index + 1}` }) }, index))) }))] }), _jsxs(Stack, { direction: "horizontal", className: "my-4", children: [_jsx("span", { className: "me-2", children: "Due Date:" }), _jsxs("span", { className: "fs-12 text-danger hstack", children: [_jsx("i", { className: "fi fi-rr-calendar fs-12 me-1" }), _jsx("span", { children: date })] })] }), _jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsxs("span", { className: "text-muted hstack", children: [_jsx("i", { className: "fi fi-rr-paperclip-vertical fs-12 me-1" }), _jsxs("span", { children: [attach, " Attachments"] })] }), _jsxs("span", { className: "text-muted hstack", children: [_jsx("i", { className: "fi fi-rr-comment-alt fs-12 me-1" }), _jsxs("span", { children: [comment, " Comments"] })] })] })] }), _jsxs(Modal.Footer, { children: [_jsxs(Form.Check, { type: "checkbox", id: "make-as-complete-check", className: "me-auto", children: [_jsx(Form.Check.Input, { type: "checkbox", checked: isChecked, onChange: handleCheckboxChange }), _jsx(Form.Check.Label, { children: "Make as complete" })] }), _jsx(Button, { variant: "", onClick: onClose, className: "text-danger", children: "Close" }), _jsx(Button, { variant: "danger", className: "text-white", onClick: handleDelete, disabled: isDeleting, children: isDeleting ? (_jsxs(_Fragment, { children: [_jsx(Spinner, { as: "span", animation: "border", size: "sm", role: "status", "aria-hidden": "true" }), _jsx("span", { className: "ms-2", children: 'Deleting...' })] })) : ('Delete') })] })] }));
};
export default TaskDetailsModal;
