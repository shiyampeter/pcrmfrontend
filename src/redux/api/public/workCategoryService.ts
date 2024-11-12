import { createAsyncThunk } from '@reduxjs/toolkit'
import PUBLICSERVER from '../../../utils/helpers/Server'

export const workCategoryAdd = createAsyncThunk(
  'workCategoryAdd',
  async (params: any, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.post(`/workCategory`, params)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workCategoryEdit = createAsyncThunk(
  'workCategoryEdit',
  async (params: any, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.post(`/workCategory/${id}`, params)
      return response?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workCategoryList = createAsyncThunk(
  'workCategoryList',
  async (id: string, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.get(`/workCategory`)
      return response?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workCategoryDelete = createAsyncThunk(
  'workCategoryDelete',
  async (id: string, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.delete(`/workCategory/${id}`)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
