import {
  workCategoryAdd,
  workCategoryDelete,
  workCategoryEdit,
  workCategoryList,
  workCategoryView,
} from '@/redux/api/public/workCategoryService'
import { createSlice } from '@reduxjs/toolkit'

const workCategoryCases = [
  {
    api: workCategoryAdd,
    name: 'workCategoryAdd',
  },
  {
    api: workCategoryEdit,
    name: 'workCategoryEdit',
  },
  {
    api: workCategoryList,
    name: 'workCategoryList',
  },
  {
    api: workCategoryView,
    name: 'workCategoryView',
  },
  {
    api: workCategoryDelete,
    name: 'workCategoryDelete',
  },
]

const initialState = {
  authProducts: [],
}

workCategoryCases.forEach((cases) => {
  initialState[cases.name] = {
    loading: false,
    data: undefined,
    error: null,
  }
})

export const workCategorySlice = createSlice({
  name: 'publicAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    workCategoryCases.forEach((cases) => {
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

export default workCategorySlice.reducer
