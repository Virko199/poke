import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemon } from '../../services/responces';

export const fetchPokmonData = createAsyncThunk(
  'pokemon/fetchPokemonData',
  async (url: string) => {
    try {
      const response = await fetchPokemon(url);
      return response;
    } catch (err) {
      return console.error(err);
    }
  }
);