// src/theme.js
import { createTheme } from "@mui/material/styles";
import '../src/css/Font.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#081e36", // Blue
    },
    secondary: {
      main: "#e46400", // Yellow
    },
    heading1: {
      main: "#081e36", // Custom color for heading1
    },
    primary1: {
      main: "#1c395d", // Custom primary color
    },
    background: {
      default: "#f5f6fb", // White
    },
    custom: {
      apache: "#ff8c00",
      firefly: "#0d1e34",
      cello: "#ffffff",
      astronaut: "#2a5279",
      flint: "#6b6559",
      kabul: "#564c3e",
      limedSpruce: "#313d46",
      regentGray: "#8294a2",
      hoki: "#6684a4",
      hawaiianTan: "#915c16",
      signup_Button: "#1a3675",
      dashboard_des: "#344662",
      heading1:'#004897'
    },
  },
  typography: {
    fontFamily: "Satoshi-Variable, sans-serif", 
    h6: {
      fontFamily: "Satoshi-Variable, sans-serif", 
      color: "#081e36", 
    },
    h5:{
      color: "#081e36",
      fontWeight:"700",
    },
    h4:{
    color:"#081e36",
    },
    body1: {
      fontFamily: "Satoshi-Variable, sans-serif", 
    },
    customFontFamily: {
      fontFamily: "Satoshi-Variable, sans-serif", 
    },
  },
});

export default theme;
