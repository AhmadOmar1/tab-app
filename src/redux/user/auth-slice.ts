import { Middleware, createSelector, createSlice } from "@reduxjs/toolkit";
import { getValue, removeValue, storeValue } from "../../utils/storage.util";
import { User } from "../../models/user";

type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: getValue("token") || null,
};

export const AuthSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      storeValue("token", action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      removeValue("token");
    },
  },
});

export default AuthSlice.reducer;
export const { login, logout } = AuthSlice.actions;
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user;
export const selectCurrentToken = (state: { auth: AuthState }) => state.auth.token;
export const selectIsLoggedIn = createSelector(selectCurrentToken, token => !!token);
export const selectTokenExpiration = createSelector(selectCurrentToken, token => !token ? null : JSON.parse(atob(token.split('.')[1])).exp);
export const isTokenExpired = createSelector(selectTokenExpiration, () => Math.floor(new Date().getTime() / 1000), (exp, currentTime) => {
  return exp !== null && currentTime > exp;
});

export const showAlert = (message: string, severity: 'success' | 'info' | 'warning' | 'error') => ({
  type: 'SHOW_ALERT',
  payload: { message, severity },
});

let intervalStarted: any = false;
export const authMiddleware: Middleware = (store) => (next) => (action) => {
  const isLoggedIn = selectIsLoggedIn(store.getState());
  if (!intervalStarted && isLoggedIn) {
    intervalStarted = setInterval(() => {
      if (isTokenExpired(store.getState())) {
        store.dispatch(logout());
        store.dispatch(showAlert('Your Session has been expired', 'warning'));
        location.href = "/login";
        clearInterval(intervalStarted);
      }
    }, 5000);
  } else if (!isLoggedIn) {
    clearInterval(intervalStarted);
  }
  return next(action);
};
