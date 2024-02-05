import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getValue } from "../utils/storage.util";

export const BASE_URL = 'https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/';
export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        const token = getValue('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});
