import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    currentGenreId: 28,
    searchQuery: '',
  },
  reducers: {
    selectedGenre: (prevState, action) => {
      prevState.currentGenreId = action.payload;
      prevState.searchQuery = '';
    },
    searchQuery: (prevState, action) => {
      prevState.searchQuery = action.payload;
    },
  },
});

export const { selectedGenre, searchQuery } = movieSlice.actions;

export default movieSlice.reducer;
