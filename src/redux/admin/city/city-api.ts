import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../api-config';
import { City } from '../../../models/trending-destination';
import { HttpStatusCode } from 'axios';

const CITY_URL = "api/cities";
export const cityApi = createApi({
    reducerPath: 'cityApi',
    baseQuery,
    tagTypes: ['City'], 
    endpoints: (builder) => ({
        getCities: builder.query<City[], void>({
            query: () => CITY_URL,
            providesTags: ['City'],
        }),
        addCity: builder.mutation<City, { city: City }>({
            query: (newCity) => ({
                url: CITY_URL,
                method: 'POST',
                body: newCity,
            }),
            invalidatesTags: ['City'], 
        }),
        updateCity: builder.mutation<City, { cityId: number, city: City }>({
            query: ({ city, cityId }) => ({
                url: `${CITY_URL}/${cityId}`,
                method: 'PUT',
                body: city,
            }),
            invalidatesTags: ['City'], 
        }),

        deleteCity: builder.mutation<HttpStatusCode, { cityId: number }>({
            query: (cityId) => ({
                url: `${CITY_URL}/${cityId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['City'],
        }),
    }),
});

export const {
    useGetCitiesQuery,
    useAddCityMutation,
    useUpdateCityMutation,
    useDeleteCityMutation,
} = cityApi;
