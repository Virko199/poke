import { StyledPokemonCard, StyledPokemonImg, StyledPokemonName } from "./styles";

export const  PokemonCard = ({ pokemon, onClick }: {pokemon: {name: string; image: string;}; onClick?: React.MouseEventHandler<HTMLDivElement>}) =>
    <StyledPokemonCard onClick={onClick}>
      <StyledPokemonImg src={pokemon.image} alt={pokemon.name} />
      {Boolean(pokemon.name) && <StyledPokemonName>{pokemon.name}</StyledPokemonName>}
    </StyledPokemonCard>