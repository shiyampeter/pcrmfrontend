import { Box, Grid, Stack } from '@mui/material'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useDispatch, useSelector } from 'react-redux'

import TextFormField from '@/components/components/reusableFormFields/TextField'
import { LoadingButton } from '@mui/lab'

import FormLoader from '@/components/components/formLoader'
import { errorAlert, successAlert } from '@/helpers/global-function'
import { workStatusAdd, workStatusEdit, workStatusView } from '@/redux/api/public/workStatusService'

const AddStatusForm = (props, disabled) => {
  const { onClick, initialData = null, type } = props

  const dispatch = useDispatch()
  const initialvalue = useSelector((state) => state?.workStatus?.workStatusView?.data)
  console.log(initialvalue)
  const formLoading = useSelector((state) => state?.workStatus?.workStatusView?.loading)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: type === 'add' ? {} : initialvalue,
    resolver: yupResolver(workStatusSchema),
    mode: 'onChange',
  })

  const handleAddCategory = async (values) => {
    console.log(values)
    try {
      const response = await dispatch(workStatusAdd(values)).unwrap()
      successAlert(response.message)
      onClick()
    } catch (error) {
      errorAlert(error.error)
    }
  }

  const handleEditCategory = async (values) => {
    try {
      const response = await dispatch(workStatusEdit(values)).unwrap()
      successAlert(response.message)
      onClick()
    } catch (error) {
      errorAlert(error.error)
    }
  }

  const viewCategoryList = async (id) => {
    try {
      await dispatch(workStatusView(id)).unwrap()
    } catch (error) {
      errorAlert(error.error)
    }
  }

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
      {formLoading ? (
        <FormLoader />
      ) : (
        <form
          onSubmit={
            type === 'add' ? handleSubmit(handleAddCategory) : handleSubmit(handleEditCategory)
          }
        >
          <Grid container spacing={5} sx={{ mb: 2 }}>
            <Grid item xs={6} direction={'column'}>
              <TextFormField
                name="status"
                control={control}
                Controller={Controller}
                label="Status Name"
                error={errors?.status?.message}
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

export default AddStatusForm
