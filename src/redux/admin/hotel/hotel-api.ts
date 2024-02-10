import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../api-config';
import { AddHotel } from '../../../models/hotel';
import { HttpStatusCode } from 'axios';

const CITY_URL = "api/cities";
export const HOTEL_URL = "api/hotels";

export const hotelAdminApi = createApi({
    reducerPath: 'hotelAdminApi',
    baseQuery,
    tagTypes: ['Hotel'], // Define tag types for hotel-related data
    endpoints: (builder) => ({
        getHotels: builder.query<AddHotel[], void>({
            query: () => HOTEL_URL,
            providesTags: ['Hotel'],
        }),
        addHotel: builder.mutation<AddHotel, { cityId: number, hotel: AddHotel }>({
            query: ({ cityId, hotel }) => ({
              url: `${CITY_URL}/${cityId}/hotels`,
              method: 'POST',
              body: hotel,
            }),
            invalidatesTags: ['Hotel'], 
        }),
        updateHotel: builder.mutation<HttpStatusCode, { hotel: AddHotel }>({
            query: ({ hotel }) => ({
                url: `${HOTEL_URL}/${hotel.id}`,
                method: 'PUT',
                body: hotel,
            }),
            invalidatesTags: ['Hotel'], 
        }),
        deleteHotel: builder.mutation<HttpStatusCode, { hotelId: number }>({
            query: ({ hotelId }) => ({
                url: `${HOTEL_URL}/${hotelId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Hotel'], 
        }),
    }),
});


    export const {
        useGetHotelsQuery,
        useAddHotelMutation,
        useUpdateHotelMutation,
        useDeleteHotelMutation,
    } = hotelAdminApi;
