import { jsx as _jsx } from "react/jsx-runtime";
import { TableRow, TableCell, Skeleton } from '@mui/material';
function TableRowsLoader({ rowsNum, colsNum }) {
    return [...Array(rowsNum)].map((row, index) => (_jsx(TableRow, { children: [...Array(colsNum)].map((row) => (_jsx(TableCell, { component: "th", scope: "row", sx: { bgcolor: 'white' }, children: _jsx(Skeleton, { animation: "wave", variant: "text" }) }))) }, index)));
}
export default TableRowsLoader;
