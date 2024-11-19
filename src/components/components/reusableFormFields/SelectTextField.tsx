import React, { useState } from 'react'
import { Controller, useWatch } from 'react-hook-form'
import {
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
} from '@mui/material'

function SelectTextField(props) {
  const {
    label,
    selectLabel,
    control,
    name,
    error,
    selectOptions = [], // Array of options passed from parent
    variant = 'outlined',
    size = 'small',
    disabled,
    sx,
    textLabel,
  } = props

  // const [selectedType, setSelectedType] = useState('') // State to track selected dropdown value
  const selectedType = useWatch({
    control,
    name: `${name}.type`, // Watching the isFixed field
    defaultValue: false,
  })

  return (
    <Box display="flex" flexDirection="column">
      {/* Label for Select Field
      <Typography variant="subtitle1" sx={{ fontSize: '13px', marginBottom: '8px' }}>
        {label}
      </Typography> */}

      {/* Dynamic Select Field */}
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
              setSelectedType(e.target.value) // Update local state to conditionally render TextField
            }}
            disabled={disabled}
            sx={{ mb: 1, ...sx }}>
            <MenuItem value="" disabled>
              {selectLabel}
            </MenuItem>
            {selectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
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
            <Select {...field} size={'small'} className="new-textfield" disabled={disabled}>
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
      {selectedType && (
        <>
          <Typography variant="subtitle1" sx={{ fontSize: '13px', marginBottom: '' }}>
            {textLabel}
          </Typography>
          <Controller
            name={`${name}.count`}
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
                // disabled={disabled}
                sx={sx}
              />
            )}
          />
        </>
      )}
    </Box>
  )
}

export default SelectTextField
