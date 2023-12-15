import { createSlice } from "@reduxjs/toolkit";
import { getValue, storeValue } from "../utils/storage.util";

type Theme = 'light' | 'dark';
type AppState = {
  theme: Theme;
  isLoggedIn: boolean;
};

const initialState: AppState = {
  theme: getValue('theme') as Theme || 'light',
  isLoggedIn: getValue("isLoggedIn") === "true" || false,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      storeValue('theme', state.theme);
    },
    login: (state) => {
      state.isLoggedIn = true;
      storeValue("isLoggedIn", "true");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      storeValue("isLoggedIn", "false");
    },
  },
});

export const { toggleTheme, login, logout } = AppSlice.actions;

export default AppSlice.reducer;
