import { callApi } from "./ApisConfig";

const LoginUrl = "auth/authenticate";

type LoginRequest = {
    username: string;
    password: string;
};

type LoginResponse = {
    authentication: string;
    userType: string;
};

export const login = async (data: LoginRequest) => {
    try {
        const response = await callApi<LoginResponse>("POST", LoginUrl, data);
        const token = response.authentication;
        const userType = response.userType;  
        const [, tokenPayloadEncoded] = token.split('.');
        const userObj = JSON.parse(atob(tokenPayloadEncoded));        
        return {
            token,
            userType,
            user: userObj
        };

    } catch (error) {
        throw error;
    }
};