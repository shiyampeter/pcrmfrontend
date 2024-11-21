import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable, } from '@tanstack/react-table';
import { Table } from 'react-bootstrap';
import Sorter from './components/Sorter';
const columns = [
    {
        header: 'First Name',
        accessorKey: 'firstName',
    },
    {
        header: 'Last Name',
        accessorKey: 'lastName',
    },
    {
        header: 'Age',
        accessorKey: 'age',
    },
    {
        header: 'Email',
        accessorKey: 'email',
    },
    {
        header: 'Location',
        accessorKey: 'location',
    },
    {
        header: 'Phone',
        accessorKey: 'phone',
    },
];
const data = [
    {
        firstName: 'Maria',
        lastName: 'Anders',
        age: 24,
        email: 'maria.anders@example.com',
        location: 'New York, USA',
        phone: '+1 123-456-7890',
    },
    {
        firstName: 'Francisco',
        lastName: 'Chang',
        age: 29,
        email: 'francisco.chang@example.com',
        location: 'San Francisco, USA',
        phone: '+1 987-654-3210',
    },
    {
        firstName: 'Roland',
        lastName: 'Mendel',
        age: 31,
        email: 'roland.mendel@example.com',
        location: 'Berlin, Germany',
        phone: '+49 1234 567890',
    },
    {
        firstName: 'Helen',
        lastName: 'Bennett',
        age: 43,
        email: 'helen.bennett@example.com',
        location: 'London, UK',
        phone: '+44 20 1234 5678',
    },
    {
        firstName: 'Yoshi ',
        lastName: 'Tannamuri',
        age: 37,
        email: 'yoshi.tannamuri@example.com',
        location: 'Tokyo, Japan',
        phone: '+81 90-1234-5678',
    },
];
const TableSorting = () => {
    const [sorting, setSorting] = useState([]);
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });
    return (_jsx(_Fragment, { children: _jsxs(Table, { responsive: true, className: "mb-0", children: [_jsx("thead", { children: table.getHeaderGroups().map((headerGroup) => (_jsx("tr", { children: headerGroup.headers.map((header) => {
                            return (_jsx("th", { colSpan: header.colSpan, children: header.isPlaceholder ? null : (_jsxs("div", { className: header.column.getCanSort() ? 'cursor-pointer' : '',
                                    onClick: header.column.getToggleSortingHandler(), children: [flexRender(header.column.columnDef.header, header.getContext()), _jsx(Sorter, { sort: header.column.getIsSorted() })] })) }, header.id));
                        }) }, headerGroup.id))) }), _jsx("tbody", { children: table
                        .getRowModel()
                        .rows.slice(0, 10)
                        .map((row) => {
                        return (_jsx("tr", { children: row.getVisibleCells().map((cell) => {
                                return (_jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                            }) }, row.id));
                    }) })] }) }));
};
export default TableSorting;
