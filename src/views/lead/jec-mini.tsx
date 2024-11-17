import SelectField from '@/components/components/reusableFormFields/selectField'
import TextFormField from '@/components/components/reusableFormFields/TextField'
import { LoadingButton } from '@mui/lab'
import { Grid } from '@mui/material'
import { Stack } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'

const JecMini = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({})

  const handleAddCategory = async (values: any) => {
    console.log(values)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleAddCategory)}>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <SelectField
              name="work_cate"
              control={control}
              label="Select Work Category"
              Controller={Controller}
              data={[
                { value: 0, label: 'mini' },
                { value: 1, label: 'online' },
              ]}
              error={errors?.work_type?.message}
              disabled={false}
              // disabled={type === "edit" && true}
            />
          </Grid>
          <Grid item xs={6} direction={'column'}>
            <SelectField
              name="sub_work_cate"
              control={control}
              label="Select Sub Category"
              Controller={Controller}
              data={[
                { value: 0, label: 'mini' },
                { value: 1, label: 'online' },
              ]}
              error={errors?.work_type?.message}
              disabled={false} //   disabled={type === "edit" && true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="status"
              control={control}
              Controller={Controller}
              label="Completed status"
              error={errors?.status?.message}
            />
          </Grid>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="status"
              control={control}
              Controller={Controller}
              label="Work type"
              error={errors?.status?.message}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="status"
              control={control}
              Controller={Controller}
              label="Mobile"
              error={errors?.status?.message}
            />
          </Grid>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="status"
              control={control}
              Controller={Controller}
              label="Amount"
              error={errors?.status?.message}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="status"
              control={control}
              Controller={Controller}
              label="Expense"
              error={errors?.status?.message}
            />
          </Grid>
          <Grid item xs={6} direction={'column'}>
            <TextFormField
              name="status"
              control={control}
              Controller={Controller}
              label="Profit"
              error={errors?.status?.message}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={6} direction={'column'}>
            <SelectField
              name="work_cate"
              control={control}
              label="Paid/Not Paid"
              Controller={Controller}
              data={[
                { value: 0, label: 'mini' },
                { value: 1, label: 'online' },
              ]}
              error={errors?.work_type?.message}
              disabled={false}
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
          <LoadingButton
            loadingPosition="center"
            // loading={isSubmitting}
            variant="contained"
            type="submit"
            className="submitBtnn">
            Save
          </LoadingButton>
        </Stack>
      </form>
    </div>
  )
}

export default JecMini
