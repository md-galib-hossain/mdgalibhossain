import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#203912",
      light : '#d9e9d0'

    },
    secondary: {
      main: "#0a1306",
      light : '#D5E9D5'
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides:{
        root:{
            padding : "8px 24px"
        }
      }
    },
    MuiContainer:{
        defaultProps : {
            maxWidth : "lg"
        }
    }
  },
  typography:{
    body1 :{
        color : "#101F0A"
    }
  }
});

theme.shadows[1] = "0px 5px 22px lightgray"