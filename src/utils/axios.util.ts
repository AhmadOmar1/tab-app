import axios, { AxiosResponse } from "axios";
import { getValue } from "./storage.util";
import { TOKEN_KEY } from "./token.util";

const BASE_URL = "";
type HTTPMethod = 'get' | 'post' | 'put' | 'delete';
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getValue(TOKEN_KEY);
        if (!token) {
            return config;
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const axiosCall = async <T>(url: string, method: HTTPMethod, data?: object): Promise<AxiosResponse<T>> => {
    try {
        return await axios.request<T>({ url, method, data });
    } catch (error) {
        throw error;
    }
};

