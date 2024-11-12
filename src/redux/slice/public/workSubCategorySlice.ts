import { createSlice } from '@reduxjs/toolkit'
import {
  workSubCategoryAdd,
  workSubCategoryEdit,
  workSubCategoryList,
  workSubCategoryDelete,
} from '@/redux/api/public/WorkSubCategoryService'
const workSubCategoryCases = [
  {
    api: workSubCategoryAdd,
    name: 'workSubCategoryAdd',
  },
  {
    api: workSubCategoryEdit,
    name: 'workSubCategoryEdit',
  },
  {
    api: workSubCategoryList,
    name: 'workSubCategoryList',
  },
  {
    api: workSubCategoryDelete,
    name: 'workSubCategoryDelete',
  },
]

const initialState = {
  authProducts: [],
}

workSubCategoryCases.forEach((cases) => {
  initialState[cases.name] = {
    loading: false,
    data: undefined,
    error: null,
  }
})

export const workSubCategorySlice = createSlice({
  name: 'publicAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    workSubCategoryCases.forEach((cases) => {
      builder
        .addCase(cases.api.fulfilled, (state, { payload }) => {
          state[cases.name].loading = false
          state[cases.name].data = payload
          state[cases.name].error = null
        })
        .addCase(cases.api.pending, (state) => {
          state[cases.name].loading = true
          state[cases.name].error = null
          state[cases.name].data = null
        })
        .addCase(cases.api.rejected, (state, { payload }) => {
          state[cases.name].loading = false
          state[cases.name].error = payload
          state[cases.name].data = null
        })
    })
  },
})

export default workSubCategorySlice.reducer
