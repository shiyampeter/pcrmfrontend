import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
function SelectField({ label, Controller, control, name, error, data, disabled, onChangeCallback, }) {
    return (_jsx(_Fragment, { children: _jsx(Controller, { defaultValue: '', name: name, control: control, render: ({ field }) => (_jsxs(FormControl, { fullWidth: true, error: error, children: [_jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px' }, children: label }), _jsx(Select, { ...field, size: 'small', disabled: disabled, className: "new-textfield", onChange: (event) => {
                            console.log('Selected Value:', event.target.value);
                            field.onChange(event); // Update the form value in react-hook-form
                            if (onChangeCallback) {
                                onChangeCallback(event.target.value); // Call the custom callback
                            }
                        }, children: data?.map((options, i) => (_jsx(MenuItem, { value: options.value, className: "new-textfield-menu", children: options.label }, i))) }), _jsx(FormHelperText, { children: error })] })) }) }));
}
export default SelectField;
