import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Controller, get, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// import { authEndPoints } from '../../../../helpers/endpoints'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import { LoadingButton } from '@mui/lab'
import SelectField from '@/components/components/reusableFormFields/selectField'
import TextFormField from '@/components/components/reusableFormFields/TextField'
import ImageUploadComponent from '@/components/components/reusableFormFields/ImageUpload'
import CheckboxTextField from '@/components/components/reusableFormFields/CheckboxTextField'
import CheckboxSelectTextField from '@/components/components/reusableFormFields/CheckboxSelectTextField'
import CheckboxSelectTextFieldDays from '@/components/components/reusableFormFields/CheckboxSelectTextFieldDays'
import { essentials } from '@/redux/api/public/commonService'
import { useDebounce } from 'use-debounce'
import {
  workSubCategoryAdd,
  workSubCategoryEdit,
  workSubCategoryView,
} from '@/redux/api/public/WorkSubCategoryService'
import toast from 'react-hot-toast'
import SelectTextField from '@/components/components/reusableFormFields/SelectTextField'
// import { categoryForm } from '../../../../helpers/validate'
// import {
//   addCategoryData,
//   editCategoryData,
//   viewCategoryData,
// } from '../../../../redux/api/admin/categoryService'
// import { commonListData } from '../../../../redux/api/admin/productService'
// import { errorAlert, successAlert } from '../../../../helpers/globalFunctions'

const AddSubCtegoryForm = (props, disabled) => {
  const { onClick, initialData = null, type } = props

  const [showPassword, setShowPassword] = useState(false)
  const [adminsrole, setadminsRole] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchKey, setSearchKey] = useState('')
  const [searchValue] = useDebounce(searchKey, 1000)
  const [images, setImages] = useState('')
  const dispatch = useDispatch()
  const initialvalue = useSelector((state) => state?.subWorkCategory?.workSubCategoryView?.data)
  // console.log(initialvalue)

  // const formLoading = useSelector((state) => state?.adminCategory?.viewCategory?.loading)

  const essential = useSelector((state) => state?.common?.essentials?.data)
  console.log('essential', essential)
  // cancel search
  const cancelSearch = () => {
    setSearchKey('')
  }

  //on search
  const onSearch = (e) => {
    setSearchKey(e.target.value)
  }

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: type === 'add' ? {} : initialvalue,
    // resolver: yupResolver(categoryForm),
    mode: 'onChange',
  })

  // Add Directory Api
  const handleAddCategory = async (values: any) => {
    console.log(values)

    try {
      const response = await dispatch(workSubCategoryAdd(values)).unwrap()
      onClick()
      toast.success(response.message)
    } catch (error) {
      toast.error(error.error)
      console.log(errors)
    }
  }

  const handleEditCategory = async (values) => {
    try {
      const response = await dispatch(workSubCategoryEdit(values)).unwrap()
      onClick()
      toast.success(response.message)
    } catch (error) {
      toast.error(error.error)
      console.log(errors)
    }
  }

  // view product
  const viewCategoryList = async (id) => {
    try {
      const res = await dispatch(workSubCategoryView(id)).unwrap()
    } catch (errors) {
      errorAlert(errors?.error)
    }
  }

  //Essential Api
  const essentialApi = async () => {
    try {
      const res = await dispatch(essentials({ type: 'workCategory', search: searchValue })).unwrap()
      console.log(res, 'res')
    } catch (errors) {
      toast.error(errors?.error)
    }
  }

  // visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // delete image
  const handleDeleteImage = () => {
    setValue('image', null)
    setImages(null)
  }

  useEffect(() => {
    essentialApi()
    console.log('test')
  }, [type, searchValue])

  useEffect(() => {
    if (initialData) {
      const Img = initialData.image ? initialData.image : ''
      setImages(Img)
    }
  }, [])

  useEffect(() => {
    if (type === 'edit') {
      viewCategoryList(initialData)
    }
  }, [type])

  useEffect(() => {
    if (type !== 'add') {
      if (initialvalue) {
        // const { date, start_time, end_time, created_by, created_at, ...others } = initialValue;
        // const prevData = {
        // 	...others,
        // 	date: dayjs(date, "YYYY-MM-DD"),
        // 	start_time: dayjs(start_time, "hh:mm A"),
        // 	end_time: dayjs(end_time, "hh:mm A"),
        // };
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
    { value: 'Percentage', label: 'Percentage' },
    { value: 'Amount', label: 'Amount' },
  ]
  const alterOptions = [
    { value: 0, label: 'Before' },
    { value: 1, label: 'After' },
  ]
  const timeOptions = [
    { value: 'day', label: 'Days' },
    { value: 'week', label: 'Weeks' },
    { value: 'month', label: 'Months' },
    { value: 'year', label: 'Years' },
  ]
  const [isAlertEnabled, setIsAlertEnabled] = useState(false)
  return (
    <Box sx={{ mx: 2 }}>
      {/* {formLoading ? (
        <FormLoader />
      ) : ( */}
      <form
        onSubmit={
          type === 'add' ? handleSubmit(handleAddCategory) : handleSubmit(handleEditCategory)
        }>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>
          Category Section
        </Typography>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={4} direction={'column'}>
            <Controller
              name="sub_work_cate_id"
              control={control}
              defaultValue="" // Ensure it has a default value
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={essential || []} // Array of options
                  getOptionLabel={(option) => option?.label || ''} // Display the label in the dropdown
                  value={essential?.find((item) => item.value === field.value) || null} // Match selected value
                  onChange={(_, newValue) => {
                    field.onChange(newValue?.value || '') // Update form field with the selected value
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Work Category" // Label for the input
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
              label="Select Work Category Name"
              error={errors?.label?.message}
            />
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>Price Section</Typography>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={4} direction={'column'}>
            <CheckboxTextField
              label="Work Price"
              checkboxLabel="Fixed"
              placeholder="Work Price"
              control={control}
              // Controller={Controller}
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
              name="sub_work_expense_price" // this will be the key in form output
            />
          </Grid>
        </Grid>
        {/* <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <CheckboxTextField
              label="Expense Price"
              checkboxLabel="Fixed"
              placeholder="Expense Price"
              control={control}
              Controller={Controller}
              name="myFieldh" // this will be the key in form output
            />
          </Grid>
        </Grid> */}
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
                        setIsAlertEnabled(e.target.checked) // Update state when checkbox is toggled
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
              disabled={!isAlertEnabled}
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
              label="Select Status"
              Controller={Controller}
              data={alterOptions}
              error={errors?.status_id?.message}
              // disabled={type === "edit" && true}
            />
            <TextFormField
              name="sub_work_alert_days"
              control={control}
              Controller={Controller}
              label="Enter Work Alert days"
              error={errors?.label?.message}
            />
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>Status Section</Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} md={4} className="address-employee">
            <SelectField
              name="status_id"
              control={control}
              label="Select Status"
              Controller={Controller}
              data={data}
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
          sx={{ p: 3 }}>
          {/* <Button className="submitBtnn" variant="contained" onClick={handleClose}>
            Cancel
          </Button> */}
          <LoadingButton
            loadingPosition="center"
            loading={isSubmitting}
            variant="contained"
            type="submit"
            className="submitBtnn">
            Save
          </LoadingButton>
        </Stack>
      </form>
      {/* )} */}
    </Box>
  )
}

export default AddSubCtegoryForm
