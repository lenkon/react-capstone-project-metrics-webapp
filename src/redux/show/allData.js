import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ALL_DATA = 'shows/GET_ALL_DATA';

export default function reducer(state = [], action) {
  switch (action.type) {
    case `${GET_ALL_DATA}/fulfilled`:
      return action.payload;
    default: return state;
  }
}

export const getAllData = createAsyncThunk(GET_ALL_DATA, async (id) => {
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
