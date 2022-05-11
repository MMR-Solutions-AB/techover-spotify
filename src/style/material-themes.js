import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const mainTheme = createTheme({
  palette: {
    background: {
      paper: '#121212',
      default: '#fff',
    },

    text: {
      primary: '#fff',
      secondary: '#b3b3b3',
    },

    primary: {
      main: '#1db954',
      light: '#1ed760',
      dark: '#3B5249',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default responsiveFontSizes(mainTheme);
