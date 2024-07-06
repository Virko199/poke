import { Box, Typography, styled } from "@mui/material";

export const StyledPokemonWrap = styled(Box)(() => ({
    display: 'flex',
    gap: '50px',
    flexWrap: 'wrap',
    maxWidth: '650px',
    justifyContent: 'center',
    padding: '0 20px'
}))

export const StyledTitle = styled(Typography)(() => ({
    textTransform: "capitalize", 
    margin: '40px 0'
}))

export const StyledPokemonInfo = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    justifyContent: 'space-between',
    maxWidth: '300px',
}))