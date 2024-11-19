import {
  iecMiniAdd,
  iecMiniAddOnline,
  iecMiniDelete,
  iecMiniEdit,
  iecMiniEditOnline,
  iecMiniList,
  iecMiniView,
} from '@/redux/api/public/iecMiniService'
import { createSlice } from '@reduxjs/toolkit'

const iecMiniCases = [
  {
    api: iecMiniAdd,
    name: 'iecMiniAdd',
  },
  {
    api: iecMiniEdit,
    name: 'iecMiniEdit',
  },
  {
    api: iecMiniAddOnline,
    name: 'iecMiniAddOnline',
  },
  {
    api: iecMiniEditOnline,
    name: 'iecMiniEditOnline',
  },
  {
    api: iecMiniList,
    name: 'iecMiniList',
  },
  {
    api: iecMiniView,
    name: 'iecMiniView',
  },
  {
    api: iecMiniDelete,
    name: 'iecMiniDelete',
  },
]

const initialState = {
  authProducts: [],
}

iecMiniCases.forEach((cases) => {
  initialState[cases.name] = {
    loading: false,
    data: undefined,
    error: null,
  }
})

export const iecMiniSlice = createSlice({
  name: 'publicAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    iecMiniCases.forEach((cases) => {
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

export default iecMiniSlice.reducer
