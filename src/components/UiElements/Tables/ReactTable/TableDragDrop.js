import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { makeData } from './makeData';
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors, } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, Table } from 'react-bootstrap';
const RowDragHandleCell = ({ rowId }) => {
    const { attributes, listeners } = useSortable({
        id: rowId,
    });
    return (_jsx(Button, { variant: "", className: "btn-icon", ...attributes, ...listeners, children: _jsx("i", { className: "fi fi-rr-arrows" }) }));
};
const DraggableRow = ({ row }) => {
    const { transform, transition, setNodeRef, isDragging } = useSortable({
        id: row.original.userId,
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1 : 0,
        position: 'relative',
    };
    return (_jsx("tr", { ref: setNodeRef, style: style, children: row.getVisibleCells().map((cell) => (_jsx("td", { style: { width: cell.column.getSize() }, children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }));
};
const TableDragDrop = () => {
    const columns = React.useMemo(() => [
        {
            id: 'drag-handle',
            header: 'Move',
            cell: ({ row }) => _jsx(RowDragHandleCell, { rowId: row.id }),
            size: 60,
        },
        {
            accessorKey: 'firstName',
            cell: (info) => info.getValue(),
        },
        {
            accessorFn: (row) => row.lastName,
            id: 'lastName',
            cell: (info) => info.getValue(),
            header: () => _jsx("span", { children: "Last Name" }),
        },
        {
            accessorKey: 'age',
            header: () => 'Age',
        },
        {
            accessorKey: 'visits',
            header: () => _jsx("span", { children: "Visits" }),
        },
        {
            accessorKey: 'status',
            header: 'Status',
        },
        {
            accessorKey: 'progress',
            header: 'Profile Progress',
        },
    ], []);
    const [data, setData] = React.useState(() => makeData(10));
    const dataIds = React.useMemo(() => data?.map(({ userId }) => userId), [data]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getRowId: (row) => row.userId,
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    });
    function handleDragEnd(event) {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setData((data) => {
                const oldIndex = dataIds.indexOf(active.id);
                const newIndex = dataIds.indexOf(over.id);
                return arrayMove(data, oldIndex, newIndex);
            });
        }
    }
    const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));
    return (_jsx(_Fragment, { children: _jsx(DndContext, { collisionDetection: closestCenter, modifiers: [restrictToVerticalAxis], onDragEnd: handleDragEnd, sensors: sensors, children: _jsxs(Table, { responsive: true, className: "mb-0", children: [_jsx("thead", { children: table.getHeaderGroups().map((headerGroup) => (_jsx("tr", { children: headerGroup.headers.map((header) => (_jsx("th", { colSpan: header.colSpan, children: header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext()) }, header.id))) }, headerGroup.id))) }), _jsx("tbody", { children: _jsx(SortableContext, { items: dataIds, strategy: verticalListSortingStrategy, children: table.getRowModel().rows.map((row) => (_jsx(DraggableRow, { row: row }, row.id))) }) })] }) }) }));
};
export default TableDragDrop;
