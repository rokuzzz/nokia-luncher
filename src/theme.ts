import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#124191',
    },
    secondary: {
      main: '#306AE6',
    },
    error: {
      main: red.A400,
    },
  },
  zIndex: {
    appBar: 1251,
    modal: 1250,
  },
});

export default theme;