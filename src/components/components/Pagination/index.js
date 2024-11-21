import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Pagination } from '@mui/material';
import './style.css';
function TablePagination({ totalRecords, handlePageChanges, page }) {
    return (_jsx(Box, { container: true, className: "footer", children: _jsx(Pagination, { color: "primary", shape: "rounded", variant: "outlined", count: totalRecords && totalRecords > 10 ? Math.ceil(totalRecords / 10) : 1, page: page, onChange: handlePageChanges, showFirstButton: true, showLastButton: true, siblingCount: 2, boundaryCount: 2, "data-testid": "paginationItem" }) }));
}
export default TablePagination;
