import { createAsyncThunk } from '@reduxjs/toolkit'
import PUBLICSERVER from '../../../utils/helpers/Server'

export const iecMiniAdd = createAsyncThunk('iecMiniAdd', async (params: any, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.post(`/iecMini`, params)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const iecMiniEdit = createAsyncThunk('iecMiniEdit', async (params: any, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.put(`/iecMini/${params?.iec_q_id}`, params)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const iecMiniAddOnline = createAsyncThunk(
  'iecMiniAddOnline',
  async (params: any, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.post(`/iecMiniOnline`, params)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const iecMiniEditOnline = createAsyncThunk(
  'iecMiniOnline',
  async (params: any, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.put(`/iecMiniOnline/${params?.iec_q_id}`, params)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const iecMiniList = createAsyncThunk('iecMiniList', async (params, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.get(`/iecMini`, { params })
    return response?.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const iecMiniView = createAsyncThunk('iecMiniView', async (id: string, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.get(`/iecMini/${id}`)
    return response?.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const iecMiniDelete = createAsyncThunk('iecMiniDelete', async (id: string, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.delete(`/iecMini/${id}`)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
