import { createSlice } from "@reduxjs/toolkit";
import { getValue, storeValue } from "../utils/storage.util";

type Theme = 'light' | 'dark';

const initialState: Theme = getValue('theme') as Theme || 'light';

export const ThemeSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      storeValue('theme',state === 'light' ? 'dark' : 'light');
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
