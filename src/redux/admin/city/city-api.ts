import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../api-config';
import { City } from '../../../models/trending-destination';
import { HttpStatusCode } from 'axios';

const CITY_URL = "api/cities";


export const cityApi = createApi({
    reducerPath: 'cityApi',
    baseQuery,
    endpoints: (builder) => ({
        getCities: builder.query<City[], void>({
            query: () => CITY_URL,
        }),
        addCity: builder.mutation<City, { name: string, description: string }>({
            query: (newCity) => ({
                url: CITY_URL,
                method: 'POST',
                body: newCity,
            }),
        }),
        updateCity: builder.mutation<City, { cityId: number, city: City }>({
            query: ({ city, cityId }) => ({
                url: `${CITY_URL}/${cityId}`,
                method: 'PUT',
                body: city,
            }),
        }),

        deleteCity: builder.mutation<HttpStatusCode, { cityId: number }>({
            query: (cityId) => ({
                url: `${CITY_URL}/${cityId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetCitiesQuery,
    useAddCityMutation,
    useUpdateCityMutation,
    useDeleteCityMutation,
} = cityApi;

