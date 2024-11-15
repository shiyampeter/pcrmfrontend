import { createAsyncThunk } from '@reduxjs/toolkit'
import PUBLICSERVER from '../../../utils/helpers/Server'

export const essentials = createAsyncThunk('essentials', async (params: any, thunkAPI) => {
  try {
    const response = await PUBLICSERVER.get(`/essentials`, { params })
    return response?.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
