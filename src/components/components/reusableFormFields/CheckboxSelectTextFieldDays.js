import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { TextField, Checkbox, Box, Typography, FormControlLabel, Select, MenuItem, } from '@mui/material';
function CheckboxSelectTextFieldDays(props) {
    const { label, selectLabel, control, name, error, variant = 'outlined', size = 'small', disabled, sx, } = props;
    // State to track selected type (Percentage or Amount)
    const [selectedType, setSelectedType] = useState('');
    return (_jsxs(Box, { display: "flex", flexDirection: "column", gap: 1, children: [_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(Controller, { name: `${name}.isFixed`, control: control, defaultValue: false, render: ({ field }) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { ...field, checked: field.value }) })) }), _jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px', marginRight: '8px' }, children: label })] }), _jsx(Controller, { name: `${name}.type`, control: control, defaultValue: "", render: ({ field }) => (_jsxs(Select, { fullWidth: true, variant: variant, size: size, displayEmpty: true, ...field, value: selectedType, onChange: (e) => {
                        field.onChange(e); // update react-hook-form
                        setSelectedType(e.target.value); // update local state
                    }, disabled: disabled, sx: { mb: 1, ...sx }, children: [_jsx(MenuItem, { value: "", disabled: true, children: selectLabel }), _jsx(MenuItem, { value: "day", children: "Days" }), _jsx(MenuItem, { value: "week", children: "Weeks" }), _jsx(MenuItem, { value: "month", children: "Months" }), _jsx(MenuItem, { value: "year", children: "Years" })] })) }), selectedType && (_jsx(Controller, { name: `${name}.value`, control: control, defaultValue: "", render: ({ field }) => (_jsx(TextField, { fullWidth: true, variant: variant, size: size, placeholder: "Enter value", error: !!error, helperText: error ? error.message : '', ...field, disabled: disabled, sx: sx })) }))] }));
}
export default CheckboxSelectTextFieldDays;
