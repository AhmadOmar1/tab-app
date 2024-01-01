import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../api-config';
import { Booking } from '../../models/booking';
const BOOKING_URL = "api/bookings";

export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery,
    endpoints: (builder) => ({
        book: builder.mutation<{ status: number }, Booking>({
            query: credentials =>
            ({
                url: BOOKING_URL,
                method: 'POST',
                body: { ...credentials },
            }),
        }),
    }),
});

export const { useBookMutation } = bookingApi;
