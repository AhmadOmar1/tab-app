import { callApi } from "../apisConfig";

const LoginUrl = "api/auth/authenticate";

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
      const response = await callApi<LoginResponse>('POST', LoginUrl, data);
      const token = response.authentication;
      const userType = response.userType;
  
      const [headerEncoded, tokenPayloadEncoded] = token.split('.');
  
      const tokenPayload = JSON.parse(atob(tokenPayloadEncoded));
  
      const expirationTime = tokenPayload.exp; 
  
      return {
        token,
        userType,
        user: tokenPayload,
        expirationTime,
      };
    } catch (error) {
      throw error;
    }
  };
  