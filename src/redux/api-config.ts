import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const BASE_URL = 'https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/';
export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as { auth: { token: string } }).auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});
