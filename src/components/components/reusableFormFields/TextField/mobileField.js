import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';
function MobileField(props) {
    const { label, placeholder, Controller, control, name, error, type, size, variant, disabled, InputProps, sx, } = props;
    return (_jsx(_Fragment, { children: _jsx(Controller, { defaultValue: '', name: name, control: control, render: ({ field }) => (_jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px' }, children: label }), _jsx(TextField, { fullWidth: true, variant: variant && variant, size: size ? size : 'small', placeholder: placeholder, error: error, type: type, helperText: error, ...field, disabled: disabled, InputProps: InputProps, sx: sx, className: "new-textfield" })] })) }) }));
}
export default MobileField;
