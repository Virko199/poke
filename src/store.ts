import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import pokedexReducer from "./modules/Pokedex/pokedexSlice";
import pokemonReducer from "./modules/Pokemon/pokemonSlice";

const createStore = (options?: ConfigureStoreOptions["preloadedState"]) =>
  configureStore({
    reducer: {
      pokedex: pokedexReducer,
      pokemon: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    ...options,
  });

export const store = createStore();
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
