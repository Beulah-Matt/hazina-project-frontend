import { configureStore } from '@reduxjs/toolkit'
import storageSlice from './reducers/storageSlice'

 const store = configureStore({
    reducer: {
        storages: storageSlice,
    },
  })

  export default store;