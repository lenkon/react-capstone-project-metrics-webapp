import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_CATEGORY = 'shows/GET_CATEGORY';
const UPDATE_CATEGORY = 'shows/UPDATE_CATEGORY';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${GET_CATEGORY}/fulfilled`:
      return action.payload;
    case UPDATE_CATEGORY:
      return action.payload;
    default: return state;
  }
}

export const getCategory = createAsyncThunk(GET_CATEGORY, async () => {
  const getCategoryUrl = 'https://api.themoviedb.org/3/genre/tv/list';
  const response = await fetch(getCategoryUrl,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWE0NGY4ODQ1ZjAxZDEwMjA4Y2M4OGY1ZDQxZjQzNiIsInN1YiI6IjY0MTljZWFmNTY5MGI1MDEwMTYzYjAwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mma1ugVX_egItAagz_22PfRbFsSBnZp7vpCirBWvsys',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  const res = await response.json();
  return res.genres;
});

export function updateCategory(obj) {
  return { type: UPDATE_CATEGORY, payload: obj };
}
