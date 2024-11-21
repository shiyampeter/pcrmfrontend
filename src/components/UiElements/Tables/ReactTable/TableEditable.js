import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, flexRender, } from '@tanstack/react-table';
import { makeData } from './makeData';
import { Table, Stack, Pagination } from 'react-bootstrap';
import Select from 'react-select';
const CellInput = ({ getValue, row, column, table }) => {
    const initialValue = getValue();
    const [value, setValue] = React.useState(initialValue);
    const onBlur = () => {
        table.options.meta?.updateData(row.index, column.id, value);
    };
    React.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    return (_jsx("input", { value: value, onChange: (e) => setValue(e.target.value), onBlur: onBlur, className: "form-control" }));
};
const defaultColumn = {
    cell: (props) => _jsx(CellInput, { ...props }),
};
function useSkipper() {
    const shouldSkipRef = React.useRef(true);
    const shouldSkip = shouldSkipRef.current;
    const skip = React.useCallback(() => {
        shouldSkipRef.current = false;
    }, []);
    React.useEffect(() => {
        shouldSkipRef.current = true;
    });
    return [shouldSkip, skip];
}
const TableEditable = () => {
    const columns = React.useMemo(() => [
        {
            accessorKey: 'firstName',
            footer: (props) => props.column.id,
        },
        {
            accessorFn: (row) => row.lastName,
            id: 'lastName',
            header: () => _jsx("span", { children: "Last Name" }),
            footer: (props) => props.column.id,
        },
        {
            accessorKey: 'age',
            header: () => 'Age',
            footer: (props) => props.column.id,
        },
        {
            accessorKey: 'visits',
            header: () => _jsx("span", { children: "Visits" }),
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
    const [data, setData] = React.useState(() => makeData(100));
    const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();
    const table = useReactTable({
        data,
        columns,
        defaultColumn,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        autoResetPageIndex,
        meta: {
            updateData: (rowIndex, columnId, value) => {
                skipAutoResetPageIndex();
                setData((old) => old.map((row, index) => {
                    if (index === rowIndex) {
                        return {
                            ...old[rowIndex],
                            [columnId]: value,
                        };
                    }
                    return row;
                }));
            },
        },
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
export default TableEditable;
