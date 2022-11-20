import { configureStore } from "@reduxjs/toolkit";
import homeSlice from './home-slice';

const store = configureStore(
    {
        reducer:{viewHome:homeSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;