import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchPokmonData } from "./pokemonThunk";
import { Typography } from "@mui/material";
import { StyledPokemonInfo, StyledPokemonWrap, StyledTitle } from "./styles";
import { Navigation } from "../../components/Navigation";

export const Pokemon = () => {
    const { pokemon } = useAppSelector(state => state.pokemon);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const part = window.location.pathname.split('/');
        
        dispatch(fetchPokmonData(`https://pokeapi.co/api/v2/pokemon/${part[part.length - 1]}/`))
    }, []);

    const pokemonData = useMemo(() => {
        const getStat = (stat: string) =>
            pokemon.stats?.find((item) => item.stat.name === stat )?.base_stat;

        return [
            {label: 'Types', value: pokemon.types?.map((item) => item.type.name).join(', ')},
            {label: 'Height', value: pokemon.height},
            {label: 'Weight', value: pokemon.weight},
            {label: 'HP', value: getStat('hp')},
            {label: 'Attack', value: getStat('attack')},
            {label: 'Defense', value: getStat('defense')},
        ]
    }, [pokemon]);

    return (
        <>
            <Navigation path={[{label: 'home', path: '/'}, {label: pokemon.name, path: window.location.pathname}]} />
            <StyledPokemonWrap>
                <img width="300px" src={`${process.env.PUBLIC_URL}/assets/${pokemon.id}.png`} alt={pokemon.name} />
                <div>
                    <StyledTitle variant="h4">{pokemon.name}</StyledTitle>
                    {pokemonData?.map(({value, label}) =>
                        <StyledPokemonInfo key={label}>
                            <Typography>{label}</Typography> <Typography>{value}</Typography>
                        </StyledPokemonInfo>)}
                </div>
            </StyledPokemonWrap>
        </>
    )
}