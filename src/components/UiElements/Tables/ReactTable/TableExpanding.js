import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getFilteredRowModel, getExpandedRowModel, flexRender, } from '@tanstack/react-table';
import { makeData } from './makeData';
import { Button, Table, Stack, Pagination } from 'react-bootstrap';
import Select from 'react-select';
const TableExpanding = () => {
    const columns = React.useMemo(() => [
        {
            accessorKey: 'firstName',
            header: ({ table }) => (_jsxs(_Fragment, { children: [_jsx(IndeterminateCheckbox, { checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler() }), ' ', _jsx(Button, { onClick: table.getToggleAllRowsExpandedHandler(), variant: "", className: "btn-icon", children: table.getIsAllRowsExpanded() ? (_jsx("i", { className: "fi fi-rr-square-minus" })) : (_jsx("i", { className: "fi fi-rr-square-plus" })) }), ' ', "First Name"] })),
            cell: ({ row, getValue }) => (_jsx("div", { style: {
                    paddingLeft: `${row.depth * 2}rem`,
                }, className: "d-flex align-items-center", children: _jsxs(_Fragment, { children: [_jsx(IndeterminateCheckbox, { checked: row.getIsSelected(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler() }), ' ', row.getCanExpand() ? (_jsx("span", { onClick: row.getToggleExpandedHandler(),
                            style: { cursor: 'pointer' }, className: "d-inline-flex mx-3", children: row.getIsExpanded() ? (_jsx("i", { className: "fi fi-rr-square-minus" })) : (_jsx("i", { className: "fi fi-rr-square-plus" })) })) : (_jsx("span", { className: "bg-primary d-inline-block rounded-circle mx-2", style: { width: '0.5rem', height: '0.5rem' } })), ' ', getValue()] }) })),
            footer: (props) => props.column.id,
        },
        {
            accessorFn: (row) => row.lastName,
            id: 'lastName',
            cell: (info) => info.getValue(),
            header: () => _jsx("span", { children: "Last Name" }),
            footer: (props) => props.column.id,
        },
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
    const [data] = React.useState(() => makeData(100, 5, 3));
    const [expanded, setExpanded] = React.useState({});
    const table = useReactTable({
        data,
        columns,
        state: {
            expanded,
        },
        onExpandedChange: setExpanded,
        getSubRows: (row) => row.subRows,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        debugTable: true,
    });
    const totalPages = Math.ceil(data.length / table.getState().pagination.pageSize);
    const renderPaginationItems = () => {
        const currentPage = table.getState().pagination.pageIndex + 1;
        const totalPages = Math.ceil(data.length / table.getState().pagination.pageSize);
        const pageItems = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageItems.push(_jsx(Pagination.Item, { active: i === currentPage, onClick: () => table.setPageIndex(i - 1), children: i }, i));
            }
        }
        else {
            pageItems.push(_jsx(Pagination.Item, { active: 1 === currentPage, onClick: () => table.setPageIndex(0), children: 1 }, 1));
            if (currentPage > 2) {
                pageItems.push(_jsx(Pagination.Ellipsis, {}, "ellipsis-start"));
            }
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
                pageItems.push(_jsx(Pagination.Item, { active: i === currentPage, onClick: () => table.setPageIndex(i - 1), children: i }, i));
            }
            if (currentPage < totalPages - 1) {
                pageItems.push(_jsx(Pagination.Ellipsis, {}, "ellipsis-end"));
            }
            pageItems.push(_jsx(Pagination.Item, { active: totalPages === currentPage, onClick: () => table.setPageIndex(totalPages - 1), children: totalPages }, totalPages));
        }
        return pageItems;
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Table, { responsive: true, className: "mb-0", children: [_jsx("thead", { children: table.getHeaderGroups().map((headerGroup) => (_jsx("tr", { children: headerGroup.headers.map((header) => {
                                return (_jsx("th", { colSpan: header.colSpan, children: header.isPlaceholder ? null : (_jsx("div", { children: flexRender(header.column.columnDef.header, header.getContext()) })) }, header.id));
                            }) }, headerGroup.id))) }), _jsx("tbody", { children: table.getRowModel().rows.map((row) => {
                            return (_jsx("tr", { children: row.getVisibleCells().map((cell) => {
                                    return (_jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                                }) }, row.id));
                        }) })] }), _jsxs(Stack, { direction: "horizontal", gap: 2, className: "p-4 justify-content-between", children: [_jsx(Select, { value: {
                            label: table.getState().pagination.pageSize,
                            value: table.getState().pagination.pageSize,
                        }, onChange: (selectedOption) => {
                            if (selectedOption && selectedOption.value) {
                                table.setPageSize(Number(selectedOption.value));
                            }
                        }, options: [10, 20, 30, 40, 50].map((pageSize) => ({
                            label: pageSize,
                            value: pageSize,
                        })), classNamePrefix: "select", styles: {
                            control: (baseStyles) => ({
                                ...baseStyles,
                                width: '120px',
                            }),
                        } }), _jsxs(Pagination, { children: [_jsx(Pagination.Prev, { onClick: () => table.setPageIndex(table.getState().pagination.pageIndex - 1), disabled: table.getState().pagination.pageIndex === 0 }), renderPaginationItems(), _jsx(Pagination.Next, { onClick: () => table.setPageIndex(table.getState().pagination.pageIndex + 1), disabled: table.getState().pagination.pageIndex === totalPages - 1 })] })] })] }));
};
function IndeterminateCheckbox({ indeterminate, className = '', ...rest }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);
    return (_jsx("input", { type: "checkbox", ref: ref, className: className + ' form-check-input cursor-pointer', ...rest }));
}
export default TableExpanding;
