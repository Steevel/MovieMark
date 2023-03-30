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

    //Get Movies by genres/search query
    getMovies: builder.query({
      query: ({ currentGenreId, searchQuery, page }) => {
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        return `discover/movie?with_genres=${currentGenreId}&page=${page}&api_key=${tmdbApiKey}`;
      },
    }),

    //Get Movie
    getMovie: builder.query({
      query: (id) => ({
        url: `movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
        method: 'GET',
      }),
    }),

    //Get Similar Movies
    getSimilarMovies: builder.query({
      query: (id) => ({
        url: `movie/${id}/similar?api_key=${tmdbApiKey}`,
      }),
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery, useGetMovieQuery, useGetSimilarMoviesQuery } = tmdbApi;
