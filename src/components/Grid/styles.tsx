import { Box, styled } from "@mui/material";

export const StyledGrid = styled(Box)(() => ({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1920px',
    margin: '0 auto'
}))