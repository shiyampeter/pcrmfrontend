import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Controller, useWatch } from 'react-hook-form';
import { TextField, Box, Typography, Select, MenuItem, FormHelperText, FormControl, } from '@mui/material';
function SelectTextField(props) {
    const { label, selectLabel, control, name, error, selectOptions = [], // Array of options passed from parent
    variant = 'outlined', size = 'small', disabled, sx, textLabel, } = props;
    // const [selectedType, setSelectedType] = useState('') // State to track selected dropdown value
    const selectedType = useWatch({
        control,
        name: `${name}.type`, // Watching the isFixed field
        defaultValue: false,
    });
    return (_jsxs(Box, { display: "flex", flexDirection: "column", children: [_jsx(Controller, { defaultValue: '', name: `${name}.type`, control: control, render: ({ field }) => (_jsxs(FormControl, { fullWidth: true, error: error, children: [_jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px' }, children: label }), _jsx(Select, { ...field, size: 'small', className: "new-textfield", disabled: disabled, children: selectOptions?.map((options, i) => (_jsx(MenuItem, { value: options.value, className: "new-textfield-menu", children: options.label }, i))) }), _jsx(FormHelperText, { children: error })] })) }), selectedType && (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px', marginBottom: '' }, children: textLabel }), _jsx(Controller, { name: `${name}.count`, control: control, defaultValue: "", render: ({ field }) => (_jsx(TextField, { fullWidth: true, variant: variant, size: size, placeholder: "Enter value", error: !!error, helperText: error ? error.message : '', ...field, 
                            // disabled={disabled}
                            sx: sx })) })] }))] }));
}
export default SelectTextField;
