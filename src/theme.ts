import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#0e387a",
    },
    secondary: {
      main: "#9fafca",
    },
  },
  typography:{fontFamily:'Libre Franklin'}
});
theme = responsiveFontSizes(theme)
export default theme;