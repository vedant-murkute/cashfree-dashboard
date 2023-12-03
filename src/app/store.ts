import { configureStore } from "@reduxjs/toolkit"
import collectionReducer from "../features/collection/collectionSlice"

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
