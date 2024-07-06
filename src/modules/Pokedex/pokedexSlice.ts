import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchPokedexData } from './pokedexThunk';
import { FIRTS_GEN_POKEMONS_COUNT } from '../../constants';
import { Pokedex } from './types';

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    pokedex: {} as Pokedex,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokedexData.fulfilled, (state, action: PayloadAction<Pokedex>) => {
      state.pokedex = {
        ...action.payload,
        count: FIRTS_GEN_POKEMONS_COUNT,
        results: action.payload.results.map((item) => {
          const parts = item.url.split('/');
          const id = parts[parts.length - 2];

          return { ...item, id };
        })
      };
    });
  }
});

export default pokedexSlice.reducer;