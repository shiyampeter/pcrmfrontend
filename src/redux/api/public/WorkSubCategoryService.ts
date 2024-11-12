import { createAsyncThunk } from '@reduxjs/toolkit'
import PUBLICSERVER from '../../../utils/helpers/Server'

export const workSubCategoryAdd = createAsyncThunk(
  'workSubCategoryAdd',
  async (params: any, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.post(`/artist/save`, params)
      return response?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workSubCategoryEdit = createAsyncThunk(
  'workSubCategoryEdit',
  async (params: any, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.post(`/artist/save`, params)
      return response?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workSubCategoryList = createAsyncThunk(
  'workSubCategoryList',
  async (id: string, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.get(`/artist`)
      return response?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workSubCategoryDelete = createAsyncThunk(
  'workSubCategoryDelete',
  async (id: string, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.delete(`/artist`)
      return response?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
