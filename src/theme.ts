import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#B4B8B2",
    },
    secondary: {
      main: "#808000",
    },
  },
  typography:{fontFamily:'Libre Franklin'}
});
theme = responsiveFontSizes(theme)
export default theme;