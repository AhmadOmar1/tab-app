import { createApi } from '@reduxjs/toolkit/query/react';
import { Amenity } from '../../../models/amenity';
import { baseQuery } from '../../api-config';

const AMENITY_URL = 'api/search-results/amenities';

export const amenitiesApi = createApi({
  reducerPath: 'amenitiesApi',
  baseQuery,
  tagTypes: ['Amenity'], 
  endpoints: (builder) => ({
    getAmenties: builder.query<Amenity[], void>({
      query: () => AMENITY_URL,
      providesTags: ['Amenity'], 
    }),
  }),
});

export const { useGetAmentiesQuery } = amenitiesApi;


