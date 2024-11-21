import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { LoadingButton } from '@mui/lab';
import PasswordField from '../reusableFormFields/TextField/passwordField';
import { Controller, useForm } from 'react-hook-form';
import { Card, CardContent, Grid, } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAddress, customerPasswordChange, myProfileUpdate, } from '../../redux/api/public/profileService';
import { errorAlert, successAlert } from '../../helpers/globalFunctions';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { passwordForm } from '../../helpers/validate';
import { yupResolver } from '@hookform/resolvers/yup';
const IOSSwitch = styled((props) => (_jsx(Switch, { focusVisibleClassName: ".Mui-focusVisible", disableRipple: true, ...props })))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
export default function ChangePassword(props) {
    const [valueData, setValueData] = useState('1');
    const dispatch = useDispatch();
    const handleChange = (event, newValue) => {
        setValueData(newValue);
    };
    const initialvalue = useSelector((state) => state?.myProfile.myProfileView?.data);
    const { register, handleSubmit, control, setValue, getValues, reset, watch, formState: { errors, isSubmitting }, } = useForm({
        defaultValues: initialvalue,
        resolver: yupResolver(passwordForm),
        mode: 'onChange',
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleAddProduct = async (values) => {
        console.log(values);
        const { mobile, first_name, last_name } = values;
        const data = {
            mobile: mobile,
            first_name: first_name,
            last_name: last_name,
        };
        console.log(data);
        try {
            const res = await dispatch(myProfileUpdate(data)).unwrap();
            successAlert(res.message);
        }
        catch (error) {
            errorAlert(error.error);
        }
    };
    const handlePasswordChange = async (values) => {
        console.log(values);
        const { password, new_password, confirm_password } = values;
        const data1 = {
            password: password,
            new_password: new_password,
            confirm_password: confirm_password,
        };
        try {
            const res = await dispatch(customerPasswordChange(data1)).unwrap();
            successAlert(res.message);
            reset();
        }
        catch (error) {
            errorAlert(error.error);
        }
    };
    const handleCheck = (value) => {
        // Handle the switch change
        console.log(value);
        // setValue("is_default", e.target.checked);
    };
    const handleAddAddress = async (values) => {
        console.log(values);
        // const { street_name, city, address, state, line1, zipcode, country } =
        //   values;
        const data1 = {
            ...values,
            type: 1,
        };
        console.log(data1);
        try {
            const res = await dispatch(addCustomerAddress(data1)).unwrap();
            successAlert(res.message);
            // reset();
        }
        catch (error) {
            errorAlert(error.error);
        }
    };
    useEffect(() => {
        if (initialvalue) {
            reset(initialvalue);
        }
    }, [initialvalue]);
    return (
    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     bgcolor: "background.paper",
    //     display: "flex",
    //     height: 224,
    //     marginTop: 4,
    //   }}
    // >
    _jsxs(_Fragment, { children: [_jsx(Box, { sx: { fontSize: '20px', fontWeight: 600, mb: 3 }, children: "Change Password" }), _jsx(Box, { children: _jsx(Card, { children: _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit(handlePasswordChange), children: [_jsxs(Box, { children: [_jsx(Grid, { container: true, children: _jsx(Grid, { item: true, xs: 12, sx: { mb: 3 }, children: _jsx(PasswordField, { name: "password", control: control, Controller: Controller, error: errors?.password?.message, label: "Password", type: "password" }) }) }), _jsx(Grid, { container: true, children: _jsx(Grid, { item: true, xs: 12, pt: 2, sx: { mb: 3 }, children: _jsx(PasswordField, { name: "new_password", control: control, Controller: Controller, error: errors?.new_password?.message, label: "New Password", type: "password" }) }) }), _jsx(Grid, { container: true, children: _jsx(Grid, { item: true, xs: 12, pt: 2, sx: { mb: 3 }, children: _jsx(PasswordField, { name: "confirm_password", control: control, Controller: Controller, error: errors?.confirm_password?.message, label: "Confirm Password", type: "password" }) }) })] }), _jsx(Box, { className: "text-center-cls", sx: { pt: 4 }, children: _jsx(LoadingButton, { loadingPosition: "center", loading: isSubmitting, variant: "contained", type: "submit", className: "signup-button", style: { backgroundColor: 'white', color: '#951e76' }, children: "Change Password" }) })] }) }) }) })] })
    // </Box>
    );
}
