import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../slice/public/authSlice'
import { workCategorySlice } from '../slice/public/workCategorySlice'

export const rootReducer = combineReducers({
  auth: authReducer,
  workCategory: workCategorySlice,
})
