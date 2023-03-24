import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ALL_CATEGORY = 'shows/GET_ALL_CATEGORY';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${GET_ALL_CATEGORY}/fulfilled`:
      return action.payload;
    default: return state;
  }
}

export const getAllCategories = createAsyncThunk(GET_ALL_CATEGORY, async () => {
  const getCategoryUrl = 'https://api.themoviedb.org/3/genre/tv/list';
  const response = await fetch(getCategoryUrl,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWE0NGY4ODQ1ZjAxZDEwMjA4Y2M4OGY1ZDQxZjQzNiIsInN1YiI6IjY0MTljZWFmNTY5MGI1MDEwMTYzYjAwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mma1ugVX_egItAagz_22PfRbFsSBnZp7vpCirBWvsys',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  const result = await response.json();
  return result.genres;
});
