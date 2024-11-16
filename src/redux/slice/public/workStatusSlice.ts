import {
  workStatusAdd,
  workStatusDelete,
  workStatusEdit,
  workStatusList,
  workStatusView,
} from '@/redux/api/public/workStatusService'
import { createSlice } from '@reduxjs/toolkit'

const workStatusCases = [
  {
    api: workStatusAdd,
    name: 'workStatusAdd',
  },
  {
    api: workStatusEdit,
    name: 'workStatusEdit',
  },
  {
    api: workStatusList,
    name: 'workStatusList',
  },
  {
    api: workStatusView,
    name: 'workStatusView',
  },
  {
    api: workStatusDelete,
    name: 'workStatusDelete',
  },
]

const initialState = {
  authProducts: [],
}

workStatusCases.forEach((cases) => {
  initialState[cases.name] = {
    loading: false,
    data: undefined,
    error: null,
  }
})

export const workStatusSlice = createSlice({
  name: 'publicAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    workStatusCases.forEach((cases) => {
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

export default workStatusSlice.reducer
