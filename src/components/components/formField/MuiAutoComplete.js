import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Autocomplete, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
const MuiAutoComplete = ({ name = '', label = '', control, options, handleChange = () => { }, readOnly = false, }) => {
    return (_jsx(Controller, { control: control, name: name, render: ({ field: { ref, value, onChange, ...field } }) => {
            return (_jsxs(_Fragment, { children: [_jsx(Typography, { sx: { fontWeight: 500, fontSize: '14px' }, children: label }), _jsx(Autocomplete, { onChange: (_, datas) => {
                            if (datas) {
                                const value = datas['value'];
                                onChange(datas);
                                handleChange(value);
                            }
                            else {
                                onChange(undefined);
                            }
                        }, readOnly: readOnly, limitTags: 2, getOptionLabel: (options) => options.label, options: options, value: value, defaultValue: value, size: "small", renderInput: (params) => (_jsx(TextField, { size: "small", inputRef: ref, ...field, ...params })) })] }));
        } }));
};
export default MuiAutoComplete;
