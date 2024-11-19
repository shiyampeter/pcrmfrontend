import React from 'react'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { FormHelperText } from '@mui/material'

function SelectField({
  label,
  Controller,
  control,
  name,
  error,
  data,
  disabled,
  onChangeCallback,
}) {
  return (
    <>
      <Controller
        defaultValue={''}
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth error={error}>
            <Typography variant="subtitle1" sx={{ fontSize: '13px' }}>
              {label}
            </Typography>
            <Select
              {...field}
              size={'small'}
              disabled={disabled}
              className="new-textfield"
              onChange={(event) => {
                console.log('Selected Value:', event.target.value)
                field.onChange(event) // Update the form value in react-hook-form
                if (onChangeCallback) {
                  onChangeCallback(event.target.value) // Call the custom callback
                }
              }}>
              {data?.map((options, i) => (
                <MenuItem value={options.value} key={i} className="new-textfield-menu">
                  {options.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
        )}
      />
    </>
  )
}

export default SelectField
