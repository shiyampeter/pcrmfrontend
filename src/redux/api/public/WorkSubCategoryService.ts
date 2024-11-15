import { createAsyncThunk } from '@reduxjs/toolkit'
import PUBLICSERVER from '../../../utils/helpers/Server'

export const workSubCategoryAdd = createAsyncThunk(
  'workSubCategoryAdd',
  async (params: any, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.post(`/subWorkCategory`, params)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workSubCategoryEdit = createAsyncThunk(
  'workSubCategoryEdit',
  async (params: any, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.post(`/subWorkCategory/${id}`, params)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workSubCategoryList = createAsyncThunk(
  'workSubCategoryList',
  async (params, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.get(`/subWorkCategory`, { params })
      return response?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const workSubCategoryView = createAsyncThunk(
  'workSubCategoryView',
  async (params, thunkAPI) => {
    try {
      const response = await PUBLICSERVER.get(`/subWorkCategory/${id}`)
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
      const response = await PUBLICSERVER.delete(`/subWorkCategory/${id}`)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
