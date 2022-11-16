import { Box } from "@mui/material";
import styled from "@mui/material/styles/styled";

export const MenuComponentBox = styled(Box)(({theme}) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '75%',
  },
}))