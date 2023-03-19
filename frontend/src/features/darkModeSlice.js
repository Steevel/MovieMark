import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
};

export const darkModeSlice = createSlice({
  name: 'darkModeSlice',
  initialState,
  reducers: {
    toggleDarkMode: (prevState) => {
      prevState.darkMode = !prevState.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(prevState.darkMode));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
