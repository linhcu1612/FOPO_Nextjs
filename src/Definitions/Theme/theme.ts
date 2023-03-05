import {red} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  },
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
