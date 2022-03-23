/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { statusTypes } from "helpers/store";
import { getMovies, getMovieDetail } from "./actions";

export const getMoviesAction = createAsyncThunk(
  "movie/getMoviesAction",
  async () => {
    const response = await getMovies();

    return response;
  }
);

export const getMovieDetailAction = createAsyncThunk(
  "movie/getMovieDetailAction",
  async (id) => {
    const response = await getMovieDetail(id);

    return response;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    status: statusTypes.initial,
    movies: [],
    detail: null,
  },
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.status = statusTypes.loading;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload || state.movies;
      state.status = statusTypes.succeeded;
    },
    [getMovieDetail.pending]: (state) => {
      state.status = statusTypes.loading;
    },
    [getMovieDetail.fulfilled]: (state, action) => {
      state.detail = action.payload || state.detail;
      state.status = statusTypes.succeeded;
    },
  },
});

export const selectMovieStatus = (state) => state.movies.status;
export const selectMovies = (state) => state.movies.movies;
export const selectDetail = (state) => state.movies.detail;

export default movieSlice.reducer;
