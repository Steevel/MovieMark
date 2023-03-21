import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    //Get Movie Genres
    getGenres: builder.query({
      query: () => ({
        url: `genre/movie/list?api_key=${tmdbApiKey}`,
        method: 'GET',
      }),
    }),

    //Get Movies by genres
    getMovies: builder.query({
      query: ({ currentGenreId }) => ({
        url: `discover/movie?with_genres=${currentGenreId}&api_key=${tmdbApiKey}`,
        method: 'GET',
      }),
    }),

    //Get Movie
    getMovie: builder.query({
      query: (id) => ({
        url: `movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery, useGetMovieQuery } = tmdbApi;
