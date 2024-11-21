import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import { TextField, Checkbox, Box, Typography, FormControlLabel } from '@mui/material';
function CheckboxTextField(props) {
    const { label, placeholder, control, name, checkboxLabel, error, variant = 'outlined', size = 'small', disabled, sx, } = props;
    console.log(name, 'name');
    return (_jsxs(Box, { display: "flex", flexDirection: "column", gap: 1, children: [_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(Controller, { name: `${name}.isFixed`, control: control, defaultValue: false, render: ({ field }) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { ...field, checked: field.value === 1, onChange: (e) => field.onChange(e.target.checked ? 1 : 0) }), label: checkboxLabel })) }), _jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px', marginRight: '8px' }, children: label })] }), _jsx(Controller, { name: `${name}.amount`, control: control, defaultValue: "", render: ({ field }) => (_jsx(TextField, { fullWidth: true, variant: variant, size: size, placeholder: placeholder, error: !!error, helperText: error ? error.message : '', ...field, disabled: disabled, sx: sx })) })] }));
}
export default CheckboxTextField;
