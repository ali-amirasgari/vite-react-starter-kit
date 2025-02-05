"use client";

import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#120563",
    },
    secondary: {
      main: "#6262FF",
    },
    success: {
      main: "#1C6F67",
    },
    warning: {
      main: "#BD1010",
    },
    ...palette,
  },
  typography: {
    fontFamily: "Vazir",
    h1: {
      fontSize: "36px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "12px",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "12px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 700,
    },
    caption: {
      fontSize: "14px",
      fontWeight: 400,
    },
    button: {
      fontSize: "16px",
      fontWeight: 500,
    },
  },
});

export default theme;
