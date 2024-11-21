import { jsx as _jsx } from "react/jsx-runtime";
// src/form-component/FormInputText.tsx
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
export const FormInputText = ({ name, control, label, error, disabled = false }) => {
    return (_jsx(Controller, { name: name, control: control, render: ({ 
        // field: { onChange, value },
        // fieldState: { error },
        // formState,
        field, }) => (_jsx(TextField, { ...field, inputRef: field.ref, helperText: error, size: "small", placeholder: label, error: error, disabled: disabled, 
            // onChange={onChange}
            // value={value}
            fullWidth: true, label: label, variant: "outlined", InputLabelProps: {
                shrink: true,
            } })) }));
};
