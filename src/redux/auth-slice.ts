import { createSlice } from "@reduxjs/toolkit";
import { getValue, removeValue, storeValue } from "../utils/storage.util";
import { User } from "../models/user";

type AppState = {
  user: User | null;
  token: string | null;
};

const initialState: AppState = {
  user: null,
  token: getValue("token") || null ,
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
      removeValue("token");
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
