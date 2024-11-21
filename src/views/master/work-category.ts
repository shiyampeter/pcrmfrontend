import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, TableContainer, Table, TableBody, TableRow, TableCell, Stack, Button, Dialog, IconButton, Typography, Slide, } from '@mui/material';
import TopBreaccrumb from '@/components/components/TopBreadcrumb';
import SearchInput from '@/components/components/searchInput';
import TableHeader from './category/work-category/tableHeader';
import TableRowsLoader from '@/components/components/TableLoader';
import { useDebounce } from 'use-debounce';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import TablePagination from '@/components/components/Pagination';
import DeleteModal from '@/components/components/deleteModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCategoryForm from './category/addCategoryform';
import DialogTitle from '@mui/material/DialogTitle';
import { workCategoryDelete, workCategoryList } from '@/redux/api/public/workCategoryService';
import Switch from '@mui/material/Switch';
import { useSelector } from 'react-redux';
import { errorAlert, successAlert } from '@/helpers/global-function';
const Transition = React.forwardRef(function Transition(props, ref) {
    return _jsx(Slide, { direction: "up", ref: ref, ...props });
});
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function WorkCategory() {
    const [open, setOpen] = React.useState(false);
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
            deleteLoading: state.workCategory.workCategoryDelete.loading,
        };
    });
    const categoryListDataLoading = useSelector((state) => state.workCategory.workCategoryList);
    // cancel search
    const cancelSearch = () => {
        setSearchKey('');
    };
    console.log(delid);
    //on search
    const onSearch = (e) => {
        setSearchKey(e.target.value);
    };
    //list api
    const categoryListApi = async () => {
        try {
            const res = await dispatch(workCategoryList({ page, search: searchValue })).unwrap();
            console.log(res);
            setCategoryListData(res);
        }
        catch (errors) {
            errorAlert(errors?.error);
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
    const deleteDirectory = (id) => {
        setDelId(id);
        setDeleteModalOpen(true);
    };
    const editDirectory = (id) => {
        setSingleData(id);
        setOpen(true);
        setAddType('edit');
    };
    const deleteDirectoryModalClose = () => {
        setDeleteModalOpen(false);
    };
    const delteApiFn = async () => {
        try {
            const response = await dispatch(workCategoryDelete(delid)).unwrap();
            successAlert(response.message);
            setDeleteModalOpen(false);
            categoryListApi();
        }
        catch (errors) {
            errorAlert(errors?.message);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleButtonClick = async () => {
        handleClose(); // Call handleClose to close the form
        await categoryListApi(); // Call handleAddDirectory to add directory data
    };
    useEffect(() => {
        categoryListApi();
    }, [page, searchValue]);
    return (_jsx(Box, { sx: { overflowY: 'auto', maxHeight: '500px', mb: '40px' }, children: _jsxs(Box, { className: "indexBox", children: [_jsx(TopBreaccrumb, { title: 'Work Categories', to: `/admin/dashboard` }), _jsx(Box, { sx: { my: 3 }, children: _jsxs(Stack, { direction: { lg: 'row', sm: 'column' }, 
                        // gap={2}
                        // alignItems={"center"}
                        justifyContent: 'space-between', children: [_jsx(SearchInput, { sx: {
                                    border: '1px solid #303067',
                                    borderRadius: '20px',
                                    height: '32.69px',
                                    '&.Mui-focused ': {
                                        border: '1px solid #6473ff',
                                    },
                                    width: { xs: '100%', sm: '340px' },
                                }, value: searchKey || '', onChange: (e) => onSearch(e), cancelSearch: cancelSearch }), _jsx(Button, { className: "New-Button", onClick: handleClickOpen, children: "Add Work Category" })] }) }), _jsx(TableContainer, { className: "rolesPageTable", children: _jsxs(Table, { size: "small", "aria-label": "a dense table", className: "order-table-list", children: [_jsx(TableHeader, {}), _jsx(TableBody, { children: categoryListDataLoading?.loading ? (_jsx(TableRowsLoader, { rowsNum: 5, colsNum: 8 })) : (categoryListDataLoading?.data?.data?.map((row, i) => (_jsxs(TableRow, { children: [_jsx(TableCell, { style: { textAlign: 'center' }, children: i + 1 }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.work_name }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.work_type == 0 ? 'Mini' : 'Online' }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.work_tracking_no }), _jsx(TableCell, { style: { textAlign: 'center' }, children: row.work_tracking_website }), _jsx(TableCell, { style: { textAlign: 'center' }, children: _jsx(Switch, { checked: row.work_completed, onChange: () => handleSwitchChange(row.id), ...label }) }), _jsx(TableCell, { align: "center", children: _jsxs(Stack, { direction: 'row', gap: 2, style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }, children: [_jsx(EditIcon, { sx: { color: 'blue' }, className: "table-icons", onClick: () => editDirectory(row.work_id) }), _jsx(DeleteIcon, { className: "table-icons", sx: { color: 'red' }, onClick: () => deleteDirectory(row.work_id) })] }) })] })))) })] }) }), categoryListData?.data?.length === 0 ? (_jsx(Box, { sx: { my: 2 }, children: _jsx(Typography, { children: "No Data Found" }) })) : (_jsx(TablePagination, { totalRecords: categoryListData?.data?.total, handlePageChanges: handlePageChanges, page: page })), deleteModalOpen && (_jsx(DeleteModal, { open: deleteModalOpen, close: () => deleteDirectoryModalClose(), title: 'Delete Work Category', content: 'Are you sure want to delete this category?', submit: delteApiFn, loading: stateValues.deleteLoading })), open === true ? (_jsxs(Dialog, { fullWidth: true, maxWidth: 'sm', open: open, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, "aria-describedby": "alert-dialog-slide-description", children: [_jsx(DialogTitle, { children: _jsxs(Stack, { direction: 'row', alignItems: 'center', justifyContent: 'space-between', children: [_jsxs(Box, { children: [" ", singleData ? 'Edit Work Category' : 'Add Work Category'] }), _jsx(IconButton, { onClick: handleClose, children: _jsx(CloseIcon, {}) })] }) }), _jsx(AddCategoryForm, { onClick: handleButtonClick, initialData: singleData, type: addType })] })) : null] }) }));
}
export default WorkCategory;