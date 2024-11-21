import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, TableContainer, Table, TableBody, TableRow, TableCell, Stack, Button, Dialog, IconButton, Slide, } from '@mui/material';
import TopBreaccrumb from '@/components/components/TopBreadcrumb';
import SearchInput from '@/components/components/searchInput';
import TableRowsLoader from '@/components/components/TableLoader';
import { useDebounce } from 'use-debounce';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@/components/components/Pagination';
import DeleteModal from '@/components/components/deleteModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogTitle from '@mui/material/DialogTitle';
import AddSubCtegoryForm from './work-subcate/addSubCategoryform';
import TableHeader from './work-subcate/work-subcategory/tableHeader';
import { workSubCategoryDelete, workSubCategoryList, } from '@/redux/api/public/WorkSubCategoryService';
import { errorAlert, successAlert } from '@/helpers/global-function';
const Transition = React.forwardRef(function Transition(props, ref) {
    return _jsx(Slide, { direction: "up", ref: ref, ...props });
});
function WorkSubCategory() {
    const [open, setOpen] = React.useState(false);
    const [delid, setDelId] = useState(null);
    const [searchKey, setSearchKey] = useState('');
    const [searchValue] = useDebounce(searchKey, 1000);
    const [page, setPage] = useState(1);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [singleData, setSingleData] = useState(null);
    const [addType, setAddType] = useState(null);
    const dispatch = useDispatch();
    const subCategoryListData = useSelector((state) => state?.subWorkCategory?.workSubCategoryList);
    const [directoryPage, setDirectoryPage] = useState('admin');
    // const role = localStorage.getItem("roleName");
    const stateValues = useSelector((state) => {
        return {
            deleteLoading: state.subWorkCategory.workSubCategoryDelete.loading,
        };
    });
    // cancel search
    const cancelSearch = () => {
        setSearchKey('');
    };
    //on search
    const onSearch = (e) => {
        setSearchKey(e.target.value);
    };
    //list api
    const categoryListApi = async () => {
        try {
            const res = await dispatch(workSubCategoryList({ page, search: searchValue })).unwrap();
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
        console.log(id);
        setDeleteModalOpen(true);
    };
    console.log(singleData, 'single');
    const editDirectory = (row) => {
        console.log(row, 'roe)');
        setSingleData(row);
        setOpen(true);
        setAddType('edit');
    };
    const deleteDirectoryModalClose = () => {
        setDeleteModalOpen(false);
    };
    const delteApiFn = async () => {
        try {
            const response = await dispatch(workSubCategoryDelete(delid)).unwrap();
            setDeleteModalOpen(false);
            successAlert(response.message);
            categoryListApi();
        }
        catch (error) {
            errorAlert(error?.error);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleButtonClick = async () => {
        handleClose(); // Call handleClose to close the form
        await categoryListApi(); // Call handleAddDirectory to add directory data
    };
    const handleChange = (event) => {
        setDirectoryPage(event.target.value);
    };
    useEffect(() => {
        categoryListApi();
    }, [page, searchValue]);
    return (_jsx(Box, { sx: { overflowY: 'auto', maxHeight: '500px', mb: '40px' }, children: _jsxs(Box, { className: "indexBox", children: [_jsx(TopBreaccrumb, { title: 'Sub Work Categories', to: `/admin/dashboard` }), _jsx(Box, { sx: { my: 3 }, children: _jsxs(Stack, { direction: { lg: 'row', sm: 'column' }, 
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
                                }, value: searchKey || '', onChange: (e) => onSearch(e), cancelSearch: cancelSearch }), _jsx(Button, { className: "New-Button", onClick: handleClickOpen, children: "Add Work SubCategory" })] }) }), _jsx(TableContainer, { className: "rolesPageTable", children: _jsxs(Table, { size: "small", "aria-label": "a dense table", className: "order-table-list", children: [_jsx(TableHeader, {}), _jsx(TableBody, { children: subCategoryListData?.loading ? (_jsx(TableRowsLoader, { rowsNum: 14, colsNum: 8 })) : (subCategoryListData?.data?.data?.map((row, i) => (_jsxs(TableRow, { children: [console.log(row), _jsx(TableCell, { style: { textAlign: 'center' }, children: i + 1 }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_cate_name, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_cate_name, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_work_price?.amount, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_online_price?.amount, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_expense_price?.amount, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_discount_price?.value, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_incentive_price?.value, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_validity?.type, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_validity?.count, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_alert_days_type == 0
                                                    ? 'Before'
                                                    : row?.sub_work_alert_days_type == 1
                                                        ? 'After'
                                                        : '', ' '] }), ' ', _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.sub_work_alert_days, ' '] }), _jsxs(TableCell, { style: { textAlign: 'center' }, children: [row?.status_id, " "] }), _jsx(TableCell, { align: "center", children: _jsxs(Stack, { direction: 'row', gap: 2, style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }, children: [_jsx(EditIcon, { sx: { color: 'blue' }, className: "table-icons", onClick: () => editDirectory(row?.sub_work_id) }), _jsx(DeleteIcon, { className: "table-icons", sx: { color: 'red' }, onClick: () => deleteDirectory(row?.sub_work_id) })] }) })] })))) })] }) }), _jsx(TablePagination
                // totalRecords={categoryListData?.data?.data?.total}
                , { 
                    // totalRecords={categoryListData?.data?.data?.total}
                    handlePageChanges: handlePageChanges, page: page }), deleteModalOpen && (_jsx(DeleteModal, { open: deleteModalOpen, close: () => deleteDirectoryModalClose(), title: 'Delete Category', content: 'Are you sure want to delete this category?', submit: delteApiFn, loading: stateValues.deleteLoading })), open === true ? (_jsxs(Dialog, { fullWidth: true, maxWidth: 'sm', open: open, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, "aria-describedby": "alert-dialog-slide-description", sx: {
                        '& .MuiDialog-paper': {
                            width: '100%',
                            maxWidth: '1000px!important',
                        },
                    }, children: [_jsx(DialogTitle, { children: _jsxs(Stack, { direction: 'row', alignItems: 'center', justifyContent: 'space-between', children: [_jsxs(Box, { children: [" ", singleData ? 'Edit Work SubCategory' : 'Add Work SubCategory'] }), _jsx(IconButton, { onClick: handleClose, children: _jsx(CloseIcon, {}) })] }) }), _jsx(AddSubCtegoryForm, { onClick: handleButtonClick, initialData: singleData, type: addType })] })) : null] }) }));
}
export default WorkSubCategory;
