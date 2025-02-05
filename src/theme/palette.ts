import { PaletteOptions } from "@mui/material";
import "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    primary100: Palette["primary"];
    primary200: Palette["primary"];
    primary300: Palette["primary"];
    primary400: Palette["primary"];
    primary500: Palette["primary"];
    primary600: Palette["primary"];

    secondary100: Palette["secondary"];
    secondary200: Palette["secondary"];
    secondary300: Palette["secondary"];
    secondary400: Palette["secondary"];
    secondary500: Palette["secondary"];
    secondary600: Palette["secondary"];

    third100: Palette["secondary"];
    third200: Palette["secondary"];
    third300: Palette["secondary"];
    third400: Palette["secondary"];
    third500: Palette["secondary"];
    third600: Palette["secondary"];

    gray100: Palette["secondary"];
    gray200: Palette["secondary"];
    gray300: Palette["secondary"];
    gray400: Palette["secondary"];
    gray500: Palette["secondary"];
    gray600: Palette["secondary"];

    confrimation100: Palette["success"];
    confrimation200: Palette["success"];
    confrimation300: Palette["success"];
    confrimation400: Palette["success"];
    confrimation500: Palette["success"];
    confrimation600: Palette["success"];

    warning100: Palette["warning"];
    warning200: Palette["warning"];
    warning300: Palette["warning"];
    warning400: Palette["warning"];
    warning500: Palette["warning"];
    warning600: Palette["warning"];
  }
  interface PaletteOptions {
    primary100: PaletteOptions["primary"];
    primary200: PaletteOptions["primary"];
    primary300: PaletteOptions["primary"];
    primary400: PaletteOptions["primary"];
    primary500: PaletteOptions["primary"];
    primary600: PaletteOptions["primary"];

    secondary100: PaletteOptions["secondary"];
    secondary200: PaletteOptions["secondary"];
    secondary300: PaletteOptions["secondary"];
    secondary400: PaletteOptions["secondary"];
    secondary500: PaletteOptions["secondary"];
    secondary600: PaletteOptions["secondary"];

    third100: PaletteOptions["secondary"];
    third200: PaletteOptions["secondary"];
    third300: PaletteOptions["secondary"];
    third400: PaletteOptions["secondary"];
    third500: PaletteOptions["secondary"];
    third600: PaletteOptions["secondary"];

    gray100: PaletteOptions["secondary"];
    gray200: PaletteOptions["secondary"];
    gray300: PaletteOptions["secondary"];
    gray400: PaletteOptions["secondary"];
    gray500: PaletteOptions["secondary"];
    gray600: PaletteOptions["secondary"];

    confrimation100: PaletteOptions["success"];
    confrimation200: PaletteOptions["success"];
    confrimation300: PaletteOptions["success"];
    confrimation400: PaletteOptions["success"];
    confrimation500: PaletteOptions["success"];
    confrimation600: PaletteOptions["success"];

    warning100: PaletteOptions["warning"];
    warning200: PaletteOptions["warning"];
    warning300: PaletteOptions["warning"];
    warning400: PaletteOptions["warning"];
    warning500: PaletteOptions["warning"];
    warning600: PaletteOptions["warning"];
  }
}

const palette: PaletteOptions = {
  primary100: {
    main: "#120563",
  },
  primary200: {
    main: "#413782",
  },
  primary300: {
    main: "#675F9B",
  },
  primary400: {
    main: "#AEA9D0",
  },
  primary500: {
    main: "#D0CDE0",
  },
  primary600: {
    main: "#F6F5F9",
  },

  secondary100: {
    main: "#3B3BFF",
  },
  secondary200: {
    main: "#6262FF",
  },
  secondary300: {
    main: "#8181FF",
  },
  secondary400: {
    main: "#9A9AFF",
  },
  secondary500: {
    main: "#AEAEFF",
  },
  secondary600: {
    main: "#EFEFFF",
  },

  third100: {
    main: "#FF9426",
  },
  third200: {
    main: "#FFA951",
  },
  third300: {
    main: "#FFBA74",
  },
  third400: {
    main: "#FFC890",
  },
  third500: {
    main: "#FFD3A6",
  },
  third600: {
    main: "#FFF6ED",
  },

  gray100: {
    main: "#222323",
  },
  gray200: {
    main: "#5C5C5C",
  },
  gray300: {
    main: "#A7A7A7",
  },
  gray400: {
    main: "#D1D3D4",
  },
  gray500: {
    main: "#F5F5F5",
  },
  gray600: {
    main: "#FDFDFD",
  },

  confrimation100: {
    main: "#1C6F67",
  },
  confrimation200: {
    main: "#498C85",
  },
  confrimation300: {
    main: "#6DA39D",
  },
  confrimation400: {
    main: "#8AB5B1",
  },
  confrimation500: {
    main: "#DCE7E6",
  },
  confrimation600: {
    main: "#F8FAFA",
  },

  warning100: {
    main: "#BD1010",
  },
  warning200: {
    main: "#CA4040",
  },
  warning300: {
    main: "#D56666",
  },
  warning400: {
    main: "#DD8585",
  },
  warning500: {
    main: "#E49D9D",
  },
  warning600: {
    main: "#FAEBEB",
  },
};

export default palette;
