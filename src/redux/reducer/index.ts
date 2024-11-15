import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../slice/public/authSlice'
import workCategoryReducer from '../slice/public/workCategorySlice'
import subWorkCategoryReducer from '../slice/public/workSubCategorySlice'
import commonReducer from '../slice/public/commonSlice'

export const rootReducer = combineReducers({
  auth: authReducer,
  workCategory: workCategoryReducer,
  subWorkCategory: subWorkCategoryReducer,
  common: commonReducer,
})
