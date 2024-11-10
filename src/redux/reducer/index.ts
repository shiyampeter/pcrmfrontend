import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../slice/public/authSlice'

export const rootReducer = combineReducers({
  auth: authReducer,
})
