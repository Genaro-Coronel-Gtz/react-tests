/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { statusTypes } from "helpers/store";
import { getPokemons } from "./actions";

export const getPokemonsAction = createAsyncThunk(
  "pokemon/getPokemonsAction",
  async () => {
    const response = await getPokemons();

    return response;
  }
);

const profileSlice = createSlice({
  name: "pokemon",
  initialState: {
    status: statusTypes.initial,
    pokemons: [],
  },
  reducers: {},
  extraReducers: {
    [getPokemonsAction.pending]: (state) => {
      state.status = statusTypes.loading;
    },
    [getPokemonsAction.fulfilled]: (state, action) => {
      state.pokemons = action.payload || state.pokemons;
      state.status = statusTypes.succeeded;
    },
  },
});

export const selectPokemonStatus = (state) => state.pokemon.status;
export const selectPokemon = (state) => state.pokemon.pokemons;

export default profileSlice.reducer;
