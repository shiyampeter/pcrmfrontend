import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Checkbox, Box, Typography, FormControlLabel } from '@mui/material'

function CheckboxTextField(props) {
  const {
    label,
    placeholder,
    control,
    name,
    checkboxLabel,
    error,
    variant = 'outlined',
    size = 'small',
    disabled,
    sx,
  } = props

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {/* Label and Checkbox in a row */}
      <Box display="flex" alignItems="center">
        <Controller
          name={`${name}.isFixed`}
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label={checkboxLabel}
            />
          )}
        />
        <Typography variant="subtitle1" sx={{ fontSize: '13px', marginRight: '8px' }}>
          {label}
        </Typography>
      </Box>

      {/* Text Field */}
      <Controller
        name={`${name}.price`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            fullWidth
            variant={variant}
            size={size}
            placeholder={placeholder}
            error={!!error}
            helperText={error ? error.message : ''}
            {...field}
            disabled={disabled}
            sx={sx}
          />
        )}
      />
    </Box>
  )
}

export default CheckboxTextField
