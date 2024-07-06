import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchPokedexData } from "./pokedexThunk";
import { Grid } from "../../components/Grid";
import { PokemonCard } from "../../components/PokemonCard";
import Pagination from "@mui/material/Pagination/Pagination";
import { StyledMainTitle, StyledPaginationWrap } from "./styles";
import { useNavigate } from "react-router-dom";
import { FIRTS_GEN_POKEMONS_COUNT, ITEMS_PER_PAGE } from "../../constants";

export const Pokedex = () => {
    const { pokedex } = useAppSelector(state => state.pokedex);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(fetchPokedexData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"))
    }, []);

    const pagesCount = Math.round(FIRTS_GEN_POKEMONS_COUNT / ITEMS_PER_PAGE);

    return (
      <>
        <StyledMainTitle variant="h1">
          Pokedex <img width="100px" src={`${process.env.PUBLIC_URL}/assets/25.png`} alt="Picachu" />
        </StyledMainTitle>
        <Grid>
          {pokedex?.results?.map((item) =>
            <PokemonCard
                onClick={() => {
                    navigate(`pokemon/${item.id}`)
                }}
                key={item.id}
                pokemon={{image: `${process.env.PUBLIC_URL}/assets/${item.id}.png`, name: item.name}}
            />)}
        </Grid>
        <StyledPaginationWrap>
        <Pagination
            count={pagesCount}
            onChange={(_, page) => {
                const offset = page === pagesCount ? FIRTS_GEN_POKEMONS_COUNT - ITEMS_PER_PAGE : ((page * ITEMS_PER_PAGE) - ITEMS_PER_PAGE);          
                dispatch(fetchPokedexData(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`))
            }}
        />
        </StyledPaginationWrap>
      </>
    )
  }