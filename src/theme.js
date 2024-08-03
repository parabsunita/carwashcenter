// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#081e36", // Blue
    },
    secondary: {
      main: "#de9f2b", // Yellow
    },
    primary1: {
      main: "#1c395d", // Custom primary color
    },
    background: {
      default: "#ffffff", // White
    },
    custom: {
      apache: "#d9b165",
      firefly: "#0d1e34",
      cello: "#ffffff",
      astronaut: "#2a5279",
      flint: "#6b6559",
      kabul: "#564c3e",
      limedSpruce: "#313d46",
      regentGray: "#8294a2",
      hoki: "#6684a4",
      hawaiianTan: "#915c16",
      signup_Button :"#1a3675",
      dashboard_des:"#344662",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h6: {
      color: "#081e36", 
    },
  },
});

export default theme;
