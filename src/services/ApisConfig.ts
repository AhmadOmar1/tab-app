import axios, { HttpStatusCode } from 'axios';

import { getValue } from '../utils/storage.util';


const BASE_URL = "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/";
const token = getValue("token");

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (false) {
            return config;
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

type Httpmethod = "GET" | "POST" | "PUT" | "DELETE";

const callApi = async<T>(method: Httpmethod, url: string, data?: object) => {
    try {
        const response = await axiosInstance.request<T>({
            method,
            url,
            data,
        });
        return response.data;
    } catch (error: any) {
        if (error.response.status === HttpStatusCode.Unauthorized) {
            console.log("Unauthorized");
        }
        throw error;
    }
}

export { callApi };
