import { isExpired, decodeToken } from "react-jwt";
import { getValue } from "./storage.util";

export const TOKEN_KEY = "token";

export const getDecodedToken = () => {
    let token = getValue(TOKEN_KEY);
    if (!token) {
        return null;
    }
    return decodeToken(token)
};

export const isSessionExpired = () => {
    let token = getValue(TOKEN_KEY);
    if (!token || isExpired(token)) {
        return true;
    }
    return false;
};

export const isLoggedIn = () => {
    if (getValue(TOKEN_KEY)) {
        return true;
    }
    return false;
}

export function handleIsLoggedIn(navigate: any) {
    if (isLoggedIn()) {
        navigate('/home');
    }
}
