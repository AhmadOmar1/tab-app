import { createApi } from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../api-config';
const loginUrl = "api/auth/authenticate";


type LoginResponse = {
    userType: string;
    authentication: string;
};

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, { username: string; password: string }>({
            query: credentials => ({
                url: loginUrl,
                method: 'POST',
                body: { ...credentials },
            }),
      
        }),
    }),
});

export const { useLoginMutation } = authApi;

