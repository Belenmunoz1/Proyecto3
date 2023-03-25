import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/employeeSlice'
import assetsReducer from '../features/assetSlice'

export const store = configureStore ( {
  reducer: {
    employees : employeesReducer,
    assets : assetsReducer,
  },

})

