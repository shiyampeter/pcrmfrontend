import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { KanbanColumn } from '@/components/Apps/Kanban';
import { kanbanData } from '@/components/Apps/Kanban/data/kanbanData';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Button, Card, Stack } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { v4 as uuidv4 } from 'uuid';
// images
import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import avatar3 from '@/assets/images/avatars/3.png';
import avatar4 from '@/assets/images/avatars/4.png';
import avatar5 from '@/assets/images/avatars/5.png';
import TitleHelmet from '@/components/Common/TitleHelmet';
const Kanban = () => {
    const [data, setData] = useState(kanbanData.columns);
    const onDragEnd = (result) => {
        if (!result.destination)
            return;
        const { source, destination, draggableId } = result;
        if (source.droppableId === destination.droppableId && source.index === destination.index)
            return;
        const newData = [...data];
        const sourceColumn = newData.find((column) => column.id === source.droppableId);
        const destinationColumn = newData.find((column) => column.id === destination.droppableId);
        const taskToMove = sourceColumn?.tasks.find((task) => task.id === draggableId);
        if (sourceColumn && destinationColumn && taskToMove) {
            sourceColumn.tasks = sourceColumn.tasks.filter((task) => task.id !== draggableId);
            destinationColumn.tasks.splice(destination.index, 0, taskToMove);
            setData(newData);
        }
    };
    const handleAddColumn = () => {
        const newColumn = {
            id: uuidv4(),
            title: 'New Board',
            tasks: [],
            color: '#3E97FF',
        };
        setData((prevData) => [...prevData, newColumn]);
        toast.success(`${newColumn.title} added successfully`);
    };
    const deleteColumn = (columnId) => {
        const newData = data.filter((column) => column.id !== columnId);
        setData(newData);
    };
    const emptyColumnTasks = (columnId) => {
        const updatedTasks = [];
        setData((prevData) => {
            return prevData.map((column) => {
                if (column.id === columnId) {
                    return { ...column, tasks: updatedTasks };
                }
                else {
                    return column;
                }
            });
        });
    };
    const addTaskToColumn = (columnId, newTasks) => {
        setData((prevData) => {
            return prevData.map((column) => {
                if (column.id === columnId) {
                    return { ...column, tasks: [...column.tasks, ...newTasks] };
                }
                else {
                    return column;
                }
            });
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Kanban" }), _jsxs(Card, { children: [_jsxs(Card.Header, { className: "d-flex align-items-center justify-content-between", style: { height: '5rem' }, children: [_jsx("h4", { className: "fw-bold mb-0", children: "Kanban Board" }), _jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsxs("div", { className: "avatar-group avatar-group-md d-none d-md-flex", children: [_jsx(Avatar, { type: "image", src: avatar1, alt: "User Avatar", className: "avatar avatar-md" }), _jsx(Avatar, { type: "image", src: avatar2, alt: "User Avatar", className: "avatar avatar-md" }), _jsx(Avatar, { type: "image", src: avatar3, alt: "User Avatar", className: "avatar avatar-md" }), _jsx(Avatar, { type: "image", src: avatar4, alt: "User Avatar", className: "avatar avatar-md" }), _jsx(Avatar, { type: "image", src: avatar5, alt: "User Avatar", className: "avatar avatar-md" })] }), _jsx(Button, { variant: "neutral", className: "btn-icon btn-md rounded d-none d-md-flex", children: _jsx("i", { className: "fi fi-rr-settings" }) }), _jsxs(Button, { variant: "primary", onClick: handleAddColumn, children: [_jsx("i", { className: "fi fi-rr-plus" }), _jsx("span", { className: "ms-3", children: "Add Board" })] })] })] }), _jsx(DragDropContext, { onDragEnd: onDragEnd, children: _jsx(PerfectScrollbar, { className: "apps-scrollable-content", children: _jsx(Card.Body, { className: "d-flex align-items-start gap-3 gap-md-4", children: data.map((column) => (_jsx(KanbanColumn, { id: column.id, title: column.title, color: column.color, tasks: column.tasks, onDelete: () => deleteColumn(column.id), onEmptyTasks: () => emptyColumnTasks(column.id), addTaskToColumn: (newTask) => addTaskToColumn(column.id, newTask) }, column.id))) }) }) })] })] }));
};
export default Kanban;
