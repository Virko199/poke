import { Box, Typography, styled } from "@mui/material";

export const StyledPokemonCard = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px 10px',
    border: '1px solid transparent',
    borderRadius: '10px',
    transition: 'box-shadow 1s easy-in, transform 1s ease-in-out',
    transform: 'scale(1)',
    boxShadow: '0 1px 3px rgba(23, 23, 23, 0.24)',
    cursor: 'pointer',
    background: '#fff',
    ':hover': {
        boxShadow: '7px 7px 12px 4px rgba(23, 23, 23, 0.24)',
        transform: 'scale(1.05)',
    }
}))

export const StyledPokemonImg = styled('img')(() => ({
    width: '300px'
}))

export const StyledPokemonName = styled(Typography)(() => ({
    textTransform: 'capitalize'
}))