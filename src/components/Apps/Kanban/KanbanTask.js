import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Badge, Card, Image, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TaskDetailsModal from './TaskDetailsModal';
const KanbanTask = ({ id, content, index, onDelete }) => {
    const [isTaskDetailsModalOpen, setIsTaskDetailsModalOpen] = useState(false);
    const openTaskDetailsModal = () => {
        setIsTaskDetailsModalOpen(true);
    };
    const closeTaskDetailsModal = () => {
        setIsTaskDetailsModalOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Draggable, { draggableId: id, index: index, children: (provided) => (_jsx(Card, { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, className: "mb-3", onClick: openTaskDetailsModal, children: _jsxs(Card.Body, { children: [_jsx("h6", { className: "mb-3", children: content[0]?.tasktitle }), _jsx("p", { className: "fw-light", children: content[0]?.taskdesc }), _jsxs(Stack, { direction: "horizontal", gap: 3, className: "my-4", children: [_jsx(Stack, { direction: "horizontal", gap: 1, children: content[0]?.badge &&
                                            content[0]?.badge.map((badge, index) => (_jsx(Badge, { bg: "", className: `bg-${badge.toLowerCase()}-subtle text-${badge.toLowerCase()}`, children: badge }, index))) }), _jsxs("span", { className: "fs-11 text-muted hstack ms-auto", children: [_jsx("i", { className: "fi fi-rr-calendar fs-12 me-1" }), _jsx("span", { children: content[0]?.date })] })] }), _jsxs(Stack, { direction: "horizontal", className: "justify-content-between", children: [_jsx("div", { className: "avatar-group avatar-group-sm", children: content[0]?.avatars &&
                                            content[0]?.avatars.map((avatar, index) => (_jsx("div", { className: "avatar avatar-sm", children: _jsx(Image, { src: avatar, alt: `Avatar ${index + 1}` }) }, index))) }), _jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsxs(Link, { to: "#!", className: "text-muted hstack", children: [_jsx("i", { className: "fi fi-rr-paperclip-vertical fs-12 me-1" }), _jsx("span", { children: content[0]?.attach })] }), _jsxs(Link, { to: "#!", className: "text-muted hstack", children: [_jsx("i", { className: "fi fi-rr-comment-alt fs-12 me-1" }), _jsx("span", { children: content[0]?.comment })] })] })] })] }) }, id)) }, id), _jsx(TaskDetailsModal, { isOpen: isTaskDetailsModalOpen, onClose: closeTaskDetailsModal, taskDetails: content[0], onDelete: onDelete })] }));
};
export default KanbanTask;
