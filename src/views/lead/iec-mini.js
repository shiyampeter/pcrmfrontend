import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react-hooks/exhaustive-deps */
import TableRowsLoader from '@/components/components/TableLoader';
import TopBreaccrumb from '@/components/components/TopBreadcrumb';
import SearchInput from '@/components/components/searchInput';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, IconButton, Slide, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import TablePagination from '@/components/components/Pagination';
import DeleteModal from '@/components/components/deleteModal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import TableHeader from '@/components/components/tableHeader';
import { IECMINI_HEADER } from '@/components/constants/tableHeader';
import { errorAlert, successAlert } from '@/helpers/global-function';
import { iecMiniDelete, iecMiniList } from '@/redux/api/public/iecMiniService';
import { useSelector } from 'react-redux';
import AddIecForm from './addIecForm';
import AddOnlineForm from './addOnlineForm';
const Transition = React.forwardRef(function Transition(props, ref) {
    return _jsx(Slide, { direction: "up", ref: ref, ...props });
});
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function IecMini() {
    const [open, setOpen] = React.useState(false);
    const [online, setOnline] = React.useState(false);
    const [delid, setDelId] = useState(null);
    const [categoryListData, setCategoryListData] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [searchValue] = useDebounce(searchKey, 1000);
    const [page, setPage] = useState(1);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [singleData, setSingleData] = useState(null);
    const [addType, setAddType] = useState(null);
    const dispatch = useDispatch();
    const stateValues = useSelector((state) => {
        return {
            deleteLoading: state.iecMini.iecMiniDelete.loading,
        };
    });
    const categoryListDataLoading = useSelector((state) => state.iecMini.iecMiniList);
    // cancel search
    const cancelSearch = () => {
        setSearchKey('');
    };
    //on search
    const onSearch = (e) => {
        setSearchKey(e.target.value);
    };
    //list api
    const iecMiniListApi = async () => {
        try {
            const res = await dispatch(iecMiniList({ page, search: searchValue })).unwrap();
            setCategoryListData(res);
        }
        catch (errors) {
            errorAlert(errors?.message);
        }
    };
    const handlePageChanges = (_event, pageValue) => {
        setPage(pageValue);
    };
    const handleClickOpen = () => {
        setSingleData(null);
        setOpen(true);
        setAddType('add');
    };
    const handleClickOnline = () => {
        setSingleData(null);
        setOnline(true);
        setAddType('add');
    };
    const deleteDirectory = (id) => {
        setDelId(id);
        setDeleteModalOpen(true);
    };
    const editDirectory = (id, work_type) => {
        setSingleData(id);
        if (work_type == 'Online') {
            setOnline(true);
        }
        else {
            setOpen(true);
        }
        setAddType('edit');
    };
    const deleteDirectoryModalClose = () => {
        setDeleteModalOpen(false);
    };
    const delteApiFn = async () => {
        try {
            const response = await dispatch(iecMiniDelete(delid)).unwrap();
            successAlert(response.message);
            setDeleteModalOpen(false);
            iecMiniListApi();
        }
        catch (errors) {
            errorAlert(errors?.message);
        }
    };
    const handleClose = () => {
        setOpen(false);
        setOnline(false);
    };
    const handleButtonClick = async () => {
        handleClose(); // Call handleClose to close the form
        await iecMiniListApi(); // Call handleAddDirectory to add directory data
    };
    useEffect(() => {
        iecMiniListApi();
    }, [page, searchValue]);
    return (_jsx(Box, { sx: { overflowY: 'auto', maxHeight: '500px', mb: '40px' }, children: _jsxs(Box, { className: "indexBox", children: [_jsx(TopBreaccrumb, { title: 'Iec List', to: `/admin/dashboard` }), _jsx(Box, { sx: { my: 3 }, children: _jsxs(Stack, { direction: { lg: 'row', sm: 'column' }, 
                        // gap={2}
                        // alignItems={"center"}
                        justifyContent: 'space-between', children: [_jsx(Box, { children: _jsx(SearchInput, { sx: {
                                        border: '1px solid #303067',
                                        borderRadius: '20px',
                                        height: '32.69px',
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        '&.Mui-focused ': {
                                            border: '1px solid #6473ff',
                                        },
                                        width: { xs: '100%', sm: '340px' },
                                    }, value: searchKey || '', onChange: (e) => onSearch(e), cancelSearch: cancelSearch }) }), _jsxs(Box, { sx: { display: 'flex', gap: '10px' }, children: [_jsx(Button, { className: "New-Button", onClick: handleClickOpen, children: "Add Iec Mini" }), _jsx(Button, { className: "New-Button", onClick: handleClickOnline, children: "Add Iec Online" })] })] }) }), _jsx(TableContainer, { className: "rolesPageTable", children: _jsxs(Table, { size: "small", "aria-label": "a dense table", className: "order-table-list", children: [_jsx(TableHeader, { typeHeader: IECMINI_HEADER }), _jsx(TableBody, { children: categoryListDataLoading?.loading ? (_jsx(TableRowsLoader, { rowsNum: 5, colsNum: 8 })) : (categoryListDataLoading?.data?.data?.map((row, i) => (_jsxs(TableRow, { children: [_jsx(TableCell, { style: { textAlign: 'center' }, children: i + 1 }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.work?.work_name }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.sub_work?.sub_work_cate_name }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_q_name }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_complete }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_q_work_type }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row?.iec_complete == 0 ? 'Not Completed' : 'Completed' }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_q_mobile }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_q_amount }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_q_expense }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_q_office_expense }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_q_discount }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_q_income }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_paid === 0 ? 'Not Paid' : 'Paid' }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.iec_online_payment_gothrough }), _jsx(TableCell, { align: "center", children: _jsxs(Stack, { direction: 'row', gap: 2, style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }, children: [_jsx(EditIcon, { sx: { color: 'blue' }, className: "table-icons", onClick: () => editDirectory(row.iec_q_id, row.iec_q_work_type) }), _jsx(DeleteIcon, { className: "table-icons", sx: { color: 'red' }, onClick: () => deleteDirectory(row.iec_q_id) })] }) })] })))) })] }) }), categoryListData?.data?.length === 0 ? (_jsx(Box, { sx: { my: 2 }, children: _jsx(Typography, { children: "No Data Found" }) })) : (_jsx(TablePagination, { totalRecords: categoryListData?.data?.total, handlePageChanges: handlePageChanges, page: page })), deleteModalOpen && (_jsx(DeleteModal, { open: deleteModalOpen, close: () => deleteDirectoryModalClose(), title: 'Delete Iec', content: 'Are you sure want to delete this iec?', submit: delteApiFn, loading: stateValues.deleteLoading })), open === true ? (_jsxs(Dialog, { fullWidth: true, maxWidth: 'sm', open: open, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, "aria-describedby": "alert-dialog-slide-description", children: [_jsx(DialogTitle, { children: _jsxs(Stack, { direction: 'row', alignItems: 'center', justifyContent: 'space-between', children: [_jsxs(Box, { children: [" ", singleData ? 'Edit Iec ' : 'Add Iec'] }), _jsx(IconButton, { onClick: handleClose, children: _jsx(CloseIcon, {}) })] }) }), _jsx(AddIecForm, { onClick: handleButtonClick, initialData: singleData, type: addType })] })) : null, online === true ? (_jsxs(Dialog, { fullWidth: true, maxWidth: 'sm', open: online, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, "aria-describedby": "alert-dialog-slide-description", children: [_jsx(DialogTitle, { children: _jsxs(Stack, { direction: 'row', alignItems: 'center', justifyContent: 'space-between', children: [_jsxs(Box, { children: [" ", singleData ? 'Edit Iec ' : 'Add Iec Online'] }), _jsx(IconButton, { onClick: handleClose, children: _jsx(CloseIcon, {}) })] }) }), _jsx(AddOnlineForm, { onClick: handleButtonClick, initialData: singleData, type: addType })] })) : null] }) }));
}
export default IecMini;
