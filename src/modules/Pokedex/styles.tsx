import { Box, Typography, styled } from "@mui/material";

export const StyledPaginationWrap = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px'
}))

export const StyledMainTitle = styled(Typography)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    maxWidth: '1920px', 
    margin: '0 auto',
    padding: '0 25px',
    fontSize: '60px'
}))