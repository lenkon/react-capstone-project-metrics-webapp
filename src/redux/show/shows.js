import { createAsyncThunk } from '@reduxjs/toolkit';

const UPDATE_SHOW = 'shows/UPDATE_SHOW';
const GET_SHOW = 'shows/GET_SHOW';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${GET_SHOW}/fulfilled`:
      return action.payload;
    case UPDATE_SHOW:
      return action.payload;
    default: return state;
  }
}

export const fetchShow = createAsyncThunk(GET_SHOW, async (id) => {
  const getShowUrl = `https://api.themoviedb.org/3/discover/tv?with_genres=${id}`;
  const response = await fetch(getShowUrl,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWE0NGY4ODQ1ZjAxZDEwMjA4Y2M4OGY1ZDQxZjQzNiIsInN1YiI6IjY0MTljZWFmNTY5MGI1MDEwMTYzYjAwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mma1ugVX_egItAagz_22PfRbFsSBnZp7vpCirBWvsys',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  const res = await response.json();
  return res.results;
});

export function updateShow(obj) {
  return { type: UPDATE_SHOW, payload: obj };
}
