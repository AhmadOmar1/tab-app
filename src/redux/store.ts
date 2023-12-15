import { configureStore } from '@reduxjs/toolkit'
import theme from "./app-slice";
import isLoggedIn  from './app-slice'


export const store = configureStore({
    reducer: {
        theme,
        isLoggedIn,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch