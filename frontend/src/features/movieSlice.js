import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    currentGenreId: 28,
  },
  reducers: {
    selectedGenre: (prevState, action) => {
      prevState.currentGenreId = action.payload;
    },
  },
});

export const { selectedGenre } = movieSlice.actions;

export default movieSlice.reducer;
