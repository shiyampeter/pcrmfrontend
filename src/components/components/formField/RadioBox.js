import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField, Checkbox, FormControlLabel } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
export default function RadioBox(props) {
    const { handleChange, control, errors, isSubmitting, handleSubmit, setRadioOption } = props;
    const [addTextField, setAddTextField] = useState(['radiogroup0']);
    const removeTextField = (index) => {
        setAddTextField((state) => {
            const newState = [...state];
            newState.splice(index, 1);
            return newState;
        });
    };
    const addNewTextField = (index) => {
        setAddTextField((state) => [...state, `radiogroup${index + 1}`]);
    };
    useEffect(() => {
        if (addTextField) {
            setRadioOption(addTextField);
        }
    }, [addTextField]);
    return (_jsx(_Fragment, { children: _jsxs("form", { onSubmit: handleSubmit(handleChange), children: [_jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(Controller, { name: 'radiobox', control: control, render: ({ field: { onChange, value } }) => (_jsx(TextField, { required: true, onChange: onChange, value: value, label: 'Radiobox Name', size: "medium", error: errors.email, helperText: errors.email?.message, fullWidth: true })) }) }), addTextField?.map((_, index) => (_jsxs(Grid, { container: true, item: true, xs: 12, children: [_jsx(Grid, { item: true, xs: 8, children: _jsx(Controller, { name: `radiogroup${index}`, control: control, render: ({ field: { onChange, value } }) => (_jsx(TextField, { required: true, onChange: onChange, value: value, label: `Radio Group Label ${index + 1}`, size: "medium", 
                                            // error={errors[`menuitem${index + 1}`]}
                                            // helperText={errors[`menuitem${index + 1}`]?.message}
                                            fullWidth: true })) }) }), _jsx(Grid, { item: true, xs: 2, container: true, style: { alignItems: 'center', paddingLeft: '10px' }, children: _jsx(AddBoxIcon, { onClick: () => {
                                            addNewTextField(index);
                                        } }) }), addTextField.length > 1 && (_jsx(Grid, { item: true, xs: 2, container: true, style: { alignItems: 'center' }, children: _jsx(DeleteIcon, { onClick: () => {
                                            removeTextField(index);
                                        } }) }))] }, index))), _jsx(Grid, { item: true, xs: 12, className: "forgotCtr", children: _jsx(Controller, { name: "requiredCheckbox", control: control, defaultValue: false, render: ({ field }) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { ...field }), label: "Required" })) }) })] }), _jsx(Box, { className: "text-center-cls", sx: { my: 1 }, children: _jsx(LoadingButton, { loadingPosition: "center", loading: isSubmitting, variant: "contained", type: "submit", className: "submitBtn", children: "Submit" }) })] }) }));
}
