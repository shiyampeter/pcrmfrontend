import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, flexRender, } from '@tanstack/react-table';
import { makeData } from './makeData';
import { Stack, Form } from 'react-bootstrap';
const TableFiltering = () => {
    const columns = React.useMemo(() => [
        {
            accessorKey: 'firstName',
            header: 'First Name',
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
        },
        {
            accessorFn: (row) => row.lastName,
            id: 'lastName',
            header: 'Last Name',
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
        },
        {
            accessorKey: 'age',
            header: 'Age',
            footer: (props) => props.column.id,
        },
        {
            accessorKey: 'visits',
            header: 'Visits',
            footer: (props) => props.column.id,
        },
        {
            accessorKey: 'status',
            header: 'Status',
            footer: (props) => props.column.id,
        },
        {
            accessorKey: 'progress',
            header: 'Profile Progress',
            footer: (props) => props.column.id,
        },
    ], []);
    const [data] = React.useState(() => makeData(100));
    return (_jsx(_Fragment, { children: _jsx(Table, { data,
            columns }) }));
};
function Table({ data, columns }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    });
    return (_jsx(_Fragment, { children: _jsx("div", { className: "table-responsive", children: _jsxs("table", { className: "table mb-0", children: [_jsx("thead", { children: table.getHeaderGroups().map((headerGroup) => (_jsx("tr", { children: headerGroup.headers.map((header) => {
                                return (_jsx("th", { colSpan: header.colSpan, children: header.isPlaceholder ? null : (_jsxs("div", { children: [flexRender(header.column.columnDef.header, header.getContext()), header.column.getCanFilter() ? (_jsx("div", { children: _jsx(Filter, { column: header.column, table: table }) })) : null] })) }, header.id));
                            }) }, headerGroup.id))) }), _jsx("tbody", { children: table.getRowModel().rows.map((row) => {
                            return (_jsx("tr", { children: row.getVisibleCells().map((cell) => {
                                    return (_jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                                }) }, row.id));
                        }) })] }) }) }));
}
function Filter({ column, table }) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);
    const columnFilterValue = column.getFilterValue();
    return typeof firstValue === 'number' ? (_jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx(Form.Control, { size: "sm", type: "number", value: columnFilterValue?.[0] ?? '', onChange: (e) => column.setFilterValue((old) => [e.target.value, old?.[1]]), placeholder: `Min` }), _jsx(Form.Control, { size: "sm", type: "number", value: columnFilterValue?.[1] ?? '', onChange: (e) => column.setFilterValue((old) => [old?.[0], e.target.value]), placeholder: `Max` })] })) : (_jsx(Form.Control, { size: "sm", type: "text", value: (columnFilterValue ?? ''), onChange: (e) => column.setFilterValue(e.target.value), placeholder: `Search...` }));
}
export default TableFiltering;
