import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
function PasswordField(props) {
    const { label, placeholder, Controller, control, name, error, size, variant } = props;
    const [showPassword, setShowPassword] = useState(false);
    // visibility
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (_jsx(_Fragment, { children: _jsx(Controller, { defaultValue: '', name: name, control: control, render: ({ field }) => (_jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px' }, children: label }), _jsx(TextField, { fullWidth: true, variant: variant && variant, size: size ? size : 'small', 
                        // sx={{ backgroundColor: "white", width: "100%" }}
                        type: showPassword ? 'text' : 'password', helperText: error, error: error, ...field, placeholder: placeholder, InputProps: {
                            endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { onClick: handleTogglePasswordVisibility, children: showPassword ? _jsx(Visibility, {}) : _jsx(VisibilityOff, {}) }) })),
                        }, className: "new-textfield" })] })) }) }));
}
export default PasswordField;
