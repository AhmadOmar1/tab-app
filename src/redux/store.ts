import { configureStore } from '@reduxjs/toolkit'
import theme from "./theme-slice";
import auth, { authMiddleware }  from './user/auth-slice'
import searchFormValues from './hotel/hotels-slice';
import { hotelsApi } from './hotel/hotelsApi';
import { authApi } from './user/authApi';


export const store = configureStore({
    reducer: {
        theme,
        auth,
        searchFormValues,
        [hotelsApi.reducerPath]: hotelsApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, hotelsApi.middleware, authApi.middleware)
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch