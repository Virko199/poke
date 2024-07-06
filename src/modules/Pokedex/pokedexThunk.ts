import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokedex } from '../../services/responces';

export const fetchPokedexData = createAsyncThunk(
  'pokedex/fetchPokedexData',
  async (url: string) => {
    try {
      const response = await fetchPokedex(url);
      return response;
    } catch (err) {
      return console.error(err);
    }
  }
);