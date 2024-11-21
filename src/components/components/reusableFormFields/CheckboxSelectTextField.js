import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import React, { useState } from 'react'
// import { Controller } from 'react-hook-form'
// import {
//   TextField,
//   Checkbox,
//   Box,
//   Typography,
//   FormControlLabel,
//   Select,
//   MenuItem,
// } from '@mui/material'
// function CheckboxSelectTextField(props) {
//   const {
//     label,
//     selectLabel,
//     control,
//     name,
//     error,
//     variant = 'outlined',
//     size = 'small',
//     disabled,
//     sx,
//   } = props
//   // State to track selected type (Percentage or Amount)
//   const [selectedType, setSelectedType] = useState('')
//   return (
//     <Box display="flex" flexDirection="column" gap={1}>
//       {/* Label and Checkbox in a row */}
//       <Box display="flex" alignItems="center">
//         <Controller
//           name={`${name}.isFixed`}
//           control={control}
//           defaultValue={false}
//           render={({ field }) => (
//             <FormControlLabel control={<Checkbox {...field} checked={field.value} />} />
//           )}
//         />
//         <Typography variant="subtitle1" sx={{ fontSize: '13px', marginRight: '8px' }}>
//           {label}
//         </Typography>
//       </Box>
//       {/* Select Field for Type (Percentage / Amount) */}
//       <Controller
//         name={`${name}.type`}
//         control={control}
//         defaultValue=""
//         render={({ field }) => (
//           <Select
//             fullWidth
//             variant={variant}
//             size={size}
//             displayEmpty
//             {...field}
//             value={selectedType} // bind to state for conditional rendering
//             onChange={(e) => {
//               field.onChange(e) // update react-hook-form
//               setSelectedType(e.target.value) // update local state
//             }}
//             disabled={disabled}
//             sx={{ mb: 1, ...sx }}>
//             <MenuItem value="" disabled>
//               {selectLabel}
//             </MenuItem>
//             <MenuItem value="Percentage">Percentage</MenuItem>
//             <MenuItem value="Amount">Amount</MenuItem>
//           </Select>
//         )}
//       />
//       {/* Conditionally Render Text Field */}
//       {selectedType && (
//         <Controller
//           name={`${name}.value`}
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <TextField
//               fullWidth
//               variant={variant}
//               size={size}
//               placeholder="Enter value"
//               error={!!error}
//               helperText={error ? error.message : ''}
//               {...field}
//               disabled={disabled}
//               sx={sx}
//             />
//           )}
//         />
//       )}
//     </Box>
//   )
// }
// export default CheckboxSelectTextField
import { useState } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { TextField, Box, Typography, Select, MenuItem, FormControl, FormHelperText, } from '@mui/material';
function CheckboxSelectTextField(props) {
    const { label, selectLabel, control, name, error, selectOptions, variant = 'outlined', size = 'small', disabled, sx, textLabel, } = props;
    const [selectedType, setSelectedType] = useState('');
    const [isFixed, setIsFixed] = useState(false);
    console.log(selectOptions, 'selected');
    // // Watch the value of the checkbox
    const selectData = useWatch({
        control,
        name: `${name}.type`, // Watching the isFixed field
        defaultValue: false,
    });
    console.log(name, 'name');
    return (_jsxs(Box, { display: "flex", flexDirection: "column", gap: 1, children: [_jsx(Box, { display: "flex", alignItems: "center" }), _jsx(Controller, { defaultValue: '', name: `${name}.type`, control: control, render: ({ field }) => (_jsxs(FormControl, { fullWidth: true, error: error, children: [_jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px' }, children: label }), _jsx(Select, { ...field, size: 'small', disabled: disabled, className: "new-textfield", children: selectOptions?.map((options, i) => (_jsx(MenuItem, { value: options.value, className: "new-textfield-menu", children: options.label }, i))) }), _jsx(FormHelperText, { children: error })] })) }), selectData && (_jsxs(_Fragment, { children: [' ', _jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px', marginRight: '8px' }, children: textLabel }), _jsx(Controller, { name: `${name}.value`, control: control, defaultValue: "", render: ({ field }) => (_jsx(TextField, { fullWidth: true, variant: variant, size: size, placeholder: "Enter value", error: !!error, helperText: error ? error.message : '', ...field, disabled: disabled, sx: sx })) })] }))] }));
}
export default CheckboxSelectTextField;
