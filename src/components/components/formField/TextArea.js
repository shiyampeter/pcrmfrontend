import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField, Checkbox, FormControlLabel } from '@mui/material';
export default function TextArea(props) {
    const { handleChange, control, errors, isSubmitting, handleSubmit } = props;
    return (_jsx(_Fragment, { children: _jsxs("form", { onSubmit: handleSubmit(handleChange), children: [_jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(Controller, { name: 'textarea', control: control, render: ({ field: { onChange, value } }) => (_jsx(TextField, { required: true, onChange: onChange, value: value, label: 'TextArea Name', size: "medium", error: errors.email, helperText: errors.email?.message, fullWidth: true })) }) }), _jsx(Grid, { item: true, xs: 12, className: "forgotCtr", children: _jsx(Controller, { name: "checkbox", control: control, defaultValue: false, render: ({ field }) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { ...field }), label: "Required" })) }) })] }), _jsx(Box, { className: "text-center-cls", sx: { my: 1 }, children: _jsx(LoadingButton, { loadingPosition: "center", loading: isSubmitting, variant: "contained", type: "submit", className: "submitBtn", children: "Submit" }) })] }) }));
}
