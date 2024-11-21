import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { TableHead, TableRow, TableCell } from '@mui/material';
function TableHeader(props) {
    const { typeHeader } = props;
    const header = typeHeader;
    console.log(header, 'header');
    return (_jsx(_Fragment, { children: !!header.length && (_jsx(TableHead, { sx: { '& th': { border: 0 } }, children: _jsx(TableRow, { className: "tableHeader", sx: { '& td': { border: 0 } }, children: header.map((h) => (_jsx(TableCell, { width: h.width, sx: { textAlign: 'center' }, children: h.label }, h.id))) }) })) }));
}
export default TableHeader;
