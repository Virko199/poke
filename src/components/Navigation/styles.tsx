import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(() => ({
    color: '#333',
    textDecoration: 'none',
    ':hover': {
        textDecoration: 'underline'
    }
}))
