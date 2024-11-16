import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Controller, get, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useDispatch, useSelector } from 'react-redux'

import { LoadingButton } from '@mui/lab'
import SelectField from '@/components/components/reusableFormFields/selectField'
import TextFormField from '@/components/components/reusableFormFields/TextField'

import {
  workCategoryAdd,
  workCategoryEdit,
  workCategoryView,
} from '@/redux/api/public/workCategoryService'
import toast from 'react-hot-toast'

const AddCategoryForm = (props, disabled) => {
  const { onClick, initialData = null, type } = props

  const [showPassword, setShowPassword] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const initialvalue = useSelector((state) => state?.workCategory?.workCategoryView?.data)
  console.log(initialvalue)

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
    defaultValues: type === 'add' ? {} : initialvalue,
    // resolver: yupResolver(categoryForm),
    mode: 'onChange',
  })

  // Add Directory Api
  const handleAddCategory = async (values) => {
    console.log(values)
    try {
      const response = await dispatch(workCategoryAdd(values)).unwrap()
      toast.success(response.message)
      onClick()
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleEditCategory = async (values) => {
    try {
      const response = await dispatch(workCategoryEdit(values)).unwrap()
      toast.success(response.message)
      onClick()
    } catch (error) {
      toast.error(error.message)
      console.log(errors)
    }
  }

  // view product
  const viewCategoryList = async (id) => {
    try {
      const res = await dispatch(workCategoryView(id)).unwrap()
    } catch (errors) {
      errorAlert(errors?.error)
    }
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

  useEffect(() => {
    essentialListApi()
  }, [])

  useEffect(() => {
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

  return (
    <Box sx={{ mx: 2 }}>
      {/* {formLoading ? (
        <FormLoader />
      ) : ( */}
      <form
        onSubmit={
          type === 'add' ? handleSubmit(handleAddCategory) : handleSubmit(handleEditCategory)
        }>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="work_name"
              control={control}
              Controller={Controller}
              label="Work Name"
              error={errors?.label?.message}
            />
          </Grid>
          <Grid item xs={6} direction={'column'}>
            <SelectField
              name="work_type"
              control={control}
              label="Work Type"
              Controller={Controller}
              data={[
                { value: 0, label: 'mini' },
                { value: 1, label: 'online' },
              ]}
              error={errors?.category?.message}
              // disabled={type === "edit" && true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="work_tracking_no"
              control={control}
              Controller={Controller}
              label="Tracking No"
              error={errors?.label?.message}
            />
          </Grid>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="work_tracking_website"
              control={control}
              Controller={Controller}
              label="Tracking Site"
              error={errors?.label?.message}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={12} className="address-employee">
            <Typography variant="subtitle1">Work Completed</Typography>
            <Controller
              name="work_completed"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label="Work Completed"
                />
              )}
            />
          </Grid>
        </Grid>

        <Stack
          direction={'row'}
          alignItems={'flex-end'}
          justifyContent={'flex-end'}
          gap={5}
          sx={{ p: 3 }}>
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

export default AddCategoryForm
