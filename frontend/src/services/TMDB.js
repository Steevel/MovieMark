import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
//console.log(tmdbApiKey);

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
  }),
});

export const { useGetGenresQuery } = tmdbApi;
