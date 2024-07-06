import { getApiResponse } from "./api"

export const fetchPokedex = async (url: string) => {
    return await getApiResponse(url);
}

export const fetchPokemon = async (url: string) => {
    return await getApiResponse(url);
}