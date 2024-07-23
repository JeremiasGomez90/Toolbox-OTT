import { configureStore } from '@reduxjs/toolkit'
import filesSlice from './filesSlice'

export default configureStore({
  reducer: {
    files: filesSlice
  }
})