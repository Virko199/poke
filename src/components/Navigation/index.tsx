import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import { StyledLink } from "./styles";

type Props = {
    path: Array<{
        path: string;
        label: string;
    }>
}
export const Navigation = ({path}: Props) =>
    <Breadcrumbs sx={{padding: "40px"}} aria-label="breadcrumb">
        {path.map(({path, label}, index: number) =>
            <StyledLink
                style={{ color: '#333', textDecoration: 'none'}}
                key={index}
                color="inherit"
                to={path}
            >
                {label}
            </StyledLink>
        )}
    </Breadcrumbs>