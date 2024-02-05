import { configureStore } from '@reduxjs/toolkit'
import theme from "./theme-slice";
import auth, { authMiddleware } from './user/auth/auth-slice'
import searchFormValues from './user/hotel/hotels-slice';
import { hotelsApi } from './user/hotel/hotelsApi';
import { authApi } from './user/auth/authApi';
import { bookingApi } from './user/booking/booking-api';
import { cityApi } from './admin/city/city-api';
import { hotelAdminApi } from './admin/hotel/hotel-api';
import { roomApi } from './admin/room/room-api';


export const store = configureStore({
    reducer: {
        theme,
        auth,
        searchFormValues,
        [hotelsApi.reducerPath]: hotelsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [bookingApi.reducerPath]: bookingApi.reducer,
        [cityApi.reducerPath]: cityApi.reducer,
        [hotelAdminApi.reducerPath]: hotelAdminApi.reducer,
        [roomApi.reducerPath]: roomApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(authMiddleware,
            hotelsApi.middleware,
            authApi.middleware,
            bookingApi.middleware,
            cityApi.middleware,
            hotelAdminApi.middleware,
            roomApi.middleware,
            
        )

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch