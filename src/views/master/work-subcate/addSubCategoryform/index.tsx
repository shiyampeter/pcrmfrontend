import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material'
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
  const [images, setImages] = useState('')
  const dispatch = useDispatch()
  // const initialvalue = useSelector((state) => state?.adminCategory?.viewCategory?.data?.data)
  // console.log(initialvalue)

  // const formLoading = useSelector((state) => state?.adminCategory?.viewCategory?.loading)
  const [essential, setEssential] = useState({
    cateLists: [],
  })

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
    // defaultValues: type === 'add' ? {} : initialvalue,
    // resolver: yupResolver(categoryForm),
    mode: 'onChange',
  })

  // Add Directory Api
  const handleAddCategory = async (values) => {
    console.log(values)

    // const parameters = {
    //   url: `${authEndPoints.category.categoryAdd}`,
    //   data: values,
    // };
    // try {
    //   const response = await dispatch(addCategoryData(parameters)).unwrap();
    //   onClick();
    //   successAlert(response.message);
    // } catch (error) {
    //   errorAlert(error.error);
    //   console.log(errors);
    // }
  }

  const handleEditCategory = async (values) => {
    // const parameters = {
    //   url: `${authEndPoints.category.editCategory(initialvalue?.id)}`,
    //   data: values,
    // };
    // try {
    //   const response = await dispatch(editCategoryData(parameters)).unwrap();
    //   onClick();
    //   successAlert(response.message);
    // } catch (error) {
    //   errorAlert(error.error);
    //   console.log(errors);
    // }
  }

  // view product
  const viewCategoryList = async () => {
    // const parameters = {
    //   url: `${authEndPoints.category.categoryView(initialData)}`,
    // };
    // try {
    //   const res = await dispatch(viewCategoryData(parameters)).unwrap();
    // } catch (errors) {
    //   errorAlert(errors?.error);
    // }
  }

  //Essential Api
  const essentialListApi = async () => {
    // const value = "category";
    // const parameters = {
    //   url: `${authEndPoints.product.listCommon(value)}`,
    // };
    // try {
    //   const response = await dispatch(commonListData(parameters)).unwrap();
    //   setEssential(response.data);
    // } catch (errors) {
    //   errorAlert(errors?.error);
    // }
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
    essentialListApi()
  }, [])

  useEffect(() => {
    if (initialData) {
      const Img = initialData.image ? initialData.image : ''
      setImages(Img)
    }
  }, [])

  useEffect(() => {
    if (type === 'edit') {
      viewCategoryList()
    }
  }, [type])

  // useEffect(() => {
  //   if (type !== 'add') {
  //     if (initialvalue) {
  //       // const { date, start_time, end_time, created_by, created_at, ...others } = initialValue;
  //       // const prevData = {
  //       // 	...others,
  //       // 	date: dayjs(date, "YYYY-MM-DD"),
  //       // 	start_time: dayjs(start_time, "hh:mm A"),
  //       // 	end_time: dayjs(end_time, "hh:mm A"),
  //       // };
  //       reset(initialvalue)
  //     } else {
  //       reset()
  //     }
  //   } else {
  //     reset()
  //   }
  // }, [initialvalue])
  const data = [
    {
      id: 1,
      label: 'one',
    },
  ]

  const percentageAmountOptions = [
    { value: 'Percentage', label: 'Percentage' },
    { value: 'Amount', label: 'Amount' },
  ]
  const alterOptions = [
    { value: 'before', label: 'Before' },
    { value: 'after', label: 'After' },
  ]
  const timeOptions = [
    { value: 'day', label: 'Days' },
    { value: 'week', label: 'Weeks' },
    { value: 'month', label: 'Months' },
    { value: 'year', label: 'Years' },
  ]

  return (
    <Box sx={{ mx: 2 }}>
      {/* {formLoading ? (
        <FormLoader />
      ) : ( */}
      <form
        // onSubmit={
        //   type === 'add' ? handleSubmit(handleAddCategory) : handleSubmit(handleEditCategory)
        // }
        onSubmit={handleSubmit(handleAddCategory)}>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <SelectField
              name="work_name"
              control={control}
              label="Select Work Category"
              Controller={Controller}
              data={data}
              error={errors?.category?.message}
              // disabled={type === "edit" && true}
            />
          </Grid>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="sub_work_cate_name"
              control={control}
              Controller={Controller}
              label="Select Work Category Name"
              error={errors?.label?.message}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <CheckboxTextField
              label="Work Price"
              checkboxLabel="Fixed"
              placeholder="Work Price"
              control={control}
              Controller={Controller}
              name="myFielde" // this will be the key in form output
            />
          </Grid>
          <Grid item xs={6} direction={'column'}>
            <CheckboxTextField
              label="Online Price"
              checkboxLabel="Fixed"
              placeholder="Online Price"
              control={control}
              Controller={Controller}
              name="myFieldt" // this will be the key in form output
            />
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ mb: 2 }}>
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
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} md={6} className="address-employee">
            <CheckboxSelectTextField
              label="Discount Type"
              selectLabel="Discount Type"
              control={control}
              Controller={Controller}
              textLabel="Discount Value"
              selectOptions={percentageAmountOptions}
              name="myField1" // this will store data as { isFixed, type, value } in form output
            />
          </Grid>
          <Grid item xs={6} md={6} className="address-employee">
            <CheckboxSelectTextField
              label="Incentive Type"
              selectLabel="Incentive Type"
              control={control}
              Controller={Controller}
              textLabel="Incentive Value"
              selectOptions={percentageAmountOptions}
              name="myField2" // this will store data as { isFixed, type, value } in form output
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} md={6} className="address-employee">
            <CheckboxSelectTextField
              label="Validity Type"
              selectLabel="Validity Type"
              control={control}
              Controller={Controller}
              selectOptions={timeOptions}
              textLabel="Validity  Value"
              name="myFieldg" // this will store data as { isFixed, type, value } in form output
            />
          </Grid>
          <Grid item xs={6} md={6} className="address-employee">
            <CheckboxSelectTextField
              label="Alter Before/After"
              selectLabel="Alter Before/After"
              control={control}
              Controller={Controller}
              selectOptions={alterOptions}
              textLabel="Incentive Value"
              name="myFieldn" // this will store data as { isFixed, type, value } in form output
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} md={6} className="address-employee">
            <SelectField
              name="select_status"
              control={control}
              label="Select Status"
              Controller={Controller}
              data={data}
              error={errors?.category?.message}
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
          <Button className="submitBtnn" variant="contained">
            Cancel
          </Button>
          <LoadingButton
            loadingPosition="center"
            loading={isSubmitting}
            variant="contained"
            type="submit"
            className="submitBtnn">
            Add Row
          </LoadingButton>
        </Stack>
      </form>
      {/* )} */}
    </Box>
  )
}

export default AddSubCtegoryForm
