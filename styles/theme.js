import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Josefin Slab', sans-serif",
    h1: {
      fontFamily: "'Monoton', 'Arial', sans-serif",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        margin: '.7rem',
      },
      containedPrimary: {
        color: 'white',
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'secondary',
    },
  },
});

export default theme;
