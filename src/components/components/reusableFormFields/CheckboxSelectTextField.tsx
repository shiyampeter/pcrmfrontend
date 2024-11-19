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

import React, { useState } from 'react'
import { Controller, useWatch } from 'react-hook-form'
import {
  TextField,
  Checkbox,
  Box,
  Typography,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from '@mui/material'

function CheckboxSelectTextField(props) {
  const {
    label,
    selectLabel,
    control,
    name,
    error,
    selectOptions,
    variant = 'outlined',
    size = 'small',
    disabled,
    sx,
    textLabel,
  } = props

  const [selectedType, setSelectedType] = useState('')
  const [isFixed, setIsFixed] = useState(false)
  console.log(selectOptions, 'selected')

  // // Watch the value of the checkbox
  const selectData = useWatch({
    control,
    name: `${name}.type`, // Watching the isFixed field
    defaultValue: false,
  })
  console.log(name, 'name')

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {/* Label and Checkbox in a row */}
      <Box display="flex" alignItems="center">
        {/* <Controller
          name={'is_fixed'}
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              control={ */}
        {/* <Checkbox
          {...field}
          checked={field.value === 1}
          onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
          checked={isFixed}
          onChange={(e) => setIsFixed(e.target.checked)}
        /> */}
        {/* }
            />
          )}
        /> */}
        {/* <Typography variant="subtitle1" sx={{ fontSize: '13px', marginRight: '8px' }}>
          {label}
        </Typography> */}
      </Box>

      {/* Dynamic Select Field based on options from parent */}
      {/* <Controller
        name={`${name}.type`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            fullWidth
            variant={variant}
            size={size}
            displayEmpty
            {...field}
            value={selectedType}
            onChange={(e) => {
              field.onChange(e)
              setSelectedType(e.target.value)
            }}
            // disabled={!isFixed}
            sx={{ mb: 1, ...sx }}>
            <MenuItem value="" disabled>
              {selectLabel}
            </MenuItem>
            {selectOptions?.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        )}
      /> */}
      <Controller
        defaultValue={''}
        name={`${name}.type`}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth error={error}>
            <Typography variant="subtitle1" sx={{ fontSize: '13px' }}>
              {label}
            </Typography>
            <Select {...field} size={'small'} disabled={disabled} className="new-textfield">
              {selectOptions?.map((options, i) => (
                <MenuItem value={options.value} key={i} className="new-textfield-menu">
                  {options.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
        )}
      />

      {/* Conditionally Render Text Field */}
      {selectData && (
        <>
          {' '}
          <Typography variant="subtitle1" sx={{ fontSize: '13px', marginRight: '8px' }}>
            {textLabel}
          </Typography>
          <Controller
            name={`${name}.value`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                variant={variant}
                size={size}
                placeholder="Enter value"
                error={!!error}
                helperText={error ? error.message : ''}
                {...field}
                disabled={disabled}
                sx={sx}
              />
            )}
          />
        </>
      )}
    </Box>
  )
}

export default CheckboxSelectTextField
