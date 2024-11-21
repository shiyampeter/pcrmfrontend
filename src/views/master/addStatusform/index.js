import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Stack } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextFormField from '@/components/components/reusableFormFields/TextField';
import { LoadingButton } from '@mui/lab';
import FormLoader from '@/components/components/formLoader';
import { errorAlert, successAlert } from '@/helpers/global-function';
import { workStatusAdd, workStatusEdit, workStatusView } from '@/redux/api/public/workStatusService';
const AddStatusForm = (props, disabled) => {
    const { onClick, initialData = null, type } = props;
    const dispatch = useDispatch();
    const initialvalue = useSelector((state) => state?.workStatus?.workStatusView?.data);
    console.log(initialvalue);
    const formLoading = useSelector((state) => state?.workStatus?.workStatusView?.loading);
    const { handleSubmit, control, reset, formState: { errors, isSubmitting }, } = useForm({
        defaultValues: type === 'add' ? {} : initialvalue,
        resolver: yupResolver(workStatusSchema),
        mode: 'onChange',
    });
    const handleAddCategory = async (values) => {
        console.log(values);
        try {
            const response = await dispatch(workStatusAdd(values)).unwrap();
            successAlert(response.message);
            onClick();
        }
        catch (error) {
            errorAlert(error.error);
        }
    };
    const handleEditCategory = async (values) => {
        try {
            const response = await dispatch(workStatusEdit(values)).unwrap();
            successAlert(response.message);
            onClick();
        }
        catch (error) {
            errorAlert(error.error);
        }
    };
    const viewCategoryList = async (id) => {
        try {
            await dispatch(workStatusView(id)).unwrap();
        }
        catch (error) {
            errorAlert(error.error);
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
    return (_jsx(Box, { sx: { mx: 2 }, children: formLoading ? (_jsx(FormLoader, {})) : (_jsxs("form", { onSubmit: type === 'add' ? handleSubmit(handleAddCategory) : handleSubmit(handleEditCategory), children: [_jsx(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "status", control: control, Controller: Controller, label: "Status Name", error: errors?.status?.message }) }) }), _jsx(Stack, { direction: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', gap: 5, sx: { p: 3 }, children: _jsx(LoadingButton, { loadingPosition: "center", loading: isSubmitting, variant: "contained", type: "submit", className: "submitBtnn", children: "Save" }) })] })) }));
};
export default AddStatusForm;
