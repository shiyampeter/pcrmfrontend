import { createAsyncThunk } from '@reduxjs/toolkit'
import PUBLICSERVER from '../../../utils/helpers/Server'

export const workStatusAdd = createAsyncThunk('workStatusAdd', async (params: any, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.post(`/workStatus`, params)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const workStatusEdit = createAsyncThunk('workStatusEdit', async (params: any, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.put(`/workStatus/${params?.work_id}`, params)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const workStatusList = createAsyncThunk('workStatusList', async (params, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.get(`/workStatus`, { params })
    return response?.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const workStatusView = createAsyncThunk('workStatusView', async (id: string, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.get(`/workStatus/${id}`)
    return response?.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const workStatusDelete = createAsyncThunk(
  'workStatusDelete',
  async (id: string, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.delete(`/workStatus/${id}`)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
