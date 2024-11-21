import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// import { authEndPoints } from '../../../../helpers/endpoints'
import { useDispatch, useSelector } from 'react-redux'

import { LoadingButton } from '@mui/lab'
import SelectField from '@/components/components/reusableFormFields/selectField'
import TextFormField from '@/components/components/reusableFormFields/TextField'

import CheckboxTextField from '@/components/components/reusableFormFields/CheckboxTextField'
import CheckboxSelectTextField from '@/components/components/reusableFormFields/CheckboxSelectTextField'

import { essentials } from '@/redux/api/public/commonService'
import { useDebounce } from 'use-debounce'
import {
  workSubCategoryAdd,
  workSubCategoryEdit,
  workSubCategoryView,
} from '@/redux/api/public/WorkSubCategoryService'

import SelectTextField from '@/components/components/reusableFormFields/SelectTextField'
import { workSubCategorySchema } from '@/helpers/ValidationSchema'
import FormLoader from '@/components/components/formLoader'
import { errorAlert, successAlert } from '@/helpers/global-function'
import { valid } from 'chroma-js'

const AddSubCtegoryForm = (props, disabled) => {
  const { onClick, initialData = null, type } = props

  const [searchKey, setSearchKey] = useState('')
  const [searchValue] = useDebounce(searchKey, 1000)
  const [workCategory, setWorkCategory] = useState([])
  const [status, setStatus] = useState([])
  const dispatch = useDispatch()
  const initialvalue = useSelector((state) => state?.subWorkCategory?.workSubCategoryView?.data)
  console.log(initialvalue, 'initial')

  const formLoading = useSelector((state) => state?.subWorkCategory?.workSubCategoryView?.loading)

  const essential = useSelector((state) => state?.common?.essentials?.data)
  // cancel search
  const cancelSearch = () => {
    setSearchKey('')
  }

  //on search
  const onSearch = (e) => {
    setSearchKey(e.target.value)
  }

  const {
    handleSubmit,
    control,
    setValue,

    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: type === 'add' ? {} : initialvalue,
    resolver: yupResolver(workSubCategorySchema),
    mode: 'onChange',
  })
  const statusAlert = watch('sub_work_alert_status')
  const statusAlertType = watch('sub_work_alert_days_type')
  const validityType = watch('sub_work_validity_status')
  console.log(statusAlert, 'hhhhh')
  console.log(validityType, 'validityType')
  // Add Directory Api
  const handleAddCategory = async (values: any) => {
    try {
      const response = await dispatch(workSubCategoryAdd(values)).unwrap()
      onClick()
      successAlert(response.message)
    } catch (error) {
      errorAlert(error.error)
    }
  }

  const handleEditCategory = async (values) => {
    try {
      const response = await dispatch(workSubCategoryEdit(values)).unwrap()
      onClick()
      successAlert(response.message)
    } catch (error) {
      errorAlert(error.error)
    }
  }

  // view product
  const viewCategoryList = async (id) => {
    console.log(id, 'if')
    try {
      const res = await dispatch(workSubCategoryView(id)).unwrap()
    } catch (error) {
      errorAlert(error?.error)
    }
  }

  //Essential Api
  const essentialApi = async () => {
    try {
      const res = await dispatch(essentials({ type: 'workCategory', search: searchValue })).unwrap()
      setWorkCategory(res)
    } catch (error) {
      errorAlert(error?.message)
    }
  }

  const essentialStatusApi = async () => {
    try {
      const res = await dispatch(
        essentials({ type: 'workSubCategoryStatus', search: searchValue }),
      ).unwrap()
      setStatus(res)
    } catch (error) {
      errorAlert(error?.message)
    }
  }

  useEffect(() => {
    essentialApi()
    essentialStatusApi()
  }, [type, searchValue])

  useEffect(() => {
    console.log(initialData, 'initia')
    if (type === 'edit') {
      viewCategoryList(initialData)
    }
  }, [type])

  useEffect(() => {
    if (type !== 'add') {
      if (initialvalue) {
        reset(initialvalue)
      } else {
        reset()
      }
    } else {
      reset()
    }
  }, [initialvalue])
  const data = [
    {
      value: 1,
      label: 'one',
    },
  ]

  const percentageAmountOptions = [
    { value: 'percentage', label: 'Percentage' },
    { value: 'amount', label: 'Amount' },
  ]
  const alterOptions = [
    { value: 1, label: 'Before' },
    { value: 2, label: 'After' },
  ]
  const timeOptions = [
    { value: 'day', label: 'Days' },
    { value: 'week', label: 'Weeks' },
    { value: 'month', label: 'Months' },
    { value: 'year', label: 'Years' },
  ]
  const [isAlertEnabled, setIsAlertEnabled] = useState(false)
  console.log(isAlertEnabled, 'isAler')
  return (
    <Box sx={{ mx: 2 }}>
      {formLoading ? (
        <FormLoader />
      ) : (
        <form
          onSubmit={
            type === 'add' ? handleSubmit(handleAddCategory) : handleSubmit(handleEditCategory)
          }
        >
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>
            Category Section
          </Typography>
          <Grid container spacing={5} sx={{ mb: 2 }}>
            <Grid item xs={4} direction={'column'}>
              <Typography variant="subtitle1" sx={{ fontSize: '13px' }}>
                Select Work Category
              </Typography>
              <Controller
                name="sub_work_cate_id"
                control={control}
                defaultValue="" // Ensure it has a default value
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    options={workCategory || []}
                    getOptionLabel={(option) => option?.label || ''} // Display the label in the dropdown
                    value={workCategory?.find((item) => item.value === field.value) || null} // Match selected value
                    onChange={(_, newValue) => {
                      field.onChange(newValue?.value || '') // Update form field with the selected value
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        // label="Select Work Category" // Label for the input
                        error={!!errors?.sub_work_cate_id} // Show error if validation fails
                        helperText={errors?.sub_work_cate_id?.message} // Display error message
                      />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4} direction={'column'}>
              <TextFormField
                name="sub_work_cate_name"
                control={control}
                Controller={Controller}
                label="Enter SubCategory Name"
                error={errors?.sub_work_cate_name?.message}
                sx={{ height: '45px!important' }}
              />
            </Grid>
          </Grid>
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>
            Price Section
          </Typography>
          <Grid container spacing={5} sx={{ mb: 2 }}>
            <Grid item xs={4} direction={'column'}>
              <CheckboxTextField
                label="Work Price"
                checkboxLabel="Fixed"
                placeholder="Work Price"
                control={control}
                // Controller={Controller}
                error={errors?.sub_work_work_price?.message}
                name="sub_work_work_price" // this will be the key in form output
              />
            </Grid>
            <Grid item xs={4} direction={'column'}>
              <CheckboxTextField
                label="Online Price"
                checkboxLabel="Fixed"
                placeholder="Online Price"
                control={control}
                // Controller={Controller}
                error={errors?.sub_work_online_price?.message}
                name="sub_work_online_price" // this will be the key in form output
              />
            </Grid>
            <Grid item xs={4}>
              <CheckboxTextField
                label="Expense Price"
                checkboxLabel="Fixed"
                placeholder="Expense Price"
                control={control}
                Controller={Controller}
                error={errors?.sub_work_expense_price?.message}
                name="sub_work_expense_price" // this will be the key in form output
              />
            </Grid>
          </Grid>
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>
            Discount Section
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4} className="address-employee">
              <CheckboxSelectTextField
                label="Discount Type"
                selectLabel="Discount Type"
                control={control}
                Controller={Controller}
                textLabel="Discount Value"
                selectOptions={percentageAmountOptions}
                name="sub_work_discount_price" // this will store data as { isFixed, type, value } in form output
              />
            </Grid>
            <Grid item xs={12} md={4} className="address-employee">
              <CheckboxSelectTextField
                label="Incentive Type"
                selectLabel="Incentive Type"
                control={control}
                Controller={Controller}
                textLabel="Incentive Value"
                selectOptions={percentageAmountOptions}
                name="sub_work_incentive_price" // this will store data as { isFixed, type, value } in form output
              />
            </Grid>
          </Grid>{' '}
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>
            Validity Section
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6} md={4} className="address-employee">
              <Controller
                name="sub_work_validity_status"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value === 1}
                        onChange={(e) => {
                          field.onChange(e.target.checked ? 1 : 0)
                          // setIsAlertEnabled(e.target.checked) // Update state when checkbox is toggled
                        }}
                      />
                    }
                    label="Valididty Status"
                  />
                )}
              />

              <SelectTextField
                label="Validity Type"
                selectLabel="Validity Type"
                Controller={Controller}
                textLabel="Validity Value"
                control={control} // Pass control from react-hook-form
                name="sub_work_validity"
                selectOptions={timeOptions}
                disabled={!validityType}
                // error={formErrors.exampleField?.value}
              />
            </Grid>
            <Grid item xs={6} md={4} className="address-employee">
              <Controller
                name="sub_work_alert_status"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value === 1}
                        onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                      />
                    }
                    label="Alert Status"
                  />
                )}
              />
              <SelectField
                name="sub_work_alert_days_type"
                control={control}
                label="Select Alert Type"
                Controller={Controller}
                data={alterOptions}
                disabled={!statusAlert}
                error={errors?.status_id?.message}
                // disabled={type === "edit" && true}
              />
              {statusAlertType ? (
                <TextFormField
                  name="sub_work_alert_days"
                  control={control}
                  Controller={Controller}
                  label="Enter Work Alert days"
                  error={errors?.label?.message}
                />
              ) : (
                ''
              )}
            </Grid>
          </Grid>
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>
            Status Section
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6} md={4} className="address-employee">
              <SelectField
                name="status_id"
                control={control}
                label="Select Status"
                Controller={Controller}
                data={status}
                error={errors?.status_id?.message}
                // disabled={type === "edit" && true}
              />
            </Grid>
          </Grid>
          <Stack
            direction={'row'}
            alignItems={'flex-end'}
            justifyContent={'flex-end'}
            gap={5}
            sx={{ p: 3 }}
          >
            <LoadingButton
              loadingPosition="center"
              loading={isSubmitting}
              variant="contained"
              type="submit"
              className="submitBtnn"
            >
              Save
            </LoadingButton>
          </Stack>
        </form>
      )}
    </Box>
  )
}

export default AddSubCtegoryForm
