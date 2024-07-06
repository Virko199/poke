import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchPokmonData } from './pokemonThunk';
import { Pokemon } from './types';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: {} as Pokemon,
  },
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPokmonData.fulfilled, (state, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload
    })
  },
});

export const { setPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;