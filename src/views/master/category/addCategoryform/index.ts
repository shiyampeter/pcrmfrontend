import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import SelectField from '@/components/components/reusableFormFields/selectField';
import TextFormField from '@/components/components/reusableFormFields/TextField';
import { LoadingButton } from '@mui/lab';
import FormLoader from '@/components/components/formLoader';
import { errorAlert, successAlert } from '@/helpers/global-function';
import { workCategorySchema } from '@/helpers/ValidationSchema';
import { workCategoryAdd, workCategoryEdit, workCategoryView, } from '@/redux/api/public/workCategoryService';
import toast from 'react-hot-toast';
const AddCategoryForm = (props, disabled) => {
    const { onClick, initialData = null, type } = props;
    const dispatch = useDispatch();
    const initialvalue = useSelector((state) => state?.workCategory?.workCategoryView?.data);
    console.log(initialvalue);
    const formLoading = useSelector((state) => state?.workCategory?.workCategoryView?.loading);
    const { handleSubmit, control, reset, formState: { errors, isSubmitting }, } = useForm({
        defaultValues: type === 'add' ? {} : initialvalue,
        resolver: yupResolver(workCategorySchema),
        mode: 'onChange',
    });
    const handleAddCategory = async (values) => {
        console.log(values);
        try {
            const response = await dispatch(workCategoryAdd(values)).unwrap();
            successAlert(response.message);
            onClick();
        }
        catch (error) {
            errorAlert(error.error);
        }
    };
    const handleEditCategory = async (values) => {
        try {
            const response = await dispatch(workCategoryEdit(values)).unwrap();
            successAlert(response.message);
            onClick();
        }
        catch (error) {
            errorAlert(error.error);
        }
    };
    // view product
    const viewCategoryList = async (id) => {
        try {
            await dispatch(workCategoryView(id)).unwrap();
        }
        catch (errors) {
            toast.error(errors?.message);
        }
    };
    useEffect(() => {
        if (type === 'edit') {
            viewCategoryList(initialData);
        }
    }, [type]);
    useEffect(() => {
        if (type !== 'add') {
            if (initialvalue) {
                reset(initialvalue);
            }
            else {
                reset();
            }
        }
        else {
            reset();
        }
    }, [initialvalue]);
    return (_jsx(Box, { sx: { mx: 2 }, children: formLoading ? (_jsx(FormLoader, {})) : (_jsxs("form", { onSubmit: type === 'add' ? handleSubmit(handleAddCategory) : handleSubmit(handleEditCategory), children: [_jsxs(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: [_jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "work_name", control: control, Controller: Controller, label: "Work Name", error: errors?.work_name?.message }) }), _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(SelectField, { name: "work_type", control: control, label: "Work Type", Controller: Controller, data: [
                                    { value: 0, label: 'mini' },
                                    { value: 1, label: 'online' },
                                ], error: errors?.work_type?.message }) })] }), _jsxs(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: [_jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "work_tracking_no", control: control, Controller: Controller, label: "Tracking No", error: errors?.work_tracking_no?.message }) }), _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "work_tracking_website", control: control, Controller: Controller, label: "Tracking Site", error: errors?.work_tracking_website?.message }) })] }), _jsx(Grid, { container: true, spacing: 2, sx: { mb: 2 }, children: _jsxs(Grid, { item: true, xs: 12, md: 12, className: "address-employee", children: [_jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px' }, children: "Work Completed" }), _jsx(Controller, { name: "work_completed", control: control, defaultValue: false, render: ({ field }) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { ...field, checked: field.value }), label: "Work Completed", sx: { fontSize: '13px' } })) })] }) }), _jsx(Stack, { direction: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', gap: 5, sx: { p: 3 }, children: _jsx(LoadingButton, { loadingPosition: "center", loading: isSubmitting, variant: "contained", type: "submit", className: "submitBtnn", children: "Save" }) })] })) }));
};
export default AddCategoryForm;
