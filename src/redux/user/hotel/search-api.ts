import { createApi } from '@reduxjs/toolkit/query/react';
import { Hotel } from '../../../models/hotel';
import { baseQuery } from '../../api-config';

const SEARCH_URL = 'api/home/search';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery,
  tagTypes: ['Search'], 
  endpoints: (builder) => ({
    getHotelBySearch: builder.mutation<Hotel[], string>({
      query: (search) => (search ? `${SEARCH_URL}?${search}` : SEARCH_URL),
      invalidatesTags: ['Search'], 
    }),
  }),
});

export const { useGetHotelBySearchMutation } = searchApi;
