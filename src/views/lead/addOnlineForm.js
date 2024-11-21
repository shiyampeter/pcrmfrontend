import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextFormField from '@/components/components/reusableFormFields/TextField';
import { LoadingButton } from '@mui/lab';
import FormLoader from '@/components/components/formLoader';
import SelectField from '@/components/components/reusableFormFields/selectField';
import { errorAlert, successAlert } from '@/helpers/global-function';
import { essentials } from '@/redux/api/public/commonService';
import { iecMiniAddOnline, iecMiniEditOnline, iecMiniView } from '@/redux/api/public/iecMiniService';
const AddOnlineForm = (props, disabled) => {
    const { onClick, initialData = null, type } = props;
    const dispatch = useDispatch();
    const initialvalue = useSelector((state) => state?.iecMini?.iecMiniView?.data);
    const formLoading = useSelector((state) => state?.iecMini?.iecMiniView?.loading);
    const [subList, setSubList] = useState([]);
    const [discountPercentage, setDiscountPercentage] = useState(false);
    const [list, setList] = useState([]);
    const { handleSubmit, control, reset, watch, setValue, formState: { errors, isSubmitting }, } = useForm({
        defaultValues: type === 'add' ? {} : initialvalue,
        // resolver: yupResolver(workStatusSchema),
        mode: 'onChange',
    });
    const handleAddCategory = async (values) => {
        console.log(values);
        try {
            const response = await dispatch(iecMiniAddOnline(values)).unwrap();
            successAlert(response.message);
            onClick();
        }
        catch (error) {
            errorAlert(error.message);
        }
    };
    const handleEditCategory = async (values) => {
        try {
            const response = await dispatch(iecMiniEditOnline(values)).unwrap();
            successAlert(response.message);
            onClick();
        }
        catch (error) {
            errorAlert(error.message);
        }
    };
    const viewCategoryList = async (id) => {
        try {
            await dispatch(iecMiniView(id)).unwrap();
        }
        catch (error) {
            errorAlert(error.message);
        }
    };
    const essentialApi = async () => {
        try {
            const res = await dispatch(essentials({ type: 'workCategory' })).unwrap();
            setList(res);
        }
        catch (error) {
            errorAlert(error?.message);
        }
    };
    const essentialApiSub = async (id) => {
        try {
            const res = await dispatch(essentials({ type: 'workSubCategory', work_id: id })).unwrap();
            setSubList(res);
        }
        catch (error) {
            errorAlert(error?.message);
        }
    };
    useEffect(() => {
        if (type === 'edit') {
            viewCategoryList(initialData);
            essentialApiSub(initialvalue?.iec_q_work);
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
    useEffect(() => {
        essentialApi();
        console.log('test');
    }, []);
    // Watch the values of amount and expense
    const amount = watch('iec_q_amount');
    const expense = watch('iec_q_expense');
    const discount = watch('iec_q_discount');
    const officeExpense = watch('iec_q_office_expense');
    const discountAmount = watch('iec_q_discount_amount');
    // Calculate income whenever amount or expense changes
    useEffect(() => {
        const calculatedIncome = (parseFloat(amount) || 0) -
            ((parseFloat(expense) || 0) +
                (parseFloat(discountAmount) || 0) +
                (parseFloat(officeExpense) || 0));
        setValue('iec_q_income', calculatedIncome); // Update the income field
    }, [amount, expense, officeExpense, discountAmount]);
    useEffect(() => {
        if (discount) {
            const calculatedDiscount = ((parseFloat(amount) || 0) * (parseFloat(discount) || 0)) / 100;
            setValue('iec_q_discount_amount', calculatedDiscount);
        }
    }, [amount, discount]);
    // useEffect(() => {
    //   const calculatedDiscount = ((parseFloat(amount) || 0) * (parseFloat(discount) || 0)) / 100
    //   setValue('iec_q_discount_amount', calculatedDiscount)
    // }, [discount])
    return (_jsx(Box, { sx: { mx: 2 }, children: formLoading ? (_jsx(FormLoader, {})) : (_jsxs("form", { onSubmit: type === 'add' ? handleSubmit(handleAddCategory) : handleSubmit(handleEditCategory), children: [_jsxs(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: [_jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(SelectField, { name: "iec_q_work", control: control, label: "Select Work Category", Controller: Controller, data: list, error: errors?.work_namework_name?.message, disabled: false, onChangeCallback: (selectedValue) => {
                                    // const selectedValue = event?.target?.value
                                    setValue('iec_q_work', selectedValue); // Get the selected category ID
                                    console.log('Selected Category ID:', selectedValue);
                                    essentialApiSub(selectedValue); // Call the API to fetch subcategories
                                } }) }), _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(SelectField, { name: "iec_q_sub_work", control: control, label: "Select Sub Category", Controller: Controller, data: subList, error: errors?.sub_work_cate_namev?.message, onChangeCallback: (selectedValue) => {
                                    const selectedSubCategory = subList?.find((list) => list.value === selectedValue);
                                    const amount = selectedSubCategory
                                        ? selectedSubCategory?.sub_work_work_price?.amount
                                        : null;
                                    const expense = selectedSubCategory
                                        ? selectedSubCategory?.sub_work_expense_price?.amount
                                        : null;
                                    const discount = selectedSubCategory
                                        ? selectedSubCategory?.sub_work_discount_price?.type == 'percentage'
                                            ? setValue('iec_q_discount', selectedSubCategory?.sub_work_discount_price?.value)
                                            : setValue('iec_q_discount_amount', selectedSubCategory?.sub_work_discount_price?.value)
                                        : null;
                                    selectedSubCategory
                                        ? selectedSubCategory?.sub_work_discount_price?.type == 'percentage'
                                            ? setDiscountPercentage(true)
                                            : setDiscountPercentage(false)
                                        : setDiscountPercentage(false);
                                    setValue('iec_q_amount', amount);
                                    setValue('iec_q_expense', expense);
                                }, defaultValue: 'iec_q_sub_work', disabled: false }) })] }), _jsxs(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: [_jsxs(Grid, { item: true, xs: 6, direction: 'column', children: [_jsx(SelectField, { name: "iec_complete", control: control, label: "Completed Status", Controller: Controller, data: [
                                        { value: 0, label: 'Not Completed' },
                                        { value: 1, label: 'Completed' },
                                    ], error: errors?.iec_complete?.message, disabled: false, defaultValue: 0 }), ' '] }), _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "iec_q_name", control: control, Controller: Controller, label: "Name", error: errors?.iec_q_name?.message }) })] }), _jsxs(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: [_jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "iec_q_mobile", control: control, Controller: Controller, label: "Mobile", error: errors?.iec_q_mobile?.message }) }), _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "iec_q_amount", control: control, Controller: Controller, label: "Amount", error: errors?.iec_q_amount?.message }) })] }), _jsxs(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: [_jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "iec_q_expense", control: control, Controller: Controller, label: "Expense", error: errors?.iec_q_expense?.message }) }), discountPercentage && (_jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "iec_q_discount", control: control, Controller: Controller, label: "Discount Percentage", error: errors?.iec_q_discount?.message }) })), _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "iec_q_discount_amount", control: control, Controller: Controller, disabled: discountPercentage, label: "Discount Amount", error: errors?.iec_q_discount?.message }) })] }), _jsxs(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: [_jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "iec_q_office_expense", control: control, Controller: Controller, label: "Office Expense", error: errors?.iec_q_income?.message }) }), _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(TextFormField, { name: "iec_q_income", control: control, Controller: Controller, label: "Profit", error: errors?.iec_q_income?.message }) })] }), _jsxs(Grid, { container: true, spacing: 5, sx: { mb: 2 }, children: [_jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(SelectField, { name: "iec_online_payment_gothrough", control: control, label: "Online Payment Gothrough", Controller: Controller, data: [
                                    { value: 'office', label: 'Office' },
                                    { value: 'customer', label: 'Customer' },
                                ], error: errors?.iec_paid?.message, disabled: false, defaultValue: 0 }) }), _jsx(Grid, { item: true, xs: 6, direction: 'column', children: _jsx(SelectField, { name: "iec_paid", control: control, label: "Payment status", Controller: Controller, data: [
                                    { value: 0, label: 'Not Paid' },
                                    { value: 1, label: 'Paid' },
                                ], error: errors?.iec_paid?.message, disabled: false, defaultValue: 0 }) })] }), _jsx(Stack, { direction: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', gap: 5, sx: { p: 3 }, children: _jsx(LoadingButton, { loadingPosition: "center", loading: isSubmitting, variant: "contained", type: "submit", className: "submitBtnn", children: "Save" }) })] })) }));
};
export default AddOnlineForm;
