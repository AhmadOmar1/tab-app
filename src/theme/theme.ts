import { createTheme, ThemeOptions } from "@mui/material/styles";

interface ThemeSpecifics {
  mode: "light" | "dark";
  backgroundPaper: string;
  textPrimary: string;
  primaryContrastText: string;
  primaryLight: string;
  primaryMain: string;
  primaryDark: string;
  secondaryLight: string;
  secondaryMain: string;
  secondaryDark: string;
  errorMain: string;
}

const commonComponents: ThemeOptions["components"] = {
  MuiTypography: {
    styleOverrides: {
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      root: {
        fontFamily: "Montserrat",
        fontWeightBold: 700,
        fontWeightLight: 300,
        fontWeightRegular: 400,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 700,
        textTransform: "none",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
};

const createAppTheme = ({
  mode,
  backgroundPaper,
  textPrimary,
  primaryContrastText,
  primaryLight,
  primaryMain,
  primaryDark,
  secondaryLight,
  secondaryMain,
  secondaryDark,
  errorMain,
}: ThemeSpecifics) =>
  createTheme({
    palette: {
      mode,
      primary: {
        contrastText: primaryContrastText,
        light: primaryLight,
        main: primaryMain,
        dark: primaryDark,
      },
      secondary: {
        light: secondaryLight,
        main: secondaryMain,
        dark: secondaryDark,
      },
      success: {
        light: "#268C3E",
        main: "#06711F",
        dark: "#055A19",
      },
      error: {
        light: "#A17C73",
        main: errorMain,
        dark: "#AE0806",
      },
      warning: {
        light: "#E9B449",
        main: "#E4A11C",
        dark: "#B68116",
      },
      background: {
        paper: backgroundPaper,
      },
      text: {
        primary: textPrimary,
      },
    },
    components: commonComponents,
  });

export const lightTheme = createAppTheme({
  mode: "light",
  backgroundPaper: "#f2f2f3",
  textPrimary: "#111111",
  primaryContrastText: "#fff",
  primaryLight: "#222",
  primaryMain: "#e76f51",
  primaryDark: "#AE4806",
  secondaryLight: "#333",
  secondaryMain: "#222",
  secondaryDark: "#e76f51",
  errorMain: "#AE0806",
});

export const darkTheme = createAppTheme({
  mode: "dark",
  backgroundPaper: "#333",
  textPrimary: "#fff",
  primaryContrastText: "#444",
  primaryLight: "#fff",
  primaryMain: "#eee",
  primaryDark: "#e76f51",
  secondaryLight: "#fff",
  secondaryMain: "#AE4806",
  secondaryDark: "#e76f51",
  errorMain: "#e76f51",
});
